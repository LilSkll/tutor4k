/**
 * Builds src/config/exercise-sentence-glosses.json from translation pairs.
 * Run: node scripts/build-spanish-sentence-glosses.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const packs = JSON.parse(
  fs.readFileSync(
    path.join(root, "src/config/exercise-banks/data/spanish-packs.json"),
    "utf8",
  ),
);
const tr = JSON.parse(
  fs.readFileSync(
    path.join(root, "src/config/exercise-translation-prompts.json"),
    "utf8",
  ),
);

function normalizeSpanishKey(s) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[¿?¡!.,…]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

const out = {};

function add(spanish, ru, en, de) {
  if (!spanish?.trim() || !ru?.trim()) return;
  const keys = [spanish.trim(), normalizeSpanishKey(spanish)];
  for (const key of keys) {
    if (!key) continue;
    out[key] = {
      ru: ru.trim(),
      en: (en ?? ru).trim(),
      de: (de ?? en ?? ru).trim(),
      es: (en ?? ru).trim(),
    };
  }
}

for (const slug of Object.keys(packs)) {
  for (const ex of packs[slug]?.translation ?? []) {
    const ru = ex.question?.trim();
    const es = ex.answer?.trim();
    const loc = tr[ru];
    add(es, ru, loc?.en, loc?.de);
  }
}

function ruFromExplanation(expl) {
  if (!expl) return null;
  const quoted = expl.match(/«([^»]+)»/);
  if (quoted?.[1]?.trim()) return quoted[1].trim();
  const dash = expl.match(/—\s*([^—.!?\n]+)/);
  if (dash?.[1] && /[\u0400-\u04FF]/.test(dash[1])) return dash[1].trim();
  return null;
}

function reconstruct(ex) {
  const q = ex.question?.trim() ?? "";
  if (!q || /[\u0400-\u04FF]/.test(q)) return null;
  if (ex.type === "sentence_building") return ex.answer?.trim() ?? null;
  if (ex.type === "fill_blank" && q.includes("___")) {
    return q
      .replace(/___+/g, ex.answer?.trim() ?? "")
      .replace(/\s*\([^)]*\)/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }
  if (ex.type === "error_correction") return ex.answer?.trim() ?? null;
  return null;
}

for (const slug of Object.keys(packs)) {
  for (const type of Object.keys(packs[slug] ?? {})) {
    if (type === "translation") continue;
    for (const ex of packs[slug][type] ?? []) {
      const es = reconstruct(ex);
      if (!es) continue;
      const ru = ruFromExplanation(ex.explanation);
      if (!ru) continue;
      const loc = tr[ru.endsWith(".") ? ru : `${ru}.`] ?? tr[ru];
      add(es, ru, loc?.en, loc?.de);
    }
  }
}

const dest = path.join(root, "src/config/exercise-sentence-glosses.json");
fs.writeFileSync(dest, JSON.stringify(out, null, 2) + "\n");
console.log("Wrote", Object.keys(out).length, "sentence gloss keys to", dest);
