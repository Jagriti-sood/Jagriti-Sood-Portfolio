import { useEffect } from "react";

export function useFavicon() {
  useEffect(() => {
    // SVG matching the navbar logo: rounded square, pink gradient, "JS" text
    const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E8699A"/>
      <stop offset="100%" stop-color="#C2547C"/>
    </linearGradient>
    <clipPath id="c">
      <rect width="32" height="32" rx="8" ry="8"/>
    </clipPath>
  </defs>
  <rect width="32" height="32" rx="8" ry="8" fill="url(#g)"/>
  <text
    x="16"
    y="21"
    text-anchor="middle"
    font-family="system-ui, -apple-system, sans-serif"
    font-size="12"
    font-weight="700"
    fill="white"
    letter-spacing="0.5"
  >JS</text>
</svg>`.trim();

    const url = `data:image/svg+xml,${encodeURIComponent(svg)}`;

    // Update existing favicon link or create one
    let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.type = "image/svg+xml";
    link.href = url;
  }, []);
}
