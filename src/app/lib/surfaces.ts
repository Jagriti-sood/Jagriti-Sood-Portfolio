export function getPageSurfaceClass(isDark: boolean) {
  return isDark ? "bg-[#111111]" : "bg-[#f6f0e8]";
}

export function getPaperTexture(isDark: boolean) {
  return isDark
    ? "repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 4px), repeating-linear-gradient(90deg, rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 5px)"
    : "repeating-linear-gradient(0deg, rgba(92,67,44,0.028) 0px, rgba(92,67,44,0.028) 1px, transparent 1px, transparent 4px), repeating-linear-gradient(90deg, rgba(92,67,44,0.02) 0px, rgba(92,67,44,0.02) 1px, transparent 1px, transparent 5px)";
}

export function getPageSurfaceOverlayClass(isDark: boolean) {
  return isDark
    ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_22%,transparent_78%,rgba(255,255,255,0.015))]"
    : "bg-[linear-gradient(180deg,rgba(255,255,255,0.24),transparent_18%,transparent_82%,rgba(125,94,65,0.04))]";
}
