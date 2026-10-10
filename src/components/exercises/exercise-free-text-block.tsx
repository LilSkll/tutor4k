"use client";

import { Input } from "@/components/ui/input";
import { ExerciseTaskBanner } from "@/components/exercises/exercise-task-banner";
import { resolveConstructionHint } from "@/lib/exercise-construction-hint";
import {
  detectSourceLanguage,
  isReportedSpeechRewrite,
  localizeExerciseInstruction,
} from "@/lib/exercise-localize";
import { translate } from "@/lib/i18n";
import type { ExerciseType, InterfaceLanguage, StaticExercise } from "@/types";

type ExerciseLike = Pick<
  StaticExercise,
  "type" | "question" | "answer" | "explanation"
> & {
  instruction?: string;
};

export function ExerciseFreeTextBlock({
  exercise,
  courseId,
  interfaceLanguage,
  value,
  onChange,
  onSubmit,
  taskLabel: _taskLabel,
  autoFocus = true,
}: {
  exercise: ExerciseLike;
  courseId: string;
  interfaceLanguage: InterfaceLanguage;
  value: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
  /** @deprecated Banner uses i18n lesson.taskLabel; kept for call-site compatibility. */
  taskLabel?: string;
  autoFocus?: boolean;
}) {
  void _taskLabel;
  const t = (key: string) => translate(key, interfaceLanguage);
  const instruction = localizeExerciseInstruction(exercise, interfaceLanguage);
  const constructionHint = resolveConstructionHint({
    instruction: exercise.instruction,
    explanation: exercise.explanation,
    answer: exercise.answer,
  });
  const reportedSpeech = isReportedSpeechRewrite(exercise);
  const authored = exercise.instruction?.trim() ?? "";
  const showAuthoredHint =
    exercise.type === "error_correction" &&
    !reportedSpeech &&
    authored.length > 0 &&
    detectSourceLanguage(authored) === interfaceLanguage;

  const spanishCourse = courseId === "spanish";
  const freeTextTypes: ExerciseType[] = [
    "fill_blank",
    "translation",
    "error_correction",
  ];
  const showAccentHint =
    spanishCourse && freeTextTypes.includes(exercise.type);

  const placeholder = reportedSpeech
    ? t("exercises.reportedSpeechPlaceholder")
    : exercise.type === "error_correction"
      ? t("exercises.errorCorrectionPlaceholder")
      : showAccentHint
        ? t("exercises.answerPlaceholderNoAccents")
        : t("exercises.answerPlaceholder");

  return (
    <div className="space-y-3">
      <ExerciseTaskBanner
        type={exercise.type}
        instruction={instruction}
        language={interfaceLanguage}
      />
      {constructionHint &&
      constructionHint.toLowerCase() !== instruction.trim().toLowerCase() ? (
        <p className="text-xs text-foreground/90 rounded-lg border border-primary/15 bg-primary/5 px-3 py-2">
          <span className="font-semibold text-primary">
            {t("exercises.constructionHintLabel")}{" "}
          </span>
          {constructionHint}
        </p>
      ) : null}
      {exercise.type === "error_correction" ? (
        <p className="text-xs text-muted-foreground">
          {reportedSpeech
            ? t("exercises.reportedSpeechLead")
            : t("exercises.errorCorrectionLead")}
        </p>
      ) : null}
      {showAuthoredHint && authored !== instruction ? (
        <p className="text-xs text-muted-foreground">{authored}</p>
      ) : null}

      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSubmit?.();
        }}
        autoFocus={autoFocus}
      />

      {showAccentHint ? (
        <p className="text-xs text-muted-foreground">
          {t("exercises.accentOptionalHint")}
        </p>
      ) : null}
    </div>
  );
}
