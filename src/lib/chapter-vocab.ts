import { getCourse } from "@/config/courses";
import { getEnglishVocabByChapter } from "@/config/courses/english/vocabulary";
import { getRussianVocabByChapter } from "@/config/courses/russian/vocabulary";
import { VOCAB_TOPICS } from "@/config/vocabulary-topics";
import { getVocabTopicTitle } from "@/lib/vocab-display";
import type { InterfaceLanguage, VocabTopic, VocabWord } from "@/types";

export type ChapterVocabPreview = {
  topicSlug: string | null;
  topicTitle: string | null;
  words: VocabWord[];
};

function spanishWordsForChapter(
  _chapterSlug: string,
  vocabTopic?: string | null,
): { topic: VocabTopic | null; words: VocabWord[] } {
  if (vocabTopic) {
    const bySlug = VOCAB_TOPICS.find((t) => t.slug === vocabTopic);
    if (bySlug) {
      return {
        topic: bySlug as unknown as VocabTopic,
        words: bySlug.words as unknown as VocabWord[],
      };
    }
  }
  return { topic: null, words: [] };
}

/** Resolve chapter vocabulary for the pre-practice lesson panel. */
export async function getChapterVocabPreview(
  courseId: string,
  chapterSlug: string,
  vocabTopic: string | null | undefined,
  interfaceLanguage: InterfaceLanguage,
): Promise<ChapterVocabPreview> {
  if (courseId === "russian") {
    const course = await getCourse("russian");
    const topic =
      (vocabTopic
        ? course.getVocab().find((t) => t.slug === vocabTopic)
        : undefined) ??
      course.getVocab().find((t) => t.chapterSlug === chapterSlug) ??
      null;
    const words = getRussianVocabByChapter(chapterSlug);
    return {
      topicSlug: topic?.slug ?? vocabTopic ?? null,
      topicTitle: topic
        ? getVocabTopicTitle(topic, interfaceLanguage, "russian")
        : null,
      words,
    };
  }

  if (courseId === "english") {
    const course = await getCourse("english");
    const topic =
      (vocabTopic
        ? course.getVocab().find((t) => t.slug === vocabTopic)
        : undefined) ??
      course.getVocab().find((t) => t.chapterSlug === chapterSlug) ??
      null;
    const words = getEnglishVocabByChapter(chapterSlug);
    return {
      topicSlug: topic?.slug ?? vocabTopic ?? null,
      topicTitle: topic
        ? getVocabTopicTitle(topic, interfaceLanguage, "english")
        : null,
      words,
    };
  }

  const { topic, words } = spanishWordsForChapter(chapterSlug, vocabTopic);
  return {
    topicSlug: topic?.slug ?? vocabTopic ?? null,
    topicTitle: topic
      ? getVocabTopicTitle(topic, interfaceLanguage, "spanish")
      : null,
    words,
  };
}
