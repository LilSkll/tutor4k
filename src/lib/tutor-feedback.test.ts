import { describe, expect, it } from "vitest";
import {
  formatBankTutorFeedback,
  localizeBankExplanation,
  stripEmbeddedModelAnswer,
} from "@/lib/tutor-feedback";

describe("localizeBankExplanation", () => {
  it("keeps Russian for RU UI", () => {
    expect(localizeBankExplanation("Используй ser.", "ru")).toBe(
      "Используй ser.",
    );
  });

  it("keeps short English grammar micro-hints on RU UI", () => {
    expect(
      localizeBankExplanation("prepositions of place: word order.", "ru"),
    ).toBe("prepositions of place: word order.");
  });

  it("keeps X = Y glosses on RU UI", () => {
    expect(localizeBankExplanation("next to = beside.", "ru")).toBe(
      "next to = beside.",
    );
  });

  it("drops short English replies on RU UI", () => {
    expect(localizeBankExplanation("So do I", "ru")).toMatch(/правильн/i);
  });

  it("keeps pedagogic English explanations on RU UI", () => {
    expect(
      localizeBankExplanation(
        "It-cleft highlights the person: It was John who…",
        "ru",
      ),
    ).toMatch(/It-cleft highlights/i);
  });

  it("keeps Latin formulas on RU UI", () => {
    expect(localizeBankExplanation("have + been + V3", "ru")).toBe(
      "have + been + V3",
    );
  });

  it("strips Cyrillic for EN UI", () => {
    const out = localizeBankExplanation(
      "Правильно: estoy. Не estar frío.",
      "en",
    );
    expect(out).not.toMatch(/[\u0400-\u04FF]/);
  });

  it("falls back to a short EN hint when fully Russian", () => {
    expect(localizeBankExplanation("Смотри на артикль.", "en")).toMatch(
      /correct answer/i,
    );
  });
});

describe("formatBankTutorFeedback", () => {
  it("does not leave Cyrillic in EN praise feedback", () => {
    const fb = formatBankTutorFeedback({
      language: "en",
      correct: true,
      explanation: "Нужно me gusta, не yo gusto.",
    });
    expect(fb).not.toMatch(/[\u0400-\u04FF]/);
  });

  it("shows bank gloss for sentence building instead of a task howto", () => {
    const fb = formatBankTutorFeedback({
      language: "ru",
      correct: false,
      explanation: "next to = beside.",
      instruction: "Build the sentence",
      exerciseType: "sentence_building",
      answer: "The café is next to the bank",
      includeModelAnswer: false,
    });
    expect(fb).toMatch(/Почти|Не совсем|Давай|Хорошая/i);
    expect(fb).toMatch(/next to = beside/i);
    expect(fb).not.toMatch(/собрать фразу из готовых слов/i);
    expect(fb).not.toMatch(/не переводить/i);
    expect(fb).not.toMatch(/Правильный ответ:/);
  });

  it("falls back to word-order hint when sentence building has no bank note", () => {
    const fb = formatBankTutorFeedback({
      language: "ru",
      correct: false,
      explanation: "",
      exerciseType: "sentence_building",
      answer: "Estoy en casa",
    });
    expect(fb).toMatch(/порядок слов/i);
    expect(fb).not.toMatch(/не переводить/i);
    expect(fb).toMatch(/Правильный ответ:\s*Estoy en casa/);
  });

  it("can omit model answer when the UI already shows it", () => {
    const fb = formatBankTutorFeedback({
      language: "ru",
      correct: false,
      explanation: "fines de semana = выходные.",
      exerciseType: "sentence_building",
      answer: "¿Qué haces los fines de semana?",
      includeModelAnswer: false,
    });
    expect(fb).toMatch(/fines de semana = выходные/i);
    expect(fb).not.toMatch(/собрать фразу из готовых слов/i);
    expect(fb).not.toMatch(/Правильный ответ:/);
  });

  it("includes the model answer when the bank note is empty", () => {
    const fb = formatBankTutorFeedback({
      language: "ru",
      correct: false,
      explanation: "",
      answer: "Volvieron tarde",
    });
    expect(fb).toMatch(/Правильный ответ:\s*Volvieron tarde/);
    expect(fb).not.toMatch(/выше/i);
  });
});

describe("stripEmbeddedModelAnswer", () => {
  it("removes a duplicated correct-answer line", () => {
    const out = stripEmbeddedModelAnswer(
      "Не совсем. Правильный ответ: Hola. Смотри форму.",
      "Hola",
      "ru",
    );
    expect(out).not.toMatch(/Правильный ответ/);
    expect(out).toMatch(/Не совсем/);
    expect(out).toMatch(/Смотри форму/);
  });
});
