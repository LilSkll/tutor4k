/**
 * German (DaF) error categories — mapped onto existing adaptive topics.
 * Do NOT invent a parallel repetition algorithm: profile + exercise-progress
 * still own mastery. These labels help classify wrong answers for analytics
 * and for linking mistakes to grammar/vocab slugs already on bank items.
 */

export type GermanErrorCategory =
  | "article_gender"
  | "case"
  | "adjective_declension"
  | "verb_conjugation"
  | "word_order"
  | "preposition_government"
  | "tense_auxiliary"
  | "spelling"
  | "vocabulary_collocation"
  | "other";

const SLUG_CATEGORY: Array<{ re: RegExp; category: GermanErrorCategory }> = [
  {
    re: /article|gender|nominative|akkusativ|dativ|genitiv|case|падеж|artikel|der-die-das/i,
    category: "case",
  },
  {
    re: /adjective|declension|endung|adj-|прилагательн/i,
    category: "adjective_declension",
  },
  {
    re: /alphabet|pronunciation|spelling|orthograph|ß|umlaut/i,
    category: "spelling",
  },
  {
    re: /praesens|perfekt|praeteritum|plusquamperfekt|futur|tense|sein-haben|modal|separable|reflexive|imperative|passive|konjunktiv|verb/i,
    category: "verb_conjugation",
  },
  {
    re: /questions-v2|word.order|subordinate|relative|connector|participial|nominal|v2|порядок/i,
    category: "word_order",
  },
  {
    re: /wechsel|preposition|verb-prep|praeposition|предлог/i,
    category: "preposition_government",
  },
  {
    re: /perfekt|praeteritum|plusquamperfekt|futur|auxiliary|haben|sein/i,
    category: "tense_auxiliary",
  },
  {
    re: /vocab|lexical|idiom|collocation|particle|register|argument|pragmatic|лексик|идиом/i,
    category: "vocabulary_collocation",
  },
];

/** Prefer article/gender when the slug is clearly about articles/gender only. */
const ARTICLE_RE = /articles-gender|gender-nominative|artikel/i;

/** Infer a coarse category from bank grammar/vocab topic slugs. */
export function germanErrorCategoryFromTopics(
  grammarTopic?: string | null,
  vocabTopic?: string | null,
): GermanErrorCategory {
  const blob = `${grammarTopic ?? ""} ${vocabTopic ?? ""}`;
  if (ARTICLE_RE.test(blob)) return "article_gender";
  for (const row of SLUG_CATEGORY) {
    if (row.re.test(blob)) return row.category;
  }
  return "other";
}
