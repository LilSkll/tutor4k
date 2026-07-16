import type { CourseConfig } from "@/types";

// =====================================================================
// Russian Course Configuration (STUB)
// =====================================================================

export async function loadRussianCourse(): Promise<CourseConfig> {
  const { buildRussianPrompt } = await import("@/server/ai/prompts/russian");

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
        "культур", "culture", "традиц", "tradition",
        "литератур", "poetry", "поэз", "пушкин", "pushkin",
        "толстой", "достоевск", "чехов", "москва", "петербург",
        "блины", "борщ", "пельмени", "окрошка",
      ],
      offTopic: [
        "испанский", "español", "english grammar",
        "немецкий", "deutsch",
        "chatgpt", "нейросет",
        "программирован", "javascript", "биткоин",
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

    buildPrompt: buildRussianPrompt,
  };
}
