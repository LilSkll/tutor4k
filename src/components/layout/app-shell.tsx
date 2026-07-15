"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { Sidebar } from "@/components/layout/sidebar";
import { MobileNav } from "@/components/layout/mobile-nav";
import { MobileTabBar } from "@/components/layout/mobile-tab-bar";
import { SidebarToggle } from "@/components/layout/sidebar-toggle";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { ProfileSync } from "@/components/layout/profile-sync";
import { cn } from "@/lib/utils";
import type { Profile } from "@/types";

/**
 * App shell: persistent sidebar (desktop) + drawer/tabs (mobile) + main content.
 * Receives the server-fetched profile to seed the user card and streak.
 */
export function AppShell({
  profile,
  children,
}: {
  profile: Profile | null;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isImmersive = pathname.startsWith("/tutor");

  return (
    <div className="flex h-[100dvh] overflow-hidden bg-background">
      <ProfileSync profile={profile} />
      <Sidebar
        userName={profile?.name ?? undefined}
        level={profile?.level ?? undefined}
        streak={profile?.streak ?? 0}
      />

      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <MobileNav
          userName={profile?.name ?? undefined}
          level={profile?.level ?? undefined}
          streak={profile?.streak ?? 0}
        />

        <div className="hidden md:flex h-14 items-center justify-between border-b border-border/60 px-4 bg-background/80 backdrop-blur-xl">
          <SidebarToggle />
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>

        <main
          className={cn(
            "flex-1 overflow-y-auto overflow-x-hidden min-h-0",
            !isImmersive &&
              "pb-[calc(4rem+env(safe-area-inset-bottom,0px))] md:pb-0",
          )}
        >
          {children}
        </main>

        <MobileTabBar />
      </div>
    </div>
  );
}
