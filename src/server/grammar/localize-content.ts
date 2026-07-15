import { getCourse } from "@/config/courses";
import { getStaticGrammarContent } from "@/config/grammar-content-localizations";
import { getInterfaceLanguageName } from "@/server/ai/prompts/interface-language";
import { generateAIResponse } from "@/server/ai/orchestrator";
import {
  getCachedTutorResponse,
  setCachedTutorResponse,
} from "@/server/rag/tutor-cache";
import type { GrammarTopic, InterfaceLanguage, Level } from "@/types";

function grammarCacheQuery(
  slug: string,
  courseId: string,
  interfaceLanguage: InterfaceLanguage,
): string {
  return `__grammar_article__ slug=${slug} course=${courseId} lang=${interfaceLanguage}`;
}

function buildLocalizeUserMessage(
  topic: GrammarTopic,
  interfaceLanguage: InterfaceLanguage,
  targetLanguageName: string,
): string {
  const ifaceName = getInterfaceLanguageName(interfaceLanguage);

  return `# Task
Rewrite the grammar reference article below as a complete Markdown lesson for learners.

# Output language
- ALL headings, explanations, rules, tips, and table headers: **${ifaceName}** only.
- ALL example sentences, conjugations, and words being taught: **${targetLanguageName}** only.
- Keep the same structure (headings, tables, blockquotes) as the source.
- Do not mention that this is a translation.
- Do not add meta commentary — output the article only.

# Topic
Title: ${topic.title}
Summary: ${topic.summary}
Level: ${topic.level}

# Source reference (explanatory text may be in another language — rewrite it in ${ifaceName})
${topic.content}`;
}

export async function getLocalizedGrammarArticle(input: {
  slug: string;
  courseId: string;
  interfaceLanguage: InterfaceLanguage;
  level?: Level | null;
  refresh?: boolean;
}): Promise<{ content: string; source: "native" | "static" | "cache" | "ai" }> {
  const course = await getCourse(input.courseId);
  const topic = course.getGrammarTopic(input.slug);

  if (!topic) {
    throw new Error("Grammar topic not found");
  }

  if (input.interfaceLanguage === "ru") {
    return { content: topic.content, source: "native" };
  }

  const staticContent = getStaticGrammarContent(
    input.slug,
    input.interfaceLanguage,
  );
  if (staticContent) {
    return { content: staticContent, source: "static" };
  }

  const cacheQuery = grammarCacheQuery(
    input.slug,
    input.courseId,
    input.interfaceLanguage,
  );

  if (!input.refresh) {
    const cached = await getCachedTutorResponse(
      cacheQuery,
      input.level ?? topic.level,
      input.courseId,
      input.interfaceLanguage,
    );
    if (cached) {
      return { content: cached, source: "cache" };
    }
  }

  const response = await generateAIResponse({
    messages: [
      {
        role: "user",
        content: buildLocalizeUserMessage(
          topic,
          input.interfaceLanguage,
          course.titleNative,
        ),
      },
    ],
    level: input.level ?? topic.level,
    interfaceLanguage: input.interfaceLanguage,
    courseId: input.courseId,
    skipGuard: true,
    maxTokens: 2500,
  });

  const content = response.content.trim();
  if (!content || response.refused) {
    throw new Error("Failed to localize grammar article");
  }

  await setCachedTutorResponse(
    cacheQuery,
    input.level ?? topic.level,
    content,
    input.courseId,
    input.interfaceLanguage,
  );

  return { content, source: "ai" };
}
