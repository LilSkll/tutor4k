import { describe, expect, it } from "vitest";
import { ENGLISH_CHAPTERS } from "@/config/courses/english/chapters";
import { ENGLISH_GRAMMAR } from "@/config/courses/english/grammar";
import {
  ENGLISH_CHAPTER_GRAMMAR_ORDER,
  ENGLISH_GRAMMAR_CURRICULUM_ORDER,
} from "@/config/english-curriculum-order";
import { sortEnglishGrammarByCurriculum } from "@/lib/grammar-curriculum-sort";

describe("English curriculum", () => {
  it("starts with be, then articles, then possessives", () => {
    const sorted = sortEnglishGrammarByCurriculum(ENGLISH_GRAMMAR);
    const a1 = sorted.filter((t) => t.level === "A1").map((t) => t.slug);
    expect(a1[0]).toBe("eng-a1-be");
    expect(a1[1]).toBe("eng-a1-articles-basics");
    expect(a1[2]).toBe("eng-a1-possessives");
  });

  it("has 43 chapters aligned with chapter grammar order", () => {
    expect(ENGLISH_CHAPTERS.length).toBe(43);
    expect(ENGLISH_CHAPTER_GRAMMAR_ORDER.length).toBe(43);
    const fromChapters = ENGLISH_CHAPTERS.map((c) => c.grammarTopic);
    expect(fromChapters).toEqual([...ENGLISH_CHAPTER_GRAMMAR_ORDER]);
  });

  it("includes every curriculum slug in ENGLISH_GRAMMAR", () => {
    const slugs = new Set(ENGLISH_GRAMMAR.map((t) => t.slug));
    for (const slug of ENGLISH_GRAMMAR_CURRICULUM_ORDER) {
      expect(slugs.has(slug)).toBe(true);
    }
  });
});
