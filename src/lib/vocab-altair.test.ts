import { describe, expect, it } from "vitest";
import {
  VOCAB_TOPIC_ALTAIR_ASSETS,
  VOCAB_TOPIC_ALTAIR_ASSETS_BY_COURSE,
  getVocabTopicAltairSrc,
  hashTopicSlugToUint32,
} from "@/lib/vocab-altair";

describe("vocab Altair assets", () => {
  it("returns course-specific sticker paths", () => {
    for (const courseId of ["spanish", "russian", "english"] as const) {
      const pack = VOCAB_TOPIC_ALTAIR_ASSETS_BY_COURSE[courseId]!;
      expect(pack.length).toBeGreaterThan(5);
      for (const src of pack) {
        expect(src.startsWith("/altair/")).toBe(true);
        expect(src.endsWith(".webp")).toBe(true);
      }
    }
    expect(getVocabTopicAltairSrc("ru-a1-greetings", "russian")).toMatch(
      /^\/altair\/russian\//,
    );
    expect(getVocabTopicAltairSrc("a1-familia", "spanish")).toMatch(
      /^\/altair\/spanish\//,
    );
    expect(VOCAB_TOPIC_ALTAIR_ASSETS.length).toBeGreaterThan(20);
  });

  it("is deterministic per slug within a course", () => {
    expect(getVocabTopicAltairSrc("same-slug", "spanish")).toBe(
      getVocabTopicAltairSrc("same-slug", "spanish"),
    );
    const a = getVocabTopicAltairSrc("alpha", "russian");
    const b = getVocabTopicAltairSrc("beta", "russian");
    expect(hashTopicSlugToUint32("alpha")).not.toBe(
      hashTopicSlugToUint32("beta"),
    );
    expect(a.startsWith("/altair/russian/")).toBe(true);
    expect(b.startsWith("/altair/russian/")).toBe(true);
  });
});
