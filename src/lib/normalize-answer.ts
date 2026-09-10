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

/**
 * Interchangeable discourse openers / linkers. First item is the canonical form
 * used when comparing translations (en definitiva ≈ en suma ≈ en conclusión…).
 */
const SYNONYM_PHRASE_GROUPS: string[][] = [
  [
    "en definitiva",
    "en suma",
    "en conclusion",
    "en resumen",
    "para concluir",
    "al final",
    "finalmente",
    "en fin",
    "en total",
  ],
  ["sin embargo", "no obstante", "ahora bien"],
  [
    "por lo tanto",
    "por consiguiente",
    "por tanto",
    "asi pues",
    "asi que",
    "por eso",
  ],
  ["ademas", "asimismo", "igualmente"],
  ["por un lado", "por una parte"],
  ["por otro lado", "por otra parte"],
  ["en primer lugar", "para empezar", "primero"],
  ["a pesar de ello", "pese a ello"],
  ["debido a que", "puesto que", "ya que"],
  ["a fin de que", "para que"],
];

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Replace synonym linker phrases with a single canonical token. */
export function canonicalizeSynonymPhrases(normalized: string): string {
  let s = ` ${normalized} `;
  for (const group of SYNONYM_PHRASE_GROUPS) {
    const canon = group[0]!;
    const sorted = [...group].sort((a, b) => b.length - a.length);
    for (const phrase of sorted) {
      const re = new RegExp(`(\\s)${escapeRegExp(phrase)}(?=\\s)`, "g");
      s = s.replace(re, `$1${canon}`);
    }
  }
  return s.replace(/\s+/g, " ").trim();
}

/**
 * Extra folding for free-text translations: synonym linkers + optional
 * leading subject pronoun that does not change the grammar target.
 */
export function normalizeAnswerFlexible(s: string): string {
  let n = canonicalizeSynonymPhrases(normalizeAnswer(s));
  n = n.replace(
    /^(yo|tu|el|ella|usted|nosotros|nosotras|vosotros|vosotras|ellos|ellas|ustedes)\s+/u,
    "",
  );
  return n.trim();
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

/**
 * Like answersMatch, but also accepts synonym discourse markers and optional
 * subject pronouns — used for translation / free-text grading.
 */
export function answersMatchFlexible(
  userAnswer: string,
  acceptable: string[],
): boolean {
  if (answersMatch(userAnswer, acceptable)) return true;
  const userNorm = normalizeAnswerFlexible(userAnswer);
  if (!userNorm) return false;
  return acceptable.some((a) => {
    const norm = normalizeAnswerFlexible(a);
    return norm.length > 0 && norm === userNorm;
  });
}

/** 0–100 percent from correct count and attempts (safe for zero total). */
export function scorePercent(correct: number, total: number): number {
  if (total <= 0) return 0;
  return Math.round((100 * Math.max(0, correct)) / total);
}
