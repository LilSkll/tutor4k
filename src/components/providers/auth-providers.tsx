import { IdleCookieBanner } from "@/components/legal/idle-cookie-banner";

/**
 * Auth/marketing shell — no ThemeProvider / React Query / tooltips.
 * Dark mode via `.auth-shell` + prefers-color-scheme (see globals.css).
 */
export function AuthProviders({ children }: { children: React.ReactNode }) {
  return (
    <div className="auth-shell min-h-dvh bg-background text-foreground">
      {children}
      <IdleCookieBanner />
    </div>
  );
}
