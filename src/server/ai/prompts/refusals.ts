import type { InterfaceLanguage } from "@/types";

/** Course-aware off-topic refusal (interface language × target language). */
export function getOffTopicRefusal(
  targetLanguageName: string,
  interfaceLanguage: InterfaceLanguage,
): string {
  const messages: Record<InterfaceLanguage, string> = {
    ru: `Я помогаю только с изучением ${targetLanguageName}: грамматика, лексика, произношение, упражнения, а также культура, традиции, литература и поэзия, связанные с этим языком. Другие темы (рецепты, код, политика, новости, спорт и т.п.) — вне моей роли. Спроси что-нибудь о ${targetLanguageName}!`,
    en: `I only help with learning ${targetLanguageName}: grammar, vocabulary, pronunciation, exercises, plus culture, traditions, literature and poetry related to this language. Other topics (recipes, coding, politics, news, sports, etc.) are outside my role. Ask me something about ${targetLanguageName}!`,
    es: `Solo ayudo con el aprendizaje de ${targetLanguageName}: gramática, vocabulario, pronunciación, ejercicios, y también cultura, tradiciones, literatura y poesía relacionadas con este idioma. Otros temas (recetas, código, política, noticias, deporte, etc.) quedan fuera de mi rol. ¡Pregúntame algo sobre ${targetLanguageName}!`,
    de: `Ich helfe nur beim Lernen von ${targetLanguageName}: Grammatik, Wortschatz, Aussprache, Übungen sowie Kultur, Traditionen, Literatur und Poesie dieser Sprache. Andere Themen (Rezepte, Code, Politik, Nachrichten, Sport usw.) liegen außerhalb meiner Rolle. Frag mich etwas über ${targetLanguageName}!`,
  };
  return messages[interfaceLanguage] ?? messages.en;
}
