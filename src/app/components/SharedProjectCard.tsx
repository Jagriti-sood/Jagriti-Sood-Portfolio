import { useRef } from "react";
import { Link } from "react-router";
import { motion, useInView } from "motion/react";
import { ArrowUpRight, Lock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { Project } from "../data/projects";
import nhlMockup from "figma:asset/322867aa2bd51e13f19317633a5f0373aab4f93b.png";

const FIGMA_IMAGES: Record<string, string> = {
  "/work/nhl-techshow": nhlMockup,
};

export function SharedProjectCard({
  project,
  isDark,
  animate = true,
}: {
  project: Project;
  index: number;
  isDark: boolean;
  animate?: boolean;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const inView = useInView(scrollRef, { once: true, margin: "-60px" });
  const isMaple = project.caseStudyUrl === "/work/maplecode";

  return (
    <motion.div
      ref={scrollRef}
      initial={animate ? { opacity: 0, y: 18 } : { opacity: 1, y: 0 }}
      animate={animate ? (inView ? { opacity: 1, y: 0 } : {}) : { opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={project.caseStudyUrl}
        className={`group grid gap-4 rounded-[16px] border p-3 transition-colors duration-200 md:grid-cols-[240px_1fr] md:items-start ${
          isDark
            ? "border-white/10 bg-white/[0.02]"
            : "border-black/8 bg-white/55"
        }`}
      >
        <div
          className="relative overflow-hidden rounded-[12px] border"
          style={{
            background: isDark ? project.cardBgDark : project.cardBgLight,
            borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
          }}
        >
          <ImageWithFallback
            src={FIGMA_IMAGES[project.caseStudyUrl] ?? project.image}
            alt={project.title}
            className="aspect-[1.15/0.82] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            style={{
              filter: isMaple ? "blur(10px) brightness(0.72) saturate(0.78)" : undefined,
              transform: isMaple ? "scale(1.06)" : undefined,
            }}
          />

          {isMaple && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/18 backdrop-blur-[2px]">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/18 bg-white/10">
                <Lock size={18} className="text-white/88" />
              </div>
            </div>
          )}
        </div>

        <div className="flex items-start justify-between gap-3">
          <div className="max-w-[31rem]">
            <p className={`mb-1 text-[12px] ${isDark ? "text-white/46" : "text-[#171717]/46"}`}>
              {project.industry}
            </p>
            <h3
              className={`text-[1.55rem] font-semibold leading-[1.06] tracking-[-0.04em] ${
                isDark ? "text-white" : "text-[#171717]"
              }`}
            >
              {project.title}
            </h3>
            <p className={`mt-2 text-[15px] leading-[1.65] ${isDark ? "text-white/58" : "text-[#171717]/58"}`}>
              {project.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.impact.map((item) => (
                <span
                  key={item}
                  className={`rounded-full px-2.5 py-1 text-[12px] ${
                    isDark
                      ? "bg-white/6 text-white/56"
                      : "bg-black/[0.045] text-[#171717]/56"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <ArrowUpRight
            size={15}
            className={`mt-1 shrink-0 ${isDark ? "text-white/50" : "text-[#171717]/48"}`}
          />
        </div>
      </Link>
    </motion.div>
  );
}
