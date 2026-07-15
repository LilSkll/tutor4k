import type { GrammarTopic, InterfaceLanguage } from "@/types";
import {
  GRAMMAR_CATEGORY,
  GRAMMAR_TOPIC,
} from "@/config/grammar-localizations";

function hasCyrillic(text: string): boolean {
  return /[\u0400-\u04FF]/.test(text);
}

export function getGrammarTopicTitle(
  topic: GrammarTopic,
  interfaceLanguage: InterfaceLanguage,
): string {
  const loc = GRAMMAR_TOPIC[topic.slug]?.[interfaceLanguage]?.title;
  if (loc) return loc;

  switch (interfaceLanguage) {
    case "ru":
      return topic.title;
    case "es":
      return topic.titleEs;
    case "en":
    case "de":
      return hasCyrillic(topic.titleEs) ? topic.titleEs : topic.titleEs || topic.title;
    default:
      return topic.title;
  }
}

export function getGrammarCategory(
  topic: GrammarTopic,
  interfaceLanguage: InterfaceLanguage,
): string {
  const loc = GRAMMAR_TOPIC[topic.slug]?.[interfaceLanguage]?.category;
  if (loc) return loc;

  if (interfaceLanguage === "ru") return topic.category;

  return (
    GRAMMAR_CATEGORY[topic.category]?.[interfaceLanguage] ?? topic.category
  );
}

export function getGrammarSummary(
  topic: GrammarTopic,
  interfaceLanguage: InterfaceLanguage,
): string {
  const loc = GRAMMAR_TOPIC[topic.slug]?.[interfaceLanguage]?.summary;
  if (loc) return loc;
  if (interfaceLanguage === "ru") return topic.summary;
  return getGrammarTopicTitle(topic, interfaceLanguage);
}

/** Reference markdown — Russian source until localized content is added. */
export function getGrammarContent(
  topic: GrammarTopic,
  interfaceLanguage: InterfaceLanguage,
): string | null {
  if (interfaceLanguage === "ru") return topic.content;
  return null;
}
