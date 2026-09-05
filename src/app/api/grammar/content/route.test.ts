import { beforeEach, describe, expect, it, vi } from "vitest";
import { NextRequest } from "next/server";

const getLocalizedGrammarArticle = vi.hoisted(() => vi.fn());

vi.mock("@/server/grammar/localize-content", () => ({
  getLocalizedGrammarArticle,
}));

import { GET } from "@/app/api/grammar/content/route";

describe("GET /api/grammar/content", () => {
  beforeEach(() => {
    getLocalizedGrammarArticle.mockReset();
  });

  it("rejects a missing or malformed slug without loading an article", async () => {
    const missing = await GET(
      new NextRequest("http://localhost/api/grammar/content"),
    );
    const bad = await GET(
      new NextRequest(
        "http://localhost/api/grammar/content?slug=not%20a%20slug",
      ),
    );

    expect(missing.status).toBe(400);
    expect(bad.status).toBe(400);
    expect(getLocalizedGrammarArticle).not.toHaveBeenCalled();
  });
});
