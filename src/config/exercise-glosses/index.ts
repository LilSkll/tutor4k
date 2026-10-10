import type { InterfaceLanguage } from "@/types";
import curated from "./curated-question-glosses.json";

const MAP = curated as Record<string, Partial<Record<InterfaceLanguage, string>>>;

export function lookupCuratedQuestionGloss(
  question: string,
  lang: InterfaceLanguage,
): string | null {
  const row = MAP[question];
  if (!row) return null;
  return row[lang]?.trim() || null;
}
