import { describe, expect, it } from "vitest";
import { courseSpeechLang, plainTextForSpeech } from "@/lib/speak-text";

describe("plainTextForSpeech", () => {
  it("strips light markdown", () => {
    expect(plainTextForSpeech("**Hola** `mundo` — [link](https://x)")).toBe(
      "Hola mundo — link",
    );
  });
});

describe("courseSpeechLang", () => {
  it("maps course ids", () => {
    expect(courseSpeechLang("english")).toBe("en");
    expect(courseSpeechLang("spanish")).toBe("es");
    expect(courseSpeechLang("russian")).toBe("ru");
  });
});
