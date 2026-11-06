import type { CourseConfig } from "@/types";

/**
 * Russian as a Foreign Language (RKI) — A1–C2.
 * Methodological references (not verbatim sources): «Дорога в Россию»,
 * «Поехали!», «Пять элементов», «Жили-были», «Живём и учимся в России»,
 * «Русская мозаика». Content is original; see .cursor/rules/rki-russian-course.mdc.
 */
export async function loadRussianCourse(): Promise<CourseConfig> {
  const { RUSSIAN_CHAPTERS, getRuChapter, getRuNextChapter } = await import(
    "./chapters"
  );
  const { RUSSIAN_GRAMMAR, getRuGrammarTopic } = await import("./grammar");
  const { sortRussianGrammarByCurriculum } = await import(
    "@/lib/grammar-curriculum-sort"
  );
  const { RUSSIAN_VOCAB } = await import("./vocabulary");
  const { getRussianExercises } = await import("./exercises");
  const { buildRussianPrompt } = await import("@/server/ai/prompts/russian");

  return {
    id: "russian",
    languageCode: "ru",
    title: "Русский язык",
    titleNative: "Русский",
    flag: "🇷🇺",
    description:
      "Русский как иностранный (A1–C2): грамматика, лексика и учебная коммуникация — от базовой речи до регистра, прагматики и профессиональной дискуссии",
    promptId: "russian",
    textbookNames:
      "РКИ-ориентиры: Дорога в Россию; Поехали!; Пять элементов; Жили-были",
    examName: "ТРКИ",
    beta: true,

    storyWorld: {
      theme:
        "Путь с гиппогрифом Альтаиром: от первого дня в Москве через Новгород, Тверь и Владимир к самостоятельной речи в Казани, Нижнем Новгороде и Москве",
      locations: [
        "Москва",
        "Санкт-Петербург",
        "Казань",
        "Нижний Новгород",
        "Екатеринбург",
        "Новосибирск",
        "Владивосток",
        "Сочи",
        "Калининград",
        "Ярославль",
        "Псков",
        "Великий Новгород",
        "Тверь",
        "Владимир",
      ],
    },

    keywords: {
      onTopic: [
        "russian",
        "русский",
        "русский язык",
        "рки",
        "грамматика",
        "падежи",
        "виды глагола",
        "глаголы движения",
        "trki",
        "трки",
        "подготовительный факультет",
        "общежитие",
        "университет",
        "культур",
        "culture",
        "москва",
        "петербург",
      ],
      offTopic: [
        "испанский",
        "español",
        "english grammar",
        "немецкий",
        "deutsch",
        "chatgpt",
        "нейросет",
        "программирован",
        "javascript",
        "биткоин",
      ],
      greetings: ["привет", "здравствуйте", "hello", "hi"],
    },

    levelGuide: {
      A1: "A1: алфавит и фонетика, базовая лексика, простые предложения, основные падежные конструкции, настоящее время, базовая коммуникация.",
      A2: "A2: расширение падежей, прошедшее и будущее, глагольное управление, виды глагола (начало), глаголы движения (начало), быт и социум.",
      B1: "B1: систематизация падежей, видо-временные отношения, приставочные глаголы движения, сложные предложения, связность текста, аргументация, учебная речь.",
      B2: "B2: действительные и страдательные причастия, деепричастия НСВ/СВ, страдательный залог (краткое причастие и -ся), косвенная речь, если / если бы / чтобы, официально-деловой стиль.",
      C1: "C1: нюансы вида (опыт, завершённость, попытка, запрет), устойчивые выражения, развёрнутая аргументация с уступкой, язык СМИ.",
      C2: "C2: один факт в разговорном, нейтральном и книжном регистре; комментарий художественного фрагмента; доклад, рецензия и этикет дискуссии; частицы и порядок слов.",
    },

    getChapters: () => RUSSIAN_CHAPTERS,
    getChapter: getRuChapter,
    getNextChapter: getRuNextChapter,
    getGrammar: () => sortRussianGrammarByCurriculum(RUSSIAN_GRAMMAR),
    getGrammarTopic: getRuGrammarTopic,
    getVocab: () => RUSSIAN_VOCAB,
    getExercises: (slug: string) => getRussianExercises(slug),

    buildPrompt: buildRussianPrompt,
  };
}
