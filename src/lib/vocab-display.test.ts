import { describe, expect, it } from "vitest";
import {
  getWordDefinition,
  getWordGloss,
  lookupWordHint,
} from "@/lib/vocab-display";
import type { VocabWord } from "@/types";

const padre: VocabWord = {
  word: "el padre",
  translation: "отец",
  example: "Mi padre es médico.",
};

describe("getWordGloss (spanish course)", () => {
  it("keeps Russian for ru UI", () => {
    expect(getWordGloss(padre, "ru", "spanish")).toBe("отец");
  });

  it("localizes to en/es/de for non-ru UI", () => {
    const en = getWordGloss(padre, "en", "spanish");
    const es = getWordGloss(padre, "es", "spanish");
    const de = getWordGloss(padre, "de", "spanish");
    expect(en.toLowerCase()).not.toMatch(/[\u0400-\u04FF]/);
    expect(es.toLowerCase()).not.toMatch(/[\u0400-\u04FF]/);
    expect(de.toLowerCase()).not.toMatch(/[\u0400-\u04FF]/);
    expect(en.toLowerCase()).toMatch(/father|dad|padre/);
    expect(es.toLowerCase()).toMatch(/padre|papá|papa/);
    expect(de.toLowerCase()).toMatch(/vater|papa/);
  });
});

describe("getWordDefinition (spanish course)", () => {
  it("returns localized definitions for all UI languages when mapped", () => {
    const langs = ["ru", "en", "es", "de"] as const;
    for (const lang of langs) {
      const def = getWordDefinition(padre, lang, "spanish");
      expect(def, `missing definition for ${lang}`).toBeTruthy();
      expect(def!.length).toBeGreaterThan(3);
    }
  });

  it("prefers inline definitions over course maps", () => {
    const withInline: VocabWord = {
      ...padre,
      definitions: { en: "Inline father definition for tests." },
    };
    expect(getWordDefinition(withInline, "en", "spanish")).toBe(
      "Inline father definition for tests.",
    );
  });
});

describe("lookupWordHint", () => {
  it("resolves Spanish tokens to UI-language glosses", () => {
    const ru = lookupWordHint("padre", "ru", "spanish");
    const en = lookupWordHint("padre!", "en", "spanish");
    expect(ru?.gloss.toLowerCase()).toMatch(/отец|папа/);
    expect(en?.gloss.toLowerCase()).toMatch(/father|dad/);
  });

  it("resolves English tokens for the English course", () => {
    const ru = lookupWordHint("breakfast", "ru", "english");
    expect(ru?.gloss.toLowerCase()).toMatch(/завтрак/);
  });

  it("returns null for unknown tokens", () => {
    expect(lookupWordHint("xyzzy123", "ru", "spanish")).toBeNull();
  });

  it("does not map a lone token to an unrelated multi-word idiom", () => {
    const tres = lookupWordHint("tres", "ru", "spanish");
    expect(tres?.lemma).toBe("tres");
    expect(tres?.gloss.toLowerCase()).toMatch(/три/);
    expect(tres?.gloss).not.toMatch(/носа|burro/i);

    const las = lookupWordHint("las", "ru", "spanish");
    expect(las).toBeNull();

    const ver = lookupWordHint("ver", "ru", "spanish");
    if (ver) {
      expect(ver.lemma).not.toMatch(/burro/);
      expect(ver.gloss).not.toMatch(/носа/);
    }
  });
});
