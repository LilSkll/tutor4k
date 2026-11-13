import { describe, expect, it } from "vitest";
import { getCourse } from "@/config/courses";
import { attachQuestionGlosses } from "@/lib/exercise-gloss-attach";
import { lookupWordHint } from "@/lib/vocab-display";
import type { GrammarLevel, InterfaceLanguage, StaticExercise } from "@/types";

const A1_B2: GrammarLevel[] = ["A1", "A2", "B1", "B2"];
const WORD_RE = /[\p{L}\p{M}]+(?:['’-][\p{L}\p{M}]+)*/gu;

/** Skip ultra-short function words that rarely need a tip. */
const SKIP = new Set(
  [
    "a", "al", "de", "del", "el", "la", "los", "las", "un", "una", "y", "o", "en", "con", "por", "para", "que", "se", "su", "mi", "tu",
    "the", "a", "an", "of", "to", "in", "on", "and", "or", "is", "are", "i", "you", "he", "she", "it", "we", "they", "my", "your",
    "der", "die", "das", "den", "dem", "ein", "eine", "und", "oder", "in", "mit", "zu", "von", "ich", "du", "er", "sie", "es", "wir",
    "и", "в", "на", "с", "к", "у", "о", "я", "ты", "он", "она", "мы", "вы", "они", "это", "не",
  ].map((w) => w.toLowerCase()),
);

function contentWords(question: string): string[] {
  const out: string[] = [];
  for (const m of question.matchAll(WORD_RE)) {
    const w = m[0];
    if (w.length < 3) continue;
    if (SKIP.has(w.toLowerCase())) continue;
    out.push(w);
  }
  return out;
}

function uiForCourse(courseId: string): InterfaceLanguage {
  if (courseId === "english") return "ru";
  if (courseId === "russian") return "en";
  if (courseId === "german") return "ru";
  return "en";
}

describe("A1–B2 chapter exercises — lexical learner support", () => {
  for (const courseId of ["spanish", "english", "russian", "german"] as const) {
    it(`${courseId}: A1–B2 prompts expose vocab tap-hints and/or sentence glosses`, async () => {
      const course = await getCourse(courseId);
      const chapters = course
        .getChapters()
        .filter((c) => A1_B2.includes(c.level as GrammarLevel));
      expect(chapters.length).toBeGreaterThan(5);

      let exercises = 0;
      let withSupport = 0;
      let contentWordHits = 0;
      let contentWordTotal = 0;
      const weak: string[] = [];

      for (const ch of chapters) {
        const bank = course.getExercises(ch.slug);
        for (const raw of bank) {
          exercises += 1;
          const ex = attachQuestionGlosses({
            ...raw,
            courseId,
            chapterSlug: ch.slug,
            level: ch.level,
          } as StaticExercise);
          const ui = uiForCourse(courseId);
          const sentenceGloss = Boolean(ex.questionTranslations?.[ui]?.trim());
          // TR stems already written in L1 (e.g. Russian UI prompt for DE/ES)
          // do not need a second gloss layer.
          const q = ex.question ?? "";
          const l1Prompt =
            (ui === "ru" && /[\u0400-\u04FF]/.test(q)) ||
            ex.type === "translation";
          const words = contentWords(q);
          let hinted = 0;
          for (const w of words) {
            contentWordTotal += 1;
            if (lookupWordHint(w, ui, courseId)) {
              hinted += 1;
              contentWordHits += 1;
            }
          }
          const wordCoverage = words.length === 0 ? 1 : hinted / words.length;
          const ok =
            sentenceGloss ||
            l1Prompt ||
            wordCoverage >= 0.25 ||
            words.length === 0;
          if (ok) withSupport += 1;
          else weak.push(`${ch.slug} · ${(ex.question ?? "").slice(0, 48)}`);
        }
      }

      expect(exercises).toBeGreaterThan(50);
      // Most A1–B2 items should offer either a sentence gloss or ≥25% content-word hints.
      expect(
        withSupport / exercises,
        `${courseId} support=${(withSupport / exercises).toFixed(3)}; weak=${weak.slice(0, 5).join(" | ")}`,
      ).toBeGreaterThan(0.6);
      // Across the band, enough content words resolve via course vocab.
      expect(
        contentWordHits / Math.max(1, contentWordTotal),
        `${courseId} wordHitRate=${(contentWordHits / Math.max(1, contentWordTotal)).toFixed(3)}`,
      ).toBeGreaterThan(0.15);
      expect(weak.length, weak.slice(0, 10).join(" | ")).toBeLessThan(
        exercises * 0.4,
      );
    });
  }
});
