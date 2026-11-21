import { describe, expect, it } from "vitest";
import { getCourse } from "@/config/courses";
import {
  isRussianExerciseClear,
  russianClarityIssues,
} from "@/config/courses/russian/exercise-clarity";
import { RUSSIAN_EXERCISES } from "@/config/courses/russian/exercises";

describe("RKI product clarity (chapters + revision source banks)", () => {
  it("flags known spoiler patterns", () => {
    expect(
      russianClarityIssues({
        type: "fill_blank",
        question: "Он ___ текст.",
        instruction: "Глагол читать",
        answer: "читает",
      }),
    ).toContain("lemma_spoiler");
    expect(
      russianClarityIssues({
        type: "fill_blank",
        question: "___ окно открыто.",
        instruction: "мой / моя / моё",
        answer: "Моё",
      }),
    ).toContain("slash_spoiler");
    expect(
      russianClarityIssues({
        type: "fill_blank",
        question: "Сейчас ___.",
        instruction: "Вставьте слово",
        answer: "перемена",
      }),
    ).toContain("cue_less_fill");
  });

  it("accepts product-ready conjugation and agreement items", () => {
    expect(
      isRussianExerciseClear({
        type: "fill_blank",
        question: "Он ___ текст. (читать)",
        instruction: "Поставьте глагол в настоящее время",
        answer: "читает",
      }),
    ).toBe(true);
    expect(
      isRussianExerciseClear({
        type: "fill_blank",
        question: "___ окно открыто.",
        instruction: "Согласуйте притяжательное",
        answer: "Моё",
      }),
    ).toBe(true);
  });

  it("keeps every authored bank item clear (source of chapters + revision)", () => {
    const bad: string[] = [];
    for (const [slug, items] of Object.entries(RUSSIAN_EXERCISES)) {
      for (const ex of items) {
        const issues = russianClarityIssues(ex);
        if (issues.length) {
          bad.push(
            `${slug}: ${ex.type} «${(ex.question ?? "").slice(0, 48)}» [${issues.join(",")}] inst=${ex.instruction}`,
          );
        }
      }
    }
    expect(bad, bad.slice(0, 20).join("\n")).toEqual([]);
  });

  it("serves clear runtime banks for every chapter", async () => {
    const course = await getCourse("russian");
    const thin: string[] = [];
    for (const ch of course.getChapters()) {
      const bank = course.getExercises(ch.slug);
      // Passage-backed drills (e.g. literary fragment + MC) still count as
      // practice. Skip only empty shells with no learner prompt.
      const practice = bank.filter((e) => (e.question ?? "").trim().length > 0);
      if (practice.length < 20) {
        thin.push(`${ch.slug}: ${practice.length}`);
      }
      for (const ex of practice) {
        expect(
          isRussianExerciseClear(ex),
          `${ex.id}: ${ex.instruction}`,
        ).toBe(true);
      }
    }
    expect(thin, thin.join(" | ")).toEqual([]);
  });
});
