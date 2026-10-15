import { beforeEach, describe, expect, it, vi } from "vitest";

const from = vi.hoisted(() => vi.fn());
const rpc = vi.hoisted(() => vi.fn());

vi.mock("@/lib/supabase-admin", () => ({
  createSupabaseAdminClient: () => ({ from, rpc }),
}));

vi.mock("@/lib/supabase-server", () => ({
  createSupabaseServerClient: async () => ({ from, rpc }),
}));

import {
  getCachedTutorResponse,
  isCacheable,
  setCachedTutorResponse,
  shouldUseSharedTutorCache,
} from "@/server/rag/tutor-cache";

describe("shouldUseSharedTutorCache", () => {
  it("allows standalone FAQ turns only", () => {
    expect(shouldUseSharedTutorCache([{ role: "user" }])).toBe(true);
    expect(
      shouldUseSharedTutorCache([
        { role: "user" },
        { role: "assistant" },
        { role: "user" },
      ]),
    ).toBe(false);
  });
});

describe("isCacheable", () => {
  it("rejects personal / homework / progress prompts", () => {
    expect(isCacheable("проверь мой ответ на упражнение")).toBe(false);
    expect(isCacheable("what should I study next in my chapter")).toBe(false);
    expect(isCacheable("исправь ошибку в моём предложении")).toBe(false);
  });

  it("allows generic grammar FAQ prompts", () => {
    expect(isCacheable("в чём разница между ser и estar")).toBe(true);
  });
});

describe("shared tutor cache get/set", () => {
  beforeEach(() => {
    from.mockReset();
    rpc.mockReset();
  });

  it("returns a stored FAQ answer without requiring another AI call", async () => {
    const maybeSingle = vi.fn(async () => ({
      data: { id: "c1", response: "Ser = identity. Estar = state.", created_at: new Date().toISOString() },
      error: null,
    }));
    from.mockImplementation((table: string) => {
      expect(table).toBe("tutor_cache");
      return {
        select: () => ({
          eq: () => ({
            gte: () => ({ maybeSingle }),
          }),
        }),
      };
    });
    rpc.mockResolvedValue({ data: null, error: null });

    const hit = await getCachedTutorResponse(
      "в чём разница между ser и estar",
      "A1",
      "spanish",
      "ru",
    );
    expect(hit).toBe("Ser = identity. Estar = state.");
    expect(maybeSingle).toHaveBeenCalledTimes(1);
  });

  it("does not store personal homework answers in the shared cache", async () => {
    const upsert = vi.fn();
    from.mockReturnValue({ upsert });

    await setCachedTutorResponse(
      "проверь мой ответ на упражнение с глаголами",
      "A2",
      "Вот исправление твоего ответа…",
      "spanish",
      "ru",
    );

    expect(upsert).not.toHaveBeenCalled();
  });

  it("stores a generic FAQ answer for reuse", async () => {
    const upsert = vi.fn(async () => ({ data: null, error: null }));
    from.mockReturnValue({ upsert });

    await setCachedTutorResponse(
      "в чём разница между ser и estar",
      "A1",
      "Ser — суть; estar — состояние.",
      "spanish",
      "ru",
    );

    expect(upsert).toHaveBeenCalledTimes(1);
    expect(upsert).toHaveBeenCalledWith(
      expect.objectContaining({
        response: expect.stringContaining("Ser"),
      }),
      expect.anything(),
    );
  });
});
