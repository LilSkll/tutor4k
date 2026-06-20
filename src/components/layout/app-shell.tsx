"use client";

import * as React from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { MobileNav } from "@/components/layout/mobile-nav";
import { SidebarToggle } from "@/components/layout/sidebar-toggle";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import type { Profile } from "@/types";

/**
 * App shell: persistent sidebar (desktop) + drawer (mobile) + main content.
 * Receives the server-fetched profile to seed the user card and streak.
 */
export function AppShell({
  profile,
  children,
}: {
  profile: Profile | null;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar
        userName={profile?.name ?? undefined}
        level={profile?.level ?? undefined}
        streak={profile?.streak ?? 0}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <MobileNav />

        {/* Desktop top bar */}
        <div className="hidden md:flex h-14 items-center justify-between border-b px-4">
          <SidebarToggle />
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>

        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
