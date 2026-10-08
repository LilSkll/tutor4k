/**
 * Sparse fixed décor (CSS shapes only) — no assets, no animation loops.
 * Mounted only while Halloween season is on.
 */
const DECOR: Array<{
  kind: "pumpkin" | "hat";
  top: string;
  left?: string;
  right?: string;
  size: number;
  opacity: number;
  rotate?: number;
}> = [
  { kind: "pumpkin", top: "7%", left: "3%", size: 22, opacity: 0.16, rotate: -8 },
  { kind: "hat", top: "11%", right: "4%", size: 20, opacity: 0.14, rotate: 12 },
  { kind: "pumpkin", top: "28%", right: "2.5%", size: 16, opacity: 0.12, rotate: 6 },
  { kind: "hat", top: "42%", left: "1.5%", size: 18, opacity: 0.11, rotate: -14 },
  { kind: "pumpkin", top: "58%", left: "4%", size: 14, opacity: 0.1, rotate: 10 },
  { kind: "hat", top: "68%", right: "5%", size: 17, opacity: 0.12, rotate: -6 },
  { kind: "pumpkin", top: "82%", right: "8%", size: 20, opacity: 0.13, rotate: -4 },
  { kind: "hat", top: "88%", left: "6%", size: 15, opacity: 0.1, rotate: 8 },
];

export function HalloweenBackdrop() {
  return (
    <div className="hw-bg-layer" aria-hidden>
      {DECOR.map((item, i) => (
        <span
          key={i}
          className={item.kind === "pumpkin" ? "hw-pumpkin" : "hw-witch-hat-deco"}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            width: item.size,
            height: item.kind === "pumpkin" ? item.size * 0.9 : item.size * 0.75,
            opacity: item.opacity,
            transform: item.rotate ? `rotate(${item.rotate}deg)` : undefined,
          }}
        />
      ))}
    </div>
  );
}
