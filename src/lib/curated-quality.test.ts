import { describe, expect, it } from "vitest";
import { getPriorChapterSlugsForLevel } from "@/lib/chapter-display";
import {
  isUsableBankExercise,
  sanitizeBankExercise,
  sanitizeChapterExerciseMap,
  type BankExerciseLike,
} from "@/lib/exercise-quality";
import { SPANISH_CURATED_SUPPLEMENTS } from "@/config/exercise-seeds/spanish-curated-supplements";
import { ENGLISH_CURATED_SUPPLEMENTS } from "@/config/exercise-seeds/english-curated-supplements";

describe("getPriorChapterSlugsForLevel", () => {
  const chapters = [
    { slug: "a1-a", level: "A1" },
    { slug: "a1-b", level: "A1" },
    { slug: "a2-a", level: "A2" },
    { slug: "b1-a", level: "B1" },
  ];

  it("returns empty for A1", () => {
    expect(getPriorChapterSlugsForLevel(chapters, "A1")).toEqual([]);
  });

  it("credits all chapters before first B1", () => {
    expect(getPriorChapterSlugsForLevel(chapters, "B1")).toEqual([
      "a1-a",
      "a1-b",
      "a2-a",
    ]);
  });
});

describe("curated supplements quality", () => {
  it("every Spanish curated item passes the bank gate", () => {
    for (const items of Object.values(SPANISH_CURATED_SUPPLEMENTS)) {
      for (const raw of items as unknown as BankExerciseLike[]) {
        const cleaned = sanitizeBankExercise(raw);
        expect(cleaned).not.toBeNull();
        expect(isUsableBankExercise(cleaned!)).toBe(true);
      }
    }
  });

  it("every English curated item passes the bank gate", () => {
    for (const items of Object.values(ENGLISH_CURATED_SUPPLEMENTS)) {
      for (const raw of items as unknown as BankExerciseLike[]) {
        const cleaned = sanitizeBankExercise(raw);
        expect(cleaned).not.toBeNull();
        expect(isUsableBankExercise(cleaned!)).toBe(true);
      }
    }
  });

  it("sanitizeChapterExerciseMap drops unusable stubs", () => {
    const { cleaned, dropped } = sanitizeChapterExerciseMap({
      x: [
        {
          type: "sentence_building",
          question: "Hi / Sarah",
          options: ["Hi", "Sarah"],
          answer: "Hi Sarah",
        },
        {
          type: "translation",
          question: "I am a student.",
          answer: "Soy estudiante",
        },
      ],
    });
    expect(dropped).toBe(1);
    expect(cleaned.x).toHaveLength(1);
  });
});
