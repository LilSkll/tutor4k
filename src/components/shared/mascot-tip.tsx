import Image from "next/image";
import { cn } from "@/lib/utils";

type MascotTipProps = {
  message: string;
  className?: string;
};

/** Subtle hippogriff guide tip — not decoration. */
export function MascotTip({ message, className }: MascotTipProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-2xl bg-primary/[0.06] px-3.5 py-3 animate-fade-in",
        className,
      )}
    >
      <Image
        src="/hippogriff-icon.png"
        alt=""
        width={36}
        height={36}
        className="h-9 w-9 shrink-0 rounded-xl"
      />
      <p className="text-sm text-foreground/90 leading-snug pt-1.5">{message}</p>
    </div>
  );
}
