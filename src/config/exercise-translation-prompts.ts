import type { InterfaceLanguage } from "@/types";
import prompts from "@/config/exercise-translation-prompts.json";

type PromptMap = Record<
  string,
  Partial<Record<Exclude<InterfaceLanguage, "ru">, string>>
>;

const MAP = prompts as PromptMap;

/** Localized source sentence for a RU-authored translation exercise. */
export function lookupTranslationPrompt(
  russianQuestion: string,
  interfaceLanguage: InterfaceLanguage,
): string | null {
  if (interfaceLanguage === "ru") return null;
  const entry = MAP[russianQuestion.trim()];
  if (!entry) return null;
  return entry[interfaceLanguage]?.trim() ?? entry.en?.trim() ?? null;
}
