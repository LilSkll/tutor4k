"use client";

import {
  formatQuestionWithGloss,
  getTranslationSourceLabel,
  localizeTranslationQuestion,
} from "@/lib/exercise-localize";
import {
  useActiveCourseId,
  useInterfaceLanguage,
} from "@/hooks/use-interface-language";
import { WordHintText } from "@/components/shared/word-hint-text";
import type { ExerciseType, InterfaceLanguage, StaticExercise } from "@/types";
import { cn } from "@/lib/utils";

type QuestionShape = Pick<
  StaticExercise,
  "question" | "answer" | "type" | "questionTranslations"
> & {
  type: ExerciseType;
};

/** Question line with optional interface-language gloss + per-word tap hints. */
export function QuestionWithGloss({
  exercise,
  interfaceLanguage,
  courseId: courseIdProp,
  className,
}: {
  exercise: QuestionShape;
  interfaceLanguage?: InterfaceLanguage;
  courseId?: string;
  className?: string;
}) {
  const hookLang = useInterfaceLanguage();
  const lang = interfaceLanguage ?? hookLang;
  const courseId = useActiveCourseId(courseIdProp);
  // Client safety net: re-bind TR L1 to the live UI language (covers stale
  // payloads after a language switch without refetch).
  const displayExercise =
    exercise.type === "translation"
      ? {
          ...exercise,
          question: localizeTranslationQuestion(exercise, lang, courseId),
        }
      : exercise;
  const { question, gloss } = formatQuestionWithGloss(displayExercise, lang);
  const sourceLabel = getTranslationSourceLabel(displayExercise, lang, courseId);
  if (!question && !gloss) return null;

  return (
    <div className={cn("text-lg font-medium", className)}>
      {sourceLabel ? (
        <div className="mb-1 text-xs font-normal text-muted-foreground">
          {sourceLabel}
        </div>
      ) : null}
      {question ? (
        <WordHintText text={question} courseId={courseId} />
      ) : null}
      {gloss ? (
        <span className="font-normal text-muted-foreground">
          {" "}
          ({gloss})
        </span>
      ) : null}
    </div>
  );
}
