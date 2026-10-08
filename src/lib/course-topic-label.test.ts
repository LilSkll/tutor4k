import { describe, expect, it } from "vitest";
import { resolveCourseTopicLabel } from "@/lib/course-topic-label";
import type { CourseConfig, GrammarTopic, VocabTopic } from "@/types";

function stubCourse(opts: {
  grammar?: GrammarTopic[];
  vocab?: VocabTopic[];
}): Pick<CourseConfig, "getGrammarTopic" | "getGrammar" | "getVocab"> {
  const grammar = opts.grammar ?? [];
  const vocab = opts.vocab ?? [];
  return {
    getGrammar: () => grammar,
    getGrammarTopic: (slug) => grammar.find((t) => t.slug === slug),
    getVocab: () => vocab,
  };
}

describe("resolveCourseTopicLabel", () => {
  it("localizes grammar slugs for RU UI", () => {
    const course = stubCourse({
      grammar: [
        {
          slug: "eng-a1-be",
          level: "A1",
          title: "Глагол be (am/is/are)",
          titleEs: "Verb be",
          category: "A1",
          summary: "be",
          content: "",
        },
      ],
    });
    expect(
      resolveCourseTopicLabel("eng-a1-be", course, "ru", "english"),
    ).toBe("Глагол be (am/is/are)");
  });

  it("hides unknown eng slugs in non-EN UI", () => {
    const course = stubCourse({});
    expect(
      resolveCourseTopicLabel("eng-a1-mystery", course, "ru", "english"),
    ).toBeNull();
  });

  it("humanizes unknown eng slugs in EN UI", () => {
    const course = stubCourse({});
    expect(
      resolveCourseTopicLabel("eng-a1-mystery", course, "en", "english"),
    ).toBe("a1 mystery");
  });

  it("never surfaces completed-chapter meta", () => {
    const course = stubCourse({});
    expect(
      resolveCourseTopicLabel(
        "completed chapter: Los Recuerdos",
        course,
        "ru",
        "spanish",
      ),
    ).toBeNull();
  });
});
