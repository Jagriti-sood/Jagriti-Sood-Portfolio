import { Mail, Linkedin, Instagram } from "lucide-react";

interface FooterProps {
  isDark: boolean;
}

const socials = [
  {
    icon: <Mail size={13} />,
    label: "Email",
    href: "mailto:jagritisood30@gmail.com",
  },
  {
    icon: <Linkedin size={13} />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/jagriti-sood",
  },
  {
    icon: <Instagram size={13} />,
    label: "Instagram",
    href: "https://instagram.com/jagriti_sood",
  },
];

export function Footer({ isDark }: FooterProps) {
  return (
    <footer
      className={`py-6 px-6 md:px-10 border-t ${
        isDark ? "bg-[#0a0a0f] border-white/6" : "bg-white border-gray-100"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Left — Social links */}
        <div className="flex items-center gap-0.5">
          {socials.map((s, i) => (
            <span key={s.label} className="flex items-center">
              <a
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isDark
                    ? "text-white/35 hover:text-white hover:bg-white/6"
                    : "text-gray-400 hover:text-gray-700 hover:bg-gray-50"
                }`}
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                {s.icon}
                {s.label}
              </a>
              {i < socials.length - 1 && (
                <span
                  className="w-px h-3 mx-0.5"
                  style={{
                    backgroundColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.1)",
                  }}
                />
              )}
            </span>
          ))}
        </div>

        {/* Right — quote + copyright */}
        <div className="flex flex-col items-center sm:items-end gap-0.5">
          <p
            className="text-xs italic"
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              color: isDark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.3)",
            }}
          >
            Good design is felt before it's understood.
          </p>
          <p
            className="text-[11px]"
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              color: isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.2)",
            }}
          >
            Crafted with care · © 2026 Jagriti Sood
          </p>
        </div>

      </div>
    </footer>
  );
}