import type { InterfaceLanguage } from "@/types";

/**
 * Bank explanations stay as authored (RU for Spanish, EN for English).
 * Do not call a model on every answer check — chapter practice is static.
 * Localized praise/mistake wrappers live in `formatBankTutorFeedback`.
 */
export async function localizeExerciseExplanation(input: {
  explanation: string;
  interfaceLanguage: InterfaceLanguage;
  exerciseId?: string;
  courseId?: string;
}): Promise<string> {
  void input.interfaceLanguage;
  void input.exerciseId;
  void input.courseId;
  return input.explanation?.trim() ?? "";
}
