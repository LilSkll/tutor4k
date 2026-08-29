import { answersMatch, answersMatchFlexible } from "@/lib/normalize-answer";
import { formatBankTutorFeedback } from "@/lib/tutor-feedback";
import type { ExerciseType, InterfaceLanguage } from "@/types";

type CheckableExercise = {
  type?: ExerciseType;
  answer: string;
  acceptableAnswers?: string[];
  explanation: string;
  instruction?: string;
};

/** Grade a static bank item locally (accents / ñ tolerant). */
export function gradeStaticExerciseLocally(
  exercise: CheckableExercise,
  userAnswer: string,
  language: InterfaceLanguage,
): { correct: boolean; feedback: string } {
  const acceptable = [
    exercise.answer,
    ...(exercise.acceptableAnswers ?? []),
  ];
  const correct =
    exercise.type === "translation" || exercise.type === "error_correction"
      ? answersMatchFlexible(userAnswer, acceptable)
      : answersMatch(userAnswer, acceptable);
  return {
    correct,
    feedback: formatBankTutorFeedback({
      language,
      correct,
      explanation: exercise.explanation,
      instruction: exercise.instruction,
      exerciseType: exercise.type,
    }),
  };
}
