"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUIStore } from "@/stores";
import { translate } from "@/lib/i18n";
import { MOBILE_TAB_ITEMS, isNavActive } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function MobileTabBar() {
  const pathname = usePathname();
  const language = useUIStore((s) => s.interfaceLanguage);
  const t = (key: string) => translate(key, language);

  return (
    <nav
      className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-border/60 bg-background/90 backdrop-blur-xl safe-pb"
      aria-label="Primary"
    >
      <div className="grid grid-cols-5 h-[3.75rem] px-1">
        {MOBILE_TAB_ITEMS.map((item) => {
          const Icon = item.icon;
          const active = isNavActive(pathname, item.href);
          const label = t(item.labelKey);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-0.5 rounded-xl transition-colors touch-target",
                active ? "text-primary" : "text-muted-foreground",
              )}
            >
              <span
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-xl transition-all",
                  active && "bg-primary/10 shadow-sm",
                )}
              >
                <Icon className="h-5 w-5" strokeWidth={active ? 2.4 : 2} />
              </span>
              <span className="text-[10px] font-medium leading-none truncate max-w-[64px]">
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
