"use client";

import { ProfileSync } from "@/components/layout/profile-sync";
import { TeacherSidebar } from "@/components/teacher/teacher-sidebar";
import { TeacherHeader } from "@/components/teacher/teacher-header";
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
      <ProfileSync profile={profile} />
      <TeacherSidebar userName={profile.name} role={profile.role} />
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <TeacherHeader title={headerTitle} />
        <main className="flex-1 overflow-y-auto overflow-x-hidden min-h-0 p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
