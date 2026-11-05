import type {
  PartOfSpeech,
  VocabLevel,
  VocabTopic,
  VocabWord,
  WordFrequency,
} from "@/types";

export type RuWordInput = {
  word: string;
  transcription?: string;
  partOfSpeech: PartOfSpeech;
  /** Default gloss for RU UI learners (usually English). */
  translation: string;
  examples: string[];
  frequency?: WordFrequency;
  level: VocabLevel;
  tags?: string[];
  chapterSlug: string;
};

export function w(entry: RuWordInput): VocabWord {
  return {
    word: entry.word,
    transcription: entry.transcription,
    partOfSpeech: entry.partOfSpeech,
    translation: entry.translation,
    translations: { en: entry.translation },
    example: entry.examples[0],
    examples: entry.examples,
    frequency: entry.frequency ?? "core",
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

export function totalWordCount(topics: VocabTopic[]): number {
  return flattenWords(topics).length;
}

export function wordsByChapter(
  topics: VocabTopic[],
  chapterSlug: string,
  vocabTopic?: string,
): VocabWord[] {
  const fromTopic = vocabTopic
    ? topics.find((t) => t.slug === vocabTopic)?.words ?? []
    : [];
  if (fromTopic.length) return fromTopic;
  return flattenWords(topics).filter((w) => w.chapterSlug === chapterSlug);
}
