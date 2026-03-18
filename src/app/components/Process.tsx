import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";

interface ProcessProps {
  isDark: boolean;
}

type Concept = "A" | "B" | "C";

const steps = [
  {
    number: "01",
    letter: "D",
    title: "Discover",
    description:
      "Deep user interviews, competitive audits, stakeholder workshops. I don't open Figma until I understand the people who will use what I design.",
    color: "#E8699A",
    bg: "rgba(232,105,154,0.08)",
    artifact: "Research Report",
  },
  {
    number: "02",
    letter: "D",
    title: "Define",
    description:
      "Synthesis turns raw research into crisp problem statements, affinity maps, and a shared north-star that every design decision is measured against.",
    color: "#6B7FC4",
    bg: "rgba(107,127,196,0.08)",
    artifact: "Problem Statement",
  },
  {
    number: "03",
    letter: "D",
    title: "Dream",
    description:
      "Constraint-free ideation. Crazy-8s, sketches, analogous inspiration. Quantity before quality - the best ideas rarely arrive first.",
    color: "#4A9B8E",
    bg: "rgba(74,155,142,0.08)",
    artifact: "Concept Sketches",
  },
  {
    number: "04",
    letter: "D",
    title: "Design",
    description:
      "Wireframes evolve into high-fidelity UI with obsessive attention to interaction states, spacing, hierarchy, and motion - every pixel intentional.",
    color: "#C4885A",
    bg: "rgba(196,136,90,0.08)",
    artifact: "Hi-Fi Prototype",
  },
  {
    number: "05",
    letter: "D",
    title: "Develop",
    description:
      "I stay embedded with engineering through build - clarifying specs, catching drift early, and treating handoff as a conversation, not a document drop.",
    color: "#7C5FC4",
    bg: "rgba(124,95,196,0.08)",
    artifact: "Dev Handoff",
  },
  {
    number: "06",
    letter: "D",
    title: "Deliver",
    description:
      "Moderated testing, iteration, and impact measurement. Shipping is a milestone - not the finish line. I track what changed in the real world.",
    color: "#C2547C",
    bg: "rgba(194,84,124,0.08)",
    artifact: "Impact Report",
  },
];

