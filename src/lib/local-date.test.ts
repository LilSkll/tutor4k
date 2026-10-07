import { describe, expect, it } from "vitest";
import {
  localDateKey,
  parseLocalDateKey,
  previousDateKey,
  shiftLocalDateKey,
} from "@/lib/local-date";

describe("localDateKey", () => {
  it("formats YYYY-MM-DD in local time", () => {
    const d = new Date(2026, 9, 8, 1, 0, 0); // Oct 8 local
    expect(localDateKey(d)).toBe("2026-10-08");
  });
});

describe("previousDateKey", () => {
  it("steps back one calendar day", () => {
    expect(previousDateKey("2026-10-08")).toBe("2026-10-07");
    expect(previousDateKey("2026-03-01")).toBe("2026-02-28");
  });
});

describe("parseLocalDateKey", () => {
  it("rejects junk", () => {
    expect(parseLocalDateKey("nope")).toBeNull();
    expect(parseLocalDateKey("2026-10-08")).toBe("2026-10-08");
  });
});

describe("shiftLocalDateKey", () => {
  it("shifts relative to today", () => {
    const today = localDateKey();
    expect(shiftLocalDateKey(0)).toBe(today);
    expect(shiftLocalDateKey(-1)).toBe(previousDateKey(today));
  });
});
