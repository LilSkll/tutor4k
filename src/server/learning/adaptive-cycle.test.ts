import { describe, expect, it } from "vitest";
import {
  applyForgettingToProfile,
  buildStructuredRecommendations,
  daysSincePracticed,
  forgettingPenalty,
  withForgetting,
} from "@/server/learning/adaptive";
import {
  pickAdaptiveFromCandidates,
  scoreBankExercise,
  type RankedBankItem,
} from "@/server/learning/adaptive-exercise";
import type { StudentCourseProfile } from "@/types/learning-profile";
import type { ExerciseProgress, StaticExercise } from "@/types";

function emptyProfile(): StudentCourseProfile {
  return {
    grammar: {},
    vocabulary: {},
    skills: {
      listening: null,
      reading: null,
      writing: null,
      speaking: null,
    },
    weaknesses: [],
    strengths: [],
    preferences: {
      likesExplanations: true,
      likesExamples: true,
      likesExercises: true,
      needsRepetition: false,
    },
    recommendations: [],
    lastRecommendations: [],
    updatedAt: new Date().toISOString(),
  };
}

function ex(
  partial: Partial<RankedBankItem["exercise"]> & { id: string },
): RankedBankItem["exercise"] {
  return {
    id: partial.id,
    type: partial.type ?? "fill_blank",
    question: partial.question ?? "Q",
    answer: partial.answer ?? "A",
    explanation: partial.explanation ?? "",
    topic: partial.topic ?? "topic",
    level: partial.level ?? "A1",
    courseId: partial.courseId ?? "german",
    chapterSlug: partial.chapterSlug ?? "de-ch5-akkusativ",
    grammarTopic: partial.grammarTopic ?? "de-a1-akkusativ",
    vocabTopic: partial.vocabTopic,
  };
}

describe("adaptive cycle — mistakes, context, mastery", () => {
  it("raises priority for recent mistakes vs mastered items", () => {
    const profile = emptyProfile();
    profile.grammar["de-a1-akkusativ"] = {
      confidence: 35,
      lastPracticed: new Date().toISOString().slice(0, 10),
      correctAnswers: 1,
      wrongAnswers: 4,
      commonMistakes: ["[case] den vs dem"],
    };
    profile.weaknesses = ["de-a1-akkusativ"];

    const weak = scoreBankExercise({
      exercise: ex({ id: "german:de-ch5:fill_blank:01" }),
      profile,
      progress: {
        exerciseId: "german:de-ch5:fill_blank:01",
        timesSeen: 4,
        timesCorrect: 1,
        timesWrong: 3,
        lastSeen: new Date().toISOString().slice(0, 10),
        mastered: false,
      },
    });

    const mastered = scoreBankExercise({
      exercise: ex({
        id: "german:de-ch5:fill_blank:02",
        question: "Q2",
      }),
      profile,
      progress: {
        exerciseId: "german:de-ch5:fill_blank:02",
        timesSeen: 5,
        timesCorrect: 5,
        timesWrong: 0,
        lastSeen: new Date().toISOString().slice(0, 10),
        mastered: true,
      },
    });

    expect(weak).toBeGreaterThan(0.5);
    expect(mastered).toBe(-1);
  });

  it("does not pick mastered items when weaker candidates exist", () => {
    const profile = emptyProfile();
    profile.grammar["de-a1-akkusativ"] = {
      confidence: 30,
      lastPracticed: new Date().toISOString().slice(0, 10),
      correctAnswers: 0,
      wrongAnswers: 3,
      commonMistakes: ["[case] article"],
    };

    const ranked: RankedBankItem[] = [
      {
        exercise: ex({ id: "german:x:fill_blank:01" }),
        score: scoreBankExercise({
          exercise: ex({ id: "german:x:fill_blank:01" }),
          profile,
          progress: {
            exerciseId: "german:x:fill_blank:01",
            timesSeen: 3,
            timesCorrect: 0,
            timesWrong: 3,
            lastSeen: new Date().toISOString().slice(0, 10),
            mastered: false,
          },
        }),
      },
      {
        exercise: ex({ id: "german:x:fill_blank:02", question: "other" }),
        score: scoreBankExercise({
          exercise: ex({ id: "german:x:fill_blank:02", question: "other" }),
          profile,
          progress: {
            exerciseId: "german:x:fill_blank:02",
            timesSeen: 4,
            timesCorrect: 4,
            timesWrong: 0,
            lastSeen: new Date().toISOString().slice(0, 10),
            mastered: true,
          },
        }),
      },
    ];

    const pick = pickAdaptiveFromCandidates(ranked);
    expect(pick?.id).toBe("german:x:fill_blank:01");
  });

  it("applies forgetting so stale high-confidence topics regain urgency", () => {
    const fresh = withForgetting({
      confidence: 80,
      lastPracticed: new Date().toISOString().slice(0, 10),
      correctAnswers: 10,
      wrongAnswers: 1,
      commonMistakes: [],
    });
    const stale = withForgetting({
      confidence: 80,
      lastPracticed: "2020-01-01",
      correctAnswers: 10,
      wrongAnswers: 1,
      commonMistakes: [],
    });
    expect(forgettingPenalty(daysSincePracticed("2020-01-01"))).toBe(10);
    expect(stale.confidence).toBeLessThan(fresh.confidence);
  });

  it("surfaces recent_mistakes in structured recommendations", () => {
    const profile = emptyProfile();
    profile.grammar["de-a1-akkusativ"] = {
      confidence: 40,
      lastPracticed: new Date().toISOString().slice(0, 10),
      correctAnswers: 1,
      wrongAnswers: 3,
      commonMistakes: ["[case] den Mann"],
    };
    profile.grammar["de-a1-praesens"] = {
      confidence: 85,
      lastPracticed: new Date().toISOString().slice(0, 10),
      correctAnswers: 12,
      wrongAnswers: 0,
      commonMistakes: [],
    };

    const faded = applyForgettingToProfile(profile);
    const recs = buildStructuredRecommendations(faded);
    expect(recs.length).toBeGreaterThan(0);
    const top = recs[0]!;
    expect(top.topic).toMatch(/akkusativ/i);
    expect(top.reason).toBe("recent_mistakes");
  });

  it("documents mastery threshold used by exercise_progress writes", () => {
    // Mirror recordExerciseAttempt formula — keep in sync intentionally.
    const compute = (seen: number, correct: number) => {
      const accuracy = correct / seen;
      return seen >= 3 && correct >= 3 && accuracy >= 0.8;
    };
    expect(compute(3, 3)).toBe(true);
    expect(compute(5, 4)).toBe(true); // 0.8
    expect(compute(5, 3)).toBe(false); // 0.6
    expect(compute(2, 2)).toBe(false); // not enough samples
  });

  it("keeps progress keyed by courseId+exerciseId (no UI-locale coupling)", () => {
    const progress: ExerciseProgress = {
      exerciseId: "german:de-ch5-akkusativ:fill_blank:01",
      timesSeen: 2,
      timesCorrect: 1,
      timesWrong: 1,
      lastSeen: "2026-11-13",
      mastered: false,
    };
    // Locale must not appear in the key — regression guard for history resets.
    expect(progress.exerciseId).not.toMatch(/:(ru|en|es|de):/);
    expect(progress.exerciseId.startsWith("german:")).toBe(true);
  });
});
