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
  // Per-type: packs already hold ~20 unique items per type; shared
  // stem dedupe across types was capping runtime banks. Sessions still
  // dedupe within a practice round.
  return expandChapterBank(curated, PACKS[chapterSlug] ?? {}, typeTargets, {
    contentScope: "per-type",
    fillTypesBelow: 20,
  });
}
