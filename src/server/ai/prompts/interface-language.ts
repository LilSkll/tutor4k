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
- Use standard EFL terms only: past perfect (NOT Russian «предпрошедшее»), present perfect, subjunctive mood, etc.
- NEVER insert Cyrillic / Russian glosses when teaching in English.
- First mention of a foreign/target term: keep the target-language form + short English gloss.
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
  const forbidden = forbiddenInterfaceLanguages(interfaceLanguage);

  return `# LANGUAGE OF YOUR RESPONSE (CRITICAL — MUST FOLLOW)
- Interface language RIGHT NOW: **${ifaceName}** (code: ${interfaceLanguage}).
- Write ALL explanations, rules, feedback, hints, encouragement, check-questions, glosses, and meta-comments in **${ifaceName} only**.
- Target language (${targetLanguageName}): ONLY example sentences, dialogues, conjugations, word lists being taught, and translations INTO the target language.
- NEVER write explanations in ${targetLanguageName} (unless the interface language IS ${targetLanguageName}).
- NEVER mix other interface languages into the reply. Forbidden in this reply: ${forbidden}.
- Especially: do NOT add Russian words/glosses like «предпрошедшее», «сослагательное» when interface is not Russian.
- Do NOT invent awkward loanwords; use real pedagogical terms in ${ifaceName}.
- Buttons/labels are UI — your spoken feedback still follows ${ifaceName}.
${quality}`;
}

function forbiddenInterfaceLanguages(lang: InterfaceLanguage): string {
  const all: InterfaceLanguage[] = ["ru", "en", "es", "de"];
  return all
    .filter((l) => l !== lang)
    .map((l) => INTERFACE_LANGUAGE_NAMES[l])
    .join(", ");
}
