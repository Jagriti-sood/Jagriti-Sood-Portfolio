import { useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { useTheme } from "../context/ThemeContext";
import { SharedProjectCard } from "../components/SharedProjectCard";
import { projects } from "../data/projects";
import { Lock } from "lucide-react";
import mapleCodeCover from "@/assets/maplecode-cover.webp";

function FadeSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ArtifactCard({
  src,
  label,
  isDark,
}: {
  src: string;
  label: string;
  isDark: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
        <img
          src={src}
          alt={label}
          className="w-full h-full object-cover scale-105"
          style={{ filter: "blur(10px)" }}
        />
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2.5"
          style={{
            background: isDark ? "rgba(10,10,15,0.82)" : "rgba(0,0,0,0.6)",
            backdropFilter: "blur(6px)",
          }}
        >
          <div className="w-10 h-10 rounded-full bg-[#E8699A]/15 border border-[#E8699A]/30 flex items-center justify-center">
            <Lock size={16} className="text-[#E8699A]" />
          </div>
          <span
            className="text-[10px] font-bold tracking-widest uppercase text-white/60"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Confidential
          </span>
        </div>
      </div>
      <p
        className={`text-[11px] text-center ${isDark ? "text-white/60" : "text-gray-600"}`}
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {label}
      </p>
    </div>
  );
}

const workAreas = [
  { label: "UX / UI Design" },
  { label: "Web Design" },
  { label: "Social Media Marketing" },
  { label: "Newsletter Management" },
  { label: "Customer Management" },
  { label: "Brand Collateral" },
];

const nextProject = projects[3];

export default function CaseStudyMaple() {
  const { isDark } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const body = isDark ? "text-white/52" : "text-gray-500";

  return (
    <div className={`min-h-screen ${isDark ? "bg-[#0a0a0f]" : "bg-white"}`}>

      {/* ── HERO ── */}
      <section className="pt-28 md:pt-36 pb-0 px-6">
        <div className="max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {["B2B Tech", "Brand & Product", "Multi-project"].map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1 rounded-full text-xs font-medium border ${isDark ? "border-white/10 text-white/45" : "border-gray-200 text-gray-400"}`}
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-5 ${isDark ? "text-white" : "text-gray-900"}`}
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            MapleCode
            <br />
            <span
              style={{
                background: "linear-gradient(125deg, #E8699A, #C2547C)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Innovations
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className={`max-w-xl text-base leading-relaxed mb-10 ${body}`}
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            An ongoing embedded partnership with a Toronto-based B2B software company. I wore many hats across design, marketing, and customer operations — over multiple concurrent and sequential projects.
          </motion.p>

          {/* Meta strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className={`grid grid-cols-2 md:grid-cols-3 divide-x divide-y md:divide-y-0 rounded-2xl border overflow-hidden mb-16 ${isDark ? "border-white/8 divide-white/8" : "border-gray-100 divide-gray-100"}`}
          >
            {[
              { label: "Engagement", value: "Embedded Partner" },
              { label: "Duration", value: "2022 – 2023" },
              { label: "Scope", value: "Design · Marketing · Ops" },
            ].map((m) => (
              <div key={m.label} className={`px-5 py-4 ${isDark ? "bg-white/[0.025]" : "bg-gray-50/60"}`}>
                <p className={`text-xs font-bold tracking-widest uppercase mb-1 ${isDark ? "text-white/28" : "text-gray-300"}`} style={{ fontFamily: "Poppins, sans-serif" }}>{m.label}</p>
                <p className={`text-sm font-semibold ${isDark ? "text-white/75" : "text-gray-700"}`} style={{ fontFamily: "Poppins, sans-serif" }}>{m.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── HERO IMAGE ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto px-6 mt-0 mb-10"
      >
        <div className="rounded-2xl md:rounded-3xl overflow-hidden aspect-[16/8]">
          <img
            src={mapleCodeCover}
            alt="MapleCode Innovations — cover"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* ── BODY ── */}
      <div className="max-w-5xl mx-auto px-6 space-y-8 pb-16">

        {/* NDA Notice */}
        <FadeSection>
          <div
            className={`flex items-start gap-4 px-5 py-4 rounded-2xl border ${isDark ? "border-white/8 bg-white/[0.025]" : "border-gray-100 bg-gray-50/70"}`}
          >
            <div className="flex-shrink-0 mt-0.5">
              <div className="w-7 h-7 rounded-full bg-[#E8699A]/10 flex items-center justify-center">
                <Lock size={13} className="text-[#E8699A]" />
              </div>
            </div>
            <div>
              <span
                className="block text-xs font-bold tracking-widest uppercase text-[#E8699A] mb-1"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                NDA Protected
              </span>
              <p
                className={`text-sm leading-relaxed ${isDark ? "text-white/70" : "text-gray-600"}`}
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                All projects at MapleCode are covered by a non-disclosure agreement. I'm not able to share screens, deliverables, or project specifics publicly — but I'm happy to walk through the work privately.
              </p>
            </div>
          </div>
        </FadeSection>

        {/* What I did */}
        <FadeSection>
          <p
            className={`text-xs font-bold tracking-widest uppercase mb-5 ${isDark ? "text-white/28" : "text-gray-300"}`}
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Scope of Work
          </p>
          <div className="flex flex-wrap gap-3">
            {workAreas.map((w) => (
              <span
                key={w.label}
                className={`px-4 py-2 rounded-full text-sm font-medium border ${isDark ? "border-white/10 text-white/60 bg-white/[0.03]" : "border-gray-200 text-gray-600 bg-gray-50"}`}
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {w.label}
              </span>
            ))}
          </div>
        </FadeSection>

        {/* Blurred artifacts */}
        <FadeSection>
          <p
            className={`text-xs font-bold tracking-widest uppercase mb-5 ${isDark ? "text-white/28" : "text-gray-300"}`}
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Areas of Contribution
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <ArtifactCard
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
              label="Brand & web design"
              isDark={isDark}
            />
            <ArtifactCard
              src="https://images.unsplash.com/photo-1581291518633-83b4eef1d2fa?auto=format&fit=crop&w=800&q=80"
              label="UX / UI design"
              isDark={isDark}
            />
            <ArtifactCard
              src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80"
              label="Social & marketing assets"
              isDark={isDark}
            />
          </div>

          {/* CTA */}
          <a
            href="mailto:jagritisood30@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-80"
            style={{ background: "linear-gradient(135deg, #E8699A, #C2547C)", fontFamily: "Poppins, sans-serif" }}
          >
            <Lock size={12} />
            Request a private walkthrough
          </a>
        </FadeSection>

        {/* ── NEXT PROJECT ── */}
        <FadeSection>
          <div className={`pt-4 border-t ${isDark ? "border-white/8" : "border-gray-100"}`}>
            <p
              className={`text-xs font-bold tracking-widest uppercase mb-6 ${isDark ? "text-white/28" : "text-gray-300"}`}
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Next Project
            </p>
            <SharedProjectCard project={nextProject} index={1} isDark={isDark} animate={false} />
          </div>
        </FadeSection>
      </div>
    </div>
  );
}