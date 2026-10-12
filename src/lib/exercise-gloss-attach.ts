import type { InterfaceLanguage, StaticExercise } from "@/types";
import { lookupCuratedQuestionGloss } from "@/config/exercise-glosses";
import { attachEnglishTrL1 } from "@/config/exercise-translation-prompts";
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
  if (exercise.type === "error_correction") {
    return { ...exercise, questionTranslations: {} };
  }

  let questionTranslations: Partial<Record<InterfaceLanguage, string>> = {
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

  // RU-authored TR stems: attach ES/DE L1 so EN UI never sees Cyrillic.
  const withL1 = attachEnglishTrL1({
    ...exercise,
    questionTranslations,
  });
  questionTranslations = withL1.questionTranslations ?? questionTranslations;

  return { ...exercise, questionTranslations };
}

export function attachQuestionGlossesToMany<T extends StaticExercise>(
  exercises: T[],
): T[] {
  return exercises.map(attachQuestionGlosses);
}
