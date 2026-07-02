"use client";

import { useUIStore } from "@/stores";
import { translate } from "@/lib/i18n";
import {
  BookOpen,
  BookPlus,
  Dumbbell,
  Languages,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Settings,
  TrendingUp,
  Flame,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "@/server/actions/auth";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  LayoutDashboard,
  MessageSquare,
  BookOpen,
  Dumbbell,
  Languages,
  BookPlus,
  TrendingUp,
};

interface NavProps {
  userName?: string;
  level?: string | null;
  streak?: number;
}

export function Sidebar({ userName, level, streak }: NavProps) {
  const pathname = usePathname();
  const language = useUIStore((s) => s.interfaceLanguage);
  const collapsed = useUIStore((s) => s.sidebarCollapsed);
  const t = (key: string) => translate(key, language);

  const navItems = [
    { href: "/dashboard", label: t("nav.dashboard"), icon: "LayoutDashboard" },
    { href: "/tutor", label: t("nav.tutor"), icon: "MessageSquare" },
    { href: "/grammar", label: t("nav.grammar"), icon: "BookOpen" },
    { href: "/exercises", label: t("nav.exercises"), icon: "Dumbbell" },
    { href: "/vocabulary", label: t("nav.vocabulary"), icon: "Languages" },
    { href: "/vocabulary-topics", label: "Лексика", icon: "BookPlus" },
    { href: "/progress", label: t("nav.progress"), icon: "TrendingUp" },
  ];

  return (
    <aside
      className={cn(
        "hidden md:flex flex-col border-r bg-card/50 backdrop-blur-sm transition-all duration-300",
        collapsed ? "w-[72px]" : "w-64",
      )}
    >
      {/* Brand */}
      <div className="flex h-16 items-center gap-2 px-4 border-b">
        <img
          src="/hippogriff-icon.png"
          alt="Spanish with Pavel"
          className="h-10 w-10 shrink-0 rounded-lg"
        />
        {!collapsed && (
          <div className="flex flex-col">
            <span className="font-bold text-sm leading-tight gradient-text">
              Spanish with Pavel
            </span>
            <span className="text-[10px] text-muted-foreground">AI-Powered</span>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-3">
        {navItems.map((item) => {
          const Icon = ICONS[item.icon];
          const active =
            pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors",
                active
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground",
                collapsed && "justify-center px-2",
              )}
              title={collapsed ? item.label : undefined}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* User card + logout */}
      {!collapsed && (
        <div className="border-t p-3 space-y-1">
          <Link
            href="/settings"
            className="flex items-center gap-3 rounded-lg p-2 hover:bg-accent transition-colors"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary font-semibold">
              {(userName?.[0] ?? "?").toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">
                {userName ?? "—"}
              </p>
              <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                {level && (
                  <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary font-semibold">
                    {level}
                  </span>
                )}
                {streak !== undefined && streak > 0 && (
                  <span className="flex items-center gap-0.5">
                    <Flame className="h-3 w-3 text-orange-500" />
                    {streak}
                  </span>
                )}
              </div>
            </div>
            <Settings className="h-4 w-4 text-muted-foreground" />
          </Link>
          <form action={() => signOut()}>
            <button
              type="submit"
              className="w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
            >
              <LogOut className="h-4 w-4 shrink-0" />
              <span>{t("nav.logout")}</span>
            </button>
          </form>
          <p className="px-3 pt-1 text-[10px] text-muted-foreground/70">
            Разработчик — Драгунов Павел
          </p>
        </div>
      )}
    </aside>
  );
}
