import { describe, expect, it, beforeEach } from "vitest";
import {
  clearDailySeen,
  readDailySeen,
  rememberDailySeen,
} from "@/lib/daily-seen";

const memory = new Map<string, string>();

beforeEach(() => {
  memory.clear();
  Object.defineProperty(globalThis, "localStorage", {
    configurable: true,
    value: {
      getItem: (k: string) => memory.get(k) ?? null,
      setItem: (k: string, v: string) => {
        memory.set(k, v);
      },
      clear: () => memory.clear(),
      removeItem: (k: string) => {
        memory.delete(k);
      },
    },
  });
  Object.defineProperty(globalThis, "window", {
    configurable: true,
    value: globalThis,
  });
});

describe("daily-seen", () => {
  it("starts empty and remembers ids across reads", () => {
    const a = readDailySeen("2026-10-08", "chapter-8");
    expect(a.ids).toEqual([]);
    expect(a.run).toBe(0);
    rememberDailySeen("2026-10-08", "chapter-8", ["p1", "p2"], a);
    const b = readDailySeen("2026-10-08", "chapter-8");
    expect(b.ids).toEqual(["p1", "p2"]);
    expect(b.run).toBe(1);
  });

  it("resets when the chapter or date changes", () => {
    rememberDailySeen(
      "2026-10-08",
      "chapter-8",
      ["p1"],
      readDailySeen("2026-10-08", "chapter-8"),
    );
    expect(readDailySeen("2026-10-09", "chapter-8").ids).toEqual([]);
    expect(readDailySeen("2026-10-08", "chapter-9").ids).toEqual([]);
  });

  it("clearDailySeen wipes the store", () => {
    rememberDailySeen(
      "2026-10-08",
      "chapter-8",
      ["p1"],
      readDailySeen("2026-10-08", "chapter-8"),
    );
    clearDailySeen("2026-10-08", "chapter-8");
    expect(readDailySeen("2026-10-08", "chapter-8").ids).toEqual([]);
  });
});
