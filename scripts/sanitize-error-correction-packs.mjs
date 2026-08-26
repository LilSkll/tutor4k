/**
 * Sanitize ALL exercise types in spanish/english packs:
 * drop Completa/#N/elx/[n] garbage, strip salvageable markers,
 * backfill FB/EC from real MC blanks only.
 *
 * Usage: node scripts/sanitize-error-correction-packs.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const CYRILLIC = /[\u0400-\u04FF]/;
const INDEX_MARK = /\[\d+\]/;
const HASH_N = /#\d+/;
const COMPLETA_STUB = /^(Completa|Complete)\s*\([^)]*\)(\s*#\d+)?\s*:/i;
const FAKE_X = /\b[A-Za-záéíóúñüÁÉÍÓÚÑÜ]{1,16}x\b/i;
const KNOWN_X = new Set(["box", "fax", "tax", "mix", "six", "fix", "flux", "crux", "lynx", "onyx"]);

function cleanMarks(s) {
  return String(s ?? "")
    .replace(/\s*\[\d+\]/g, "")
    .replace(/\s*\(#\d+\)/g, "")
    .replace(/\s*#\d+\b/g, "")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([.?!¿¡])$/u, "$1")
    .trim();
}

function stripNoise(s) {
  return cleanMarks(s)
    .replace(/[¿?¡!.,;:'"«»„""''`´…()]/g, "")
    .replace(/[-–—_/\\|→]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function hasFakeX(s) {
  const m = String(s).match(FAKE_X);
  return Boolean(m && !KNOWN_X.has(m[0].toLowerCase()));
}

function isTokenDump(q) {
  return (String(q).match(/ \/? /g) ?? []).length >= 2;
}

function usableMC(ex) {
  const q = cleanMarks(ex.question ?? "");
  const a = cleanMarks(ex.answer ?? "");
  const options = (ex.options ?? []).map(cleanMarks).filter(Boolean);
  if (!q || !a) return null;
  if (COMPLETA_STUB.test(q) || CYRILLIC.test(q) || isTokenDump(q)) return null;
  if (INDEX_MARK.test(q) || HASH_N.test(q)) return null;
  if (hasFakeX(a) || options.some(hasFakeX)) return null;
  if (options.length < 2) return null;
  return {
    ...ex,
    type: "multiple_choice",
    question: q,
    answer: a,
    options: [...new Set([a, ...options.filter((o) => o !== a)])].slice(0, 4),
  };
}

function usableFB(ex) {
  const q = cleanMarks(ex.question ?? "");
  const a = cleanMarks(ex.answer ?? "");
  if (!q || !a || !/___+/.test(q)) return null;
  if (COMPLETA_STUB.test(q) || /^(Completa|Complete)\b/i.test(q)) return null;
  if (CYRILLIC.test(q) || INDEX_MARK.test(q) || HASH_N.test(q)) return null;
  if (hasFakeX(a)) return null;
  return {
    ...ex,
    type: "fill_blank",
    question: q,
    answer: a,
    acceptableAnswers: (ex.acceptableAnswers ?? [])
      .map(cleanMarks)
      .filter((x) => x && !hasFakeX(x)),
  };
}

function usableTR(ex) {
  const q = cleanMarks(ex.question ?? "");
  const a = cleanMarks(ex.answer ?? "");
  if (q.length < 2 || a.length < 2) return null;
  if (COMPLETA_STUB.test(q) || COMPLETA_STUB.test(a)) return null;
  if (INDEX_MARK.test(q + a) || HASH_N.test(q + a)) return null;
  if (CYRILLIC.test(a) || hasFakeX(a)) return null;
  return {
    ...ex,
    type: "translation",
    question: q,
    answer: a,
    acceptableAnswers: (ex.acceptableAnswers ?? [])
      .map(cleanMarks)
      .filter((x) => x && !CYRILLIC.test(x) && !hasFakeX(x)),
  };
}

function usableEC(ex) {
  let q = cleanMarks(ex.question ?? "");
  let a = cleanMarks(ex.answer ?? "");
  if (q.includes("→") && a.includes("→")) {
    const qAfter = cleanMarks(q.split("→").pop());
    const aAfter = cleanMarks(a.split("→").pop());
    if (qAfter && aAfter && stripNoise(qAfter) !== stripNoise(aAfter)) {
      q = /[.?!]$/.test(qAfter) ? qAfter : `${qAfter}.`;
      a = /[.?!]$/.test(aAfter) ? aAfter : `${aAfter}.`;
    }
  }
  if (q.length < 4 || a.length < 4) return null;
  if (CYRILLIC.test(q) || CYRILLIC.test(a)) return null;
  if (COMPLETA_STUB.test(q) || COMPLETA_STUB.test(a)) return null;
  if (/^(Completa|Complete)\b/i.test(q)) return null;
  if (INDEX_MARK.test(q + a) || HASH_N.test(q + a)) return null;
  if (hasFakeX(q) || hasFakeX(a)) return null;
  if (isTokenDump(q)) return null;
  if (stripNoise(q) === stripNoise(a)) return null;
  return {
    ...ex,
    type: "error_correction",
    question: q,
    answer: a,
    acceptableAnswers: (ex.acceptableAnswers ?? [])
      .map(cleanMarks)
      .filter((x) => x && !hasFakeX(x)),
  };
}

function usableSB(ex) {
  const a = cleanMarks(ex.answer ?? "");
  const options = (ex.options ?? []).map(cleanMarks).filter(Boolean);
  if (!a || CYRILLIC.test(a) || hasFakeX(a)) return null;
  if (INDEX_MARK.test(a) || HASH_N.test(a)) return null;
  if (options.length < 3) return null;
  return {
    ...ex,
    type: "sentence_building",
    question: options.join(" / "),
    options,
    answer: a,
    acceptableAnswers: (ex.acceptableAnswers ?? []).map(cleanMarks).filter(Boolean),
  };
}

function ecFromBlank(stem, answer, wrong, explanation, grammarTopic, lang) {
  if (!stem.includes("___") || !answer || !wrong) return null;
  if (answer === wrong || hasFakeX(wrong) || COMPLETA_STUB.test(stem)) return null;
  if (/^(Completa|Complete)\b/i.test(stem)) return null;
  const broken = cleanMarks(stem.replace(/___+/g, wrong));
  const filled = cleanMarks(stem.replace(/___+/g, answer));
  const item = usableEC({
    type: "error_correction",
    question: /[.?!]$/.test(broken) ? broken : `${broken}.`.replace(/\?\./, "?"),
    answer: /[.?!]$/.test(filled) ? filled : `${filled}.`.replace(/\?\./, "?"),
    instruction: lang === "english" ? "Correct the mistake" : "Исправьте ошибку",
    explanation:
      explanation ||
      (lang === "english"
        ? `Use «${answer}», not «${wrong}».`
        : `Нужно «${answer}», не «${wrong}».`),
    grammarTopic,
    acceptableAnswers: [filled, filled.toLowerCase()],
  });
  return item;
}

function fbFromMc(mc, lang) {
  const stem = mc.question;
  if (!/___+/.test(stem)) return null;
  return usableFB({
    type: "fill_blank",
    question: stem,
    answer: mc.answer,
    instruction: lang === "english" ? "Fill in the blank" : "Заполните пропуск",
    explanation: mc.explanation,
    grammarTopic: mc.grammarTopic,
    acceptableAnswers: [mc.answer, String(mc.answer).toLowerCase()],
  });
}

function dedupe(list) {
  const seen = new Set();
  const out = [];
  for (const ex of list) {
    if (!ex) continue;
    const key = `${ex.type}|${stripNoise(ex.question || ex.answer || "")}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(ex);
  }
  return out;
}

function sanitizeChapter(types, lang, target = 20) {
  const mcKeep = dedupe((types.multiple_choice ?? []).map(usableMC));
  let fbKeep = dedupe((types.fill_blank ?? []).map(usableFB));
  const trKeep = dedupe((types.translation ?? []).map(usableTR));
  let ecKeep = dedupe((types.error_correction ?? []).map(usableEC));
  const sbKeep = dedupe((types.sentence_building ?? []).map(usableSB));

  for (const mc of mcKeep) {
    if (fbKeep.length >= target) break;
    const fb = fbFromMc(mc, lang);
    if (fb) fbKeep = dedupe([...fbKeep, fb]);
  }

  for (const mc of mcKeep) {
    if (ecKeep.length >= target) break;
    const wrong = (mc.options ?? []).find(
      (o) => o !== mc.answer && o !== "—" && !String(o).endsWith("?") && !hasFakeX(o),
    );
    const ec = ecFromBlank(
      mc.question,
      mc.answer,
      wrong,
      mc.explanation,
      mc.grammarTopic,
      lang,
    );
    if (ec) ecKeep = dedupe([...ecKeep, ec]);
  }

  return {
    ...types,
    multiple_choice: mcKeep.slice(0, Math.max(target, mcKeep.length)),
    fill_blank: fbKeep.slice(0, Math.max(target, fbKeep.length)),
    translation: trKeep.slice(0, Math.max(target, trKeep.length)),
    error_correction: ecKeep.slice(0, Math.max(target, ecKeep.length)),
    sentence_building: sbKeep.slice(0, Math.max(target, sbKeep.length)),
  };
}

function sanitizeFile(relPath, lang) {
  const full = path.join(root, relPath);
  const packs = JSON.parse(fs.readFileSync(full, "utf8"));
  const before = { mc: 0, fb: 0, tr: 0, ec: 0, sb: 0, completa: 0, elx: 0 };
  const after = { mc: 0, fb: 0, tr: 0, ec: 0, sb: 0, completa: 0, elx: 0 };

  const count = (bucket, types) => {
    for (const [k, short] of [
      ["multiple_choice", "mc"],
      ["fill_blank", "fb"],
      ["translation", "tr"],
      ["error_correction", "ec"],
      ["sentence_building", "sb"],
    ]) {
      for (const ex of types[k] ?? []) {
        bucket[short]++;
        const blob = `${ex.question ?? ""} ${ex.answer ?? ""}`;
        if (COMPLETA_STUB.test(ex.question ?? "") || /Completa\s*\(/i.test(blob)) {
          bucket.completa++;
        }
        if (hasFakeX(blob)) bucket.elx++;
      }
    }
  };

  for (const [slug, types] of Object.entries(packs)) {
    count(before, types);
    packs[slug] = sanitizeChapter(types, lang, 20);
    count(after, packs[slug]);
  }

  fs.writeFileSync(full, JSON.stringify(packs));
  console.log(relPath);
  console.log("  before", before);
  console.log("  after ", after);
}

sanitizeFile("src/config/exercise-banks/data/spanish-packs.json", "spanish");
sanitizeFile("src/config/exercise-banks/data/english-packs.json", "english");
