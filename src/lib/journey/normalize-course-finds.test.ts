import { describe, expect, it } from "vitest";
import {
  emptyCourseFinds,
  normalizeCourseFinds,
} from "@/config/journey/easter-eggs";

describe("normalizeCourseFinds", () => {
  it("keeps chapterCerts and merges legacy chapterBadges", () => {
    const raw = {
      ...emptyCourseFinds(),
      chapterBadges: ["chapter-1-despertar", "chapter-2-primer-dialogo"],
      chapterCerts: [
        {
          slug: "chapter-1-despertar",
          level: "A1" as const,
          number: 1,
          title: "Awakening",
          titleNative: "El Despertar",
          at: "2026-01-01T00:00:00.000Z",
        },
      ],
      levelCerts: ["A1" as const],
      courseCertAt: "2026-02-01T00:00:00.000Z",
    };
    const n = normalizeCourseFinds(raw);
    expect(n.levelCerts).toEqual(["A1"]);
    expect(n.courseCertAt).toBe("2026-02-01T00:00:00.000Z");
    expect(n.chapterCerts.map((c) => c.slug)).toEqual([
      "chapter-1-despertar",
      "chapter-2-primer-dialogo",
    ]);
    expect(n.chapterCerts[0].titleNative).toBe("El Despertar");
  });

  it("survives empty / missing fields after reset-style empty progress", () => {
    const n = normalizeCourseFinds({
      eggs: [],
      chapterBadges: ["eng-ch1-first-steps"],
      chapterCerts: [],
      levelCerts: ["A1"],
      courseCertAt: null,
    });
    expect(n.chapterCerts).toHaveLength(1);
    expect(n.levelCerts).toEqual(["A1"]);
  });
});
