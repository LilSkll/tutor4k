/**
 * Sanitize error_correction arrays in spanish/english packs:
 * drop synthetic garbage ([n] markers, Cyrillic answers, cap-only diffs),
 * salvage arrow templates, backfill from MC/FB blanks in the same chapter.
 *
 * Usage: node scripts/sanitize-error-correction-packs.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const CYRILLIC = /[\u0400-\u04FF]/;
const INDEX_MARK = /\[\d+\]/g;

function cleanIndexMarks(s) {
  return String(s ?? "")
    .replace(/\s*\[\d+\]/g, "")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([.?!])$/u, "$1")
    .trim();
}

function stripNoise(s) {
  return cleanIndexMarks(s)
    .replace(/[¿?¡!.,;:'"«»„""''`´…()]/g, "")
    .replace(/[-–—_/\\|→]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function isUsable(ex) {
  const q = (ex.question ?? "").trim();
  const a = (ex.answer ?? "").trim();
  if (q.length < 4 || a.length < 4) return false;
  if (CYRILLIC.test(q) || CYRILLIC.test(a)) return false;
  if (INDEX_MARK.test(q) || INDEX_MARK.test(a)) return false;
  if ((q.match(/ \/? /g) ?? []).length >= 2) return false;
  if (stripNoise(q) === stripNoise(a)) return false;
  if (q.includes("→")) {
    const qAfter = q.split("→").pop()?.trim() ?? "";
    const aAfter = a.includes("→") ? (a.split("→").pop()?.trim() ?? "") : a;
    if (!qAfter || stripNoise(qAfter) === stripNoise(aAfter || a)) return false;
  }
  return true;
}

function salvage(ex) {
  let q = cleanIndexMarks(ex.question);
  let a = cleanIndexMarks(ex.answer);
  // Prefer the corrected clause after → as the graded sentence
  if (q.includes("→") && a.includes("→")) {
    const qAfter = cleanIndexMarks(q.split("→").pop());
    const aAfter = cleanIndexMarks(a.split("→").pop());
    if (qAfter && aAfter && stripNoise(qAfter) !== stripNoise(aAfter)) {
      q = /[.?!]$/.test(qAfter) ? qAfter : `${qAfter}.`;
      a = /[.?!]$/.test(aAfter) ? aAfter : `${aAfter}.`;
    }
  } else if (q.includes("→") && !a.includes("→")) {
    const qAfter = cleanIndexMarks(q.split("→").pop());
    if (qAfter && stripNoise(qAfter) !== stripNoise(a)) {
      q = /[.?!]$/.test(qAfter) ? qAfter : `${qAfter}.`;
    }
  }
  const next = {
    ...ex,
    question: q,
    answer: a,
    acceptableAnswers: (ex.acceptableAnswers ?? [])
      .map(cleanIndexMarks)
      .filter(Boolean),
  };
  return isUsable(next) ? next : null;
}

function ecFromBlank(stem, answer, wrong, explanation, grammarTopic, lang) {
  if (!stem.includes("___") || !answer || !wrong || answer === wrong) return null;
  const broken = cleanIndexMarks(stem.replace(/___+/g, wrong));
  const filled = cleanIndexMarks(stem.replace(/___+/g, answer));
  if (!isUsable({ question: broken, answer: filled })) return null;
  return {
    type: "error_correction",
    question: /[.?!]$/.test(broken) ? broken : `${broken}.`.replace(/\?\./, "?"),
    answer: /[.?!]$/.test(filled) ? filled : `${filled}.`.replace(/\?\./, "?"),
    instruction: lang === "english" ? "Correct the mistake" : "Исправьте ошибку",
    explanation:
      explanation ||
      (lang === "english"
        ? `Use «${answer}», not «${wrong}».`
        : `Нужно «${answer}», не «${wrong}».`),
    ...(grammarTopic ? { grammarTopic } : {}),
    acceptableAnswers: [filled, filled.toLowerCase()],
  };
}

function backfillFromChapter(types, lang, target = 20) {
  const out = [];
  const seen = new Set();
  const push = (ex) => {
    if (!ex || !isUsable(ex)) return;
    const key = stripNoise(ex.question);
    if (seen.has(key)) return;
    seen.add(key);
    out.push(ex);
  };

  for (const ex of types.error_correction ?? []) {
    push(salvage(ex));
  }

  for (const mc of types.multiple_choice ?? []) {
    if (out.length >= target) break;
    const stem = cleanIndexMarks(mc.question ?? "");
    const ans = mc.answer;
    const wrong = (mc.options ?? []).find((o) => o !== ans && o !== "—" && !String(o).endsWith("?"));
    push(ecFromBlank(stem, ans, wrong, mc.explanation, mc.grammarTopic, lang));
  }

  for (const fb of types.fill_blank ?? []) {
    if (out.length >= target) break;
    const stem = cleanIndexMarks(fb.question ?? "");
    if (!stem.includes("___")) continue;
    // Invent a mild wrong form: capitalize answer or flip nearby acceptable
    const ans = fb.answer;
    const wrong =
      (fb.acceptableAnswers ?? []).find((a) => stripNoise(a) !== stripNoise(ans)) ||
      (ans.length > 1 ? ans[0].toLowerCase() + ans.slice(1) + "x" : null);
    // Skip nonsense "ansx" if it would only be letter soup — prefer option from siblings
    if (!wrong || stripNoise(wrong) === stripNoise(ans)) continue;
    // Don't use ans+"x" - too fake. Skip FB without real distractors.
    if (wrong.endsWith("x") && wrong.slice(0, -1) === ans) continue;
    push(ecFromBlank(stem, ans, wrong, fb.explanation, fb.grammarTopic, lang));
  }

  return out.slice(0, target);
}

function sanitizeFile(relPath, lang) {
  const full = path.join(root, relPath);
  const packs = JSON.parse(fs.readFileSync(full, "utf8"));
  let before = 0;
  let after = 0;
  let chapters = 0;
  for (const [slug, types] of Object.entries(packs)) {
    const prev = types.error_correction ?? [];
    before += prev.length;
    const next = backfillFromChapter(types, lang, Math.max(20, prev.length));
    types.error_correction = next;
    after += next.length;
    chapters += 1;
  }
  fs.writeFileSync(full, JSON.stringify(packs));
  console.log(`${relPath}: ${before} → ${after} EC across ${chapters} chapters`);
}

sanitizeFile("src/config/exercise-banks/data/spanish-packs.json", "spanish");
sanitizeFile("src/config/exercise-banks/data/english-packs.json", "english");
