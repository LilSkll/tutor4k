"use client";

import { cn } from "@/lib/utils";
import type { AwardedEggPayload } from "@/lib/journey/types";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";
import { translate } from "@/lib/i18n";
import { Sparkles } from "lucide-react";

const RARITY_STYLES: Record<
  AwardedEggPayload["rarity"],
  { ring: string; glow: string; labelKey: string }
> = {
  common: {
    ring: "border-stone-300",
    glow: "from-stone-100 to-stone-50",
    labelKey: "journey.rarity.common",
  },
  rare: {
    ring: "border-sky-400",
    glow: "from-sky-100 to-indigo-50",
    labelKey: "journey.rarity.rare",
  },
  epic: {
    ring: "border-violet-400",
    glow: "from-violet-100 to-fuchsia-50",
    labelKey: "journey.rarity.epic",
  },
  legendary: {
    ring: "border-amber-400",
    glow: "from-amber-100 via-orange-50 to-rose-50",
    labelKey: "journey.rarity.legendary",
  },
};

export function EasterEggReveal({
  egg,
  className,
}: {
  egg: AwardedEggPayload;
  className?: string;
}) {
  const language = useInterfaceLanguage();
  const t = (key: string) => translate(key, language);
  const style = RARITY_STYLES[egg.rarity];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border-2 bg-gradient-to-br p-5 shadow-soft",
        style.ring,
        style.glow,
        egg.kind === "animation" && "animate-pulse",
        className,
      )}
    >
      {egg.rarity === "legendary" || egg.kind === "animation" ? (
        <div className="pointer-events-none absolute inset-0 animate-[spin_12s_linear_infinite] opacity-30">
          <div className="absolute -left-1/4 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
        </div>
      ) : null}

      <div className="relative flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/70 shadow-sm">
          <Sparkles className="h-5 w-5 text-amber-700" />
        </div>
        <div className="min-w-0 space-y-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-600">
              {t("journey.easterEggFound")}
            </p>
            <span className="rounded-full bg-white/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-stone-700">
              {t(style.labelKey)}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-stone-900">{egg.title}</h3>
          {egg.highlight ? (
            <p className="font-serif text-xl text-amber-900/90">{egg.highlight}</p>
          ) : null}
          <p className="text-sm leading-relaxed text-stone-700">{egg.body}</p>
          {!egg.isNew ? (
            <p className="text-xs text-muted-foreground">{t("journey.eggAlreadyOwned")}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
