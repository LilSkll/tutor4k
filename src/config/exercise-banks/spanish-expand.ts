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

/** Too early for ch1–2 (presente -ar/-er/-ir only). */
const EARLY_A1_HARD =
  /\b(me levanto|me lavo|me ducho|nos levantamos|camino al trabajo|dos veces al d[ií]a)\b/i;

function scrubEarlyA1Pack(
  chapterSlug: string,
  packs: Partial<Record<StaticExercise["type"], Draft[]>>,
): Partial<Record<StaticExercise["type"], Draft[]>> {
  if (
    chapterSlug !== "chapter-2-primer-dialogo" &&
    chapterSlug !== "chapter-3-biblioteca"
  ) {
    return packs;
  }
  const out: Partial<Record<StaticExercise["type"], Draft[]>> = {};
  for (const [type, list] of Object.entries(packs)) {
    if (!list) continue;
    out[type as StaticExercise["type"]] = list.filter((ex) => {
      const blob = `${ex.question ?? ""} ${ex.answer ?? ""}`;
      if (EARLY_A1_HARD.test(blob)) return false;
      if ((ex.question ?? "").includes("Где газета")) return false;
      return true;
    });
  }
  return out;
}

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
  const chapterPacks = scrubEarlyA1Pack(
    chapterSlug,
    PACKS[chapterSlug] ?? {},
  );
  return expandChapterBank(curated, chapterPacks, typeTargets, {
    // Per-type: packs already hold ~20 unique items per type; shared
    // stem dedupe across types was capping runtime banks around ~8–12.
    // Practice sessions still dedupe within a round.
    contentScope: "per-type",
    fillTypesBelow: 20,
  });
}
