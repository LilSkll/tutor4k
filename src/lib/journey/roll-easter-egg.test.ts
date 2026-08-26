import { describe, expect, it } from "vitest";
import { rollEasterEgg } from "@/lib/journey/roll-easter-egg";
import { courseLineForId } from "@/lib/journey/fill-completion-certificate";

describe("courseLineForId", () => {
  it("uses language course names, not the product brand", () => {
    expect(courseLineForId("spanish")).toBe("Spanish");
    expect(courseLineForId("english")).toBe("English");
    expect(courseLineForId("russian")).toBe("Russian");
  });
});

describe("rollEasterEgg", () => {
  it("awards perfect-run egg on 100% score", () => {
    const egg = rollEasterEgg({
      courseId: "spanish",
      chapterSlug: "chapter-1-despertar",
      scorePercent: 100,
      exercisesCompleted: 5,
      isReplay: false,
      ownedEggIds: new Set(),
    });
    expect(egg?.id).toBe("trigger-perfect-run");
  });

  it("does not re-award perfect-run if already owned", () => {
    // With perfect already owned, roll may return null or another egg — not perfect.
    const results = new Set<string | null>();
    for (let i = 0; i < 40; i++) {
      const egg = rollEasterEgg({
        courseId: "spanish",
        chapterSlug: "chapter-1-despertar",
        scorePercent: 100,
        exercisesCompleted: 5,
        isReplay: false,
        ownedEggIds: new Set(["trigger-perfect-run"]),
      });
      results.add(egg?.id ?? null);
    }
    expect(results.has("trigger-perfect-run")).toBe(false);
  });
});
