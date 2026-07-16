import type { InterfaceLanguage, Level } from "@/types";

// =====================================================================
// Prompt Registry
// ---------------------------------------------------------------------
// Maps courseId → dedicated prompt builder.
// Options are shared across CourseConfig.buildPrompt and this registry.
// =====================================================================

export interface PromptBuilderOptions {
  level?: Level | null;
  interfaceLanguage?: InterfaceLanguage;
  userName?: string | null;
  retrievedContext?: string | null;
  /** Markdown TeacherContext block from buildTeacherContext().promptBlock */
  learnerContext?: string | null;
}

export type PromptBuilder = (options: PromptBuilderOptions) => string;

const PROMPT_LOADERS: Record<string, () => Promise<PromptBuilder>> = {
  spanish: () =>
    import("@/server/ai/prompts/spanish").then((m) => m.buildSpanishPrompt),
  english: () =>
    import("@/server/ai/prompts/english").then((m) => m.buildEnglishPrompt),
  russian: () =>
    import("@/server/ai/prompts/russian").then((m) => m.buildRussianPrompt),
};

const cache = new Map<string, PromptBuilder>();

/**
 * Get the prompt builder for a course.
 * Each course has its own builder — Spanish prompt is NEVER used for English.
 */
export async function getPromptBuilder(
  courseId: string,
): Promise<PromptBuilder> {
  if (cache.has(courseId)) return cache.get(courseId)!;

  const loader = PROMPT_LOADERS[courseId];
  if (!loader) {
    throw new Error(`No prompt builder registered for course: ${courseId}`);
  }

  const builder = await loader();
  cache.set(courseId, builder);
  return builder;
}

export function getAvailablePromptIds(): string[] {
  return Object.keys(PROMPT_LOADERS);
}
