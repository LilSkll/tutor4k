import { describe, expect, it } from "vitest";
import { getCourse } from "@/config/courses";
import { getGrammarTopicTitle } from "@/lib/grammar-display";
import { STUDENT_DICTS } from "@/lib/i18n/student-dicts";
import { resolveCourseTopicLabel } from "@/lib/course-topic-label";
import { toGrammarTopicMeta } from "@/lib/grammar-topic-meta";

const UI_LANGS = ["ru", "en", "es", "de"] as const;

describe("lesson dialogue placeholder i18n", () => {
  it("placeholder templates use {topic} and do not leak Spanish gustar", () => {
    for (const lang of UI_LANGS) {
      const tmpl = STUDENT_DICTS[lang]["lesson.dialoguePlaceholder"];
      expect(tmpl, lang).toMatch(/\{topic\}/);
      expect(tmpl.toLowerCase(), lang).not.toMatch(/me gusta/);
      expect(tmpl.toLowerCase(), lang).not.toMatch(/me gustan/);
    }
  });

  it("resolveCourseTopicLabel for Russian course does not return Spanish gustar strings", async () => {
    const course = await getCourse("russian");
    for (const ch of course.getChapters()) {
      const label = resolveCourseTopicLabel(
        ch.grammarTopic,
        course,
        "ru",
        "russian",
      );
      if (label) {
        expect(label.toLowerCase()).not.toMatch(/me gusta/);
        expect(label.toLowerCase()).not.toMatch(/me gustan/);
      }
    }
  });

  it("grammar topic titles from meta never surface gustar placeholders for RU UI", async () => {
    const course = await getCourse("russian");
    for (const gt of course.getGrammar()) {
      const meta = toGrammarTopicMeta(gt);
      const title = getGrammarTopicTitle(meta, "ru");
      expect(title.toLowerCase()).not.toMatch(/me gusta/);
      expect(title.toLowerCase()).not.toMatch(/me gustan/);
    }
  });
});
