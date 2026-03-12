import { useRef } from "react";
import { Link, useNavigate } from "react-router";
import { motion, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { Project } from "../data/projects";
import { buildGradient } from "../context/CardStyleContext";
import nhlMockup from "figma:asset/b203f5004c8d3a5ad93bd6d311dc6be3b46afdee.png";

// Map caseStudyUrl → imported figma asset (overrides the Unsplash URL)
const FIGMA_IMAGES: Record<string, string> = {
  "/work/nhl-techshow": nhlMockup,
};

// Pure white / near-black card backgrounds
const CARD_BG_LIGHT = "#FFFFFF";
const CARD_BG_DARK  = "#101014";

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
  const scrollRef = useRef(null);
  const inView = useInView(scrollRef, { once: true, margin: "-60px" });
  const isEven = index % 2 === 0;
  const navigate = useNavigate();

  const gradientOverlay = buildGradient(project.accent, isEven, isDark);
  const cardBg = isDark ? CARD_BG_DARK : CARD_BG_LIGHT;

  return (
    <motion.div
      ref={scrollRef}
      initial={animate ? { opacity: 0, y: 48 } : { opacity: 1, y: 0 }}
      animate={animate ? (inView ? { opacity: 1, y: 0 } : {}) : { opacity: 1, y: 0 }}
      whileHover={{ scale: 0.97 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        onClick={() => navigate(project.caseStudyUrl)}
        className={`group relative rounded-2xl md:rounded-3xl overflow-hidden border cursor-pointer ${
          isDark ? "border-white/10" : "border-gray-200"
        }`}
        style={{ backgroundColor: cardBg }}
      >
        <div
          className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} lg:h-[420px]`}
        >
          {/* Text block */}
          <div className="relative flex flex-col justify-between p-8 md:p-10 lg:p-12 lg:w-[52%] gap-8 overflow-hidden">
            {/* Diagonal sweep gradient overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: gradientOverlay }}
            />

            {/* Top */}
            <div className="relative flex flex-col gap-5">
              {/* Meta row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span
                    className="text-[10px] font-bold tracking-[0.22em] uppercase"
                    style={{ color: project.accent, fontFamily: "Poppins, sans-serif" }}
                  >
                    {project.number}
                  </span>
                  <span
                    className={`text-[11px] ${isDark ? "text-white/25" : "text-gray-300"}`}
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    /
                  </span>
                  <span
                    className={`text-[11px] font-medium ${isDark ? "text-white/40" : "text-gray-400"}`}
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {project.industry}
                  </span>
                </div>
                <Link
                  to={project.caseStudyUrl}
                  onClick={(e) => e.stopPropagation()}
                  className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200 ${
                    isDark
                      ? "border-white/12 hover:border-[#E8699A] hover:bg-[#E8699A]/10"
                      : "border-gray-300 hover:border-[#E8699A] hover:bg-[#E8699A]/5"
                  }`}
                  aria-label={`View ${project.title} case study`}
                >
                  <ArrowUpRight
                    size={13}
                    className={`transition-colors group-hover:text-[#E8699A] ${
                      isDark ? "text-white/35" : "text-gray-400"
                    }`}
                  />
                </Link>
              </div>

              {/* Title */}
              <h3
                className={`text-2xl md:text-[26px] font-bold leading-snug ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                className={`text-sm leading-relaxed line-clamp-3 ${isDark ? "text-white/50" : "text-gray-500"}`}
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {project.description}
              </p>
            </div>

            {/* Bottom */}
            <div className="relative flex flex-col gap-5">
              {/* Impact metrics */}
              <div className="flex flex-wrap gap-2">
                {project.impact.map((item) => (
                  <div
                    key={item}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold ${
                      isDark ? "bg-white/6 text-white/65" : "bg-white/70 text-gray-600"
                    }`}
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, #E8699A, #C2547C)" }}
                    />
                    {item}
                  </div>
                ))}
              </div>

              {/* Tags + CTA */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 rounded-full text-[11px] font-medium border ${
                        isDark ? "border-white/8 text-white/40" : "border-gray-300 text-gray-400"
                      }`}
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={project.caseStudyUrl}
                  onClick={(e) => e.stopPropagation()}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border transition-colors duration-200 flex-shrink-0 ${
                    isDark
                      ? "border-[#E8699A] text-[#E8699A] hover:bg-[#E8699A]/10"
                      : "border-[#C2547C] text-[#C2547C] hover:bg-[#C2547C]/6"
                  }`}
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Case Study
                  <ArrowUpRight size={11} />
                </Link>
              </div>
            </div>
          </div>

          {/* Image panel */}
          <div className="lg:w-[48%] h-60 md:h-72 lg:h-full overflow-hidden relative">
            <ImageWithFallback
              src={FIGMA_IMAGES[project.caseStudyUrl] ?? project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.06]"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: isEven
                  ? "linear-gradient(to right, rgba(0,0,0,0.12) 0%, transparent 50%)"
                  : "linear-gradient(to left, rgba(0,0,0,0.12) 0%, transparent 50%)",
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}