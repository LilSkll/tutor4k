/**
 * Fill missing STUDENT_DICTS.de keys by batch-translating EN → DE.
 * Run: node --import tsx scripts/fill-student-de-from-en.mjs
 * Requires: npm i --no-save google-translate-api-x
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import translate from "google-translate-api-x";
import { STUDENT_DICTS } from "../src/lib/i18n/student-dicts.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "../src/lib/i18n/student-de-generated.json");
const DICT_PATH = path.join(__dirname, "../src/lib/i18n/student-dicts.ts");
const CHUNK = 40;

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

async function batchDe(texts) {
  for (let attempt = 0; attempt < 5; attempt++) {
    try {
      const res = await translate(texts, {
        from: "en",
        to: "de",
        forceBatch: true,
        rejectOnPartialFail: false,
      });
      return texts.map((_, i) => {
        const row = Array.isArray(res) ? res[i] : res;
        return String(row?.text ?? "").trim() || null;
      });
    } catch (err) {
      const wait = 1500 * (attempt + 1);
      console.warn(`retry: ${err.message}; wait ${wait}ms`);
      await sleep(wait);
    }
  }
  return texts.map(() => null);
}

async function main() {
  const en = STUDENT_DICTS.en;
  const de = { ...STUDENT_DICTS.de };
  const missing = Object.keys(en).filter((k) => !de[k]?.trim());
  console.log({ en: Object.keys(en).length, de: Object.keys(de).length, missing: missing.length });

  let cache = {};
  try {
    cache = JSON.parse(fs.readFileSync(OUT, "utf8"));
  } catch {
    /* empty */
  }

  const need = missing.filter((k) => !cache[k]);
  const batches = chunk(need, CHUNK);
  for (let b = 0; b < batches.length; b++) {
    const keys = batches[b];
    const texts = keys.map((k) => en[k]);
    const translated = await batchDe(texts);
    for (let i = 0; i < keys.length; i++) {
      if (translated[i]) cache[keys[i]] = translated[i];
    }
    fs.writeFileSync(OUT, JSON.stringify(cache, null, 2) + "\n");
    console.log(`batch ${b + 1}/${batches.length} cache=${Object.keys(cache).length}`);
  }

  const merged = { ...de, ...cache };
  // Keep existing DE overrides
  for (const [k, v] of Object.entries(STUDENT_DICTS.de)) {
    if (v?.trim()) merged[k] = v;
  }

  // Rewrite de: Dictionary block in student-dicts.ts
  let src = fs.readFileSync(DICT_PATH, "utf8");
  const start = src.indexOf("const de: Dictionary = {");
  if (start < 0) throw new Error("de dict not found");
  const end = src.indexOf("\nexport const STUDENT_DICTS", start);
  if (end < 0) throw new Error("export not found");

  const lines = Object.keys(merged)
    .sort()
    .map((k) => {
      const v = JSON.stringify(merged[k]);
      return `  ${JSON.stringify(k)}: ${v},`;
    });
  const block = `const de: Dictionary = {\n${lines.join("\n")}\n};\n\n`;
  src = src.slice(0, start) + block + src.slice(end);
  fs.writeFileSync(DICT_PATH, src);
  console.log({ written: Object.keys(merged).length, path: DICT_PATH });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
