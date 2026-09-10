/**
 * Generate ES/DE L1 source prompts for English-course translation items
 * (RU → target English stays; UI es/de get native L1, not the English answer).
 *
 * Run: node --env-file=.env.local scripts/generate-english-tr-l1-prompts.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PACKS_PATH = path.join(
  __dirname,
  "../src/config/exercise-banks/data/english-packs.json",
);

const CYR = /[\u0400-\u04FF]/;
const BATCH = 20;
const DEEPSEEK_MODEL = process.env.DEEPSEEK_MODEL || "deepseek-v4-flash";
const DEEPSEEK_KEY = process.env.DEEPSEEK_API_KEY;
const GROQ_KEY = process.env.GROQ_API_KEY;
// Groq model id from env may be stale; prefer a known current free-tier model.
const GROQ_MODEL = process.env.GROQ_MODEL_OVERRIDE || "llama-3.1-8b-instant";

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

async function chatComplete(messages) {
  if (DEEPSEEK_KEY) {
    const res = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${DEEPSEEK_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: DEEPSEEK_MODEL,
        temperature: 0.2,
        response_format: { type: "json_object" },
        messages,
      }),
    });
    if (res.ok) {
      const data = await res.json();
      return data.choices?.[0]?.message?.content ?? "{}";
    }
    const text = await res.text();
    console.warn(`DeepSeek ${res.status}: ${text.slice(0, 200)}`);
  }
  if (!GROQ_KEY) throw new Error("No DeepSeek/Groq API key available");
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GROQ_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      temperature: 0.2,
      response_format: { type: "json_object" },
      messages,
    }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Groq ${res.status}: ${text.slice(0, 400)}`);
  }
  const data = await res.json();
  return data.choices?.[0]?.message?.content ?? "{}";
}

async function translateBatch(items) {
  const payload = items.map((it, i) => ({
    i,
    ru: it.ru,
    en: it.en,
  }));
  const system = `You localize Russian→English translation exercise SOURCE prompts for Spanish and German learners.
For each item, return Spanish (es) and German (de) sentences with the SAME meaning as the Russian source.
Do NOT return the English answer. Do NOT add quotes or numbering.
Reply with JSON only: {"items":[{"i":0,"es":"...","de":"..."}, ...]}`;

  const raw = await chatComplete([
    { role: "system", content: system },
    { role: "user", content: JSON.stringify({ items: payload }) },
  ]);
  const parsed = JSON.parse(raw);
  const out = new Map();
  for (const row of parsed.items ?? []) {
    if (typeof row?.i !== "number") continue;
    const es = String(row.es ?? "").trim();
    const de = String(row.de ?? "").trim();
    if (!es || !de) continue;
    out.set(row.i, { es, de });
  }
  return out;
}

async function main() {
  if (!DEEPSEEK_KEY && !GROQ_KEY) {
    console.error("Need DEEPSEEK_API_KEY or GROQ_API_KEY (.env.local)");
    process.exit(1);
  }

  const packs = JSON.parse(fs.readFileSync(PACKS_PATH, "utf8"));
  const unique = new Map(); // ru -> { en answers seen }
  let total = 0;
  let need = 0;

  for (const byType of Object.values(packs)) {
    for (const ex of byType.translation ?? []) {
      total++;
      const ru = (ex.question ?? "").trim();
      const en = (ex.answer ?? "").trim();
      if (!CYR.test(ru) || !en) continue;
      const tr = ex.questionTranslations ?? {};
      if (tr.es?.trim() && tr.de?.trim()) continue;
      need++;
      if (!unique.has(ru)) unique.set(ru, en);
    }
  }

  console.log({ totalTr: total, needL1: need, uniqueRu: unique.size });

  const entries = [...unique.entries()].map(([ru, en]) => ({ ru, en }));
  const translations = new Map(); // ru -> {es, de}

  for (let i = 0; i < entries.length; i += BATCH) {
    const batch = entries.slice(i, i + BATCH);
    let attempt = 0;
    while (attempt < 3) {
      try {
        const got = await translateBatch(batch);
        for (const [idx, val] of got) {
          const item = batch[idx];
          if (!item) continue;
          // Reject if model echoed the English answer.
          if (
            normalize(val.es) === normalize(item.en) ||
            normalize(val.de) === normalize(item.en)
          ) {
            continue;
          }
          translations.set(item.ru, val);
        }
        console.log(
          `batch ${Math.floor(i / BATCH) + 1}/${Math.ceil(entries.length / BATCH)} → ${got.size}/${batch.length}`,
        );
        break;
      } catch (err) {
        attempt++;
        console.warn(`retry ${attempt}:`, err.message);
        await sleep(1500 * attempt);
      }
    }
    await sleep(400);
  }

  let updated = 0;
  let skipped = 0;
  for (const byType of Object.values(packs)) {
    for (const ex of byType.translation ?? []) {
      const ru = (ex.question ?? "").trim();
      const en = (ex.answer ?? "").trim();
      if (!CYR.test(ru)) continue;
      const got = translations.get(ru);
      const prev = ex.questionTranslations ?? {};
      const next = { ...prev };
      if (got?.es && normalize(got.es) !== normalize(en)) next.es = got.es;
      if (got?.de && normalize(got.de) !== normalize(en)) next.de = got.de;
      // Never store EN L1 that equals the answer (spoiler for EN UI).
      if (prev.en && normalize(prev.en) === normalize(en)) delete next.en;
      if (next.es || next.de) {
        ex.questionTranslations = next;
        updated++;
      } else {
        skipped++;
      }
    }
  }

  fs.writeFileSync(PACKS_PATH, JSON.stringify(packs, null, 2) + "\n");
  console.log({ updated, skipped, translatedUnique: translations.size });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
