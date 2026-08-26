/**
 * Fill the branded completion certificate template (1024×723) with student data.
 * Client-only (uses Canvas + Image).
 *
 * Layout calibrated against public/certificates/completion-template.png:
 * - Gold rule under name ≈ y 295
 * - “has successfully completed” ≈ y 322–326
 * - “CHAPTER / LEVEL” placeholder ≈ y 344–355
 * - “in the course” ≈ y 391
 * - Course title (“SPANISH WITH PAVEL” on art) ≈ y 463–480
 * - Calendar / book icons ≈ y 540–560 (centers x ≈ 290 / 740)
 * - DATE / LEVEL labels ≈ y 590–597 (replaced by real values)
 */

export const CERTIFICATE_TEMPLATE_SRC = "/certificates/completion-template.png";
export const CERTIFICATE_WIDTH = 1024;
export const CERTIFICATE_HEIGHT = 723;

/** Navy from the template artwork. */
const INK = "#0a2540";
/** Parchment sampled from blank area of the template (~244,232,210). */
const PARCHMENT = "#f4e8d2";

export type CompletionCertificateFields = {
  userName: string;
  /** Main achievement line (chapter title, “Level C1”, “Full course”, …). */
  achievement: string;
  /** CEFR or band shown in the bottom-right LEVEL slot. */
  level: string;
  /** Display date for the DATE slot. */
  dateLabel: string;
  /**
   * Course name under “in the course” (Spanish / English).
   * Template prints “SPANISH WITH PAVEL” there by mistake for a course title —
   * we always cover and redraw the actual language course.
   * “Spanish with Pavel” remains the product brand (seal / disclaimer on the art).
   */
  courseLine: string;
};

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load ${src}`));
    img.src = src;
  });
}

function italicFont(px: number): string {
  return `italic 600 ${px}px Georgia, "Times New Roman", serif`;
}

function boldFont(px: number): string {
  return `600 ${px}px Georgia, "Times New Roman", serif`;
}

function sansFont(px: number): string {
  return `600 ${px}px "Segoe UI", system-ui, sans-serif`;
}

function fitCentered(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
  basePx: number,
  minPx: number,
  fontFn: (px: number) => string,
): number {
  let size = basePx;
  ctx.font = fontFn(size);
  while (size > minPx && ctx.measureText(text).width > maxWidth) {
    size -= 1;
    ctx.font = fontFn(size);
  }
  return size;
}

/** Cover a parchment band so template placeholders never show through. */
function coverBand(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
) {
  ctx.fillStyle = PARCHMENT;
  ctx.fillRect(x, y, w, h);
}

/**
 * Split achievement into up to two centered lines when too wide.
 * Prefers breaking after “—” / “–” / “·” (chapter number | title).
 */
export function splitAchievementLines(
  measure: (text: string) => number,
  text: string,
  maxWidth: number,
): string[] {
  const trimmed = text.trim();
  if (!trimmed) return [];
  if (measure(trimmed) <= maxWidth) return [trimmed];

  const dashBreak = trimmed.match(/^(.+?)\s*[—–·|]\s+(.+)$/);
  if (dashBreak) {
    const a = dashBreak[1].trim();
    const b = dashBreak[2].trim();
    if (a && b) return [a, b];
  }

  const words = trimmed.split(/\s+/);
  if (words.length < 2) return [trimmed];

  // Greedy pack of the first line; fitCentered will shrink if needed.
  let take = 1;
  while (
    take < words.length - 1 &&
    measure(words.slice(0, take + 1).join(" ")) <= maxWidth
  ) {
    take += 1;
  }
  return [words.slice(0, take).join(" "), words.slice(take).join(" ")];
}

/**
 * Draw filled certificate onto a canvas and return PNG data URL.
 */
export async function fillCompletionCertificate(
  fields: CompletionCertificateFields,
): Promise<string> {
  const img = await loadImage(CERTIFICATE_TEMPLATE_SRC);
  const canvas = document.createElement("canvas");
  canvas.width = CERTIFICATE_WIDTH;
  canvas.height = CERTIFICATE_HEIGHT;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("canvas");

  ctx.drawImage(img, 0, 0, CERTIFICATE_WIDTH, CERTIFICATE_HEIGHT);

  const cx = CERTIFICATE_WIDTH / 2;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = INK;

  // ── Name: blank band above the gold rule (~y 295) ─────────────────
  // No parchment patch — template is empty here; keep glyphs above the rule.
  const name = fields.userName.trim() || "Student";
  const nameSize = fitCentered(ctx, name, 500, 36, 18, italicFont);
  ctx.font = italicFont(nameSize);
  ctx.fillStyle = INK;
  ctx.fillText(name, cx, 268);

  // ── Achievement: fully cover “CHAPTER / LEVEL” (≈ y 344–355) ──────
  const achievement = fields.achievement.trim();
  const achMax = 520;
  ctx.font = boldFont(18);
  const lines = splitAchievementLines(
    (t) => ctx.measureText(t).width,
    achievement,
    achMax,
  );
  if (lines.length <= 1) {
    coverBand(ctx, 230, 336, 564, 38);
    const line = lines[0] ?? "";
    const achSize = fitCentered(ctx, line, achMax, 18, 12, boldFont);
    ctx.font = boldFont(achSize);
    ctx.fillStyle = INK;
    ctx.fillText(line, cx, 354);
  } else {
    coverBand(ctx, 230, 328, 564, 52);
    const size0 = fitCentered(ctx, lines[0], achMax, 16, 11, boldFont);
    const size1 = fitCentered(ctx, lines[1], achMax, 16, 11, boldFont);
    const size = Math.min(size0, size1);
    ctx.font = boldFont(size);
    ctx.fillStyle = INK;
    ctx.fillText(lines[0], cx, 340);
    ctx.fillText(lines[1], cx, 362);
  }

  // ── Language course: cover template “SPANISH WITH PAVEL” title ────
  // Title sits ≈ y 463–480; stop before calendar/book icons (~540).
  coverBand(ctx, 200, 448, 624, 46);
  ctx.fillStyle = INK;
  const courseSize = fitCentered(ctx, fields.courseLine, 580, 26, 16, boldFont);
  ctx.font = boldFont(courseSize);
  ctx.fillText(fields.courseLine, cx, 470);

  // ── Date / level: replace DATE & LEVEL captions under the icons ───
  coverBand(ctx, 248, 582, 84, 30);
  coverBand(ctx, 698, 582, 84, 30);
  ctx.font = sansFont(13);
  ctx.fillStyle = INK;
  ctx.fillText(fields.dateLabel, 290, 595);
  ctx.font = sansFont(14);
  ctx.fillText(fields.level, 740, 595);

  return canvas.toDataURL("image/png");
}

/**
 * Language course name for the certificate (“in the course …”).
 * Product brand stays “Spanish with Pavel” on the seal/disclaimer artwork.
 */
export function courseLineForId(courseId: string): string {
  if (courseId === "english") return "English";
  if (courseId === "russian") return "Russian";
  return "Spanish";
}
