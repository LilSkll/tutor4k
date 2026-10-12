import { describe, expect, it } from "vitest";
import { ENGLISH_VOCAB } from "@/config/courses/english/vocabulary";
import { VOCAB_TOPICS } from "@/config/vocabulary-topics";
import { getWordDefinition, getWordGloss } from "@/lib/vocab-display";
import type { InterfaceLanguage } from "@/types";

const UI: InterfaceLanguage[] = ["ru", "en", "es", "de"];
const CYRILLIC = /[\u0400-\u04FF]/;

describe("vocab gloss/definition coverage", () => {
  it("Spanish course: non-RU UI never shows Cyrillic glosses", () => {
    let checked = 0;
    let empty = 0;
    for (const topic of VOCAB_TOPICS.slice(0, 40)) {
      for (const word of topic.words) {
        for (const lang of UI) {
          if (lang === "ru") continue;
          const gloss = getWordGloss(word, lang, "spanish");
          checked += 1;
          expect(gloss, `${word.word}/${lang}`).not.toMatch(CYRILLIC);
          if (!gloss.trim()) empty += 1;
          const def = getWordDefinition(word, lang, "spanish");
          if (def) expect(def).not.toMatch(CYRILLIC);
        }
      }
    }
    expect(checked).toBeGreaterThan(100);
    // Allow a tiny residue of truly unmapped lemmas.
    expect(empty / checked).toBeLessThan(0.02);
  });

  it("English course: non-RU UI never shows Cyrillic glosses", () => {
    let checked = 0;
    let empty = 0;
    for (const topic of ENGLISH_VOCAB) {
      for (const word of topic.words) {
        for (const lang of UI) {
          if (lang === "ru") continue;
          const gloss = getWordGloss(word, lang, "english");
          checked += 1;
          expect(gloss, `${word.word}/${lang}`).not.toMatch(CYRILLIC);
          if (!gloss.trim()) empty += 1;
          // Definition may be null when it only restated the gloss ("Blue." / "blue").
          const def = getWordDefinition(word, lang, "english");
          if (def) expect(def, `def ${word.word}/${lang}`).not.toMatch(CYRILLIC);
        }
      }
    }
    expect(checked).toBeGreaterThan(500);
    expect(empty).toBe(0);
  });
});
