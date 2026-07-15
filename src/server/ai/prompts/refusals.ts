import type { InterfaceLanguage } from "@/types";

/** Course-aware off-topic refusal (interface language × target language). */
export function getOffTopicRefusal(
  targetLanguageName: string,
  interfaceLanguage: InterfaceLanguage,
): string {
  const messages: Record<InterfaceLanguage, string> = {
    ru: `Извини, я специализируюсь исключительно на изучении ${targetLanguageName} — грамматике, лексике, фонетике, культуре и подготовке к экзаменам. Спроси меня что-нибудь о ${targetLanguageName}!`,
    en: `I'm sorry, I specialize exclusively in learning ${targetLanguageName} — grammar, vocabulary, phonetics, culture and exam preparation. Ask me something about ${targetLanguageName}!`,
    es: `Lo siento, me especializo exclusivamente en el aprendizaje de ${targetLanguageName} — gramática, vocabulario, fonética, cultura y preparación de exámenes. ¡Pregúntame algo sobre ${targetLanguageName}!`,
    de: `Entschuldigung, ich bin ausschließlich auf das Lernen von ${targetLanguageName} spezialisiert — Grammatik, Wortschatz, Phonetik, Kultur und Prüfungsvorbereitung. Frag mich etwas über ${targetLanguageName}!`,
  };
  return messages[interfaceLanguage] ?? messages.en;
}
