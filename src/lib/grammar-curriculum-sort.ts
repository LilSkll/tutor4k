import { SPANISH_GRAMMAR_CURRICULUM_ORDER } from "@/config/grammar-curriculum-order";
import type { GrammarTopic } from "@/types";

const CURRICULUM_RANK = new Map<string, number>(
  SPANISH_GRAMMAR_CURRICULUM_ORDER.map((slug, index) => [slug, index]),
);

/** Sort grammar topics for display — curriculum journey first, then alphabetical. */
export function sortGrammarTopicsByCurriculum(
  topics: GrammarTopic[],
): GrammarTopic[] {
  return [...topics].sort((a, b) => {
    const ra = CURRICULUM_RANK.get(a.slug) ?? 9999;
    const rb = CURRICULUM_RANK.get(b.slug) ?? 9999;
    if (ra !== rb) return ra - rb;
    return a.slug.localeCompare(b.slug);
  });
}
