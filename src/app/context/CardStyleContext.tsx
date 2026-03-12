/** Diagonal Sweep gradient — locked in as the card style. */

function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function buildGradient(
  accent: string,
  isEven: boolean,
  isDark: boolean
): string {
  const hi = isDark ? 0.28 : 0.22;
  const lo = isDark ? 0.12 : 0.09;
  const c1 = hexToRgba(accent, hi);
  const c2 = hexToRgba(accent, lo);
  return isEven
    ? `linear-gradient(145deg, ${c1} 0%, ${c2} 28%, transparent 54%)`
    : `linear-gradient(215deg, ${c1} 0%, ${c2} 28%, transparent 54%)`;
}
