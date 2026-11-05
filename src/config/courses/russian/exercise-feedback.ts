import type { InterfaceLanguage } from "@/types";

/**
 * Pedagogical feedback lead-ins keyed by RKI grammar topic slug.
 * Cyrillic forms in bank explanations remain learning material; these
 * strings are the interface-language meta-explanation.
 */
export const RUSSIAN_TOPIC_FEEDBACK: Record<
  string,
  Partial<Record<Exclude<InterfaceLanguage, "ru">, string>>
> = {
  "ru-a1-alphabet-phonetics": {
    en: "Check the greeting register (ты vs вы) and the Cyrillic spelling.",
    es: "Revisa el registro del saludo (ты frente a вы) y la ortografía cirílica.",
    de: "Prüfe die Anrede (ты vs. вы) und die kyrillische Schreibweise.",
  },
  "ru-a1-identity-eto": {
    en: "Use Меня зовут… / Я из… / Это… — Russian usually omits «to be» in the present.",
    es: "Usa Меня зовут… / Я из… / Это… — en presente el ruso suele omitir «ser/estar».",
    de: "Verwende Меня зовут… / Я из… / Это… — im Präsens fehlt «sein» oft.",
  },
  "ru-a1-noun-gender": {
    en: "Match мой / моя / моё to the noun’s gender (m. / f. / n.).",
    es: "Haz coincidir мой / моя / моё con el género del sustantivo (m. / f. / n.).",
    de: "Passe мой / моя / моё an das Genus des Substantivs an (m. / f. / n.).",
  },
  "ru-a1-present-tense": {
    en: "Use the present-tense ending that matches the subject (я / ты / он…).",
    es: "Usa la desinencia de presente que corresponde al sujeto (я / ты / он…).",
    de: "Verwende die Präsensendung, die zum Subjekt passt (я / ты / он…).",
  },
  "ru-a1-accusative": {
    en: "Accusative answers кого? / что?. Feminine -а/-я → -у/-ю; masculine animate adds -а/-я; inanimate masculine stays nominative-like.",
    es: "El acusativo responde a кого? / что?. Femenino -а/-я → -у/-ю; masculino animado añade -а/-я; inanimado masculino coincide con el nominativo.",
    de: "Akkusativ antwortet auf кого? / что?. Feminin -а/-я → -у/-ю; maskulin belebt + -а/-я; unbelebt maskulin wie Nominativ.",
  },
  "ru-a1-prepositional": {
    en: "After в / на for location, use the prepositional case (often -е; -ия/-ие → -ии).",
    es: "Tras в / на de lugar, usa el caso preposicional (a menudo -е; -ия/-ие → -ии).",
    de: "Nach в / на für Ort steht der Präpositiv (oft -е; -ия/-ие → -ии).",
  },
  "ru-a1-numbers-time": {
    en: "For clock time use в + number + час(а/ов). Ask Во сколько…?",
    es: "Para la hora usa в + número + час(а/ов). Pregunta Во сколько…?",
    de: "Für die Uhrzeit: в + Zahl + час(а/ов). Frage: Во сколько…?",
  },
};

const FORMULA_LEAD: Record<Exclude<InterfaceLanguage, "ru">, string> = {
  en: "Form:",
  es: "Forma:",
  de: "Form:",
};

/** Keep Cyrillic learning forms / → formulas; drop RU prose. */
export function extractRussianLearningFragment(explanation: string): string {
  const trimmed = explanation.trim();
  if (!trimmed) return "";

  // Prefer arrow / equals formulas (often contain target forms).
  if (/[→+]|=/.test(trimmed)) {
    const parts = trimmed
      .split(/(?<=[.!?…])\s+/)
      .map((s) => s.trim())
      .filter((s) => s && (/[→+]|=/.test(s) || /[A-Za-z]/.test(s)));
    if (parts.length) return parts.join(" ");
    return trimmed;
  }

  // Keep short quoted Russian answers, drop long Russian prose.
  const quoted = trimmed.match(/[«"]([^»"]+)[»"]/g);
  if (quoted?.length) return quoted.join(" ");

  // Latin-only teaching note — keep.
  if (!/[\u0400-\u04FF]/.test(trimmed)) return trimmed;

  return "";
}

export function localizeRussianExerciseExplanation(
  explanation: string,
  language: InterfaceLanguage,
  grammarTopic?: string | null,
): string | null {
  if (language === "ru") return null; // caller keeps authored RU

  const topicLead =
    (grammarTopic &&
      RUSSIAN_TOPIC_FEEDBACK[grammarTopic]?.[language]) ||
    null;
  const fragment = extractRussianLearningFragment(explanation);

  if (topicLead && fragment) {
    return `${topicLead} ${FORMULA_LEAD[language]} ${fragment}`.trim();
  }
  if (topicLead) return topicLead;
  if (fragment) {
    return `${FORMULA_LEAD[language]} ${fragment}`.trim();
  }
  return null;
}
