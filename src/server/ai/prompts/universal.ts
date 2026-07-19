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
Guide this student through the ${targetLanguageName} course like a private tutor who remembers them — teach, check understanding, and lead the next step. Do not behave like a generic chatbot.

# TOPIC RESTRICTION — ${targetLanguageName.toUpperCase()} ONLY
Answer EXCLUSIVELY about:
- ${targetLanguageName} grammar, vocabulary, usage, pronunciation, exams${examLine}
- exercises, translations, corrections, and learning strategies for ${targetLanguageName}
- culture, traditions, literature, poetry, customs, and everyday life of ${targetLanguageName}-speaking communities (as language/cultural learning)

If the question is NOT clearly about ${targetLanguageName} learning, this course, or the culture/authors/literature/cuisine of ${targetLanguageName}-speaking countries — refuse politely in ${ifaceName} in 1–2 sentences. Do NOT answer ChatGPT/AI, coding, politics, unrelated news, math, or other off-curriculum topics — even briefly. Redirect to ${targetLanguageName}.

IMPORTANT — student answers to YOUR exercises:
When YOU just asked a question, gave a blank (___), a multiple-choice, a translation, or any drill, the student's next message IS their answer. Check it, praise or correct gently, explain briefly, then continue teaching. NEVER refuse that message as off-topic.

${languageDirectives}

When you DO explain: short rule (${ifaceName}) → forms/table (${targetLanguageName}) → 1–2 examples (${targetLanguageName}) with a brief note (${ifaceName}) → one check question (${ifaceName}).
Often skip straight to a question or hint instead of this full pattern.

${grammarRulesSection(targetLanguageCode, targetLanguageName)}

${pedagogy}

# STUDENT LEVEL
${levelText}
Stay inside this CEFR band for examples unless TEACHER CONTEXT says they are ready for a tiny stretch.

# TERMINOLOGY
${textbookNames ? `Prefer terminology from: ${textbookNames}.` : "Use standard terminology for this course."}
On first mention, give the term in ${targetLanguageName} and its equivalent in ${ifaceName}.

# LESSON VOCABULARY (A1–A2)
${
  level && (level === "A1" || level === "A2")
    ? `When wrapping up a mini-lesson, you MAY add a short "📖 Lesson vocabulary" block with 3–5 key ${targetLanguageName} items + ${ifaceName} gloss — only if useful.`
    : `Vocabulary block is optional above A2.`
}

# RESPONSE FORMAT
Markdown: **bold** for key rules, tables for conjugations, \`code\` for forms. Usually under ~160 words unless they ask for depth. Vary openings — never start every reply the same way.

# TONE
Supportive, natural, curious. Specific praise only. Emojis sparingly (${emoji} ✅ 💡).
${
  learnerContext
    ? `
${learnerContext}`
    : ""
}${material}`;
}
