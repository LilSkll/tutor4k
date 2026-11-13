import { describe, expect, it } from "vitest";
import { getCourse } from "@/config/courses";
import { prepareExercisesForInterface } from "@/lib/exercise-localize";

const EARLY_HARD =
  /\b(me levanto|me lavo|me ducho|nos levantamos|camino al trabajo|dos veces al d[ií]a)\b/i;

function words(s: string): number {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

describe("A1 starter pedagogy across courses", () => {
  it("keeps first two A1 chapters free of reflexive/idiom TR and slash spoilers", async () => {
    for (const id of ["german", "spanish", "english", "russian"] as const) {
      const course = await getCourse(id);
      const a1 = course
        .getChapters()
        .filter((ch) => String(ch.level ?? "").toUpperCase() === "A1")
        .slice(0, 2);

      expect(a1.length).toBeGreaterThanOrEqual(2);

      for (const ch of a1) {
        const prep = prepareExercisesForInterface(
          course.getExercises(ch.slug),
          "ru",
          id,
        );

        for (const e of prep) {
          if (e.type === "translation") {
            const blob = `${e.question} ${e.answer}`;
            expect(EARLY_HARD.test(blob), `${id}/${ch.slug}: ${blob}`).toBe(
              false,
            );
            // Absolute starters: keep TR short
            expect(
              words(e.question) <= 8 && words(e.answer) <= 8,
              `${id}/${ch.slug} long TR: «${e.question}» → «${e.answer}»`,
            ).toBe(true);
          }

          if (e.type === "fill_blank") {
            const inst = (e.instruction ?? "").trim();
            if (/\//.test(inst) && e.answer) {
              const parts = inst.split(/[/·|]/).map((p) =>
                p.trim().toLowerCase(),
              );
              expect(
                parts.includes(e.answer.trim().toLowerCase()),
                `${id}/${ch.slug} slash spoiler: «${inst}» = ${e.answer}`,
              ).toBe(false);
            }
          }

          expect(
            (e.question ?? "").includes("Где газета"),
            `${id}/${ch.slug} газета/periódico mismatch`,
          ).toBe(false);
          expect(
            /mesa\s*=\s*masculino/i.test(e.question ?? ""),
            `${id}/${ch.slug} bad ES gloss`,
          ).toBe(false);
        }
      }
    }
  });

  it("does not leak there is/are or bare will in English A1 L1 MC cues", async () => {
    const course = await getCourse("english");
    const ch3 = course
      .getChapters()
      .find((ch) => ch.slug.includes("ch3") || ch.slug.includes("around"));
    expect(ch3).toBeTruthy();
    const prep = prepareExercisesForInterface(
      course.getExercises(ch3!.slug),
      "ru",
      "english",
    );
    for (const e of prep.filter((x) => x.type === "multiple_choice")) {
      expect(e.question).not.toMatch(/there is или there are/i);
    }
  });
});
