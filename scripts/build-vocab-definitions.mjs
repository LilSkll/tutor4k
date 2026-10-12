/**
 * Build SPANISH_VOCAB_DEFINITION + ENGLISH_VOCAB_DEFINITION (ru/en/es/de).
 *
 * Strategy:
 * 1) Resolve an English headword (lemma or EN gloss).
 * 2) Fetch a short English definition (Free Dictionary API).
 * 3) Fall back to a compact pedagogical English gloss sentence.
 * 4) Translate EN → ru/es/de via google-translate-api-x (batched).
 *
 * Run: node scripts/build-vocab-definitions.mjs
 * Optional: COURSE=spanish|english|all (default all)
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { spawnSync } from "child_process";
import translate from "google-translate-api-x";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const COURSE = (process.env.COURSE || "all").toLowerCase();
const CHUNK = 30;
const DICT_CONCURRENCY = 8;
/** Set USE_DICT=1 to query Free Dictionary (slow). Default: gloss-based EN defs. */
const USE_DICT = process.env.USE_DICT === "1";

const CACHE_PATH = path.join(
  ROOT,
  "src/config/courses/shared/vocab-definition-cache.json",
);

function loadCache() {
  try {
    return JSON.parse(fs.readFileSync(CACHE_PATH, "utf8"));
  } catch {
    return { spanish: {}, english: {} };
  }
}

