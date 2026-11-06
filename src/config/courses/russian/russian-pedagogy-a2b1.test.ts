import { describe, expect, it } from "vitest";
import { getCourse } from "@/config/courses";
import { getChapterStory } from "@/config/chapter-stories";
import { RUSSIAN_CHAPTER_LOCALE } from "@/config/courses/russian/chapter-locale";
import type { InterfaceLanguage } from "@/types";

const UI: InterfaceLanguage[] = ["ru", "en", "es", "de"];

const A2_B1_SLUGS = [
  "ru-ch9-past-tense",
  "ru-ch10-future",
  "ru-ch11-genitive",
  "ru-ch12-dative",
  "ru-ch13-instrumental",
  "ru-ch14-aspect-intro",
  "ru-ch15-motion-basic",
  "ru-ch16-dorm-shops",
  "ru-ch17-cases-review",
  "ru-ch18-aspect-system",
  "ru-ch19-motion-prefixes",
  "ru-ch20-complex-sentences",
  "ru-ch21-narration-cohesion",
  "ru-ch22-academic-social",
] as const;

describe("RKI A2–B1 pedagogical acceptance regressions", () => {
  it("inspects all 560 A2–B1 exercises with unique IDs and five types", async () => {
    const course = await getCourse("russian");
    let total = 0;
    const typeCounts: Record<string, number> = {};
    const ids = new Set<string>();

    for (const slug of A2_B1_SLUGS) {
      const bank = course.getExercises(slug);
      expect(bank.length, slug).toBe(40);
      total += bank.length;
      for (const ex of bank) {
        expect(ex.id).toBeTruthy();
        expect(ids.has(ex.id!), `duplicate id ${ex.id}`).toBe(false);
        ids.add(ex.id!);
        typeCounts[ex.type] = (typeCounts[ex.type] ?? 0) + 1;
        expect(ex.grammarTopic?.startsWith("ru-")).toBe(true);
      }
    }

    expect(total).toBe(560);
    expect(Object.keys(typeCounts).sort()).toEqual([
      "error_correction",
      "fill_blank",
      "multiple_choice",
      "sentence_building",
      "translation",
    ]);
    for (const t of Object.keys(typeCounts)) {
      expect(typeCounts[t], t).toBe(112);
    }
  });

  it("does not force unspecified «я» into masculine-only agreement keys", async () => {
    const course = await getCourse("russian");
    const ch13 = course.getExercises("ru-ch13-instrumental");
    const student = ch13.find((e) => e.question.includes("стать студент"));
    expect(student?.question).toMatch(/Омар/);
    expect(student?.answer).toMatch(/студентом/);

    const ch22 = course.getExercises("ru-ch22-academic-social");
    const agreeMc = ch22.find(
      (e) => e.type === "multiple_choice" && e.question.includes("с замечанием"),
    );
    expect(agreeMc?.question).toMatch(/Омар/);
    expect(agreeMc?.answer).toBe("согласен");

    const agreeSb = ch22.filter(
      (e) => e.type === "sentence_building" && e.answer.includes("согласен"),
    );
    expect(agreeSb.length).toBeGreaterThanOrEqual(2);
    for (const ex of agreeSb) {
      expect(ex.answer).toMatch(/Омар/);
      expect(ex.answer).not.toMatch(/^Я /);
    }
  });

  it("does not mark natural ждать/случалось variants as absolute errors", async () => {
    const course = await getCourse("russian");
    const ch17 = course.getExercises("ru-ch17-cases-review");
    const wait = ch17.find((e) => e.question.includes("дождаться"));
    expect(wait).toBeTruthy();
    expect(wait!.answer).toMatch(/решения/);
    expect(wait!.explanation).not.toMatch(/винительн.*запрещ|нельзя.*винительн/i);

    const committee = ch17.find((e) =>
      e.question.includes("committee decision"),
    );
    expect(committee?.acceptableAnswers?.some((a) => /решение/.test(a))).toBe(
      true,
    );

    const ch18 = course.getExercises("ru-ch18-aspect-system");
    const habit = ch18.find((e) => e.question.includes("каждый день не случилось"));
    expect(habit?.answer).toMatch(/случалось/);
    const yesterday = ch18.find((e) =>
      e.question.includes("Nothing special happened at the practice yesterday"),
    );
    expect(
      yesterday?.acceptableAnswers?.some((a) => /случалось/.test(a)),
    ).toBe(true);
  });

  it("does not spoil agreement blanks in Russian instructions", async () => {
    const course = await getCourse("russian");
    const ch22 = course.getExercises("ru-ch22-academic-social");
    const blank = ch22.find(
      (e) =>
        e.type === "fill_blank" &&
        e.question === "Я ___ с вами: срок действительно короткий.",
    );
    expect(blank?.instruction).not.toMatch(/согласен или согласна/);
    expect(blank?.instruction).toMatch(/мужской или женский/);
  });

  it("aligns chapter card locations with stories for Yaroslavl and Pskov", async () => {
    const locale = RUSSIAN_CHAPTER_LOCALE;
    expect(locale["ru-ch19-motion-prefixes"]?.en?.location).toMatch(/Yaroslavl/i);
    expect(locale["ru-ch20-complex-sentences"]?.en?.location).toMatch(/Yaroslavl/i);
    expect(locale["ru-ch21-narration-cohesion"]?.en?.location).toMatch(/Pskov/i);
    expect(locale["ru-ch22-academic-social"]?.en?.location).toMatch(/Pskov/i);
    expect(locale["ru-ch19-motion-prefixes"]?.en?.location).not.toMatch(/Irkutsk/i);
    expect(locale["ru-ch21-narration-cohesion"]?.en?.location).not.toMatch(/Moscow/i);

    for (const lang of UI) {
      const yar = await getChapterStory("ru-ch19-motion-prefixes", lang);
      expect(yar).toMatch(/Ярославл|Yaroslavl|Jaroslawl/i);
      const psk = await getChapterStory("ru-ch21-narration-cohesion", lang);
      expect(psk).toMatch(/Псков|Pskov|Pskow/i);
    }
  });

  it("keeps mid-arc travel bridges in A2→B1 stories", async () => {
    const bridges: Array<[string, RegExp]> = [
      ["ru-ch13-instrumental", /Новосибирск|Novosibirsk|Nowosibirsk/i],
      ["ru-ch15-motion-basic", /Дальн|Far East|Extremo Oriente|Fernen Osten/i],
      ["ru-ch17-cases-review", /Сочи|Sochi|Sotschi/i],
      ["ru-ch19-motion-prefixes", /Калининград|Kaliningrad/i],
    ];
    for (const [slug, re] of bridges) {
      for (const lang of UI) {
        const story = await getChapterStory(slug, lang);
        expect(story, `${slug}@${lang}`).toMatch(re);
      }
    }
  });
});
