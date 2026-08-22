import { answersMatch } from "@/lib/normalize-answer";
import { formatBankTutorFeedback } from "@/lib/tutor-feedback";
import type { InterfaceLanguage } from "@/types";

type CheckableExercise = {
  answer: string;
  acceptableAnswers?: string[];
  explanation: string;
};

/** Grade a static bank item locally (accents / ñ tolerant). */
export function gradeStaticExerciseLocally(
  exercise: CheckableExercise,
  userAnswer: string,
  language: InterfaceLanguage,
): { correct: boolean; feedback: string } {
  const correct = answersMatch(userAnswer, [
    exercise.answer,
    ...(exercise.acceptableAnswers ?? []),
  ]);
  return {
    correct,
    feedback: formatBankTutorFeedback({
      language,
      correct,
      explanation: exercise.explanation,
    }),
  };
}
