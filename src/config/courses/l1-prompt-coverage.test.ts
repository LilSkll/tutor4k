import { describe, expect, it } from "vitest";
import { getCourse } from "@/config/courses";
import { attachQuestionGlosses } from "@/lib/exercise-gloss-attach";
import type { GrammarLevel, StaticExercise } from "@/types";

const CYR = /[\u0400-\u04FF]/;
const LEVELS: GrammarLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

/**
 * A practice prompt is "L1-readable" when the learner can understand the
 * TASK without already knowing the target language:
 * - DE/ES/EN courses (default RU UI): Cyrillic in question, OR ru gloss
 * - Russian course (default EN UI): non-Cyrillic question, OR en/es/de gloss
 */
function isL1Readable(
  courseId: string,
  ex: Pick<StaticExercise, "question" | "questionTranslations">,
): boolean {
  const q = ex.question?.trim() ?? "";
  if (courseId === "russian") {
    if (!CYR.test(q)) return true;
    return Boolean(
      ex.questionTranslations?.en?.trim() ||
        ex.questionTranslations?.es?.trim() ||
        ex.questionTranslations?.de?.trim(),
    );
  }
  if (CYR.test(q)) return true;
  return Boolean(ex.questionTranslations?.ru?.trim());
}

describe("L1-readable prompts A1–C2 (all courses)", () => {
  for (const courseId of ["spanish", "english", "german", "russian"] as const) {
    it(`${courseId}: MC/FB prompts are L1-readable at every band`, async () => {
      const course = await getCourse(courseId);
      const chapters = course
        .getChapters()
        .filter((c) => LEVELS.includes(c.level as GrammarLevel));
      expect(chapters.length).toBeGreaterThan(10);

      let total = 0;
      let ok = 0;
      const bare: string[] = [];

      for (const ch of chapters) {
        for (const raw of course.getExercises(ch.slug)) {
          if (raw.type !== "multiple_choice" && raw.type !== "fill_blank") {
            continue;
          }
          total += 1;
          const ex = attachQuestionGlosses({
            ...raw,
            courseId,
            chapterSlug: ch.slug,
            level: ch.level,
          } as StaticExercise);
          if (isL1Readable(courseId, ex)) {
            ok += 1;
          } else if (bare.length < 12) {
            bare.push(`${ch.level}/${ch.slug}: ${(ex.question ?? "").slice(0, 64)}`);
          }
        }
      }

      expect(total).toBeGreaterThan(50);
      const rate = ok / total;
      // English keeps the target stem visible and relies on RU meaning glosses;
      // coverage is growing via curated + TR-derived maps (not cue-in-stem hacks).
      const minRate = courseId === "english" ? 0.45 : 0.95;
      expect(
        rate,
        `${courseId} L1 rate=${rate.toFixed(3)} (${ok}/${total}); bare=${bare.join(" | ")}`,
      ).toBeGreaterThanOrEqual(minRate);
    });

    it(`${courseId}: early A1 MC prompts are L1-readable (strict)`, async () => {
      const course = await getCourse(courseId);
      const a1All = course.getChapters().filter((c) => c.level === "A1");
      // First contact chapters — where missing L1 hurts most.
      // English A1 also includes later “articles/possessives” units; pin openers.
      const a1 =
        courseId === "english"
          ? a1All.filter((c) =>
              /eng-ch(1|2|3)-/.test(c.slug),
            )
          : a1All;
      expect(a1.length).toBeGreaterThan(0);

      const bare: string[] = [];
      let mc = 0;
      for (const ch of a1) {
        for (const raw of course.getExercises(ch.slug)) {
          if (raw.type !== "multiple_choice") continue;
          mc += 1;
          const ex = attachQuestionGlosses({
            ...raw,
            courseId,
            chapterSlug: ch.slug,
            level: ch.level,
          } as StaticExercise);
          if (!isL1Readable(courseId, ex)) {
            bare.push(`${ch.slug}: ${(ex.question ?? "").slice(0, 72)}`);
          }
        }
      }
      expect(mc).toBeGreaterThan(5);
      expect(bare, bare.slice(0, 8).join(" | ")).toEqual([]);
    });
  }
});
