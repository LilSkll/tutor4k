import { describe, expect, it } from "vitest";
import {
  asGrammarSlug,
  resolveLessonSlug,
  sanitizeTutorMessages,
  shouldUseStaticGrammarFallback,
} from "@/server/ai/tutor-request";

describe("asGrammarSlug", () => {
  it("accepts a real topic slug", () => {
    expect(asGrammarSlug("ser-estar")).toBe("ser-estar");
  });

  it("rejects an unknown-looking or malformed slug", () => {
    expect(asGrammarSlug("../etc/passwd")).toBeNull();
    expect(asGrammarSlug("not a slug")).toBeNull();
    expect(asGrammarSlug("")).toBeNull();
    expect(asGrammarSlug(null)).toBeNull();
  });
});

describe("resolveLessonSlug", () => {
  const getTopic = (slug: string) =>
    slug === "ser-estar" ? { slug } : undefined;

  it("returns null for a well-formed slug that is not on the course", () => {
    expect(resolveLessonSlug("totally-unknown-topic", getTopic)).toBeNull();
  });

  it("returns the slug when the course has that topic", () => {
    expect(resolveLessonSlug("ser-estar", getTopic)).toBe("ser-estar");
  });
});

describe("sanitizeTutorMessages", () => {
  it("keeps the last 24 user/assistant messages and clips content", () => {
    const raw = Array.from({ length: 30 }, (_, i) => ({
      role: i % 2 === 0 ? ("user" as const) : ("assistant" as const),
      content: `m${i}`,
    }));
    const out = sanitizeTutorMessages(raw);
    expect(out).toHaveLength(24);
    expect(out[0]?.content).toBe("m6");
  });
});

describe("shouldUseStaticGrammarFallback", () => {
  it("is true when the model failed and a grammar article is available", () => {
    expect(
      shouldUseStaticGrammarFallback("😔 Извините, я не смог", "article"),
    ).toBe(true);
    expect(shouldUseStaticGrammarFallback("⚠️ AI service", "article")).toBe(
      true,
    );
  });

  it("is false without grounding or on a live reply", () => {
    expect(shouldUseStaticGrammarFallback("😔 Извините", null)).toBe(false);
    expect(shouldUseStaticGrammarFallback("El/la go before nouns.", "article")).toBe(
      false,
    );
  });
});
