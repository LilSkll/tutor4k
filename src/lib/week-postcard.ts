/**
 * Client-only canvas postcard for the week's study ritual.
 * Portrait 720×900 JPEG — preview must use object-contain (not cover).
 */

export const WEEK_POSTCARD_WIDTH = 720;
export const WEEK_POSTCARD_HEIGHT = 900;

export type WeekPostcardFields = {
  title: string;
  subtitle: string;
  daysLabel: string;
  minutesLabel: string;
  tip: string;
  footer: string;
};

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
  maxLines: number,
): string[] {
  const words = text.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return [];
  const lines: string[] = [];
  let current = words[0]!;
  for (let i = 1; i < words.length; i++) {
    const next = `${current} ${words[i]}`;
    if (ctx.measureText(next).width <= maxWidth) {
      current = next;
    } else {
      lines.push(current);
      current = words[i]!;
      if (lines.length >= maxLines) {
        // Ellipsis on last line if we still have leftover words.
        const last = lines[lines.length - 1] ?? current;
        lines[lines.length - 1] =
          ctx.measureText(`${last}…`).width <= maxWidth ? `${last}…` : last;
        return lines.slice(0, maxLines);
      }
    }
  }
  if (lines.length < maxLines) lines.push(current);
  return lines.slice(0, maxLines);
}

function fitCenteredLines(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
  maxLines: number,
  fontSpec: string,
): { lines: string[]; lineHeight: number } {
  ctx.font = fontSpec;
  const sizeMatch = fontSpec.match(/(\d+)px/);
  const size = sizeMatch ? Number(sizeMatch[1]) : 28;
  return {
    lines: wrapText(ctx, text, maxWidth, maxLines),
    lineHeight: Math.round(size * 1.25),
  };
}

/** Sync draw — cheap enough for on-demand click, not every dashboard paint. */
export function fillWeekPostcard(fields: WeekPostcardFields): string {
  const canvas = document.createElement("canvas");
  canvas.width = WEEK_POSTCARD_WIDTH;
  canvas.height = WEEK_POSTCARD_HEIGHT;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas unsupported");

  const grad = ctx.createLinearGradient(
    0,
    0,
    WEEK_POSTCARD_WIDTH,
    WEEK_POSTCARD_HEIGHT,
  );
  grad.addColorStop(0, "#ea580c");
  grad.addColorStop(0.45, "#f97316");
  grad.addColorStop(1, "#e11d48");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, WEEK_POSTCARD_WIDTH, WEEK_POSTCARD_HEIGHT);

  ctx.fillStyle = "rgba(255,255,255,0.12)";
  roundRect(ctx, 48, 64, WEEK_POSTCARD_WIDTH - 96, WEEK_POSTCARD_HEIGHT - 128, 32);
  ctx.fill();

  const maxW = WEEK_POSTCARD_WIDTH - 140;
  const cx = WEEK_POSTCARD_WIDTH / 2;

  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";

  ctx.font = '600 22px "Segoe UI", system-ui, sans-serif';
  ctx.globalAlpha = 0.85;
  ctx.fillText(fields.title.toUpperCase(), cx, 130);
  ctx.globalAlpha = 1;

  let y = 190;
  const subtitle = fitCenteredLines(
    ctx,
    fields.subtitle,
    maxW,
    2,
    '700 40px Georgia, "Times New Roman", serif',
  );
  for (const line of subtitle.lines) {
    ctx.fillText(line, cx, y);
    y += subtitle.lineHeight;
  }

  y += 36;
  const days = fitCenteredLines(
    ctx,
    fields.daysLabel,
    maxW,
    2,
    '700 52px Georgia, "Times New Roman", serif',
  );
  for (const line of days.lines) {
    ctx.fillText(line, cx, y);
    y += days.lineHeight;
  }

  y += 12;
  const minutes = fitCenteredLines(
    ctx,
    fields.minutesLabel,
    maxW,
    2,
    '600 26px "Segoe UI", system-ui, sans-serif',
  );
  ctx.globalAlpha = 0.92;
  for (const line of minutes.lines) {
    ctx.fillText(line, cx, y);
    y += minutes.lineHeight;
  }
  ctx.globalAlpha = 1;

  y = Math.max(y + 48, 500);
  const tip = fitCenteredLines(
    ctx,
    fields.tip,
    maxW,
    5,
    '500 22px "Segoe UI", system-ui, sans-serif',
  );
  for (const line of tip.lines) {
    ctx.fillText(line, cx, y);
    y += tip.lineHeight;
  }

  ctx.globalAlpha = 0.8;
  ctx.font = '500 17px "Segoe UI", system-ui, sans-serif';
  const footerLines = wrapText(ctx, fields.footer, maxW, 2);
  let footerY = WEEK_POSTCARD_HEIGHT - 88 - (footerLines.length - 1) * 24;
  for (const line of footerLines) {
    ctx.fillText(line, cx, footerY);
    footerY += 24;
  }
  ctx.globalAlpha = 1;

  return canvas.toDataURL("image/jpeg", 0.86);
}
