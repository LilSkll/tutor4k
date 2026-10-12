/**
 * Build ENGLISH_VOCAB_GLOSS (ru/en/es/de) from English-course catalog.
 * - ru: authored word.translation
 * - en/es/de: translate from Russian via google-translate-api-x
 *
 * Run: node scripts/build-english-vocab-glosses.mjs
 * Requires: npm i --no-save google-translate-api-x
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { spawnSync } from "child_process";
import translate from "google-translate-api-x";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const CACHE_PATH = path.join(
  ROOT,
  "src/config/courses/english/vocabulary/gloss-cache.json",
);
const OUT_PATH = path.join(
  ROOT,
  "src/config/courses/english/vocabulary/glosses.ts",
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

function loadLemmas() {
  const dump = spawnSync(
    "npx",
    [
      "tsx",
      "-e",
      `import { ENGLISH_VOCAB } from "./src/config/courses/english/vocabulary";
const map = new Map();
for (const t of ENGLISH_VOCAB) {
  for (const w of t.words) {
    const key = String(w.word).trim().toLowerCase();
    if (!map.has(key)) map.set(key, String(w.translation).trim());
  }
}
process.stdout.write(JSON.stringify([...map.entries()]));`,
    ],
    { cwd: ROOT, encoding: "utf8", maxBuffer: 20e6 },
  );
  if (dump.status !== 0) {
    console.error(dump.stderr || dump.stdout);
    throw new Error("Failed to load ENGLISH_VOCAB");
  }
  return JSON.parse(dump.stdout);
}

async function main() {
  const lemmas = loadLemmas();
  console.log(`unique lemmas: ${lemmas.length}`);
  const cache = loadCache();

  // Seed / refresh RU from catalog; keep existing en/es/de when present.
  for (const [key, ru] of lemmas) {
    const row = cache[key] ?? {};
    row.ru = ru;
    cache[key] = row;
  }

  const need = { en: [], es: [], de: [] };
  for (const [key, ru] of lemmas) {
    const row = cache[key];
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

  const byLang = { ru: {}, en: {}, es: {}, de: {} };
  let missing = 0;
  for (const [key] of lemmas) {
    const row = cache[key] || {};
    for (const lang of ["ru", "en", "es", "de"]) {
      if (row[lang]) byLang[lang][key] = row[lang];
      else missing += 1;
    }
  }

  const blocks = ["ru", "en", "es", "de"]
    .map((lang) => {
      const entries = Object.entries(byLang[lang])
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([k, v]) => `  "${esc(k)}": "${esc(v)}",`)
        .join("\n");
      return `  ${lang}: {\n${entries}\n  },`;
    })
    .join("\n");

  const body = `import type { InterfaceLanguage } from "@/types";

/** Interface-language glosses for the English course vocabulary (key = English lemma). */
export const ENGLISH_VOCAB_GLOSS: Partial<
  Record<InterfaceLanguage, Record<string, string>>
> = {
${blocks}
};
`;
  fs.writeFileSync(OUT_PATH, body);
  console.log(`wrote ${OUT_PATH}; missing cells ${missing}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
