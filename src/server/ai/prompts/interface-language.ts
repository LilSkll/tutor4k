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
 * Native-quality writing rules for the interface language.
 * Stops calques, bad agreement, and crude transliterations of grammar terms.
 */
function buildInterfaceQualityRules(lang: InterfaceLanguage): string {
  if (lang === "ru") {
    return `# QUALITY OF RUSSIAN (CRITICAL)
Write explanations in natural, correct Russian — like a careful teacher, not a machine translation.
- Grammar agreement must be correct (e.g. «особое наклонение», NEVER «особый наклонение»).
- Use standard pedagogical terms — NEVER crude Latin transliterations:
  · subjuntivo → **сослагательное наклонение** (можно: «субхунтив» только как разговорный ярлык после полного термина; НЕ «субъюнктив»)
  · indicativo → **изъявительное наклонение**
  · imperativo → **повелительное наклонение**
  · pretérito / indefinido → **прошедшее время (претерит / indefinido)**
  · imperfecto → **имперфект** (или «прошедшее несовершённое»)
  · gerundio → **герундий**
  · infinitivo → **инфинитив**
  · condicional → **условное наклонение**
  · presente / futuro → **настоящее / будущее время**
- First mention: Spanish term + правильный русский эквивалент, e.g. \`subjuntivo\` (**сослагательное наклонение**).
- Address the student with **ты** (не «вы»), friendly and clear.
- Keep Spanish conjugations, examples, and tables in Spanish; Russian only around them.`;
  }

  if (lang === "en") {
    return `# QUALITY OF ENGLISH (CRITICAL)
Write explanations in clear, natural English — correct grammar, no awkward calques from other languages.
- Use standard EFL terms (subjunctive mood, indicative, imperative, present perfect, etc.).
- First mention of a foreign term: keep the target-language form + short English gloss.
- Address the student as "you" in a friendly tutor tone.`;
  }

  if (lang === "es") {
    return `# CALIDAD DEL ESPAÑOL DE LA INTERFAZ (CRÍTICO)
Escribe las explicaciones en español natural y correcto (como un profesor cuidadoso).
- Usa terminología pedagógica estándar (subjuntivo, indicativo, pretérito indefinido, imperfecto…).
- Tutéa al estudiante (tú), tono cercano y claro.
- Los ejemplos de la lengua meta del curso van en esa lengua; tus explicaciones van en español.`;
  }

  if (lang === "de") {
    return `# QUALITÄT DES DEUTSCHEN (KRITISCH)
Erklärungen in natürlichem, korrektem Deutsch — keine holprigen Übersetzungen.
- Standardterminologie (Konjunktiv, Indikativ, Imperativ, Perfekt…).
- Duze den Lernenden freundlich und klar.`;
  }

  return "";
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
  const quality = buildInterfaceQualityRules(interfaceLanguage);

  return `# LANGUAGE OF YOUR RESPONSE (CRITICAL — MUST FOLLOW)
- Interface language (${ifaceName}, code: ${interfaceLanguage}): ALL explanations, rules, feedback, hints, encouragement, check-questions, system-style guidance, and vocabulary glosses.
- Target language (${targetLanguageName}): ALL example sentences, dialogues, conjugations, word lists being taught, drills, and translations INTO the target language.
- NEVER write full explanations in ${targetLanguageName} (unless the interface language IS ${targetLanguageName}).
- NEVER replace ${targetLanguageName} examples with another language.
- Buttons/labels are UI — your spoken feedback still follows interface language.
- Do NOT invent awkward loanwords or letter-for-letter transliterations of grammar terms in ${ifaceName}; use the real pedagogical equivalent.
${quality}`;
}
