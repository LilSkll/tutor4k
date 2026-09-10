import { describe, expect, it } from "vitest";
import { splitAchievementLines } from "@/lib/journey/fill-completion-certificate";

describe("splitAchievementLines", () => {
  const measure = (t: string) => t.length * 10;

  it("keeps a short line intact", () => {
    expect(splitAchievementLines(measure, "Level A1", 200)).toEqual(["Level A1"]);
  });

  it("breaks on an em dash for chapter lines", () => {
    expect(
      splitAchievementLines(measure, "Глава 10 — El Mapa de los Verbos", 180),
    ).toEqual(["Глава 10", "El Mapa de los Verbos"]);
  });

  it("falls back to a greedy word wrap", () => {
    expect(
      splitAchievementLines(measure, "Very Long Achievement Title Here", 150),
    ).toEqual(["Very Long", "Achievement Title Here"]);
  });
});
