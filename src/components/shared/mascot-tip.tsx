import Image from "next/image";
import { HalloweenMascot } from "@/components/seasonal/halloween-mascot";
import { cn } from "@/lib/utils";

type MascotTipProps = {
  message: string;
  className?: string;
  /** Parent decides season + course — avoids hat on non-Spanish courses. */
  halloween?: boolean;
};

/** Subtle hippogriff guide tip — not decoration. */
export function MascotTip({
  message,
  className,
  halloween = false,
}: MascotTipProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-2xl border border-border/70 bg-gradient-to-r from-navy/[0.05] via-primary/[0.05] to-gold/[0.06] px-3.5 py-3 animate-fade-in",
        halloween && "border-orange-500/25 from-orange-500/10 via-violet-500/5 to-transparent",
        className,
      )}
    >
      {halloween ? (
        <HalloweenMascot size={36} className="hidden shrink-0 sm:block" />
      ) : (
        <Image
          src="/hippogriff-icon.webp"
          alt=""
          width={36}
          height={36}
          className="hidden h-9 w-9 shrink-0 rounded-xl shadow-soft sm:block"
        />
      )}
      <p className="text-sm text-foreground/90 leading-snug sm:pt-1.5">{message}</p>
    </div>
  );
}
