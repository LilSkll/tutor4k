import type { GrammarTopic } from "@/types";

/** Topic fields safe to serialize into the grammar list UI (no article body). */
export type GrammarTopicMeta = Omit<GrammarTopic, "content">;

/** Meta with display strings for the active interface language (server-prepared). */
export type LocalizedGrammarTopicMeta = GrammarTopicMeta & {
  localizedTitle: string;
  localizedCategory: string;
  localizedSummary: string;
};

export function toGrammarTopicMeta(topic: GrammarTopic): GrammarTopicMeta {
  const { content, ...meta } = topic;
  void content;
  return meta;
}

export function toGrammarTopicMetaList(
  topics: GrammarTopic[],
): GrammarTopicMeta[] {
  return topics.map(toGrammarTopicMeta);
}
