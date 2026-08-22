import { describe, expect, it } from "vitest";
import {
  isExerciseUsableForLanguage,
  localizeTranslationQuestion,
  prepareExercisesForInterface,
} from "@/lib/exercise-localize";
import type { StaticExercise } from "@/types";

const sample: StaticExercise = {
  id: "test:1",
  type: "translation",
  question: "Я студент.",
  answer: "Soy estudiante",
  instruction: "Переведите",
  explanation: "ser",
};

describe("translation localization", () => {
  it("keeps RU prompts for Russian UI", () => {
    expect(isExerciseUsableForLanguage(sample, "ru")).toBe(true);
    expect(localizeTranslationQuestion(sample, "ru")).toBe("Я студент.");
  });

  it("localizes prompts for EN/DE/ES on A1-A2 bank items", () => {
    for (const lang of ["en", "de", "es"] as const) {
      expect(isExerciseUsableForLanguage(sample, lang)).toBe(true);
      const q = localizeTranslationQuestion(sample, lang);
      expect(q).not.toMatch(/[\u0400-\u04FF]/);
      expect(q.length).toBeGreaterThan(3);
    }
  });

  it("prepareExercisesForInterface swaps translation question", () => {
    const [ex] = prepareExercisesForInterface([sample], "en");
    expect(ex.question).toBe("I am a student.");
  });
});

describe("orderEarlyLevelPractice", () => {
  it("interleaves phrase types first for A1", async () => {
    const { orderEarlyLevelPractice } = await import("@/lib/exercise-bank");
    const bank: StaticExercise[] = [
      { ...sample, id: "1", type: "multiple_choice", question: "A" },
      { ...sample, id: "2", type: "sentence_building", question: "B" },
      { ...sample, id: "3", type: "translation", question: "C" },
      { ...sample, id: "4", type: "fill_blank", question: "D" },
    ];
    const ordered = orderEarlyLevelPractice(bank, "A1");
    expect(ordered[0].type).toBe("sentence_building");
    expect(ordered[1].type).toBe("translation");
  });
});
