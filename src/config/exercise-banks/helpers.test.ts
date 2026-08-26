import { describe, expect, it } from "vitest";
import {
  expandChapterBank,
  exerciseContentFingerprint,
} from "@/config/exercise-banks/helpers";

describe("exerciseContentFingerprint", () => {
  it("treats the same blank stem as one item across MC and fill-blank", () => {
    const mc = exerciseContentFingerprint({
      type: "multiple_choice",
      question: "María ___ levanta a las siete.",
      answer: "se",
      instruction: "Выберите правильный вариант",
      explanation: "x",
      options: ["se", "me"],
    });
    const fb = exerciseContentFingerprint({
      type: "fill_blank",
      question: "María ___ levanta a las siete.",
      answer: "se",
      instruction: "Заполните пропуск",
      explanation: "x",
    });
    expect(mc).toBe(fb);
  });

  it("links error-correction and sentence-building by finished sentence", () => {
    const ec = exerciseContentFingerprint({
      type: "error_correction",
      question: "La que me gusta es la libertad.",
      answer: "Lo que me gusta es la libertad.",
      instruction: "Исправьте ошибку",
      explanation: "x",
    });
    const sb = exerciseContentFingerprint({
      type: "sentence_building",
      question: "Lo / que / me / gusta / es / la / libertad",
      options: ["Lo", "que", "me", "gusta", "es", "la", "libertad"],
      answer: "Lo que me gusta es la libertad",
      instruction: "Составьте предложение из слов",
      explanation: "x",
    });
    expect(ec).toBe(sb);
  });
});

describe("expandChapterBank", () => {
  it("does not keep the same blank stem as both MC and fill-blank", () => {
    const out = expandChapterBank(
      [
        {
          type: "multiple_choice",
          question: "Ana y Luis ___ ven cada día.",
          options: ["se", "me", "te", "le"],
          answer: "se",
          instruction: "Выберите правильный вариант",
          explanation: "Se ven.",
        },
        {
          type: "fill_blank",
          question: "Ana y Luis ___ ven cada día.",
          answer: "se",
          instruction: "Заполните пропуск",
          explanation: "Se ven.",
        },
      ],
      {},
    );
    expect(out).toHaveLength(1);
    expect(out[0].type).toBe("multiple_choice");
  });
});
