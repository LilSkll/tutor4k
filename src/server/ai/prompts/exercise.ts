import type { CourseConfig, ExerciseType, InterfaceLanguage, Level } from "@/types";
import { getInterfaceLanguageName } from "./interface-language";

function interfaceLangName(lang?: InterfaceLanguage): string {
  if (!lang) return "English";
  return getInterfaceLanguageName(lang);
}

/** Default RAG search terms per exercise type, keyed by course. */
export function defaultTopicForType(
  type: ExerciseType,
  courseId: string,
): string {
  const target = courseId === "english" ? "english" : courseId === "russian" ? "russian" : "spanish";
  const map: Record<ExerciseType, string> = {
    multiple_choice: `${target} grammar vocabulary`,
    fill_blank: `${target} verb conjugation grammar`,
    translation: `${target} vocabulary sentence`,
    error_correction: `${target} grammar error`,
    sentence_building: `${target} syntax sentence`,
  };
  return map[type];
}

/**
 * Build the user prompt for AI exercise generation.
 * Target language examples come from the active course only.
 */
export function buildExerciseGenerationPrompt(input: {
  type: ExerciseType;
  level: Level;
  course: CourseConfig;
  topic?: string;
  language?: InterfaceLanguage;
  recentQuestions: string[];
}): string {
  const { type, level, course, topic, language, recentQuestions } = input;
  const target = course.titleNative;
  const targetCode = course.languageCode;
  const langName = interfaceLangName(language);

  const typeRules: Record<ExerciseType, string> = {
    multiple_choice: `MULTIPLE CHOICE. Provide a COMPLETE, self-contained ${target} sentence or question in the 'question' field. EXACTLY 4 distinct options. The 'answer' MUST be one of the 4 options VERBATIM. All options must be in ${target}.`,
    fill_blank: `FILL THE BLANK. Provide a COMPLETE ${target} sentence with '___' marking the blank. The sentence MUST give enough context to determine the answer. The 'answer' is the word/phrase in ${target}.`,
    translation: `TRANSLATION. Provide a complete sentence in ${langName} as the 'question'. The 'answer' is the correct ${target} translation. Provide 1-2 acceptable alternatives in 'acceptableAnswers'.`,
    error_correction: `ERROR CORRECTION. Provide a complete ${target} sentence with exactly ONE grammar mistake. The 'answer' is the fully corrected ${target} sentence.`,
    sentence_building: `SENTENCE BUILDING. The 'question' describes the situation in ${langName}. The 'answer' is the complete ${target} sentence. Split into 5-7 jumbled word tiles in 'options'. All tiles must be ${target} words.`,
  };

  return `You are a ${target} language exercise generator for CEFR level ${level}.
Course: ${course.id}. Target language: ${target} (${targetCode}).
${topic ? `Topic: ${topic}.` : "Vary the topic: use different grammar/vocabulary each time."}

TASK: ${typeRules[type]}

CRITICAL RULES:
1. **TARGET LANGUAGE ONLY**: All example sentences, options, and answers MUST be in ${target}. NEVER use Spanish if the course is English, and vice versa.
2. **SELF-CONTAINED**: Every exercise must be answerable without external context.
3. **CLEAR INSTRUCTION**: The 'instruction' field in ${langName} — explain what to do AND which grammar rule is tested.
4. The 'answer' field MUST be unambiguous and correct.
5. For multiple_choice and sentence_building: 'answer' MUST appear verbatim in 'options'.
6. Match CEFR ${level} difficulty.
7. For translation: source sentence in ${langName}, answer in ${target}.
8. Generate VARIED content — never repeat sentences below.

DO NOT REPEAT any of these recently used questions:
${recentQuestions.length > 0 ? recentQuestions.map((q) => `- ${q}`).join("\n") : "(none yet)"}

Respond ONLY with valid JSON (no markdown fences):
{
  "type": "${type}",
  "level": "${level}",
  "question": "...",
  "instruction": "... (in ${langName})",
  "options": ["opt1","opt2","opt3","opt4"],
  "answer": "the correct answer in ${target}",
  "acceptableAnswers": [],
  "topic": "short topic name in ${langName}",
  "explanation": "in ${langName}: explain the rule and why the answer is correct"
}

Only include "options" for multiple_choice and sentence_building. JSON must be valid.`;
}

/** Build the user prompt for AI answer checking (slow path). */
export function buildExerciseCheckPrompt(input: {
  exercise: {
    question: string;
    answer: string;
    acceptableAnswers?: string[];
    explanation: string;
  };
  userAnswer: string;
  course: CourseConfig;
  language?: InterfaceLanguage;
}): string {
  const langName = interfaceLangName(input.language);
  const target = input.course.titleNative;

  return `A ${target} learner answered an exercise. Decide if the answer is correct.
Target language: ${target} (${input.course.languageCode}).
Question: ${input.exercise.question}
Correct answer: ${input.exercise.answer}
Acceptable alternatives: ${(input.exercise.acceptableAnswers ?? []).join(", ") || "none"}
Learner's answer: ${input.userAnswer}

Reply in EXACTLY this format:
VERDICT: CORRECT or INCORRECT
FEEDBACK: one short sentence in ${langName} explaining why; if incorrect, show the right ${target} answer.`;
}
