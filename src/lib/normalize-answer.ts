/**
 * Shared answer normalization for exercise grading.
 * Accents and ñ are optional: «está» = «esta», «niño» = «nino».
 */

/** Explicit fold before NFD — covers environments where ñ decomposes oddly. */
function foldSpanishChars(s: string): string {
  return s
    .replace(/ñ/g, "n")
    .replace(/Ñ/g, "N")
    .replace(/ü/g, "u")
    .replace(/Ü/g, "U");
}

/** Strip punctuation and symbols that learners often omit on mobile keyboards. */
function stripPunctuation(s: string): string {
  return s
    .replace(/\s*\[\d+\]/g, "") // pack-generator index marks, if any remain
    .replace(/[¿?¡!.,;:'"«»„""''`´…]/g, "")
    .replace(/[-–—_/\\|]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function normalizeAnswer(s: string): string {
  return stripPunctuation(
    foldSpanishChars(s)
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{M}/gu, ""),
  );
}

/** True when normalized forms match (accents / ñ / punctuation ignored). */
export function answersMatch(
  userAnswer: string,
  acceptable: string[],
): boolean {
  const userNorm = normalizeAnswer(userAnswer);
  if (!userNorm) return false;
  return acceptable.some((a) => {
    const norm = normalizeAnswer(a);
    return norm.length > 0 && norm === userNorm;
  });
}

/** 0–100 percent from correct count and attempts (safe for zero total). */
export function scorePercent(correct: number, total: number): number {
  if (total <= 0) return 0;
  return Math.round((100 * Math.max(0, correct)) / total);
}
