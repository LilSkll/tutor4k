import { describe, expect, it } from "vitest";
import {
  isGrammarCategoryInstruction,
  isUsableBankExercise,
  isUsableErrorCorrection,
  isUsableFillBlank,
  isUsableMultipleChoice,
  isUsableSentenceBuilding,
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

describe("isGrammarCategoryInstruction", () => {
  it("flags spoiler tags and keeps real prompts", () => {
    expect(isGrammarCategoryInstruction("Взаимное se")).toBe(true);
    expect(isGrammarCategoryInstruction("Se reflexivo")).toBe(true);
    expect(isGrammarCategoryInstruction("Perfecto — ya")).toBe(true);
    expect(isGrammarCategoryInstruction("Tense backshift")).toBe(true);
    expect(isGrammarCategoryInstruction("Zero article")).toBe(true);
    expect(isGrammarCategoryInstruction("Past simple — go")).toBe(true);
    expect(isGrammarCategoryInstruction("Choose the correct article")).toBe(
      false,
    );
    expect(isGrammarCategoryInstruction("Заполните пропуск")).toBe(false);
    expect(isGrammarCategoryInstruction("Вставьте пропущенное слово")).toBe(
      false,
    );
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
    expect(
      isUsableTranslation({
        question: "Относительное местоимение",
        answer: "que",
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
    expect(
      isUsableTranslation({
        question: "Это дом, где я вырос.",
        answer: "Es la casa donde crecí",
      }),
    ).toBe(true);
  });

  it("rejects pack leaks: SB instructions and grammar formulas as TR prompts", () => {
    expect(
      isUsableTranslation({
        question: "Соберите фразу с muy",
        answer: "Es una persona muy amable",
      }),
    ).toBe(false);
    expect(
      isUsableTranslation({
        question: "Demasiado + adj.",
        answer: "Corre demasiado rápido",
      }),
    ).toBe(false);
    expect(
      isUsableTranslation({
        question: "Quizás + subj.",
        answer: "Quizás llueva mañana",
      }),
    ).toBe(false);
    expect(
      isUsableTranslation({
        question: "Build the fronted Such sentence",
        answer: "Such was his anger that he left",
      }),
    ).toBe(false);
  });
});

describe("isMetaOrFormulaPrompt", () => {
  it("flags Cyrillic SB instructions and +adj formulas", async () => {
    const { isMetaOrFormulaPrompt, isGrammarCategoryInstruction } = await import(
      "@/lib/exercise-quality"
    );
    expect(isMetaOrFormulaPrompt("Соберите фразу с muy")).toBe(true);
    expect(isMetaOrFormulaPrompt("Demasiado + adj.")).toBe(true);
    expect(isGrammarCategoryInstruction("Demasiado + adj.")).toBe(true);
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

  it("rejects em-dash placeholders and junk option twins", () => {
    expect(
      isUsableMultipleChoice({
        question: "I need ___ umbrella.",
        answer: "an",
        options: ["an", "a", "the", "—"],
      }),
    ).toBe(false);
    expect(
      isUsableMultipleChoice({
        question: "How ___ books do you have?",
        answer: "many",
        options: ["many", "Many", "many?"],
      }),
    ).toBe(false);
    expect(
      isUsableMultipleChoice({
        question: "How much apples do you want?",
        answer: "How",
        options: ["How", "How many apples do you want?", "How?"],
      }),
    ).toBe(false);
  });
});

describe("isUsableFillBlank / sentence_building placeholders", () => {
  it("rejects em-dash answers", () => {
    expect(
      isUsableFillBlank({
        question: "We go to ___ school every day.",
        answer: "—",
      }),
    ).toBe(false);
    expect(
      isUsableSentenceBuilding({
        question: "We / go / to / — / school",
        answer: "We go to — school every day",
        options: ["We", "go", "to", "—", "school"],
      }),
    ).toBe(false);
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
