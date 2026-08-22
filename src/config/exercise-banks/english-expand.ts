import type { StaticExercise } from "@/types";
import {
  ENGLISH_C1_EXAM_THICK_CHAPTERS,
  ENGLISH_C2_THICK_CHAPTERS,
  THICK_TR_EC_TARGET,
} from "@/lib/exercise-bank";
import { expandChapterBank } from "@/config/exercise-banks/helpers";
import englishPacks from "@/config/exercise-banks/data/english-packs.json";

type Draft = Omit<StaticExercise, "id"> & { id?: string };
type PackMap = Record<
  string,
  Partial<Record<StaticExercise["type"], Draft[]>>
>;

const PACKS = englishPacks as PackMap;

/**
 * Merge curated English chapter exercises with the permanent bank packs
 * (target: ~20 items per type).
 */
export function expandEnglishChapterBank(
  chapterSlug: string,
  curated: Draft[],
): Draft[] {
  const typeTargets =
    ENGLISH_C2_THICK_CHAPTERS.has(chapterSlug) ||
    ENGLISH_C1_EXAM_THICK_CHAPTERS.has(chapterSlug)
      ? {
          translation: THICK_TR_EC_TARGET,
          error_correction: THICK_TR_EC_TARGET,
        }
      : undefined;
  return expandChapterBank(curated, PACKS[chapterSlug] ?? {}, typeTargets);
}
