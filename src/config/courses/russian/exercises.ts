import type { StaticExercise } from "@/types";
import { withExerciseIds } from "@/lib/exercise-bank";
import { getRuChapter } from "./chapters";
import { RUSSIAN_A1_CH1_3_EXERCISES } from "./exercises-a1-ch1-3";
import { RUSSIAN_A1_CH4_8_EXERCISES } from "./exercises-a1-ch4-8";
import { RUSSIAN_A2_EXERCISES } from "./exercises-a2";
import { RUSSIAN_B1_EXERCISES } from "./exercises-b1";
import { RUSSIAN_TR_L1 } from "./translation-l1";

type Draft = Omit<StaticExercise, "id"> & { id?: string };

/**
 * RKI exercise banks — A1 deep, A2/B1 quality banks (i18n-first curriculum).
 */
export const RUSSIAN_EXERCISES: Record<string, Draft[]> = {
  ...RUSSIAN_A1_CH1_3_EXERCISES,
  ...RUSSIAN_A1_CH4_8_EXERCISES,
  ...RUSSIAN_A2_EXERCISES,
  ...RUSSIAN_B1_EXERCISES,
};

/** Attach ES/DE L1 prompts onto English-authored translation stems. */
function withRussianTrL1(draft: Draft): Draft {
  if (draft.type !== "translation") return draft;
  const key = draft.question?.trim() ?? "";
  const mapped = RUSSIAN_TR_L1[key];
  if (!mapped) return draft;
  return {
    ...draft,
    questionTranslations: {
      ...(draft.questionTranslations ?? {}),
      es: draft.questionTranslations?.es ?? mapped.es,
      de: draft.questionTranslations?.de ?? mapped.de,
    },
  };
}

export function getRussianExercises(chapterSlug: string): StaticExercise[] {
  const chapter = getRuChapter(chapterSlug);
  const drafts = RUSSIAN_EXERCISES[chapterSlug] ?? [];
  const filtered = chapter?.exerciseTypes?.length
    ? drafts.filter((d) => chapter.exerciseTypes.includes(d.type))
    : drafts;
  const stamped = filtered.map((d) => {
    const withL1 = withRussianTrL1(d);
    return {
      ...withL1,
      grammarTopic: withL1.grammarTopic ?? chapter?.grammarTopic,
      vocabTopic: withL1.vocabTopic ?? chapter?.vocabTopic,
    };
  });
  return withExerciseIds("russian", chapterSlug, stamped);
}
