"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Dumbbell,
  Languages,
  LayoutDashboard,
  Menu,
  MessageSquare,
  TrendingUp,
  X,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { useUIStore } from "@/stores";
import { translate } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  LayoutDashboard,
  MessageSquare,
  BookOpen,
  Dumbbell,
  Languages,
  TrendingUp,
};

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const language = useUIStore((s) => s.interfaceLanguage);
  const t = (key: string) => translate(key, language);

  const navItems = [
    { href: "/dashboard", label: t("nav.dashboard"), icon: "LayoutDashboard" },
    { href: "/tutor", label: t("nav.tutor"), icon: "MessageSquare" },
    { href: "/grammar", label: t("nav.grammar"), icon: "BookOpen" },
    { href: "/exercises", label: t("nav.exercises"), icon: "Dumbbell" },
    { href: "/vocabulary", label: t("nav.vocabulary"), icon: "Languages" },
    { href: "/progress", label: t("nav.progress"), icon: "TrendingUp" },
  ];

  return (
    <>
      <div className="md:hidden sticky top-0 z-40 flex h-14 items-center justify-between border-b bg-background/90 backdrop-blur-md px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary via-orange-500 to-rose-500 text-white font-bold">
            Ñ
          </div>
          <span className="font-bold gradient-text">SpanishTutor</span>
        </div>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="relative flex h-full w-72 flex-col bg-card shadow-xl animate-slide-in">
            <div className="flex h-14 items-center justify-between border-b px-4">
              <span className="font-bold gradient-text">SpanishTutor</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="flex-1 space-y-1 p-3">
              {navItems.map((item) => {
                const Icon = ICONS[item.icon];
                const active =
                  pathname === item.href ||
                  pathname.startsWith(item.href + "/");
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      active
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground",
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
