/**
 * Fill missing ES/DE L1 for all served English-course RU TR stems,
 * update english-tr-l1-cache.json and attach onto english-packs.json.
 *
 * Run: npx tsx scripts/sync-english-tr-l1.ts
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import translate from "google-translate-api-x";
import { ENGLISH_CHAPTERS } from "../src/config/courses/english/chapters.ts";
import { getEnglishExercises } from "../src/config/courses/english/exercises.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PACKS_PATH = path.join(
  __dirname,
  "../src/config/exercise-banks/data/english-packs.json",
);
const CACHE_PATH = path.join(
  __dirname,
  "../src/config/exercise-banks/data/english-tr-l1-cache.json",
);
const PROMPTS_PATH = path.join(
  __dirname,
  "../src/config/exercise-translation-prompts.json",
);

const CYR = /[\u0400-\u04FF]/;
const CHUNK = 40;

function normalize(s: string): string {
  return s
    .replace(/[¿?¡!.,;:'"«»„""''`´…]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function loadJson<T>(p: string, fallback: T): T {
  try {
    return JSON.parse(fs.readFileSync(p, "utf8")) as T;
  } catch {
    return fallback;
  }
}

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

async function batchGtx(texts: string[], to: string): Promise<(string | null)[]> {
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
      console.warn(`batch ${to} retry: ${(err as Error).message}; wait ${wait}ms`);
      await new Promise((r) => setTimeout(r, wait));
    }
  }
  return texts.map(() => null);
}

type Cache = Record<string, { es?: string; de?: string }>;

async function main() {
  const cache = loadJson<Cache>(CACHE_PATH, {});
  const unique = new Map<string, string>();

  for (const ch of ENGLISH_CHAPTERS) {
    for (const ex of getEnglishExercises(ch.slug)) {
      if (ex.type !== "translation") continue;
      const ru = (ex.question ?? "").trim();
      if (!CYR.test(ru) || unique.has(ru)) continue;
      unique.set(ru, (ex.answer ?? "").trim());
    }
  }

  // Also harvest pack stems (may not all be served yet).
  const packs = loadJson<
    Record<string, Partial<Record<string, Array<{ question?: string; answer?: string }>>>>
  >(PACKS_PATH, {});
  for (const byType of Object.values(packs)) {
    for (const ex of byType.translation ?? []) {
      const ru = (ex.question ?? "").trim();
      if (!CYR.test(ru) || unique.has(ru)) continue;
      unique.set(ru, (ex.answer ?? "").trim());
    }
  }

  const missing = [...unique.entries()]
    .map(([ru, en]) => ({ ru, en }))
    .filter((u) => !(cache[u.ru]?.es && cache[u.ru]?.de));

  console.log({
    unique: unique.size,
    cached: unique.size - missing.length,
    missing: missing.length,
  });

  let ok = unique.size - missing.length;
  let fail = 0;
  for (const [b, batch] of chunk(missing, CHUNK).entries()) {
    const rus = batch.map((x) => x.ru);
    const [esList, deList] = await Promise.all([
      batchGtx(rus, "es"),
      batchGtx(rus, "de"),
    ]);
    for (let i = 0; i < batch.length; i++) {
      const { ru, en } = batch[i]!;
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
    fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2) + "\n");
    console.log(`batch ${b + 1} ok=${ok} fail=${fail}`);
  }

  let packUpdated = 0;
  for (const byType of Object.values(packs)) {
    for (const ex of byType.translation ?? []) {
      const ru = (ex.question ?? "").trim();
      const got = cache[ru];
      if (!got?.es || !got?.de) continue;
      (ex as { questionTranslations?: { es: string; de: string } }).questionTranslations =
        {
          es: got.es,
          de: got.de,
        };
      packUpdated++;
    }
  }
  fs.writeFileSync(PACKS_PATH, JSON.stringify(packs, null, 2) + "\n");

  // Scrub spoiler ES/DE entries in generic prompts map.
  const prompts = loadJson<
    Record<string, Partial<Record<"en" | "es" | "de", string>>>
  >(PROMPTS_PATH, {});
  let scrubbed = 0;
  for (const [ru, entry] of Object.entries(prompts)) {
    const got = cache[ru];
    if (!got) continue;
    if (got.es) {
      if (!entry.es || normalize(entry.es) === normalize(entry.en ?? "")) {
        entry.es = got.es;
        scrubbed++;
      }
    }
    if (got.de) {
      if (!entry.de || normalize(entry.de) === normalize(entry.en ?? "")) {
        entry.de = got.de;
        scrubbed++;
      }
    }
  }
  fs.writeFileSync(PROMPTS_PATH, JSON.stringify(prompts, null, 2) + "\n");

  console.log({ packUpdated, scrubbed, cacheSize: Object.keys(cache).length, ok, fail });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
