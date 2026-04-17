import type { CSSProperties } from "react";

interface SkillsManifestoProps {
  isDark: boolean;
}

const MANIFESTO =
  "I design products that earn their place. Led by research. Built on systems. Shipped only when they actually work.";

const REVEAL_START = 22;
const REVEAL_END = 55;

export function SkillsManifesto({ isDark }: SkillsManifestoProps) {
  const words = MANIFESTO.split(" ");
  const total = words.length;
  const step = (REVEAL_END - REVEAL_START) / total;
  const span = step * 1.3;

  const dim = isDark ? "rgba(255,255,255,0.22)" : "rgba(17,17,24,0.22)";
  const sharp = isDark ? "rgba(255,255,255,1)" : "rgba(17,17,24,1)";

  return (
    <section
      className={`manifesto-section py-20 md:py-28 px-6 md:px-10 ${
        isDark ? "bg-[#0a0a0f]" : "bg-white"
      }`}
      style={
        {
          "--m-dim": dim,
          "--m-sharp": sharp,
        } as CSSProperties
      }
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6 md:mb-8">
          <div className="w-6 h-px bg-[#E8699A]" />
          <span
            className="text-xs font-semibold tracking-widest uppercase text-[#E8699A]"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            The Approach
          </span>
        </div>

        <p
          className="font-bold text-center"
          style={{
            fontFamily: "Plus Jakarta Sans, sans-serif",
            fontSize: "clamp(1.9rem, 5vw, 3.75rem)",
            lineHeight: 1.08,
            letterSpacing: "-0.028em",
          }}
        >
          {words.map((word, i) => {
            const s = REVEAL_START + i * step;
            const e = Math.min(REVEAL_END, s + span);
            return (
              <span
                key={i}
                className="manifesto-word"
                style={{ "--s": s, "--e": e } as CSSProperties}
              >
                {word}&nbsp;
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
}
