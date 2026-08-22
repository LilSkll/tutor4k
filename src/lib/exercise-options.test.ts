import { describe, expect, it } from "vitest";
import {
  prepareExerciseForSession,
  shuffleSentenceBuildingOptions,
} from "@/lib/exercise-options";

describe("shuffleSentenceBuildingOptions", () => {
  it("returns jumbled tokens derived from the answer", () => {
    const exercise = {
      type: "sentence_building" as const,
      answer: "Lo que necesito es dormir",
      options: ["Lo que", "necesito", "es", "dormir"],
    };
    const shuffled = shuffleSentenceBuildingOptions(exercise)!;
    expect(shuffled.sort()).toEqual(
      ["Lo que", "dormir", "es", "necesito"].sort(),
    );
    expect(shuffled).not.toEqual(exercise.options);
  });
});

describe("prepareExerciseForSession", () => {
  it("leaves non sentence_building exercises unchanged", () => {
    const mc = {
      id: "1",
      type: "multiple_choice" as const,
      question: "Test?",
      options: ["a", "b"],
      answer: "a",
      explanation: "x",
    };
    expect(prepareExerciseForSession(mc)).toEqual(mc);
  });
});
