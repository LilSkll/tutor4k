"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Flame, LogOut, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { useUIStore } from "@/stores";
import { translate } from "@/lib/i18n";
import { NAV_SECTIONS, isNavActive } from "@/lib/nav";
import { signOut } from "@/server/actions/auth";
import { cn } from "@/lib/utils";

export function MobileNav({
  userName,
  level,
  streak,
}: {
  userName?: string;
  level?: string | null;
  streak?: number;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const language = useUIStore((s) => s.interfaceLanguage);
  const t = (key: string, vars?: Record<string, string | number>) =>
    translate(key, language, vars);

  return (
    <>
      <div className="md:hidden sticky top-0 z-40 flex h-14 items-center justify-between border-b border-border/60 bg-background/90 backdrop-blur-xl px-4 safe-pt">
        <div className="flex items-center gap-2.5 min-w-0">
          <Image
            src="/hippogriff-icon.png"
            alt="Spanish with Pavel"
            width={32}
            height={32}
            className="h-8 w-8 rounded-lg shrink-0"
          />
          <span className="font-bold gradient-text truncate text-sm">
            Spanish with Pavel
          </span>
        </div>
        <div className="flex items-center gap-0.5">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="h-11 w-11"
            onClick={() => setOpen(true)}
            aria-label={t("nav.more")}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <button
            type="button"
            className="absolute inset-0 bg-black/45 backdrop-blur-sm"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <div className="relative ml-auto flex h-full w-[min(20rem,88vw)] flex-col bg-card shadow-elevated animate-slide-in safe-pt safe-pb">
            <div className="flex h-14 items-center justify-between border-b border-border/60 px-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/hippogriff-icon.png"
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded-lg"
                />
                <span className="font-bold gradient-text text-sm">
                  Spanish with Pavel
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-11 w-11"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="px-4 py-3 border-b border-border/60">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary via-orange-500 to-rose-500 text-white text-sm font-bold">
                  {(userName?.[0] ?? "?").toUpperCase()}
                </div>
                <div className="min-w-0">
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
                      <span className="flex items-center gap-0.5">
                        <Flame className="h-3 w-3 text-orange-500" />
                        {streak}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-5">
              {NAV_SECTIONS.map((section) => (
                <div key={section.id}>
                  <p className="meta-label px-3 mb-2">{t(section.labelKey)}</p>
                  <div className="space-y-1">
                    {section.items.map((item) => {
                      const Icon = item.icon;
                      const active = isNavActive(pathname, item.href);
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "nav-item touch-target",
                            active ? "nav-item-active" : "nav-item-idle",
                          )}
                        >
                          <Icon className="h-5 w-5 shrink-0" />
                          <span>{t(item.labelKey)}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </nav>

            <div className="border-t border-border/60 p-3">
              <form action={() => signOut()}>
                <button
                  type="submit"
                  className="nav-item w-full text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                >
                  <LogOut className="h-5 w-5" />
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
