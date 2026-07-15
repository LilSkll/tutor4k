import type { InterfaceLanguage } from "@/types";

/** Human-readable name for each interface language code. */
export const INTERFACE_LANGUAGE_NAMES: Record<InterfaceLanguage, string> = {
  ru: "Russian",
  en: "English",
  es: "Spanish",
  de: "German",
};

export function getInterfaceLanguageName(
  lang: InterfaceLanguage,
): string {
  return INTERFACE_LANGUAGE_NAMES[lang] ?? INTERFACE_LANGUAGE_NAMES.en;
}

export function getGreeting(lang: InterfaceLanguage): string {
  const greetings: Record<InterfaceLanguage, string> = {
    ru: "Привет",
    en: "Hello",
    es: "Hola",
    de: "Hallo",
  };
  return greetings[lang] ?? greetings.en;
}

/**
 * Core language directive block for every system prompt.
 * Explanations → interface language; examples → target language only.
 */
export function buildLanguageDirectives(
  interfaceLanguage: InterfaceLanguage,
  targetLanguageName: string,
): string {
  const ifaceName = getInterfaceLanguageName(interfaceLanguage);

  return `# LANGUAGE OF YOUR RESPONSE (CRITICAL — MUST FOLLOW)
- Write ALL explanations, rules, comments, error feedback, hints, and vocabulary translations in ${ifaceName} (code: ${interfaceLanguage}).
- Write ALL example sentences, word lists, conjugation tables, dialogues, and exercise content ONLY in ${targetLanguageName}.
- NEVER explain in a language other than ${ifaceName}.
- NEVER put full explanations in ${targetLanguageName} unless quoting a specific word or phrase being taught.`;
}
