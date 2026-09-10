import { describe, expect, it } from "vitest";
import { getTopicBySlug } from "@/config/grammar";

describe("getTopicBySlug", () => {
  it("resolves legacy b1-preposiciones-por-para-2 alias", () => {
    const topic = getTopicBySlug("b1-preposiciones-por-para-2");
    expect(topic?.slug).toBe("b1-pronombre-se");
    expect(topic?.titleEs).toBe("Pronombre SE");
  });
});
