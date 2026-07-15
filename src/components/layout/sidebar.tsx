"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Flame, LogOut } from "lucide-react";
import { useUIStore } from "@/stores";
import { translate } from "@/lib/i18n";
import { NAV_SECTIONS, isNavActive } from "@/lib/nav";
import { signOut } from "@/server/actions/auth";
import { cn } from "@/lib/utils";

interface NavProps {
  userName?: string;
  level?: string | null;
  streak?: number;
}

export function Sidebar({ userName, level, streak }: NavProps) {
  const pathname = usePathname();
  const language = useUIStore((s) => s.interfaceLanguage);
  const collapsed = useUIStore((s) => s.sidebarCollapsed);
  const t = (key: string, vars?: Record<string, string | number>) =>
    translate(key, language, vars);

  return (
    <aside
      className={cn(
        "hidden md:flex flex-col border-r border-border/60 bg-card/80 backdrop-blur-xl transition-[width] duration-300",
        collapsed ? "w-[76px]" : "w-[260px]",
      )}
    >
      <div
        className={cn(
          "flex h-16 items-center gap-3 border-b border-border/60",
          collapsed ? "justify-center px-2" : "px-5",
        )}
      >
        <Image
          src="/hippogriff-icon.png"
          alt="Spanish with Pavel"
          width={40}
          height={40}
          className="h-10 w-10 shrink-0 rounded-xl shadow-soft"
        />
        {!collapsed && (
          <div className="min-w-0">
            <p className="font-bold text-sm leading-tight gradient-text truncate">
              Spanish with Pavel
            </p>
            <p className="text-[11px] text-muted-foreground">
              {t("nav.brandTagline")}
            </p>
          </div>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-5">
        {NAV_SECTIONS.map((section) => (
          <div key={section.id}>
            {!collapsed && (
              <p className="meta-label px-3 mb-2">{t(section.labelKey)}</p>
            )}
            <div className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;
                const active = isNavActive(pathname, item.href);
                const label = t(item.labelKey);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    title={collapsed ? label : undefined}
                    className={cn(
                      "nav-item",
                      active ? "nav-item-active" : "nav-item-idle",
                      collapsed && "justify-center px-0",
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-[18px] w-[18px] shrink-0",
                        active && "text-primary",
                      )}
                    />
                    {!collapsed && <span className="truncate">{label}</span>}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="border-t border-border/60 p-3 space-y-1">
        {!collapsed ? (
          <>
            <Link
              href="/settings"
              className="flex items-center gap-3 rounded-xl p-2.5 hover:bg-accent transition-colors"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary via-orange-500 to-rose-500 text-white text-sm font-bold shadow-brand">
                {(userName?.[0] ?? "?").toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate">
                  {userName ?? "—"}
                </p>
                <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                  {level && (
                    <span className="rounded-md bg-primary/10 px-1.5 py-0.5 text-primary font-semibold">
                      {level}
                    </span>
                  )}
                  {(streak ?? 0) > 0 && (
                    <span className="flex items-center gap-0.5 font-medium">
                      <Flame className="h-3 w-3 text-orange-500" />
                      {streak}
                    </span>
                  )}
                </div>
              </div>
            </Link>
            <form action={() => signOut()}>
              <button
                type="submit"
                className="nav-item nav-item-idle w-full hover:bg-destructive/10 hover:text-destructive"
              >
                <LogOut className="h-[18px] w-[18px] shrink-0" />
                <span>{t("nav.logout")}</span>
              </button>
            </form>
            <p className="px-3 pt-1 text-[10px] text-muted-foreground/70">
              {t("dashboard.developer")}
            </p>
          </>
        ) : (
          <Link
            href="/settings"
            className="flex justify-center rounded-xl p-2 hover:bg-accent transition-colors"
            title={userName}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary via-orange-500 to-rose-500 text-white text-xs font-bold">
              {(userName?.[0] ?? "?").toUpperCase()}
            </div>
          </Link>
        )}
      </div>
    </aside>
  );
}
