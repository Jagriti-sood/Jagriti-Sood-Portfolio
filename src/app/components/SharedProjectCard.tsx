import { useRef } from "react";
import { useNavigate } from "react-router";
import { motion, useInView } from "motion/react";
import { ArrowUpRight, LockKeyhole } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { Project } from "../data/projects";
import { EASE, VIEWPORT } from "../lib/motion";
import { useProtectedStudy } from "../context/ProtectedStudyContext";
import nhlMockup from "figma:asset/322867aa2bd51e13f19317633a5f0373aab4f93b.png";

const FIGMA_IMAGES: Record<string, string> = {
  "/work/nhl-techshow": nhlMockup,
};

export function SharedProjectCard({
  project,
  index: _index,
  isDark,
  animate = true,
}: {
  project: Project;
  index: number;
  isDark: boolean;
  animate?: boolean;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const inView    = useInView(scrollRef, VIEWPORT);
  const navigate  = useNavigate();
  const protectedStudy = useProtectedStudy();
  const openProject = () => {
    if (project.isProtected && protectedStudy) protectedStudy.openGroup(project.protectedGroup ?? "rbc");
    else navigate(project.caseStudyUrl);
  };

  const accent = "#E8699A";
  const cardBg = isDark ? "#111118" : "#faf9f7";

  const titleColor = isDark ? "text-white" : "text-gray-900";
  const bodyColor  = isDark ? "text-white/55" : "text-gray-500";
  const metaColor  = isDark ? "text-white/38" : "text-gray-400";
  const mutedColor = isDark ? "text-white/45" : "text-gray-500";

  return (
    <motion.div
      ref={scrollRef}
      initial={animate ? { opacity: 0, y: 32 } : { opacity: 1, y: 0 }}
      animate={animate ? (inView ? { opacity: 1, y: 0 } : {}) : { opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE }}
      whileHover={{ y: -4 }}
      onClick={openProject}
      role={project.isProtected ? "button" : undefined}
      tabIndex={project.isProtected ? 0 : undefined}
      aria-label={project.isProtected ? `Unlock ${project.title} case studies` : undefined}
      aria-haspopup={project.isProtected ? "dialog" : undefined}
      onKeyDown={project.isProtected ? (event) => {
        if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openProject(); }
      } : undefined}
      className={`${project.isProtected ? "protected-project-card " : ""}group relative cursor-pointer overflow-hidden rounded-3xl transition-[box-shadow,border-color] duration-300 ${
        isDark ? "border border-white/[0.05] hover:border-white/[0.1]" : "card-shadow hover:card-shadow-hover"
      }`}
      style={{ backgroundColor: cardBg }}
    >
      {/* Soft accent glow — appears on hover */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `radial-gradient(720px circle at 0% 100%, ${accent}14, transparent 55%)`,
        }}
      />

      <div className="relative flex flex-col-reverse lg:flex-row">

        {/* ── Text panel ── */}
        <div className="relative flex flex-col justify-between p-5 md:p-9 lg:w-[55%] overflow-hidden">

          {/* Faded index watermark */}
          <div
            aria-hidden
            className="absolute pointer-events-none select-none -right-3 -bottom-10 md:-right-5 md:-bottom-14"
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontWeight: 900,
              fontSize: "200px",
              lineHeight: 1,
              letterSpacing: "-0.06em",
              color: isDark ? "rgba(255,255,255,0.025)" : "rgba(0,0,0,0.035)",
            }}
          >
            {project.number}
          </div>

          {/* TOP */}
          <div className="relative flex flex-col gap-5">

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span
                className="text-[11px] font-black tracking-[0.3em]"
                style={{ color: accent, fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                {project.number}
              </span>
              <span className="w-6 h-px" style={{ background: `${accent}55` }} />
              <span
                className={`text-[10px] font-semibold tracking-[0.18em] uppercase ${metaColor}`}
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                {project.industry}
              </span>
            </div>

            {/* Title */}
            <h3
              className={`text-[24px] md:text-[28px] lg:text-[30px] font-bold leading-[1.15] tracking-[-0.02em] ${titleColor}`}
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              {project.title}
            </h3>

            {/* Tags — minimal dot-separated text */}
            <div className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-medium ${mutedColor}`}
                 style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
              {project.tags.slice(0, 3).map((tag, i) => (
                <span key={tag} className="flex items-center gap-2">
                  {i > 0 && (
                    <span className="w-1 h-1 rounded-full" style={{ background: `${accent}88` }} />
                  )}
                  <span>{tag}</span>
                </span>
              ))}
            </div>

            {/* Description */}
            <p
              className={`text-sm leading-relaxed ${bodyColor}`}
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              {project.description}
            </p>
          </div>

          {/* BOTTOM — impact metrics + read link */}
          <div className="relative flex items-end justify-between gap-4 mt-7">

            {/* Impact — minimal */}
            <div className="flex flex-col gap-1.5">
              {project.impact.map((item) => (
                <div
                  key={item}
                  className={`flex items-center gap-2.5 text-[12px] font-semibold ${isDark ? "text-white/70" : "text-gray-600"}`}
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: accent }}
                  />
                  {item}
                </div>
              ))}
            </div>

            {/* Read link */}
            <div
              className="flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase flex-shrink-0 transition-colors"
              style={{ color: accent, fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              {project.isProtected && <LockKeyhole size={14} aria-hidden="true" />}
              <span>{project.isProtected ? "Unlock Case Studies" : "Read Case Study"}</span>
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>
          </div>
        </div>

        {/* ── Image panel ── */}
        <div className="px-5 pt-5 pb-0 md:px-9 md:pt-9 lg:py-9 lg:pl-0 lg:w-[45%] lg:flex lg:items-center flex-shrink-0">
          <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden">
            {project.isProtected ? (
              <>
                <ImageWithFallback
                  src={project.image}
                  alt=""
                  className="w-full h-full object-cover object-center scale-105 transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className={`absolute inset-0 ${isDark ? "bg-[#0a0a0f]/35" : "bg-white/15"}`} aria-hidden="true" />
                <div className="absolute inset-0 grid place-items-center" aria-hidden="true">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold shadow-sm backdrop-blur-md ${
                      isDark ? "bg-[#0a0a0f]/75 text-[#E8699A]" : "bg-white/85 text-[#C2547C]"
                    }`}
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    <LockKeyhole size={14} /> Password protected
                  </span>
                </div>
              </>
            ) : <ImageWithFallback
              src={FIGMA_IMAGES[project.caseStudyUrl] ?? project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />}
            {/* Subtle bottom gradient for depth */}
            <div
              className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.18), transparent)" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
