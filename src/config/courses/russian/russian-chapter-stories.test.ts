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

  it("features Altair as a recurring guide across all A1 locales", async () => {
    for (const slug of A1_SLUGS) {
      for (const lang of UI) {
        const story = await getChapterStory(slug, lang);
        expect(story, `${slug}@${lang}`).toMatch(/Альтаир|Altair/);
        if (lang === "ru") {
          expect(story).toMatch(/гиппогриф|Альтаир/);
        } else if (lang === "es") {
          expect(story).toMatch(/hipogrifo|Altair/i);
        } else if (lang === "de") {
          expect(story).toMatch(/Hippogreif|Altair/i);
        } else {
          expect(story).toMatch(/hippogriff|Altair/i);
        }
      }
    }
  });

  it("keeps the A1 journey locations coherent across locales", async () => {
    const expected: Record<(typeof A1_SLUGS)[number], RegExp> = {
      "ru-ch1-alphabet-greetings": /Моск|Mosc|Moskau/i,
      "ru-ch2-introduce-yourself": /МГУ|MSU|MGU/i,
      "ru-ch3-noun-gender": /Петербург|Petersburg|Petersburgo/i,
      "ru-ch4-present-tense": /Петербург|Petersburg|Petersburgo/i,
      "ru-ch5-accusative": /Казан|Kazan|Kasan|Kazán/i,
      "ru-ch6-university-day": /Казан|Kazan|Kasan|Kazán/i,
      "ru-ch7-prepositional": /Нижн|Nizhn|Nischn|Nóvgorod|Novgorod/i,
      "ru-ch8-numbers-time": /Нижн|Nizhn|Nischn|Nóvgorod|Novgorod/i,
    };
    for (const slug of A1_SLUGS) {
      for (const lang of UI) {
        const story = await getChapterStory(slug, lang);
        expect(story, `${slug}@${lang}`).toMatch(expected[slug]);
      }
    }
  });

  it("covers exactly the eight A1 chapter slugs from the course config", async () => {
    const course = await getCourse("russian");
    const a1 = course.getChapters().filter((c) => c.level === "A1");
    expect(a1.map((c) => c.slug)).toEqual([...A1_SLUGS]);
  });

  it("continues Altair stories through A2 and B1", async () => {
    const later = [
      "ru-ch9-past-tense",
      "ru-ch16-dorm-shops",
      "ru-ch17-cases-review",
      "ru-ch22-academic-social",
    ] as const;
    for (const slug of later) {
      for (const lang of UI) {
        const story = await getChapterStory(slug, lang);
        expect(story?.trim().length, `${slug}@${lang}`).toBeGreaterThan(80);
        expect(story, `${slug}@${lang}`).toMatch(/Альтаир|Altair/);
      }
    }
  });

  it("continues Altair stories through B2–C2 (ch23–36)", async () => {
    const course = await getCourse("russian");
    const advanced = course
      .getChapters()
      .filter((c) => ["B2", "C1", "C2"].includes(c.level))
      .map((c) => c.slug);
    expect(advanced.length).toBe(14);
    for (const slug of advanced) {
      for (const lang of UI) {
        const story = await getChapterStory(slug, lang);
        expect(story?.trim().length, `${slug}@${lang}`).toBeGreaterThan(80);
        expect(story, `${slug}@${lang}`).toMatch(/Альтаир|Altair/);
      }
      const ru = await getChapterStory(slug, "ru");
      for (const lang of ["en", "es", "de"] as const) {
        const story = await getChapterStory(slug, lang);
        expect(story, `${slug}@${lang}`).not.toBe(ru);
      }
    }
  });
});

