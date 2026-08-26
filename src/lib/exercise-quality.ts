/**
 * Quality gates for bank exercises — reject synthetic garbage that slipped
 * into packs (index markers, Cyrillic "answers", capitalization-only diffs).
 */

const CYRILLIC = /[\u0400-\u04FF]/;
const INDEX_MARK = /\[\d+\]/g;
const DUP_INDEX = /\[\d+\]\s*\[\d+\]/;

function stripNoise(s: string): string {
  return s
    .replace(INDEX_MARK, "")
    .replace(/[¿?¡!.,;:'"«»„""''`´…()]/g, "")
    .replace(/[-–—_/\\|→]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

/** True when question/answer look like a real error-correction item. */
export function isUsableErrorCorrection(ex: {
  question?: string;
  answer?: string;
}): boolean {
  const q = (ex.question ?? "").trim();
  const a = (ex.answer ?? "").trim();
  if (q.length < 4 || a.length < 4) return false;
  if (CYRILLIC.test(q) || CYRILLIC.test(a)) return false;
  if (DUP_INDEX.test(q) || DUP_INDEX.test(a)) return false;
  if (INDEX_MARK.test(q) || INDEX_MARK.test(a)) return false;
  // Sentence-building token dumps leaked into EC
  if ((q.match(/ \/? /g) ?? []).length >= 2) return false;
  // Prompt/answer differ only by punctuation / case / markers
  if (stripNoise(q) === stripNoise(a)) return false;
  // Arrow template without a real correction after →
  if (q.includes("→")) {
    const qAfter = q.split("→").pop()?.trim() ?? "";
    const aAfter = a.includes("→")
      ? (a.split("→").pop()?.trim() ?? "")
      : a;
    if (!qAfter || stripNoise(qAfter) === stripNoise(aAfter || a)) return false;
  }
  return true;
}

/** Strip generator index marks like `[12]` from display/grade strings. */
export function stripExerciseIndexMarks(s: string): string {
  return s
    .replace(/\s*\[\d+\]/g, "")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([.?!])$/u, "$1")
    .trim();
}
