import { describe, expect, it } from "vitest";
import { getCourse } from "@/config/courses";
import { isGrammarCategoryInstruction } from "@/lib/exercise-quality";
import {
  hasSlashAnswerSpoilerInstruction,
  instructionSignalsQuestion,
  isInterrogativeSentenceBuildingAnswer,
} from "@/lib/exercise-instruction-normalize";

describe("EN / ES / DE product clarity (chapters + revision banks)", () => {
  for (const id of ["english", "spanish"] as const) {
    it(`${id}: no grammar-tag or slash-spoiler instructions at runtime`, async () => {
      const course = await getCourse(id);
      const bad: string[] = [];
      for (const ch of course.getChapters()) {
        for (const ex of course.getExercises(ch.slug)) {
          if (ex.passage) continue;
          const inst = (ex.instruction ?? "").trim();
          if (inst && isGrammarCategoryInstruction(inst)) {
            bad.push(`${ch.slug}: «${inst}»`);
          }
          if (hasSlashAnswerSpoilerInstruction(inst, ex.answer)) {
            bad.push(`${ch.slug}: slash «${inst}» = ${ex.answer}`);
          }
        }
      }
      expect(bad, bad.slice(0, 15).join("\n")).toEqual([]);
    });
  }

  for (const id of ["english", "spanish", "german", "russian"] as const) {
    it(`${id}: yes/no & wh sentence-building asks for a question, not a statement`, async () => {
      const course = await getCourse(id);
      const bad: string[] = [];
      for (const ch of course.getChapters()) {
        for (const ex of course.getExercises(ch.slug)) {
          if (ex.type !== "sentence_building") continue;
          if (!isInterrogativeSentenceBuildingAnswer(ex.answer, ex.question)) {
            continue;
          }
          if (!instructionSignalsQuestion(ex.instruction)) {
            bad.push(`${ch.slug}: «${ex.instruction}» → ${ex.answer}`);
          }
        }
      }
      expect(bad, bad.slice(0, 12).join("\n")).toEqual([]);
    });
  }

  it("translation stems do not use «?.» and Вы≠tú mismatches are gone", async () => {
    const bad: string[] = [];
    for (const id of ["english", "spanish"] as const) {
      const course = await getCourse(id);
      for (const ch of course.getChapters()) {
        for (const ex of course.getExercises(ch.slug)) {
          if (ex.type !== "translation") continue;
          const q = (ex.question ?? "").trim();
          const a = (ex.answer ?? "").trim();
          if (/\?\.\s*$/.test(q)) bad.push(`${id}/${ch.slug}: stem «${q}»`);
          if (
            /^Вы\b/.test(q) &&
            /\b(¿Viste\b|¿Has\b|¿Habías\b|¿Podrías\b|¿Me lo prestas\b)/.test(a) &&
            !/¿Ha\b|¿Habéis\b|¿Podría\b|¿Me lo puede\b/.test(a)
          ) {
            // Allow if acceptableAnswers include a formal variant
            const ok = (ex.acceptableAnswers ?? []).some((x) =>
              /¿Ha\b|¿Habéis\b|¿Podría\b|¿Me lo puede\b|¿Vio\b/.test(x),
            );
            if (!ok) bad.push(`${id}/${ch.slug}: Вы→tú «${q}» → ${a}`);
          }
          if (/^Ты\b/.test(q) && /\bcenáis\b/i.test(a)) {
            bad.push(`${id}/${ch.slug}: ты→vosotros «${q}» → ${a}`);
          }
        }
      }
    }
    expect(bad, bad.slice(0, 12).join("\n")).toEqual([]);
  });

  it("german: fill blanks do not rely on Cyrillic-only stem cues", async () => {
    const course = await getCourse("german");
    const bad: string[] = [];
    for (const ch of course.getChapters()) {
      for (const ex of course.getExercises(ch.slug)) {
        if (ex.type !== "fill_blank") continue;
        const q = ex.question ?? "";
        if (/\([\u0400-\u04FF][^)]*\)$/u.test(q) && !/\([A-Za-zÄÖÜäöüß]/.test(q)) {
          bad.push(`${ch.slug}: ${q}`);
        }
      }
    }
    expect(bad, bad.slice(0, 10).join("\n")).toEqual([]);
  });

  it("german: MC stems do not parenthesize the exact answer", async () => {
    const course = await getCourse("german");
    const bad: string[] = [];
    for (const ch of course.getChapters()) {
      for (const ex of course.getExercises(ch.slug)) {
        if (ex.type !== "multiple_choice") continue;
        const q = ex.question ?? "";
        const a = (ex.answer ?? "").trim();
        if (!a) continue;
        // Infinitive cues like (arbeiten) are OK when the answer is conjugated.
        const m = q.match(/\(([^)]+)\)/);
        if (m && m[1]!.trim().toLowerCase() === a.toLowerCase()) {
          bad.push(`${ch.slug}: ${ex.question} → ${ex.answer}`);
        }
      }
    }
    expect(bad, bad.slice(0, 10).join("\n")).toEqual([]);
  });
});

