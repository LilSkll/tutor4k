import type { InterfaceLanguage, Level } from "@/types";

// =====================================================================
// Prompt Registry
// ---------------------------------------------------------------------
// Maps courseId → prompt builder function. Each course has its own
// system prompt. The orchestrator selects the prompt by courseId.
//
// Adding a new course's prompt = add one entry to REGISTRY.
// =====================================================================

export interface PromptBuilderOptions {
  level?: Level | null;
  interfaceLanguage?: InterfaceLanguage;
  userName?: string | null;
  retrievedContext?: string | null;
}

export type PromptBuilder = (options: PromptBuilderOptions) => string;

// Lazy loaders — each prompt module is only loaded when needed.
const PROMPT_LOADERS: Record<string, () => Promise<PromptBuilder>> = {
  spanish: () =>
    import("@/server/ai/prompts/universal").then((m) => (options) =>
      m.buildUniversalPrompt({
        ...options,
        targetLanguageName: "Spanish",
        targetLanguageCode: "es",
        textbookNames: "Дышлевая, Гонсалес-Алимова",
        examName: "DELE",
      })),
  // Future courses:
  // english: () => import("@/config/courses/english/prompt").then(m => m.buildEnglishPrompt),
  // russian: () => import("@/config/courses/russian/prompt").then(m => m.buildRussianPrompt),
};

const cache = new Map<string, PromptBuilder>();

/**
 * Get the prompt builder for a course.
 * Falls back to Spanish if the course is unknown.
 */
export async function getPromptBuilder(courseId: string): Promise<PromptBuilder> {
  if (cache.has(courseId)) return cache.get(courseId)!;

  const loader = PROMPT_LOADERS[courseId] ?? PROMPT_LOADERS["spanish"];
  const builder = await loader();
  cache.set(courseId, builder);
  return builder;
}

/**
 * Get a list of available prompt IDs.
 */
export function getAvailablePromptIds(): string[] {
  return Object.keys(PROMPT_LOADERS);
}
