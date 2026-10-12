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
  const activeIndex = MOBILE_TAB_ITEMS.findIndex((item) =>
    isNavActive(pathname, item.href),
  );

  return (
    <nav
      className="glass-shell md:hidden fixed bottom-0 inset-x-0 z-40 border-t safe-pb"
      aria-label="Primary"
    >
      <div className="relative grid grid-cols-5 h-[3.75rem] px-1">
        {activeIndex >= 0 ? (
          <span
            aria-hidden
            className="tab-pill pointer-events-none absolute top-1.5 left-1 h-8 w-[calc((100%-0.5rem)/5)] transition-transform duration-200 ease-out"
            style={{ transform: `translateX(${activeIndex * 100}%)` }}
          >
            <span className="mx-0.5 block h-full rounded-xl bg-primary/12 ring-1 ring-primary/15 shadow-sm" />
          </span>
        ) : null}
        {MOBILE_TAB_ITEMS.map((item) => {
          const Icon = item.icon;
          const active = isNavActive(pathname, item.href);
          const label = t(item.labelKey);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative z-[1] flex flex-col items-center justify-center gap-0.5 rounded-xl transition-colors duration-150 touch-target",
                active ? "text-primary" : "text-muted-foreground",
              )}
            >
              <span className="flex h-8 w-8 items-center justify-center">
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
