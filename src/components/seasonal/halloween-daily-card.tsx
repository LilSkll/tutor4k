import Link from "next/link";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HalloweenMascot } from "@/components/seasonal/halloween-mascot";

type HalloweenDailyCardProps = {
  title: string;
  body: string;
  cta: string;
};

/** Compact seasonal nudge next to Daily — not a hero banner. */
export function HalloweenDailyCard({ title, body, cta }: HalloweenDailyCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-orange-500/30 bg-card/80 px-3.5 py-3 shadow-soft">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-orange-500/12 via-violet-500/6 to-transparent"
        aria-hidden
      />
      <span className="hw-web pointer-events-none absolute right-2 top-1 opacity-35" aria-hidden />
      <span
        className="hw-pumpkin-dot pointer-events-none absolute bottom-2 right-3 opacity-60"
        aria-hidden
      />
      <div className="relative flex items-center gap-3">
        <HalloweenMascot size={36} className="hidden shrink-0 sm:block" />
        <div className="min-w-0 flex-1 space-y-0.5">
          <p className="text-sm font-semibold tracking-tight">{title}</p>
          <p className="text-xs text-muted-foreground leading-snug">{body}</p>
        </div>
        <Button
          variant="secondary"
          size="sm"
          className="min-h-11 shrink-0 shadow-soft"
          asChild
        >
          <Link href="/daily">
            <Play className="h-3.5 w-3.5" />
            {cta}
          </Link>
        </Button>
      </div>
    </div>
  );
}
