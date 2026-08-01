"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  LogOut,
  Users,
  ClipboardList,
  BarChart3,
  Link2,
  Settings,
  Building2,
} from "lucide-react";
import { translate } from "@/lib/i18n";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";
import { signOut } from "@/server/actions/auth";
import { cn } from "@/lib/utils";
import type { UserRole } from "@/types";

const NAV = [
  {
    href: "/teacher/dashboard",
    labelKey: "teacher.nav.dashboard",
    icon: LayoutDashboard,
    ready: true,
  },
  {
    href: "/teacher/students",
    labelKey: "teacher.nav.students",
    icon: Users,
    ready: true,
  },
  {
    href: "/teacher/invites",
    labelKey: "teacher.nav.invites",
    icon: Link2,
    ready: true,
  },
  {
    href: "/teacher/school",
    labelKey: "teacher.nav.school",
    icon: Building2,
    ready: true,
  },
  {
    href: "/teacher/assignments",
    labelKey: "teacher.nav.assignments",
    icon: ClipboardList,
    ready: true,
  },
  {
    href: "/teacher/analytics",
    labelKey: "teacher.nav.analytics",
    icon: BarChart3,
    ready: true,
  },
  {
    href: "/teacher/settings",
    labelKey: "teacher.nav.settings",
    icon: Settings,
    ready: true,
  },
] as const;

export function TeacherSidebar({
  userName,
  role,
}: {
  userName?: string;
  role?: UserRole | null;
}) {
  const pathname = usePathname();
  const language = useInterfaceLanguage();
  const t = (key: string) => translate(key, language);

  return (
    <aside className="hidden md:flex w-[240px] flex-col border-r border-border/60 bg-card/80 backdrop-blur-xl">
      <div className="flex h-16 items-center gap-3 border-b border-border/60 px-5">
        <Image
          src="/hippogriff-icon.png"
          alt="Spanish with Pavel"
          width={40}
          height={40}
          className="h-10 w-10 shrink-0 rounded-xl shadow-soft"
        />
        <div className="min-w-0">
          <p className="font-bold text-sm leading-tight gradient-text truncate">
            Spanish with Pavel
          </p>
          <p className="text-[11px] text-muted-foreground truncate">
            {t("teacher.studioTitle")}
          </p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {NAV.map((item) => {
          const Icon = item.icon;
          const active =
            pathname === item.href || pathname.startsWith(`${item.href}/`);
          if (!item.ready) {
            return (
              <div
                key={item.href}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground/50 cursor-not-allowed"
                title={t("teacher.nav.comingSoon")}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="truncate">{t(item.labelKey)}</span>
              </div>
            );
          }
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                active
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="truncate">{t(item.labelKey)}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-border/60 p-4 space-y-3">
        <div className="min-w-0">
          <p className="text-sm font-medium truncate">{userName || "—"}</p>
          <p className="text-[11px] text-muted-foreground">
            {role === "school_admin"
              ? t("teacher.role.schoolAdmin")
              : t("teacher.role.teacher")}
          </p>
        </div>
        <form action={signOut}>
          <button
            type="submit"
            className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <LogOut className="h-4 w-4" />
            {t("nav.logout")}
          </button>
        </form>
      </div>
    </aside>
  );
}
