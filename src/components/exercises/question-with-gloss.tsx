"use client";

import { formatQuestionWithGloss } from "@/lib/exercise-localize";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";
import type { ExerciseType, InterfaceLanguage, StaticExercise } from "@/types";
import { cn } from "@/lib/utils";

type QuestionShape = Pick<
  StaticExercise,
  "question" | "type" | "questionTranslations"
> & {
  type: ExerciseType;
};

/** Question line with optional interface-language gloss in parentheses. */
export function QuestionWithGloss({
  exercise,
  interfaceLanguage,
  className,
}: {
  exercise: QuestionShape;
  interfaceLanguage?: InterfaceLanguage;
  className?: string;
}) {
  const hookLang = useInterfaceLanguage();
  const lang = interfaceLanguage ?? hookLang;
  const { question, gloss } = formatQuestionWithGloss(exercise, lang);
  if (!question && !gloss) return null;

  return (
    <p className={cn("text-lg font-medium", className)}>
      {question}
      {gloss ? (
        <span className="font-normal text-muted-foreground">
          {" "}
          ({gloss})
        </span>
      ) : null}
    </p>
  );
}
