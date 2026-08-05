"use client";

import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { IdleCookieBanner } from "@/components/legal/idle-cookie-banner";

/**
 * Full app shell providers (student + teacher).
 * Auth / marketing use AuthProviders instead — no React Query / Tooltip / Toaster /
 * cookie-banner tax on the public TTI path.
 */
export function AppProviders({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 30_000,
            retry: 1,
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryClientProvider client={queryClient}>
        <TooltipProvider delayDuration={200}>
          {children}
          <IdleCookieBanner />
          <Toaster richColors position="top-right" />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
