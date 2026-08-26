import { describe, expect, it } from "vitest";
import {
  isUsableBankExercise,
  isUsableErrorCorrection,
  isUsableFillBlank,
  isUsableMultipleChoice,
  isUsableTranslation,
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

  it("rejects Completa stubs and elx fakes", () => {
    expect(
      isUsableErrorCorrection({
        question: "Completa (Misterios del Barrio Gótico) #10: elx.",
        answer: "Completa (Misterios del Barrio Gótico) #10: El.",
      }),
    ).toBe(false);
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
});

describe("isUsableFillBlank", () => {
  it("accepts a real blank sentence", () => {
    expect(
      isUsableFillBlank({
        question: "El libro ___ escrito por Ana.",
        answer: "fue",
      }),
    ).toBe(true);
  });

  it("rejects Completa (Topic) #N stubs", () => {
    expect(
      isUsableFillBlank({
        question: "Completa (Misterios del Barrio Gótico) #10: ___",
        answer: "El",
      }),
    ).toBe(false);
  });

  it("rejects instructions that name the answer", () => {
    expect(
      isUsableFillBlank({
        question: "María ___ levanta a las siete.",
        answer: "se",
        instruction: "Возвратное se",
      }),
    ).toBe(false);
  });
});

describe("isUsableTranslation", () => {
  it("rejects grammar-label prompts", () => {
    expect(
      isUsableTranslation({
        question: "Возвратное se",
        answer: "María se levanta a las siete.",
      }),
    ).toBe(false);
    expect(
      isUsableTranslation({
        question: "Se reflexivo",
        answer: "Se levanta a las siete",
      }),
    ).toBe(false);
  });

  it("accepts a real L1 sentence", () => {
    expect(
      isUsableTranslation({
        question: "Она встаёт в семь часов.",
        answer: "Se levanta a las siete",
      }),
    ).toBe(true);
  });
});

describe("isUsableMultipleChoice", () => {
  it("rejects Cyrillic stems and [n] markers", () => {
    expect(
      isUsableMultipleChoice({
        question: "Я из России [4].",
        answer: "Soy",
        options: ["Soy", "Estoy", "Es", "Somos"],
      }),
    ).toBe(false);
  });

  it("accepts a blank stem with options", () => {
    expect(
      isUsableMultipleChoice({
        question: "Yo ___ estudiante.",
        answer: "soy",
        options: ["soy", "estoy", "es", "somos"],
      }),
    ).toBe(true);
  });
});

describe("isUsableBankExercise", () => {
  it("routes by type", () => {
    expect(
      isUsableBankExercise({
        type: "fill_blank",
        question: "Completa (X) #1: ___",
        answer: "El",
      }),
    ).toBe(false);
  });
});

describe("stripExerciseIndexMarks", () => {
  it("removes [n] and #n markers", () => {
    expect(stripExerciseIndexMarks("Dijo que estaba allí [2].")).toBe(
      "Dijo que estaba allí.",
    );
    expect(stripExerciseIndexMarks("Yo hablo (#3).")).toBe("Yo hablo.");
  });
});
