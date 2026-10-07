import { describe, expect, it } from "vitest";
import {
  interfaceSpeechLang,
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
