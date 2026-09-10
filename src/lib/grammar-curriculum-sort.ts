import { ENGLISH_GRAMMAR_CURRICULUM_ORDER } from "@/config/english-curriculum-order";
import { SPANISH_GRAMMAR_CURRICULUM_ORDER } from "@/config/grammar-curriculum-order";
import type { GrammarTopic } from "@/types";

const SPANISH_RANK = new Map<string, number>(
  SPANISH_GRAMMAR_CURRICULUM_ORDER.map((slug, index) => [slug, index]),
);

const ENGLISH_RANK = new Map<string, number>(
  ENGLISH_GRAMMAR_CURRICULUM_ORDER.map((slug, index) => [slug, index]),
);

function sortByRank(
  topics: GrammarTopic[],
  rank: Map<string, number>,
): GrammarTopic[] {
  return [...topics].sort((a, b) => {
    const ra = rank.get(a.slug) ?? 9999;
    const rb = rank.get(b.slug) ?? 9999;
    if (ra !== rb) return ra - rb;
    return a.slug.localeCompare(b.slug);
  });
}

/** Sort Spanish grammar topics for display — curriculum journey first. */
export function sortGrammarTopicsByCurriculum(
  topics: GrammarTopic[],
): GrammarTopic[] {
  return sortByRank(topics, SPANISH_RANK);
}

/** Sort English grammar topics for display — curriculum journey first. */
export function sortEnglishGrammarByCurriculum(
  topics: GrammarTopic[],
): GrammarTopic[] {
  return sortByRank(topics, ENGLISH_RANK);
}

/** Course-aware grammar sort for the reference UI. */
export function sortGrammarForCourse(
  courseId: string,
  topics: GrammarTopic[],
): GrammarTopic[] {
  if (courseId === "english") return sortEnglishGrammarByCurriculum(topics);
  if (courseId === "spanish") return sortGrammarTopicsByCurriculum(topics);
  return topics;
}
