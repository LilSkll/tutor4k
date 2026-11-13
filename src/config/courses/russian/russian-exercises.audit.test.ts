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

const EXPANSION_SLUGS = new Set([
  "ru-ch37-classroom-survival",
  "ru-ch38-services-invitations",
  "ru-ch39-government-verbs",
  "ru-ch40-participle-preview",
  "ru-ch41-opinion-structures",
  "ru-ch42-syntax-complexity",
  "ru-ch43-written-discourse",
  "ru-ch44-critique-review",
  "ru-ch45-academic-writing",
]);

const B2_C2_SLUGS = [
  "ru-ch23-participles",
  "ru-ch24-gerunds",
  "ru-ch25-passive",
  "ru-ch26-reported-speech",
  "ru-ch27-conditionals",
  "ru-ch28-formal-register",
  "ru-ch29-aspect-nuance",
  "ru-ch30-idioms",
  "ru-ch31-advanced-argumentation",
  "ru-ch32-media-discourse",
  "ru-ch33-registers",
  "ru-ch34-literary-culture",
  "ru-ch35-professional-academic",
  "ru-ch36-pragmatic-mastery",
];

describe("Russian exercise bank audit", () => {
  it("every chapter has a quality bank; pool is structurally sound", async () => {
    const ru = await getCourse("russian");
    const chapters = ru.getChapters();
    expect(chapters.length).toBe(45);

    const counts: Record<string, number> = {};
    const byLevel: Record<string, number> = {
      A1: 0,
      A2: 0,
      B1: 0,
      B2: 0,
      C1: 0,
      C2: 0,
    };

    for (const ch of chapters) {
      const exs = ru.getExercises(ch.slug);
      counts[ch.slug] = exs.length;
      byLevel[ch.level] = (byLevel[ch.level] ?? 0) + exs.length;
      if (EXPANSION_SLUGS.has(ch.slug)) {
        expect(exs.length, ch.slug).toBeGreaterThanOrEqual(20);
        expect(exs.length, ch.slug).toBeLessThanOrEqual(24);
      } else {
        expect(exs.length, ch.slug).toBeGreaterThanOrEqual(35);
      }

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
    for (const slug of [...A2_SLUGS, ...B1_SLUGS, ...B2_C2_SLUGS]) {
      expect(counts[slug], slug).toBeGreaterThanOrEqual(35);
      expect(counts[slug], slug).toBeLessThanOrEqual(80);
    }

    expect(byLevel.A1).toBeGreaterThan(byLevel.A2);
    expect(byLevel.A2).toBeGreaterThanOrEqual(byLevel.B1);
    expect(byLevel.B2).toBe(280);
    expect(byLevel.C1).toBe(200);
    expect(byLevel.C2).toBe(160);

    const pool = await getExercisePool("russian");
    const chapterTotal = chapters.reduce(
      (s, ch) => s + ru.getExercises(ch.slug).length,
      0,
    );
    expect(pool.length).toBe(chapterTotal);
    // A1~680 + A2 320 + B1 240 + B2 240 + C1 160 + C2 160 ≈ 1800
    expect(pool.length).toBeGreaterThanOrEqual(1700);
    expect(pool.length).toBeLessThan(2200);
  });

  it("reports chapter coverage snapshot (non-flaky shape)", async () => {
    const ru = await getCourse("russian");
    const rows = ru.getChapters().map((ch) => ({
      slug: ch.slug,
      level: ch.level,
      n: ru.getExercises(ch.slug).length,
      grammar: ch.grammarTopic,
    }));
    expect(rows.filter((r) => r.level === "A1").length).toBe(9);
    expect(rows.filter((r) => r.level === "A2").length).toBe(9);
    expect(rows.filter((r) => r.level === "B1").length).toBe(9);
    expect(rows.filter((r) => r.level === "B2").length).toBe(8);
    expect(rows.filter((r) => r.level === "C1").length).toBe(6);
    expect(rows.filter((r) => r.level === "C2").length).toBe(4);
    for (const row of rows) {
      if (EXPANSION_SLUGS.has(row.slug)) {
        expect(row.n, row.slug).toBeGreaterThanOrEqual(20);
        expect(row.n, row.slug).toBeLessThanOrEqual(24);
      } else {
        expect(row.n, row.slug).toBeGreaterThanOrEqual(35);
      }
    }
    const total = rows.reduce((s, r) => s + r.n, 0);
    expect(total).toBeGreaterThanOrEqual(1700);
    expect(total).toBeLessThan(2200);
  });
});
