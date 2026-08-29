import { describe, expect, it } from "vitest";
import {
  orderEarlyLevelPractice,
  pickUniqueStemBatch,
  SESSION_EXERCISES,
} from "@/lib/exercise-bank";
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

describe("pickUniqueStemBatch", () => {
  it("skips later items that finish as the same sentence", () => {
    const bank = [
      ex({
        id: "1",
        type: "sentence_building",
        question: "I / am / a / teacher",
        options: ["I", "am", "a", "teacher"],
        answer: "I am a teacher",
      }),
      ex({
        id: "2",
        type: "translation",
        question: "Я студент.",
        answer: "I am a student",
      }),
      ex({
        id: "3",
        type: "multiple_choice",
        question: "I ___ a teacher",
        options: ["am", "is", "are"],
        answer: "am",
      }),
      ex({
        id: "4",
        type: "error_correction",
        question: "They is happy.",
        answer: "They are happy.",
      }),
      ex({
        id: "5",
        type: "fill_blank",
        question: "She ___ from London.",
        answer: "is",
      }),
      ex({
        id: "6",
        type: "translation",
        question: "Они счастливы.",
        answer: "They are happy",
      }),
    ];

    const { batch, nextCursor } = pickUniqueStemBatch(bank, 0, SESSION_EXERCISES);
    expect(batch.map((b) => b.id)).toEqual(["1", "2", "4", "5"]);
    // id 3 skipped (same stem as 1); id 6 skipped (same as 4)
    expect(nextCursor).toBe(6);
    expect(new Set(batch.map((b) => b.answer.toLowerCase().replace(/\.$/, ""))).size).toBe(
      batch.length,
    );
  });
});

describe("orderEarlyLevelPractice", () => {
  it("does not interleave TR and MC that share a finished sentence", () => {
    const ordered = orderEarlyLevelPractice(
      [
        ex({
          id: "sb",
          type: "sentence_building",
          question: "He / works / in / a / bank",
          options: ["He", "works", "in", "a", "bank"],
          answer: "He works in a bank",
        }),
        ex({
          id: "tr",
          type: "translation",
          question: "Он работает в банке.",
          answer: "He works in a bank",
        }),
        ex({
          id: "mc",
          type: "multiple_choice",
          question: "He ___ in a bank",
          options: ["works", "work", "working"],
          answer: "works",
        }),
        ex({
          id: "tr2",
          type: "translation",
          question: "Она ходит в школу.",
          answer: "She goes to school",
        }),
      ],
      "A1",
    );
    expect(ordered.map((e) => e.id)).toEqual(["sb", "tr2"]);
  });
});
