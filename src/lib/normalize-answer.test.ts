import { describe, expect, it } from "vitest";
import {
  answersMatch,
  answersMatchFlexible,
  canonicalizeSynonymPhrases,
  hasCyrillicScript,
  normalizeAnswer,
} from "@/lib/normalize-answer";

describe("normalizeAnswer — Latin (Spanish / English / German)", () => {
  it("ignores Spanish accents and ñ", () => {
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

  it("folds German umlauts via Latin NFD path and ß→ss", () => {
    expect(normalizeAnswer("für")).toBe(normalizeAnswer("fur"));
    expect(normalizeAnswer("schön")).toBe(normalizeAnswer("schon"));
    expect(normalizeAnswer("Straße")).toBe(normalizeAnswer("strasse"));
  });

  it("strips English apostrophes with punctuation rules", () => {
    expect(normalizeAnswer("don't")).toBe(normalizeAnswer("dont"));
  });
});

describe("normalizeAnswer — Cyrillic (Russian)", () => {
  it("keeps мой ≠ мои (never strips й)", () => {
    expect(normalizeAnswer("мой")).not.toBe(normalizeAnswer("мои"));
    expect(answersMatch("мой", ["мои"])).toBe(false);
    expect(answersMatch("Мой", ["мой"])).toBe(true);
  });

  it("keeps аудитории ≠ аудиторий", () => {
    expect(normalizeAnswer("аудитории")).not.toBe(
      normalizeAnswer("аудиторий"),
    );
  });

  it("keeps край ≠ краи", () => {
    expect(normalizeAnswer("край")).not.toBe(normalizeAnswer("краи"));
  });

  it("keeps всё ≠ все (no global ё fold)", () => {
    expect(normalizeAnswer("всё")).not.toBe(normalizeAnswer("все"));
    expect(answersMatch("всё", ["все"])).toBe(false);
  });

  it("keeps ещё ≠ еще unless listed as acceptable", () => {
    expect(normalizeAnswer("ещё")).not.toBe(normalizeAnswer("еще"));
    expect(answersMatch("ещё", ["еще"])).toBe(false);
    expect(answersMatch("ещё", ["ещё", "еще"])).toBe(true);
  });

  it("accepts ждёт / ждет only via explicit acceptableAnswers", () => {
    expect(normalizeAnswer("ждёт")).not.toBe(normalizeAnswer("ждет"));
    expect(answersMatch("ждет", ["ждёт"])).toBe(false);
    expect(answersMatch("ждет", ["ждёт", "ждет"])).toBe(true);
  });

  it("is case-insensitive for Cyrillic", () => {
    expect(normalizeAnswer("Москва")).toBe(normalizeAnswer("москва"));
    expect(answersMatch("Москва", ["москва"])).toBe(true);
  });

  it("handles NFC and NFD encodings of й without losing identity", () => {
    const nfc = "мой";
    const nfd = "мо" + "и\u0306"; // и + combining breve
    expect(nfd.normalize("NFC")).toBe("мой");
    expect(normalizeAnswer(nfd)).toBe(normalizeAnswer(nfc));
    expect(normalizeAnswer(nfd)).not.toBe(normalizeAnswer("мои"));
  });

  it("strips trailing punctuation on Cyrillic answers", () => {
    expect(normalizeAnswer("книга.")).toBe(normalizeAnswer("книга"));
    expect(normalizeAnswer("Здравствуйте!")).toBe(
      normalizeAnswer("здравствуйте"),
    );
  });

  it("preserves Russian orthographic hyphens (По-моему ≠ По моему)", () => {
    expect(normalizeAnswer("По-моему")).not.toBe(normalizeAnswer("По моему"));
    expect(answersMatch("По моему", ["По-моему"])).toBe(false);
    expect(answersMatch("По-моему", ["По-моему", "по-моему"])).toBe(true);
    expect(answersMatch("по-моему,", ["По-моему"])).toBe(true);
  });

  it("preserves other hyphenated Russian forms", () => {
    expect(normalizeAnswer("по-русски")).not.toBe(normalizeAnswer("по русски"));
    expect(normalizeAnswer("кто-то")).not.toBe(normalizeAnswer("кто то"));
    expect(normalizeAnswer("из-за")).not.toBe(normalizeAnswer("из за"));
    expect(normalizeAnswer("всё-таки")).not.toBe(normalizeAnswer("всё таки"));
    expect(normalizeAnswer("когда-нибудь")).not.toBe(
      normalizeAnswer("когда нибудь"),
    );
    // En-dash / em-dash in a compound unify to hyphen-minus, not a space.
    expect(normalizeAnswer("по–моему")).toBe(normalizeAnswer("по-моему"));
    expect(normalizeAnswer("по—моему")).toBe(normalizeAnswer("по-моему"));
  });

  it("detects Cyrillic script", () => {
    expect(hasCyrillicScript("привет")).toBe(true);
    expect(hasCyrillicScript("hola")).toBe(false);
  });
});

describe("normalizeAnswer — Latin still folds hyphens", () => {
  it("treats Latin hyphen as optional spacing", () => {
    expect(normalizeAnswer("well-known")).toBe(normalizeAnswer("well known"));
    expect(normalizeAnswer("to-morrow")).toBe(normalizeAnswer("to morrow"));
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

  it("does not collapse Russian gender possessives", () => {
    expect(answersMatch("Мой", ["Моя", "Моё", "Мои"])).toBe(false);
    expect(answersMatch("Мой", ["Мой", "мой"])).toBe(true);
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
