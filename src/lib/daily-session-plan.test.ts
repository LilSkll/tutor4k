import { describe, expect, it } from "vitest";
import { buildDailyExerciseBlocks } from "@/lib/daily-session-plan";
import { exerciseStemKey } from "@/lib/exercise-bank";
import type { StaticExercise } from "@/types";

function ex(
  partial: Partial<StaticExercise> &
    Pick<StaticExercise, "id" | "type" | "question" | "answer">,
): StaticExercise {
  return {
    instruction: "x",
    explanation: "x",
    ...partial,
  };
}

describe("buildDailyExerciseBlocks", () => {
  it("caps review at 3 and practice at 5 with no shared stems", () => {
    const revision = [
      ex({
        id: "r1",
        type: "translation",
        question: "Я учитель.",
        answer: "I am a teacher",
      }),
      ex({
        id: "r2",
        type: "fill_blank",
        question: "She ___ happy.",
        answer: "is",
      }),
      ex({
        id: "r3",
        type: "multiple_choice",
        question: "They ___ students.",
        options: ["are", "is"],
        answer: "are",
      }),
      ex({
        id: "r4",
        type: "error_correction",
        question: "He are tall.",
        answer: "He is tall.",
      }),
    ];

    const chapter = [
      ex({
        id: "p-dup",
        type: "sentence_building",
        question: "I / am / a / teacher",
        options: ["I", "am", "a", "teacher"],
        answer: "I am a teacher",
      }),
      ex({
        id: "p1",
        type: "translation",
        question: "Я студент.",
        answer: "I am a student",
      }),
      ex({
        id: "p2",
        type: "fill_blank",
        question: "We ___ from Spain.",
        answer: "are",
      }),
      ex({
        id: "p3",
        type: "multiple_choice",
        question: "___ you ready?",
        options: ["Are", "Is"],
        answer: "Are",
      }),
      ex({
        id: "p4",
        type: "error_correction",
        question: "She am here.",
        answer: "She is here.",
      }),
      ex({
        id: "p5",
        type: "translation",
        question: "Они дома.",
        answer: "They are home",
      }),
      ex({
        id: "p6",
        type: "fill_blank",
        question: "It ___ cold.",
        answer: "is",
      }),
    ];

    const { reviewExercises, practiceExercises } = buildDailyExerciseBlocks({
      revisionExercises: revision,
      chapterExercises: chapter,
      level: "A1",
    });

    expect(reviewExercises).toHaveLength(3);
    expect(practiceExercises.length).toBeLessThanOrEqual(5);
    expect(practiceExercises.map((e) => e.id)).not.toContain("p-dup");

    const reviewStems = new Set(
      reviewExercises.map((e) => exerciseStemKey(e)).filter(Boolean),
    );
    for (const item of practiceExercises) {
      const key = exerciseStemKey(item);
      if (key) expect(reviewStems.has(key)).toBe(false);
    }
  });

  it("allows empty review", () => {
    const { reviewExercises, practiceExercises } = buildDailyExerciseBlocks({
      revisionExercises: [],
      chapterExercises: [
        ex({
          id: "only",
          type: "translation",
          question: "Hola",
          answer: "Hello",
        }),
      ],
      level: "A1",
    });
    expect(reviewExercises).toHaveLength(0);
    expect(practiceExercises).toHaveLength(1);
  });

  it("rotates practice window by seed so day-1 ≠ day-2", () => {
    const chapter = Array.from({ length: 12 }, (_, i) =>
      ex({
        id: `p${i}`,
        type: "translation",
        question: `Q${i}`,
        answer: `A${i}`,
      }),
    );
    const a = buildDailyExerciseBlocks({
      revisionExercises: [],
      chapterExercises: chapter,
      level: "B1",
      rotationSeed: "spanish:ch1:2026-10-08",
    });
    const b = buildDailyExerciseBlocks({
      revisionExercises: [],
      chapterExercises: chapter,
      level: "B1",
      rotationSeed: "spanish:ch1:2026-10-09",
    });
    expect(a.practiceExercises.map((e) => e.id)).not.toEqual(
      b.practiceExercises.map((e) => e.id),
    );
  });

  it("skips excludeIds so a second open differs from the first", () => {
    const chapter = Array.from({ length: 12 }, (_, i) =>
      ex({
        id: `p${i}`,
        type: "translation",
        question: `Q${i}`,
        answer: `A${i}`,
      }),
    );
    const first = buildDailyExerciseBlocks({
      revisionExercises: [],
      chapterExercises: chapter,
      level: "B1",
      rotationSeed: "spanish:ch1:2026-10-08:r0",
    });
    const second = buildDailyExerciseBlocks({
      revisionExercises: [],
      chapterExercises: chapter,
      level: "B1",
      rotationSeed: "spanish:ch1:2026-10-08:r1",
      excludeIds: first.practiceExercises.map((e) => e.id),
    });
    const firstIds = new Set(first.practiceExercises.map((e) => e.id));
    for (const item of second.practiceExercises) {
      expect(firstIds.has(item.id)).toBe(false);
    }
  });
});
