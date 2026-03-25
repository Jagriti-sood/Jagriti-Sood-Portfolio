interface FooterProps {
  isDark: boolean;
}

const links = [
  { label: "Email", href: "mailto:jagritisood30@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/jagriti-sood" },
  { label: "Instagram", href: "https://instagram.com/jagriti_sood" },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1-H4f0bjV999U0hn-z_-sb7cGnwY52sju/view?usp=sharing",
  },
];

export function Footer({ isDark }: FooterProps) {
  const paperTexture = isDark
    ? "repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 4px), repeating-linear-gradient(90deg, rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 5px)"
    : "repeating-linear-gradient(0deg, rgba(92,67,44,0.028) 0px, rgba(92,67,44,0.028) 1px, transparent 1px, transparent 4px), repeating-linear-gradient(90deg, rgba(92,67,44,0.02) 0px, rgba(92,67,44,0.02) 1px, transparent 1px, transparent 5px)";

  return (
    <footer
      className={`relative overflow-hidden px-8 pb-8 pt-8 md:px-10 md:pt-10 lg:px-12 ${
        isDark ? "bg-[#111111]" : "bg-[#f6f0e8]"
      }`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-multiply dark:mix-blend-screen"
        style={{ backgroundImage: paperTexture }}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 ${
          isDark
            ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_22%,transparent_78%,rgba(255,255,255,0.015))]"
            : "bg-[linear-gradient(180deg,rgba(255,255,255,0.24),transparent_18%,transparent_82%,rgba(125,94,65,0.04))]"
        }`}
      />
      <div className="relative mx-auto max-w-[1240px]">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(260px,0.9fr)] md:items-start">
          <div className="max-w-[24rem]">
            <p
              className={`text-[13px] font-medium tracking-[0.01em] ${
                isDark ? "text-white/88" : "text-[#171717]"
              }`}
            >
              Jagriti Sood
            </p>
            <p
              className={`mt-2 text-[15px] leading-6 ${
                isDark ? "text-white/58" : "text-[#171717]/58"
              }`}
            >
              UX designer focused on healthcare, B2B software, and digital
              experiences that feel calm, useful, and well resolved.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-2 md:justify-self-end md:text-right">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`text-[13px] transition-colors ${
                  isDark
                    ? "text-white/54 hover:text-white"
                    : "text-[#171717]/56 hover:text-[#171717]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div
          className={`mt-6 flex flex-col gap-2 border-t pt-4 md:flex-row md:items-center md:justify-between ${
            isDark ? "border-white/6" : "border-black/6"
          }`}
        >
          <p
            className={`max-w-[28rem] text-[11px] italic ${
              isDark ? "text-white/34" : "text-[#171717]/36"
            }`}
          >
            Good design is felt before it&apos;s understood.
          </p>
          <p
            className={`text-[11px] ${
              isDark ? "text-white/24" : "text-[#171717]/26"
            }`}
          >
            Jagriti Sood · © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
