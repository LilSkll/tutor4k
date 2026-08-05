"use client";

import dynamic from "next/dynamic";
import type { InterfaceLanguage } from "@/types";

/**
 * Tiny client entry: keeps oauth-island + auth dicts / supabase out of First Load.
 * The progressive email form stays interactive while this chunk downloads.
 */
export const OAuthDeferred = dynamic(
  () => import("@/components/auth/oauth-island").then((m) => m.OAuthIsland),
  {
    ssr: false,
    loading: () => (
      <div className="h-11 animate-pulse rounded-md bg-muted/40" aria-hidden />
    ),
  },
);

export type OAuthDeferredProps = {
  mode: "signin" | "signup";
  redirect?: string;
  allowSocialOAuth: boolean;
  language: InterfaceLanguage;
  oauthUnavailableMessage: string;
};
