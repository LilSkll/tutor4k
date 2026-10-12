import type { ReactNode } from "react";
import Image from "next/image";
import {
  chapterCoverCardSrc,
  chapterCoverThumbSrc,
  getChapterCoverAccent,
} from "@/lib/chapter-covers";
import { cn } from "@/lib/utils";

type CoverSize = "sm" | "md" | "lg" | "hero";

/** Portrait frames — brand-shaped, not emoji squares. */
const SIZE_CLASS: Record<CoverSize, string> = {
  sm: "h-11 w-9 rounded-lg",
  md: "h-16 w-[3.25rem] rounded-xl",
  lg: "h-[4.5rem] w-14 rounded-2xl",
  hero: "h-full w-full rounded-none",
};

const SIZE_PX: Record<CoverSize, { w: number; h: number }> = {
  sm: { w: 36, h: 44 },
  md: { w: 52, h: 64 },
  lg: { w: 56, h: 72 },
  hero: { w: 720, h: 900 },
};

type Props = {
  slug: string;
  size?: CoverSize;
  muted?: boolean;
  className?: string;
  alt?: string;
  priority?: boolean;
  /** Show city caption under the frame (list / dashboard). */
  showLabel?: boolean;
};

export function ChapterCover({
  slug,
  size = "md",
  muted = false,
  className,
  alt = "",
  priority = false,
  showLabel = false,
}: Props) {
  const px = SIZE_PX[size];
  const src = size === "hero" ? chapterCoverCardSrc(slug) : chapterCoverThumbSrc(slug);
  const accent = getChapterCoverAccent(slug);
  const isHero = size === "hero";

  const frame = (
    <span
      className={cn(
        "relative inline-block shrink-0 overflow-hidden bg-muted",
        SIZE_CLASS[size],
        !isHero && "shadow-[0_6px_18px_-6px_rgba(0,0,0,0.35)]",
        muted && "opacity-55 grayscale-[0.4]",
        className,
      )}
      style={
        isHero
          ? undefined
          : {
              boxShadow: `0 0 0 2px ${accent.from}55, 0 8px 20px -8px ${accent.to}99`,
            }
      }
      aria-hidden={alt ? undefined : true}
    >
      <Image
        src={src}
        alt={alt}
        width={px.w}
        height={px.h}
        priority={priority}
        className="h-full w-full object-cover"
        sizes={isHero ? "(max-width: 768px) 100vw, 720px" : `${px.w}px`}
      />
      {/* Soft brand wash + bottom fade so faces stay readable */}
      <span
        className="pointer-events-none absolute inset-0"
        style={{
          background: isHero
            ? `linear-gradient(to top, ${accent.to}cc 0%, transparent 45%), linear-gradient(135deg, ${accent.from}33, transparent 50%)`
            : `linear-gradient(to top, ${accent.to}66 0%, transparent 40%)`,
        }}
      />
      {!isHero && (
        <span
          className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/25"
          aria-hidden
        />
      )}
    </span>
  );

  if (!showLabel || isHero) return frame;

  return (
    <span className="inline-flex flex-col items-center gap-1">
      {frame}
      <span
        className="max-w-[4.5rem] truncate text-[9px] font-semibold uppercase tracking-[0.12em]"
        style={{ color: accent.from }}
      >
        {accent.label}
      </span>
    </span>
  );
}

/** Full-bleed cinematic header for lesson intro / summary. */
export function ChapterCoverHero({
  slug,
  title,
  subtitle,
  badge,
  meta,
  priority = false,
}: {
  slug: string;
  title: string;
  subtitle?: string;
  badge?: ReactNode;
  meta?: ReactNode;
  priority?: boolean;
}) {
  const accent = getChapterCoverAccent(slug);

  return (
    <div className="relative overflow-hidden text-white">
      <div className="relative aspect-[4/5] max-h-[22rem] w-full sm:aspect-[16/10] sm:max-h-[18rem]">
        <Image
          src={chapterCoverCardSrc(slug)}
          alt=""
          fill
          priority={priority}
          className="object-cover object-[center_20%]"
          sizes="(max-width: 768px) 100vw, 672px"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(to top, ${accent.to}f2 0%, ${accent.to}99 28%, transparent 62%),
              linear-gradient(135deg, ${accent.from}66 0%, transparent 55%),
              linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, transparent 30%)
            `,
          }}
        />
        {/* Brand edge bar */}
        <div
          className="absolute inset-x-0 top-0 h-1"
          style={{
            background: `linear-gradient(90deg, ${accent.from}, #f97316, ${accent.to})`,
          }}
        />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-left">
          <p
            className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-white/80"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.45)" }}
          >
            {accent.label}
          </p>
          {badge}
          <h1
            className="mt-2 text-3xl font-bold leading-tight sm:text-4xl"
            style={{ textShadow: "0 2px 16px rgba(0,0,0,0.45)" }}
          >
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-1 text-base italic text-white/85">{subtitle}</p>
          ) : null}
          {meta ? <div className="mt-3 text-sm text-white/85">{meta}</div> : null}
        </div>
      </div>
    </div>
  );
}
