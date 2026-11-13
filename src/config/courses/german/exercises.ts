import type { StaticExercise } from "@/types";
import { withExerciseIds } from "@/lib/exercise-bank";
import { getReadingPassagesForChapter } from "@/config/reading-passages";
import { getDeChapter } from "./chapters";
import { GERMAN_A1_EXERCISES } from "./exercises-a1";
import { GERMAN_A2_EXERCISES } from "./exercises-a2";
import { GERMAN_B1_EXERCISES } from "./exercises-b1";
import { GERMAN_B2C1_EXERCISES } from "./exercises-b2c1";
import { GERMAN_EXPAND_45_EXERCISES } from "./exercises-expand-45";
import { attachGermanTrL1 } from "./translation-l1";

type Draft = Omit<StaticExercise, "id"> & { id?: string };

/**
 * German course — permanent exercise bank (A1–C2).
 * Grammar and vocab topics come from the chapter record.
 * Reading passages are appended so earlier adaptive ids stay stable.
 */
export const GERMAN_EXERCISES: Record<string, Draft[]> = {
  ...GERMAN_A1_EXERCISES,
  ...GERMAN_A2_EXERCISES,
  ...GERMAN_B1_EXERCISES,
  ...GERMAN_B2C1_EXERCISES,
  ...GERMAN_EXPAND_45_EXERCISES,
};

export function getGermanExercises(slug: string): StaticExercise[] {
  const chapter = getDeChapter(slug);
  const drafts = GERMAN_EXERCISES[slug] ?? [];
  const filtered = chapter?.exerciseTypes?.length
    ? drafts.filter((d) => chapter.exerciseTypes.includes(d.type))
    : drafts;
  const stamped = filtered.map((d) => ({
    ...d,
    grammarTopic: d.grammarTopic ?? chapter?.grammarTopic,
    vocabTopic: d.vocabTopic ?? chapter?.vocabTopic,
  }));
  const withReading = [
    ...stamped,
    ...getReadingPassagesForChapter("german", slug).map((d) => ({
      ...d,
      grammarTopic: d.grammarTopic ?? chapter?.grammarTopic,
      vocabTopic: d.vocabTopic ?? chapter?.vocabTopic,
    })),
  ];
  return withExerciseIds("german", slug, attachGermanTrL1(withReading));
}
