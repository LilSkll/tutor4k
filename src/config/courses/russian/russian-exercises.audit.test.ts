import { describe, expect, it } from "vitest";
import { getCourse } from "@/config/courses";
import { getExercisePool } from "@/lib/exercise-pool";
import { answersMatch } from "@/lib/normalize-answer";

const A1_SLUGS = [
  "ru-ch1-alphabet-greetings",
  "ru-ch2-introduce-yourself",
  "ru-ch3-noun-gender",
  "ru-ch4-present-tense",
  "ru-ch5-accusative",
  "ru-ch6-university-day",
  "ru-ch7-prepositional",
  "ru-ch8-numbers-time",
];

const A2_SLUGS = [
  "ru-ch9-past-tense",
  "ru-ch10-future",
  "ru-ch11-genitive",
  "ru-ch12-dative",
  "ru-ch13-instrumental",
  "ru-ch14-aspect-intro",
  "ru-ch15-motion-basic",
  "ru-ch16-dorm-shops",
];

const B1_SLUGS = [
  "ru-ch17-cases-review",
  "ru-ch18-aspect-system",
  "ru-ch19-motion-prefixes",
  "ru-ch20-complex-sentences",
  "ru-ch21-narration-cohesion",
  "ru-ch22-academic-social",
];

describe("Russian exercise bank audit", () => {
  it("every chapter has a quality bank; pool is structurally sound", async () => {
    const ru = await getCourse("russian");
    const chapters = ru.getChapters();
    expect(chapters.length).toBe(22);

    const counts: Record<string, number> = {};
    const byLevel: Record<string, number> = { A1: 0, A2: 0, B1: 0 };

    for (const ch of chapters) {
      const exs = ru.getExercises(ch.slug);
      counts[ch.slug] = exs.length;
      byLevel[ch.level] = (byLevel[ch.level] ?? 0) + exs.length;
      expect(exs.length, ch.slug).toBeGreaterThanOrEqual(35);

      const seen = new Set<string>();
      for (const ex of exs) {
        expect(ex.id).toBeTruthy();
        expect(ex.answer?.trim().length, ex.id).toBeGreaterThan(0);
        expect(ex.explanation?.trim().length, ex.id).toBeGreaterThan(0);
        expect(ex.grammarTopic?.startsWith("ru-"), ex.id).toBe(true);

        const dedupeKey = `${ex.type}\0${ex.question}`;
        expect(
          seen.has(dedupeKey),
          `${ch.slug} duplicate ${ex.type}: ${ex.question}`,
        ).toBe(false);
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

    for (const slug of A1_SLUGS) {
      expect(counts[slug], slug).toBeGreaterThanOrEqual(50);
    }
    for (const slug of [...A2_SLUGS, ...B1_SLUGS]) {
      expect(counts[slug], slug).toBeGreaterThanOrEqual(35);
      expect(counts[slug], slug).toBeLessThanOrEqual(80);
    }

    expect(byLevel.A1).toBeGreaterThan(byLevel.A2);
    expect(byLevel.A2).toBeGreaterThanOrEqual(byLevel.B1);

    const pool = await getExercisePool("russian");
    const chapterTotal = Object.values(counts).reduce((s, n) => s + n, 0);
    expect(pool.length).toBe(chapterTotal);
    // A1 ~680 + A2 320 + B1 240 ≈ 1240
    expect(pool.length).toBeGreaterThanOrEqual(1100);
    expect(pool.length).toBeLessThan(1600);
  });

  it("reports chapter coverage snapshot (non-flaky shape)", async () => {
    const ru = await getCourse("russian");
    const rows = ru.getChapters().map((ch) => ({
      slug: ch.slug,
      level: ch.level,
      n: ru.getExercises(ch.slug).length,
      grammar: ch.grammarTopic,
    }));
    expect(rows.filter((r) => r.level === "A1").length).toBe(8);
    expect(rows.filter((r) => r.level === "A2").length).toBe(8);
    expect(rows.filter((r) => r.level === "B1").length).toBe(6);
    expect(rows.every((r) => r.n >= 35)).toBe(true);
    const total = rows.reduce((s, r) => s + r.n, 0);
    expect(total).toBeGreaterThanOrEqual(1100);
    expect(total).toBeLessThan(1600);
  });
});
