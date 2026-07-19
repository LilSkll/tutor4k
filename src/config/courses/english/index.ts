import type { CourseConfig, InterfaceLanguage, Level } from "@/types";

// =====================================================================
// English Course Configuration — FULLY POPULATED
// =====================================================================

export async function loadEnglishCourse(): Promise<CourseConfig> {
  const { ENGLISH_CHAPTERS, getEngChapter, getEngNextChapter } = await import("./chapters");
  const { ENGLISH_GRAMMAR, getEngGrammarTopic } = await import("./grammar");
  const { ENGLISH_VOCAB } = await import("./vocabulary");
  const { getEnglishExercises } = await import("./exercises");
  const { buildEnglishPrompt } = await import("@/server/ai/prompts/english");

  return {
    id: "english",
    languageCode: "en",
    title: "Английский язык",
    titleNative: "English",
    flag: "🇬🇧",
    description: "Learn English with AI tutor",
    promptId: "english",
    textbookNames: "Life (National Geographic)",
    examName: "IELTS",

    storyWorld: {
      theme: "Journey through the English-speaking world",
      locations: [
        "London", "Oxford", "Cambridge", "York", "Edinburgh",
        "Manchester", "Dublin", "Cardiff", "Liverpool",
        "New York", "Boston", "San Francisco", "Chicago",
        "Toronto", "Sydney", "IELTS Castle",
      ],
    },

    keywords: {
      onTopic: [
        "english", "english grammar", "english vocabulary",
        "inglés", "английский", "ingilizce",
        "present simple", "past simple", "present perfect",
        "past continuous", "conditional", "passive voice",
        "reported speech", "phrasal verb", "modal verbs",
        "ielts", "toefl", "will", "would", "should", "must",
        "have been", "has been", "comparative", "superlative",
        "article", "артикл", "vocab", "лексик", "tense",
        "britain", "british", "american", "usa", "uk", "england",
        "scotland", "ireland", "wales", "australia", "canada",
        "london", "oxford", "cambridge", "new york", "edinburgh",
        // Culture / authors
        "culture", "культур", "tradition", "традиц",
        "shakespeare", "dickens", "austen", "hemingway", "orwell",
        "literature", "литератур", "poetry", "поэз",
        "thanksgiving", "halloween", "christmas in britain",
        // Cuisine
        "fish and chips", "sunday roast", "full english",
        "afternoon tea", "pudding", "apple pie", "bbq",
      ],
      offTopic: [
        "испанский", "español", "spanish grammar",
        "немецкий", "deutsch", "german grammar",
        "борщ", "рецепт борща",
        "chatgpt", "нейросет",
        "программирован", "javascript", "python",
        "биткоин", "bitcoin",
      ],
      greetings: ["hello", "hi", "hey", "привет", "hola", "good morning", "good evening"],
    },

    levelGuide: {
      A1: "A1: beginner — be, present simple, there is/are, can.",
      A2: "A2: elementary — past simple, comparatives, present perfect.",
      B1: "B1: intermediate — conditionals, narrative tenses, perfect continuous.",
      B2: "B2: upper-intermediate — passive, reported speech, relative clauses.",
      C1: "C1: advanced — inversion, discourse, mixed conditionals, IELTS.",
    },

    // Content getters
    getChapters: () => ENGLISH_CHAPTERS,
    getChapter: getEngChapter,
    getNextChapter: getEngNextChapter,
    getGrammar: () => ENGLISH_GRAMMAR,
    getGrammarTopic: getEngGrammarTopic,
    getVocab: () => ENGLISH_VOCAB,
    getExercises: (slug: string) => getEnglishExercises(slug),

    buildPrompt: buildEnglishPrompt,
  };
}
