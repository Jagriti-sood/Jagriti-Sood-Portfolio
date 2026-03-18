import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { projects } from "../data/projects";
import { SharedProjectCard } from "./SharedProjectCard";

interface ProjectsProps {
  isDark: boolean;
}

export function Projects({ isDark }: ProjectsProps) {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-50px" });

  return (
    <section id="work" className={`py-24 md:py-32 px-6 md:px-10 ${isDark ? "bg-[#0a0a0f]" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-[#E8699A]" />
            <span
              className="text-xs font-semibold tracking-widest uppercase text-[#E8699A]"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Selected Work
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-24">
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Problems I solved.
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #E8699A, #C2547C)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Impact I created.
              </span>
            </h2>
            <p
              className={`lg:max-w-xs text-sm leading-relaxed pb-1 ${
                isDark ? "text-white/45" : "text-gray-400"
              }`}
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Every case study below starts with a real problem, a real constraint, and a real
              outcome. Click any card to read the full story.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-10 md:gap-12">
          {projects.map((project, i) => (
            <SharedProjectCard
              key={project.id}
              project={project}
              index={i}
              isDark={isDark}
            />
          ))}
        </div>
      </div>
    </section>
  );
}