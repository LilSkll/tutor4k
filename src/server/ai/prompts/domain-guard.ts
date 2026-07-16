import type { CourseKeywords } from "@/types";

// =====================================================================
// Universal Domain Guard
// ---------------------------------------------------------------------
// Works for ANY course. Merges course keywords with shared learning /
// culture allow-lists and a shared off-topic blocklist.
// Culture, poetry, traditions of the target language stay allowed.
// =====================================================================

/** Language-learning intent (any course) — always allow. */
const LEARNING_SIGNALS: string[] = [
  // Ask / translate / meaning
  "как сказать",
  "как будет",
  "как перевести",
  "что значит",
  "что означает",
  "перевед",
  "translate",
  "translation",
  "how do you say",
  "how to say",
  "what does",
  "what is the difference",
  "разница между",
  "difference between",
  "means in",
  "по-английски",
  "по-испански",
  "по-русски",
  "in english",
  "in spanish",
  "en español",
  "en inglés",
  // Grammar / practice
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
  "chapter",
  "главе",
  "глава",
  "cefr",
  " dele",
  "ielts",
  "toefl",
  "трки",
  "исправь",
  "correct my",
  "check my",
  "проверь",
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
  "imperfect",
  "preterit",
  "present simple",
  "past simple",
  "present perfect",
  "condition",
];

/**
 * Culture / literature / traditions of the language world — allowed.
 * (Not “any culture on earth” — still tied to language learning context.)
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
  "кухн", // food culture OK; full cooking recipes still blocked below when paired with cook verbs
  "cuisine",
  "cocina",
  "музыка",
  "music",
  "flamenco",
  "кино",
  "cinema",
  "film",
  "película",
  "история страны",
  "history of",
  "historia de",
];

/**
 * Clearly unrelated domains — refuse unless a learning/culture signal won first.
 */
const UNIVERSAL_OFF_TOPIC: string[] = [
  // Cooking / recipes (as practical how-to, not language)
  "рецепт",
  "recipe",
  "как приготовить",
  "how to cook",
  "how to make soup",
  "борщ",
  "borscht",
  "ингредиент",
  "ingredient list",
  // Sports results / betting
  "счет матча",
  "счёт матча",
  "кто победил",
  "who won",
  "ставк",
  "betting",
  "чемпионат мира",
  "world cup score",
  // Politics / current affairs (not language culture)
  "выборы",
  "выбор",
  "election",
  "президент",
  "president trump",
  "президент путин",
  "голосова",
  "партия власти",
  "война в",
  "who should i vote",
  // Programming / tech
  "программирован",
  "programming",
  "javascript",
  "typescript",
  "python",
  "react native",
  "node.js",
  "docker",
  "kubernetes",
  "sql запрос",
  "написать код",
  "write code",
  "debug this",
  "github actions",
  // STEM homework
  "реши уравнение",
  "solve the equation",
  "производная",
  "integral",
  "физик",
  "physics homework",
  "химическ",
  "chemistry homework",
  "математик",
  "math homework",
  // Money / crypto / shopping ops
  "биткоин",
  "bitcoin",
  "криптовалют",
  "cryptocurrency",
  "nft ",
  "инвестиц",
  "stock market",
  "купить акции",
  // Medical / legal advice
  "постав диагноз",
  "diagnose me",
  "какое лекарств",
  "prescription",
  "адвокат",
  "legal advice",
  // Weather / news dump
  "прогноз погоды",
  "weather forecast",
  "последние новости",
  "breaking news",
  // Unrelated lifestyle
  "гороскоп",
  "horoscope",
  "похудеть за",
  "lose weight fast",
  "знакомств",
  "dating advice",
  "ремонт машины",
  "fix my car",
  "как взломать",
  "how to hack",
];

function includesAny(text: string, needles: string[]): boolean {
  return needles.some((n) => {
    const kw = n.toLowerCase().trim();
    return kw.length > 0 && text.includes(kw);
  });
}

/**
 * Determine whether a user question is off-topic for a given course.
 * Returns true if it should be refused (no LLM call).
 */
export function isOffTopicForCourse(
  question: string,
  keywords: CourseKeywords,
): boolean {
  const q = question.toLowerCase().trim();

  if (q.length < 2) return false;

  // Greetings — always let through.
  if (keywords.greetings?.some((g) => q.startsWith(g.toLowerCase()))) {
    return false;
  }
  // Short pure greetings mid-string (e.g. "привет!")
  if (
    /^(hola|hi|hello|hey|привет|здравствуй|добрый день|добрый вечер)[\s!.?]*$/i.test(
      q,
    )
  ) {
    return false;
  }

  // Learning intent or culture of the language world — always allow.
  if (
    includesAny(q, LEARNING_SIGNALS) ||
    includesAny(q, CULTURE_SIGNALS) ||
    includesAny(q, keywords.onTopic ?? [])
  ) {
    return false;
  }

  // Strongly off-topic — refuse.
  if (
    includesAny(q, UNIVERSAL_OFF_TOPIC) ||
    includesAny(q, keywords.offTopic ?? [])
  ) {
    return true;
  }

  // Default: allow short language drills / ambiguous questions;
  // the system prompt still enforces the domain at the model layer.
  return false;
}
