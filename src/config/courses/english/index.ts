import type { CourseConfig, InterfaceLanguage, Level } from "@/types";

// =====================================================================
// English Course Configuration (STUB)
// ---------------------------------------------------------------------
// Placeholder — ready for content. Fill in chapters, grammar, vocabulary,
// exercises, and a course-specific prompt to activate.
// =====================================================================

export async function loadEnglishCourse(): Promise<CourseConfig> {
  const { buildUniversalPrompt } = await import("@/server/ai/prompts/universal");

  return {
    id: "english",
    languageCode: "en",
    title: "Английский язык",
    titleNative: "English",
    flag: "🇬🇧",
    description: "Learn English with AI tutor",
    promptId: "english",
    textbookNames: "",
    examName: "IELTS",

    storyWorld: {
      theme: "Journey through the English-speaking world",
      locations: ["London", "Oxford", "Cambridge", "New York", "Sydney"],
    },

    keywords: {
      onTopic: [
        "english", "english grammar", "english vocabulary",
        "inglés", "английский", "ingilizce",
        "present perfect", "past simple", "conditional",
        "phrasal verb", "ielts", "toefl",
      ],
      offTopic: [
        "испанский", "español", "spanish",
        "немецкий", "deutsch", "german",
      ],
      greetings: ["hello", "hi", "hey", "привет", "hola"],
    },

    levelGuide: {
      A1: "A1: beginner — present simple, basic vocabulary, short sentences.",
      A2: "A2: elementary — past simple, continuous, everyday topics.",
      B1: "B1: intermediate — present perfect, conditionals, discussions.",
      B2: "B2: upper-intermediate — passive voice, reported speech, nuance.",
      C1: "C1: advanced — idioms, academic register, fine distinctions.",
    },

    // Empty content — ready to be filled.
    getChapters: () => [],
    getChapter: () => undefined,
    getNextChapter: () => undefined,
    getGrammar: () => [],
    getGrammarTopic: () => undefined,
    getVocab: () => [],
    getExercises: () => [],

    buildPrompt: (options) =>
      buildUniversalPrompt({
        ...options,
        targetLanguageName: "English",
        targetLanguageCode: "en",
        examName: "IELTS",
        levelGuide: {
          A1: "A1: beginner — present simple, basic vocabulary.",
          A2: "A2: elementary — past simple, everyday topics.",
          B1: "B1: intermediate — present perfect, conditionals.",
          B2: "B2: upper-intermediate — passive, reported speech.",
          C1: "C1: advanced — idioms, academic register.",
        },
      }),
  };
}
