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
- Interface language (${ifaceName}, code: ${interfaceLanguage}): ALL explanations, rules, feedback, hints, encouragement, check-questions, system-style guidance, and vocabulary glosses.
- Target language (${targetLanguageName}): ALL example sentences, dialogues, conjugations, word lists being taught, drills, and translations INTO the target language.
- NEVER write full explanations in ${targetLanguageName} (unless the interface language IS ${targetLanguageName}).
- NEVER replace ${targetLanguageName} examples with another language.
- Buttons/labels are UI — your spoken feedback still follows interface language.`;
}
