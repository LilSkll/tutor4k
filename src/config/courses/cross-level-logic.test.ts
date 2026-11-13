import { describe, expect, it } from "vitest";
import { getCourse } from "@/config/courses";
import { sanitizeBankExercise } from "@/lib/exercise-quality";

/**
 * Cross-level logic guards: no answer∉options, no EC that accepts its own
 * error stem, no 2-tile SB, no known broken pairs.
 */
describe("cross-level exercise logic (all courses)", () => {
  it("rejects MC answers missing from options and EC that accept the error stem", async () => {
    const badMc: string[] = [];
    const badEc: string[] = [];
    const shortSb: string[] = [];
    const knownBroken: string[] = [];

    for (const id of ["german", "spanish", "english", "russian"] as const) {
      const course = await getCourse(id);
      for (const ch of course.getChapters()) {
        for (const raw of course.getExercises(ch.slug)) {
          const e = sanitizeBankExercise(raw as never) ?? raw;
          const q = (e.question ?? "").trim();
          const a = (e.answer ?? "").trim();
          const label = `${id}/${ch.slug}/${e.id ?? e.type}`;

          if (e.type === "multiple_choice" && Array.isArray(e.options) && a) {
            const ok = e.options.some(
              (o) => o.trim().toLowerCase() === a.toLowerCase(),
            );
            if (!ok) badMc.push(`${label}: ${a}`);
          }

          if (
            e.type === "error_correction" &&
            Array.isArray(e.acceptableAnswers) &&
            q
          ) {
            const norm = (s: string) =>
              s.replace(/[.?!¡¿]/g, "").trim().toLowerCase();
            if (e.acceptableAnswers.some((x) => norm(x) === norm(q))) {
              badEc.push(`${label}: accepts stem`);
            }
          }

          // A1 fixed greetings may be 2 tiles; from A2 upward require a real build.
          if (
            e.type === "sentence_building" &&
            Array.isArray(e.options) &&
            e.options.length < 3 &&
            String(ch.level ?? "").toUpperCase() !== "A1"
          ) {
            shortSb.push(`${label}: ${q}`);
          }

          if (/No comment/i.test(a) && /комментари/i.test(q)) {
            knownBroken.push(`${label}: EN answer on ES course`);
          }
          if (/Podría ___ \(ayudar\)me/i.test(q)) {
            knownBroken.push(`${label}: ayudar spoiler`);
          }
          if (/Die ___ Lampe ist neu/i.test(q) && /\(alt\)/i.test(q)) {
            knownBroken.push(`${label}: contradictory lamp`);
          }
        }
      }
    }

    expect(badMc, badMc.slice(0, 8).join(" | ")).toEqual([]);
    expect(badEc, badEc.slice(0, 8).join(" | ")).toEqual([]);
    expect(shortSb, shortSb.slice(0, 8).join(" | ")).toEqual([]);
    expect(knownBroken, knownBroken.slice(0, 8).join(" | ")).toEqual([]);
  });
});
