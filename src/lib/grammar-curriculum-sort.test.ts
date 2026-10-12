import { describe, expect, it } from "vitest";
import { CHAPTERS } from "@/config/chapters";
import { GRAMMAR_TOPICS } from "@/config/grammar";
import {
  SPANISH_CHAPTER_GRAMMAR_ORDER,
  SPANISH_GRAMMAR_CURRICULUM_ORDER,
} from "@/config/grammar-curriculum-order";
import { sortGrammarTopicsByCurriculum } from "@/lib/grammar-curriculum-sort";

describe("sortGrammarTopicsByCurriculum", () => {
  it("starts with ser/estar, then presente, then articulos", () => {
    const sorted = sortGrammarTopicsByCurriculum(GRAMMAR_TOPICS);
    const a1 = sorted.filter((t) => t.level === "A1").map((t) => t.slug);
    expect(a1[0]).toBe("a1-ser-estar");
    expect(a1[1]).toBe("a1-presente");
    expect(a1[2]).toBe("a1-articulos");
  });

  it("includes every curriculum slug from the Spanish course", () => {
    const slugs = new Set(GRAMMAR_TOPICS.map((t) => t.slug));
    for (const slug of SPANISH_GRAMMAR_CURRICULUM_ORDER) {
      expect(slugs.has(slug)).toBe(true);
    }
    expect(SPANISH_GRAMMAR_CURRICULUM_ORDER.length).toBe(45);
    expect(CHAPTERS.length).toBe(45);
  });

  it("keeps chapter journey grammar topics in the same relative order", () => {
    const fromChapters = CHAPTERS.map((c) => c.grammarTopic);
    expect(fromChapters).toEqual([...SPANISH_CHAPTER_GRAMMAR_ORDER]);

    const rank = new Map<string, number>(
      SPANISH_GRAMMAR_CURRICULUM_ORDER.map((slug, index) => [slug, index]),
    );
    let last = -1;
    for (const slug of fromChapters) {
      const idx = rank.get(slug) ?? -1;
      expect(idx).toBeGreaterThan(last);
      last = idx;
    }
  });
});
