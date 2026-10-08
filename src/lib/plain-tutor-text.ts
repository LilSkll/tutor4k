/**
 * Strip markdown emphasis so feedback shown in plain <p> / teacher lists
 * never leaks raw **asterisks** or backticks.
 * Tutor chat can still render Markdown; exercise/teacher surfaces cannot.
 */
export function plainTutorText(text: string): string {
  if (!text) return "";
  let s = text.replace(/\r\n/g, "\n");

  s = s.replace(/```[\s\S]*?```/g, (block) =>
    block.replace(/```\w*/g, "").trim(),
  );

  // Unwrap paired emphasis (repeat for adjacent spans).
  for (let i = 0; i < 4; i++) {
    const next = s
      .replace(/\*\*([^*]+)\*\*/g, "$1")
      .replace(/__([^_\n]+)__/g, "$1")
      .replace(/`([^`\n]+)`/g, "$1")
      .replace(/(^|[^\w*])\*([^*\n]+)\*([^\w*]|$)/g, "$1$2$3")
      .replace(/(^|[^\w_])_([^_\n]+)_([^\w_]|$)/g, "$1$2$3");
    if (next === s) break;
    s = next;
  }

  // Orphan markers left by models ("** Volvieron" / trailing **).
  s = s.replace(/\*{1,2}/g, "").replace(/_{2,}/g, "");
  s = s.replace(/^#{1,6}\s+/gm, "");
  s = s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
  s = s.replace(/[^\S\n]{2,}/g, " ");
  s = s.replace(/\n{3,}/g, "\n\n");
  return s.trim();
}
