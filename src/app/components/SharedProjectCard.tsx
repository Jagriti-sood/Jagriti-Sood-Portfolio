import { useRef } from "react";
import { Link, useNavigate } from "react-router";
import { motion, useInView } from "motion/react";
import { ArrowUpRight, Lock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { Project } from "../data/projects";
import nhlMockup from "figma:asset/322867aa2bd51e13f19317633a5f0373aab4f93b.png";

const FIGMA_IMAGES: Record<string, string> = {
  "/work/nhl-techshow": nhlMockup,
};

const contentAccent = "#C2547C";

export function SharedProjectCard({
  project,
  index,
  isDark,
  animate = true,
}: {
  project: Project;
  index: number;
  isDark: boolean;
  animate?: boolean;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const inView    = useInView(scrollRef, { once: true, margin: "-60px" });
  const navigate  = useNavigate();

  const isReversed = index % 2 !== 0;

  const cardBg = isDark ? "#111118" : "#ffffff";

  return (
    <motion.div
      ref={scrollRef}
      initial={animate ? { opacity: 0, y: 48 } : { opacity: 1, y: 0 }}
      animate={animate ? (inView ? { opacity: 1, y: 0 } : {}) : { opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => navigate(project.caseStudyUrl)}
      className={`group relative cursor-pointer overflow-hidden rounded-3xl border transition-all duration-300 hover:scale-[0.98] ${
        isDark
          ? "border-white/[0.08] hover:border-white/[0.14]"
          : "border-black/[0.07] hover:border-black/[0.13]"
      }`}
      style={{ backgroundColor: cardBg }}
    >
      <div className={`flex flex-col lg:h-[400px] ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"}`}>

        {/* ── Text panel ── */}
        <div className="relative flex flex-col justify-between p-7 md:p-9 lg:w-[55%]">

          {/* TOP */}
          <div className="flex flex-col gap-4">

            {/* Eyebrow row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span
                  className="text-xs font-black tracking-[0.3em] uppercase"
                  style={{ color: contentAccent, fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {project.number}
                </span>
                <span
                  style={{
                    color: contentAccent,
                    opacity: 0.4,
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontSize: "10px",
                  }}
                >
                  ·
                </span>
                <span
                  className={`text-xs font-medium tracking-wide uppercase ${
                    isDark ? "text-white/35" : "text-gray-400"
                  }`}
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {project.industry}
                </span>
              </div>

              <Link
                to={project.caseStudyUrl}
                onClick={(e) => e.stopPropagation()}
                className={`w-9 h-9 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                  isDark
                    ? "border-white/12 hover:border-[#E8699A] hover:bg-[#E8699A]/10"
                    : "border-gray-200 hover:border-[#E8699A] hover:bg-[#E8699A]/6"
                }`}
                aria-label={`View ${project.title} case study`}
              >
                <ArrowUpRight
                  size={15}
                  className={`transition-colors group-hover:text-[#E8699A] ${
                    isDark ? "text-white/40" : "text-gray-400"
                  }`}
                />
              </Link>
            </div>

            {/* Title */}
            <h3
              className={`text-[22px] md:text-[24px] font-bold leading-snug ${
                isDark ? "text-white" : "text-gray-900"
              }`}
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              {project.title}
            </h3>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: `${contentAccent}12`,
                    color: contentAccent,
                    border: `1px solid ${contentAccent}28`,
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <p
              className={`text-sm leading-relaxed ${
                isDark ? "text-white/52" : "text-gray-500"
              }`}
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              {project.description}
            </p>
          </div>

          {/* BOTTOM — impact chips + CTA */}
          <div className="flex items-end justify-between gap-4 mt-6">
            <div className="flex flex-wrap gap-2">
              {project.impact.map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold"
                  style={{
                    backgroundColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
                    color: isDark ? "rgba(255,255,255,0.55)" : "#6b7280",
                    border: isDark
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "1px solid rgba(0,0,0,0.07)",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: contentAccent, opacity: 0.8 }}
                  />
                  {item}
                </div>
              ))}
            </div>

            <Link
              to={project.caseStudyUrl}
              onClick={(e) => e.stopPropagation()}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200 flex-shrink-0 ${
                isDark
                  ? "border-[#C2547C] text-[#C2547C] hover:bg-[#C2547C]/10"
                  : "border-[#C2547C] text-[#C2547C] hover:bg-[#C2547C]/6"
              }`}
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Case Study
              <ArrowUpRight size={12} />
            </Link>
          </div>
        </div>

        {/* ── Image panel ── */}
        <div className="lg:w-[45%] h-56 md:h-72 lg:h-full overflow-hidden relative flex-shrink-0">
          <ImageWithFallback
            src={FIGMA_IMAGES[project.caseStudyUrl] ?? project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
            style={{ transition: "transform 0.7s ease", filter: project.caseStudyUrl === "/work/maplecode" ? "blur(14px) brightness(0.45) saturate(0.6)" : "none", transform: project.caseStudyUrl === "/work/maplecode" ? "scale(1.08)" : "none" }}
          />

          {/* NDA overlay — MapleCode only */}
          {project.caseStudyUrl === "/work/maplecode" && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 pointer-events-none">
              {/* Lock badge */}
              <div
                className="flex items-center justify-center w-14 h-14 rounded-2xl shadow-lg"
                style={{
                  background: "rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255,255,255,0.20)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }}
              >
                <Lock size={24} className="text-white/90" strokeWidth={1.8} />
              </div>
              {/* Label */}
              <div
                className="flex flex-col items-center gap-1"
              >
                <span
                  className="text-white/95 text-sm font-semibold tracking-wide"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  Under NDA
                </span>
                <span
                  className="text-white/50 text-xs font-medium tracking-wider uppercase"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif", letterSpacing: "0.15em" }}
                >
                  Details available on request
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}