function saveCache(cache) {
  fs.mkdirSync(path.dirname(CACHE_PATH), { recursive: true });
  fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2) + "\n");
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function esc(s) {
  return String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function cleanHeadword(raw) {
  return String(raw || "")
    .trim()
    .toLowerCase()
    .replace(/^(el|la|los|las|un|una|unos|unas|the|a|an)\s+/i, "")
    .replace(/\s*\/\s*.*$/, "") // "amarillo / amarilla" → first form
    .replace(/\(.*?\)/g, "")
    .replace(/[.,;:!?¡¿]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function pedagogicalFallback(enGloss, lemma) {
  const g = String(enGloss || lemma || "")
    .trim()
    .replace(/\s+/g, " ");
  if (!g) return "A common vocabulary item.";
  if (/[.!?]$/.test(g) && g.length > 12) return g.slice(0, 180);
  const bare = g.replace(/^to\s+/i, "");
  const verbLike =
    /^to\s+/i.test(g) ||
    /^(open|go|make|do|get|put|take|give|see|know|think|come|want|need|help|learn|study|speak|read|write|eat|drink|sleep|work|play|buy|sell|ask|call|live|feel|look|start|stop|try|use|wait|walk|run|sit|stand|bring|keep|leave|meet|pay|show|tell|turn|understand|watch|wear|be|have|say|find|become|include|continue|allow|add|create|build|move|begin|seem|appear|happen|provide|consider|remember|forget|decide|agree|belong|depend|prefer|enjoy|hate|love|miss|hope|expect|suggest|offer|accept|refuse|choose|change|grow|rise|fall|win|lose|send|receive|arrive|return|travel|visit|stay|cook|clean|wash|drive|fly|swim|sing|draw|paint|listen|hear|smell|taste|touch|cut|break|fix|save|spend|earn|borrow|lend|share|compare|explain|describe|discuss|prepare|practi[sc]e|improve|succeed|fail)\b/i.test(
      bare,
    );
  if (verbLike) {
    return `To ${bare.charAt(0).toLowerCase()}${bare.slice(1)}.`.replace(
      /\.\.$/,
      ".",
    );
  }
  // Short gloss as a compact definition (not "something that means…").
  return `${g.charAt(0).toUpperCase()}${g.slice(1)}.`.slice(0, 180);
}

async function fetchEnDefinition(headword) {
  if (!USE_DICT) return null;
  const key = cleanHeadword(headword);
  if (!key || (key.includes(" ") && key.split(" ").length > 3)) return null;
  const candidates = [key];
  if (key.includes(" ")) candidates.push(key.split(" ")[0]);

  for (const cand of candidates) {
    try {
      const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(cand)}`;
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 2500);
      const res = await fetch(url, { signal: ctrl.signal });
      clearTimeout(timer);
      if (!res.ok) continue;
      const data = await res.json();
      const def = data?.[0]?.meanings?.[0]?.definitions?.[0]?.definition;
      if (typeof def === "string" && def.trim()) {
        return def.trim().replace(/\s+/g, " ").slice(0, 180);
      }
    } catch {
      // ignore and try next
    }
  }
  return null;
}

async function mapPool(items, concurrency, fn) {
  const results = new Array(items.length);
  let idx = 0;
  async function worker() {
    while (idx < items.length) {
      const i = idx++;
      results[i] = await fn(items[i], i);
    }
  }
  await Promise.all(
    Array.from({ length: Math.min(concurrency, items.length) }, () => worker()),
  );
  return results;
}

async function batchGtx(texts, to) {
  for (let attempt = 0; attempt < 6; attempt++) {
    try {
      const res = await translate(texts, {
        from: "en",
        to,
        forceBatch: true,
        rejectOnPartialFail: false,
      });
      return texts.map((_, i) => {
        const row = Array.isArray(res) ? res[i] : res;
        const text = row?.text ?? (typeof row === "string" ? row : "");
        const out = String(text ?? "").trim();
        if (!out || /MYMEMORY|INVALID|QUERY LENGTH/i.test(out)) return null;
        return out.slice(0, 220);
      });
    } catch (err) {
      const wait = 1200 * (attempt + 1);
      console.warn(`batch ${to} retry: ${err.message}; wait ${wait}ms`);
      await new Promise((r) => setTimeout(r, wait));
    }
  }
  return texts.map(() => null);
}

function dumpLemmas(course) {
  const code =
    course === "spanish"
      ? `import { VOCAB_TOPICS } from "./src/config/vocabulary-topics";
import { SPANISH_VOCAB_GLOSS } from "./src/config/courses/spanish/vocabulary/glosses";
const map = new Map();
for (const t of VOCAB_TOPICS) {
  for (const w of t.words) {
    const key = String(w.word).trim().toLowerCase();
    if (map.has(key)) continue;
    const enGloss = SPANISH_VOCAB_GLOSS.en?.[key] ?? "";
    map.set(key, { lemma: String(w.word).trim(), enGloss, ruGloss: String(w.translation).trim() });
  }
}
process.stdout.write(JSON.stringify([...map.entries()]));`
      : `import { ENGLISH_VOCAB } from "./src/config/courses/english/vocabulary";
import { ENGLISH_VOCAB_GLOSS } from "./src/config/courses/english/vocabulary/glosses";
const map = new Map();
for (const t of ENGLISH_VOCAB) {
  for (const w of t.words) {
    const key = String(w.word).trim().toLowerCase();
    if (map.has(key)) continue;
    const enGloss = ENGLISH_VOCAB_GLOSS.en?.[key] ?? String(w.word).trim();
    const ruGloss = ENGLISH_VOCAB_GLOSS.ru?.[key] ?? String(w.translation).trim();
    map.set(key, { lemma: String(w.word).trim(), enGloss, ruGloss });
  }
}
process.stdout.write(JSON.stringify([...map.entries()]));`;

  const dump = spawnSync("npx", ["tsx", "-e", code], {
    cwd: ROOT,
    encoding: "utf8",
    maxBuffer: 30e6,
  });
  if (dump.status !== 0) {
    console.error(dump.stderr || dump.stdout);
    throw new Error(`Failed to load lemmas for ${course}`);
  }
  return JSON.parse(dump.stdout);
}

function writeDefinitionsFile(course, byLang) {
  const constName =
    course === "spanish" ? "SPANISH_VOCAB_DEFINITION" : "ENGLISH_VOCAB_DEFINITION";
  const comment =
    course === "spanish"
      ? "Short UI-language definitions for Spanish-course vocabulary (key = Spanish lemma)."
      : "Short UI-language definitions for English-course vocabulary (key = English lemma).";
  const outPath = path.join(
    ROOT,
    `src/config/courses/${course}/vocabulary/definitions.ts`,
  );

  const langs = ["ru", "en", "es", "de"];
  const blocks = langs
    .map((lang) => {
      const entries = Object.entries(byLang[lang] || {})
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([k, v]) => `  "${esc(k)}": "${esc(v)}",`)
        .join("\n");
      return `  ${lang}: {\n${entries}\n  },`;
    })
    .join("\n");

  const body = `import type { InterfaceLanguage } from "@/types";

/** ${comment} */
export const ${constName}: Partial<
  Record<InterfaceLanguage, Record<string, string>>
> = {
${blocks}
};
`;
  fs.writeFileSync(outPath, body);
  console.log(`wrote ${outPath}`);
}

async function buildCourse(course, cache) {
  const lemmas = dumpLemmas(course);
  console.log(`\n=== ${course}: ${lemmas.length} lemmas ===`);
  const bucket = cache[course] || (cache[course] = {});

  const needEn = [];
  for (const [key, meta] of lemmas) {
    const row = bucket[key] ?? {};
    bucket[key] = row;
    if (!row.en) needEn.push({ key, meta });
  }

  console.log(
    `EN definitions to resolve: ${needEn.length} (USE_DICT=${USE_DICT ? "1" : "0"})`,
  );
  if (!USE_DICT) {
    for (const { key, meta } of needEn) {
      bucket[key].en = pedagogicalFallback(
        meta.enGloss || meta.lemma,
        meta.lemma,
      );
    }
    saveCache(cache);
    console.log(`EN resolved for ${course} via gloss fallback`);
  } else {
    let done = 0;
    await mapPool(needEn, DICT_CONCURRENCY, async ({ key, meta }) => {
      const head = course === "english" ? meta.lemma : meta.enGloss || meta.lemma;
      const dict = await fetchEnDefinition(head);
      bucket[key].en =
        dict || pedagogicalFallback(meta.enGloss || meta.lemma, meta.lemma);
      done += 1;
      if (done % 40 === 0) {
        process.stdout.write(` ${done}`);
        saveCache(cache);
      }
    });
    saveCache(cache);
    console.log(`\nEN resolved for ${course}`);
  }

  for (const lang of ["ru", "es", "de"]) {
    const pending = [];
    for (const [key] of lemmas) {
      const row = bucket[key];
      if (row?.en && !row[lang]) pending.push({ key, en: row.en });
    }
    console.log(`${lang}: need ${pending.length}`);
    for (const part of chunk(pending, CHUNK)) {
      const texts = part.map((p) => p.en);
      const outs = await batchGtx(texts, lang);
      for (let i = 0; i < part.length; i++) {
        if (outs[i]) bucket[part[i].key][lang] = outs[i];
      }
      saveCache(cache);
      process.stdout.write(".");
      await new Promise((r) => setTimeout(r, 350));
    }
    console.log(`\n${lang} done`);
  }

  const byLang = { ru: {}, en: {}, es: {}, de: {} };
  let missing = 0;
  for (const [key] of lemmas) {
    const row = bucket[key] || {};
    for (const lang of ["ru", "en", "es", "de"]) {
      if (row[lang]) byLang[lang][key] = row[lang];
      else missing += 1;
    }
  }
  writeDefinitionsFile(course, byLang);
  console.log(`${course}: missing cells ${missing}`);
}

async function main() {
  // Ensure dependency available
  try {
    await import("google-translate-api-x");
  } catch {
    console.error("Install google-translate-api-x first (npm i --no-save google-translate-api-x)");
    process.exit(1);
  }

  const cache = loadCache();
  const courses =
    COURSE === "all" ? ["spanish", "english"] : [COURSE];
  for (const c of courses) {
    if (c !== "spanish" && c !== "english") {
      throw new Error(`Unknown COURSE=${c}`);
    }
    await buildCourse(c, cache);
  }
  saveCache(cache);
  console.log("\nAll done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
