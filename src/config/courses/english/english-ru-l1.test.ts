import { describe, expect, it } from "vitest";
import { getCourse } from "@/config/courses";
import {
  formatQuestionWithGloss,
  prepareExercisesForInterface,
} from "@/lib/exercise-localize";
import { englishPracticeStem } from "./l1-prompts";

describe("English course — Russian UI meaning support", () => {
  it("keeps English stems free of appended Russian grammar cues", async () => {
    const course = await getCourse("english");
    const bank = course.getExercises("eng-ch1-first-steps");
    const polluted = bank.filter(
      (ex) =>
        (ex.type === "multiple_choice" || ex.type === "fill_blank") &&
        /[А-Яа-яЁё]/.test(ex.question ?? ""),
    );
    expect(
      polluted.map((e) => e.question).slice(0, 5),
      polluted.map((e) => e.question).slice(0, 5).join(" | "),
    ).toEqual([]);
  });

  it("shows a Russian meaning gloss for core A1 be drills", async () => {
    const course = await getCourse("english");
    const prepared = prepareExercisesForInterface(
      course.getExercises("eng-ch1-first-steps"),
      "ru",
      "english",
    );
    const target = prepared.find(
      (ex) =>
        ex.type === "multiple_choice" &&
        englishPracticeStem(ex.question ?? "").startsWith("I ___ a teacher"),
    );
    expect(target, "missing I ___ a teacher drill").toBeTruthy();
    const { question, gloss } = formatQuestionWithGloss(target!, "ru");
    expect(question).toMatch(/I ___ a teacher/i);
    expect(question).not.toMatch(/Какая форма/);
    expect(gloss, `gloss for ${question}`).toMatch(/учител|Я ___/i);
    expect(target!.instruction ?? "").toMatch(/форма|вариант|be|Выберите|Какая/i);
  });

  it("A1 MC/FB: most items have a Russian meaning gloss (not only a grammar cue)", async () => {
    const course = await getCourse("english");
    const a1 = course.getChapters().filter((c) => c.level === "A1");
    let total = 0;
    let withMeaning = 0;
    const bare: string[] = [];
    for (const ch of a1) {
      const prepared = prepareExercisesForInterface(
        course.getExercises(ch.slug),
        "ru",
        "english",
      );
      for (const ex of prepared) {
        if (ex.type !== "multiple_choice" && ex.type !== "fill_blank") continue;
        total += 1;
        const { gloss } = formatQuestionWithGloss(ex, "ru");
        const ru = (gloss ?? "").trim();
        const meaning =
          ru &&
          !/^(Какая|Какой|Какое|Какие|Вставьте|Заполните|Выберите|Единственное|Исчисляемое)\b/u.test(
            ru,
          );
        if (meaning) withMeaning += 1;
        else if (bare.length < 10) {
          bare.push(`${ch.slug}: ${(ex.question ?? "").slice(0, 60)}`);
        }
      }
    }
    expect(total).toBeGreaterThan(40);
    // Curated gloss map covers core A1; keep raising as more stems are keyed.
    expect(
      withMeaning / total,
      `meaning rate=${(withMeaning / total).toFixed(2)}; bare=${bare.join(" | ")}`,
    ).toBeGreaterThanOrEqual(0.35);
  });
});
