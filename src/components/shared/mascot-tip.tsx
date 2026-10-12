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
        "flex items-start gap-3 rounded-2xl bg-primary/[0.06] px-3.5 py-3 animate-fade-in",
        halloween && "border border-orange-500/20",
        className,
      )}
    >
      {halloween ? (
        <HalloweenMascot size={36} className="shrink-0" />
      ) : (
        <Image
          src="/hippogriff-icon.webp"
          alt=""
          width={36}
          height={36}
          className="h-9 w-9 shrink-0 rounded-xl"
        />
      )}
      <p className="text-sm text-foreground/90 leading-snug pt-1.5">{message}</p>
    </div>
  );
}
