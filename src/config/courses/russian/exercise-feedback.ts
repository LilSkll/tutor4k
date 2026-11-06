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
  "ru-a2-past-tense": {
    en: "Past tense agrees in gender/number: -л / -ла / -ло / -ли (был / была / было / были).",
    es: "El pasado concuerda en género/número: -л / -ла / -ло / -ли (был / была / было / были).",
    de: "Vergangenheit nach Genus/Numerus: -л / -ла / -ло / -ли (был / была / было / были).",
  },
  "ru-a2-future": {
    en: "Imperfective future: буду + infinitive. Perfective future: one conjugated form (прочитаю).",
    es: "Futuro imperfectivo: буду + infinitivo. Futuro perfectivo: una forma conjugada (прочитаю).",
    de: "Imperfektives Futur: буду + Infinitiv. Perfektives Futur: eine Form (прочитаю).",
  },
  "ru-a2-genitive": {
    en: "After нет / много / мало use the genitive (нет книги, много студентов).",
    es: "Tras нет / много / мало usa el genitivo (нет книги, много студентов).",
    de: "Nach нет / много / мало steht der Genitiv (нет книги, много студентов).",
  },
  "ru-a2-dative": {
    en: "Dative answers кому?/чему?: мне нравится…, звонить другу, помочь студентам.",
    es: "El dativo responde a кому?/чему?: мне нравится…, звонить другу, помочь студентам.",
    de: "Dativ auf кому?/чему?: мне нравится…, звонить другу, помочь студентам.",
  },
  "ru-a2-instrumental": {
    en: "Instrumental: работать врачом, писать ручкой, жить с другом (с + instrumental).",
    es: "Instrumental: работать врачом, писать ручкой, жить с другом (с + instrumental).",
    de: "Instrumental: работать врачом, писать ручкой, жить с другом (с + Instrumental).",
  },
  "ru-a2-aspect-intro": {
    en: "Imperfective = process/habit; perfective = result/one completed event.",
    es: "Imperfectivo = proceso/hábito; perfectivo = resultado/evento completado.",
    de: "Imperfektiv = Prozess/Gewohnheit; perfektiv = Resultat/ein abgeschlossenes Ereignis.",
  },
  "ru-a2-motion-basic": {
    en: "иду/еду for one trip now; хожу/езжу for habit. Foot vs transport matters.",
    es: "иду/еду = un viaje ahora; хожу/езжу = hábito. Pie vs transporte importa.",
    de: "иду/еду = einmalige Fahrt jetzt; хожу/езжу = Gewohnheit. Zu Fuß vs. Verkehrsmittel.",
  },
  "ru-b1-cases-system": {
    en: "Choose the case for the construction (нет + gen., нравиться + dat., с + instr., etc.).",
    es: "Elige el caso según la construcción (нет + gen., нравиться + dat., с + instr., etc.).",
    de: "Wähle den Kasus zur Konstruktion (нет + Gen., нравиться + Dat., с + Instr. usw.).",
  },
  "ru-b1-aspect-tenses": {
    en: "In past/future, aspect still marks process vs result (долго готовился / уже подготовился).",
    es: "En pasado/futuro el aspecto sigue marcando proceso vs resultado (долго готовился / уже подготовился).",
    de: "In Vergangenheit/Futur markiert Aspekt weiter Prozess vs. Resultat (долго готовился / уже подготовился).",
  },
  "ru-b1-motion-prefixes": {
    en: "Prefix shows direction/result: при- arrival, у- departure, по- start, во- into.",
    es: "El prefijo marca dirección/resultado: при- llegada, у- partida, по- inicio, во- hacia dentro.",
    de: "Präfix zeigt Richtung/Resultat: при- Ankunft, у- Weggang, по- Beginn, во- hinein.",
  },
  "ru-b1-complex-sentences": {
    en: "Link clauses with потому что (reason), чтобы (purpose), если (condition), который (relative).",
    es: "Une oraciones con потому что (causa), чтобы (fin), если (condición), который (relativo).",
    de: "Verbinde Sätze mit потому что (Grund), чтобы (Zweck), если (Bedingung), который (Relativ).",
  },
  "ru-b1-text-cohesion": {
    en: "Order the story with сначала → потом/затем → наконец/в итоге.",
    es: "Ordena el relato con сначала → потом/затем → наконец/в итоге.",
    de: "Ordne die Erzählung mit сначала → потом/затем → наконец/в итоге.",
  },
  "ru-b1-argumentation": {
    en: "Use campus formulas: по-моему, согласен/согласна, можно задать вопрос?, объясните ещё раз.",
    es: "Usa fórmulas del campus: по-моему, согласен/согласна, можно задать вопрос?, объясните ещё раз.",
    de: "Nutze Campusformeln: по-моему, согласен/согласна, можно задать вопрос?, объясните ещё раз.",
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
