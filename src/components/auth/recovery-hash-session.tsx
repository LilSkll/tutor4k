"use client";

import * as React from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase-browser";

/**
 * Some Supabase email templates still deliver tokens in the URL hash.
 * Exchange them into a session so the reset form can call updateUser.
 */
export function RecoveryHashSession() {
  React.useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) return;
    const params = new URLSearchParams(hash);
    const access_token = params.get("access_token");
    const refresh_token = params.get("refresh_token");
    const type = params.get("type");
    if (!access_token || !refresh_token) return;
    if (type && type !== "recovery") return;

    // Allow /auth/reset-password past middleware without going through /auth/recovery.
    document.cookie = "swp_pwd_recovery=1; Path=/; Max-Age=900; SameSite=Lax";

    const supabase = createSupabaseBrowserClient();
    void supabase.auth
      .setSession({ access_token, refresh_token })
      .then(() => {
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search,
        );
      });
  }, []);

  return null;
}
