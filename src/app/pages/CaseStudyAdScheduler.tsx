import { useEffect, useRef } from "react";
import React from "react";
import { motion, useInView } from "motion/react";
import { ExternalLink } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import sourceDigitalCover from "@/assets/source-digital-cover.webp";
import { SharedProjectCard } from "../components/SharedProjectCard";
import { projects } from "../data/projects";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-5 h-px bg-[#E8699A]" />
      <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#E8699A]">
        {text}
      </span>
    </div>
  );
}

function SectionHeading({ children, isDark }: { children: React.ReactNode; isDark: boolean }) {
  return (
    <h2
      className={`text-3xl md:text-4xl font-bold leading-snug mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
      style={{ fontFamily: "Playfair Display, serif" }}
    >
      {children}
    </h2>
  );
}

function FadeSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Card({ isDark, children, className = "" }: { isDark: boolean; children: React.ReactNode; className?: string }) {
  return (
    <div className={`p-5 rounded-2xl border ${isDark ? "border-white/8 bg-white/[0.03]" : "border-gray-100 bg-gray-50/70"} ${className}`}>
      {children}
    </div>
  );
}

function CardLabel({ text, color = "#E8699A" }: { text: string; color?: string }) {
  return (
    <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color }}>
      {text}
    </p>
  );
}

function Bullet({ items, isDark }: { items: string[]; isDark: boolean }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className={`flex gap-2.5 items-start text-sm ${isDark ? "text-white/55" : "text-gray-500"}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8699A] flex-shrink-0 mt-[7px]" />
          {item}
        </li>
      ))}
    </ul>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const nextProject = projects[3]; // Bajaj

const BEHANCE_URL = "https://www.behance.net/gallery/233440995/Real-Time-Campaign-Scheduling-Tool-for-Source";

const meta = [
  { label: "My Role", value: "Lead UX Designer" },
  { label: "Timeline", value: "14 Weeks · 2022" },
  { label: "Tools", value: "Figma · Hotjar · Optimal Workshop" },
  { label: "Type", value: "Internal Tool · SaaS" },
];

const outcomes = [
  { value: "2.5x", label: "Faster campaign scheduling compared to the previous workflow", color: "#E8699A" },
  { value: "35%", label: "Reduction in time spent on cross-team campaign coordination", color: "#E8699A" },
  { value: "71%", label: "Of users reported improved visibility across active campaigns", color: "#E8699A" },
];

const problemCards = [
  {
    title: "Lack of visibility",
    body: "Teams struggled to get a clear, real-time overview of all active and upcoming campaigns, leading to confusion and inefficiencies.",
  },
  {
    title: "Fragmented workflows",
    body: "Campaign planning, scheduling, and tracking were spread across tools, increasing manual effort and risk of errors.",
  },
  {
    title: "High cognitive load",
    body: "Existing tools displayed large amounts of data without clear hierarchy, making it difficult for users to quickly understand campaign status.",
  },
];

const insights = [
  {
    n: 1,
    title: "Visibility Drives User Confidence",
    body: "Users need a clear, real-time overview of all campaigns before taking action. Without visibility, decision-making becomes slower, less confident, and more error-prone.",
  },
  {
    n: 2,
    title: "Real-Time Data Needs Clarity",
    body: "Real-time updates are only valuable when they are easy to interpret. Dense or poorly structured data reduces usability and makes it harder for users to act quickly.",
  },
  {
    n: 3,
    title: "Visual Interfaces Improve Comprehension",
    body: "Users rely on visual formats like timelines and cards to quickly understand campaign status, overlaps, and scheduling gaps without scanning heavy text.",
  },
  {
    n: 4,
    title: "Simplicity Enables Faster Decisions",
    body: "Reducing steps and simplifying workflows allows users to schedule and manage campaigns more efficiently, improving speed and confidence in their actions.",
  },
];

