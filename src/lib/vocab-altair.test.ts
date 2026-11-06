import { describe, expect, it } from "vitest";
import {
  VOCAB_TOPIC_ALTAIR_ASSETS,
  getVocabTopicAltairSrc,
  hashTopicSlugToUint32,
} from "@/lib/vocab-altair";

describe("vocab Altair assets", () => {
  it("returns only known public paths", () => {
    expect(VOCAB_TOPIC_ALTAIR_ASSETS).toEqual([
      "/hippogriff-icon.webp",
      "/hippogriff-hero-768.webp",
      "/landing-founder-hippogriff.jpg",
    ]);
    for (const slug of ["a", "food-basics", "ru-a1-greetings"]) {
      expect(VOCAB_TOPIC_ALTAIR_ASSETS).toContain(getVocabTopicAltairSrc(slug));
    }
  });

  it("is deterministic per slug", () => {
    expect(getVocabTopicAltairSrc("same-slug")).toBe(
      getVocabTopicAltairSrc("same-slug"),
    );
    const a = getVocabTopicAltairSrc("alpha");
    const b = getVocabTopicAltairSrc("beta");
    expect(hashTopicSlugToUint32("alpha")).not.toBe(
      hashTopicSlugToUint32("beta"),
    );
    expect([a, b].every((s) => VOCAB_TOPIC_ALTAIR_ASSETS.includes(s))).toBe(
      true,
    );
  });
});
