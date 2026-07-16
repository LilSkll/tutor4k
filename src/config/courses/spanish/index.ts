import type { CourseConfig, InterfaceLanguage, Level } from "@/types";

// =====================================================================
// Spanish Course Configuration
// ---------------------------------------------------------------------
// Wraps all existing Spanish content (grammar, chapters, vocabulary,
// exercises, prompt) into a single CourseConfig object. This is the
// ONLY file that needs to change when adding content to the Spanish
// course. Adding a NEW language course = creating a similar file.
// =====================================================================

// Lazy imports — keeps bundle size small and allows code-splitting.
export async function loadSpanishCourse(): Promise<CourseConfig> {
  // Dynamic imports — only load what's needed when the course is active.
  const [{ CHAPTERS, getChapter, getNextChapter }] = await Promise.all([
    import("@/config/chapters"),
  ]);
  const { GRAMMAR_TOPICS, getTopicBySlug } = await import("@/config/grammar");
  const { VOCAB_TOPICS } = await import("@/config/vocabulary-topics");
  const { getChapterExercises } = await import("@/config/chapter-exercises");
  const { buildSpanishPrompt } = await import("@/server/ai/prompts/spanish");

  return {
    id: "spanish",
    languageCode: "es",
    title: "Испанский язык",
    titleNative: "Español",
    flag: "🇪🇸",
    description: "Изучай испанский язык с ИИ-репетитором",
    promptId: "spanish",
    textbookNames: "Дышлевая, Гонсалес-Алимова",
    examName: "DELE",

    storyWorld: {
      theme: "Путешествие по испаноязычному миру",
      locations: [
        "Академия", "Лес", "Древняя библиотека", "Толедо",
        "Мадрид", "Севилья", "Барселона", "Замок DELE",
      ],
    },

    keywords: {
      onTopic: [
        "español", "spanish", "castellano", "castilian",
        "gramática", "grammar", "vocabulario", "vocabulary",
        "conjugación", "conjugation", "subjuntivo", "subjunctive",
        "verbo", "verb", "ser", "estar", "por", "para", "dele",
        "españa", "mexico", "méxico", "argentina", "colombia",
        "peru", "perú", "chile", "cuba", "traduc", "translate", "перевод",
        "pronunciación", "pronunciation", "испан", "переведи",
        "pretérito", "preterite", "imperfecto", "gerundio",
        "infinitivo", "artículo", "preposición", "adverbio",
        "sustantivo", "noun", "adjetivo", "adjective",
        "cultura", "culture", "культур", "tradición", "традиц",
        "flamenco", "cervantes", "lorca", "gaudi", "гауди",
        "día de muertos", "tapas", "paella", "паэлья",
        "литератур", "poetry", "поэз", "poesía",
      ],
      offTopic: [
        "борщ", "borscht", "рецепт борща", "recipe for",
        "готовить ужин", "cook dinner",
        "футбол счет", "football score", "soccer score",
        "чемпионат", "championship",
        "политик", "politic", "выборы", "election",
        "программирован", "programming", "javascript", "python",
        "математик", "math homework", "физик", "physics",
        "хими", "chemistr", "погода завтра", "weather tomorrow",
        "новост", "breaking news", "биткоин", "bitcoin",
      ],
      greetings: [
        "hola", "hi", "hello", "hey",
        "buenos días", "buenas tardes", "buenas noches",
        "привет", "здравствуй",
      ],
    },

    levelGuide: {
      A1: "A1 (Principiante): vocabulario básico, presente simple, artículos, ser/estar. Frases cortas. Usa lenguaje muy sencillo.",
      A2: "A2 (Básico): pasado perfecto e indefinido, vocabulario cotidiano. Explicaciones simples con ejemplos concretos.",
      B1: "B1 (Intermedio): subjuntivo presente, imperativo, conversación fluida sobre temas conocidos.",
      B2: "B2 (Avanzado): estilo indirecto, voz pasiva, matices. Explicaciones más profundas.",
      C1: "C1 (Superior): perífrasis verbales, registros estilísticos, matices finos del idioma.",
    },

    // Content getters — delegate to existing config files.
    getChapters: () => CHAPTERS,
    getChapter,
    getNextChapter,
    getGrammar: () => GRAMMAR_TOPICS,
    getGrammarTopic: getTopicBySlug,
    getVocab: () => VOCAB_TOPICS,
    getExercises: getChapterExercises,

    buildPrompt: buildSpanishPrompt,
  };
}
