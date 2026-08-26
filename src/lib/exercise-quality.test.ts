import { describe, expect, it } from "vitest";
import {
  isUsableErrorCorrection,
  stripExerciseIndexMarks,
} from "@/lib/exercise-quality";

describe("isUsableErrorCorrection", () => {
  it("accepts a real grammar fix", () => {
    expect(
      isUsableErrorCorrection({
        question: "Dijo que viene mañana.",
        answer: "Dijo que vendría al día siguiente.",
      }),
    ).toBe(true);
  });

  it("rejects index-marker garbage from the pack generator", () => {
    expect(
      isUsableErrorCorrection({
        question: "Dijo: «Estoy aquí» → Dijo que Estaba allí [2] [2].",
        answer: "Dijo: «Estoy aquí» → Dijo que estaba allí [2].",
      }),
    ).toBe(false);
  });

  it("rejects Cyrillic prompt/answer pairs", () => {
    expect(
      isUsableErrorCorrection({
        question: "Он сказал, что уже поел [3] [3].",
        answer: "Он сказал, что уже поел [3].",
      }),
    ).toBe(false);
  });

  it("rejects capitalization-only diffs", () => {
    expect(
      isUsableErrorCorrection({
        question: "Yo Soy estudiante.",
        answer: "Yo soy estudiante.",
      }),
    ).toBe(false);
  });

  it("rejects sentence-building token dumps", () => {
    expect(
      isUsableErrorCorrection({
        question: "Dijo / que / vendría / al / día / siguiente",
        answer: "Dijo / que / vendría / al / día / siguiente.",
      }),
    ).toBe(false);
  });
});

describe("stripExerciseIndexMarks", () => {
  it("removes [n] markers", () => {
    expect(stripExerciseIndexMarks("Dijo que estaba allí [2].")).toBe(
      "Dijo que estaba allí.",
    );
  });
});
