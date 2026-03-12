import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useState, useCallback } from "react";

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

export function Hero({ isDark }: HeroProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Normalised mouse position (0–1). Updated directly on the motion value —
  // no React re-render on every mousemove, maximum performance.
  const rawX = useMotionValue(0.5);
  const rawY = useMotionValue(0.5);

  // Gentle spring gives the spotlight a slight lag, so it feels physical
  const springX = useSpring(rawX, { damping: 22, stiffness: 80 });
  const springY = useSpring(rawY, { damping: 22, stiffness: 80 });

  // Derive the gradient string from the spring values — zero re-renders
  const spotlightBg = useTransform(
    [springX, springY],
    ([xv, yv]: number[]) =>
      `radial-gradient(580px circle at ${xv * 100}% ${yv * 100}%, rgba(232,105,154,${isDark ? 0.09 : 0.06}), transparent 65%)`
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      rawX.set((e.clientX - rect.left) / rect.width);
      rawY.set((e.clientY - rect.top) / rect.height);
    },
    [rawX, rawY]
  );

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden ${
        isDark ? "bg-[#0a0a0f]" : "bg-white"
      }`}
    >
      {/* ── Static background layer ───────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        {/* Subtle line grid — very low opacity so it's texture, not content */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(${isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)"} 1px, transparent 1px),
              linear-gradient(90deg, ${isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)"} 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 18%, black 80%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 18%, black 80%, transparent 100%)",
          }}
        />

        {/* Ambient centre glow — always present, below the spotlight */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, #E8699A 0%, #C2547C 40%, transparent 70%)",
            filter: "blur(90px)",
            opacity: isDark ? 0.065 : 0.04,
          }}
        />
      </div>

      {/*
        ── Cursor spotlight ──────────────────────────────────
        A radial glow that follows the pointer with a spring lag.
        Fades in on mouse-enter, fades out on mouse-leave.
        Driven entirely by motion values — no React re-renders.
      */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: spotlightBg }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        aria-hidden="true"
      />

      {/* ── Main content ─────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center pt-24 pb-6">

        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="flex justify-center mb-10"
        >
          <div
            className={`inline-flex items-center gap-2.5 pl-2 pr-4 py-1.5 rounded-full text-xs font-medium border ${
              isDark
                ? "border-white/10 bg-white/5 text-white/60"
                : "border-gray-200/80 bg-gray-50 text-gray-500"
            }`}
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <span className="flex items-center gap-1.5 bg-gradient-to-r from-[#E8699A] to-[#C2547C] text-white px-2.5 py-0.5 rounded-full text-[10px] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
              Open to Work
            </span>
            UX Designer · 5 Yrs
          </div>
        </motion.div>

        {/*
          ── Headline ──────────────────────────────────────────
          Each line clips its child and reveals upward — the
          standard editorial "curtain" reveal.
        */}
        <h1
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-bold tracking-tight leading-[1.08] mb-5 ${
            isDark ? "text-white" : "text-gray-950"
          }`}
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          {/* Line 1 */}
          <span className="block" style={{ overflow: "hidden", paddingBottom: "0.14em", marginBottom: "-0.14em" }}>
            <motion.span
              className="block"
              initial={{ y: "108%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.05, delay: 0.28, ease: EASE }}
            >
              I make the right
            </motion.span>
          </span>

          {/* Line 2 — contains the gradient accent word */}
          <span className="block" style={{ overflow: "hidden", paddingBottom: "0.2em", marginBottom: "-0.2em" }}>
            <motion.span
              className="block"
              initial={{ y: "108%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.05, delay: 0.44, ease: EASE }}
            >
              experience feel{" "}

              {/* "obvious." — static gradient */}
              <span className="relative inline-block">
                <span
                  style={{
                    fontStyle: "italic",
                    background:
                      "linear-gradient(125deg, #E8699A, #C2547C, #F4A0C0)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    display: "inline",
                  }}
                >
                  obvious.
                </span>

                {/*
                  Calligraphic brush-stroke underline — draws itself in
                  after the headline settles. Dual stroke: thick body +
                  hairline shadow mimics broad-nib pressure variation.
                */}
                <span
                  className="absolute left-0 w-full overflow-visible pointer-events-none"
                  style={{ bottom: "-0.15em", display: "block", lineHeight: 0 }}
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 240 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="strokeGrad" x1="0" y1="0" x2="100%" y2="0">
                        <stop offset="0%" stopColor="#E8699A" />
                        <stop offset="55%" stopColor="#C2547C" />
                        <stop offset="100%" stopColor="#F4A0C0" />
                      </linearGradient>
                    </defs>
                    {/* Broad nib body stroke */}
                    <motion.path
                      d="M 3,10 C 30,3 60,13 92,8 S 140,2 170,8 S 212,13 237,9"
                      stroke="url(#strokeGrad)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.9 }}
                      transition={{
                        pathLength: {
                          duration: 1.2,
                          delay: 1.08,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        },
                        opacity: { duration: 0.25, delay: 1.08 },
                      }}
                    />
                    {/* Hairline return stroke */}
                    <motion.path
                      d="M 3,10 C 30,3 60,13 92,8 S 140,2 170,8 S 212,13 237,9"
                      stroke="url(#strokeGrad)"
                      strokeWidth="0.7"
                      strokeLinecap="round"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.32 }}
                      transition={{
                        pathLength: {
                          duration: 1.2,
                          delay: 1.18,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        },
                        opacity: { duration: 0.25, delay: 1.18 },
                      }}
                    />
                  </svg>
                </span>
              </span>
            </motion.span>
          </span>
        </h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 0.84, ease: "easeOut" }}
          className={`text-xl md:text-2xl font-medium tracking-tight mb-8 ${
            isDark ? "text-white/35" : "text-gray-400"
          }`}
          style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic" }}
        >
          Even when nothing about the problem is.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 1.0, ease: "easeOut" }}
          className={`max-w-xl mx-auto text-sm md:text-base mb-12 leading-relaxed ${
            isDark ? "text-white/50" : "text-gray-500"
          }`}
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Five years making products people actually want to use again.
          Healthcare, ad-tech, B2B.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.14, ease: EASE }}
          className={`flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x rounded-2xl border overflow-hidden ${
            isDark
              ? "border-white/8 divide-white/8 bg-white/[0.05] backdrop-blur-xl"
              : "border-gray-100 divide-gray-100 bg-gray-50/70"
          }`}
        >
          {[
            { value: "5+", label: "Years of Practice", sub: "Across 4 industries" },
            { value: "50+", label: "Products Shipped", sub: "End-to-end ownership" },
            { value: "3×", label: "Average Uplift", sub: "In key UX metrics" },
          ].map((stat, i) => (
            <div key={i} className="flex-1 text-center py-6 px-6 w-full sm:w-auto">
              <p
                className="text-3xl md:text-4xl font-bold"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  background: "linear-gradient(135deg, #E8699A, #C2547C)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </p>
              <p
                className={`text-xs font-semibold mt-1 ${
                  isDark ? "text-white/65" : "text-gray-700"
                }`}
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {stat.label}
              </p>
              <p
                className={`text-[10px] mt-0.5 ${
                  isDark ? "text-white/30" : "text-gray-400"
                }`}
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {stat.sub}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Skills marquee ─────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className={`relative z-10 w-full mt-10 py-5 overflow-hidden border-t border-b ${
          isDark ? "border-white/10" : "border-gray-200"
        }`}
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {/* Track A */}
          <div className="flex gap-10 flex-shrink-0">
            {tools.map((tool, i) => (
              <span
                key={`a-${i}`}
                className={`text-[11px] font-semibold tracking-widest uppercase flex-shrink-0`}
                style={{
                  fontFamily: "Poppins, sans-serif",
                  color: isDark ? "rgba(255,255,255,0.45)" : "rgb(156,163,175)",
                }}
              >
                {tool.label}
                <span className="ml-10" style={{ color: "#E8699A", opacity: 0.6 }}>·</span>
              </span>
            ))}
          </div>
          {/* Track B — identical, creates seamless loop */}
          <div className="flex gap-10 flex-shrink-0" aria-hidden="true">
            {tools.map((tool, i) => (
              <span
                key={`b-${i}`}
                className={`text-[11px] font-semibold tracking-widest uppercase flex-shrink-0`}
                style={{
                  fontFamily: "Poppins, sans-serif",
                  color: isDark ? "rgba(255,255,255,0.45)" : "rgb(156,163,175)",
                }}
              >
                {tool.label}
                <span className="ml-10" style={{ color: "#E8699A", opacity: 0.6 }}>·</span>
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}