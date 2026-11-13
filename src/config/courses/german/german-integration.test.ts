import { describe, expect, it } from "vitest";
import { getAvailableCourseIds, getCourse } from "@/config/courses";
import { GERMAN_GRAMMAR_CURRICULUM_ORDER } from "@/config/german-curriculum-order";
import { getAvailablePromptIds } from "@/server/ai/prompts/registry";
import { germanErrorCategoryFromTopics } from "@/lib/german-error-categories";
import { prepareExercisesForInterface } from "@/lib/exercise-localize";
import { GERMAN_EXPAND_45_EXERCISES } from "./exercises-expand-45";
import { GERMAN_VOCAB_WORD_COUNT } from "./vocabulary";

describe("German course integration", () => {
  it("registers german in course and prompt registries", async () => {
    expect(getAvailableCourseIds()).toContain("german");
    expect(getAvailablePromptIds()).toContain("german");
    const course = await getCourse("german");
    expect(course.id).toBe("german");
    expect(course.languageCode).toBe("de");
    expect(course.promptId).toBe("german");
  });

  it("ships 45 chapters A1–C2 with linked grammar/vocab", async () => {
    const course = await getCourse("german");
    const chapters = course.getChapters();
    expect(chapters).toHaveLength(45);
    expect(chapters[0]!.level).toBe("A1");
    expect(chapters[44]!.level).toBe("C2");
    const byLevel = Object.fromEntries(
      (["A1", "A2", "B1", "B2", "C1", "C2"] as const).map((L) => [
        L,
        chapters.filter((c) => c.level === L).length,
      ]),
    );
    expect(byLevel).toEqual({ A1: 10, A2: 8, B1: 9, B2: 8, C1: 6, C2: 4 });
    chapters.forEach((ch, i) => {
      expect(ch.number).toBe(i + 1);
      if (i === 0) expect(ch.prereqChapter).toBeUndefined();
      else expect(ch.prereqChapter).toBe(chapters[i - 1]!.slug);
    });
    expect(chapters.find((c) => c.slug === "de-ch26-verb-prep")!.number).toBe(26);
    expect(chapters.find((c) => c.slug === "de-ch37-genitiv-usage")!.number).toBe(27);
    expect(chapters.find((c) => c.slug === "de-ch27-advanced-passive")!.number).toBe(28);
    expect(chapters.find((c) => c.slug === "de-ch36-text-pragmatics")!.number).toBe(39);
    expect(chapters.find((c) => c.slug === "de-ch45-pragmatic-mastery")!.number).toBe(45);

    const grammar = course.getGrammar();
    expect(grammar).toHaveLength(GERMAN_GRAMMAR_CURRICULUM_ORDER.length);
    for (const ch of chapters) {
      expect(grammar.some((g) => g.slug === ch.grammarTopic)).toBe(true);
      expect(ch.vocabTopic).toBeTruthy();
      expect(course.getVocab().some((v) => v.slug === ch.vocabTopic)).toBe(
        true,
      );
    }
  });

  it("has vocabulary coverage and exercise banks", async () => {
    const course = await getCourse("german");
    expect(GERMAN_VOCAB_WORD_COUNT).toBeGreaterThanOrEqual(500);
    expect(course.getVocab().length).toBe(45);
    const passive = course.getExercises("de-ch27-advanced-passive");
    expect(passive[0]!.id).toBe(
      "german:de-ch27-advanced-passive:multiple_choice:01",
    );

    for (const ch of course.getChapters()) {
      const bank = course.getExercises(ch.slug);
      expect(bank.length).toBeGreaterThanOrEqual(20);
      expect(bank.every((e) => e.id.startsWith("german:"))).toBe(true);
      const types = new Set(bank.map((e) => e.type));
      expect(types.has("multiple_choice")).toBe(true);
      expect(types.has("fill_blank")).toBe(true);
      expect(types.has("translation")).toBe(true);
    }
  });

  it("keeps the nine new chapters usable in every UI locale", async () => {
    const course = await getCourse("german");
    for (const [slug, items] of Object.entries(GERMAN_EXPAND_45_EXERCISES)) {
      expect(items.length, slug).toBeGreaterThanOrEqual(20);
      for (const item of items) {
        if (item.type === "multiple_choice") {
          expect(item.options, `${slug} ${item.answer}`).toContain(item.answer);
        }
        if (item.type !== "translation") {
          expect(item.question, slug).not.toMatch(/[\u0400-\u04FF]/);
        }
      }
      for (const lang of ["en", "es", "de"] as const) {
        const tr = prepareExercisesForInterface(
          course.getExercises(slug),
          lang,
          "german",
        ).filter((e) => e.type === "translation");
        expect(tr.length, `${slug}@${lang}`).toBeGreaterThanOrEqual(4);
        for (const e of tr) {
          expect(e.question, e.id).not.toMatch(/[\u0400-\u04FF]/);
        }
      }
    }
    for (const slug of Object.keys(GERMAN_EXPAND_45_EXERCISES)) {
      const ch = course.getChapter(slug);
      const topic = course.getVocab().find((v) => v.slug === ch?.vocabTopic);
      expect(topic?.words.length, slug).toBeGreaterThanOrEqual(14);
      expect(topic?.words.length, slug).toBeLessThanOrEqual(16);
    }
  });

  it("localizes TR prompts for all UI locales without silent RU leak", async () => {
    const course = await getCourse("german");
    const ch1 = course.getExercises("de-ch1-alphabet-greetings");
    for (const lang of ["ru", "en", "es", "de"] as const) {
      const prepared = prepareExercisesForInterface(ch1, lang, "german");
      const tr = prepared.filter((e) => e.type === "translation");
      expect(tr.length).toBeGreaterThan(0);
      for (const e of tr) {
        if (lang === "ru") {
          expect(/[\u0400-\u04FF]/.test(e.question)).toBe(true);
        } else {
          expect(/[\u0400-\u04FF]/.test(e.question)).toBe(false);
          expect(e.question.toLowerCase()).not.toBe(e.answer.toLowerCase());
        }
      }
    }
  });

  it("A1 chapter-1 MC prompts are L1-readable (not pure German immersion)", async () => {
    const course = await getCourse("german");
    const ch1 = course.getExercises("de-ch1-alphabet-greetings");
    const mc = ch1.filter((e) => e.type === "multiple_choice");
    expect(mc.length).toBeGreaterThanOrEqual(4);

    // Authored in Russian so absolute beginners can solve alphabet/greetings.
    for (const e of mc) {
      expect(
        /[\u0400-\u04FF]/.test(e.question),
        `expected RU L1 stem: ${e.question}`,
      ).toBe(true);
      expect(e.questionTranslations?.en?.trim().length).toBeGreaterThan(3);
      expect(e.questionTranslations?.es?.trim().length).toBeGreaterThan(3);
    }

    const eszett = mc.find((e) => e.answer === "ß");
    expect(eszett?.question).toMatch(/ss/i);
    expect(eszett?.question).not.toMatch(/Welches Zeichen/i);

    const ruPrep = prepareExercisesForInterface(ch1, "ru", "german");
    expect(ruPrep.filter((e) => e.type === "multiple_choice").length).toBe(
      mc.length,
    );
    expect(
      ruPrep.some(
        (e) => e.type === "multiple_choice" && /ss/i.test(e.question),
      ),
    ).toBe(true);

    for (const lang of ["en", "es", "de"] as const) {
      const prepared = prepareExercisesForInterface(ch1, lang, "german");
      const prepMc = prepared.filter((e) => e.type === "multiple_choice");
      expect(prepMc.length).toBe(mc.length);
      for (const e of prepMc) {
        expect(/[\u0400-\u04FF]/.test(e.question)).toBe(false);
      }
    }
  });

  it("keeps A1 grammar explanations beginner-readable (no cryptic person codes)", async () => {
    const course = await getCourse("german");
    const a1 = course.getGrammar().filter((g) => g.level === "A1");
    expect(a1.length).toBeGreaterThanOrEqual(8);
    for (const topic of a1) {
      expect(topic.content, topic.slug).not.toMatch(/\|\s*1\s*\|\s*\*\*ich\*\*/);
      expect(topic.content, topic.slug).not.toMatch(/2 неформ/);
      expect(topic.content, topic.slug).not.toMatch(/\|\s*3\s*\|\s*\*\*er/);
      expect(topic.content, topic.slug).not.toMatch(/\|\s*вежл\.\s*\|/);
    }
    const sein = course.getGrammarTopic("de-a1-sein-haben-pronouns");
    expect(sein?.content).toMatch(/я\s*\|\s*\*\*ich\*\*/i);
    expect(sein?.content).toMatch(/ Три разных «sie \/ Sie»|три разных «sie/i);
  });

  it("classifies German error categories from grammar slugs", () => {
    expect(germanErrorCategoryFromTopics("de-a1-akkusativ", null)).toBe(
      "case",
    );
    expect(
      germanErrorCategoryFromTopics("de-a1-articles-gender-nominative", null),
    ).toBe("article_gender");
    expect(germanErrorCategoryFromTopics("de-a2-perfekt", null)).toMatch(
      /verb_conjugation|tense_auxiliary/,
    );
    expect(germanErrorCategoryFromTopics("de-a1-questions-v2", null)).toBe(
      "word_order",
    );
    expect(
      germanErrorCategoryFromTopics("de-b1-adjective-endings", null),
    ).toBe("adjective_declension");
  });

  it("builds a German tutor prompt", async () => {
    const course = await getCourse("german");
    const prompt = course.buildPrompt({
      level: "A1",
      interfaceLanguage: "ru",
      userName: "Test",
    });
    expect(prompt).toMatch(/German|DaF|Deutsch/i);
    expect(prompt).toMatch(/Akkusativ|V2|Perfekt|Konjunktiv/i);
    expect(prompt).not.toMatch(/Spanish with Pavel teaches Spanish only/i);
  });
});
