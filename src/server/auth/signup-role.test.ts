import { describe, expect, it } from "vitest";
import { roleFromAuthMetadata } from "@/server/auth/signup-role";

describe("roleFromAuthMetadata", () => {
  it("reads teacher from metadata", () => {
    expect(roleFromAuthMetadata({ role: "teacher" })).toBe("teacher");
    expect(roleFromAuthMetadata({ role: "Teacher" })).toBe("teacher");
  });

  it("defaults unknown to null (caller keeps DB role)", () => {
    expect(roleFromAuthMetadata({})).toBe(null);
    expect(roleFromAuthMetadata({ role: "school_admin" })).toBe(null);
    expect(roleFromAuthMetadata(null)).toBe(null);
  });

  it("reads student", () => {
    expect(roleFromAuthMetadata({ role: "student" })).toBe("student");
  });
});
