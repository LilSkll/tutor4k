import type { InterfaceLanguage } from "@/types";
import {
  getGrammarCategory,
  getGrammarSummary,
  getGrammarTopicTitle,
} from "@/lib/grammar-display";
import type {
  GrammarTopicMeta,
  LocalizedGrammarTopicMeta,
} from "@/lib/grammar-topic-meta";

/** Server-only: attach localized labels (keeps grammar banks off the client). */
export function localizeGrammarTopicMeta(
  topic: GrammarTopicMeta,
  language: InterfaceLanguage,
): LocalizedGrammarTopicMeta {
  return {
    ...topic,
    localizedTitle: getGrammarTopicTitle(topic, language),
    localizedCategory: getGrammarCategory(topic, language),
    localizedSummary: getGrammarSummary(topic, language),
  };
}

export function localizeGrammarTopicMetaList(
  topics: GrammarTopicMeta[],
  language: InterfaceLanguage,
): LocalizedGrammarTopicMeta[] {
  return topics.map((topic) => localizeGrammarTopicMeta(topic, language));
}
