import type { GrammarTopic } from "@/types";

/** Topic fields safe to serialize into the grammar list UI (no article body). */
export type GrammarTopicMeta = Omit<GrammarTopic, "content">;

export function toGrammarTopicMeta(topic: GrammarTopic): GrammarTopicMeta {
  const { content: _content, ...meta } = topic;
  return meta;
}

export function toGrammarTopicMetaList(
  topics: GrammarTopic[],
): GrammarTopicMeta[] {
  return topics.map(toGrammarTopicMeta);
}
