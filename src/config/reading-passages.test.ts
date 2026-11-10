import { describe, expect, it } from "vitest";
import { getCourse } from "@/config/courses";
import {
  getReadingPassagesForChapter,
  listReadingPassageChapters,
  READING_PASSAGES_BY_COURSE,
} from "@/config/reading-passages";

describe("reading passage exercises", () => {
  it("covers multiple chapters per course with passage + MC", () => {
    for (const courseId of ["spanish", "english", "russian"] as const) {
      const chapters = listReadingPassageChapters(courseId);
      // Russian A2–C2 banks are size-frozen, so RU ships fewer reading chapters.
      const min = courseId === "russian" ? 3 : 5;
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

  it("loads into banks without shifting early adaptive ids", async () => {
    const cases = [
      ["spanish", "chapter-1-despertar"],
      ["english", "eng-ch1-first-steps"],
      ["russian", "ru-ch1-alphabet-greetings"],
    ] as const;

    for (const [courseId, slug] of cases) {
      const course = await getCourse(courseId);
      const bank = course.getExercises(slug);
      const withPassage = bank.filter((e) => e.passage);
      expect(withPassage.length, `${courseId} loaded`).toBeGreaterThanOrEqual(2);

      const firstMc = bank.find((e) => e.type === "multiple_choice");
      expect(firstMc?.id).toMatch(
        new RegExp(`^${courseId}:${slug}:multiple_choice:01$`),
      );
    }
  });

  it("keeps Russian B2–C2 chapter sizes at 40", async () => {
    const course = await getCourse("russian");
    for (const ch of course.getChapters()) {
      if (ch.number < 23) continue;
      expect(course.getExercises(ch.slug).length, ch.slug).toBe(40);
    }
  });
});
