import type { StaticExercise } from "@/types";
import {
  SPANISH_C1_THICK_CHAPTERS,
  SPANISH_C2_THICK_CHAPTERS,
  THICK_TR_EC_TARGET,
} from "@/lib/exercise-bank";
import { expandChapterBank } from "@/config/exercise-banks/helpers";
import spanishPacks from "@/config/exercise-banks/data/spanish-packs.json";

type Draft = Omit<StaticExercise, "id"> & { id?: string };
type PackMap = Record<
  string,
  Partial<Record<StaticExercise["type"], Draft[]>>
>;

const PACKS = spanishPacks as PackMap;

/**
 * Merge curated Spanish chapter exercises with the permanent bank packs
 * (target: ~20 items per type).
 */
export function expandSpanishChapterBank(
  chapterSlug: string,
  curated: Draft[],
): Draft[] {
  const typeTargets =
    SPANISH_C2_THICK_CHAPTERS.has(chapterSlug) ||
    SPANISH_C1_THICK_CHAPTERS.has(chapterSlug)
      ? {
          translation: THICK_TR_EC_TARGET,
          error_correction: THICK_TR_EC_TARGET,
        }
      : undefined;
  // per-type: advanced packs are SB-heavy; shared stems were starving MC/FB/TR.
  return expandChapterBank(curated, PACKS[chapterSlug] ?? {}, typeTargets, {
    contentScope: "per-type",
  });
}
