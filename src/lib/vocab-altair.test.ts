import { describe, expect, it } from "vitest";
import {
  VOCAB_TOPIC_ALTAIR_ASSETS,
  VOCAB_TOPIC_ALTAIR_ASSETS_BY_COURSE,
  assignVocabAltairSrcs,
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

  it("is deterministic per slug+course and mixes course into the hash", () => {
    expect(getVocabTopicAltairSrc("same-slug", "spanish")).toBe(
      getVocabTopicAltairSrc("same-slug", "spanish"),
    );
    expect(hashTopicSlugToUint32("alpha", "spanish")).not.toBe(
      hashTopicSlugToUint32("alpha", "russian"),
    );
    const a = getVocabTopicAltairSrc("alpha", "russian");
    const b = getVocabTopicAltairSrc("beta", "russian");
    expect(a.startsWith("/altair/russian/")).toBe(true);
    expect(b.startsWith("/altair/russian/")).toBe(true);
  });

  it("avoids identical stickers for left/above neighbors in a 3-col grid", () => {
    const slugs = Array.from({ length: 24 }, (_, i) => `topic-${i}-seed`);
    const map = assignVocabAltairSrcs(slugs, "spanish", 3);
    const cols = 3;
    for (let i = 0; i < slugs.length; i++) {
      const src = map[slugs[i]!]!;
      if (i % cols !== 0) {
        expect(src).not.toBe(map[slugs[i - 1]!]);
      }
      if (i >= cols) {
        expect(src).not.toBe(map[slugs[i - cols]!]);
      }
    }
  });
});
