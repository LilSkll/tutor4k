import { describe, expect, it } from "vitest";
import { inferQuestionGloss, reconstructSpanishSentence } from "@/lib/exercise-gloss-infer";
import { matchesChapterGrammar } from "@/lib/chapter-grammar-match";
import { attachQuestionGlosses } from "@/lib/exercise-gloss-attach";
import { formatQuestionWithGloss } from "@/lib/exercise-localize";
import type { StaticExercise } from "@/types";

describe("reconstructSpanishSentence", () => {
  it("fills blanks with the answer", () => {
    expect(
      reconstructSpanishSentence({
        type: "fill_blank",
        question: "Yo ___ (ser) médico.",
        answer: "soy",
      }),
    ).toBe("Yo soy médico.");
  });

  it("uses sentence_building answer", () => {
    expect(
      reconstructSpanishSentence({
        type: "sentence_building",
        question: "Yo / soy / estudiante",
        answer: "Yo soy estudiante",
      }),
    ).toBe("Yo soy estudiante");
  });
});

describe("matchesChapterGrammar", () => {
  it("matches slug variants", () => {
    expect(matchesChapterGrammar("a1-articulos", "artículos")).toBe(true);
    expect(matchesChapterGrammar("a2-preterito-perfecto", "pretérito-perfecto")).toBe(
      true,
    );
    expect(matchesChapterGrammar("b1-subjuntivo", "presente")).toBe(false);
  });
});

describe("question gloss attach", () => {
  const ex: StaticExercise = {
    id: "t",
    type: "sentence_building",
    question: "Yo / soy / estudiante",
    answer: "Yo soy estudiante",
    instruction: "x",
    explanation: "x",
  };

  it("adds RU gloss for Spanish prompts when sentence map exists", () => {
    const withGloss = attachQuestionGlosses(ex);
    const ru = withGloss.questionTranslations?.ru;
    expect(ru).toBeTruthy();
    // Gloss is stored server-side but not shown — it would leak word order.
    expect(formatQuestionWithGloss(withGloss, "ru").gloss).toBeNull();
    expect(formatQuestionWithGloss(withGloss, "ru").question).toBe("");
  });

  it("infers EN gloss from reconstructed sentence", () => {
    const gloss = inferQuestionGloss(ex, "en");
    expect(gloss).toBeTruthy();
  });

  it("does not attach gloss for error_correction (answer leak)", () => {
    const errEx: StaticExercise = {
      id: "err",
      type: "error_correction",
      question: "I have much friends.",
      answer: "I have many friends.",
      instruction: "x",
      explanation: "x",
    };
    const withGloss = attachQuestionGlosses(errEx);
    expect(withGloss.questionTranslations?.ru).toBeUndefined();
    expect(formatQuestionWithGloss(withGloss, "ru").gloss).toBeNull();
    expect(reconstructSpanishSentence(errEx)).toBeNull();
  });
});
