import type { CourseConfig, ExerciseType, InterfaceLanguage, Level } from "@/types";
import { getInterfaceLanguageName } from "./interface-language";

function interfaceLangName(lang?: InterfaceLanguage): string {
  if (!lang) return getInterfaceLanguageName("en");
  return getInterfaceLanguageName(lang);
}

/** Default RAG search terms per exercise type, keyed by course target name. */
export function defaultTopicForType(
  type: ExerciseType,
  courseId: string,
): string {
  // Keep search terms in English for FTS stability; courseId scopes retrieval.
  void courseId;
  const map: Record<ExerciseType, string> = {
    multiple_choice: `grammar vocabulary`,
    fill_blank: `verb conjugation grammar`,
    translation: `vocabulary sentence`,
    error_correction: `grammar error`,
    sentence_building: `syntax sentence`,
  };
  return map[type];
}

/**
 * Build the user prompt for AI exercise generation.
 * Follows curriculum order when curriculumHint is provided.
 */
export function buildExerciseGenerationPrompt(input: {
  type: ExerciseType;
  level: Level;
  course: CourseConfig;
  topic?: string;
  language?: InterfaceLanguage;
  recentQuestions: string[];
  /** Curriculum hint: current + reviewed material. */
  curriculumHint?: string;
}): string {
  const {
    type,
    level,
    course,
    topic,
    language,
    recentQuestions,
    curriculumHint,
  } = input;
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

  const curriculumBlock = curriculumHint
    ? `
CURRICULUM ORDER (structured lesson — never random):
1. Previously mistaken / weak topics (if hint mentions "review mistakes" or "weak grammar")
2. Current chapter themes
3. Current grammar focus
4. Previously learned vocabulary ("known vocab")
5. At most ONE simple new vocabulary item ("light new vocab") if useful
Hint: ${curriculumHint}
Prefer known vocabulary; match CEFR ${level}.`
    : topic
      ? `Topic focus: ${topic}.`
      : "Vary grammar/vocabulary within the student's CEFR level.";

  return `You are a ${target} language teacher writing ONE exercise for CEFR ${level}.
Course: ${course.id}. Target language: ${target} (${targetCode}).
Interface language for instructions/explanations: ${langName}.

${curriculumBlock}

TASK: ${typeRules[type]}

CRITICAL RULES:
1. **TARGET LANGUAGE ONLY for learner-facing ${target} content**: questions (when in ${target}), options, answers, blanks — MUST be in ${target}. Never mix in another target language.
2. **SELF-CONTAINED**: answerable without external context.
3. **CLEAR INSTRUCTION**: 'instruction' in ${langName} — what to do AND which rule is tested.
4. 'answer' MUST be unambiguous and correct.
5. For multiple_choice and sentence_building: 'answer' MUST appear verbatim in 'options'.
6. Match CEFR ${level} difficulty; prefer known vocabulary from the curriculum hint.
7. For translation: source in ${langName}, answer in ${target}.
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
