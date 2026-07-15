import type { VocabTopic, VocabWord } from "@/types";
import { ENGLISH_VOCAB_A1_A2 } from "./topics-a1-a2";
import { ENGLISH_VOCAB_B1_C2 } from "./topics-b1-c2";
import { flattenWords, totalWordCount, wordsByChapter } from "./helpers";

export { w, topic, flattenWords, totalWordCount, wordsByChapter } from "./helpers";

/** Full English course vocabulary (A1–C2), linked to chapters. */
export const ENGLISH_VOCAB: VocabTopic[] = [
  ...ENGLISH_VOCAB_A1_A2,
  ...ENGLISH_VOCAB_B1_C2,
];

export function getEnglishVocabTopics(): VocabTopic[] {
  return ENGLISH_VOCAB;
}

export function getEnglishVocabByChapter(chapterSlug: string): VocabWord[] {
  return wordsByChapter(ENGLISH_VOCAB, chapterSlug);
}

export function getEnglishVocabBySlug(topicSlug: string): VocabTopic | undefined {
  return ENGLISH_VOCAB.find((t) => t.slug === topicSlug);
}

export function getEnglishVocabWord(word: string): VocabWord | undefined {
  const norm = word.trim().toLowerCase();
  return flattenWords(ENGLISH_VOCAB).find(
    (entry) => entry.word.toLowerCase() === norm,
  );
}

export const ENGLISH_VOCAB_WORD_COUNT = totalWordCount(ENGLISH_VOCAB);
