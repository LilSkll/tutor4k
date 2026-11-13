import { describe, expect, it } from "vitest";
import { getCourse } from "@/config/courses";
import {
  getReadingPassagesForChapter,
  listReadingPassageChapters,
  READING_PASSAGES_BY_COURSE,
} from "@/config/reading-passages";

/** Absolute-beginner openers: phrase drills only, no connected L2 reading. */
const OPENER_CHAPTERS = [
  ["spanish", "chapter-1-despertar"],
  ["english", "eng-ch1-first-steps"],
  ["russian", "ru-ch1-alphabet-greetings"],
  ["german", "de-ch1-alphabet-greetings"],
] as const;

describe("reading passage exercises", () => {
  it("covers multiple chapters per course with passage + MC", () => {
    for (const courseId of [
      "spanish",
      "english",
      "russian",
      "german",
    ] as const) {
      const chapters = listReadingPassageChapters(courseId);
      // Russian A2–C2 banks are size-frozen, so RU ships fewer reading chapters.
      // German lost the A1 opener reading block on purpose.
      const min =
        courseId === "russian" ? 2 : courseId === "german" ? 14 : 4;
      expect(chapters.length, courseId).toBeGreaterThanOrEqual(min);
      for (const slug of chapters) {
        const drafts = getReadingPassagesForChapter(courseId, slug);
        expect(drafts.length, `${courseId}/${slug}`).toBeGreaterThanOrEqual(1);
        expect(drafts[0]!.passage?.trim().length).toBeGreaterThan(20);
        expect(drafts.some((d) => d.type === "multiple_choice")).toBe(true);
      }
    }
    // Frozen Russian B2–C2 banks must not receive appended reading items.
    const ru = READING_PASSAGES_BY_COURSE.russian ?? {};
    for (const slug of Object.keys(ru)) {
      expect(slug).not.toMatch(/^ru-ch(2[3-9]|3[0-6])/);
    }
  });

  it("does not attach reading to A1 opener chapters", async () => {
    for (const [courseId, slug] of OPENER_CHAPTERS) {
      expect(
        getReadingPassagesForChapter(courseId, slug),
        `${courseId}/${slug}`,
      ).toEqual([]);
      const course = await getCourse(courseId);
      const bank = course.getExercises(slug);
      expect(
        bank.filter((e) => e.passage?.trim()),
        `${courseId}/${slug} bank`,
      ).toEqual([]);
    }
  });

  it("loads into later banks without shifting early adaptive ids", async () => {
    const cases = [
      ["spanish", "chapter-2-primer-dialogo"],
      ["english", "eng-ch2-routines"],
      ["russian", "ru-ch2-introduce-yourself"],
      ["german", "de-ch3-articles-gender"],
    ] as const;

    for (const [courseId, slug] of cases) {
      const course = await getCourse(courseId);
      const bank = course.getExercises(slug);
      const withPassage = bank.filter((e) => e.passage);
      expect(withPassage.length, `${courseId} loaded`).toBeGreaterThanOrEqual(1);

      const firstMc = bank.find((e) => e.type === "multiple_choice");
      expect(firstMc?.id).toMatch(
        new RegExp(`^${courseId}:${slug}:multiple_choice:01$`),
      );
    }
  });

  it("keeps Russian B2–C2 chapter sizes at 40", async () => {
    const course = await getCourse("russian");
    // Frozen banks: original B2–C2 slugs ru-ch23…ru-ch36 only.
    // Expansion chapters (ru-ch37…ru-ch45) may use smaller seed banks.
    for (const ch of course.getChapters()) {
      const m = /^ru-ch(\d+)-/.exec(ch.slug);
      if (!m) continue;
      const n = Number(m[1]);
      if (n < 23 || n > 36) continue;
      expect(course.getExercises(ch.slug).length, ch.slug).toBe(40);
    }
  });
});
