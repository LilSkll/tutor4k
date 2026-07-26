/**
 * Shared answer normalization for exercise grading.
 * Strips case, punctuation, extra spaces, and diacritics so
 * «está» matches «esta» unless pedagogy later flags accents required.
 */
export function normalizeAnswer(s: string): string {
  return s
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[¿?¡!.,;:'"«»]/g, "")
    .replace(/\s+/g, " ");
}

/** 0–100 percent from correct count and attempts (safe for zero total). */
export function scorePercent(correct: number, total: number): number {
  if (total <= 0) return 0;
  return Math.round((100 * Math.max(0, correct)) / total);
}
