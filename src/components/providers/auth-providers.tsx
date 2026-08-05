"use client";

import { ThemeProvider } from "next-themes";
import { IdleCookieBanner } from "@/components/legal/idle-cookie-banner";

/**
 * Minimal providers for login/signup/legal/marketing.
 * No React Query, Tooltip, or Sonner — cuts auth hydration work.
 */
export function AuthProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <IdleCookieBanner />
    </ThemeProvider>
  );
}
