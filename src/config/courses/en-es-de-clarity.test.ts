import { describe, expect, it } from "vitest";
import { getCourse } from "@/config/courses";
import { isGrammarCategoryInstruction } from "@/lib/exercise-quality";
import { hasSlashAnswerSpoilerInstruction } from "@/lib/exercise-instruction-normalize";

describe("EN / ES / DE product clarity (chapters + revision banks)", () => {
  for (const id of ["english", "spanish"] as const) {
    it(`${id}: no grammar-tag or slash-spoiler instructions at runtime`, async () => {
      const course = await getCourse(id);
      const bad: string[] = [];
      for (const ch of course.getChapters()) {
        for (const ex of course.getExercises(ch.slug)) {
          if (ex.type === "reading") continue;
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

