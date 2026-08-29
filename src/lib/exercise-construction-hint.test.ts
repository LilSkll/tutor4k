import { describe, expect, it } from "vitest";
import {
  enrichFeedbackWithConstruction,
  looksLikeConstructionFormula,
  resolveConstructionHint,
  shouldSoftCheckEquivalents,
} from "@/lib/exercise-construction-hint";

describe("looksLikeConstructionFormula", () => {
  it("accepts tense formulas", () => {
    expect(looksLikeConstructionFormula("Si + imperf. subj. + condicional")).toBe(
      true,
    );
    expect(looksLikeConstructionFormula("First Conditional: if + present")).toBe(
      true,
    );
  });

  it("rejects generic translate labels", () => {
    expect(looksLikeConstructionFormula("Переведите предложение")).toBe(false);
    expect(looksLikeConstructionFormula("Translate the sentence")).toBe(false);
  });
});

describe("resolveConstructionHint", () => {
  it("prefers formula instruction over generic explanation", () => {
    expect(
      resolveConstructionHint({
        instruction: "Si + imperf. subj. + condicional",
        explanation: "Нереальное условие.",
      }),
    ).toBe("Si + imperf. subj. + condicional");
  });

  it("falls back to formula explanation when instruction is generic", () => {
    expect(
      resolveConstructionHint({
        instruction: "Переведите предложение",
        explanation: "Si + imperf. subj. + condicional.",
      }),
    ).toBe("Si + imperf. subj. + condicional");
  });

  it("does not surface Yo → tengo spoilers before the answer", () => {
    expect(
      resolveConstructionHint({
        instruction: "Переведите предложение",
        explanation: "Tener hambre = быть голодным. Yo → tengo.",
        answer: "Tengo",
      }),
    ).toBeNull();
    expect(
      resolveConstructionHint({
        instruction: "tener · presente",
        explanation: "Tener hambre = быть голодным. Yo → tengo.",
        answer: "Tengo",
      }),
    ).toBe("tener · presente");
  });
});

describe("enrichFeedbackWithConstruction", () => {
  it("adds construction on wrong translation without ironic variant note", () => {
    const out = enrichFeedbackWithConstruction({
      language: "ru",
      correct: false,
      feedback: "Не совсем.",
      instruction: "Переведите предложение",
      explanation: "Si + imperf. subj. + condicional.",
      exerciseType: "translation",
    });
    expect(out).toContain("Si + imperf. subj. + condicional");
    expect(out).toMatch(/конструкци/i);
    expect(out).not.toMatch(/синонимичн/i);
  });

  it("mentions synonym linkers when the answer is correct", () => {
    const out = enrichFeedbackWithConstruction({
      language: "ru",
      correct: true,
      feedback: "Верно.",
      explanation: "En definitiva — «в итоге».",
      exerciseType: "translation",
    });
    expect(out).toMatch(/синонимичн/i);
  });
});

describe("shouldSoftCheckEquivalents", () => {
  it("flags translation and error_correction", () => {
    expect(shouldSoftCheckEquivalents("translation")).toBe(true);
    expect(shouldSoftCheckEquivalents("fill_blank")).toBe(false);
  });
});
