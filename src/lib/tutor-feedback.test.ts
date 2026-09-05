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
});
