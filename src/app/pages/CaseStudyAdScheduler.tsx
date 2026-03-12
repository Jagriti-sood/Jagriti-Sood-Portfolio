import React, { useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { useTheme } from "../context/ThemeContext";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SharedProjectCard } from "../components/SharedProjectCard";
import { projects } from "../data/projects";

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-5 h-px bg-[#E8699A]" />
      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#E8699A]" style={{ fontFamily: "Poppins, sans-serif" }}>{text}</span>
    </div>
  );
}

function SectionHeading({ children, isDark }: { children: React.ReactNode; isDark: boolean }) {
  return (
    <h2 className={`text-3xl md:text-4xl font-bold leading-snug mb-6 ${isDark ? "text-white" : "text-gray-900"}`} style={{ fontFamily: "Playfair Display, serif" }}>
      {children}
    </h2>
  );
}

function FadeSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

function InfoCard({ title, children, isDark }: { title: string; children: React.ReactNode; isDark: boolean }) {
  return (
    <div className={`p-5 rounded-2xl border ${isDark ? "border-white/8 bg-white/[0.03]" : "border-gray-100 bg-gray-50/70"}`}>
      <p className="text-[10px] font-bold tracking-widest uppercase mb-3 text-[#E8699A]" style={{ fontFamily: "Poppins, sans-serif" }}>{title}</p>
      {children}
    </div>
  );
}

const nextProject = projects[0]; // Wraps back to 101 Healthcare

