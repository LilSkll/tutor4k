import type { InterfaceLanguage, StaticExercise } from "@/types";
import { lookupCuratedQuestionGloss } from "@/config/exercise-glosses";
import { inferQuestionGloss } from "@/lib/exercise-gloss-infer";
import { hasCyrillicText } from "@/lib/exercise-localize";

const GLOSS_LANGS: InterfaceLanguage[] = ["ru", "en", "es", "de"];

/**
 * Server-only: embed curated question glosses into exercise payloads so the
 * client does not need the ~72KB gloss JSON map.
 */
export function attachQuestionGlosses<T extends StaticExercise>(
  exercise: T,
): T {
  const questionTranslations: Partial<Record<InterfaceLanguage, string>> = {
    ...(exercise.questionTranslations ?? {}),
  };
  for (const lang of GLOSS_LANGS) {
    if (questionTranslations[lang]?.trim()) continue;
    const gloss = lookupCuratedQuestionGloss(exercise.question, lang);
    if (gloss) questionTranslations[lang] = gloss;
  }

  const q = exercise.question?.trim() ?? "";
  if (q && !hasCyrillicText(q)) {
    for (const lang of GLOSS_LANGS) {
      if (questionTranslations[lang]?.trim()) continue;
      const inferred = inferQuestionGloss(exercise, lang);
      if (inferred) questionTranslations[lang] = inferred;
    }
  }

  return { ...exercise, questionTranslations };
}

export function attachQuestionGlossesToMany<T extends StaticExercise>(
  exercises: T[],
): T[] {
  return exercises.map(attachQuestionGlosses);
}
