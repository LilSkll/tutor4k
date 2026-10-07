/**
 * Client-only canvas postcard for the week's study ritual.
 * Kept modest (720×900 JPEG) so dashboard share stays light.
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
      if (lines.length >= maxLines) return lines.slice(0, maxLines);
    }
  }
  if (lines.length < maxLines) lines.push(current);
  return lines.slice(0, maxLines);
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

  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.font = '600 24px "Segoe UI", system-ui, sans-serif';
  ctx.globalAlpha = 0.85;
  ctx.fillText(fields.title.toUpperCase(), WEEK_POSTCARD_WIDTH / 2, 140);
  ctx.globalAlpha = 1;

  ctx.font = '700 42px Georgia, "Times New Roman", serif';
  const subtitleLines = wrapText(
    ctx,
    fields.subtitle,
    WEEK_POSTCARD_WIDTH - 140,
    2,
  );
  let y = 210;
  for (const line of subtitleLines) {
    ctx.fillText(line, WEEK_POSTCARD_WIDTH / 2, y);
    y += 52;
  }

  ctx.font = '700 64px Georgia, "Times New Roman", serif';
  ctx.fillText(fields.daysLabel, WEEK_POSTCARD_WIDTH / 2, 370);
  ctx.font = '600 28px "Segoe UI", system-ui, sans-serif';
  ctx.globalAlpha = 0.9;
  ctx.fillText(fields.minutesLabel, WEEK_POSTCARD_WIDTH / 2, 425);
  ctx.globalAlpha = 1;

  ctx.font = '500 24px "Segoe UI", system-ui, sans-serif';
  const tipLines = wrapText(ctx, fields.tip, WEEK_POSTCARD_WIDTH - 150, 4);
  y = 520;
  for (const line of tipLines) {
    ctx.fillText(line, WEEK_POSTCARD_WIDTH / 2, y);
    y += 36;
  }

  ctx.globalAlpha = 0.8;
  ctx.font = '500 18px "Segoe UI", system-ui, sans-serif';
  ctx.fillText(
    fields.footer,
    WEEK_POSTCARD_WIDTH / 2,
    WEEK_POSTCARD_HEIGHT - 100,
  );
  ctx.globalAlpha = 1;

  // JPEG is much smaller than PNG for this gradient art.
  return canvas.toDataURL("image/jpeg", 0.84);
}
