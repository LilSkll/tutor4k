import type {
  PartOfSpeech,
  VocabLevel,
  VocabTopic,
  VocabWord,
  WordFrequency,
} from "@/types";

export type WordInput = {
  word: string;
  transcription: string;
  partOfSpeech: PartOfSpeech;
  translation: string;
  examples: string[];
  commonMistakes?: string[];
  synonyms?: string[];
  frequency: WordFrequency;
  level: VocabLevel;
  tags: string[];
  chapterSlug: string;
};

/** Build a fully-typed vocabulary entry for the English course. */
export function w(entry: WordInput): VocabWord {
  return {
    word: entry.word,
    transcription: entry.transcription,
    partOfSpeech: entry.partOfSpeech,
    translation: entry.translation,
    example: entry.examples[0],
    examples: entry.examples,
    commonMistakes: entry.commonMistakes,
    synonyms: entry.synonyms,
    frequency: entry.frequency,
    level: entry.level,
    tags: entry.tags,
    chapterSlug: entry.chapterSlug,
  };
}

export function topic(
  meta: Omit<VocabTopic, "words"> & { chapterSlug: string },
  words: VocabWord[],
): VocabTopic {
  return {
    ...meta,
    chapterSlug: meta.chapterSlug,
    words: words.map((word) => ({
      ...word,
      chapterSlug: word.chapterSlug ?? meta.chapterSlug,
    })),
  };
}

export function flattenWords(topics: VocabTopic[]): VocabWord[] {
  return topics.flatMap((t) => t.words);
}

export function wordsByChapter(
  topics: VocabTopic[],
  chapterSlug: string,
): VocabWord[] {
  return topics
    .filter((t) => t.chapterSlug === chapterSlug || t.slug === chapterSlug)
    .flatMap((t) => t.words);
}

export function totalWordCount(topics: VocabTopic[]): number {
  return flattenWords(topics).length;
}
