/**
 * Russian (RKI) error categories — mapped onto existing adaptive topics.
 * Do NOT invent a parallel repetition algorithm: profile + exercise-progress
 * still own mastery. These labels help classify wrong answers for analytics
 * and for linking mistakes to grammar/vocab slugs already on bank items.
 */

export type RussianErrorCategory =
  | "case"
  | "ending"
  | "agreement"
  | "gender"
  | "number"
  | "aspect"
  | "verb_government"
  | "preposition"
  | "pronoun"
  | "lexical"
  | "sentence_structure"
  | "other";

const SLUG_CATEGORY: Array<{ re: RegExp; category: RussianErrorCategory }> = [
  { re: /accusative|genitive|dative|instrumental|prepositional|cases|падеж/i, category: "case" },
  { re: /gender|noun-gender|род/i, category: "gender" },
  { re: /aspect|вид/i, category: "aspect" },
  { re: /motion|глагол.*движен|приставочн/i, category: "verb_government" },
  { re: /present|past|future|tense|время|спряжен/i, category: "ending" },
  { re: /pronoun|местоимен|мой|моя|моё/i, category: "pronoun" },
  { re: /preposition|предлог/i, category: "preposition" },
  { re: /complex|sentence|связн|аргумент|connector/i, category: "sentence_structure" },
  { re: /alphabet|phonetic|привет|greeting|identity|знаком/i, category: "lexical" },
];

/** Infer a coarse category from bank grammar/vocab topic slugs. */
export function russianErrorCategoryFromTopics(
  grammarTopic?: string | null,
  vocabTopic?: string | null,
): RussianErrorCategory {
  const blob = `${grammarTopic ?? ""} ${vocabTopic ?? ""}`;
  for (const row of SLUG_CATEGORY) {
    if (row.re.test(blob)) return row.category;
  }
  if (/согласован|agreement|мой|моя|моё/i.test(blob)) return "agreement";
  return "other";
}
