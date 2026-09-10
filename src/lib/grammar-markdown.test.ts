import { describe, expect, it } from "vitest";
import { grammarTheoryPagesFromMarkdown } from "@/lib/grammar-markdown";

describe("grammarTheoryPagesFromMarkdown", () => {
  it("merges lead teaser into the first ## page", () => {
    const md = `> **Перед этой темой:** porque и **pero**. **В этой теме:** связки.

## Связки текста

- **sin embargo** — однако
- **por lo tanto** — следовательно
`;
    const pages = grammarTheoryPagesFromMarkdown(md);
    expect(pages).toHaveLength(1);
    expect(pages[0]).toContain("Перед этой темой");
    expect(pages[0]).toContain("## Связки текста");
    expect(pages[0]).toContain("sin embargo");
  });

  it("keeps later ## sections as separate pages", () => {
    const md = `> Lead.

## First

rules

## Second

more
`;
    const pages = grammarTheoryPagesFromMarkdown(md);
    expect(pages).toHaveLength(2);
    expect(pages[0]).toContain("Lead");
    expect(pages[0]).toContain("## First");
    expect(pages[1]).toContain("## Second");
    expect(pages[1]).not.toContain("Lead");
  });
});
