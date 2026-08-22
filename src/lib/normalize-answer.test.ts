import { describe, expect, it } from "vitest";
import { answersMatch, normalizeAnswer } from "@/lib/normalize-answer";

describe("normalizeAnswer", () => {
  it("ignores accents and ñ", () => {
    expect(normalizeAnswer("está bien")).toBe(normalizeAnswer("esta bien"));
    expect(normalizeAnswer("niño")).toBe(normalizeAnswer("nino"));
    expect(normalizeAnswer("España")).toBe(normalizeAnswer("espana"));
    expect(normalizeAnswer("año")).toBe(normalizeAnswer("ano"));
  });

  it("ignores punctuation and extra spaces", () => {
    expect(normalizeAnswer("¿Dónde vives?")).toBe(normalizeAnswer("donde vives"));
    expect(normalizeAnswer("La mesa es roja.")).toBe(
      normalizeAnswer("la mesa es roja"),
    );
  });
});

describe("answersMatch", () => {
  it("accepts accent-free Spanish answers", () => {
    expect(
      answersMatch("La mesa es roja", ["La mesa es roja.", "la mesa es roja"]),
    ).toBe(true);
    expect(
      answersMatch("donde vives", ["¿Dónde vives?", "Dónde vives"]),
    ).toBe(true);
    expect(
      answersMatch("Se venden casas en el centro", [
        "Se venden casas en el centro.",
      ]),
    ).toBe(true);
  });
});
