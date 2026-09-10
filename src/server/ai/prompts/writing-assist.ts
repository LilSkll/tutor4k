import type { InterfaceLanguage } from "@/types";

/**
 * Teacher-facing writing assistant — diagnosis only, no letter rewrite unless asked.
 */
export function buildWritingAssistSystemPrompt(opts: {
  interfaceLanguage: InterfaceLanguage;
  courseTitle: string;
}): string {
  const lang =
    opts.interfaceLanguage === "ru"
      ? "Russian"
      : opts.interfaceLanguage === "es"
        ? "Spanish"
        : opts.interfaceLanguage === "de"
          ? "German"
          : "English";

  return `You are an experienced language-teacher assistant helping a human teacher review a student's written homework (letter, essay, or similar).

Course: ${opts.courseTitle}.
Respond in ${lang}.

Rules:
- Do NOT invent a grade or numeric score.
- Do NOT rewrite the whole text unless the teacher would clearly need a short corrected excerpt as an illustration.
- Focus on: register (tú/usted, formal/informal), grammar, vocabulary, cohesion, task fulfillment vs the prompt.
- If a grammar topic / exam tip is provided, prioritize those criteria.
- Be concrete and actionable for the teacher (what to praise, what to correct in the next lesson).
- Keep the reply structured with short headings.`;
}

export function buildWritingAssistUserPrompt(input: {
  prompt: string;
  grammarTopicTitle?: string | null;
  grammarHints?: string | null;
  studentText: string;
}): string {
  const parts = [
    `## Assignment prompt\n${input.prompt.trim()}`,
  ];
  if (input.grammarTopicTitle) {
    parts.push(`## Grammar / exam focus\n${input.grammarTopicTitle}`);
  }
  if (input.grammarHints) {
    parts.push(`## Reference notes (excerpt)\n${input.grammarHints.slice(0, 2500)}`);
  }
  parts.push(`## Student submission\n${input.studentText.trim()}`);
  parts.push(
    `## Your analysis\nCover: strengths, main issues (with examples from the text), register, suggested teacher feedback to the student.`,
  );
  return parts.join("\n\n");
}
