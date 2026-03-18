import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface HeroProps {
  isDark: boolean;
}

const EASE = [0.16, 1, 0.3, 1] as const;

const tools = [
  { label: "Figma" },
  { label: "UX Research" },
  { label: "AI Assisted Design" },
  { label: "Design Systems" },
  { label: "Prototyping" },
  { label: "Vibe Coding" },
  { label: "User Testing" },
  { label: "Interaction Design" },
  { label: "Wireframing" },
  { label: "Healthcare UX" },
  { label: "Ad-Tech" },
  { label: "B2B Products" },
  { label: "Information Architecture" },
  { label: "Product Strategy" },
  { label: "Usability Testing" },
];

const toolsRow2 = [
  { label: "Conversion-Led Design" },
  { label: "Mobile UX" },
  { label: "Accessibility" },
  { label: "Stakeholder Alignment" },
  { label: "Design Critique" },
  { label: "Content Strategy" },
  { label: "Journey Mapping" },
  { label: "Sprint Facilitation" },
  { label: "Service Design" },
  { label: "Visual Design" },
  { label: "Design Thinking" },
  { label: "Rapid Prototyping" },
  { label: "Cross-functional Collaboration" },
];

export function Hero({ isDark }: HeroProps) {
  return (
    <section
      id="hero"
      className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden ${
        isDark ? "bg-[#0a0a0f]" : "bg-white"
      }`}
    >
      {/* ── Static background layer ───────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        {/* Subtle grid — fades out toward the centre so content stays clear */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: isDark
              ? `linear-gradient(rgba(232,105,154,0.22) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(232,105,154,0.22) 1px, transparent 1px)`
              : `linear-gradient(rgba(232,105,154,0.18) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(232,105,154,0.18) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse 75% 65% at 50% 46%, transparent 38%, black 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 46%, transparent 38%, black 100%)",
          }}
        />
        {/* Grid dot intersections — same mask */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: isDark
              ? `radial-gradient(circle, rgba(232,105,154,0.5) 1px, transparent 1px)`
              : `radial-gradient(circle, rgba(232,105,154,0.35) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse 75% 65% at 50% 46%, transparent 38%, black 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 46%, transparent 38%, black 100%)",
          }}
        />
      </div>

      {/* ── Main content ─────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10 pt-28 md:pt-32 pb-16 flex flex-col items-center text-center">

        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="flex items-center justify-center gap-2.5 mb-8"
        >
          {/* Gradient-border wrapper */}
          <div
            className="inline-flex rounded-full p-[1px]"
            style={{
              background: "linear-gradient(135deg, rgba(232,105,154,0.55) 0%, rgba(194,84,124,0.2) 60%, transparent 100%)",
            }}
          >
            <div
              className="inline-flex items-center rounded-full overflow-hidden"
              style={{ background: isDark ? "#0e0e15" : "#f9f9fb" }}
            >
              {/* Left — status */}
              <span
                className="inline-flex items-center gap-2 pl-3.5 pr-3 py-1.5"
                style={{ borderRight: isDark ? "1px solid rgba(232,105,154,0.18)" : "1px solid rgba(232,105,154,0.2)" }}
              >
                <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                    style={{ backgroundColor: "#E8699A" }}
                  />
                  <span
                    className="relative inline-flex rounded-full h-1.5 w-1.5"
                    style={{ backgroundColor: "#E8699A" }}
                  />
                </span>
                <span className="text-xs font-semibold" style={{ color: "#E8699A" }}>
                  Available now
                </span>
              </span>

              {/* Right — descriptor */}
              <span
                className="pl-3 pr-3.5 py-1.5 text-xs font-medium"
                style={{ color: isDark ? "rgba(255,255,255,0.38)" : "rgba(0,0,0,0.4)" }}
              >
                UX Designer&nbsp;&nbsp;·&nbsp;&nbsp;5 years
              </span>
            </div>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: EASE }}
          className={`text-[clamp(2.6rem,7vw,5.5rem)] font-bold leading-[1.08] tracking-tight mb-6 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Designing experiences
          <br />
          that{" "}
          <span
            className="font-playfair"
            style={
              isDark
                ? {
                    fontStyle: "italic",
                    background: "linear-gradient(125deg, #E8699A 0%, #C2547C 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }
                : {
                    fontStyle: "italic",
                    color: "#E8699A",
                  }
            }
          >
            feel right.
          </span>
        </motion.h1>

        {/* Sub-heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.18, ease: EASE }}
          className={`max-w-lg mx-auto text-base md:text-lg leading-relaxed mb-10 overflow-hidden [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] ${
            isDark ? "text-white/52" : "text-gray-500"
          }`}
        >
          I'm <span style={{ color: "#E8699A" }}>Jagriti</span> — a UX Designer turning complex problems into clear, human-centred products across healthcare, ad-tech, and B2B.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.26, ease: EASE }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white transition-all duration-200 hover:scale-[1.03]"
            style={{
              background: "linear-gradient(135deg, #E8699A 0%, #C2547C 100%)",
            }}
          >
            View My Work
            <ArrowRight size={15} />
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold border transition-all duration-200 hover:scale-[1.03] ${
              isDark
                ? "border-white/12 text-white/70 hover:border-white/24 hover:text-white"
                : "border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900"
            }`}
          >
            Get in Touch
            <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </div>

      {/* ── Skills marquee ─────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="relative z-10 w-full mt-auto"
      >
        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to right, ${isDark ? "#0a0a0f" : "#ffffff"} 0%, transparent 100%)` }} />
        <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to left, ${isDark ? "#0a0a0f" : "#ffffff"} 0%, transparent 100%)` }} />

        {/* Row 1 — scrolls left */}
        <div
          className="w-full overflow-hidden py-4 border-t"
          style={{
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            background: isDark
              ? "rgba(255,255,255,0.03)"
              : "rgba(0,0,0,0.025)",
            borderColor: isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)",
          }}
        >
          <div className="flex animate-marquee whitespace-nowrap">
            {[...tools, ...tools].map((tool, i) => (
              <span
                key={`a-${i}`}
                className="inline-flex items-center gap-5 flex-shrink-0 px-3"
              >
                <span
                  className="text-xs font-semibold tracking-[0.2em] uppercase"
                  style={{ color: isDark ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.38)" }}
                >
                  {tool.label}
                </span>
                <span style={{ color: "#E8699A", fontSize: "10px", opacity: 0.6 }}>✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div
          className="w-full overflow-hidden py-3 border-t border-b"
          style={{
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            background: isDark
              ? "rgba(232,105,154,0.03)"
              : "rgba(232,105,154,0.025)",
            borderColor: isDark ? "rgba(232,105,154,0.1)" : "rgba(232,105,154,0.12)",
          }}
        >
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {[...toolsRow2, ...toolsRow2].map((tool, i) => (
              <span
                key={`b-${i}`}
                className="inline-flex items-center gap-5 flex-shrink-0 px-3"
              >
                <span
                  className="text-xs font-medium tracking-[0.18em] uppercase"
                  style={{ color: isDark ? "rgba(232,105,154,0.55)" : "rgba(194,84,124,0.55)" }}
                >
                  {tool.label}
                </span>
                <span style={{ color: isDark ? "rgba(244,160,192,0.3)" : "rgba(194,84,124,0.25)", fontSize: "8px" }}>◆</span>
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}