import { describe, expect, it } from "vitest";
import { gradeStaticExerciseLocally } from "@/lib/exercise-check-client";

describe("gradeStaticExerciseLocally", () => {
  it("grades without accents and shows feedback", () => {
    const result = gradeStaticExerciseLocally(
      {
        answer: "La mesa es roja.",
        explanation: "Mesa — femenino → la.",
      },
      "la mesa es roja",
      "ru",
    );
    expect(result.correct).toBe(true);
    expect(result.feedback.length).toBeGreaterThan(0);
  });
});
