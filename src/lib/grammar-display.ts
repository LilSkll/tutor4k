import type { GrammarTopic, InterfaceLanguage } from "@/types";
import {
  GRAMMAR_CATEGORY,
  GRAMMAR_TOPIC,
} from "@/config/grammar-localizations";
import {
  getDeCategory,
  getDeTopicFields,
} from "@/config/grammar-localizations-de";

function hasCyrillic(text: string): boolean {
  return /[\u0400-\u04FF]/.test(text);
}

export function getGrammarTopicTitle(
  topic: GrammarTopic,
  interfaceLanguage: InterfaceLanguage,
): string {
  if (interfaceLanguage === "de") {
    const de = getDeTopicFields(topic.slug)?.title;
    if (de) return de;
  }

  const loc = GRAMMAR_TOPIC[topic.slug]?.[interfaceLanguage]?.title;
  if (loc) return loc;

  switch (interfaceLanguage) {
    case "ru":
      return topic.title;
    case "es":
      return topic.titleEs;
    case "en":
    case "de":
      // Prefer native title; only fall back to titleEs when title is Russian.
      return hasCyrillic(topic.title)
        ? topic.titleEs || topic.title
        : topic.title || topic.titleEs;
    default:
      return topic.title;
  }
}

export function getGrammarCategory(
  topic: GrammarTopic,
  interfaceLanguage: InterfaceLanguage,
): string {
  if (interfaceLanguage === "de") {
    const de =
      getDeTopicFields(topic.slug)?.category ?? getDeCategory(topic.category);
    if (de) return de;
  }

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
  if (interfaceLanguage === "de") {
    const de = getDeTopicFields(topic.slug)?.summary;
    if (de) return de;
  }

  const loc = GRAMMAR_TOPIC[topic.slug]?.[interfaceLanguage]?.summary;
  if (loc) return loc;
  if (interfaceLanguage === "ru") return topic.summary;
  return getGrammarTopicTitle(topic, interfaceLanguage);
}

/** Reference markdown article for the topic (Russian source). */
export function getGrammarContent(
  topic: GrammarTopic,
  _interfaceLanguage: InterfaceLanguage,
): string {
  return topic.content;
}

export function usesNativeGrammarContent(
  interfaceLanguage: InterfaceLanguage,
): boolean {
  return interfaceLanguage === "ru";
}
