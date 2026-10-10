"use client";

import type { ExerciseType, InterfaceLanguage } from "@/types";
import { translate } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function howToIsRedundant(instruction: string, howTo: string): boolean {
  const a = instruction.toLowerCase();
  const b = howTo.toLowerCase();
  if (!a || !b) return false;
  // Specific instruction already explains tiles / no-typing / translate.
  if (
    /(нажим|tap|toc[aá]|tipp|из слов|from the words|de abajo|unten|не перевод|not translate|no traduz|nicht übersetz|не печат|do not type|ni escribas|nicht tippen)/i.test(
      a,
    ) &&
    /(нажим|tap|toc|tipp|не перевод|not a translation|no es una trad|keine übersetzung|не ввод|nothing to type|no hace falta|nichts tippen)/i.test(
      b,
    )
  ) {
    return true;
  }
  if (
    /(перевод|translat|traduc|übersetz)/i.test(a) &&
    /(перевод|translat|traduc|übersetz)/i.test(b)
  ) {
    return true;
  }
  if (
    /(выбер|choose|elige|wähle|один вариант|one option|una opción)/i.test(a) &&
    /(выбер|pick|elige|wähle|списк|list|lista)/i.test(b)
  ) {
    return true;
  }
  return false;
}

/**
 * Always-visible cue: what to do on this card (translate / tap tiles / fill blank…).
 * Shown before answering so students are not left guessing after a wrong attempt.
 */
export function ExerciseTaskBanner({
  type,
  instruction,
  meaning,
  language,
  className,
}: {
  type: ExerciseType;
  instruction: string;
  /** Optional L1 meaning (e.g. sentence-building) without revealing word order. */
  meaning?: string | null;
  language: InterfaceLanguage;
  className?: string;
}) {
  const t = (key: string) => translate(key, language);
  const typeName = t(`lesson.exerciseTypeName.${type}`);
  const howTo = t(`exercises.taskHowTo.${type}`);
  const showHowTo = Boolean(howTo) && !howToIsRedundant(instruction, howTo);

  return (
    <div
      className={cn(
        "rounded-lg border border-primary/20 bg-primary/10 px-4 py-2.5 space-y-1.5",
        className,
      )}
    >
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
        <span className="text-xs font-semibold uppercase tracking-wide text-primary">
          {t("lesson.taskLabel").replace(/[:：]\s*$/, "")}
        </span>
        <span className="rounded-full bg-primary/15 px-2 py-0.5 text-xs font-semibold text-primary">
          {typeName}
        </span>
      </div>
      <p className="text-sm font-medium text-foreground leading-snug">
        {instruction}
      </p>
      {showHowTo ? (
        <p className="text-xs text-muted-foreground leading-snug">{howTo}</p>
      ) : null}
      {meaning ? (
        <p className="text-xs text-foreground/85 leading-snug border-t border-primary/10 pt-1.5">
          <span className="font-semibold text-primary/90">
            {t("exercises.taskMeaning")}:
          </span>{" "}
          {meaning}
        </p>
      ) : null}
    </div>
  );
}