// ─────────────────────────────────────────────────────────────
// CONCEPT A — Horizontal Timeline Rail
// Clean horizontal flow with numbered nodes on a ruled line,
// title + description hanging below. Very editorial / Awwwards.
// ─────────────────────────────────────────────────────────────
function ConceptA({ isDark }: { isDark: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref}>
      {/* Desktop: horizontal rail */}
      <div className="hidden lg:block relative">
        {/* Connecting line */}
        <div className="absolute top-[30px] left-0 right-0 flex items-center px-[calc(100%/12)]">
          <motion.div
            className="h-px flex-1"
            style={{
              background: `linear-gradient(90deg, ${steps.map(s => s.color).join(", ")})`,
              opacity: 0.25,
            }}
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <div className="grid grid-cols-6 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.09 + 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center"
            >
              {/* Node */}
              <div className="relative mb-5 flex items-center justify-center" style={{ zIndex: 2 }}>
                <div
                  className="w-[60px] h-[60px] rounded-full flex items-center justify-center relative"
                  style={{
                    border: `1.5px solid ${step.color}40`,
                    background: isDark ? "#0d0d13" : "#f8f8f8",
                  }}
                >
                  {/* Inner filled dot */}
                  <div
                    className="w-[10px] h-[10px] rounded-full"
                    style={{ background: step.color }}
                  />
                  {/* Number label — top right of circle */}
                  <span
                    className="absolute -top-1 -right-1 text-[9px] font-black px-1.5 py-0.5 rounded-full"
                    style={{
                      background: step.color,
                      color: "#fff",
                      fontFamily: "Inter, sans-serif",
                      lineHeight: 1,
                    }}
                  >
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3
                className={`text-base font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                className={`text-[11px] leading-relaxed ${isDark ? "text-white/38" : "text-gray-400"}`}
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                {step.description}
              </p>

              {/* Artifact tag */}
              <div
                className="mt-4 px-2.5 py-1 rounded-full text-[9px] font-semibold tracking-wide uppercase"
                style={{
                  background: step.bg,
                  color: step.color,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                ↳ {step.artifact}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile: vertical stacked with left spine */}
      <div className="lg:hidden relative pl-8">
        <div
          className="absolute left-3 top-4 bottom-4 w-px"
          style={{
            background: `linear-gradient(180deg, ${steps.map(s => s.color).join(", ")})`,
            opacity: 0.3,
          }}
        />
        <div className="flex flex-col gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: 16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Spine dot */}
              <div
                className="absolute -left-[26px] top-1 w-[10px] h-[10px] rounded-full border-2"
                style={{ background: step.color, borderColor: isDark ? "#0d0d13" : "#f8f8f8" }}
              />
              <div className="flex items-baseline gap-2 mb-1.5">
                <span
                  className="text-[9px] font-black"
                  style={{ color: step.color, fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {step.number}
                </span>
                <h3
                  className={`text-lg font-bold ${isDark ? "text-white" : "text-gray-900"}`}
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {step.title}
                </h3>
              </div>
              <p
                className={`text-sm leading-relaxed ${isDark ? "text-white/40" : "text-gray-400"}`}
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// CONCEPT B — Bold Typographic List
// Full-width rows. Huge outlined step number on the left acts
// as a graphic element. Title + description on the right.
// Dividers animate in on scroll. Very magazine / confident.
// ─────────────────────────────────────────────────────────────
function ConceptB({ isDark }: { isDark: boolean }) {
  return (
    <div className="flex flex-col">
      {steps.map((step, i) => (
        <StepRow key={step.number} step={step} index={i} isDark={isDark} />
      ))}
    </div>
  );
}

function StepRow({
  step,
  index,
  isDark,
}: {
  step: (typeof steps)[0];
  index: number;
  isDark: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="relative">
      {/* Animated divider */}
      <motion.div
        className="w-full h-px"
        style={{
          background: isDark
            ? `linear-gradient(90deg, ${step.color}30, transparent)`
            : `linear-gradient(90deg, ${step.color}25, transparent)`,
        }}
        initial={{ scaleX: 0, transformOrigin: "left" }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.7, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: index * 0.06 + 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={`group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-7 sm:py-8 transition-colors duration-300 ${
          isDark ? "hover:bg-white/[0.02]" : "hover:bg-black/[0.015]"
        }`}
      >
        {/* Giant outline number */}
        <div
          className="flex-shrink-0 select-none leading-none"
          style={{
            fontFamily: "Plus Jakarta Sans, sans-serif",
            fontSize: "clamp(3rem, 6vw, 5rem)",
            fontWeight: 900,
            color: "transparent",
            WebkitTextStroke: `1.5px ${step.color}`,
            opacity: isDark ? 0.7 : 0.55,
            minWidth: "5rem",
          }}
          aria-hidden="true"
        >
          {step.number}
        </div>

        {/* Title */}
        <div className="flex-shrink-0 sm:w-36">
          <h3
            className={`text-xl sm:text-2xl font-bold leading-tight ${isDark ? "text-white" : "text-gray-900"}`}
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            {step.title}
          </h3>
          <div
            className="mt-2 h-[2px] w-8 rounded-full transition-all duration-300 group-hover:w-14"
            style={{ background: step.color }}
          />
        </div>

        {/* Description */}
        <p
          className={`flex-1 text-sm leading-relaxed ${isDark ? "text-white/42" : "text-gray-400"}`}
          style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
        >
          {step.description}
        </p>

        {/* Artifact pill — appears on hover */}
        <div
          className="flex-shrink-0 text-[10px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block"
          style={{
            background: step.bg,
            color: step.color,
            fontFamily: "Plus Jakarta Sans, sans-serif",
          }}
        >
          {step.artifact}
        </div>
      </motion.div>

      {/* Bottom divider on last item */}
      {index === steps.length - 1 && (
        <motion.div
          className="w-full h-px"
          style={{
            background: isDark
              ? `linear-gradient(90deg, ${step.color}30, transparent)`
              : `linear-gradient(90deg, ${step.color}25, transparent)`,
          }}
          initial={{ scaleX: 0, transformOrigin: "left" }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: index * 0.05 + 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// CONCEPT C — Asymmetric Bento Mosaic
// Steps live in a bento grid with varied cell sizes.
// 01 is wide (hero), 02–03 side by side, 04 wide, 05–06 equal.
// Rich internal detail per card. Most editorial of the three.
// ─────────────────────────────────────────────────────────────
function ConceptC({ isDark }: { isDark: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const bentoConfig = [
    { colSpan: "lg:col-span-4", rowSpan: "" },   // 01 — wide
    { colSpan: "lg:col-span-2", rowSpan: "" },   // 02
    { colSpan: "lg:col-span-2", rowSpan: "" },   // 03
    { colSpan: "lg:col-span-4", rowSpan: "" },   // 04 — wide
    { colSpan: "lg:col-span-3", rowSpan: "" },   // 05
    { colSpan: "lg:col-span-3", rowSpan: "" },   // 06
  ];

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 md:gap-4"
    >
      {steps.map((step, i) => {
        const isWide = i === 0 || i === 3;
        return (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
              duration: 0.6,
              delay: i * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`${bentoConfig[i].colSpan} sm:col-span-1 ${
              i === 0 ? "sm:col-span-2" : ""
            } ${i === 3 ? "sm:col-span-2" : ""} relative rounded-2xl overflow-hidden border group cursor-default transition-all duration-300 ${
              isDark
                ? "border-white/7 bg-[#111118] hover:border-white/15"
                : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-2xl hover:shadow-gray-100/80"
            }`}
          >
            {/* Colored left border stripe */}
            <div
              className="absolute top-0 left-0 bottom-0 w-[3px]"
              style={{ background: `linear-gradient(180deg, ${step.color}, ${step.color}33)` }}
            />

            <div className={`flex flex-col h-full p-6 md:p-7 ${isWide ? "lg:flex-row lg:gap-10 lg:items-center" : ""}`}>
              {/* Left / top section */}
              <div className={`${isWide ? "lg:flex-shrink-0 lg:w-64" : ""}`}>
                {/* Step number — very large, colored */}
                <div
                  className="font-black leading-none mb-4 select-none"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: isWide ? "5rem" : "3.5rem",
                    color: step.color,
                    opacity: isDark ? 0.18 : 0.13,
                    letterSpacing: "-0.04em",
                    lineHeight: 0.9,
                  }}
                  aria-hidden="true"
                >
                  {step.number}
                </div>

                {/* Title */}
                <h3
                  className={`font-bold leading-tight mb-2 ${
                    isWide ? "text-3xl md:text-4xl" : "text-xl"
                  } ${isDark ? "text-white" : "text-gray-900"}`}
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {step.title}
                </h3>

                {/* Colored underline */}
                <motion.div
                  className="h-[2px] rounded-full mb-4"
                  style={{ background: step.color }}
                  initial={{ width: 0 }}
                  animate={inView ? { width: 40 } : { width: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.07 + 0.4, ease: "easeOut" }}
                />
              </div>

              {/* Right / bottom section */}
              <div className="flex flex-col flex-1 justify-between">
                <p
                  className={`text-sm leading-relaxed ${isDark ? "text-white/42" : "text-gray-400"}`}
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {step.description}
                </p>

                {/* Artifact tag at the bottom */}
                <div className="mt-5 flex items-center gap-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: step.color }}
                  />
                  <span
                    className="text-[10px] font-semibold tracking-widest uppercase"
                    style={{ color: step.color, fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {step.artifact}
                  </span>
                </div>
              </div>
            </div>

            {/* Hover background wash */}
            <div
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400"
              style={{ background: step.bg }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// MAIN EXPORT
// ─────────────────────────────────────────────────────────────
export function Process({ isDark }: ProcessProps) {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-50px" });
  const [concept, setConcept] = useState<Concept>("A");

  const conceptMeta: Record<Concept, { label: string; sub: string }> = {
    A: { label: "Timeline Rail", sub: "Horizontal flow" },
    B: { label: "Bold List", sub: "Typographic rows" },
    C: { label: "Bento Mosaic", sub: "Asymmetric grid" },
  };

  return (
    <section
      id="process"
      className={`py-24 md:py-32 px-6 md:px-10 ${isDark ? "bg-[#0d0d13]" : "bg-gray-50/50"}`}
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 md:mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-[#C2547C]" />
            <span
              className="text-xs font-semibold tracking-widest uppercase text-[#C2547C]"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              How I Work
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-24">
            <h2
              className={`text-4xl md:text-5xl font-bold leading-tight ${isDark ? "text-white" : "text-gray-900"}`}
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              The 6D Process.
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #E8699A, #C2547C)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Proven. Repeatable.
              </span>
            </h2>

            <div className="lg:max-w-sm pb-1">
              <p
                className={`text-sm leading-relaxed ${isDark ? "text-white/40" : "text-gray-400"}`}
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                A patented UX methodology by iMaginXP
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Concept Switcher ── */}
        <div className="flex items-center gap-3 mb-10">
          {/* Label */}
          <span
            className={`text-[10px] font-semibold tracking-widest uppercase mr-1 ${isDark ? "text-white/25" : "text-gray-300"}`}
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Layout
          </span>

          {(["A", "B", "C"] as Concept[]).map((c) => (
            <button
              key={c}
              onClick={() => setConcept(c)}
              className={`relative flex flex-col items-start px-4 py-2.5 rounded-xl border text-left transition-all duration-200 ${
                concept === c
                  ? isDark
                    ? "border-[#E8699A]/40 bg-[#E8699A]/8"
                    : "border-[#E8699A]/30 bg-[#E8699A]/6"
                  : isDark
                  ? "border-white/7 bg-white/[0.025] hover:border-white/15"
                  : "border-gray-100 bg-white hover:border-gray-200"
              }`}
            >
              <div className="flex items-center gap-2 mb-0.5">
                <span
                  className={`w-4 h-4 rounded-md flex items-center justify-center text-[9px] font-black transition-colors ${
                    concept === c ? "bg-[#E8699A] text-white" : isDark ? "bg-white/10 text-white/40" : "bg-gray-100 text-gray-400"
                  }`}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {c}
                </span>
                <span
                  className={`text-xs font-semibold transition-colors ${
                    concept === c
                      ? isDark ? "text-white" : "text-gray-900"
                      : isDark ? "text-white/45" : "text-gray-500"
                  }`}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {conceptMeta[c].label}
                </span>
              </div>
              <span
                className={`text-[10px] transition-colors ${
                  concept === c
                    ? isDark ? "text-white/45" : "text-gray-400"
                    : isDark ? "text-white/22" : "text-gray-300"
                }`}
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {conceptMeta[c].sub}
              </span>
              {concept === c && (
                <motion.div
                  layoutId="conceptIndicator"
                  className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-[#E8699A]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* ── Active Concept ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={concept}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {concept === "A" && <ConceptA isDark={isDark} />}
            {concept === "B" && <ConceptB isDark={isDark} />}
            {concept === "C" && <ConceptC isDark={isDark} />}
          </motion.div>
        </AnimatePresence>

        {/* ── Attribution ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`mt-12 text-[11px] ${isDark ? "text-white/18" : "text-gray-300"}`}
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          The 6D framework is a patented design process by{" "}
          <span className={isDark ? "text-white/32" : "text-gray-400"}>iMaginXP</span>.
        </motion.p>
      </div>
    </section>
  );
}