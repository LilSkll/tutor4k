import { describe, expect, it } from "vitest";
import {
  courseSpeechLang,
  extractQuotedPhrases,
  interfaceSpeechLang,
  pickSpeechPayload,
  plainTextForSpeech,
} from "@/lib/speak-text";

describe("plainTextForSpeech", () => {
  it("strips light markdown", () => {
    expect(plainTextForSpeech("**Hola** `mundo` — [link](https://x)")).toBe(
      "Hola mundo — link",
    );
  });
});

describe("interfaceSpeechLang", () => {
  it("maps UI languages to BCP-47 tags", () => {
    expect(interfaceSpeechLang("ru")).toBe("ru-RU");
    expect(interfaceSpeechLang("en")).toBe("en-US");
    expect(interfaceSpeechLang("es")).toBe("es-ES");
    expect(interfaceSpeechLang("de")).toBe("de-DE");
  });
});

describe("courseSpeechLang", () => {
  it("maps course ids", () => {
    expect(courseSpeechLang("spanish")).toBe("es-ES");
    expect(courseSpeechLang("english")).toBe("en-US");
    expect(courseSpeechLang("russian")).toBe("ru-RU");
  });
});

describe("pickSpeechPayload", () => {
  it("speaks quoted L2 phrases in course language", () => {
    const payload = pickSpeechPayload(
      'Попробуй сказать «Buenos días» и `¿Cómo estás?`.',
      "ru",
      "spanish",
    );
    expect(payload.langTag).toBe("es-ES");
    expect(payload.text).toContain("Buenos días");
    expect(payload.text).toContain("¿Cómo estás?");
  });

  it("falls back to full reply in UI language when no L2 quotes", () => {
    const payload = pickSpeechPayload(
      "Сегодня потренируем приветствия без примеров в кавычках.",
      "ru",
      "spanish",
    );
    expect(payload.langTag).toBe("ru-RU");
    expect(payload.text).toContain("приветствия");
  });

  it("extracts guillemets and backticks", () => {
    expect(extractQuotedPhrases("Скажи «hola» и `adiós`")).toEqual([
      "hola",
      "adiós",
    ]);
  });
});
