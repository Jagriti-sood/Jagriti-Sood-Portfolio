import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { fadeUp, stagger } from "../lib/motion";

interface HeroProps {
  isDark: boolean;
}

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
        {/* Subtle grid — fades from all edges, centre stays clear */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: isDark
              ? `linear-gradient(rgba(232,105,154,0.18) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(232,105,154,0.18) 1px, transparent 1px)`
              : `linear-gradient(rgba(232,105,154,0.13) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(232,105,154,0.13) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            maskImage: `linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%),
                        linear-gradient(to bottom, transparent 0%, transparent 12%, black 24%, black 72%, transparent 96%),
                        radial-gradient(ellipse 88% 82% at 50% 52%, transparent 28%, black 52%, transparent 90%)`,
            WebkitMaskImage: `linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%),
                              linear-gradient(to bottom, transparent 0%, transparent 12%, black 24%, black 72%, transparent 96%),
                              radial-gradient(ellipse 88% 82% at 50% 52%, transparent 28%, black 52%, transparent 90%)`,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />
      </div>

      {/* ── Main content ─────────────────────────────────── */}
      <motion.div
        variants={stagger(0.1, 0.1)}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10 pt-28 md:pt-20 pb-16 flex flex-col items-center text-center"
      >

        {/* Available badge */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0 }}
            className="relative inline-flex items-center rounded-full overflow-hidden cursor-default"
            style={{
              background: isDark ? "#0e0e15" : "#ffffff",
              boxShadow: isDark
                ? "0 0 0 1px rgba(255,255,255,0.08), 0 10px 30px -10px rgba(0,0,0,0.5), 0 0 24px -6px rgba(34,197,94,0.12)"
                : "0 0 0 1px rgba(0,0,0,0.06), 0 2px 8px -2px rgba(0,0,0,0.06), 0 4px 16px -4px rgba(0,0,0,0.04), 0 0 20px -4px rgba(34,197,94,0.08)",
            }}
          >
            {/* Left — status */}
            <span
              className="inline-flex items-center gap-2 pl-3.5 pr-3 py-1.5"
              style={{
                borderRight: isDark
                  ? "1px solid rgba(255,255,255,0.08)"
                  : "1px solid rgba(0,0,0,0.07)",
              }}
            >
              <span className="relative flex items-center justify-center h-1.5 w-1.5 flex-shrink-0">
                {/* Soft radial halo — gently breathing */}
                <motion.span
                  aria-hidden
                  animate={{ opacity: [0.55, 0.9, 0.55] }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: "14px",
                    height: "14px",
                    background:
                      "radial-gradient(circle, rgba(34,197,94,0.55) 0%, rgba(34,197,94,0) 70%)",
                    filter: "blur(1px)",
                  }}
                />
                {/* Solid dot with its own glow */}
                <span
                  className="relative inline-flex rounded-full h-1.5 w-1.5"
                  style={{
                    backgroundColor: "#22c55e",
                    boxShadow: "0 0 6px rgba(34,197,94,0.7)",
                  }}
                />
              </span>
              <span
                className="text-xs font-semibold"
                style={{
                  color: isDark ? "rgba(255,255,255,0.85)" : "rgba(0,0,0,0.72)",
                  letterSpacing: "-0.01em",
                }}
              >
                Available now
              </span>
            </span>

            {/* Right — descriptor */}
            <span
              className="pl-3 pr-3.5 py-1.5 text-xs font-medium"
              style={{
                color: isDark ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.45)",
              }}
            >
              UX Designer&nbsp;&nbsp;·&nbsp;&nbsp;5 years
            </span>
          </motion.div>
        </motion.div>

        {/* Headline — two-line reveal for a touch of rhythm */}
        <h1
          className={`text-[clamp(2.6rem,7vw,5.5rem)] font-bold leading-[1.08] tracking-tight mb-6 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          <motion.span
            variants={fadeUp}
            className="block"
          >
            Designing experiences
          </motion.span>
          <motion.span
            variants={fadeUp}
            className="block"
          >
            that{" "}
            <span
              style={
                isDark
                  ? {
                      background: "linear-gradient(125deg, #E8699A 0%, #C2547C 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }
                  : {
                      color: "#E8699A",
                    }
              }
            >
              feel right.
            </span>
          </motion.span>
        </h1>

        {/* Sub-heading */}
        <motion.p
          variants={fadeUp}
          className={`max-w-lg md:max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-10 ${
            isDark ? "text-white/52" : "text-gray-500"
          }`}
        >
          I'm Jagriti — a UX Designer turning complex problems into clear, human-centred products across healthcare, ad-tech, and B2B.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
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
      </motion.div>
    </section>
  );
}
