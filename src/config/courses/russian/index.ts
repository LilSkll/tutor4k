import type { CourseConfig } from "@/types";

// =====================================================================
// Russian Course Configuration (STUB)
// =====================================================================

export async function loadRussianCourse(): Promise<CourseConfig> {
  const { buildUniversalPrompt } = await import("@/server/ai/prompts/universal");

  return {
    id: "russian",
    languageCode: "ru",
    title: "Русский язык",
    titleNative: "Русский",
    flag: "🇷🇺",
    description: "Изучай русский язык с ИИ",
    promptId: "russian",
    textbookNames: "",
    examName: "ТРКИ",

    storyWorld: {
      theme: "Путешествие по России",
      locations: ["Москва", "Санкт-Петербург", "Казань", "Сочи", "Владивосток"],
    },

    keywords: {
      onTopic: [
        "russian", "русский", "русский язык", "грамматика",
        "падежи", "виды глагола", "trki", "трки",
      ],
      offTopic: [
        "испанский", "español", "english",
        "немецкий", "deutsch",
      ],
      greetings: ["привет", "здравствуйте", "hello", "hi"],
    },

    levelGuide: {
      A1: "A1: алфавит, базовая лексика, простые предложения.",
      A2: "A2: падежи, прошедшее время, повседневные темы.",
      B1: "B1: виды глагола, сложные предложения, дискуссии.",
      B2: "B2: причастия, деепричастия, стилистика.",
      C1: "C1: идиомы, литературный язык, тонкие оттенки.",
    },

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
        targetLanguageName: "Russian",
        targetLanguageCode: "ru",
        examName: "ТРКИ",
        levelGuide: {
          A1: "A1: алфавит, базовая лексика.",
          A2: "A2: падежи, прошедшее время.",
          B1: "B1: виды глагола, сложные предложения.",
          B2: "B2: причастия, деепричастия.",
          C1: "C1: идиомы, литературный язык.",
        },
      }),
  };
}
