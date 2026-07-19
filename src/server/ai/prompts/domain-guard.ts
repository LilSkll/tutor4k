import type { CourseKeywords } from "@/types";

// =====================================================================
// Universal Domain Guard — ALLOWLIST mode
// ---------------------------------------------------------------------
// Default: REFUSE.
// Allow only:
//   • language learning (grammar, vocab, exercises, translation…)
//   • this course / curriculum / exams
//   • culture, authors, literature, poetry of the target-language world
//   • cuisine / food culture of those countries
// Greetings always pass. Hard AI/meta topics always fail.
// =====================================================================

/** Language-learning intent. */
const LEARNING_SIGNALS: string[] = [
  // Ask / explain / translate / meaning
  "объясни",
  "обьясни",
  "расскажи",
  "разбери",
  "поясни",
  "explain",
  "explica",
  "explícame",
  "tell me about",
  "what is",
  "what's",
  "что такое",
  "что это",
  "как сказать",
  "как будет",
  "как перевести",
  "как пишется",
  "как произнос",
  "как образу",
  "как спряг",
  "как использ",
  "когда использ",
  "что значит",
  "что означает",
  "перевед",
  "translate",
  "translation",
  "traduc",
  "how do you say",
  "how to say",
  "how to use",
  "how to form",
  "how to conjugate",
  "how to pronounce",
  "what does",
  "what is the difference",
  "разница между",
  "difference between",
  "means in",
  "можно ли сказать",
  "можно сказать",
  "can i say",
  "is it correct",
  "is this correct",
  "верно ли",
  "правильно ли",
  "исправь",
  "correct my",
  "check my",
  "проверь",
  "по-английски",
  "по-испански",
  "по-русски",
  "in english",
  "in spanish",
  "en español",
  "en inglés",
  // Grammar / practice / moods & tenses
  "граммат",
  "grammar",
  "gramática",
  "conjug",
  "спряж",
  "vocab",
  "лексик",
  "vocabulario",
  "произнос",
  "pronunci",
  "фонетик",
  "phonetic",
  "упражнен",
  "exercise",
  "домашн",
  "homework",
  "урок",
  "lesson",
  "диалог",
  "dialogue",
  "idiom",
  "идиом",
  "фразеолог",
  "phrasal",
  "article",
  "артикл",
  "tense",
  "время глагол",
  "modal",
  "сослагат",
  "subjunct",
  "subjuntiv",
  "imperativ",
  "imperfect",
  "indicativ",
  "изъявительн",
  "повелительн",
  "условн наклон",
  "condicional",
  "pretérit",
  "preterit",
  "indefinid",
  "perfecto",
  "present simple",
  "past simple",
  "present perfect",
  "past continuous",
  "future",
  "condition",
  "gerund",
  "gerundio",
  "infinitiv",
  "infinitivo",
  "participle",
  "plural",
  "множеств",
  "gender",
  "род существ",
  "предлог",
  "preposition",
  "нареч",
  "adverb",
  "прилагательн",
  "adjective",
  "существительн",
  "noun",
  "глагол",
  "verb",
  "пример",
  "example",
  "предложен",
  "sentence",
  "слово",
  "phrase",
  "фраз",
  "употребл",
  "когда использовать",
  "когда ставить",
  "неправильн глагол",
  "irregular",
  "правило",
  "rule for",
  "исключен",
  "наклонен",
  "mood",
];

/**
 * Standalone grammar labels learners often paste from the course UI
 * (e.g. "Imperativo", "Subjuntivo") — treat as on-topic.
 */
