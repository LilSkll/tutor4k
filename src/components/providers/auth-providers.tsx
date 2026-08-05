/**
 * Auth/marketing shell — no ThemeProvider, React Query, tooltips, or cookie banner.
 * Dark mode via `.auth-shell` + prefers-color-scheme (see globals.css).
 * Cookie consent lives in AppProviders (logged-in / onboarding shells only).
 */
export function AuthProviders({ children }: { children: React.ReactNode }) {
  return (
    <div className="auth-shell min-h-dvh bg-background text-foreground">
      {children}
    </div>
  );
}
