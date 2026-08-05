"use client";

import dynamic from "next/dynamic";
import { ThemeProvider } from "next-themes";

const CookieBanner = dynamic(
  () =>
    import("@/components/legal/cookie-banner").then((m) => m.CookieBanner),
  { ssr: false },
);

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
      <CookieBanner />
    </ThemeProvider>
  );
}
