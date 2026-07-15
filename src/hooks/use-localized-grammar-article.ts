"use client";

import * as React from "react";
import { getStaticGrammarContent } from "@/config/grammar-content-localizations";
import { usesNativeGrammarContent } from "@/lib/grammar-display";
import { translate } from "@/lib/i18n";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";

export function useLocalizedGrammarArticle(
  slug: string | undefined,
  courseId: string,
  nativeContent?: string,
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

      if (usesNativeGrammarContent(language) && nativeContent) {
        setContent(nativeContent);
        setError(null);
        setLoading(false);
        setIsStatic(true);
        return;
      }

      if (!refresh) {
        const staticContent = getStaticGrammarContent(slug, language);
        if (staticContent) {
          setContent(staticContent);
          setError(null);
          setLoading(false);
          setIsStatic(true);
          return;
        }
      }

      setIsStatic(false);
      setLoading(true);
      setError(null);
      if (!refresh) setContent(null);

      try {
        const params = new URLSearchParams({
          slug,
          courseId,
          interfaceLanguage: language,
        });
        if (refresh) params.set("refresh", "1");

        const res = await fetch(`/api/grammar/content?${params.toString()}`);
        if (!res.ok) throw new Error("fetch failed");
        const data = (await res.json()) as { content?: string };
        setContent(data.content ?? null);
      } catch {
        setError(translate("grammar.toastExplainFail", language));
        setContent(null);
      } finally {
        setLoading(false);
      }
    },
    [slug, courseId, language, nativeContent],
  );

  React.useEffect(() => {
    void load();
  }, [load]);

  return { content, loading, error, isStatic, reload: () => load(true) };
}
