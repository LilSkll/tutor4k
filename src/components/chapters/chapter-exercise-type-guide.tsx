"use client";

import type { ExerciseType, InterfaceLanguage } from "@/types";
import { translate } from "@/lib/i18n";

const TYPE_ORDER: ExerciseType[] = [
  "multiple_choice",
  "fill_blank",
  "translation",
  "error_correction",
  "sentence_building",
];

export function ChapterExerciseTypeGuide({
  exerciseTypes,
  language,
}: {
  exerciseTypes: ExerciseType[];
  language: InterfaceLanguage;
}) {
  const ordered = TYPE_ORDER.filter((t) => exerciseTypes.includes(t));
  if (ordered.length === 0) return null;

  const t = (key: string) => translate(key, language);

  return (
    <div className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-4 space-y-3">
      <p className="text-sm font-semibold text-primary">{t("lesson.exerciseTypesTitle")}</p>
      <p className="text-xs text-muted-foreground leading-relaxed">
        {t("lesson.exerciseTypesLead")}
      </p>
      <ul className="space-y-2.5">
        {ordered.map((type) => (
          <li key={type} className="text-sm">
            <span className="font-medium text-foreground">
              {t(`lesson.exerciseTypeName.${type}`)}
            </span>
            <span className="text-muted-foreground"> — </span>
            <span className="text-muted-foreground">{t(`lesson.exerciseTypeGuide.${type}`)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
