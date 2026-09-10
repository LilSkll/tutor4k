"use client";

import { Suspense } from "react";
import { ProfileSync } from "@/components/layout/profile-sync";
import { NavigationProgress } from "@/components/layout/navigation-progress";
import { TeacherSidebar } from "@/components/teacher/teacher-sidebar";
import { TeacherHeader } from "@/components/teacher/teacher-header";
import { TeacherMobileNav } from "@/components/teacher/teacher-mobile-nav";
import type { Profile } from "@/types";

/** Teacher Studio shell — separate from Student Journey AppShell. */
export function TeacherShell({
  profile,
  children,
  headerTitle,
}: {
  profile: Profile;
  children: React.ReactNode;
  headerTitle?: string;
}) {
  return (
    <div className="flex h-[100dvh] overflow-hidden bg-background">
      <Suspense fallback={null}>
        <NavigationProgress />
      </Suspense>
      <ProfileSync profile={profile} />
      <TeacherSidebar userName={profile.name} role={profile.role} />
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <TeacherMobileNav userName={profile.name} role={profile.role} />
        <div className="hidden md:block">
          <TeacherHeader title={headerTitle} />
        </div>
        <main className="flex-1 overflow-y-auto overflow-x-hidden min-h-0 p-4 md:p-6 pb-[4.5rem] md:pb-6">
          {children}
        </main>
      </div>
    </div>
  );
}
