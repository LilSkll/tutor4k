"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

/**
 * Fallback when an old email template redirects to Site URL ("/") with
 * tokens in the hash instead of /auth/callback. Establish the session and
 * send the user into the app.
 *
 * Supabase is loaded only when a hash is present so the landing JS graph
 * stays small for normal visits (LCP / FCP).
 */
export function ConfirmEmailHashRedirect() {
  const router = useRouter();

  React.useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) return;
    const params = new URLSearchParams(hash);
    const access_token = params.get("access_token");
    const refresh_token = params.get("refresh_token");
    const type = params.get("type");
    if (!access_token || !refresh_token) return;
    // Ignore recovery hashes here — those belong on the reset-password flow.
    if (type === "recovery") return;

    void import("@/lib/supabase-browser").then(({ createSupabaseBrowserClient }) => {
      const supabase = createSupabaseBrowserClient();
      return supabase.auth
        .setSession({ access_token, refresh_token })
        .then(async ({ data: sessionData, error }) => {
          if (error || !sessionData.session?.user) return;
          window.history.replaceState(null, "", window.location.pathname);
          const userId = sessionData.session.user.id;
          const { data } = await supabase
            .from("profiles")
            .select("role")
            .eq("id", userId)
            .maybeSingle();
          const role = (data as { role?: string } | null)?.role;
          const home =
            role === "teacher" || role === "school_admin"
              ? "/teacher/dashboard?confirmed=1"
              : "/dashboard?confirmed=1";
          router.replace(home);
        });
    });
  }, [router]);

  return null;
}