export default function CaseStudyAdScheduler() {
  const { isDark } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const body = isDark ? "text-white/52" : "text-gray-500";
  const divider = `w-full h-px ${isDark ? "bg-white/6" : "bg-gray-100"}`;

  const meta = [
    { label: "My Role", value: "Lead UX Designer (Embedded)" },
    { label: "Timeline", value: "14 Weeks · 2022" },
    { label: "Tools", value: "Figma, Hotjar, Optimal Workshop, Airtable" },
    { label: "Deliverables", value: "UX Research, Interaction Design, Handoff Specs" },
  ];

  const outcomes = [
    { value: "45min", label: "Core scheduling workflow (down from 6 hours)", color: "#E8699A" },
    { value: "70%", label: "Reduction in scheduling errors", color: "#C2547C" },
    { value: "12", label: "Campaign managers onboarded in week 1 of launch", color: "#F4A0C0" },
  ];

  return (
    <div className={`min-h-screen ${isDark ? "bg-[#0a0a0f]" : "bg-white"}`}>
      {/* ── HERO ── */}
      <section className="pt-28 md:pt-36 pb-0 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.05 }} className="flex flex-wrap gap-2 mb-6">
            {["Ad-Tech", "Internal Tooling", "User Research", "Systems Design"].map((tag) => (
              <span key={tag} className={`px-3 py-1 rounded-full text-[11px] font-medium border ${isDark ? "border-white/10 text-white/45" : "border-gray-200 text-gray-400"}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-5 ${isDark ? "text-white" : "text-gray-900"}`}
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Ad Scheduler
            <br />
            <span style={{ fontStyle: "italic", background: "linear-gradient(125deg, #E8699A, #C2547C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Source Digital Internal Tool
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.18 }}
            className={`max-w-2xl text-base leading-relaxed mb-10 ${body}`}
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Campaign managers were scheduling multi-channel ad placements across TV, digital, and OOH using a combination of spreadsheets, shared Airtable databases, and Slack threads. Three previous design attempts had failed to ship. I spent 4 weeks embedded with the ops team before touching Figma.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.24 }}
            className={`grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 rounded-2xl border overflow-hidden mb-14 ${isDark ? "border-white/8 divide-white/8" : "border-gray-100 divide-gray-100"}`}
          >
            {meta.map((m) => (
              <div key={m.label} className={`px-5 py-4 ${isDark ? "bg-white/[0.025]" : "bg-gray-50/60"}`}>
                <p className={`text-[10px] font-bold tracking-widest uppercase mb-1 ${isDark ? "text-white/28" : "text-gray-300"}`} style={{ fontFamily: "Poppins, sans-serif" }}>{m.label}</p>
                <p className={`text-xs font-semibold ${isDark ? "text-white/75" : "text-gray-700"}`} style={{ fontFamily: "Poppins, sans-serif" }}>{m.value}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} className="max-w-6xl mx-auto">
          <div className="rounded-2xl md:rounded-3xl overflow-hidden aspect-[16/8]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1676276374803-36e48196d5ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpYSUyMHBsYW5uaW5nJTIwYWQlMjBjYW1wYWlnbiUyMGRhc2hib2FyZCUyMHNjcmVlbnxlbnwxfHx8fDE3NzI2OTA1NzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Ad Scheduler — Final Dashboard"
              className="w-full h-full object-cover"
            />
          </div>
          <p className={`text-center text-[11px] mt-3 ${isDark ? "text-white/22" : "text-gray-300"}`} style={{ fontFamily: "Poppins, sans-serif" }}>
            Ad Scheduler — Multi-Channel Campaign Planning Dashboard
          </p>
        </motion.div>
      </section>

      {/* ── BODY ── */}
      <div className="max-w-5xl mx-auto px-6 mt-20 md:mt-28 space-y-20 md:space-y-28 pb-28">

        {/* 01 · OVERVIEW */}
        <FadeSection>
          <SectionLabel text="01 — Overview" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <SectionHeading isDark={isDark}>Why three designers failed before me.</SectionHeading>
              <p className={`text-sm leading-relaxed mb-4 ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                Source Digital is a mid-sized media buying agency managing $40M+ in annual ad spend across TV, digital display, paid social, and out-of-home. Their campaign scheduling process was a fragile web of spreadsheets, Airtable tables, and Slack threads — functional but dangerously error-prone.
              </p>
              <p className={`text-sm leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                Three previous designers had attempted to replace this system. None shipped. The pattern: they designed a tool in isolation, handed it off, got pushback from the ops team, and the project died in stakeholder review. My approach was different: I embedded with the campaign managers for 4 weeks before producing a single wireframe.
              </p>
            </div>
            <div className="space-y-4 lg:pt-16">
              <InfoCard title="My Role" isDark={isDark}>
                <p className={`text-sm leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  Lead UX Designer, working embedded within the campaign operations team. I ran all research, facilitated co-design workshops with 6 campaign managers, designed the full tool, and managed handoff to a two-person React development team.
                </p>
              </InfoCard>
              <InfoCard title="Key Constraints" isDark={isDark}>
                <p className={`text-sm leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  The tool had to handle 6 different ad channel types with fundamentally different scheduling logic. Campaign managers had wildly different mental models — the design had to accommodate all of them. And critically: any tool that required more than 2 hours of training would be rejected.
                </p>
              </InfoCard>
            </div>
          </div>
        </FadeSection>

        <div className={divider} />

        {/* 02 · PROBLEM */}
        <FadeSection>
          <SectionLabel text="02 — The Problem" />
          <SectionHeading isDark={isDark}>A 6-hour workflow held together with duct tape.</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              { title: "Scheduling took an entire workday", body: "A single multi-channel campaign required updating 4 spreadsheets, 2 Airtable views, and confirming everything via Slack — a process that took 5–7 hours per campaign, per manager." },
              { title: "Errors were frequent and expensive", body: "Cross-channel conflicts (two placements booked for the same inventory slot), wrong flight dates, and missed go-live deadlines occurred on roughly 1 in 5 campaigns — each requiring significant remediation work." },
              { title: "Institutional knowledge was siloed", body: "The scheduling logic lived in individual campaign managers' heads and personal spreadsheet templates. When someone left the team, significant process knowledge walked out with them." },
            ].map((p, i) => (
              <div key={i} className={`p-5 rounded-2xl border ${isDark ? "border-white/8 bg-white/[0.03]" : "border-gray-100 bg-gray-50/70"}`}>
                <p className={`text-sm font-semibold mb-2 ${isDark ? "text-white/80" : "text-gray-800"}`} style={{ fontFamily: "Poppins, sans-serif" }}>{p.title}</p>
                <p className={`text-xs leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>{p.body}</p>
              </div>
            ))}
          </div>
          <div className={`p-6 rounded-2xl border-l-2 border-[#E8699A] ${isDark ? "bg-[#E8699A]/5" : "bg-[#E8699A]/4"}`}>
            <p className="text-[10px] font-bold tracking-widest uppercase mb-2 text-[#E8699A]" style={{ fontFamily: "Poppins, sans-serif" }}>Problem Statement</p>
            <p className={`text-base leading-relaxed ${isDark ? "text-white/75" : "text-gray-700"}`} style={{ fontFamily: "Poppins, sans-serif", fontStyle: "italic" }}>
              "How might we give campaign managers a single scheduling environment that handles the full complexity of multi-channel ad buying — while being learnable in under 2 hours and reducing scheduling errors to near zero?"
            </p>
          </div>
        </FadeSection>

        <div className={divider} />

        {/* 03 · RESEARCH */}
        <FadeSection>
          <SectionLabel text="03 — Research & Discovery" />
          <SectionHeading isDark={isDark}>4 weeks embedded before I opened Figma.</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            <InfoCard title="Research Methods" isDark={isDark}>
              <ul className={`text-sm space-y-2 ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                {["4 weeks of contextual inquiry — working alongside campaign managers on live campaigns", "Process mapping: documented the full as-is scheduling workflow across all 6 channel types", "Error log analysis: reviewed 3 months of scheduling errors categorised by type and cause", "Jobs-to-be-done interviews with 6 campaign managers + 2 account directors", "Card sort to understand how managers mentally grouped scheduling tasks", "Optimal Workshop tree test to validate proposed IA before prototyping"].map((item, i) => (
                  <li key={i} className="flex gap-2"><span className="text-[#E8699A] flex-shrink-0">—</span>{item}</li>
                ))}
              </ul>
            </InfoCard>
            <InfoCard title="Key Findings" isDark={isDark}>
              <ul className={`text-sm space-y-2 ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                {["The mental model was campaign-centric, not channel-centric — previous tools had inverted this", "90% of errors happened at the conflict detection stage — no tool was catching them before they became problems", "Managers switched between 'planning mode' and 'execution mode' mentally — the UI needed to reflect this", "Copy-paste from previous campaigns was the most common time-saving behaviour — the new tool had to make this easy", "Bulk operations (setting flight dates for 20 placements at once) were essential, not optional"].map((item, i) => (
                  <li key={i} className="flex gap-2"><span className="text-[#E8699A] flex-shrink-0">—</span>{item}</li>
                ))}
              </ul>
            </InfoCard>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              { n: 1, title: "Campaign-first, not channel-first", body: "Every previous tool was organised around channel type. Managers thought in campaigns. This single insight unlocked the primary navigation structure." },
              { n: 2, title: "Conflict detection is table stakes", body: "90% of expensive errors came from undetected inventory conflicts. Real-time conflict flagging wasn't a nice-to-have — it was the core value of the tool." },
              { n: 3, title: "Planning mode vs. execution mode", body: "During planning, managers needed broad visibility and flexibility. During execution, they needed tight focus on what was live and what was coming up. These needed distinct UI states." },
              { n: 4, title: "Bulk operations unlock adoption", body: "Campaign managers handling 30+ placements per campaign would only adopt a tool that let them set parameters in bulk. Individual-row editing was a dealbreaker." },
            ].map((ins) => (
              <div key={ins.n} className={`p-5 rounded-2xl border ${isDark ? "border-white/8 bg-white/[0.03]" : "border-gray-100 bg-gray-50/70"}`}>
                <p className="text-[10px] font-bold tracking-widest uppercase mb-2 text-[#E8699A]" style={{ fontFamily: "Poppins, sans-serif" }}>Insight {ins.n}</p>
                <p className={`text-sm font-semibold mb-1.5 ${isDark ? "text-white/80" : "text-gray-800"}`} style={{ fontFamily: "Poppins, sans-serif" }}>{ins.title}</p>
                <p className={`text-xs leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>{ins.body}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden aspect-[16/7]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1553034710-47f9e03ff808?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwd29ya2Zsb3clMjBjYWxlbmRhciUyMHNjaGVkdWxpbmclMjB0b29sfGVufDF8fHx8MTc3MjY5MDU4MHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Process mapping session"
              className="w-full h-full object-cover"
            />
          </div>
          <p className={`text-center text-[11px] mt-3 ${isDark ? "text-white/22" : "text-gray-300"}`} style={{ fontFamily: "Poppins, sans-serif" }}>
            As-is process mapping — documenting the full multi-channel scheduling workflow with the ops team
          </p>
        </FadeSection>

        <div className={divider} />

        {/* 04 · DESIGN PROCESS */}
        <FadeSection>
          <SectionLabel text="04 — Design Process" />
          <SectionHeading isDark={isDark}>Designing complexity into simplicity.</SectionHeading>
          <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InfoCard title="Information Architecture" isDark={isDark}>
                <p className={`text-sm leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  I restructured the tool around the campaign as the top-level object. Each campaign contained placements, which were organised by channel. This matched the mental model perfectly. A campaign-level timeline view provided the overview; a placement-level grid handled the detail work.
                </p>
              </InfoCard>
              <InfoCard title="Progressive Disclosure" isDark={isDark}>
                <p className={`text-sm leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  The core principle guiding the UI: show what's needed for the task at hand, reveal complexity on demand. The campaign overview was clean and scannable. Each placement expanded inline to reveal its full scheduling parameters — no modal, no page navigation.
                </p>
              </InfoCard>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-[16/8]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1627757818592-ce2649563a6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB3aXJlZnJhbWUlMjBwcm90b3R5cGUlMjBkZXNpZ24lMjBwcm9jZXNzfGVufDF8fHx8MTc3MjY5MDU3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Wireframes and co-design"
                className="w-full h-full object-cover"
              />
            </div>
            <p className={`text-center text-[11px] mt-1 ${isDark ? "text-white/22" : "text-gray-300"}`} style={{ fontFamily: "Poppins, sans-serif" }}>
              Co-design workshop with campaign managers — validating the placement grid interaction model
            </p>

            <div className={`p-5 rounded-2xl border-l-2 border-[#E8699A] ${isDark ? "bg-[#E8699A]/5" : "bg-[#E8699A]/4"}`}>
              <p className="text-[10px] font-bold tracking-widest uppercase mb-2 text-[#E8699A]" style={{ fontFamily: "Poppins, sans-serif" }}>What I Tried & Discarded</p>
              <p className={`text-sm leading-relaxed ${isDark ? "text-white/70" : "text-gray-600"}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                My first design used a Gantt chart as the primary scheduling view — it seemed obvious for a scheduling tool. After testing with 4 managers, all four said the Gantt was useful for presentations but terrible for data entry. They wanted a grid. I discarded the Gantt as a primary view and kept it as an export/presentation format only. This saved weeks of building the wrong thing.
              </p>
            </div>
          </div>
        </FadeSection>

        <div className={divider} />

        {/* 05 · FINAL DESIGNS */}
        <FadeSection>
          <SectionLabel text="05 — Final Designs" />
          <SectionHeading isDark={isDark}>A tool that the ops team actually adopted.</SectionHeading>
          <p className={`text-sm leading-relaxed mb-8 max-w-2xl ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
            A campaign-centric scheduling environment with real-time conflict detection, bulk operations, an inline placement editor, and a read-only Gantt export — designed to be learnable in under 2 hours and fast enough for professional use.
          </p>
          <div className="space-y-5">
            <div className="rounded-2xl overflow-hidden aspect-[16/9]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1676276374803-36e48196d5ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpYSUyMHBsYW5uaW5nJTIwYWQlMjBjYW1wYWlnbiUyMGRhc2hib2FyZCUyMHNjcmVlbnxlbnwxfHx8fDE3NzI2OTA1NzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Final dashboard design"
                className="w-full h-full object-cover"
              />
            </div>
            <p className={`text-center text-[11px] mt-1 ${isDark ? "text-white/22" : "text-gray-300"}`} style={{ fontFamily: "Poppins, sans-serif" }}>
              Campaign dashboard — multi-channel placement grid with real-time conflict indicators
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className={`p-6 rounded-2xl border flex flex-col justify-center gap-4 ${isDark ? "border-white/8 bg-white/[0.03]" : "border-gray-100 bg-gray-50/60"}`}>
                <p className="text-[10px] font-bold tracking-widest uppercase text-[#E8699A]" style={{ fontFamily: "Poppins, sans-serif" }}>Key Features Designed</p>
                {["Campaign-level overview with health indicators (budget, pacing, conflicts)", "Multi-channel placement grid with inline expand-to-edit", "Real-time conflict detection with plain-language error messages", "Bulk date-set, bulk channel-assign, bulk status-change operations", "Campaign duplication with customisable field inheritance", "Gantt chart export (PDF + shareable link) for client presentations", "Notification system for approaching deadlines and live-campaign alerts"].map((item, i) => (
                  <div key={i} className="flex gap-2.5 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8699A] flex-shrink-0 mt-1.5" />
                    <p className={`text-xs leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>{item}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1553034710-47f9e03ff808?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwd29ya2Zsb3clMjBjYWxlbmRhciUyMHNjaGVkdWxpbmclMjB0b29sfGVufDF8fHx8MTc3MjY5MDU4MHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Calendar scheduling view"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </FadeSection>

        <div className={divider} />

        {/* 06 · OUTCOMES */}
        <FadeSection>
          <SectionLabel text="06 — Outcomes" />
          <SectionHeading isDark={isDark}>A 6-hour workflow, done in 45 minutes.</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {outcomes.map((o) => (
              <div key={o.label} className={`p-6 rounded-2xl border ${isDark ? "border-white/8 bg-white/[0.025]" : "border-gray-100 bg-gray-50/60"}`}>
                <p className="text-4xl font-bold mb-2" style={{ fontFamily: "Poppins, sans-serif", color: o.color }}>{o.value}</p>
                <p className={`text-xs leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>{o.label}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <InfoCard title="Qualitative Outcomes" isDark={isDark}>
              <p className={`text-sm leading-relaxed mb-3 ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                Post-launch usability test (n=6, all campaign managers) showed 100% task completion on "schedule a new multi-channel campaign" with an average of 48 minutes — compared to a 6-hour baseline. All 6 managers rated the tool's learnability as "easy" or "very easy."
              </p>
              <p className={`text-sm leading-relaxed italic ${isDark ? "text-white/40" : "text-gray-400"}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                "I didn't think this was possible. I've been doing this for 8 years and I've never had a tool that actually matched how I think." — Senior Campaign Manager
              </p>
            </InfoCard>
            <InfoCard title="Business Impact" isDark={isDark}>
              <p className={`text-sm leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                The 70% reduction in scheduling errors eliminated an estimated 12 hours of weekly remediation work across the ops team. The Head of Operations cited the tool as enabling the team to take on 3 additional client accounts without headcount increases — a direct revenue impact. The tool is still in active use and the third iteration has since shipped.
              </p>
            </InfoCard>
          </div>
        </FadeSection>

        <div className={divider} />

        {/* 07 · REFLECTIONS */}
        <FadeSection>
          <SectionLabel text="07 — Reflections" />
          <SectionHeading isDark={isDark}>Why this one shipped when three others didn't.</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "What worked well", body: "Embedded research was the difference. By the time I opened Figma, I understood the problem deeply enough that the first wireframe was directionally correct. No previous designer had done this — they all started designing too early." },
              { title: "What I'd do differently", body: "I underestimated how much the conflict detection logic needed to be designed in collaboration with the dev team from day 1. We lost two weeks late in the project when the interaction model I'd designed didn't map cleanly to the backend data structure." },
              { title: "What I learned", body: "Operational tools succeed or fail on their ability to match the existing mental model of expert users — not on introducing a better mental model. Expert users don't want to relearn. They want their existing expertise amplified." },
            ].map((r, i) => (
              <div key={i} className={`p-5 rounded-2xl border ${isDark ? "border-white/8 bg-white/[0.03]" : "border-gray-100 bg-gray-50/70"}`}>
                <p className="text-[10px] font-bold tracking-widest uppercase mb-3 text-[#E8699A]" style={{ fontFamily: "Poppins, sans-serif" }}>{r.title}</p>
                <p className={`text-sm leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>{r.body}</p>
              </div>
            ))}
          </div>
        </FadeSection>

        {/* ── NEXT PROJECT ── */}
        <FadeSection>
          <div className={`pt-4 border-t ${isDark ? "border-white/8" : "border-gray-100"}`}>
            <p className={`text-[10px] font-bold tracking-widest uppercase mb-6 ${isDark ? "text-white/28" : "text-gray-300"}`} style={{ fontFamily: "Poppins, sans-serif" }}>
              Next Project
            </p>
            <SharedProjectCard project={nextProject} index={0} isDark={isDark} animate={false} />
          </div>
        </FadeSection>
      </div>
    </div>
  );
}