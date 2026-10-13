#!/usr/bin/env node
/**
 * Fill translation arrays to TARGET via google-translate-api-x (target → RU).
 *
 * Run: node scripts/topup-translation-floor.mjs
 * Requires: google-translate-api-x (npm i --no-save google-translate-api-x)
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import translate from "google-translate-api-x";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const TARGET = 20;
const CHUNK = 25;
const CYR = /[\u0400-\u04FF]/;

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function norm(s) {
  return String(s ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[.?!¡¿]+$/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function collectAnswers(ch) {
  const byNorm = new Map();
  const push = (a) => {
    const cleaned = String(a ?? "")
      .replace(/[.?!¡¿]+$/g, "")
      .trim();
    if (!cleaned || CYR.test(cleaned) || cleaned.split(/\s+/).length < 3) return;
    const key = norm(cleaned);
    if (!byNorm.has(key)) byNorm.set(key, cleaned);
  };
  for (const type of ["sentence_building", "error_correction", "translation"]) {
    for (const ex of ch[type] ?? []) push(ex.answer);
  }
  for (const ex of ch.multiple_choice ?? []) {
    const q = String(ex.question ?? "");
    const a = String(ex.answer ?? "").trim();
    if (!a || !/___+/.test(q)) continue;
    push(q.replace(/___+/g, a));
  }
  return [...byNorm.values()];
}

async function toRussian(texts, from) {
  for (let attempt = 0; attempt < 5; attempt++) {
    try {
      const res = await translate(texts, {
        from,
        to: "ru",
        forceBatch: true,
        rejectOnPartialFail: false,
      });
      return texts.map((_, i) => {
        const row = Array.isArray(res) ? res[i] : res;
        const text = String(row?.text ?? "").trim();
        return CYR.test(text) ? text : null;
      });
    } catch (err) {
      console.warn(`gtx retry: ${err.message}`);
      await sleep(1200 * (attempt + 1));
    }
  }
  return texts.map(() => null);
}

async function topupFile(rel, course) {
  const file = path.join(root, rel);
  const packs = JSON.parse(fs.readFileSync(file, "utf8"));
  const from = course === "english" ? "en" : "es";
  let chaptersTouched = 0;
  let added = 0;

  for (const [slug, ch] of Object.entries(packs)) {
    const have = ch.translation ?? [];
    const need = TARGET - have.length;
    if (need <= 0) continue;
    const haveAns = new Set(have.map((ex) => norm(ex.answer)));
    const haveQ = new Set(have.map((ex) => norm(ex.question)));
    const candidates = collectAnswers(ch)
      .filter((a) => !haveAns.has(norm(a)))
      .slice(0, Math.max(need * 2, need));
    if (!candidates.length) continue;

    const got = [];
    for (let i = 0; i < candidates.length && got.length < need; i += CHUNK) {
      const batch = candidates.slice(i, i + CHUNK);
      const rus = await toRussian(batch, from);
      for (let j = 0; j < batch.length; j++) {
        if (got.length >= need) break;
        const answer = batch[j];
        const ru = rus[j];
        if (!ru || haveAns.has(norm(answer)) || haveQ.has(norm(ru))) continue;
        haveAns.add(norm(answer));
        haveQ.add(norm(ru));
        got.push({
          type: "translation",
          question: ru.endsWith(".") ? ru : `${ru}.`,
          answer,
          acceptableAnswers: [answer, answer.toLowerCase()],
          instruction:
            course === "english"
              ? "Translate into English"
              : "Переведите на испанский",
          explanation:
            course === "english"
              ? "Translate the Russian prompt into English."
              : "Переведите русскую фразу на испанский.",
          // Omit grammarTopic so chapter grammar filters keep the item.
        });
      }
      await sleep(400);
    }
    if (got.length) {
      ch.translation = [...have, ...got];
      chaptersTouched++;
      added += got.length;
      console.log(`${slug}: +${got.length} TR → ${ch.translation.length}`);
    }
  }

  fs.writeFileSync(file, `${JSON.stringify(packs, null, 2)}\n`);
  return { chaptersTouched, added };
}

const en = await topupFile(
  "src/config/exercise-banks/data/english-packs.json",
  "english",
);
const es = await topupFile(
  "src/config/exercise-banks/data/spanish-packs.json",
  "spanish",
);
console.log({ en, es });
