/**
 * Shared answer normalization for exercise grading.
 *
 * Latin (Spanish / English / German UI prompts & ES/EN banks):
 *   accents and ñ are optional — «está» = «esta», «niño» = «nino».
 *
 * Cyrillic (Russian target answers):
 *   NFC + case-fold + punctuation strip only.
 *   Do NOT NFD-strip combining marks (that destroyed «й» → «и»).
 *   Do NOT globally fold «ё» → «е» (that erased «всё» ≠ «все»).
 *   Orthographic variants like «ждёт»/«ждет» belong in acceptableAnswers.
 */

const CYRILLIC = /[\u0400-\u04FF]/;

/** True when the string contains Cyrillic letters. */
export function hasCyrillicScript(s: string): boolean {
  return CYRILLIC.test(s);
}

/** Explicit fold before NFD — covers environments where ñ decomposes oddly. */
function foldSpanishChars(s: string): string {
  return s
    .replace(/ñ/g, "n")
    .replace(/Ñ/g, "N")
    .replace(/ü/g, "u")
    .replace(/Ü/g, "U");
}

/** German orthographic tolerances used only on Latin-path answers. */
function foldGermanChars(s: string): string {
  return s.replace(/ß/g, "ss");
}

/**
 * Strip punctuation learners often omit on mobile keyboards.
 *
 * Latin: hyphens become spaces («well-known» ≈ «well known»).
 * Cyrillic: keep hyphen-minus — «По-моему» ≠ «По моему», «по-русски» ≠ «по русски».
 * En/em dashes in Cyrillic compound words normalize to hyphen-minus.
 */
function stripPunctuation(s: string, opts?: { preserveHyphen?: boolean }): string {
  let out = s
    .replace(/\s*\[\d+\]/g, "") // pack-generator index marks, if any remain
    .replace(/[¿?¡!.,;:'"«»„""''`´…]/g, "");
  if (opts?.preserveHyphen) {
    // Unify dash characters to ASCII hyphen; do not turn them into spaces.
    out = out.replace(/[–—―]/g, "-").replace(/[_/\\|]/g, " ");
  } else {
    out = out.replace(/[-–—_/\\|]/g, " ");
  }
  return out.replace(/\s+/g, " ").trim();
}

/**
 * Latin-script folding: optional accents / ñ / ß.
 * Must never run on Cyrillic — NFD+\p{M} turns «й» into «и».
 */
function normalizeLatinAnswer(s: string): string {
  return stripPunctuation(
    foldGermanChars(foldSpanishChars(s))
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{M}/gu, ""),
  );
}

/**
 * Cyrillic-safe folding: preserve «й»/«и», «ё»/«е», and orthographic hyphens.
 * Unify only NFC forms of the same grapheme + case + non-hyphen punctuation.
 */
function normalizeCyrillicAnswer(s: string): string {
  return stripPunctuation(s.normalize("NFC").trim().toLocaleLowerCase("ru-RU"), {
    preserveHyphen: true,
  });
}

/**
 * Normalize a learner/bank answer for equality checks.
 * Script-aware: Cyrillic keeps letter identity; Latin keeps accent-optional grading.
 */
export function normalizeAnswer(s: string): string {
  const nfc = s.normalize("NFC");
  if (hasCyrillicScript(nfc)) {
    return normalizeCyrillicAnswer(nfc);
  }
  return normalizeLatinAnswer(nfc);
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

/** True when normalized forms match (script-aware). */
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
