"use client";

import * as React from "react";
import { translate } from "@/lib/i18n";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";
import { isAbortError } from "@/lib/tutor-fetch";

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
    async (refresh = false, signal?: AbortSignal) => {
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
          cache: refresh ? "no-store" : "force-cache",
          signal,
        });
        if (signal?.aborted) return;
        if (!res.ok) throw new Error("fetch failed");
        const data = (await res.json()) as {
          content?: string;
          source?: string;
        };
        if (signal?.aborted) return;
        setContent(data.content ?? null);
        setIsStatic(data.source === "native" || data.source === "static");
      } catch (err) {
        if (isAbortError(err, signal)) {
          return;
        }
        setError(translate("grammar.toastExplainFail", language));
        setContent(null);
        setIsStatic(false);
      } finally {
        if (!signal?.aborted) setLoading(false);
      }
    },
    [slug, courseId, language],
  );

  React.useEffect(() => {
    const ac = new AbortController();
    void load(false, ac.signal);
    return () => ac.abort();
  }, [load]);

  return { content, loading, error, isStatic, reload: () => load(true) };
}
