import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { MapPin, Calendar } from "lucide-react";

interface ExperienceProps {
  isDark: boolean;
}

const experiences = [
  {
    id: 1,
    index: "01",
    year: "2024",
    role: "Senior UX/UI Designer",
    company: "Maple Code Innovations",
    location: "ON, Canada",
    duration: "04/2024 – Present",
    description:
      "Embedded design partner across multiple B2B products — systems, brand, and end-to-end UX for shipping healthcare and SaaS work.",
    current: true,
  },
  {
    id: 2,
    index: "02",
    year: "2021",
    role: "UX/UI Designer",
    company: "Source Digital",
    location: "Philadelphia, USA",
    duration: "06/2021 – 03/2024",
    description:
      "Simplified complex ad-scheduling workflows for media buyers at major Canadian broadcasters.",
    current: false,
  },
  {
    id: 3,
    index: "03",
    year: "2020",
    role: "UX/UI Designer",
    company: "Bajaj FinServ Health Ltd",
    location: "Maharashtra, India",
    duration: "08/2020 – 03/2021",
    description:
      "Delivered UX across event tech, e-commerce, and non-profit projects, building strong design foundations.",
    current: false,
  },
];

export function Experience({ isDark }: ExperienceProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const lineColor = isDark ? "rgba(232,105,154,0.3)" : "rgba(232,105,154,0.4)";

  return (
    <section
      id="experience"
      className={`py-24 md:py-28 px-6 md:px-10 ${isDark ? "bg-[#0a0a0f]" : "bg-white"}`}
    >
      <div ref={ref} className="max-w-6xl mx-auto">

        {/* ── Section header ───────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-[#E8699A]" />
            <span
              className="text-xs font-semibold tracking-widest uppercase text-[#E8699A]"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Experience
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-24">
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Hired to solve.
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #E8699A, #C2547C)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Built to deliver.
              </span>
            </h2>
            <p
              className={`lg:max-w-xs text-sm leading-relaxed pb-1 ${
                isDark ? "text-white/45" : "text-gray-400"
              }`}
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Five years across healthcare, ad-tech, B2B SaaS, and event tech — always
              designing for real people with real constraints.
            </p>
          </div>
        </motion.div>

        {/* ── DESKTOP — horizontal timeline ────────────────────────────── */}
        {/*
          Two separate but column-aligned grids:
          1. Track grid  — year label (h-10) · dot (w-4 h-4) · stem (h-6)
             Dotted line is absolute at top-12 (= 40px year area + 8px = dot centre)
          2. Card grid   — all 4 cards in one row → naturally equal height via CSS grid
        */}
        <div className="hidden lg:block">

          {/* ① Track grid */}
          <div className="relative grid grid-cols-3 gap-5">

            {/* Dotted line — bisects the dots at top-12 */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-12 left-0 right-0 origin-left"
              style={{
                height: "1px",
                backgroundImage: `repeating-linear-gradient(
                  to right,
                  ${lineColor} 0px, ${lineColor} 5px,
                  transparent 5px, transparent 14px
                )`,
              }}
            />

            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="flex flex-col items-center"
              >
                {/* Year label — h-10, sits above the line */}
                <div className="h-10 flex items-end pb-2">
                  <span
                    className={`text-xs font-bold tracking-wider ${
                      exp.current ? "text-[#E8699A]" : isDark ? "text-white/35" : "text-gray-400"
                    }`}
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {exp.current ? "Present" : exp.year}
                  </span>
                </div>

                {/* Dot — ON the line (z-10) */}
                <div className="relative z-10 flex-shrink-0">
                  {/* Pulse ring for current role */}
                  {exp.current && (
                    <motion.div
                      animate={{ scale: [1, 1.7, 1], opacity: [0.4, 0, 0.4] }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 rounded-full"
                      style={{ background: "#E8699A", margin: "-4px" }}
                    />
                  )}
                  <div
                    className={`w-4 h-4 rounded-full border-2 border-[#E8699A] ${
                      exp.current
                        ? "bg-[#E8699A]"
                        : isDark
                        ? "bg-[#0a0a0f]"
                        : "bg-white"
                    }`}
                  />
                </div>

                {/* Stem — connects dot to card below */}
                <div
                  className="w-px h-6 mt-0"
                  style={{
                    backgroundImage: `repeating-linear-gradient(
                      to bottom,
                      ${lineColor} 0px, ${lineColor} 3px,
                      transparent 3px, transparent 8px
                    )`,
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* ② Card grid — equal heights naturally via same grid row */}
          <div className="grid grid-cols-3 gap-5">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.55,
                  delay: 0.3 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`rounded-2xl p-5 border flex flex-col h-full transition-colors ${
                  isDark
                    ? "border-white/[0.07] bg-white/[0.025] hover:bg-white/[0.04]"
                    : "border-gray-100 bg-gray-50/60 hover:bg-gray-50"
                }`}
              >
                {/* Index — subtle, top-right */}
                <div className="flex items-start justify-between mb-3">
                  <div />
                  <span
                    className="text-[10px] font-bold tracking-widest"
                    style={{
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                      color: isDark ? "rgba(232,105,154,0.35)" : "rgba(194,84,124,0.3)",
                    }}
                  >
                    {exp.index}
                  </span>
                </div>

                {/* Role */}
                <p
                  className={`text-[15px] font-bold leading-snug mb-1 ${
                    isDark ? "text-white/90" : "text-gray-900"
                  }`}
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {exp.role}
                </p>

                {/* Company */}
                <p
                  className="text-sm font-semibold mb-3"
                  style={{ color: "#E8699A", fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {exp.company}
                </p>

                {/* Divider */}
                <div className={`w-full h-px mb-3 ${isDark ? "bg-white/6" : "bg-gray-100"}`} />

                {/* Description */}
                <p
                  className={`text-[13px] leading-relaxed ${
                    isDark ? "text-white/45" : "text-gray-500"
                  }`}
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {exp.description}
                </p>

                {/* Push date + location to bottom */}
                <div className="flex-1" />

                {/* Bottom divider */}
                <div className={`w-full h-px mt-4 mb-3 ${isDark ? "bg-white/6" : "bg-gray-100"}`} />

                {/* Date */}
                <div className="flex items-center gap-1.5 mb-2">
                  <Calendar
                    size={10}
                    style={{ color: isDark ? "rgba(255,255,255,0.28)" : "#c4c4cf", flexShrink: 0 }}
                  />
                  <span
                    className={`text-[11px] font-semibold ${
                      isDark ? "text-white/40" : "text-gray-400"
                    }`}
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {exp.duration}
                  </span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1.5">
                  <MapPin
                    size={11}
                    style={{ color: isDark ? "rgba(255,255,255,0.22)" : "#c4c4cf", flexShrink: 0 }}
                  />
                  <span
                    className={`text-[11px] ${isDark ? "text-white/28" : "text-gray-400"}`}
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {exp.location}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── MOBILE / TABLET ───────────────────────────────────────────── */}
        <div className="lg:hidden">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="relative flex gap-4"
            >
              {/* ── Left column: dot + connector line ── */}
              <div className="flex flex-col items-center flex-shrink-0" style={{ width: "16px" }}>
                {/* Dot — sits at the top, naturally aligned with the date text */}
                <div className="relative z-10 flex-shrink-0 mt-[2px]">
                  {exp.current && (
                    <motion.div
                      animate={{ scale: [1, 1.7, 1], opacity: [0.4, 0, 0.4] }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 rounded-full"
                      style={{ background: "#E8699A", margin: "-4px" }}
                    />
                  )}
                  <div
                    className={`w-[14px] h-[14px] rounded-full border-2 border-[#E8699A] ${
                      exp.current
                        ? "bg-[#E8699A]"
                        : isDark
                        ? "bg-[#0a0a0f]"
                        : "bg-white"
                    }`}
                  />
                </div>
                {/* Connector line down to next item */}
                {i < experiences.length - 1 && (
                  <div
                    className="flex-1 w-px mt-2 mb-0"
                    style={{
                      backgroundImage: `repeating-linear-gradient(
                        to bottom,
                        ${lineColor} 0px, ${lineColor} 5px,
                        transparent 5px, transparent 12px
                      )`,
                    }}
                  />
                )}
              </div>

              {/* ── Right column: date + card ── */}
              <div className={`flex-1 min-w-0 ${i < experiences.length - 1 ? "pb-6" : "pb-0"}`}>
                {/* Date chip — aligned with dot */}
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`text-[10px] font-bold tracking-widest uppercase ${
                      exp.current ? "text-[#E8699A]" : isDark ? "text-white/35" : "text-gray-400"
                    }`}
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {exp.duration}
                  </span>
                </div>

                {/* Card */}
                <div
                  className={`rounded-2xl p-5 border ${
                    isDark
                      ? "border-white/[0.07] bg-white/[0.025]"
                      : "border-gray-100 bg-gray-50/60"
                  }`}
                >
                  <p
                    className={`text-[15px] font-bold leading-snug mb-1 ${
                      isDark ? "text-white/90" : "text-gray-900"
                    }`}
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {exp.role}
                  </p>
                  <p
                    className="text-sm font-semibold mb-3"
                    style={{ color: "#E8699A", fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {exp.company}
                  </p>
                  <div className={`w-full h-px mb-3 ${isDark ? "bg-white/6" : "bg-gray-100"}`} />
                  <p
                    className={`text-[13px] leading-relaxed mb-3 ${
                      isDark ? "text-white/45" : "text-gray-500"
                    }`}
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {exp.description}
                  </p>
                  <div className="flex items-center gap-1.5">
                    <MapPin
                      size={11}
                      style={{ color: isDark ? "rgba(255,255,255,0.22)" : "#c4c4cf", flexShrink: 0 }}
                    />
                    <span
                      className={`text-[11px] ${isDark ? "text-white/28" : "text-gray-400"}`}
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
