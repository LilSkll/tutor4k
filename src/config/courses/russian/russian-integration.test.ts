import { describe, expect, it } from "vitest";
import { getCourse, getAvailableCourseIds } from "@/config/courses";
import { isKnownCourseId, parseCourseId, resolveCourseId } from "@/lib/course-id";
import { getExercisePool } from "@/lib/exercise-pool";
import {
  getGrammarCategory,
  getGrammarTopicTitle,
} from "@/lib/grammar-display";
import { toGrammarTopicMeta } from "@/lib/grammar-topic-meta";
import { sortGrammarForCourse } from "@/lib/grammar-curriculum-sort";
import { answersMatch, normalizeAnswer } from "@/lib/normalize-answer";
import { russianErrorCategoryFromTopics } from "@/lib/russian-error-categories";
import {
  prepareExercisesForInterface,
  isExerciseUsableForLanguage,
} from "@/lib/exercise-localize";
import { getPromptBuilder } from "@/server/ai/prompts/registry";
import { getWordGloss } from "@/lib/vocab-display";
import { buildRussianPrompt } from "@/server/ai/prompts/russian";
import type { InterfaceLanguage } from "@/types";

const UI: InterfaceLanguage[] = ["ru", "en", "es", "de"];

describe("Russian course integration", () => {
  it("registers russian as a known peer course with beta flag", async () => {
    expect(getAvailableCourseIds()).toContain("russian");
    expect(isKnownCourseId("russian")).toBe(true);
    expect(parseCourseId("russian")).toBe("russian");
    expect(resolveCourseId("nope", "russian")).toBe("russian");

    const ru = await getCourse("russian");
    expect(ru.id).toBe("russian");
    expect(ru.beta).toBe(true);
    expect(ru.getChapters().length).toBe(36);
    expect(ru.getGrammar().length).toBe(34);
  });

  it("localizes grammar titles/categories for all UI locales", async () => {
    const ru = await getCourse("russian");
    const topic = ru.getGrammarTopic("ru-a1-accusative");
    expect(topic).toBeTruthy();
    const meta = toGrammarTopicMeta(topic!);

    expect(getGrammarTopicTitle(meta, "ru")).toMatch(/вин/i);
    expect(getGrammarTopicTitle(meta, "en")).toMatch(/accusative/i);
    expect(getGrammarTopicTitle(meta, "es")).toMatch(/acusativ/i);
    expect(getGrammarTopicTitle(meta, "de")).toMatch(/akkusativ/i);
    expect(getGrammarCategory(meta, "en")).toMatch(/case/i);

    const sorted = sortGrammarForCourse("russian", ru.getGrammar());
    expect(sorted[0]?.slug).toBe("ru-a1-alphabet-phonetics");
    expect(sorted.at(-1)?.slug).toBe("ru-c2-pragmatics");
  });

  it("builds a dedicated RKI tutor prompt (not Spanish)", async () => {
    const builder = await getPromptBuilder("russian");
    const prompt = builder({
      level: "A1",
      interfaceLanguage: "en",
      userName: "Alex",
    });
    expect(prompt).toMatch(/Russian as a Foreign Language|RKI|РКИ/i);
    expect(prompt).toMatch(/ТРКИ|TORFL|cases|aspect|motion/i);
    expect(prompt).not.toMatch(/DELE|subjuntivo|vosotros/);
    expect(prompt).toMatch(/English/); // interface explanations

    const direct = buildRussianPrompt({ level: "B1", interfaceLanguage: "de" });
    expect(direct).toMatch(/B1/);
    expect(direct).toMatch(/German/);
  });

  it("grades Cyrillic without collapsing й or ё meaning distinctions", () => {
    expect(normalizeAnswer("всё")).not.toBe(normalizeAnswer("все"));
    expect(normalizeAnswer("мой")).not.toBe(normalizeAnswer("мои"));
    expect(answersMatch("Здравствуйте!", ["здравствуйте"])).toBe(true);
    expect(answersMatch("ждет", ["ждёт", "ждет"])).toBe(true);
    expect(answersMatch("Привет", ["пока"])).toBe(false);
  });

  it("maps RKI error categories from grammar slugs", () => {
    expect(russianErrorCategoryFromTopics("ru-a1-accusative", null)).toBe(
      "case",
    );
    expect(russianErrorCategoryFromTopics("ru-a2-aspect-intro", null)).toBe(
      "aspect",
    );
    expect(
      russianErrorCategoryFromTopics("ru-b1-complex-sentences", null),
    ).toBe("sentence_structure");
    expect(russianErrorCategoryFromTopics("ru-a1-noun-gender", null)).toBe(
      "gender",
    );
    expect(russianErrorCategoryFromTopics("ru-b2-participles", null)).toBe(
      "aspect",
    );
    expect(russianErrorCategoryFromTopics("ru-b2-passive", null)).toBe(
      "verb_government",
    );
    expect(russianErrorCategoryFromTopics("ru-c1-idioms", null)).toBe(
      "lexical",
    );
    expect(russianErrorCategoryFromTopics("ru-c2-registers", null)).toBe(
      "sentence_structure",
    );
  });

  it("adaptive pool tags every item with Russian grammar topics", async () => {
    const pool = await getExercisePool("russian");
    // A1–C2 ≈ 1800 (680+320+240+240+160+160).
    expect(pool.length).toBeGreaterThanOrEqual(1700);
    expect(pool.length).toBeLessThan(2200);
    for (const ex of pool) {
      expect(ex.id, ex.question).toBeTruthy();
      expect(ex.grammarTopic?.startsWith("ru-"), ex.id).toBe(true);
      expect(ex.answer?.trim().length, ex.id).toBeGreaterThan(0);
    }
  });

  it("keeps Russian stems usable across UI languages without Spanish leakage", async () => {
    const ru = await getCourse("russian");
    const sample = ru
      .getChapters()
      .slice(0, 3)
      .flatMap((ch) => ru.getExercises(ch.slug))
      .slice(0, 40);

    for (const lang of UI) {
      const prepared = prepareExercisesForInterface(sample, lang, "russian");
      expect(prepared.length).toBeGreaterThan(0);
      for (const ex of prepared) {
        expect(
          isExerciseUsableForLanguage(ex, lang, "russian"),
          `${ex.id}@${lang}`,
        ).toBe(true);
        if (ex.type !== "translation") {
          // Target remains Russian (Cyrillic) for non-TR items.
          expect(ex.question + (ex.answer ?? ""), ex.id).toMatch(
            /[\u0400-\u04FF]/,
          );
        }
      }
    }
  });

  it("resolves Russian vocab glosses without falling back to Spanish lexicon", async () => {
    const gloss = getWordGloss(
      {
        word: "книга",
        translation: "book",
        translations: { en: "book", es: "libro", de: "Buch" },
        example: "Это книга.",
      },
      "es",
      "russian",
    );
    expect(gloss).toBe("libro");
    expect(gloss.toLowerCase()).not.toMatch(/mesa|libro de español/i);
  });
});
