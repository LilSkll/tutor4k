import type { InterfaceLanguage, Level } from "@/types";

// =====================================================================
// Universal System Prompt Builder (Spanish / Russian base)
// ---------------------------------------------------------------------
// English uses its own dedicated buildEnglishPrompt().
// Spanish and Russian courses call this with their parameters.
// =====================================================================

export interface PromptOptions {
  level?: Level | null;
  interfaceLanguage?: InterfaceLanguage;
  userName?: string | null;
  retrievedContext?: string | null;
  /** Target language being studied (e.g. "Spanish", "English"). */
  targetLanguageName: string;
  /** Target language code for examples (e.g. "es", "en", "ru"). */
  targetLanguageCode: string;
  /** Names of reference textbooks for this course. */
  textbookNames?: string;
  /** Exam name for this course (e.g. "DELE", "IELTS"). Optional. */
  examName?: string;
  /** Level guide per CEFR. */
  levelGuide: Record<Level, string>;
}

interface LangInfo {
  explainIn: string;
  keepIn: string;
  greeting: string;
}

const LANG_INFO: Record<InterfaceLanguage, LangInfo> = {
  ru: {
    explainIn: "ОБЪЯСНЯЙ НА РУССКОМ",
    keepIn: `Слова, фразы и примеры изучаемого языка ({targetLanguage}) оставляй ТОЛЬКО на языке оригинала.`,
    greeting: "Привет",
  },
  en: {
    explainIn: "EXPLAIN IN ENGLISH",
    keepIn: "Keep target language words, phrases and examples ONLY in {targetLanguage}.",
    greeting: "Hello",
  },
  es: {
    explainIn: "EXPLICA EN ESPAÑOL",
    keepIn: "Mantén las palabras y frases del idioma estudiado ({targetLanguage}) SOLO en su forma original.",
    greeting: "Hola",
  },
};

function grammarRulesSection(code: string, name: string): string {
  if (code === "es") {
    return `# СПРЯЖЕНИЕ ГЛАГОЛОВ (испанский) — ВСЕГДА 6 ФОРМ
Когда показываешь спряжение, включай ВСЕ 6 форм:
yo, tú, él/ella/usted, nosotros/as, vosotros/as, ellos/ustedes.`;
  }
  if (code === "ru") {
    return `# ФОРМЫ ГЛАГОЛОВ (русский)
При спряжении используй стандартные лица: я, ты, он/она, мы, вы, они.
Указывай вид глагола (совершенный / несовершенный), когда это уместно.`;
  }
  return `# GRAMMAR FORMS (${name})
Use standard grammar tables appropriate for ${name}.`;
}

function toneEmoji(code: string): string {
  if (code === "es") return "🇪🇸";
  if (code === "ru") return "🇷🇺";
  return "✅";
}

export function buildUniversalPrompt(options: PromptOptions): string {
  const {
    level,
    interfaceLanguage = "ru",
    userName,
    retrievedContext,
    targetLanguageName,
    targetLanguageCode,
    textbookNames = "",
    examName,
    levelGuide,
  } = options;

  const lang = LANG_INFO[interfaceLanguage] ?? LANG_INFO.ru;
  const levelText = level ? levelGuide[level] : levelGuide.A1;
  const examLine = examName ? ` и подготовкой к экзамену ${examName}` : "";
  const nameLine = userName ? ` ${lang.greeting}, ${userName}!` : "";
  const keepIn = lang.keepIn.replace("{targetLanguage}", targetLanguageName);
  const emoji = toneEmoji(targetLanguageCode);

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
${lang.explainIn}. ${keepIn}

Объяснения и правила — на языке интерфейса. Примеры предложений — ТОЛЬКО на ${targetLanguageName}.

${grammarRulesSection(targetLanguageCode, targetLanguageName)}

# ЛЕКСИКА УРОКА (для A1 и A2)
${level && (level === "A1" || level === "A2")
    ? `Добавляй в конце ответа блок «📖 Лексика урока» с 3-5 ключевыми словами на ${targetLanguageName} и переводом.`
    : `Для уровней выше A2 блок лексики необязателен.`}

# УРОВЕНЬ УЧЕНИКА
${levelText}

# ТЕРМИНОЛОГИЯ
${textbookNames ? `Используй терминологию учебников (${textbookNames}).` : "Используй стандартную терминологию."}
Первый раз давай термин на изучаемом языке и его эквивалент на языке объяснения.

# ФОРМАТ ОТВЕТА
Markdown: **жирный** для правил, таблицы для спряжений, \`код\` для слов, списки для шагов.

# ТОН
Дружелюбный, поддерживающий. Хвали успехи. Эмодзи умеренно (${emoji} ✅ 💡).

# ДЛИНА
80-200 слов. Без огромных абзацев.${
    retrievedContext
      ? `

# УЧЕБНЫЙ МАТЕРИАЛ
Фрагменты из учебников курса ${targetLanguageName}. Используй для обоснования объяснений:
--- НАЧАЛО ---
${retrievedContext}
--- КОНЕЦ ---`
      : ""
  }`;
}
