import { describe, expect, it } from "vitest";
import {
  HALLOWEEN_EXERCISES,
  mixHalloweenPractice,
} from "@/config/halloween-exercises";
import { prepareExercisesForInterface } from "@/lib/exercise-localize";
import { sanitizeBankExercise } from "@/lib/exercise-quality";
import type { StaticExercise } from "@/types";

const sample: StaticExercise[] = Array.from({ length: 6 }, (_, i) => ({
  id: `practice:${i}`,
  type: "translation" as const,
  question: `Q${i}`,
  instruction: "Translate",
  answer: `A${i}`,
  explanation: "",
}));

describe("HALLOWEEN_EXERCISES", () => {
  it("keeps a small seasonal pool", () => {
    expect(HALLOWEEN_EXERCISES.length).toBeGreaterThanOrEqual(10);
    expect(HALLOWEEN_EXERCISES.length).toBeLessThanOrEqual(20);
    expect(new Set(HALLOWEEN_EXERCISES.map((e) => e.id)).size).toBe(
      HALLOWEEN_EXERCISES.length,
    );
  });

  it("passes existing bank quality gates", () => {
    const dropped = HALLOWEEN_EXERCISES.filter(
      (ex) => sanitizeBankExercise(ex) == null,
    ).map((ex) => ex.id);
    expect(dropped).toEqual([]);
  });

  it("stays usable for ru/en/es/de interface languages", () => {
    for (const lang of ["ru", "en", "es", "de"] as const) {
      const kept = prepareExercisesForInterface(
        HALLOWEEN_EXERCISES,
        lang,
        "spanish",
      );
      expect(kept.length, lang).toBe(HALLOWEEN_EXERCISES.length);
    }
  });

  it("localizes translation prompts away from Russian for en/es/de", () => {
    const translations = HALLOWEEN_EXERCISES.filter(
      (e) => e.type === "translation",
    );
    expect(translations.length).toBeGreaterThanOrEqual(5);
    for (const lang of ["en", "es", "de"] as const) {
      const kept = prepareExercisesForInterface(translations, lang, "spanish");
      for (const ex of kept) {
        expect(ex.question, `${ex.id} (${lang})`).not.toMatch(
          /[\u0400-\u04FF]/,
        );
        expect(ex.question.trim().length, `${ex.id} (${lang})`).toBeGreaterThan(
          0,
        );
      }
    }
    const ru = prepareExercisesForInterface(translations, "ru", "spanish");
    for (const ex of ru) {
      expect(ex.question, ex.id).toMatch(/[\u0400-\u04FF]/);
    }
  });
});

describe("mixHalloweenPractice", () => {
  it("slots halloween items and preserves length", () => {
    const mixed = mixHalloweenPractice(sample, "seed-a", 2);
    expect(mixed).toHaveLength(sample.length);
    const halloweenIds = mixed.filter((e) => e.id.includes(":halloween:"));
    expect(halloweenIds).toHaveLength(2);
  });

  it("is deterministic for the same seed", () => {
    const a = mixHalloweenPractice(sample, "seed-b", 2).map((e) => e.id);
    const b = mixHalloweenPractice(sample, "seed-b", 2).map((e) => e.id);
    expect(a).toEqual(b);
  });
});
