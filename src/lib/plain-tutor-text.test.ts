import { describe, expect, it } from "vitest";
import { plainTutorText } from "@/lib/plain-tutor-text";

describe("plainTutorText", () => {
  it("unwraps bold without leaving asterisks", () => {
    expect(
      plainTutorText(
        "Нужно было: «Они вернулись поздно» → **Volvieron tarde** (pretérito).",
      ),
    ).toBe(
      "Нужно было: «Они вернулись поздно» → Volvieron tarde (pretérito).",
    );
  });

  it("strips orphan markers and backticks", () => {
    expect(plainTutorText("Ответ: `soy` **")).toBe("Ответ: soy");
  });

  it("keeps guillemets and arrows", () => {
    expect(plainTutorText("«d» → ellos")).toBe("«d» → ellos");
  });
});
