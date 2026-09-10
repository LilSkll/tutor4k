import { describe, expect, it } from "vitest";
import { isOffTopicForCourse } from "@/server/ai/prompts/domain-guard";
import type { CourseKeywords } from "@/types";

const spanishKw: CourseKeywords = {
  onTopic: ["español", "spanish", "ser", "estar", "subjuntivo"],
  offTopic: ["python", "javascript"],
  greetings: ["hola", "hi", "hello"],
};

const englishKw: CourseKeywords = {
  onTopic: ["english", "present perfect", "ielts"],
  offTopic: ["español", "spanish grammar", "python"],
  greetings: ["hello", "hi"],
};

describe("isOffTopicForCourse", () => {
  it("refuses generic capital trivia despite weak what-is shell", () => {
    expect(
      isOffTopicForCourse("What is the capital of France?", spanishKw),
    ).toBe(true);
    expect(
      isOffTopicForCourse("¿Cuál es la capital de Francia?", spanishKw),
    ).toBe(true);
  });

  it("allows grammar what-is questions", () => {
    expect(isOffTopicForCourse("What is the subjunctive?", spanishKw)).toBe(
      false,
    );
    expect(isOffTopicForCourse("What is present perfect?", englishKw)).toBe(
      false,
    );
    expect(isOffTopicForCourse("Что такое subjuntivo?", spanishKw)).toBe(false);
  });

  it("refuses coding on language courses", () => {
    expect(isOffTopicForCourse("Write me a Python script", englishKw)).toBe(
      true,
    );
  });

  it("allows greetings", () => {
    expect(isOffTopicForCourse("hola", spanishKw)).toBe(false);
  });
});
