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

    const supabase = createSupabaseBrowserClient();
    void supabase.auth
      .setSession({ access_token, refresh_token })
      .then(() => {
        // Clean hash so refresh doesn't re-apply.
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search,
        );
      });
  }, []);

  return null;
}
