import type { VocabTopic, VocabWord } from "@/types";
import { RUSSIAN_CHAPTERS } from "../chapters";
import { totalWordCount, wordsByChapter } from "./helpers";
import { RUSSIAN_VOCAB_TOPICS } from "./topics";

export { w, topic, flattenWords, totalWordCount, wordsByChapter } from "./helpers";

export const RUSSIAN_VOCAB: VocabTopic[] = RUSSIAN_VOCAB_TOPICS;

export function getRussianVocabTopics(): VocabTopic[] {
  return RUSSIAN_VOCAB;
}

export function getRussianVocabByChapter(chapterSlug: string): VocabWord[] {
  const chapter = RUSSIAN_CHAPTERS.find((c) => c.slug === chapterSlug);
  return wordsByChapter(RUSSIAN_VOCAB, chapterSlug, chapter?.vocabTopic);
}

export function getRussianVocabBySlug(topicSlug: string): VocabTopic | undefined {
  return RUSSIAN_VOCAB.find((t) => t.slug === topicSlug);
}

export const RUSSIAN_VOCAB_WORD_COUNT = totalWordCount(RUSSIAN_VOCAB);