const GRAMMAR_TERM_LABELS: string[] = [
  "imperativo",
  "imperative",
  "subjuntivo",
  "subjunctive",
  "indicativo",
  "indicative",
  "condicional",
  "conditional",
  "gerundio",
  "gerund",
  "infinitivo",
  "infinitive",
  "pretérito",
  "preterito",
  "preterite",
  "indefinido",
  "imperfecto",
  "imperfect",
  "perfecto",
  "pluscuamperfecto",
  "presente",
  "futuro",
  "ser",
  "estar",
  "por",
  "para",
  "артикли",
  "articles",
  "artículos",
];
/** Course / app / curriculum. */
const COURSE_SIGNALS: string[] = [
  "курс",
  "course",
  "глава",
  "chapter",
  "урок",
  "lesson",
  "journey",
  "путешеств",
  "модул",
  "curriculum",
  "программ обучен",
  "cefr",
  "уровень a1",
  "уровень a2",
  "уровень b1",
  "уровень b2",
  " dele",
  "dele ",
  "ielts",
  "toefl",
  "трки",
  "trki",
  "репетитор",
  "tutor",
  "наставник",
  "mentor",
  "следующ глав",
  "next chapter",
  "моя глав",
  "current chapter",
];

/**
 * Culture / authors / literature / poetry / food culture
 * of the target-language world (not “any culture on earth”).
 */
const CULTURE_SIGNALS: string[] = [
  "культур",
  "culture",
  "cultura",
  "традиц",
  "tradition",
  "tradición",
  "обыча",
  "custom",
  "праздник",
  "holiday",
  "fiesta",
  "поэз",
  "poetry",
  "poesía",
  "поэт",
  "poet",
  "стих",
  "poem",
  "литератур",
  "literature",
  "literatura",
  "писател",
  "writer",
  "autor",
  "author",
  "роман ",
  "novel",
  "фольклор",
  "folklore",
  "миф",
  "myth",
  "легенд",
  "legend",
  "этикет",
  "etiquette",
  "жест",
  "gesture",
  // Cuisine / food culture (not unrelated world recipes)
  "кухн",
  "cuisine",
  "cocina",
  "блюд",
  "dish",
  "еда ",
  " food",
  "gastronom",
  "национальн блюд",
  "traditional food",
  "традиционн блюд",
  // Arts
  "музыка",
  "music",
  "кино",
  "cinema",
  "film",
  "película",
  "театр",
  "theatre",
  "theater",
  "история страны",
  "history of",
  "historia de",
];

/** Always refuse — even if another allow signal appears. */
const HARD_OFF_TOPIC: string[] = [
  "chatgpt",
  "chat gpt",
  "chat-gpt",
  "чат гпт",
  "чатгпт",
  "чат gpt",
  "openai",
  "как работает gpt",
  "как работает чат",
  "how does chatgpt",
  "what is chatgpt",
  "что такое chatgpt",
  "что такое gpt",
  "что такое гпт",
  "нейросет",
  "artificial intelligence",
  "искусственн интеллект",
  "как ты работаешь",
  "how do you work",
  "are you an ai",
  "are you a bot",
  "ты бот",
  "ты ии",
  "ты нейросеть",
  "javascript",
  "typescript",
  "python code",
  "написать код",
  "write code",
  "биткоин",
  "bitcoin",
  "криптовалют",
];

function includesAny(text: string, needles: string[]): boolean {
  return needles.some((n) => {
    const kw = n.toLowerCase().trim();
    return kw.length > 0 && text.includes(kw);
  });
}

function isGreeting(q: string, keywords: CourseKeywords): boolean {
  if (keywords.greetings?.some((g) => q.startsWith(g.toLowerCase()))) {
    return true;
  }
  return /^(hola|hi|hello|hey|привет|здравствуй|добрый день|добрый вечер|good morning|good evening|buenos días|buenas tardes|buenas noches)[\s!.?]*$/i.test(
    q,
  );
}

function isAllowedTopic(q: string, keywords: CourseKeywords): boolean {
  return (
    includesAny(q, LEARNING_SIGNALS) ||
    includesAny(q, COURSE_SIGNALS) ||
    includesAny(q, CULTURE_SIGNALS) ||
    includesAny(q, keywords.onTopic ?? []) ||
    isGrammarTermQuery(q)
  );
}

