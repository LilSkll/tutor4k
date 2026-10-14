import { describe, expect, it } from "vitest";
import { isTrustedAuthOrigin, trustedAuthOrigins } from "@/lib/auth-origin";

describe("auth-origin", () => {
  it("trusts canonical .com and spanishwithpavel.vercel.app", () => {
    expect(isTrustedAuthOrigin("https://spanishwithpavel.com")).toBe(true);
    expect(isTrustedAuthOrigin("https://spanishwithpavel.vercel.app")).toBe(
      true,
    );
    expect(isTrustedAuthOrigin("https://spanish-tutor-psi.vercel.app")).toBe(
      true,
    );
    expect(isTrustedAuthOrigin("http://localhost:3000")).toBe(true);
  });

  it("rejects unrelated hosts", () => {
    expect(isTrustedAuthOrigin("https://evil.example.com")).toBe(false);
    expect(isTrustedAuthOrigin("https://random-app.vercel.app")).toBe(false);
  });

  it("includes built-in origins without env", () => {
    const list = trustedAuthOrigins();
    expect(list).toContain("https://spanishwithpavel.com");
    expect(list).toContain("https://spanishwithpavel.vercel.app");
  });
});
