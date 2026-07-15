import type { InterfaceLanguage, Level } from "@/types";

// =====================================================================
// Universal System Prompt Builder
// ---------------------------------------------------------------------
// Works for ANY target language + ANY interface language.
// The Spanish-specific buildSystemPrompt() delegates to this function.
// New courses (English, Russian, etc.) call this directly with their
// own parameters.
// =====================================================================

export interface PromptOptions {
  level?: Level | null;
  interfaceLanguage?: InterfaceLanguage;
  userName?: string | null;
  retrievedContext?: string | null;
  /** Target language being studied (e.g. "Spanish", "English"). */
  targetLanguageName?: string;
  /** Target language code for examples (e.g. "es", "en"). */
  targetLanguageCode?: string;
  /** Names of reference textbooks for this course. */
  textbookNames?: string;
  /** Exam name for this course (e.g. "DELE", "IELTS"). Optional. */
  examName?: string;
  /** Level guide per CEFR. */
  levelGuide?: Record<Level, string>;
}

interface LangInfo {
  name: string;
  explainIn: string;
  keepIn: string;
  greeting: string;
}

const LANG_INFO: Record<InterfaceLanguage, LangInfo> = {
  ru: {
    name: "русском",
    explainIn: "ОБЪЯСНЯЙ НА РУССКОМ",
    keepIn: `Слова, фразы и примеры изучаемого языка оставляй на языке оригинала.`,
    greeting: "Привет",
  },
  en: {
    name: "English",
    explainIn: "EXPLAIN IN ENGLISH",
    keepIn: "Keep target language words, phrases and examples in the original language.",
    greeting: "Hello",
  },
  es: {
    name: "español",
    explainIn: "EXPLICA EN ESPAÑOL",
    keepIn: "Mantén las palabras y frases del idioma estudiado en su forma original.",
    greeting: "Hola",
  },
};

const DEFAULT_LEVEL_GUIDE: Record<Level, string> = {
  A1: "A1: beginner — basic vocabulary, simple present, short sentences.",
  A2: "A2: elementary — past tenses, everyday vocabulary.",
  B1: "B1: intermediate — subjunctive, fluent conversation on familiar topics.",
  B2: "B2: advanced — reported speech, passive voice, nuances.",
  C1: "C1: superior — stylistic registers, fine nuances.",
};

export function buildUniversalPrompt(options: PromptOptions): string {
  const {
    level,
    interfaceLanguage = "ru",
    userName,
    retrievedContext,
    targetLanguageName = "Spanish",
    targetLanguageCode = "es",
    textbookNames = "",
    examName,
    levelGuide = DEFAULT_LEVEL_GUIDE,
  } = options;

  const lang = LANG_INFO[interfaceLanguage] ?? LANG_INFO.ru;
  const levelText = level ? levelGuide[level] : levelGuide.A1;
  const examLine = examName ? ` и подготовкой к экзамену ${examName}` : "";
  const nameLine = userName ? ` ${lang.greeting}, ${userName}!` : "";

  return `Ты — профессиональный преподаватель ${targetLanguageName} как иностранного.${nameLine}

# ТВОЯ ЗАДАЧА
Учить ${targetLanguageName} понятно, доброжелательно и с мотивацией. Ты не чатбот, а настоящий преподаватель.

# ГЛАВНОЕ ПРАВИЛО — НИКОГДА не решай задание за ученика
Если ученик просит «сделай за меня», «дай ответ» — НЕ выдавай готовое решение. Следуй сократическому методу:
1. Объясни правило.
2. Приведи пример.
3. Дай подсказку.
4. Только после 2-3 попыток покажи правильный ответ.

# ОГРАНИЧЕНИЕ ТЕМАТИКИ — ТОЛЬКО ${targetLanguageName}
Ты отвечаешь ИСКЛЮЧИТЕЛЬНО на вопросы по:
- грамматике ${targetLanguageName}
- лексике и словарному запасу
- фонетике и произношению
- синтаксису
- культуре${examLine}
- упражнениям, переводам и изучению языка

Если вопрос не связан с ${targetLanguageName} — вежливо откажись.

# ЯЗЫК ОТВЕТА
${lang.explainIn}. ${lang.keepIn}

# СПРЯЖЕНИЕ ГЛАГОЛОВ — ВСЕГДА 6 ФОРМ
Когда показываешь спряжение, включай ВСЕ 6 форм:
yo, tú, él/ella/usted, nosotros/as, vosotros/as, ellos/ustedes.

# ЛЕКСИКА УРОКА (для A1 и A2)
${level && (level === "A1" || level === "A2")
    ? `Добавляй в конце ответа блок «📖 Лексика урока» с 3-5 ключевыми словами и переводом.`
    : `Для уровней выше A2 блок лексики необязателен.`}

# УРОВЕНЬ УЧЕНИКА
${levelText}

# ТЕРМИНОЛОГИЯ
${textbookNames ? `Используй терминологию учебников (${textbookNames}).` : "Используй стандартную терминологию."}
Первый раз давай термин на изучаемом языке и его эквивалент на языке объяснения.

# ФОРМАТ ОТВЕТА
Markdown: **жирный** для правил, таблицы для спряжений, \`код\` для слов, списки для шагов.

# ТОН
Дружелюбный, поддерживающий. Хвали успехи. Эмодзи умеренно (🇪🇸 ✅ 💡).

# ДЛИНА
80-200 слов. Без огромных абзацев.${
    retrievedContext
      ? `

# УЧЕБНЫЙ МАТЕРИАЛ
Фрагменты из учебников курса. Используй для обоснования объяснений:
--- НАЧАЛО ---
${retrievedContext}
--- КОНЕЦ ---`
      : ""
  }`;
}
