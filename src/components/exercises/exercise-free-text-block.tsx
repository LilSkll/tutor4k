"use client";

import { Input } from "@/components/ui/input";
import {
  detectSourceLanguage,
  isReportedSpeechRewrite,
  localizeExerciseInstruction,
} from "@/lib/exercise-localize";
import { translate } from "@/lib/i18n";
import type { ExerciseType, InterfaceLanguage, StaticExercise } from "@/types";

type ExerciseLike = Pick<StaticExercise, "type" | "question" | "answer"> & {
  instruction?: string;
};

export function ExerciseFreeTextBlock({
  exercise,
  courseId,
  interfaceLanguage,
  value,
  onChange,
  onSubmit,
  taskLabel,
  autoFocus = true,
}: {
  exercise: ExerciseLike;
  courseId: string;
  interfaceLanguage: InterfaceLanguage;
  value: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
  taskLabel: string;
  autoFocus?: boolean;
}) {
  const t = (key: string) => translate(key, interfaceLanguage);
  const instruction = localizeExerciseInstruction(exercise, interfaceLanguage);
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
      <div className="rounded-lg bg-primary/10 border border-primary/20 px-4 py-2.5 space-y-1.5">
        <p className="text-sm text-foreground">
          <span className="font-semibold text-primary">{taskLabel} </span>
          {instruction}
        </p>
        {exercise.type === "error_correction" ? (
          <p className="text-xs text-muted-foreground">
            {reportedSpeech
              ? t("exercises.reportedSpeechLead")
              : t("exercises.errorCorrectionLead")}
          </p>
        ) : null}
        {showAuthoredHint && authored !== instruction ? (
          <p className="text-xs text-muted-foreground border-t border-primary/10 pt-1.5">
            {authored}
          </p>
        ) : null}
      </div>

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
