/**
 * Fill the branded completion certificate template (1024×723) with student data.
 * Client-only (uses Canvas + Image).
 */

export const CERTIFICATE_TEMPLATE_SRC = "/certificates/completion-template.png";
export const CERTIFICATE_WIDTH = 1024;
export const CERTIFICATE_HEIGHT = 723;

/** Navy from the template artwork. */
const INK = "#0a2540";
/** Parchment sampled from blank area of the template. */
const PARCHMENT = "#f3e7d0";

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

/**
 * Draw filled certificate onto a canvas and return PNG data URL.
 * Layout calibrated against public/certificates/completion-template.png (1024×723).
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

  // ── Name (ornamental line under “THIS CERTIFIES THAT”, ~y 295) ────
  const name = fields.userName.trim() || "Student";
  const nameSize = fitCentered(ctx, name, 520, 34, 18, italicFont);
  ctx.font = italicFont(nameSize);
  ctx.fillText(name, cx, 288);

  // ── Achievement on CHAPTER / LEVEL line (~y 350) ──────────────────
  const achievement = fields.achievement.trim();
  // Soft-cover the gold “CHAPTER / LEVEL” label so the real title reads cleanly.
  ctx.fillStyle = PARCHMENT;
  ctx.fillRect(300, 358, 424, 22);
  ctx.fillStyle = INK;
  const achSize = fitCentered(ctx, achievement, 560, 20, 13, boldFont);
  ctx.font = boldFont(achSize);
  ctx.fillText(achievement, cx, 350);

  // ── Language course under “in the course” (not the product brand) ─
  ctx.fillStyle = PARCHMENT;
  ctx.fillRect(180, 398, 664, 52);
  ctx.fillStyle = INK;
  const courseSize = fitCentered(ctx, fields.courseLine, 580, 26, 16, boldFont);
  ctx.font = boldFont(courseSize);
  ctx.fillText(fields.courseLine, cx, 422);

  // ── Date (bottom left) ────────────────────────────────────────────
  ctx.font = sansFont(12);
  ctx.fillText(fields.dateLabel, 212, 508);

  // ── Level (bottom right) ──────────────────────────────────────────
  ctx.font = sansFont(14);
  ctx.fillText(fields.level, 812, 508);

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
