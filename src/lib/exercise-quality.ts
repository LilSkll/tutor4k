/**
 * Quality gates for bank exercises — reject synthetic pack-generator garbage.
 */

const CYRILLIC = /[\u0400-\u04FF]/;
const INDEX_MARK = /\[\d+\]/;
const HASH_N = /#\d+/;
const COMPLETA_STUB =
  /^(Completa|Complete)\s*\([^)]*\)(\s*#\d+)?\s*:/i;
const FAKE_X = /\b[A-Za-záéíóúñüÁÉÍÓÚÑÜ]{1,16}x\b/i;
const KNOWN_X_WORDS = new Set([
  "box",
  "fax",
  "tax",
  "mix",
  "six",
  "fix",
  "flux",
  "crux",
  "lynx",
  "onyx",
]);

function stripNoise(s: string): string {
  return s
    .replace(/\[\d+\]/g, "")
    .replace(/[¿?¡!.,;:'"«»„""''`´…()]/g, "")
    .replace(/[-–—_/\\|→]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function hasFakeXToken(s: string): boolean {
  const m = s.match(FAKE_X);
  if (!m) return false;
  return !KNOWN_X_WORDS.has(m[0].toLowerCase());
}

function isTokenDump(q: string): boolean {
  return (q.match(/ \/? /g) ?? []).length >= 2;
}

export type BankExerciseLike = {
  type?: string;
  question?: string;
  answer?: string;
  options?: string[];
};

/** True when question/answer look like a real error-correction item. */
export function isUsableErrorCorrection(ex: {
  question?: string;
  answer?: string;
}): boolean {
  const q = (ex.question ?? "").trim();
  const a = (ex.answer ?? "").trim();
  if (q.length < 4 || a.length < 4) return false;
  if (CYRILLIC.test(q) || CYRILLIC.test(a)) return false;
  if (INDEX_MARK.test(q) || INDEX_MARK.test(a)) return false;
  if (HASH_N.test(q) || HASH_N.test(a)) return false;
  if (COMPLETA_STUB.test(q) || COMPLETA_STUB.test(a)) return false;
  if (hasFakeXToken(q) || hasFakeXToken(a)) return false;
  if (isTokenDump(q)) return false;
  if (stripNoise(q) === stripNoise(a)) return false;
  if (q.includes("→")) {
    const qAfter = q.split("→").pop()?.trim() ?? "";
    const aAfter = a.includes("→")
      ? (a.split("→").pop()?.trim() ?? "")
      : a;
    if (!qAfter || stripNoise(qAfter) === stripNoise(aAfter || a)) return false;
  }
  return true;
}

/** True when a fill-blank stem is a real sentence with a blank. */
export function isUsableFillBlank(ex: {
  question?: string;
  answer?: string;
}): boolean {
  const q = (ex.question ?? "").trim();
  const a = (ex.answer ?? "").trim();
  if (!q || !a) return false;
  if (!/___+/.test(q)) return false;
  if (COMPLETA_STUB.test(q)) return false;
  if (INDEX_MARK.test(q) || HASH_N.test(q)) return false;
  if (CYRILLIC.test(q)) return false;
  if (hasFakeXToken(a)) return false;
  // "Completa (Topic): ___" without other words
  if (/^(Completa|Complete)\b/i.test(q) && q.replace(/___+/g, "").trim().length < 8) {
    return false;
  }
  return true;
}

/** True when MC is a real target-language stem with options. */
export function isUsableMultipleChoice(ex: {
  question?: string;
  answer?: string;
  options?: string[];
}): boolean {
  const q = (ex.question ?? "").trim();
  const a = (ex.answer ?? "").trim();
  const options = ex.options ?? [];
  if (!q || !a) return false;
  if (INDEX_MARK.test(q) || HASH_N.test(q)) return false;
  if (COMPLETA_STUB.test(q)) return false;
  if (CYRILLIC.test(q)) return false;
  if (isTokenDump(q)) return false;
  if (options.length < 2) return false;
  if (hasFakeXToken(a) || options.some((o) => hasFakeXToken(o))) return false;
  return true;
}

/** True when translation prompt/answer look usable. */
export function isUsableTranslation(ex: {
  question?: string;
  answer?: string;
}): boolean {
  const q = (ex.question ?? "").trim();
  const a = (ex.answer ?? "").trim();
  if (q.length < 2 || a.length < 2) return false;
  if (INDEX_MARK.test(q) || INDEX_MARK.test(a)) return false;
  if (HASH_N.test(q) || HASH_N.test(a)) return false;
  if (COMPLETA_STUB.test(q) || COMPLETA_STUB.test(a)) return false;
  if (hasFakeXToken(a)) return false;
  // Answer should be in the target language (not another Cyrillic prompt)
  if (CYRILLIC.test(a)) return false;
  return true;
}

/** True when sentence-building has enough tokens and a sentence answer. */
export function isUsableSentenceBuilding(ex: {
  question?: string;
  answer?: string;
  options?: string[];
}): boolean {
  const a = (ex.answer ?? "").trim();
  const options = ex.options ?? [];
  if (!a || CYRILLIC.test(a)) return false;
  if (INDEX_MARK.test(a) || HASH_N.test(a)) return false;
  if (hasFakeXToken(a)) return false;
  if (options.length < 3) return false;
  return true;
}

/** Route by exercise type (defaults to requiring non-empty Q/A). */
export function isUsableBankExercise(ex: BankExerciseLike): boolean {
  const type = ex.type ?? "";
  switch (type) {
    case "error_correction":
      return isUsableErrorCorrection(ex);
    case "fill_blank":
      return isUsableFillBlank(ex);
    case "multiple_choice":
      return isUsableMultipleChoice(ex);
    case "translation":
      return isUsableTranslation(ex);
    case "sentence_building":
      return isUsableSentenceBuilding(ex);
    default:
      return Boolean(ex.question?.trim() && ex.answer?.trim());
  }
}

/** Strip generator index marks like `[12]` from display/grade strings. */
export function stripExerciseIndexMarks(s: string): string {
  return s
    .replace(/\s*\[\d+\]/g, "")
    .replace(/\s*\(#\d+\)/g, "")
    .replace(/\s*#\d+\b/g, "")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([.?!])$/u, "$1")
    .trim();
}
