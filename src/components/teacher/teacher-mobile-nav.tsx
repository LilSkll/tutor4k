"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, Menu, MoreHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { translate } from "@/lib/i18n/with-teacher";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";
import { signOut } from "@/server/actions/auth";
import {
  TEACHER_NAV,
  isTeacherNavActive,
} from "@/lib/teacher-nav";
import { cn } from "@/lib/utils";
import type { UserRole } from "@/types";

const TAB_ITEMS = TEACHER_NAV.filter((i) => i.mobileTab);
const MORE_HREFS = new Set(
  TEACHER_NAV.filter((i) => !i.mobileTab).map((i) => i.href),
);

export function TeacherMobileNav({
  userName,
  role,
}: {
  userName?: string;
  role?: UserRole | null;
}) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const pathname = usePathname();
  const language = useInterfaceLanguage();
  const t = (key: string) => translate(key, language);
  const moreActive = [...MORE_HREFS].some((href) =>
    isTeacherNavActive(pathname, href),
  );

  React.useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top bar */}
      <div className="md:hidden sticky top-0 z-40 flex h-14 items-center justify-between border-b border-border/60 bg-background/95 backdrop-blur-md px-4 safe-pt">
        <div className="flex items-center gap-2.5 min-w-0">
          <Image
            src="/hippogriff-icon.png"
            alt="Spanish with Pavel"
            width={32}
            height={32}
            className="h-8 w-8 rounded-lg shrink-0"
          />
          <div className="min-w-0">
            <p className="font-bold gradient-text truncate text-sm leading-tight">
              Spanish with Pavel
            </p>
            <p className="text-[10px] text-muted-foreground truncate">
              {t("teacher.studioTitle")}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-0.5">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="h-11 w-11"
            onClick={() => setDrawerOpen(true)}
            aria-label={t("nav.settings")}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Bottom tabs */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-border/60 bg-background/95 backdrop-blur-md safe-pb">
        <ul className="grid grid-cols-5 h-14">
          {TAB_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = isTeacherNavActive(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex h-full flex-col items-center justify-center gap-0.5 text-[10px] transition-colors",
                    active
                      ? "text-primary font-medium"
                      : "text-muted-foreground",
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span className="truncate max-w-[4.5rem]">
                    {t(item.labelKey)}
                  </span>
                </Link>
              </li>
            );
          })}
          <li>
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className={cn(
                "flex h-full w-full flex-col items-center justify-center gap-0.5 text-[10px] transition-colors",
                moreActive || drawerOpen
                  ? "text-primary font-medium"
                  : "text-muted-foreground",
              )}
            >
              <MoreHorizontal className="h-5 w-5" />
              <span>{t("teacher.nav.more")}</span>
            </button>
          </li>
        </ul>
      </nav>

      {/* Drawer */}
      {drawerOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <button
            type="button"
            className="absolute inset-0 bg-black/45 backdrop-blur-sm"
            aria-label={t("common.cancel")}
            onClick={() => setDrawerOpen(false)}
          />
          <div className="relative ml-auto flex h-full w-[min(20rem,88vw)] flex-col bg-card shadow-elevated animate-slide-in safe-pt safe-pb">
            <div className="flex h-14 items-center justify-between border-b border-border/60 px-4">
              <span className="font-semibold text-sm">
                {t("teacher.studioTitle")}
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="h-11 w-11"
                onClick={() => setDrawerOpen(false)}
                aria-label={t("common.cancel")}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="px-4 py-3 border-b border-border/60">
              <p className="text-sm font-semibold truncate">
                {userName || "—"}
              </p>
              <p className="text-[11px] text-muted-foreground">
                {role === "school_admin"
                  ? t("teacher.role.schoolAdmin")
                  : t("teacher.role.teacher")}
              </p>
            </div>

            <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
              {TEACHER_NAV.map((item) => {
                const Icon = item.icon;
                const active = isTeacherNavActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setDrawerOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
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

            <div className="border-t border-border/60 p-4">
              <form action={signOut}>
                <button
                  type="submit"
                  className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  <LogOut className="h-4 w-4" />
                  {t("nav.logout")}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
