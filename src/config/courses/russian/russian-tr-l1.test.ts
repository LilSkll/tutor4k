import { describe, expect, it } from "vitest";
import { getCourse } from "@/config/courses";
import { prepareExercisesForInterface } from "@/lib/exercise-localize";
import { getLocalizedGrammarArticle } from "@/server/grammar/localize-content";
import { buildRussianPrompt } from "@/server/ai/prompts/russian";
import { RUSSIAN_TR_L1 } from "@/config/courses/russian/translation-l1";
import { lookupTranslationPrompt } from "@/config/exercise-translation-prompts";
import type { InterfaceLanguage } from "@/types";

const UI_NON_RU: Exclude<InterfaceLanguage, "ru">[] = ["en", "es", "de"];

describe("Russian TR L1 + UI language switching", () => {
  it("covers every English-authored TR stem with es/de (no Cyrillic L1)", () => {
    const keys = Object.keys(RUSSIAN_TR_L1);
    expect(keys.length).toBeGreaterThan(200);
    for (const key of keys) {
      const row = RUSSIAN_TR_L1[key]!;
      expect(row.es.trim().length, key).toBeGreaterThan(0);
      expect(row.de.trim().length, key).toBeGreaterThan(0);
      expect(row.es, key).not.toMatch(/[\u0400-\u04FF]/);
      expect(row.de, key).not.toMatch(/[\u0400-\u04FF]/);
    }
    expect(RUSSIAN_TR_L1["Bye (to a friend)"]?.es).toMatch(/amigo|Adiós|Chao|luego/i);
    expect(lookupTranslationPrompt("Bye (to a friend)", "es")).toBe(
      RUSSIAN_TR_L1["Bye (to a friend)"]!.es,
    );
    expect(lookupTranslationPrompt("Bye (to a friend)", "de")).toBe(
      RUSSIAN_TR_L1["Bye (to a friend)"]!.de,
    );
  });

  it("switches every Russian TR prompt with the UI language (no silent EN on es/de)", async () => {
    const course = await getCourse("russian");
    let totalTr = 0;
    const stuck: string[] = [];

    for (const ch of course.getChapters()) {
      const bank = course.getExercises(ch.slug).filter((e) => e.type === "translation");
      totalTr += bank.length;
      for (const lang of ["es", "de"] as const) {
        const prepared = prepareExercisesForInterface(bank, lang, "russian");
        expect(prepared.length, `${ch.slug}@${lang}`).toBe(bank.length);
        for (const ex of prepared) {
          const mapped = lookupTranslationPrompt(ex.question, lang) ??
            // After localization the question IS already es/de — check original via answer path
            null;
          // Localized question must not be the English bank stem when UI ≠ en.
          // Bank stems are Latin; if still English, detect via known EN leftover phrases.
          if (
            /^(Bye|Hello|Goodbye|Hi|Thank you|Please|How are you|I am |My name|We were|She is |He is )/i.test(
              ex.question,
            ) ||
            /\(to a friend\)|\(formal\)|\(male\)|\(female\)|\(on foot\)/i.test(
              ex.question,
            )
          ) {
            stuck.push(`${ch.slug}@${lang}: ${ex.question}`);
          }
          void mapped;
          expect(ex.instruction, ex.id).not.toMatch(/Переведите/);
        }
      }
    }

    expect(totalTr).toBeGreaterThanOrEqual(240);
    expect(stuck, stuck.slice(0, 12).join(" | ")).toEqual([]);
  });

  it("localizes Bye (to a friend) for Spanish UI with Spanish instruction", async () => {
    const course = await getCourse("russian");
    const bank = course.getExercises("ru-ch1-alphabet-greetings");
    const [ex] = prepareExercisesForInterface(
      bank.filter((e) => e.question === "Bye (to a friend)" || e.answer === "Пока"),
      "es",
      "russian",
    ).filter((e) => e.type === "translation" && e.answer.replace(/[!]/g, "") === "Пока");
    expect(ex).toBeTruthy();
    expect(ex!.question).not.toBe("Bye (to a friend)");
    expect(ex!.question).toMatch(/amigo|Adiós|Chao|luego/i);
    expect(ex!.instruction).toMatch(/Traduce/i);
  });

  it("serves localized grammar articles for every Russian topic × en/es/de", async () => {
    const course = await getCourse("russian");
    const topics = course.getGrammar();
    expect(topics.length).toBeGreaterThanOrEqual(20);
    for (const topic of topics) {
      for (const lang of UI_NON_RU) {
        const article = await getLocalizedGrammarArticle({
          slug: topic.slug,
          courseId: "russian",
          interfaceLanguage: lang,
        });
        expect(article.source, `${topic.slug}@${lang}`).toBe("static");
        expect(article.content.length).toBeGreaterThan(200);
        // Meta headers must not stay in Russian when UI is not RU.
        expect(article.content).not.toMatch(/(В этой теме|Зачем это|Типичные ошибки)/);
      }
    }
  });

  it("binds the AI tutor to each interface language", () => {
    for (const lang of UI_NON_RU) {
      const prompt = buildRussianPrompt({
        level: "A1",
        interfaceLanguage: lang,
        userName: "Alex",
      });
      expect(prompt).toMatch(/LANGUAGE OF YOUR RESPONSE/i);
      if (lang === "en") expect(prompt).toMatch(/English/);
      if (lang === "es") expect(prompt).toMatch(/Spanish|Español/i);
      if (lang === "de") expect(prompt).toMatch(/German|Deutsch/i);
      expect(prompt).toMatch(/Russian/);
      // Must forbid other interface languages in explanations.
      expect(prompt).toMatch(/Forbidden in this reply/i);
    }
  });
});
