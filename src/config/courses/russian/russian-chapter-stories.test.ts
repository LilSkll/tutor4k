import { describe, expect, it } from "vitest";
import { getChapterStory } from "@/config/chapter-stories";
import { getCourse } from "@/config/courses";
import type { InterfaceLanguage } from "@/types";

const UI: InterfaceLanguage[] = ["ru", "en", "es", "de"];
const A1_SLUGS = [
  "ru-ch1-alphabet-greetings",
  "ru-ch2-introduce-yourself",
  "ru-ch3-noun-gender",
  "ru-ch4-present-tense",
  "ru-ch5-accusative",
  "ru-ch6-university-day",
  "ru-ch7-prepositional",
  "ru-ch8-numbers-time",
] as const;

describe("RKI A1 chapter backstories", () => {
  it("resolves a non-empty story for every A1 chapter × locale", async () => {
    const gaps: string[] = [];
    for (const slug of A1_SLUGS) {
      for (const lang of UI) {
        const story = await getChapterStory(slug, lang);
        if (!story?.trim()) gaps.push(`${slug}@${lang}`);
        else expect(story.trim().length, `${slug}@${lang}`).toBeGreaterThan(80);
      }
    }
    expect(gaps, gaps.join(", ")).toEqual([]);
  });

  it("does not silently fall back to Russian for en/es/de", async () => {
    for (const slug of A1_SLUGS) {
      const ru = await getChapterStory(slug, "ru");
      expect(ru).toBeTruthy();
      for (const lang of ["en", "es", "de"] as const) {
        const story = await getChapterStory(slug, lang);
        expect(story, `${slug}@${lang}`).not.toBe(ru);
        // Meta-narrative is in the UI language; Russian phrases may still appear.
        expect(story!, `${slug}@${lang}`).not.toMatch(
          /^Первый день в Москве|^Подготовительный факультет|^Утро в Санкт-Петербурге/,
        );
      }
    }
  });

  it("keeps Russian learning phrases inside non-RU stories where appropriate", async () => {
    const ch1En = await getChapterStory("ru-ch1-alphabet-greetings", "en");
    expect(ch1En).toMatch(/Здравствуйте|Привет/);
    const ch2Es = await getChapterStory("ru-ch2-introduce-yourself", "es");
    expect(ch2Es).toMatch(/Меня зовут|Это/);
    const ch7De = await getChapterStory("ru-ch7-prepositional", "de");
    expect(ch7De).toMatch(/в общежитии|на столе|об экзамене/);
  });

  it("covers exactly the eight A1 chapter slugs from the course config", async () => {
    const course = await getCourse("russian");
    const a1 = course.getChapters().filter((c) => c.level === "A1");
    expect(a1.map((c) => c.slug)).toEqual([...A1_SLUGS]);
  });

  it("does not invent A2 backstories in this change", async () => {
    const story = await getChapterStory("ru-ch9-past-tense", "en");
    expect(story).toBeNull();
  });
});
