import type { StaticExercise } from "@/types";
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
  return expandChapterBank(curated, PACKS[chapterSlug] ?? {});
}
