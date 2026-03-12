import { useEffect, useRef } from "react";
import React from "react";
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

const nextProject = projects[3]; // Ad Scheduler

export default function CaseStudyMaple() {
  const { isDark } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const body = isDark ? "text-white/52" : "text-gray-500";
  const divider = `w-full h-px ${isDark ? "bg-white/6" : "bg-gray-100"}`;

  const meta = [
    { label: "My Role", value: "Senior UX/UI Designer" },
    { label: "Timeline", value: "10 Weeks · 2023" },
    { label: "Tools", value: "Figma, Storybook, Notion" },
    { label: "Deliverables", value: "Brand Identity, Design System, Marketing Site, Product UI" },
  ];

  const outcomes = [
    { value: "60%", label: "Faster time from page visit to demo request", color: "#E8699A" },
    { value: "3", label: "New enterprise contracts in Q3 2023", color: "#C2547C" },
    { value: "40%", label: "Reduction in dev time via design system", color: "#F4A0C0" },
  ];

  return (
    <div className={`min-h-screen ${isDark ? "bg-[#0a0a0f]" : "bg-white"}`}>
      {/* ── HERO ── */}
      <section className="pt-28 md:pt-36 pb-0 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.05 }} className="flex flex-wrap gap-2 mb-6">
            {["B2B Tech", "Brand Identity", "Design Systems", "Product UI"].map((tag) => (
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
            MapleCode
            <br />
            <span style={{ fontStyle: "italic", background: "linear-gradient(125deg, #E8699A, #C2547C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Brand & Product Overhaul
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.18 }}
            className={`max-w-2xl text-base leading-relaxed mb-10 ${body}`}
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            MapleCode Innovations built exceptional developer tooling — but their digital presence was generic enough to be forgettable. I led a full visual overhaul: a new brand identity, a scalable design system, a redesigned marketing site, and a refreshed product UI — all in 10 weeks.
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
              src="https://images.unsplash.com/photo-1770303430564-8aa0a487dddb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCMkIlMjBTYWFTJTIwc3RhcnR1cCUyMGJyYW5kJTIwZGVzaWduJTIwc3lzdGVtfGVufDF8fHx8MTc3MjY5MDU3M3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="MapleCode — Brand & Design System"
              className="w-full h-full object-cover"
            />
          </div>
          <p className={`text-center text-[11px] mt-3 ${isDark ? "text-white/22" : "text-gray-300"}`} style={{ fontFamily: "Poppins, sans-serif" }}>
            MapleCode Innovations — Brand Identity & Product UI Overview
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
              <SectionHeading isDark={isDark}>The brief.</SectionHeading>
              <p className={`text-sm leading-relaxed mb-4 ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                MapleCode Innovations is a Toronto-based B2B software company offering CI/CD tooling and DevOps automation for mid-market engineering teams. Their product genuinely outperformed competitors in internal benchmarks — but they kept losing enterprise deals to companies with more polished digital presences.
              </p>
              <p className={`text-sm leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                The CEO's brief was direct: "We lose deals before we get to the demo. Fix what prospective customers see before they talk to us." This meant brand identity, marketing site, and product UI — all needing to feel like a credible enterprise-grade solution.
              </p>
            </div>
            <div className="space-y-4 lg:pt-16">
              <InfoCard title="My Role" isDark={isDark}>
                <p className={`text-sm leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  Senior UX/UI Designer working with MapleCode's founding team and a React developer. I led brand strategy, visual design, design system creation, and design-to-dev handoff in Figma with documented token specs.
                </p>
              </InfoCard>
              <InfoCard title="Key Constraints" isDark={isDark}>
                <p className={`text-sm leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  10-week window — hard deadline tied to an enterprise sales event (Collision Conference 2023). Existing product was built in React, so the design system needed to be implementable in their stack. No rebrand of the company name, just the visual identity.
                </p>
              </InfoCard>
            </div>
          </div>
        </FadeSection>

        <div className={divider} />

        {/* 02 · PROBLEM */}
        <FadeSection>
          <SectionLabel text="02 — The Problem" />
          <SectionHeading isDark={isDark}>Exceptional product. Forgettable presence.</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              { title: "Enterprise credibility gap", body: "The existing site used a generic SaaS template with stock photography. Enterprise decision-makers judged it within seconds — and the first impression didn't match the quality of what was being sold." },
              { title: "Product UI looked unfinished", body: "The product itself was functional but visually inconsistent — different spacing, mixed type scales, no cohesive component language. Screenshots in sales decks undermined trust rather than building it." },
              { title: "No clear positioning", body: "The homepage tried to speak to every engineering role simultaneously. The messaging was generic ('powerful developer tools') with no differentiation from 40 competing products saying the same thing." },
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
              "How might we create a brand and product experience that communicates MapleCode's engineering quality and enterprise readiness — from the first website visit through to the in-product experience?"
            </p>
          </div>
        </FadeSection>

        <div className={divider} />

        {/* 03 · RESEARCH */}
        <FadeSection>
          <SectionLabel text="03 — Research & Discovery" />
          <SectionHeading isDark={isDark}>What enterprise buyers actually look for.</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            <InfoCard title="Research Methods" isDark={isDark}>
              <ul className={`text-sm space-y-2 ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                {["12 interviews with enterprise engineering decision-makers (CTOs, VPs of Engineering) at companies MapleCode was targeting", "Win/loss analysis of 8 recent enterprise deals — detailed debrief with sales team on key objections", "Comparative audit of 10 B2B DevOps brand and marketing sites (GitHub, Vercel, Linear, Railway, etc.)", "Brand perception survey sent to existing customers (n=34)", "Heuristic review of the existing product UI against enterprise SaaS standards"].map((item, i) => (
                  <li key={i} className="flex gap-2"><span className="text-[#E8699A] flex-shrink-0">—</span>{item}</li>
                ))}
              </ul>
            </InfoCard>
            <InfoCard title="Key Findings" isDark={isDark}>
              <ul className={`text-sm space-y-2 ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                {["Enterprise buyers form a visual credibility judgment in under 8 seconds — before reading any copy", "The #1 competitor differentiator (per win/loss analysis) was 'looks like a company we can bet on'", "Product screenshots were the most-viewed element on competitor sites — MapleCode had none", "'Compliance and security' copy was consistently expected by enterprise buyers — MapleCode's site didn't mention it", "Existing customers rated the product highly on capability but poorly on 'how it looks when I show it to my team'"].map((item, i) => (
                  <li key={i} className="flex gap-2"><span className="text-[#E8699A] flex-shrink-0">—</span>{item}</li>
                ))}
              </ul>
            </InfoCard>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              { n: 1, title: "Visual credibility precedes message credibility", body: "Enterprise buyers make a visual trust judgment before engaging with any copy or feature claims. The brand has to earn the right to be read." },
              { n: 2, title: "Product screenshots are the #1 conversion asset", body: "Across all the competitor sites I audited, product UI screenshots appeared above the fold on all top performers. MapleCode's site had zero product imagery." },
              { n: 3, title: "Specificity over generality in positioning", body: "\"Powerful developer tools\" means nothing. \"Sub-3-minute pipeline execution for teams shipping 50+ times a day\" means something. Specificity is credibility." },
              { n: 4, title: "Design system = developer trust", body: "When I showed the engineering team a well-documented Figma design system with token specs, their trust in the design process increased immediately — it spoke their language." },
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
              src="https://images.unsplash.com/photo-1621036579842-9080c7119f67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyaW5nJTIwdGVhbSUyMHdvcmtzcGFjZSUyMGNvZGluZyUyMG9mZmljZXxlbnwxfHx8fDE3NzI2OTA1Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="MapleCode team environment"
              className="w-full h-full object-cover"
            />
          </div>
          <p className={`text-center text-[11px] mt-3 ${isDark ? "text-white/22" : "text-gray-300"}`} style={{ fontFamily: "Poppins, sans-serif" }}>
            Win/loss analysis session with MapleCode's sales team — mapping decision-maker objections
          </p>
        </FadeSection>

        <div className={divider} />

        {/* 04 · DESIGN PROCESS */}
        <FadeSection>
          <SectionLabel text="04 — Design Process" />
          <SectionHeading isDark={isDark}>Brand first. System second. Site third.</SectionHeading>
          <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InfoCard title="Brand Strategy" isDark={isDark}>
                <p className={`text-sm leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  I positioned MapleCode around a single brand idea: "Engineered precision." The visual language uses sharp geometric forms, a high-contrast deep navy and maple orange palette, and monospace typography details that signal engineering credibility without being cold or inaccessible.
                </p>
              </InfoCard>
              <InfoCard title="Design System Approach" isDark={isDark}>
                <p className={`text-sm leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  I built the design system in Figma before starting any screen design — defining tokens (colour, spacing, radius, shadow, typography) first, then base components, then compositions. This ensured every page and screen was consistent from the first frame.
                </p>
              </InfoCard>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-[16/8]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1770303430564-8aa0a487dddb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCMkIlMjBTYWFTJTIwc3RhcnR1cCUyMGJyYW5kJTIwZGVzaWduJTIwc3lzdGVtfGVufDF8fHx8MTc3MjY5MDU3M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Design process"
                className="w-full h-full object-cover"
              />
            </div>
            <p className={`text-center text-[11px] mt-1 ${isDark ? "text-white/22" : "text-gray-300"}`} style={{ fontFamily: "Poppins, sans-serif" }}>
              Design system token architecture — colour, spacing, and typography foundations
            </p>

            <div className={`p-5 rounded-2xl border-l-2 border-[#E8699A] ${isDark ? "bg-[#E8699A]/5" : "bg-[#E8699A]/4"}`}>
              <p className="text-[10px] font-bold tracking-widest uppercase mb-2 text-[#E8699A]" style={{ fontFamily: "Poppins, sans-serif" }}>What I Tried & Discarded</p>
              <p className={`text-sm leading-relaxed ${isDark ? "text-white/70" : "text-gray-600"}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                My first brand direction used a dark-mode-only visual language — very bold, very dramatic. The founding team loved it. Their enterprise prospects didn't — feedback from two pilot reviews was "it looks like a gaming company." I pivoted to a light-primary system with dark mode support, which tested far better with CTOs and VPs of Engineering who were accustomed to GitHub and Linear's interfaces.
              </p>
            </div>
          </div>
        </FadeSection>

        <div className={divider} />

        {/* 05 · FINAL DESIGNS */}
        <FadeSection>
          <SectionLabel text="05 — Final Designs" />
          <SectionHeading isDark={isDark}>A brand that earned the meeting.</SectionHeading>
          <p className={`text-sm leading-relaxed mb-8 max-w-2xl ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
            A coherent brand identity system, a marketing site built to convert enterprise prospects, and a product UI redesign that gave MapleCode the visual credibility their engineering deserved.
          </p>
          <div className="space-y-5">
            <div className="rounded-2xl overflow-hidden aspect-[16/9]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1616861771635-49063a4636ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnQlMjBsaWJyYXJ5JTIwVUklMjBraXR8ZW58MXx8fHwxNzcyNTY2ODQwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Final marketing site"
                className="w-full h-full object-cover"
              />
            </div>
            <p className={`text-center text-[11px] mt-1 ${isDark ? "text-white/22" : "text-gray-300"}`} style={{ fontFamily: "Poppins, sans-serif" }}>Marketing site homepage — product screenshots above the fold, enterprise trust signals throughout</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className={`p-6 rounded-2xl border flex flex-col justify-center gap-4 ${isDark ? "border-white/8 bg-white/[0.03]" : "border-gray-100 bg-gray-50/60"}`}>
                <p className="text-[10px] font-bold tracking-widest uppercase text-[#E8699A]" style={{ fontFamily: "Poppins, sans-serif" }}>Deliverables</p>
                {["Brand identity: logo refinement, colour system, typography scale", "Design system: 80+ components, token documentation, Storybook integration", "Marketing site: 6 page templates (homepage, product, pricing, docs, about, blog)", "Product UI redesign: dashboard, pipeline view, settings, team management", "Sales collateral templates: pitch deck, one-pager, case study format", "Dark/light mode across all surfaces"].map((item, i) => (
                  <div key={i} className="flex gap-2.5 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8699A] flex-shrink-0 mt-1.5" />
                    <p className={`text-xs leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>{item}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1770303430564-8aa0a487dddb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCMkIlMjBTYWFTJTIwc3RhcnR1cCUyMGJyYW5kJTIwZGVzaWduJTIwc3lzdGVtfGVufDF8fHx8MTc3MjY5MDU3M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Product UI"
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
          <SectionHeading isDark={isDark}>The brand that won the deal.</SectionHeading>
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
                At Collision Conference 2023, MapleCode's booth received consistent feedback from enterprise prospects that the brand "looked like a serious company." Three deals that had previously stalled were re-engaged after prospects visited the new site.
              </p>
              <p className={`text-sm leading-relaxed italic ${isDark ? "text-white/40" : "text-gray-400"}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                "I saw the new site and immediately forwarded it to our CTO. That's never happened before." — Head of Engineering, enterprise prospect
              </p>
            </InfoCard>
            <InfoCard title="Business Impact" isDark={isDark}>
              <p className={`text-sm leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                The design system reduced front-end development time by an estimated 40% for new feature work. The React dev team adopted the token system directly, creating a single source of truth between design and code for the first time in the company's history. The CEO cited the rebrand as a strategic inflection point for the business.
              </p>
            </InfoCard>
          </div>
        </FadeSection>

        <div className={divider} />

        {/* 07 · REFLECTIONS */}
        <FadeSection>
          <SectionLabel text="07 — Reflections" />
          <SectionHeading isDark={isDark}>What I'd do differently.</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "What worked well", body: "Starting with the design system token architecture before any screens was the right call — it created consistency that would have been impossible to retrofit. Every screen we designed came out of the system, not the other way round." },
              { title: "What I'd do differently", body: "I'd have involved the React developer in design system decisions from week 1. We lost a week reconciling my Figma token naming with their CSS custom property conventions — easily avoidable." },
              { title: "What I learned", body: "In B2B, design is sales. The visual credibility of a product directly influences whether enterprise buyers take the next step. Good UX is table stakes — good brand is the differentiator at the top of the funnel." },
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
            <SharedProjectCard project={nextProject} index={1} isDark={isDark} animate={false} />
          </div>
        </FadeSection>
      </div>
    </div>
  );
}