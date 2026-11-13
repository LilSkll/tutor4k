import type { CourseConfig } from "@/types";

/**
 * German as a Foreign Language (DaF) — A1–C2.
 * Pedagogical sequence for German: cases, V2, Perfekt auxiliaries,
 * adjective declension, Konjunktiv. Content is original.
 */
export async function loadGermanCourse(): Promise<CourseConfig> {
  const { GERMAN_CHAPTERS, getDeChapter, getDeNextChapter } = await import(
    "./chapters"
  );
  const { GERMAN_GRAMMAR, getDeGrammarTopic } = await import("./grammar");
  const { sortGermanGrammarByCurriculum } = await import(
    "@/lib/grammar-curriculum-sort"
  );
  const { GERMAN_VOCAB } = await import("./vocabulary");
  const { getGermanExercises } = await import("./exercises");
  const { buildGermanPrompt } = await import("@/server/ai/prompts/german");

  return {
    id: "german",
    languageCode: "de",
    title: "Немецкий язык",
    titleNative: "Deutsch",
    flag: "🇩🇪",
    description:
      "Немецкий как иностранный (A1–C2): грамматика, лексика и коммуникация — от первых фраз до прагматики и литературного чтения",
    promptId: "german",
    textbookNames: "DaF-ориентиры: Schritte, Menschen, Aspekte — методические ориентиры, не копирование TOC",
    examName: "Goethe / TestDaF",
    beta: true,
    /** Selectable A1–C2; C2 banks remain pedagogical Watch (not fully approved). */
    pedagogyStatus: "watch",
    pedagogyWatchBands: ["C2"],

    storyWorld: {
      theme:
        "Путешествие с Альтаиром по немецкоязычному миру: от Берлина через Мюнхен, Вену и Цюрих к академическому немецкому",
      locations: [
        "Berlin",
        "München",
        "Hamburg",
        "Köln",
        "Frankfurt",
        "Wien",
        "Zürich",
        "Salzburg",
        "Leipzig",
        "Dresden",
        "Heidelberg",
        "Stuttgart",
        "Nürnberg",
        "Freiburg",
        "Bonn",
        "Göttingen",
        "Weimar",
        "Tübingen",
        "Halle",
      ],
    },

    keywords: {
      onTopic: [
        "german",
        "deutsch",
        "немецкий",
        "немецкий язык",
        "daf",
        "грамматика",
        "падежи",
        "akkusativ",
        "dativ",
        "nominativ",
        "genitiv",
        "perfekt",
        "präteritum",
        "konjunktiv",
        "artikel",
        "der die das",
        "trennbare verben",
        "goethe",
        "testdaf",
        "berlin",
        "wien",
        "zürich",
        "культур",
        "culture",
      ],
      offTopic: [
        "испанский",
        "español",
        "english grammar",
        "русский язык рки",
        "chatgpt",
        "нейросет",
        "программирован",
        "javascript",
        "биткоин",
      ],
      greetings: [
        "hallo",
        "guten tag",
        "guten morgen",
        "привет",
        "hello",
        "hola",
      ],
    },

    levelGuide: {
      A1: "A1: алфавит и произношение; sein/haben; артикли и род; Präsens; Akkusativ; вопросы и V2; притяжательные; модальные; отделяемые приставки; отрицание и время.",
      A2: "A2: Dativ; Wechselpräpositionen; Perfekt; Präteritum; рефлексивы; императив и сравнение; начала склонения прилагательных; weil/dass/wenn и zu + Infinitiv.",
      B1: "B1: система падежей; окончания прилагательных; относительные придаточные; Plusquamperfekt и Futur I; Passiv; Konjunktiv II; связность текста; глагольное управление; генитив в письменной речи (des/der, wegen + Genitiv).",
      B2: "B2: расширенный Passiv; Konjunktiv I и косвенная речь; причастные конструкции; номинализация; академический и профессиональный регистр; стилистика; наречные связки (trotzdem, jedoch, folglich); типы текста (Bericht, Kommentar, Bewerbung).",
      C1: "C1: продвинутая косвенная речь; модальные частицы и идиомы; аргументация и административный немецкий; прагматика сложных текстов; стилистические приёмы (ирония, преуменьшение); научный стиль, альтернативы пассиву и Funktionsverbgefüge.",
      C2: "C2: нюансы модальных глаголов (эпистемические и деонтические); тема и рема, Vorfeld и фокус; чтение литературных и культурных текстов; прагматическое мастерство, смена регистра и стратегия дискурса.",
    },

    getChapters: () => GERMAN_CHAPTERS,
    getChapter: getDeChapter,
    getNextChapter: getDeNextChapter,
    getGrammar: () => sortGermanGrammarByCurriculum(GERMAN_GRAMMAR),
    getGrammarTopic: getDeGrammarTopic,
    getVocab: () => GERMAN_VOCAB,
    getExercises: (slug: string) => getGermanExercises(slug),

    buildPrompt: buildGermanPrompt,
  };
}
