import { describe, expect, it } from "vitest";
import { getChapterVocabPreview } from "@/lib/chapter-vocab";

describe("getChapterVocabPreview", () => {
  it("returns target-language words for spanish / english / russian chapters", async () => {
    const es = await getChapterVocabPreview(
      "spanish",
      "chapter-1-despertar",
      "a1-familia",
      "en",
    );
    expect(es.words.length).toBeGreaterThan(5);
    expect(es.words[0]!.word.toLowerCase()).toMatch(/familia|padre|madre|hermano/);

    const en = await getChapterVocabPreview(
      "english",
      "eng-ch1-first-steps",
      "eng-a1-personal-info",
      "ru",
    );
    expect(en.words.length).toBeGreaterThan(3);

    const ru = await getChapterVocabPreview(
      "russian",
      "ru-ch1-alphabet-greetings",
      "ru-a1-greetings",
      "es",
    );
    expect(ru.words.length).toBeGreaterThan(3);
    expect(ru.words.some((w) => /[А-Яа-яЁё]/.test(w.word))).toBe(true);
  });
});
