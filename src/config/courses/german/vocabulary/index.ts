import type { VocabTopic, VocabWord } from "@/types";
import { GERMAN_CHAPTERS } from "../chapters";
import { totalWordCount, wordsByChapter } from "./helpers";
import { GERMAN_VOCAB_A1_A2 } from "./topics-a1-a2";
import { GERMAN_VOCAB_B1_C1 } from "./topics-b1-c1";
import { GERMAN_VOCAB_EXPAND_45 } from "./topics-expand-45";

export { w, topic, flattenWords, totalWordCount, wordsByChapter } from "./helpers";

/** Full German course vocabulary (A1–C2), linked to chapters. */
export const GERMAN_VOCAB: VocabTopic[] = [
  ...GERMAN_VOCAB_A1_A2,
  ...GERMAN_VOCAB_B1_C1,
  ...GERMAN_VOCAB_EXPAND_45,
];

export function getGermanVocabTopics(): VocabTopic[] {
  return GERMAN_VOCAB;
}

export function getGermanVocabByChapter(chapterSlug: string): VocabWord[] {
  const chapter = GERMAN_CHAPTERS.find((c) => c.slug === chapterSlug);
  return wordsByChapter(GERMAN_VOCAB, chapterSlug, chapter?.vocabTopic);
}

export function getGermanVocabBySlug(topicSlug: string): VocabTopic | undefined {
  return GERMAN_VOCAB.find((t) => t.slug === topicSlug);
}

export const GERMAN_VOCAB_WORD_COUNT = totalWordCount(GERMAN_VOCAB);
