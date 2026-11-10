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
import { translate } from "@/lib/i18n";
import type { ExerciseType, InterfaceLanguage, StaticExercise } from "@/types";
import { cn } from "@/lib/utils";

type QuestionShape = Pick<
  StaticExercise,
  | "question"
  | "answer"
  | "type"
  | "questionTranslations"
  | "passage"
  | "passageTranslations"
> & {
  type: ExerciseType;
};

/** Question line with optional passage, gloss + per-word tap hints. */
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
  const t = (key: string, vars?: Record<string, string | number>) =>
    translate(key, lang, vars);

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
  const passage = exercise.passage?.trim() || "";
  const passageGloss =
    lang === "ru"
      ? null
      : exercise.passageTranslations?.[lang]?.trim() || null;

  if (!question && !gloss && !passage) return null;

  return (
    <div className={cn("space-y-3", className)}>
      {passage ? (
        <div className="rounded-xl border bg-muted/40 px-4 py-3 space-y-2">
          <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {t("lesson.passageLabel")}
          </div>
          <div className="text-base font-medium leading-relaxed">
            <WordHintText text={passage} courseId={courseId} />
          </div>
          {passageGloss ? (
            <p className="text-sm text-muted-foreground leading-relaxed">
              {passageGloss}
            </p>
          ) : null}
        </div>
      ) : null}

      {(question || gloss || sourceLabel) && (
        <div className="text-lg font-medium">
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
      )}
    </div>
  );
}
