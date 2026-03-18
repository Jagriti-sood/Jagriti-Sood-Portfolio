import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface TestimonialsProps {
  isDark: boolean;
}

const testimonials = [
  {
    quote:
      "In 12 years of healthcare, I've worked with many agencies. Jagriti is different. She understood our patients before she drew a single screen. The result wasn't just a website — it changed how people felt about us before they even walked through the door.",
    name: "Vishal Sharma",
    role: "CEO, 101 Healthcare",
    initials: "VS",
    avatarColor: "#4A9B8E",
    context: "Website Redesign · 2023",
  },
  {
    quote:
      "Jagriti walked into a room full of skeptical engineers and, within a week, they were sending her Slack messages asking to collaborate. She built a design system my team actually uses and loves. I'd hire her back tomorrow without a second thought.",
    name: "Amit Verma",
    role: "Founder, MapleCode Innovations",
    initials: "AV",
    avatarColor: "#6B7FC4",
    context: "Design System · 2022",
  },
  {
    quote:
      "Three designers had tried to solve our scheduling problem before Jagriti. All three failed. She solved it in eight weeks. The tool she built saved our ops team 200+ hours a quarter. She's the kind of designer who makes you look smart for hiring her.",
    name: "Michael Phillips",
    role: "Co-Founder, Source Digital",
    initials: "MP",
    avatarColor: "#C4885A",
    context: "Ad Scheduler Tool · 2023",
  },
];

const STAR_COLOR = "#E8699A";

export function Testimonials({ isDark }: TestimonialsProps) {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-50px" });

  return (
    <section
      id="testimonials"
      className={`py-24 md:py-32 px-6 ${isDark ? "bg-[#0d0d13]" : "bg-gray-50/40"}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px" style={{ background: "#C49558" }} />
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "#C49558", fontFamily: "Poppins, sans-serif" }}
            >
              What Others Say
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end gap-5 lg:gap-24">
            <h2
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${
                isDark ? "text-white" : "text-gray-900"
              }`}
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              They hired me.
              <br />
              <span
                style={{
                  fontStyle: "italic",
                  background: "linear-gradient(135deg, #E8699A, #C2547C)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Here's what happened.
              </span>
            </h2>
            <p
              className={`lg:max-w-xs text-sm leading-relaxed pb-1 ${
                isDark ? "text-white/45" : "text-gray-400"
              }`}
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Not polished PR quotes. Real words from the people who saw the work — and the
              process — up close.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} index={i} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  index,
  isDark,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
  isDark: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex flex-col p-7 md:p-8 rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${
        isDark
          ? "border-white/8 bg-[#111118] hover:border-white/14"
          : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-xl hover:shadow-gray-100"
      }`}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between mb-5">
        <span
          className={`text-[10px] font-semibold tracking-widest uppercase ${
            isDark ? "text-white/30" : "text-gray-300"
          }`}
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {testimonial.context}
        </span>
        {/* Stars — same amber color on all cards */}
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} style={{ color: STAR_COLOR, fontSize: 11 }}>
              ★
            </span>
          ))}
        </div>
      </div>

      {/* Large quote mark */}
      <div
        className="text-5xl leading-none mb-3 select-none font-serif"
        style={{ color: testimonial.avatarColor, opacity: 0.2 }}
      >
        "
      </div>

      {/* Quote */}
      <p
        className={`text-sm leading-[1.75] mb-8 flex-1 ${
          isDark ? "text-white/68" : "text-gray-600"
        }`}
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {testimonial.quote}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
          style={{ backgroundColor: testimonial.avatarColor }}
        >
          {testimonial.initials}
        </div>
        <div>
          <p
            className={`text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {testimonial.name}
          </p>
          <p
            className={`text-[11px] ${isDark ? "text-white/38" : "text-gray-400"}`}
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {testimonial.role}
          </p>
        </div>
      </div>

      {/* Bottom accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px] rounded-b-2xl"
        style={{ backgroundColor: testimonial.avatarColor, opacity: 0.3 }}
      />
    </motion.div>
  );
}