/** "Imperativo", "Объясни: Subjuntivo", "ser/estar" pasted from the course. */
function isGrammarTermQuery(q: string): boolean {
  const cleaned = q
    .replace(/^[\s:.\-–—]+|[\s:.\-–—]+$/g, "")
    .replace(/^(объясни|обьясни|расскажи|разбери|поясни|explain|explica|what is|what's|что такое|что это)\s*[:.\-–—]?\s*/i, "")
    .trim();
  if (!cleaned) return false;
  // Single short label or "ser/estar" style
  if (cleaned.length <= 40 && includesAny(cleaned, GRAMMAR_TERM_LABELS)) {
    return true;
  }
  if (
    cleaned.length <= 48 &&
    GRAMMAR_TERM_LABELS.some(
      (term) => cleaned === term || cleaned.startsWith(`${term} `),
    )
  ) {
    return true;
  }
  return false;
}

/**
 * Determine whether a user question is off-topic for a given course.
 * Returns true → refuse (no LLM call).
 *
 * ALLOWLIST: everything is refused unless it clearly matches learning,
 * course, culture/authors/cuisine of the target-language world, or
 * course-specific onTopic keywords.
 *
 * Exception: when the tutor just gave an exercise / check question,
 * the student's next message is treated as an answer (never refused
 * unless HARD_OFF_TOPIC).
 */
export function isOffTopicForCourse(
  question: string,
  keywords: CourseKeywords,
  context?: { priorAssistantContent?: string | null },
): boolean {
  const q = question.toLowerCase().trim();

  if (q.length < 2) return false;

  // Hard block always wins.
  if (includesAny(q, HARD_OFF_TOPIC)) return true;

  // Student answering the tutor's drill / blank / check question.
  if (
    context?.priorAssistantContent &&
    isTutorExerciseTurn(context.priorAssistantContent)
  ) {
    return false;
  }

  // Short follow-up after a teaching reply (likely an answer or clarification).
  if (
    context?.priorAssistantContent &&
    isAllowedTopic(context.priorAssistantContent.toLowerCase(), keywords)
  ) {
    const words = q.split(/\s+/).filter(Boolean).length;
    if (words > 0 && words <= 20) return false;
  }

  // Explicit course offTopic keywords (e.g. other languages on English course).
  if (includesAny(q, keywords.offTopic ?? [])) return true;

  if (isGreeting(q, keywords)) return false;

  // Only explicit allow signals pass.
  if (isAllowedTopic(q, keywords)) return false;

  // Default: refuse everything else.
  return true;
}

/** Signals that the assistant just posed a practice item or check question. */
const EXERCISE_TURN_SIGNALS: string[] = [
  "___",
  "упражнен",
  "exercise",
  "ejercicio",
  "выбери",
  "choose the",
  "elige",
  "заполни",
  "fill in",
  "fill the blank",
  "completa",
  "переведи",
  "translate",
  "traduce",
  "исправь",
  "correct the",
  "corrige",
  "составь",
  "build the sentence",
  "пропуск",
  "blank",
  "правильн форм",
  "correct form",
  "forma correcta",
  "твой ответ",
  "your answer",
  "tu respuesta",
  "напиши",
  "write the",
  "спряг",
  "conjugat",
  "проверь себя",
  "check yourself",
  "мини-задани",
  "mini-task",
  "попробуй",
  "try this",
];

function isTutorExerciseTurn(assistantContent: string): boolean {
  const t = assistantContent.toLowerCase();
  if (/_{2,}/.test(assistantContent)) return true;
  if (includesAny(t, EXERCISE_TURN_SIGNALS)) return true;
  if (
    assistantContent.includes("?") &&
    (includesAny(t, LEARNING_SIGNALS) || includesAny(t, COURSE_SIGNALS))
  ) {
    return true;
  }
  return false;
}
