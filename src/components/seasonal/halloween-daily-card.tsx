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
    <div className="relative overflow-hidden rounded-2xl border border-orange-500/25 bg-gradient-to-r from-orange-500/10 via-violet-500/5 to-transparent px-3.5 py-3">
      <span className="hw-web pointer-events-none absolute right-2 top-1 opacity-40" aria-hidden />
      <span
        className="hw-pumpkin-dot pointer-events-none absolute bottom-2 right-3 opacity-70"
        aria-hidden
      />
      <div className="flex items-center gap-3">
        <HalloweenMascot size={40} />
        <div className="min-w-0 flex-1 space-y-0.5">
          <p className="text-sm font-semibold tracking-tight">{title}</p>
          <p className="text-xs text-muted-foreground leading-snug">{body}</p>
        </div>
        <Button variant="secondary" size="sm" className="shrink-0 shadow-soft" asChild>
          <Link href="/daily">
            <Play className="h-3.5 w-3.5" />
            {cta}
          </Link>
        </Button>
      </div>
    </div>
  );
}
