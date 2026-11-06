import { describe, expect, it } from "vitest";
import { getCourse } from "@/config/courses";
import {
  localizeExerciseInstruction,
  prepareExercisesForInterface,
} from "@/lib/exercise-localize";
import { lookupWordHint } from "@/lib/vocab-display";
import { lookupRussianInstruction } from "@/config/courses/russian/instruction-i18n";

describe("Russian UI hints and instruction localization", () => {
  it("localizes pedagogical Russian instructions for es/de/en", () => {
    expect(lookupRussianInstruction("Переведите на русский", "es")).toMatch(
      /Traduce|traduce|ruso/i,
    );
    expect(lookupRussianInstruction("Переведите на русский", "en")).toMatch(
      /Translate|Russian/i,
    );
    expect(
      localizeExerciseInstruction(
        {
          type: "fill_blank",
          question: "У меня нет ___.",
          answer: "времени",
          instruction: "Нет + родительный",
        },
        "es",
      ),
    ).toMatch(/genitiv|родительн|genitivo/i);
    expect(
      localizeExerciseInstruction(
        {
          type: "translation",
          question: "Bye (to a friend)",
          answer: "Пока",
          instruction: "Переведите на русский",
        },
        "es",
      ),
    ).not.toMatch(/Переведите/);
  });

  it("keeps Spanish TR L1 and Spanish instruction together on ES UI", async () => {
    const course = await getCourse("russian");
    const prepared = prepareExercisesForInterface(
      course
        .getExercises("ru-ch1-alphabet-greetings")
        .filter((e) => e.type === "translation"),
      "es",
      "russian",
    );
    const bye = prepared.find((e) => e.answer.replace(/[!]/g, "") === "Пока");
    expect(bye).toBeTruthy();
    expect(bye!.question).not.toMatch(/[\u0400-\u04FF]/);
    expect(bye!.question).not.toBe("Bye (to a friend)");
    expect(bye!.instruction).not.toMatch(/Переведите|[\u0400-\u04FF]/);
    expect(bye!.instruction).toMatch(/Traduce|traduce|ruso/i);
  });

  it("provides hover glosses for core Russian lemmas on ES UI", () => {
    const пока = lookupWordHint("пока", "es", "russian");
    expect(пока?.gloss).toBeTruthy();
    expect(пока!.gloss).not.toMatch(/[\u0400-\u04FF]/);

    const студент = lookupWordHint("студент", "es", "russian");
    expect(студент?.gloss).toMatch(/estudiante|alumno/i);

    // Non-Russian courses must not use this path for Cyrillic leftovers.
    expect(lookupWordHint("пока", "es", "spanish")).toBeNull();
  });
});
