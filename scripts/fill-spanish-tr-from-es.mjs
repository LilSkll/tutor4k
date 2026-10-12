/**
 * For Spanish packs with thin TR pools, mint RU→ES items by translating
 * existing Spanish sentences to Russian (GTX).
 *
 * Run: node scripts/fill-spanish-tr-from-es.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import translate from "google-translate-api-x";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PACKS_PATH = path.join(
  __dirname,
  "../src/config/exercise-banks/data/spanish-packs.json",
);

const TARGET_TR = 8;
const CHUNK = 30;
const CYR = /[\u0400-\u04FF]/;

function normalizeSentence(s) {
  return String(s ?? "")
    .replace(/\s+/g, " ")
    .replace(/[.?!¡¿]+$/, "")
    .trim();
}

function collectEs(byType) {
  const out = [];
  const seen = new Set();
  for (const type of ["translation", "error_correction", "sentence_building", "multiple_choice", "fill_blank"]) {
    for (const ex of byType[type] ?? []) {
      let es = "";
      if (type === "multiple_choice" || type === "fill_blank") {
        const q = String(ex.question ?? "");
        const a = String(ex.answer ?? "").trim();
        if (/___+/.test(q) && a) es = normalizeSentence(q.replace(/___+/g, a));
      } else {
        es = normalizeSentence(ex.answer);
      }
      if (!es || CYR.test(es) || es.split(/\s+/).length < 3) continue;
      const key = es.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      out.push({
        es,
        grammarTopic: ex.grammarTopic ?? "review",
        explanation: ex.explanation ?? "",
      });
    }
  }
  return out;
}

async function batchGtx(texts, to) {
  for (let attempt = 0; attempt < 5; attempt++) {
    try {
      const res = await translate(texts, {
        from: "es",
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
      console.warn(`batch retry: ${err.message}; wait ${wait}ms`);
      await new Promise((r) => setTimeout(r, wait));
    }
  }
  return texts.map(() => null);
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

async function main() {
  const packs = JSON.parse(fs.readFileSync(PACKS_PATH, "utf8"));
  const jobs = [];
  for (const [slug, byType] of Object.entries(packs)) {
    const have = byType.translation ?? [];
    const need = Math.max(0, TARGET_TR - have.length);
    if (!need) continue;
    const usedQ = new Set(have.map((e) => String(e.question ?? "").toLowerCase()));
    const usedA = new Set(
      have.map((e) => normalizeSentence(e.answer).toLowerCase()),
    );
    const candidates = collectEs(byType)
      .filter((c) => !usedA.has(c.es.toLowerCase()))
      .slice(0, need + 4);
    if (!candidates.length) continue;
    jobs.push({ slug, byType, need, candidates, usedQ });
  }

  console.log({ chaptersNeedingTr: jobs.length });

  for (const job of jobs) {
    const { slug, byType, need, candidates, usedQ } = job;
    const rus = await batchGtx(
      candidates.map((c) => c.es),
      "ru",
    );
    const added = [];
    for (let i = 0; i < candidates.length && added.length < need; i++) {
      const ru = rus[i];
      const c = candidates[i];
      if (!ru || !CYR.test(ru)) continue;
      if (usedQ.has(ru.toLowerCase())) continue;
      usedQ.add(ru.toLowerCase());
      added.push({
        type: "translation",
        question: ru.endsWith(".") ? ru : `${ru}.`,
        answer: c.es,
        acceptableAnswers: [c.es, c.es.toLowerCase()],
        instruction: "Переведите на испанский",
        explanation: c.explanation || "Traduce al español.",
        grammarTopic: c.grammarTopic,
      });
    }
    byType.translation = [...(byType.translation ?? []), ...added];
    console.log(`${slug}: +${added.length} TR (now ${byType.translation.length})`);
    fs.writeFileSync(PACKS_PATH, JSON.stringify(packs, null, 2) + "\n");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
