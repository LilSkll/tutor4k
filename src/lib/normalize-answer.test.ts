import { describe, expect, it } from "vitest";
import {
  answersMatch,
  answersMatchFlexible,
  canonicalizeSynonymPhrases,
  normalizeAnswer,
} from "@/lib/normalize-answer";

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

describe("answersMatchFlexible", () => {
  it("accepts synonym discourse openers", () => {
    expect(
      answersMatchFlexible("En conclusión, la decisión fue correcta", [
        "En definitiva, la decisión fue correcta",
        "En suma, la decisión fue correcta",
      ]),
    ).toBe(true);
    expect(
      answersMatchFlexible("Al final la decision fue correcta", [
        "En definitiva, la decisión fue correcta",
      ]),
    ).toBe(true);
    expect(
      answersMatchFlexible("Finalmente, la decisión fue correcta", [
        "En definitiva, la decisión fue correcta",
      ]),
    ).toBe(true);
  });

  it("still rejects a different meaning", () => {
    expect(
      answersMatchFlexible("Sin embargo, la decisión fue correcta", [
        "En definitiva, la decisión fue correcta",
      ]),
    ).toBe(false);
  });
});

describe("canonicalizeSynonymPhrases", () => {
  it("maps en suma to en definitiva", () => {
    expect(canonicalizeSynonymPhrases("en suma la decision fue correcta")).toBe(
      canonicalizeSynonymPhrases("en definitiva la decision fue correcta"),
    );
  });
});
