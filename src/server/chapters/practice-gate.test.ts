import { describe, expect, it } from "vitest";
import { requiredPracticeCount } from "./practice-gate";

describe("requiredPracticeCount", () => {
  it("requires a full session when the bank is large enough", () => {
    expect(requiredPracticeCount(40, 5)).toBe(5);
  });

  it("caps at bank size when the bank is smaller than a session", () => {
    expect(requiredPracticeCount(3, 5)).toBe(3);
  });

  it("skips the gate for empty banks", () => {
    expect(requiredPracticeCount(0, 5)).toBe(0);
  });

  it("treats invalid sizes as zero", () => {
    expect(requiredPracticeCount(NaN, 5)).toBe(0);
    expect(requiredPracticeCount(10, 0)).toBe(0);
    expect(requiredPracticeCount(-1, 5)).toBe(0);
  });
});
