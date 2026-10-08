import { describe, expect, it } from "vitest";
import {
  formatBankTutorFeedback,
  localizeBankExplanation,
} from "@/lib/tutor-feedback";

describe("localizeBankExplanation", () => {
  it("keeps Russian for RU UI", () => {
    expect(localizeBankExplanation("Используй ser.", "ru")).toBe(
      "Используй ser.",
    );
  });

  it("drops English topic glosses on RU UI", () => {
    expect(
      localizeBankExplanation("prepositions of place: word order.", "ru"),
    ).toMatch(/правильн/i);
  });

  it("drops short English replies on RU UI", () => {
    expect(localizeBankExplanation("So do I", "ru")).toMatch(/правильн/i);
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

  it("keeps RU framing without English gloss or generic construction leak", () => {
    const fb = formatBankTutorFeedback({
      language: "ru",
      correct: false,
      explanation: "prepositions of place: word order.",
      instruction: "Составьте предложение по образцу",
      exerciseType: "sentence_building",
      answer: "Estoy en casa",
    });
    expect(fb).toMatch(/Почти|Не совсем|Давай|Хорошая/i);
    expect(fb).not.toMatch(/prepositions of place/i);
    expect(fb).not.toMatch(/Составьте предложение/i);
    expect(fb).toMatch(/Правильный ответ:\s*Estoy en casa/);
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
