/**
 * Fill ES/DE L1 prompts for English-course TRs via google-translate-api-x batch API.
 * Much faster than per-string sequential calls.
 *
 * Run: node scripts/fill-english-tr-l1-gtx.mjs
 * Requires: npm i --no-save google-translate-api-x
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import translate from "google-translate-api-x";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PACKS_PATH = path.join(
  __dirname,
  "../src/config/exercise-banks/data/english-packs.json",
);
const CACHE_PATH = path.join(
  __dirname,
  "../src/config/exercise-banks/data/english-tr-l1-cache.json",
);

const CYR = /[\u0400-\u04FF]/;
const CHUNK = 40;

function normalize(s) {
  return s
    .replace(/[¿?¡!.,;:'"«»„""''`´…]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function loadCache() {
  try {
    return JSON.parse(fs.readFileSync(CACHE_PATH, "utf8"));
  } catch {
    return {};
  }
}

function saveCache(cache) {
  fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2) + "\n");
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

async function batchGtx(texts, to) {
  for (let attempt = 0; attempt < 5; attempt++) {
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
        return String(text ?? "").trim() || null;
      });
    } catch (err) {
      const wait = 1500 * (attempt + 1);
      console.warn(`batch ${to} retry: ${err.message}; wait ${wait}ms`);
      await new Promise((r) => setTimeout(r, wait));
    }
  }
  return texts.map(() => null);
}

async function main() {
  const packs = JSON.parse(fs.readFileSync(PACKS_PATH, "utf8"));
  const cache = loadCache();
  const unique = [];
  const seen = new Set();
  for (const byType of Object.values(packs)) {
    for (const ex of byType.translation ?? []) {
      const ru = (ex.question ?? "").trim();
      if (!CYR.test(ru) || seen.has(ru)) continue;
      seen.add(ru);
      unique.push({ ru, en: (ex.answer ?? "").trim() });
    }
  }

  const missing = unique.filter((u) => !(cache[u.ru]?.es && cache[u.ru]?.de));
  console.log({
    total: unique.length,
    cached: unique.length - missing.length,
    missing: missing.length,
  });

  let ok = unique.length - missing.length;
  let fail = 0;
  const batches = chunk(missing, CHUNK);

  for (let b = 0; b < batches.length; b++) {
    const batch = batches[b];
    const rus = batch.map((x) => x.ru);
    const [esList, deList] = await Promise.all([
      batchGtx(rus, "es"),
      batchGtx(rus, "de"),
    ]);
    for (let i = 0; i < batch.length; i++) {
      const { ru, en } = batch[i];
      const es = esList[i];
      const de = deList[i];
      if (
        es &&
        de &&
        normalize(es) !== normalize(en) &&
        normalize(de) !== normalize(en)
      ) {
        cache[ru] = { es, de };
        ok++;
      } else {
        fail++;
      }
    }
    saveCache(cache);
    console.log(
      `batch ${b + 1}/${batches.length} (+${batch.length}) ok=${ok} fail=${fail}`,
    );
  }

  let updated = 0;
  let scrubbed = 0;
  for (const byType of Object.values(packs)) {
    for (const ex of byType.translation ?? []) {
      const ru = (ex.question ?? "").trim();
      const got = cache[ru];
      if (got?.es && got?.de) {
        ex.questionTranslations = {
          ...(ex.questionTranslations ?? {}),
          es: got.es,
          de: got.de,
        };
        updated++;
      }
      if (/^Use\s+/i.test(ex.instruction ?? "")) {
        ex.instruction = "Translate to English";
        scrubbed++;
      }
    }
  }

  fs.writeFileSync(PACKS_PATH, JSON.stringify(packs, null, 2) + "\n");
  console.log({
    updated,
    scrubbed,
    cacheSize: Object.keys(cache).length,
    ok,
    fail,
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
