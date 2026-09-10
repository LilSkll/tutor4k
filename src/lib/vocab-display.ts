import type { InterfaceLanguage, VocabTopic, VocabWord } from "@/types";
import { ENGLISH_VOCAB_GLOSS } from "@/config/courses/english/vocabulary/glosses";
import { SPANISH_TOPIC_TITLES_EN } from "@/config/courses/spanish/vocabulary/topic-titles";

function hasCyrillic(text: string): boolean {
  return /[\u0400-\u04FF]/.test(text);
}

function isLatinScript(text: string): boolean {
  return !hasCyrillic(text);
}

/** Topic title in the user's interface language. */
export function getVocabTopicTitle(
  topic: VocabTopic,
  interfaceLanguage: InterfaceLanguage,
  courseId?: string,
): string {
  switch (interfaceLanguage) {
    case "ru":
      return topic.topic;
    case "es":
      return topic.topicEs;
    case "en":
    case "de":
      if (courseId === "spanish") {
        return SPANISH_TOPIC_TITLES_EN[topic.slug] ?? topic.topicEs;
      }
      return (
        topic.topicEn ??
        (isLatinScript(topic.topicEs) ? topic.topicEs : topic.topic)
      );
    default:
      return topic.topic;
  }
}

/** Secondary line: target-language topic name when it differs from the primary title. */
export function getVocabTopicSubtitle(
  topic: VocabTopic,
  interfaceLanguage: InterfaceLanguage,
  courseId?: string,
): string | null {
  const primary = getVocabTopicTitle(topic, interfaceLanguage, courseId);

  // English course: target subtitle is always English (never Spanish topicEs leftovers).
  if (courseId === "english") {
    const enTitle =
      topic.topicEn?.trim() ||
      (isLatinScript(topic.topicEs) && !looksSpanishTopicTitle(topic.topicEs)
        ? topic.topicEs
        : "") ||
      (isLatinScript(topic.topic) ? topic.topic : "");
    return enTitle && enTitle !== primary ? enTitle : null;
  }

  if (interfaceLanguage === "ru") {
    return topic.topicEs !== primary ? topic.topicEs : null;
  }

  if (interfaceLanguage === "es") {
    return null;
  }

  if (interfaceLanguage === "en" || interfaceLanguage === "de") {
    return topic.topicEs !== primary ? topic.topicEs : null;
  }

  return null;
}

function looksSpanishTopicTitle(s: string): boolean {
  return /\b(Información|Familia|Hogar|Objetos|Rutina|Ciudad|Viajes|Trabajo|Compras|Salud|Cuerpo|Emociones|Personalidad)\b/i.test(
    s,
  );
}

/** Word gloss in the user's interface language. */
export function getWordGloss(
  word: VocabWord,
  interfaceLanguage: InterfaceLanguage,
  courseId?: string,
): string {
  if (word.translations?.[interfaceLanguage]) {
    return word.translations[interfaceLanguage]!;
  }

  if (interfaceLanguage === "ru") {
    return word.translation;
  }

  if (courseId === "english") {
    const key = word.word.toLowerCase();
    const gloss = ENGLISH_VOCAB_GLOSS[interfaceLanguage]?.[key];
    if (gloss) return gloss;
  }

  if (hasCyrillic(word.translation)) {
    return word.translation;
  }

  return word.translation;
}
