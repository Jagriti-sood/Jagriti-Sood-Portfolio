import image_c878279b135222fb0373297d7312201ac5f845ce from 'figma:asset/c878279b135222fb0373297d7312201ac5f845ce.png'
import image_e0215266097f1965ba370654c05cbb5588a3fe32 from 'figma:asset/e0215266097f1965ba370654c05cbb5588a3fe32.png'
import image_3033a5857c62d024d329ab023f69c93836049047 from 'figma:asset/3033a5857c62d024d329ab023f69c93836049047.png'
import { useEffect, useRef } from "react";
import React from "react";
import { motion, useInView } from "motion/react";
import { useTheme } from "../context/ThemeContext";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SharedProjectCard } from "../components/SharedProjectCard";
import { projects } from "../data/projects";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function SectionLabel({ text, color = "#E8699A" }: { text: string; color?: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-5 h-px" style={{ background: color }} />
      <span
        className="text-xs font-bold tracking-[0.2em] uppercase"
        style={{ fontFamily: "Poppins, sans-serif", color }}
      >
        {text}
      </span>
    </div>
  );
}

function SectionHeading({ children, isDark }: { children: React.ReactNode; isDark: boolean }) {
  return (
    <h2
      className={`text-3xl md:text-4xl font-bold leading-snug mb-5 ${isDark ? "text-white" : "text-gray-900"}`}
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
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Card({ isDark, children, className = "" }: { isDark: boolean; children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`p-5 rounded-2xl border ${
        isDark ? "border-white/8 bg-white/[0.03]" : "border-gray-100 bg-gray-50/60"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function CardLabel({ text, color = "#E8699A" }: { text: string; color?: string }) {
  return (
    <p
      className="text-xs font-bold tracking-widest uppercase mb-3"
      style={{ fontFamily: "Poppins, sans-serif", color }}
    >
      {text}
    </p>
  );
}

function BulletList({ items, isDark }: { items: string[]; isDark: boolean }) {
  return (
    <ul className="space-y-2" style={{ fontFamily: "Poppins, sans-serif" }}>
      {items.map((item, i) => (
        <li key={i} className={`flex gap-2.5 items-start text-sm ${isDark ? "text-white/55" : "text-gray-500"}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8699A] flex-shrink-0 mt-[6px]" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function ImageCaption({ text, isDark }: { text: string; isDark: boolean }) {
  return (
    <p
      className={`text-center text-xs mt-3 ${isDark ? "text-white/22" : "text-gray-300"}`}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {text}
    </p>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const nextProject = projects[2]; // MapleCode

export default function CaseStudy101() {
  const { isDark } = useTheme();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const body = isDark ? "text-white/52" : "text-gray-500";
  const divider = `w-full h-px ${isDark ? "bg-white/6" : "bg-gray-100"}`;

  const meta = [
    { label: "My Role", value: "Solo UX/UI Designer" },
    { label: "Timeline", value: "9 Months · 2025" },
    { label: "Tools", value: "Figma · Hotjar · Maze · Webflow" },
    { label: "Type", value: "Zero-to-One · Web Design" },
  ];

  const outcomes = [
    { value: "3×", label: "Increase in consultation requests post-launch", color: "#E8699A" },
    { value: "64%", label: "Increase in service page engagement", color: "#C2547C" },
    { value: "42%", label: "Reduction in homepage bounce rate", color: "#F4A0C0" },
    { value: "2m 48s", label: "Average session duration increased", color: "#E8699A" },
  ];

  return (
    <div className={`min-h-screen ${isDark ? "bg-[#0a0a0f]" : "bg-white"}`}>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="pt-28 md:pt-36 pb-0 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Chips */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {["Healthcare · Ontario", "Web Design", "UX Research", "Dev Collaboration"].map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1 rounded-full text-xs font-medium border ${
                  isDark ? "border-white/10 text-white/40" : "border-gray-200 text-gray-400"
                }`}
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`text-4xl sm:text-5xl md:text-[56px] font-bold leading-tight mb-5 ${isDark ? "text-white" : "text-gray-900"}`}
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Designing a Trusted Digital<br />Front Door for Senior Home Care
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className={`max-w-2xl text-base leading-relaxed mb-10 ${body}`}
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            A registered home care agency in Ontario with exceptional caregivers and no digital
            presence. I designed and shipped their first website, then stayed on for months of
            post-launch iteration, tracking real behaviour and updating the design until the
            numbers moved.
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
                <p
                  className={`text-xs font-bold tracking-widest uppercase mb-1 ${isDark ? "text-white/28" : "text-gray-300"}`}
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {m.label}
                </p>
                <p
                  className={`text-sm font-semibold ${isDark ? "text-white/75" : "text-gray-700"}`}
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {m.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Cover image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-6xl mx-auto"
        >
          <div className="rounded-2xl md:rounded-3xl overflow-hidden aspect-[16/8]">
            <ImageWithFallback
              src={image_3033a5857c62d024d329ab023f69c93836049047}
              alt="101 Healthcare - Final Website"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* ── BODY ─────────────────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 mt-10 md:mt-14 space-y-10 md:space-y-12 pb-16">

        {/* CONTEXT */}
        <FadeSection>
          <SectionLabel text="Context" />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
            <div className="lg:col-span-3">
              <SectionHeading isDark={isDark}>No website. Exceptional care. Nobody knew they existed.</SectionHeading>
              <p className={`text-base leading-relaxed mb-4 ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                101 Healthcare had been operating on referrals alone for years - no website, no
                searchable presence, no way for a family to find them outside word of mouth. The
                work was genuinely good. The business was invisible.
              </p>
              <p className={`text-base leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                I joined as the sole designer to build everything from scratch. What started
                as a design project became a nine-month engagement, initial research and
                design, close collaboration through the build, a full launch, and then
                continued iteration based on what real users actually did on the site.
              </p>
            </div>
            <div className="lg:col-span-2">
              <Card isDark={isDark}>
                <CardLabel text="My Scope" />
                <p className={`text-sm leading-relaxed mb-3 ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  I led the end-to-end UX design of the website from concept to launch.
                </p>
                <p className={`text-sm font-semibold mb-2 ${isDark ? "text-white/65" : "text-gray-600"}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  Responsibilities included:
                </p>
                <p className={`text-sm leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  -Research and information architecture<br />
                  -User flow and conversion strategy<br />
                  -Wireframes and high-fidelity UI<br />
                  -Design system creation<br />
                  -Developer collaboration<br />
                  -QA and post-launch iteration
                </p>
              </Card>
            </div>
          </div>

          {/* MY TEAM */}
          <div className="mt-8">
            <CardLabel text="My Team" />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {[
                "1 UX Designer (me)",
                "1 Frontend Developer",
                "1 Backend Developer",
                "2 Founders / Stakeholders",
                "1 Content contributor"
              ].map((member, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-xl border text-center ${
                    isDark ? "border-white/8 bg-white/[0.02]" : "border-gray-100 bg-gray-50/40"
                  }`}
                >
                  <p className={`text-xs leading-snug ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                    {member}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeSection>

        <div className={divider} />

        {/* RESEARCH */}
        <FadeSection>
          <SectionLabel text="Research & Discovery" />
          <SectionHeading isDark={isDark}>I didn't open Figma until I understood the families.</SectionHeading>
          <p className={`text-base leading-relaxed mb-5 max-w-2xl ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
            Before designing, I focused on understanding how families search for home care services and what information they need to trust a provider.
          </p>
          <p className={`text-base leading-relaxed mb-6 max-w-2xl ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
            The research focused on care decision behavior, trust signals, and service clarity, which are critical in healthcare service websites.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {/* image */}
            <div className="rounded-2xl overflow-hidden min-h-[240px] md:min-h-0">
              <ImageWithFallback
                src={image_e0215266097f1965ba370654c05cbb5588a3fe32}
                alt="Research & affinity mapping"
                className="w-full h-full object-cover"
                style={{ minHeight: "240px" }}
              />
            </div>
            {/* findings card — matches height via flex */}
            <Card isDark={isDark} className="flex flex-col justify-between">
              <div className="space-y-3" style={{ fontFamily: "Poppins, sans-serif" }}>
                <CardLabel text="What Research Uncovered" />
                <div className={`flex gap-2.5 items-start text-sm ${isDark ? "text-white/55" : "text-gray-500"}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8699A] flex-shrink-0 mt-[6px]" />
                  Families often search online while under stress or urgency
                </div>
                <div className={`flex gap-2.5 items-start text-sm ${isDark ? "text-white/55" : "text-gray-500"}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8699A] flex-shrink-0 mt-[6px]" />
                  Trust is built through clear service explanations and human messaging
                </div>
                <div className={`flex gap-2.5 items-start text-sm ${isDark ? "text-white/55" : "text-gray-500"}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8699A] flex-shrink-0 mt-[6px]" />
                  Many healthcare websites overwhelm users with clinical language
                </div>
                <div className={`flex gap-2.5 items-start text-sm ${isDark ? "text-white/55" : "text-gray-500"}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8699A] flex-shrink-0 mt-[6px]" />
                  <div className="text-sm">
                    Families primarily want to answer three questions quickly:
                    <div className="ml-4 mt-2 space-y-1.5 text-sm">
                      <div className="text-sm"><span style={{ color: "#E8699A" }}>1.</span> What services do you provide?</div>
                      <div className="text-sm"><span style={{ color: "#E8699A" }}>2.</span> Can you help my loved one?</div>
                      <div className="text-sm"><span style={{ color: "#E8699A" }}>3.</span> How do I get started?</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Insight row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: "Families prioritize trust before features",
                body: "People looking for senior care are making emotional decisions. Clear messaging, caregiver credibility, and compassionate tone matter more than complex service details.",
              },
              {
                title: "Users need immediate clarity on services",
                body: "Visitors want to quickly understand whether the provider offers services like companionship care, dementia support, or respite care.",
              },
              {
                title: "Conversion happens through reassurance",
                body: "Families are more likely to request consultations when the process feels simple, supportive, and low-commitment.",
              },
            ].map((ins, i) => (
              <div
                key={i}
                className={`p-5 rounded-2xl border ${isDark ? "border-white/8 bg-white/[0.025]" : "border-gray-100 bg-gray-50/70"}`}
              >
                <p className="text-[10px] font-bold tracking-widest uppercase mb-2 text-[#E8699A]" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Insight {i + 1}
                </p>
                <p className={`text-sm font-semibold mb-1.5 ${isDark ? "text-white/80" : "text-gray-800"}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  {ins.title}
                </p>
                <p className={`text-sm leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  {ins.body}
                </p>
              </div>
            ))}
          </div>
        </FadeSection>

        <div className={divider} />

        {/* IA + DESIGN */}
        <FadeSection>
          <SectionLabel text="IA & Design" />
          <SectionHeading isDark={isDark}>Structure first. Pixels second.</SectionHeading>
          <p className={`text-base leading-relaxed mb-6 max-w-2xl ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
            I structured the website around three primary user goals: understanding services, building trust in the caregivers, and requesting a consultation.
            Instead of a complex healthcare structure, the site focused on clear storytelling and progressive disclosure, helping families move from awareness to contact without confusion.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {/* Card matches image height */}
            <Card isDark={isDark} className="flex flex-col justify-between">
              <div>
                <CardLabel text="Design System Built From Scratch" />
                <p className={`text-sm leading-relaxed mb-3 ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  Because the company had no existing brand system, I created a lightweight design system including:
                </p>
                <BulletList isDark={isDark} items={[
                  "Accessible typography hierarchy",
                  "Compassion-focused color palette",
                  "Modular card components",
                  "Reusable CTA patterns",
                  "Consistent spacing and layout grid",
                ]} />
                <p className={`text-sm leading-relaxed mt-3 ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  The goal was to ensure clarity, warmth, and accessibility, which are critical for healthcare audiences.
                </p>
              </div>
              <div
                className={`mt-5 pt-4 border-t ${isDark ? "border-white/6" : "border-gray-100"}`}
              >
                <p className={`text-[10px] font-bold tracking-widest uppercase mb-1 ${isDark ? "text-white/25" : "text-gray-300"}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  Early decision I reversed
                </p>
                <p className={`text-sm leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  Initially, the homepage highlighted all services equally, but early testing showed users felt overwhelmed by too many options. I simplified the structure to focus on the core value proposition, three key services, and a clear consultation CTA, improving clarity and reducing decision fatigue.
                </p>
              </div>
            </Card>
            {/* image */}
            <div className="rounded-2xl overflow-hidden min-h-[280px] md:min-h-0">
              <ImageWithFallback
                src={image_c878279b135222fb0373297d7312201ac5f845ce}
                alt="Design system - final UI"
                className="w-full h-full object-cover"
                style={{ minHeight: "280px" }}
              />
            </div>
          </div>
          <ImageCaption text="Homepage design - situation-led hero, caregiver trust section, and frictionless enquiry path" isDark={isDark} />
        </FadeSection>

        <div className={divider} />

        {/* DEV COLLABORATION */}
        <FadeSection>
          <SectionLabel text="Working With the Developer" />
          <SectionHeading isDark={isDark}>I didn't hand off and disappear.</SectionHeading>
          <p className={`text-base leading-relaxed mb-6 max-w-2xl ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
            I stayed embedded through the entire build. Weekly design-dev syncs, annotated Figma frames for every component, a shared Notion board for bug tracking and same-day availability whenever the developer had a question.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* card — left column */}
            <Card isDark={isDark} className="flex flex-col justify-between">
              <div>
                <CardLabel text="What I Caught in QA" />
                <p className={`text-sm leading-relaxed mb-3 ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  During QA I identified several issues before launch:
                </p>
                <BulletList isDark={isDark} items={[
                  "Broken form validation states",
                  "Inconsistent button hierarchy",
                  "Mobile spacing inconsistencies",
                  "Accessibility issues with color contrast",
                  "CTA visibility problems on smaller screens",
                ]} />
                <p className={`text-sm leading-relaxed mt-3 ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  Fixing these ensured the site launched with a clean, reliable user experience.
                </p>
              </div>
              <div className={`mt-5 pt-4 border-t ${isDark ? "border-white/6" : "border-gray-100"}`}>
                <p className={`text-xs italic leading-relaxed ${isDark ? "text-white/35" : "text-gray-400"}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  "Most designers disappear after handoff. Jagriti was in staging every week.
                  The quality of what we shipped reflected that." - Webflow developer
                </p>
              </div>
            </Card>

            {/* collaboration highlights — right column */}
            <Card isDark={isDark}>
              <CardLabel text="How I Stayed Embedded" />
              <BulletList isDark={isDark} items={[
                "Weekly design-dev syncs throughout the entire build",
                "Annotated Figma frames for every component and interaction",
                "Shared Notion board for real-time bug tracking and decisions",
                "Same-day availability whenever the developer had a question",
                "Active participation in staging reviews before every release",
              ]} />
            </Card>
          </div>
        </FadeSection>

        <div className={divider} />

        {/* POST-LAUNCH ITERATION */}
        <FadeSection>
          <SectionLabel text="Post-Launch Iteration" />
          <SectionHeading isDark={isDark}>The launch was the beginning, not the end.</SectionHeading>
          <p className={`text-base leading-relaxed mb-6 max-w-2xl ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
            After launch, I monitored user behavior using analytics and user feedback to identify areas where visitors struggled or dropped off.
            The goal was to improve service discovery and consultation conversions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                label: "ITERATION 1",
                color: "#E8699A",
                before: "Users were spending time reading service sections but scroll depth dropped before reaching the consultation form.",
                after: "I introduced:",
                afterItems: [
                  "A sticky consultation CTA",
                  "Mid-page consultation prompts",
                  "Simplified service summaries",
                ],
                afterNote: "This made it easier for users to request care without scrolling through the entire page.",
              },
              {
                label: "ITERATION 2",
                color: "#C2547C",
                before: "Visitors were exploring the homepage but not fully understanding the difference between service types.",
                after: "I added:",
                afterItems: [
                  "Service comparison cards",
                  "Clearer icons",
                  "Shorter descriptions with expandable details",
                ],
                afterNote: "This improved service comprehension.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`p-5 rounded-2xl border ${isDark ? "border-white/8 bg-white/[0.025]" : "border-gray-100 bg-gray-50/60"}`}
              >
                <CardLabel text={item.label} color={item.color} />
                <p className={`text-[11px] font-bold tracking-widest uppercase mb-1 ${isDark ? "text-white/25" : "text-gray-300"}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  What the data showed
                </p>
                <p className={`text-[13px] leading-relaxed mb-4 ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  {item.before}
                </p>
                <p className={`text-[11px] font-bold tracking-widest uppercase mb-1`} style={{ fontFamily: "Poppins, sans-serif", color: item.color }}>
                  What I changed
                </p>
                <p className={`text-[13px] leading-relaxed mb-2 ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  {item.after}
                </p>
                <ul className="space-y-1.5 mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {item.afterItems.map((bulletItem, idx) => (
                    <li key={idx} className={`flex gap-2 items-start text-[13px] ${isDark ? "text-white/55" : "text-gray-500"}`}>
                      <span className="w-1 h-1 rounded-full bg-[#E8699A] flex-shrink-0 mt-[6px]" />
                      {bulletItem}
                    </li>
                  ))}
                </ul>
                <p className={`text-[13px] leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  {item.afterNote}
                </p>
              </div>
            ))}
          </div>
        </FadeSection>

        <div className={divider} />

        {/* OUTCOMES */}
        <FadeSection>
          <SectionLabel text="Outcomes" />
          <SectionHeading isDark={isDark}>A referral-only agency, bookable online.</SectionHeading>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {outcomes.map((o) => (
              <div
                key={o.label}
                className={`p-5 rounded-2xl border ${isDark ? "border-white/8 bg-white/[0.025]" : "border-gray-100 bg-gray-50/60"}`}
              >
                <p
                  className="text-4xl font-bold mb-2"
                  style={{ fontFamily: "Poppins, sans-serif", color: o.color }}
                >
                  {o.value}
                </p>
                <p className={`text-[11px] leading-snug ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  {o.label}
                </p>
              </div>
            ))}
          </div>

          <div
            className={`p-6 rounded-2xl border-l-[3px] border-[#E8699A] ${isDark ? "bg-white/[0.025]" : "bg-rose-50/40"}`}
          >
            <p className={`text-sm leading-relaxed mb-3 ${isDark ? "text-white/70" : "text-gray-600"}`} style={{ fontFamily: "Poppins, sans-serif" }}>
              Post-launch usability test with 6 new participants: 100% task completion on "find the right care and start an enquiry."
            </p>
            <p
              className={`text-sm italic ${isDark ? "text-white/40" : "text-gray-400"}`}
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              "I've looked at five of these sites today. This is the only one that didn't make me feel like a number."
              <span className={`block text-[11px] mt-1 not-italic ${isDark ? "text-white/25" : "text-gray-300"}`}>
                - Post-launch usability test participant
              </span>
            </p>
          </div>
        </FadeSection>

        <div className={divider} />

        {/* REFLECTION */}
        <FadeSection>
          <SectionLabel text="Reflection" />
          <SectionHeading isDark={isDark}>What staying accountable actually looks like.</SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* What worked */}
            <Card isDark={isDark}>
              <CardLabel text="What worked" />
              <BulletList isDark={isDark} items={[
                "Starting with clear user goals rather than features",
                "Designing for trust and emotional reassurance",
                "Structuring content to reduce healthcare jargon",
              ]} />
            </Card>

            {/* What I'd do differently */}
            <Card isDark={isDark}>
              <CardLabel text="What I'd do differently" />
              <BulletList isDark={isDark} items={[
                "Conduct usability testing with real families searching for care",
                "Validate messaging earlier with caregiver stakeholders",
                "Explore accessibility testing with older users",
              ]} />
            </Card>

            {/* What I learned */}
            <Card isDark={isDark}>
              <CardLabel text="What I learned" />
              <p className={`text-sm leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                Designing for healthcare requires balancing clarity, empathy, and trust.
                When users are making decisions about loved ones, the experience must feel supportive and human, not transactional.
              </p>
            </Card>
          </div>
        </FadeSection>

        {/* NEXT PROJECT */}
        <FadeSection>
          <div className={`pt-4 border-t ${isDark ? "border-white/8" : "border-gray-100"}`}>
            <p
              className={`text-[10px] font-bold tracking-widest uppercase mb-6 ${isDark ? "text-white/28" : "text-gray-300"}`}
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Next Project
            </p>
            <SharedProjectCard project={nextProject} index={0} isDark={isDark} animate={false} />
          </div>
        </FadeSection>

      </div>
    </div>
  );
}