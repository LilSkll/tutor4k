/**
 * Build SPANISH_VOCAB_GLOSS (en/es/de) from Russian catalog translations.
 * Run: node scripts/build-spanish-vocab-glosses.mjs
 * Requires: npm i --no-save google-translate-api-x
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";
import translate from "google-translate-api-x";

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CACHE_PATH = path.join(
  __dirname,
  "../src/config/courses/spanish/vocabulary/gloss-cache.json",
);
const OUT_PATH = path.join(
  __dirname,
  "../src/config/courses/spanish/vocabulary/glosses.ts",
);
const CHUNK = 35;

function loadCache() {
  try {
    return JSON.parse(fs.readFileSync(CACHE_PATH, "utf8"));
  } catch {
    return {};
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

async function batchGtx(texts, to) {
  for (let attempt = 0; attempt < 6; attempt++) {
    try {
      const res = await translate(texts, {
        from: "ru",
        to,
        forceBatch: true,
        rejectOnPartialFail: false,
      });
      return texts.map((_, i) => {
        const row = Array.isArray(res) ? res[i] : res;
        const text = row?.text ?? (typeof row === "string" ? row : "");
        const out = String(text ?? "").trim();
        if (!out || /MYMEMORY|INVALID|QUERY LENGTH/i.test(out)) return null;
        return out;
      });
    } catch (err) {
      const wait = 1200 * (attempt + 1);
      console.warn(`batch ${to} retry: ${err.message}; wait ${wait}ms`);
      await new Promise((r) => setTimeout(r, wait));
    }
  }
  return texts.map(() => null);
}

async function loadLemmas() {
  // Prefer compiled JSON dump via tsx one-liner file if present; else parse lightly.
  const { spawnSync } = await import("child_process");
  const dump = spawnSync(
    "npx",
    [
      "tsx",
      "-e",
      `import { VOCAB_TOPICS } from "./src/config/vocabulary-topics";
const map = new Map();
for (const t of VOCAB_TOPICS) {
  for (const w of t.words) {
    const key = String(w.word).trim().toLowerCase();
    if (!map.has(key)) map.set(key, String(w.translation).trim());
  }
}
process.stdout.write(JSON.stringify([...map.entries()]));`,
    ],
    { cwd: path.join(__dirname, ".."), encoding: "utf8", maxBuffer: 20e6 },
  );
  if (dump.status !== 0) {
    console.error(dump.stderr || dump.stdout);
    throw new Error("Failed to load VOCAB_TOPICS");
  }
  return JSON.parse(dump.stdout);
}

async function main() {
  const lemmas = await loadLemmas();
  console.log(`unique lemmas: ${lemmas.length}`);
  const cache = loadCache();

  const need = { en: [], es: [], de: [] };
  for (const [key, ru] of lemmas) {
    const row = cache[key] ?? { ru };
    cache[key] = row;
    row.ru = ru;
    for (const lang of ["en", "es", "de"]) {
      if (!row[lang]) need[lang].push({ key, ru });
    }
  }

  for (const lang of ["en", "es", "de"]) {
    const pending = need[lang];
    console.log(`${lang}: need ${pending.length}`);
    for (const part of chunk(pending, CHUNK)) {
      const texts = part.map((p) => p.ru);
      const outs = await batchGtx(texts, lang);
      for (let i = 0; i < part.length; i++) {
        if (outs[i]) cache[part[i].key][lang] = outs[i];
      }
      saveCache(cache);
      process.stdout.write(".");
      await new Promise((r) => setTimeout(r, 400));
    }
    console.log(`\n${lang} done`);
  }

  const en = {};
  const es = {};
  const de = {};
  let missing = 0;
  for (const [key, row] of Object.entries(cache)) {
    if (row.en) en[key] = row.en;
    if (row.es) es[key] = row.es;
    if (row.de) de[key] = row.de;
    if (!row.en || !row.es || !row.de) missing += 1;
  }

  const body = `import type { InterfaceLanguage } from "@/types";

/** Interface-language glosses for Spanish-course vocabulary (key = Spanish lemma). */
export const SPANISH_VOCAB_GLOSS: Partial<
  Record<InterfaceLanguage, Record<string, string>>
> = {
  en: {
${Object.entries(en)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([k, v]) => `  "${esc(k)}": "${esc(v)}",`)
  .join("\n")}
  },
  es: {
${Object.entries(es)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([k, v]) => `  "${esc(k)}": "${esc(v)}",`)
  .join("\n")}
  },
  de: {
${Object.entries(de)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([k, v]) => `  "${esc(k)}": "${esc(v)}",`)
  .join("\n")}
  },
};
`;

  fs.writeFileSync(OUT_PATH, body);
  console.log(`wrote ${OUT_PATH}; missing langs on ${missing} lemmas`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
