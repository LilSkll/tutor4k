import { describe, expect, it } from "vitest";
import { readdirSync, readFileSync } from "fs";
import { join } from "path";

/**
 * Russian lore text: pluralia tantum must take plural agreement.
 * e.g. «стоит ворота» → «стоят ворота».
 */
const PLURALIA =
  "ворота|врата|двери|сутки|сани|ножницы|очки|деньги|люди|дети";
const SG_BEFORE = `(?:стоит|лежал|висел|был|открыт|закрыт|готов|нужен|виден|поставлен)\\s+(?:${PLURALIA})\\b`;
const SG_AFTER = `(?:${PLURALIA})\\s+(?:стоит|лежит|висит|открывается|закрывается)\\b`;

describe("chapter stories — Russian number agreement", () => {
  const dir = join(__dirname, "data");
  const files = readdirSync(dir).filter((f) => f.endsWith(".json"));

  it("does not pair singular predicates with pluralia tantum", () => {
    const bad: string[] = [];
    const before = new RegExp(SG_BEFORE, "giu");
    const after = new RegExp(SG_AFTER, "giu");
    for (const f of files) {
      const ru = JSON.parse(readFileSync(join(dir, f), "utf8")).ru as
        | string
        | undefined;
      if (!ru) continue;
      for (const re of [before, after]) {
        re.lastIndex = 0;
        let m: RegExpExecArray | null;
        while ((m = re.exec(ru))) {
          bad.push(`${f}: «${m[0]}»`);
        }
      }
    }
    expect(bad, bad.join("\n")).toEqual([]);
  });
});
