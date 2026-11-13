import type {
  InterfaceLanguage,
  PartOfSpeech,
  VocabLevel,
  VocabTopic,
  VocabWord,
  WordFrequency,
} from "@/types";
import { GERMAN_VOCAB_GLOSS } from "./glosses";

export type DeWordInput = {
  word: string;
  transcription?: string;
  partOfSpeech: PartOfSpeech;
  /** Default gloss (Russian). */
  translation: string;
  /** Optional explicit glosses; the gloss map fills gaps for en/es/de. */
  translations?: Partial<Record<InterfaceLanguage, string>>;
  examples: string[];
  frequency?: WordFrequency;
  level: VocabLevel;
  tags?: string[];
  chapterSlug: string;
};

export function w(entry: DeWordInput): VocabWord {
  const key = entry.word.trim().toLowerCase();
  const fromMap = {
    en: GERMAN_VOCAB_GLOSS.en?.[key],
    es: GERMAN_VOCAB_GLOSS.es?.[key],
    de: GERMAN_VOCAB_GLOSS.de?.[key],
  };
  const translations: Partial<Record<InterfaceLanguage, string>> = {
    ru: entry.translations?.ru ?? entry.translation,
  };
  const en = entry.translations?.en ?? fromMap.en;
  const es = entry.translations?.es ?? fromMap.es;
  const de = entry.translations?.de ?? fromMap.de;
  if (en) translations.en = en;
  if (es) translations.es = es;
  if (de) translations.de = de;
  return {
    word: entry.word,
    transcription: entry.transcription,
    partOfSpeech: entry.partOfSpeech,
    translation: entry.translation,
    translations,
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
  return flattenWords(topics).filter((word) => word.chapterSlug === chapterSlug);
}
