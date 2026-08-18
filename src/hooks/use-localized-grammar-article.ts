"use client";

import * as React from "react";
import { translate } from "@/lib/i18n";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";

/**
 * Lazy-load a grammar article when the user opens a topic.
 * Content comes from /api/grammar/content (static banks stay on the server).
 */
export function useLocalizedGrammarArticle(
  slug: string | undefined,
  courseId: string,
) {
  const language = useInterfaceLanguage();
  const [content, setContent] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [isStatic, setIsStatic] = React.useState(false);

  const load = React.useCallback(
    async (refresh = false) => {
      if (!slug) {
        setContent(null);
        setError(null);
        setLoading(false);
        setIsStatic(false);
        return;
      }

      setLoading(true);
      setError(null);
      if (!refresh) setContent(null);

      try {
        const params = new URLSearchParams({
          slug,
          courseId,
          interfaceLanguage: language,
          v: "3",
        });
        if (refresh) params.set("refresh", "1");

        const res = await fetch(`/api/grammar/content?${params.toString()}`, {
          // Prefer CDN-friendly caching for static articles.
          cache: refresh ? "no-store" : "force-cache",
        });
        if (!res.ok) throw new Error("fetch failed");
        const data = (await res.json()) as {
          content?: string;
          source?: string;
        };
        setContent(data.content ?? null);
        setIsStatic(data.source === "native" || data.source === "static");
      } catch {
        setError(translate("grammar.toastExplainFail", language));
        setContent(null);
        setIsStatic(false);
      } finally {
        setLoading(false);
      }
    },
    [slug, courseId, language],
  );

  React.useEffect(() => {
    void load();
  }, [load]);

  return { content, loading, error, isStatic, reload: () => load(true) };
}
