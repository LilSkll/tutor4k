import { describe, expect, it } from "vitest";
import { getCourse } from "@/config/courses";
import { getExercisePool } from "@/lib/exercise-pool";
import { TARGET_EXERCISES_PER_TYPE } from "@/lib/exercise-bank";
import { answersMatch } from "@/lib/normalize-answer";

const DEEP_A1_SLUGS = [
  "ru-ch1-alphabet-greetings",
  "ru-ch2-introduce-yourself",
  "ru-ch3-noun-gender",
  "ru-ch4-present-tense",
  "ru-ch5-accusative",
  "ru-ch6-university-day",
  "ru-ch7-prepositional",
  "ru-ch8-numbers-time",
];

const SEED_CHAPTER_COUNT = 22 - DEEP_A1_SLUGS.length;
const EXERCISES_PER_SEED = 5;

/**
 * Structural + distribution gates for the RKI bank.
 * A1 ch1–8 are deepened; ch9–22 are intentional thin seeds until a quality pass.
 */
describe("Russian exercise bank audit", () => {
  it("every chapter has exercises; pool is structurally sound", async () => {
    const ru = await getCourse("russian");
    const chapters = ru.getChapters();
    expect(chapters.length).toBe(22);

    const counts: Record<string, number> = {};
    const byLevel: Record<string, number> = { A1: 0, A2: 0, B1: 0 };

    for (const ch of chapters) {
      const exs = ru.getExercises(ch.slug);
      counts[ch.slug] = exs.length;
      byLevel[ch.level] = (byLevel[ch.level] ?? 0) + exs.length;
      expect(exs.length, ch.slug).toBeGreaterThanOrEqual(5);

      const seen = new Set<string>();
      for (const ex of exs) {
        expect(ex.id).toBeTruthy();
        expect(ex.answer?.trim().length, ex.id).toBeGreaterThan(0);
        expect(ex.explanation?.trim().length, ex.id).toBeGreaterThan(0);
        expect(ex.grammarTopic?.startsWith("ru-"), ex.id).toBe(true);

        const dedupeKey = `${ex.type}\0${ex.question}`;
        expect(seen.has(dedupeKey), `${ch.slug} duplicate ${ex.type}: ${ex.question}`).toBe(
          false,
        );
        seen.add(dedupeKey);

        if (ex.type === "multiple_choice") {
          expect(ex.options?.length, ex.id).toBeGreaterThanOrEqual(2);
          expect(
            ex.options!.some((o) => answersMatch(o, [ex.answer])),
            `${ex.id}: answer not in options`,
          ).toBe(true);
        }
        if (ex.type === "fill_blank") {
          expect(ex.question.includes("___"), ex.id).toBe(true);
        }
        if (ex.type === "translation") {
          expect(ex.answer, ex.id).toMatch(/[\u0400-\u04FF]/);
        }
        if (ex.type === "error_correction") {
          expect(ex.question, ex.id).toMatch(/[\u0400-\u04FF]/);
          expect(ex.answer, ex.id).toMatch(/[\u0400-\u04FF]/);
          expect(
            answersMatch(ex.question, [ex.answer]),
            `${ex.id}: EC stem equals answer`,
          ).toBe(false);
        }
      }
    }

    for (const slug of DEEP_A1_SLUGS) {
      expect(counts[slug], slug).toBeGreaterThanOrEqual(50);
    }
    for (const slug of DEEP_A1_SLUGS.slice(3)) {
      expect(counts[slug], slug).toBeGreaterThanOrEqual(95);
    }

    const seedSlugs = chapters
      .map((c) => c.slug)
      .filter((slug) => !DEEP_A1_SLUGS.includes(slug));
    for (const slug of seedSlugs) {
      expect(counts[slug], slug).toBeGreaterThanOrEqual(5);
      expect(counts[slug], `${slug} still a seed`).toBeLessThan(
        TARGET_EXERCISES_PER_TYPE * 5,
      );
    }

    expect(byLevel.A1).toBeGreaterThan(byLevel.A2);
    expect(byLevel.A2).toBeGreaterThanOrEqual(byLevel.B1);

    const pool = await getExercisePool("russian");
    const chapterTotal = Object.values(counts).reduce((s, n) => s + n, 0);
    expect(pool.length).toBe(chapterTotal);
    expect(pool.length).toBeGreaterThanOrEqual(700);
    expect(pool.length).toBeLessThanOrEqual(850);

    const ideal = chapters.length * 5 * TARGET_EXERCISES_PER_TYPE;
    expect(pool.length).toBeLessThan(ideal);
  });

  it("reports chapter coverage snapshot (non-flaky shape)", async () => {
    const ru = await getCourse("russian");
    const rows = ru.getChapters().map((ch) => ({
      slug: ch.slug,
      level: ch.level,
      n: ru.getExercises(ch.slug).length,
      grammar: ch.grammarTopic,
    }));
    const deep = rows.filter((r) => r.n >= 50);
    const seeds = rows.filter((r) => r.n < 50);
    expect(deep.length).toBe(DEEP_A1_SLUGS.length);
    expect(seeds.length).toBe(SEED_CHAPTER_COUNT);
    const total = rows.reduce((s, r) => s + r.n, 0);
    const deepSum = deep.reduce((s, r) => s + r.n, 0);
    const seedSum = seeds.reduce((s, r) => s + r.n, 0);
    expect(seedSum).toBe(SEED_CHAPTER_COUNT * EXERCISES_PER_SEED);
    expect(total).toBe(deepSum + seedSum);
    expect(total).toBeGreaterThanOrEqual(740);
    expect(total).toBeLessThanOrEqual(760);
  });
});