const features = [
  {
    label: "Campaign Dashboard",
    body: "A unified campaign-level view with real-time status indicators, budget pacing, and go-live tracking — giving teams instant clarity across all active campaigns.",
  },
  {
    label: "Real-Time Scheduler",
    body: "A visual, interactive scheduling interface that updates in real time, allowing users to plan and adjust campaign timelines without switching between tools.",
  },
  {
    label: "Conflict Detection",
    body: "Automated conflict detection flags scheduling overlaps and budget issues the moment they occur, helping teams resolve problems before campaigns go live.",
  },
  {
    label: "Bulk Operations",
    body: "Set flight dates, update statuses, or reassign placements across multiple campaigns simultaneously — reducing repetitive manual work for busy campaign teams.",
  },
  {
    label: "Campaign Duplication",
    body: "Clone any campaign with customisable field inheritance, enabling teams to replicate successful campaign structures quickly and consistently.",
  },
  {
    label: "Timeline Export",
    body: "A shareable, read-only timeline view for stakeholder presentations — keeping clients informed without exposing the internal scheduling workflow.",
  },
];

const reflections = [
  {
    title: "What worked well",
    body: "Anchoring the design around real-time visibility proved to be the right call. Users consistently cited the live dashboard as the feature that most changed how they managed their day-to-day workload.",
  },
  {
    title: "Challenges faced",
    body: "Designing for high data density while maintaining clarity was the hardest problem to solve. Early prototypes overwhelmed users with information — multiple rounds of testing were needed to find the right balance.",
  },
  {
    title: "Future improvements",
    body: "A predictive scheduling assistant — one that can suggest optimal campaign windows based on historical performance data — is the natural next evolution of this platform.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CaseStudyAdScheduler() {
  const { isDark } = useTheme();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const body = isDark ? "text-white/55" : "text-gray-500";
  const divider = `w-full h-px ${isDark ? "bg-white/6" : "bg-gray-100"}`;

  return (
    <div className={`min-h-screen ${isDark ? "bg-[#0a0a0f]" : "bg-white"}`}>

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section className="pt-28 md:pt-36 pb-0 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Chips */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {["Ad-Tech", "Internal Tooling", "User Research", "Systems Design"].map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1 rounded-full text-xs font-medium border ${
                  isDark ? "border-white/10 text-white/45" : "border-gray-200 text-gray-400"
                }`}
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-5 ${isDark ? "text-white" : "text-gray-900"}`}
            style={{ fontFamily: "Playfair Display, serif", lineHeight: "1.2" }}
          >
            Campaigns
            <br />
            <span
              className="block mt-1"
              style={{
                background: "linear-gradient(125deg, #E8699A, #C2547C)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontSize: "0.7em",
                lineHeight: 1.3,
              }}
            >
              Designing a Real-Time Campaign Scheduling Platform
            </span>
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className={`max-w-2xl text-base mb-10 ${body}`}
            style={{ lineHeight: "1.8" }}
          >
            A scalable tool that helps teams plan, manage, and optimize live campaigns through a unified, real-time scheduling experience.
          </motion.p>

          {/* Meta strip */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
            className={`grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 rounded-2xl border overflow-hidden mb-10 ${
              isDark ? "border-white/8 divide-white/8" : "border-gray-100 divide-gray-100"
            }`}
          >
            {meta.map((m) => (
              <div key={m.label} className={`px-5 py-4 ${isDark ? "bg-white/[0.025]" : "bg-gray-50/60"}`}>
                <p className={`text-xs font-bold tracking-widest uppercase mb-1 ${isDark ? "text-white/28" : "text-gray-300"}`}>
                  {m.label}
                </p>
                <p className={`text-sm font-semibold ${isDark ? "text-white/75" : "text-gray-700"}`}>
                  {m.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hero visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-6xl mx-auto"
        >
          <div className="rounded-2xl md:rounded-3xl overflow-hidden aspect-[16/8]">
            <img
              src={sourceDigitalCover}
              alt="Campaigns — Source Digital Ad Scheduler"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* ── BODY ────────────────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 mt-10 md:mt-14 space-y-10 md:space-y-12 pb-16">

        {/* 01 · CONTEXT */}
        <FadeSection>
          <SectionLabel text="01: Context" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <SectionHeading isDark={isDark}>Fragmented Campaign Management Landscape</SectionHeading>
              <p className={`text-base mb-5 ${body}`} style={{ lineHeight: "1.8" }}>
                Campaign management across platforms is often fragmented, with teams relying on multiple tools, spreadsheets, and manual coordination. This leads to inefficiencies, missed updates, and difficulty maintaining visibility across ongoing campaigns.
              </p>
              <p className={`text-base ${body}`} style={{ lineHeight: "1.8" }}>
                At Source, the opportunity was to design a centralized platform that could streamline campaign scheduling, provide real-time visibility, and reduce operational friction for teams managing multiple campaigns simultaneously.
              </p>
            </div>
            <div className="space-y-4 lg:pt-16">
              <Card isDark={isDark}>
                <CardLabel text="My Role" />
                <p className={`text-sm ${body}`} style={{ lineHeight: "1.8" }}>
                  I led the end-to-end design process including research, information architecture, interaction design, UI design, and usability testing. I collaborated closely with product stakeholders and developers to bring the platform to life.
                </p>
              </Card>
              <Card isDark={isDark}>
                <CardLabel text="Key Constraint" />
                <p className={`text-sm ${body}`} style={{ lineHeight: "1.8" }}>
                  The platform needed to support real-time updates and high data density while maintaining clarity and usability for users managing multiple campaigns simultaneously.
                </p>
              </Card>
            </div>
          </div>
        </FadeSection>

        <div className={divider} />

        {/* 02 · PROBLEM */}
        <FadeSection>
          <SectionLabel text="02: The Problem" />
          <SectionHeading isDark={isDark}>Low Visibility in Complex Campaigns</SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
            {problemCards.map((p, i) => (
              <Card key={i} isDark={isDark}>
                <p className={`text-sm font-semibold mb-2.5 ${isDark ? "text-white/80" : "text-gray-800"}`}>
                  {p.title}
                </p>
                <p className={`text-sm ${body}`} style={{ lineHeight: "1.8" }}>
                  {p.body}
                </p>
              </Card>
            ))}
          </div>

          <div className={`p-6 rounded-2xl border-l-2 border-[#E8699A] ${isDark ? "bg-[#E8699A]/5" : "bg-[#E8699A]/4"}`}>
            <CardLabel text="How Might We" />
            <p className={`text-base ${isDark ? "text-white/75" : "text-gray-700"}`} style={{ fontStyle: "italic", lineHeight: "1.8" }}>
              "How might we design a real-time campaign scheduling experience that reduces cognitive load while providing clear visibility and control over multiple campaigns?"
            </p>
          </div>
        </FadeSection>

        <div className={divider} />

        {/* 03 · RESEARCH */}
        <FadeSection>
          <SectionLabel text="03: Research & Discovery" />
          <SectionHeading isDark={isDark}>Understanding Campaign Planning Behavior</SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <Card isDark={isDark}>
              <CardLabel text="What I Did" />
              <Bullet isDark={isDark} items={[
                "Stakeholder interviews",
                "Workflow analysis",
                "Competitive benchmarking",
                "User journey mapping",
                "Early concept validation",
              ]} />
            </Card>
            <Card isDark={isDark}>
              <CardLabel text="What I Found" />
              <Bullet isDark={isDark} items={[
                "Users needed quick access to campaign status at a glance",
                "Scheduling workflows were manual and error-prone",
                "Users relied heavily on visual timelines",
                "Switching between tools reduced efficiency",
              ]} />
            </Card>
          </div>

          {/* Insights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {insights.map((ins) => (
              <Card key={ins.n} isDark={isDark}>
                <CardLabel text={`Insight ${ins.n}`} />
                <p className={`text-sm font-semibold mb-2 ${isDark ? "text-white/80" : "text-gray-800"}`}>
                  {ins.title}
                </p>
                <p className={`text-sm ${body}`} style={{ lineHeight: "1.8" }}>
                  {ins.body}
                </p>
              </Card>
            ))}
          </div>
        </FadeSection>

        <div className={divider} />

        {/* 04 · DESIGN DECISIONS */}
        <FadeSection>
          <SectionLabel text="04: Design Decisions" />
          <SectionHeading isDark={isDark}>Designing complexity into simplicity.</SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <Card isDark={isDark}>
              <CardLabel text="Information Architecture" />
              <p className={`text-sm mb-3 ${body}`} style={{ lineHeight: "1.8" }}>
                The platform was structured around the <span className={`font-semibold ${isDark ? "text-white/70" : "text-gray-700"}`}>campaign as the primary unit of work</span>. Each campaign contained all relevant scheduling details, status indicators, and team assignments in one place — eliminating the need to cross-reference multiple tools.
              </p>
              <p className={`text-sm ${body}`} style={{ lineHeight: "1.8" }}>
                This campaign-first structure directly addressed the core visibility problem, giving users an immediate sense of what was happening across all active work.
              </p>
            </Card>
            <Card isDark={isDark}>
              <CardLabel text="Progressive Disclosure" />
              <p className={`text-sm mb-3 ${body}`} style={{ lineHeight: "1.8" }}>
                The guiding principle: <span className={`font-semibold ${isDark ? "text-white/70" : "text-gray-700"}`}>surface what matters most, reveal detail on demand.</span> The campaign overview was designed to be scannable at speed, with deeper scheduling controls accessible without leaving the current context.
              </p>
              <p className={`text-sm ${body}`} style={{ lineHeight: "1.8" }}>
                This approach kept the interface clean for users managing high volumes of campaigns while still making complex editing tasks fast and direct.
              </p>
            </Card>
          </div>

          <div className={`p-6 rounded-2xl border-l-2 border-[#E8699A] ${isDark ? "bg-[#E8699A]/5" : "bg-[#E8699A]/4"}`}>
            <CardLabel text="Key Design Decision" />
            <p className={`text-base ${isDark ? "text-white/70" : "text-gray-600"}`} style={{ lineHeight: "1.8" }}>
              Early explorations used a Gantt chart as the primary scheduling view. After testing with users, it became clear that Gantt views were useful for <em>reviewing</em> timelines but too slow for <em>editing</em> them. The design pivoted to a structured list-based scheduler with an optional timeline view — making daily scheduling fast without sacrificing the visual overview teams needed for planning.
            </p>
          </div>
        </FadeSection>

        <div className={divider} />

        {/* 05 · THE PRODUCT */}
        <FadeSection>
          <SectionLabel text="05: The Product" />
          <SectionHeading isDark={isDark}>A Unified Real-Time Campaign Platform</SectionHeading>
          <p className={`text-base mb-6 max-w-2xl ${body}`} style={{ lineHeight: "1.8" }}>
            The platform brings campaign planning, scheduling, and tracking into a single, real-time environment. Every feature was designed to reduce friction and give teams the visibility they need to move quickly and confidently.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <Card key={i} isDark={isDark}>
                <div
                  className="inline-block text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-full mb-4"
                  style={{ background: "#E8699A18", color: "#E8699A" }}
                >
                  {f.label}
                </div>
                <p className={`text-sm ${body}`} style={{ lineHeight: "1.8" }}>
                  {f.body}
                </p>
              </Card>
            ))}
          </div>
        </FadeSection>

        <div className={divider} />

        {/* 06 · DESIGN SYSTEM */}
        <FadeSection>
          <SectionLabel text="06: Design System" />
          <SectionHeading isDark={isDark}>Building a Scalable Visual Foundation</SectionHeading>
          <p className={`text-base mb-6 max-w-2xl ${body}`} style={{ lineHeight: "1.8" }}>
            A consistent visual system was developed alongside the product — ensuring that as the platform grows, every new screen and component can be built on a shared, well-documented foundation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Card isDark={isDark}>
              <CardLabel text="Typography" />
              <div className="space-y-3">
                {[
                  { label: "Display", size: "text-4xl", weight: "font-bold", sample: "Aa" },
                  { label: "Heading", size: "text-2xl", weight: "font-semibold", sample: "Aa" },
                  { label: "Body", size: "text-base", weight: "font-normal", sample: "Aa" },
                  { label: "Label", size: "text-xs", weight: "font-bold", sample: "Aa" },
                ].map((t) => (
                  <div key={t.label} className="flex items-center justify-between">
                    <span className={`text-xs font-bold tracking-widest uppercase ${isDark ? "text-white/28" : "text-gray-300"}`}>
                      {t.label}
                    </span>
                    <span className={`${t.size} ${t.weight} ${isDark ? "text-white/80" : "text-gray-800"}`}>
                      {t.sample}
                    </span>
                  </div>
                ))}
              </div>
              <p className={`text-xs mt-4 ${isDark ? "text-white/30" : "text-gray-400"}`} style={{ lineHeight: "1.7" }}>
                Poppins was selected for the interface — optimised for legibility at small sizes and dense data environments.
              </p>
            </Card>

            <Card isDark={isDark}>
              <CardLabel text="Colour System" />
              <div className="space-y-3">
                {[
                  { name: "Primary Blue", hex: "#068FC6", role: "CTAs, active states, links" },
                  { name: "Success Green", hex: "#22C55E", role: "Live campaigns, no conflicts" },
                  { name: "Warning Amber", hex: "#F59E0B", role: "Pacing alerts, pending states" },
                  { name: "Error Red", hex: "#EF4444", role: "Conflicts, errors, overdue items" },
                  { name: "Surface Dark", hex: "#0F1117", role: "Primary background" },
                  { name: "Border Subtle", hex: "#FFFFFF14", role: "Dividers, card edges" },
                ].map((c) => (
                  <div key={c.name} className="flex items-center gap-3">
                    <div
                      className="w-7 h-7 rounded-lg flex-shrink-0 border border-white/8"
                      style={{ background: c.hex }}
                    />
                    <div>
                      <p className={`text-xs font-semibold ${isDark ? "text-white/70" : "text-gray-700"}`}>
                        {c.name} <span className={`font-normal ${isDark ? "text-white/28" : "text-gray-400"}`}>— {c.hex}</span>
                      </p>
                      <p className={`text-xs ${isDark ? "text-white/30" : "text-gray-400"}`}>
                        {c.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </FadeSection>

        <div className={divider} />

        {/* 07 · OUTCOMES */}
        <FadeSection>
          <SectionLabel text="07: Outcomes" />
          <SectionHeading isDark={isDark}>Measurable Impact on User Efficiency</SectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {outcomes.map((o) => (
              <div
                key={o.label}
                className={`p-6 rounded-2xl border ${isDark ? "border-white/8 bg-white/[0.025]" : "border-gray-100 bg-gray-50/60"}`}
              >
                <p className="text-4xl font-bold mb-2.5" style={{ color: o.color }}>
                  {o.value}
                </p>
                <p className={`text-sm ${body}`} style={{ lineHeight: "1.7" }}>
                  {o.label}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Card isDark={isDark}>
              <CardLabel text="User Testing Results" />
              <p className={`text-sm mb-4 ${body}`} style={{ lineHeight: "1.8" }}>
                Usability testing showed that users completed core scheduling tasks 2.5x faster than with their existing workflow. 71% of participants reported that the platform gave them a significantly clearer view of campaign status — reducing the time spent chasing updates from other team members.
              </p>
              <div className={`pt-4 border-t ${isDark ? "border-white/6" : "border-gray-100"}`}>
                <p className={`text-sm italic ${isDark ? "text-white/40" : "text-gray-400"}`} style={{ lineHeight: "1.8" }}>
                  "This is the first time I've felt in control of my campaigns rather than constantly catching up with them." — Campaign Manager
                </p>
              </div>
            </Card>
            <Card isDark={isDark}>
              <CardLabel text="Operational Impact" />
              <p className={`text-sm ${body}`} style={{ lineHeight: "1.8" }}>
                The 35% reduction in coordination time freed teams to focus on higher-value work — strategy, optimisation, and client communication — rather than status tracking and manual updates. The platform became the single source of truth for campaign scheduling, replacing a fragmented mix of tools that had previously required constant reconciliation.
              </p>
            </Card>
          </div>
        </FadeSection>

        <div className={divider} />

        {/* 08 · REFLECTIONS */}
        <FadeSection>
          <SectionLabel text="08: Reflections" />
          <SectionHeading isDark={isDark}>Key Learnings and Future Improvements</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {reflections.map((r, i) => (
              <Card key={i} isDark={isDark}>
                <CardLabel text={r.title} />
                <p className={`text-sm ${body}`} style={{ lineHeight: "1.8" }}>
                  {r.body}
                </p>
              </Card>
            ))}
          </div>
        </FadeSection>

        <div className={divider} />

        {/* 09 · BEHANCE */}
        <FadeSection>
          <SectionLabel text="09: Full Designs" />
          <SectionHeading isDark={isDark}>The complete case study lives on Behance.</SectionHeading>

          {/* Behance CTA card */}
          <div className={`relative rounded-2xl overflow-hidden border ${isDark ? "border-white/10" : "border-gray-200"}`}>
            {/* Background gradient */}
            <div
              className="absolute inset-0"
              style={{
                background: isDark
                  ? "linear-gradient(135deg, #1a0f13 0%, #0a0a0f 60%, #1a0d14 100%)"
                  : "linear-gradient(135deg, #fdf5f8 0%, #ffffff 60%, #fdf0f5 100%)",
              }}
            />
            {/* Pink glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 20% 50%, rgba(232,105,154,0.12) 0%, transparent 60%)",
              }}
            />

            <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Left: copy */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                  <div className="w-5 h-px bg-[#E8699A]" />
                  <span className="text-xs font-bold tracking-widest uppercase text-[#E8699A]">Behance Case Study</span>
                </div>
                <h3
                  className={`text-2xl md:text-3xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}
                  style={{ fontFamily: "Playfair Display, serif", lineHeight: "1.3" }}
                >
                  View the full case study with all screens
                </h3>
                <p className={`text-sm mb-6 ${isDark ? "text-white/55" : "text-gray-500"}`}>
                  Screen flows, interaction details, the full scheduling UI, and the complete design thinking behind every decision are documented end-to-end on Behance.
                </p>
                <a
                  href={BEHANCE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-85 hover:scale-[0.98]"
                  style={{
                    background: "linear-gradient(135deg, #E8699A, #C2547C)",
                  }}
                >
                  Open Behance Case Study
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* Right: decorative stat pills */}
              <div className="flex flex-col gap-3 flex-shrink-0">
                {[
                  { value: "14", label: "Weeks of design" },
                  { value: "2022", label: "Figma · Hotjar" },
                  { value: "Live", label: "Shipped to production" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${isDark ? "border-white/8 bg-white/[0.03]" : "border-gray-200 bg-white/70"}`}
                  >
                    <span className="text-lg font-bold" style={{ color: "#E8699A" }}>
                      {s.value}
                    </span>
                    <span className={`text-xs font-medium ${isDark ? "text-white/45" : "text-gray-500"}`}>
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeSection>

        <div className={divider} />

        {/* ── NEXT PROJECT ──────────────────────────────────────────────────── */}
        <FadeSection>
          <div className={`pt-4 border-t ${isDark ? "border-white/8" : "border-gray-100"}`}>
            <p className={`text-xs font-bold tracking-widest uppercase mb-6 ${isDark ? "text-white/28" : "text-gray-300"}`}>
              Next Project
            </p>
            <SharedProjectCard project={nextProject} index={0} isDark={isDark} animate={false} />
          </div>
        </FadeSection>
      </div>
    </div>
  );
}