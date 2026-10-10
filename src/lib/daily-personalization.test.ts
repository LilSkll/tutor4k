import { describe, expect, it } from "vitest";
import {
  isInternalStrengthLabel,
  pickStrengthTopicSlug,
} from "@/lib/daily-personalization";
import { emptyCourseProfile } from "@/server/learning/student-profile";

describe("isInternalStrengthLabel", () => {
  it("flags legacy English meta strings", () => {
    expect(
      isInternalStrengthLabel("completed chapter: Los Recuerdos"),
    ).toBe(true);
    expect(isInternalStrengthLabel("needs review: relative-pronouns")).toBe(
      true,
    );
    expect(isInternalStrengthLabel("relative-pronouns")).toBe(false);
  });
});

describe("pickStrengthTopicSlug", () => {
  it("picks the highest-confidence grammar topic excluding the weak one", () => {
    const profile = emptyCourseProfile();
    profile.grammar = {
      "eng-a1-be": {
        confidence: 40,
        lastPracticed: null,
        correctAnswers: 1,
        wrongAnswers: 3,
        commonMistakes: [],
      },
      "eng-a1-articles": {
        confidence: 88,
        lastPracticed: null,
        correctAnswers: 10,
        wrongAnswers: 0,
        commonMistakes: [],
      },
      "eng-a1-present-simple": {
        confidence: 75,
        lastPracticed: null,
        correctAnswers: 8,
        wrongAnswers: 1,
        commonMistakes: [],
      },
    };

    expect(pickStrengthTopicSlug(profile, "eng-a1-be")).toBe("eng-a1-articles");
    expect(pickStrengthTopicSlug(profile, "eng-a1-articles")).toBe(
      "eng-a1-present-simple",
    );
  });

  it("ignores completed-chapter meta in the strengths list", () => {
    const profile = emptyCourseProfile();
    profile.strengths = [
      "completed chapter: Los Recuerdos",
      "ser-estar",
    ];
    expect(pickStrengthTopicSlug(profile, null)).toBe("ser-estar");
  });

  it("returns null when only meta strengths exist", () => {
    const profile = emptyCourseProfile();
    profile.strengths = ["completed chapter: Los Recuerdos"];
    expect(pickStrengthTopicSlug(profile, null)).toBeNull();
  });

  it("falls back to strengths list of real topic keys", () => {
    const profile = emptyCourseProfile();
    profile.strengths = ["por-para", "ser-estar"];
    expect(pickStrengthTopicSlug(profile, "por-para")).toBe("ser-estar");
  });
});
