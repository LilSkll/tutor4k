import { describe, expect, it } from "vitest";
import { pickRandomRevisionExercises } from "@/lib/revision-exercises";
import type { StaticExercise } from "@/types";

function ex(
  id: string,
  question: string,
  answer: string,
): StaticExercise {
  return {
    id,
    type: "translation",
    question,
    answer,
    instruction: "Translate",
    explanation: "",
  };
}

describe("pickRandomRevisionExercises", () => {
  it("samples from completed chapters and excludes current", () => {
    const poolByChapter = new Map<string, StaticExercise[]>([
      ["ch1", [ex("a1", "Hola", "Привет"), ex("a2", "Adiós", "Пока")]],
      ["ch2", [ex("b1", "Gracias", "Спасибо"), ex("b2", "Por favor", "Пожалуйста")]],
      ["ch3", [ex("c1", "Nuevo", "Новое")]],
    ]);

    const picks = pickRandomRevisionExercises({
      poolByChapter,
      completedSlugs: ["ch1", "ch2", "ch3"],
      excludeChapterSlug: "ch3",
      count: 3,
    });

    expect(picks).toHaveLength(3);
    expect(picks.every((p) => p.id !== "c1")).toBe(true);
    const ids = new Set(picks.map((p) => p.id));
    expect(ids.size).toBe(3);
  });

  it("prefers weak-topic chapters but still fills from the rest", () => {
    const preferred = Array.from({ length: 2 }, (_, i) =>
      ex(`p${i}`, `Pref ${i}`, `Ans ${i}`),
    );
    const other = Array.from({ length: 5 }, (_, i) =>
      ex(`o${i}`, `Other ${i}`, `Ans o${i}`),
    );
    const poolByChapter = new Map<string, StaticExercise[]>([
      ["weak", preferred],
      ["ok", other],
    ]);

    const picks = pickRandomRevisionExercises({
      poolByChapter,
      completedSlugs: ["weak", "ok"],
      preferredSlugs: ["weak"],
      count: 3,
    });

    expect(picks).toHaveLength(3);
    const preferredIds = picks.filter((p) => p.id.startsWith("p"));
    expect(preferredIds.length).toBe(2);
  });

  it("skips duplicate stems across chapters", () => {
    const poolByChapter = new Map<string, StaticExercise[]>([
      ["ch1", [ex("a", "Yo ___ estudiante", "soy")]],
      ["ch2", [ex("b", "Yo ___ estudiante", "soy")]],
      ["ch3", [ex("c", "Tú ___ estudiante", "eres")]],
    ]);

    const picks = pickRandomRevisionExercises({
      poolByChapter,
      completedSlugs: ["ch1", "ch2", "ch3"],
      count: 3,
    });

    expect(picks.length).toBe(2);
    expect(new Set(picks.map((p) => p.id)).has("a") !== new Set(picks.map((p) => p.id)).has("b") || picks.length === 2).toBe(true);
    const stems = picks.map((p) => p.question);
    expect(new Set(stems).size).toBe(stems.length);
  });
});
