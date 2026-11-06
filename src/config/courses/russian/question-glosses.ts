import type { InterfaceLanguage } from "@/types";
import { RUSSIAN_A2B1_QUESTION_GLOSSES } from "./question-glosses-a2b1";
import { RUSSIAN_A1_MC_GLOSSES } from "./question-glosses-mc";
import { RUSSIAN_A1_REST_GLOSSES } from "./question-glosses-rest";

/**
 * Pedagogical question glosses for RKI A1 (chapters 1–8).
 * Keys = exact authored question strings. Values = UI-language support
 * that must not reveal the answer.
 */
export const RUSSIAN_A1_QUESTION_GLOSSES: Record<
  string,
  Partial<Record<Exclude<InterfaceLanguage, "ru">, string>>
> = {
  ...RUSSIAN_A1_MC_GLOSSES,
  ...RUSSIAN_A1_REST_GLOSSES,
};

/**
 * A1 plus A2–B1. A1 is spread last so an identical stem keeps the A1 gloss.
 */
export const RUSSIAN_QUESTION_GLOSSES: Record<
  string,
  Partial<Record<Exclude<InterfaceLanguage, "ru">, string>>
> = {
  ...RUSSIAN_A2B1_QUESTION_GLOSSES,
  ...RUSSIAN_A1_QUESTION_GLOSSES,
};

export function lookupRussianQuestionGloss(
  question: string,
  lang: InterfaceLanguage,
): string | null {
  if (lang === "ru") return null;
  const row = RUSSIAN_QUESTION_GLOSSES[question];
  if (!row) return null;
  return row[lang]?.trim() || null;
}
