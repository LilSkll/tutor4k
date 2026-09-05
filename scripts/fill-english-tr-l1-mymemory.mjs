/**
 * Fill ES/DE L1 prompts for English-course TRs via MyMemory (resumable cache).
 * Run: node scripts/fill-english-tr-l1-mymemory.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

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

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

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

async function translateOnce(text, lang) {
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=ru|${lang}`;
  const res = await fetch(url);
  if (res.status === 429) {
    const err = new Error("RATE");
    throw err;
  }
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  const out = String(data?.responseData?.translatedText ?? "").trim();
  if (!out || /INVALID|QUERY LENGTH|MYMEMORY WARNING/i.test(out)) return null;
  return out;
}

async function translateWithBackoff(text, lang) {
  for (let attempt = 0; attempt < 6; attempt++) {
    try {
      return await translateOnce(text, lang);
    } catch (err) {
      if (err.message === "RATE") {
        const wait = 8000 * (attempt + 1);
        console.warn(`rate-limit ${lang}, wait ${wait}ms`);
        await sleep(wait);
        continue;
      }
      throw err;
    }
  }
  return null;
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

  let ok = 0;
  let fail = 0;
  let skippedCached = 0;
  for (let i = 0; i < unique.length; i++) {
    const { ru, en } = unique[i];
    if (cache[ru]?.es && cache[ru]?.de) {
      skippedCached++;
      ok++;
      continue;
    }
    try {
      const es = await translateWithBackoff(ru, "es");
      await sleep(250);
      const de = await translateWithBackoff(ru, "de");
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
    } catch (err) {
      fail++;
      console.warn(`fail @${i}:`, err.message);
      await sleep(5000);
    }
    if ((i + 1) % 20 === 0) {
      saveCache(cache);
      console.log(
        `progress ${i + 1}/${unique.length} ok=${ok} fail=${fail} cachedSkip=${skippedCached}`,
      );
    }
    await sleep(300);
  }
  saveCache(cache);

  let updated = 0;
  for (const byType of Object.values(packs)) {
    for (const ex of byType.translation ?? []) {
      const ru = (ex.question ?? "").trim();
      const got = cache[ru];
      if (!got?.es || !got?.de) continue;
      ex.questionTranslations = {
        ...(ex.questionTranslations ?? {}),
        es: got.es,
        de: got.de,
      };
      updated++;
    }
  }

  fs.writeFileSync(PACKS_PATH, JSON.stringify(packs, null, 2) + "\n");
  console.log({
    updated,
    cacheSize: Object.keys(cache).length,
    ok,
    fail,
    skippedCached,
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
