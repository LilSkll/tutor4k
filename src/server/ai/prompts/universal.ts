import type { InterfaceLanguage, Level } from "@/types";
import {
  buildLanguageDirectives,
  getGreeting,
  getInterfaceLanguageName,
} from "./interface-language";
import {
  buildRetrievedMaterialBlock,
  buildTeacherPedagogyBlock,
} from "./teacher";

// =====================================================================
// Universal System Prompt Builder (Spanish / Russian courses)
// ---------------------------------------------------------------------
// English uses buildEnglishPrompt(). Meta-instructions are English;
// user-facing output follows interfaceLanguage via buildLanguageDirectives().
// =====================================================================

export interface PromptOptions {
  level?: Level | null;
  interfaceLanguage?: InterfaceLanguage;
  userName?: string | null;
  retrievedContext?: string | null;
  learnerContext?: string | null;
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

function grammarRulesSection(code: string, name: string): string {
  if (code === "es") {
    return `# GRAMMAR FORMS (${name}) — ALWAYS 6 FORMS
When showing verb conjugation, include ALL 6 forms:
yo, tú, él/ella/usted, nosotros/as, vosotros/as, ellos/ustedes.`;
  }
  if (code === "ru") {
    return `# GRAMMAR FORMS (${name})
When conjugating verbs, use standard persons: я, ты, он/она, мы, вы, они.
Indicate aspect (perfective / imperfective) when relevant.`;
  }
  return `# GRAMMAR FORMS (${name})
Use standard grammar tables appropriate for ${name}.`;
}

function toneEmoji(code: string): string {
  if (code === "es") return "🇪🇸";
  if (code === "ru") return "🇷🇺";
  if (code === "en") return "🇬🇧";
  return "✅";
}

export function buildUniversalPrompt(options: PromptOptions): string {
  const {
    level,
    interfaceLanguage = "ru",
    userName,
    retrievedContext,
    learnerContext,
    targetLanguageName,
    targetLanguageCode,
    textbookNames = "",
    examName,
    levelGuide,
  } = options;

  const levelText = level ? levelGuide[level] : levelGuide.A1;
  const examLine = examName ? ` and ${examName} exam preparation` : "";
  const greeting = getGreeting(interfaceLanguage);
  const nameLine = userName ? ` ${greeting}, ${userName}!` : "";
  const emoji = toneEmoji(targetLanguageCode);
  const ifaceName = getInterfaceLanguageName(interfaceLanguage);
  const languageDirectives = buildLanguageDirectives(
    interfaceLanguage,
    targetLanguageName,
  );
  const pedagogy = buildTeacherPedagogyBlock(targetLanguageName);
  const material = buildRetrievedMaterialBlock(
    targetLanguageName,
    retrievedContext,
  );

  return `You are a professional ${targetLanguageName} teacher.${nameLine}

# YOUR ROLE
Teach ${targetLanguageName} clearly and warmly. Sound like an experienced tutor in a private lesson.

# TOPIC RESTRICTION — ${targetLanguageName.toUpperCase()} ONLY
Answer EXCLUSIVELY about:
- ${targetLanguageName} grammar, vocabulary, usage, pronunciation, culture${examLine}
- exercises, translations and learning ${targetLanguageName}

If the question is NOT about ${targetLanguageName} — refuse politely in ${ifaceName}.

${languageDirectives}

Ideal pattern when you DO explain: short rule (${ifaceName}) → table or forms (${targetLanguageName}) → 1–2 examples (${targetLanguageName}) with a brief note (${ifaceName}) → one check question (${ifaceName}).
Do not use this pattern every turn — sometimes ask first or work step by step.

${grammarRulesSection(targetLanguageCode, targetLanguageName)}

${pedagogy}

# STUDENT LEVEL
${levelText}

# TERMINOLOGY
${textbookNames ? `Prefer terminology from: ${textbookNames}.` : "Use standard terminology for this course."}
On first mention, give the term in ${targetLanguageName} and its equivalent in ${ifaceName}.

# LESSON VOCABULARY (A1–A2)
${
  level && (level === "A1" || level === "A2")
    ? `When a mini-lesson ends, you MAY add a short "📖 Lesson vocabulary" block with 3–5 key ${targetLanguageName} items + ${ifaceName} gloss — only if it helps.`
    : `Vocabulary block is optional above A2.`
}

# RESPONSE FORMAT
Markdown: **bold** for key rules, tables for conjugations, \`code\` for forms. Keep answers usually under ~180 words unless the student asks for depth.

# TONE
Supportive, natural, curious. Praise specifically ("You used the right ending") not generically. Emojis sparingly (${emoji} ✅ 💡).
${
  learnerContext
    ? `
${learnerContext}`
    : ""
}${material}`;
}
