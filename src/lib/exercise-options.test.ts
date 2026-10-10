import { describe, expect, it } from "vitest";
import {
  prepareExerciseForSession,
  sentenceBuildingTilesSpoilAnswer,
  shuffleSentenceBuildingOptions,
} from "@/lib/exercise-options";

describe("shuffleSentenceBuildingOptions", () => {
  it("returns jumbled tokens that do not spell the answer left-to-right", () => {
    const exercise = {
      type: "sentence_building" as const,
      answer: "Busco una silla libre",
      options: ["Busco", "una", "silla", "libre"],
    };
    for (let i = 0; i < 20; i++) {
      const shuffled = shuffleSentenceBuildingOptions(exercise)!;
      expect(shuffled.sort()).toEqual([...exercise.options].sort());
      expect(sentenceBuildingTilesSpoilAnswer(shuffled, exercise.answer)).toBe(
        false,
      );
      expect(shuffled).not.toEqual(exercise.options);
    }
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
      instruction: "Choose",
      explanation: "x",
    };
    expect(prepareExerciseForSession(mc)).toEqual(mc);
  });

  it("shuffles sentence_building options away from the answer", () => {
    const sb = {
      id: "1",
      type: "sentence_building" as const,
      question: "Busco / una / silla / libre",
      options: ["Busco", "una", "silla", "libre"],
      answer: "Busco una silla libre",
      instruction: "Build",
      explanation: "x",
    };
    const prepared = prepareExerciseForSession(sb);
    expect(prepared.options!.sort()).toEqual([...sb.options].sort());
    expect(
      sentenceBuildingTilesSpoilAnswer(prepared.options!, sb.answer),
    ).toBe(false);
  });
});
