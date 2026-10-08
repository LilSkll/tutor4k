import { describe, expect, it } from "vitest";
import {
  HALLOWEEN_EXERCISES,
  getHalloweenExercisesForCourse,
  mixHalloweenPractice,
} from "@/config/halloween-exercises";
import { HALLOWEEN_EXERCISES_ENGLISH } from "@/config/halloween-exercises-english";
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

describe("HALLOWEEN_EXERCISES_ENGLISH", () => {
  it("keeps a small seasonal pool", () => {
    expect(HALLOWEEN_EXERCISES_ENGLISH.length).toBeGreaterThanOrEqual(10);
    expect(HALLOWEEN_EXERCISES_ENGLISH.length).toBeLessThanOrEqual(20);
  });

  it("passes quality gates and stays usable per language", () => {
    expect(
      HALLOWEEN_EXERCISES_ENGLISH.filter(
        (ex) => sanitizeBankExercise(ex) == null,
      ),
    ).toEqual([]);
    for (const lang of ["ru", "en", "es", "de"] as const) {
      const kept = prepareExercisesForInterface(
        HALLOWEEN_EXERCISES_ENGLISH,
        lang,
        "english",
      );
      expect(kept.length, lang).toBe(HALLOWEEN_EXERCISES_ENGLISH.length);
    }
  });

  it("localizes TR prompts for es/de (EN UI keeps RU source)", () => {
    const translations = HALLOWEEN_EXERCISES_ENGLISH.filter(
      (e) => e.type === "translation",
    );
    for (const lang of ["es", "de"] as const) {
      const kept = prepareExercisesForInterface(translations, lang, "english");
      for (const ex of kept) {
        expect(ex.question, `${ex.id} (${lang})`).not.toMatch(
          /[\u0400-\u04FF]/,
        );
      }
    }
    const en = prepareExercisesForInterface(translations, "en", "english");
    for (const ex of en) {
      // English course: EN prompt would spoil the answer → keep Russian source.
      expect(ex.question, ex.id).toMatch(/[\u0400-\u04FF]/);
    }
  });
});

describe("getHalloweenExercisesForCourse", () => {
  it("returns the matching pool", () => {
    expect(getHalloweenExercisesForCourse("spanish")).toBe(HALLOWEEN_EXERCISES);
    expect(getHalloweenExercisesForCourse("english")).toBe(
      HALLOWEEN_EXERCISES_ENGLISH,
    );
    expect(getHalloweenExercisesForCourse("russian")).toEqual([]);
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
