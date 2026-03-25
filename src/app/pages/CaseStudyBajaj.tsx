import { useEffect, useRef } from "react";
import React from "react";
import { motion, useInView } from "motion/react";
import { ExternalLink } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { SharedProjectCard } from "../components/SharedProjectCard";
import { projects } from "../data/projects";
import orgBrief from "figma:asset/9c3cfbb556086998c1ac741ac060e1e886aa28c1.png";
import doctorChatImg from "figma:asset/db7671b44f40199062ba2a6353e14e24d3af54fc.png";
import bajajCover from "@/assets/bajaj-health-cover.webp";
import bajajVideoConsult from "@/assets/bajaj-video-consult.webp";
import bajajSpinWheel from "@/assets/bajaj-spin-wheel.webp";
import bajajPrelogin from "@/assets/bajaj-prelogin.webp";
import bajajDoctorChat from "@/assets/bajaj-doctor-chat.webp";

const ACCENT = "#8b6b4f";
const BEHANCE_URL = "https://www.behance.net/gallery/172611911/Industry-Project-Feature-Implementation-and-Redesign";

// ─── Helpers ──────────────────────────────────────────────────────────────────

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

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-5 h-px" style={{ background: ACCENT }} />
      <span className="text-[11px] font-medium tracking-[0.18em] uppercase" style={{ color: ACCENT, fontFamily: "Inter, sans-serif" }}>
        {text}
      </span>
    </div>
  );
}

function SectionHeading({ children, isDark }: { children: React.ReactNode; isDark: boolean }) {
  return (
    <h2
      className={`text-[1.9rem] md:text-[2.5rem] font-semibold leading-[1.12] tracking-[-0.03em] mb-6 ${isDark ? "text-white" : "text-[#171717]"}`}
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {children}
    </h2>
  );
}

function Card({ isDark, children, className = "" }: { isDark: boolean; children: React.ReactNode; className?: string }) {
  return (
    <div className={`p-5 rounded-2xl border ${isDark ? "border-white/8 bg-white/[0.03]" : "border-black/8 bg-white/55"} ${className}`}>
      {children}
    </div>
  );
}

function CardLabel({ text, color = ACCENT }: { text: string; color?: string }) {
  return (
    <p className="text-[11px] font-medium tracking-[0.18em] uppercase mb-3" style={{ color, fontFamily: "Inter, sans-serif" }}>
      {text}
    </p>
  );
}

function Bullet({ items, isDark }: { items: string[]; isDark: boolean }) {
  const body = isDark ? "text-white/55" : "text-[#171717]/62";
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className={`flex gap-2.5 items-start text-sm ${body}`}>
          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[7px]" style={{ background: ACCENT }} />
          {item}
        </li>
      ))}
    </ul>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const nextProject = projects[0]; // Loop back to NHL

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CaseStudyBajaj() {
  const { isDark } = useTheme();
  const paperTexture = isDark
    ? "repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 4px), repeating-linear-gradient(90deg, rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 5px)"
    : "repeating-linear-gradient(0deg, rgba(92,67,44,0.028) 0px, rgba(92,67,44,0.028) 1px, transparent 1px, transparent 4px), repeating-linear-gradient(90deg, rgba(92,67,44,0.02) 0px, rgba(92,67,44,0.02) 1px, transparent 1px, transparent 5px)";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const body = isDark ? "text-white/55" : "text-[#171717]/62";
  const divider = `w-full h-px ${isDark ? "bg-white/6" : "bg-black/8"}`;

  return (
    <div className={`relative min-h-screen overflow-hidden ${isDark ? "bg-[#111111]" : "bg-[#f6f0e8]"}`}>
      <div aria-hidden="true" className="-z-10 pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-multiply dark:mix-blend-screen" style={{ backgroundImage: paperTexture }} />
      <div aria-hidden="true" className={`-z-10 pointer-events-none absolute inset-0 ${isDark ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_22%,transparent_78%,rgba(255,255,255,0.015))]" : "bg-[linear-gradient(180deg,rgba(255,255,255,0.24),transparent_18%,transparent_82%,rgba(125,94,65,0.04))]"}`} />

      {/* ── HERO ── */}
      <section className="relative z-10 pt-32 md:pt-36 pb-0 px-6">
        <div className="max-w-[860px] mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {["Healthcare", "Mobile App (iOS & Android)", "Feature Design", "Interaction Design"].map((tag) => (
              <span key={tag} className={`px-3 py-1 rounded-full text-xs font-medium border ${isDark ? "border-white/10 text-white/45" : "border-black/10 text-[#171717]/42"}`}>
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`text-[2.4rem] sm:text-[3rem] md:text-[3.8rem] font-semibold leading-[0.98] tracking-[-0.045em] mb-5 ${isDark ? "text-white" : "text-[#171717]"}`}
            style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.08", letterSpacing: "-0.04em" }}
          >
            Bajaj Finserv Health
            <br />
            <span className={`text-[1.5rem] sm:text-[2rem] md:text-[2.4rem] block pb-1 ${isDark ? "text-white/78" : "text-[#171717]/72"} font-editorial italic tracking-[-0.01em]`}>
              Feature Design & Redesign
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className={`max-w-[38rem] text-base mb-10 ${body}`}
            style={{ lineHeight: "1.7", fontFamily: "Inter, sans-serif" }}
          >
            One of India's most ambitious digital health platforms — backed by Bajaj Finserv, connecting patients with doctors, health plans, diagnostics, and pharmacy in a single app. I was brought in to design two new features and redesign two core flows for an app already serving hundreds of thousands of users.
          </motion.p>

          {/* Meta strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className={`grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 rounded-2xl border overflow-hidden mb-10 ${isDark ? "border-white/8 divide-white/8" : "border-black/8 divide-black/8"}`}
          >
            {[
              { label: "My Role", value: "UX / UI Designer" },
              { label: "Year", value: "2020" },
              { label: "Platform", value: "iOS & Android" },
              { label: "App Scale", value: "88k+ Doctors · 500k+ Downloads" },
            ].map((m) => (
              <div key={m.label} className={`px-5 py-4 ${isDark ? "bg-white/[0.025]" : "bg-white/45"}`}>
                <p className={`text-[11px] font-medium tracking-[0.18em] uppercase mb-1 ${isDark ? "text-white/28" : "text-[#171717]/34"}`}>{m.label}</p>
                <p className={`text-sm font-semibold ${isDark ? "text-white/75" : "text-[#171717]/78"}`}>{m.value}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[1080px] mx-auto"
        >
          <div className="rounded-2xl md:rounded-3xl overflow-hidden">
            <img
              src={bajajCover}
              alt="Bajaj Finserv Health — app screens showcasing e-consultations and doctor chat"
              className="w-full block"
            />
          </div>
        </motion.div>
      </section>

      {/* ── BODY ── */}
      <div className="relative z-10 max-w-[860px] mx-auto px-6 mt-10 md:mt-14 space-y-10 md:space-y-12 pb-24">

        {/* 01 · ABOUT THE PRODUCT */}
        <FadeSection>
          <SectionLabel text="01: About the Product" />
          <SectionHeading isDark={isDark}>Healthcare at scale, built for India.</SectionHeading>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
            <div>
              <p className={`text-base mb-5 ${body}`} style={{ lineHeight: "1.8" }}>
                Bajaj Finserv Health is the digital health arm of Bajaj Finserv — a financial conglomerate better known for insurance and lending. In 2020, they entered healthcare with a bold ambition: build an all-in-one platform that made quality care accessible and affordable across India.
              </p>
              <p className={`text-base ${body}`} style={{ lineHeight: "1.8" }}>
                The product was live and growing fast. The challenge wasn't building from zero — it was making a complex, multi-surface healthcare app feel intuitive for users who ranged from urban professionals booking video calls to first-time smartphone users in tier-2 cities.
              </p>
            </div>
            <div className="space-y-3">
              <Card isDark={isDark}>
                <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: ACCENT }}>What made it complex</p>
                <Bullet isDark={isDark} items={[
                  "Multiple verticals in one app: consultations, plans, pharmacy, diagnostics",
                  "Healthcare-grade UX requirements — trust, clarity, and zero ambiguity",
                  "Serving users across wide literacy levels and device types",
                  "Working within an established design system and brand guidelines",
                  "Regulatory constraints on medical advice copy and UI framing",
                ]} />
              </Card>
            </div>
          </div>

          {/* Stats strip */}
          <div className={`grid grid-cols-3 divide-x rounded-2xl border overflow-hidden ${isDark ? "border-white/8 divide-white/8" : "border-black/8 divide-black/8"}`}>
            {[
              { value: "4.4★", label: "App store rating" },
              { value: "88k+", label: "Doctors on platform" },
              { value: "500k+", label: "Downloads at the time" },
            ].map((s) => (
              <div key={s.label} className={`px-5 py-6 text-center ${isDark ? "bg-white/[0.025]" : "bg-white/50"}`}>
                <p className="text-2xl font-bold mb-1" style={{ color: ACCENT, fontFamily: "Inter, sans-serif" }}>{s.value}</p>
                <p className={`text-xs ${isDark ? "text-white/35" : "text-[#171717]/34"}`}>{s.label}</p>
              </div>
            ))}
          </div>
        </FadeSection>

        <div className={divider} />

        {/* 02 · MY ENGAGEMENT */}
        <FadeSection>
          <SectionLabel text="02: My Engagement" />
          <SectionHeading isDark={isDark}>Four deliverables. Two new. Two rebuilt.</SectionHeading>

          <p className={`text-base mb-6 max-w-2xl ${body}`} style={{ lineHeight: "1.8" }}>
            I joined as a UX/UI designer with a defined scope: design two brand-new features that the product roadmap needed, and redesign two existing flows that were underperforming. The work was done in Adobe XD in 2020, as part of a collaborative product and engineering team.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { type: "NEW FEATURE", label: "01", title: "Instant Video Consultation", color: ACCENT },
              { type: "NEW FEATURE", label: "02", title: "Spin the Wheel", color: "#6f563f" },
              { type: "REDESIGN", label: "01", title: "Pre-login Journey", color: "#b3987d" },
              { type: "REDESIGN", label: "02", title: "Doctor Chat", color: ACCENT },
            ].map((d, i) => (
              <div
                key={i}
                className={`flex items-center gap-4 p-4 rounded-2xl border ${isDark ? "border-white/8 bg-white/[0.02]" : "border-black/8 bg-white/50"}`}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-sm font-bold"
                  style={{ background: `${d.color}18`, color: d.color }}
                >
                  {d.label}
                </div>
                <div>
                  <p className="text-[11px] font-medium tracking-[0.18em] uppercase mb-0.5" style={{ color: d.color, fontFamily: "Inter, sans-serif" }}>
                    {d.type}
                  </p>
                  <p className={`text-sm font-semibold ${isDark ? "text-white/80" : "text-[#171717]"}`} style={{ fontFamily: "Inter, sans-serif" }}>
                    {d.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeSection>

        <div className={divider} />

        {/* 03 · NEW FEATURES */}
        <FadeSection>
          <SectionLabel text="03: New Features Designed" />
          <SectionHeading isDark={isDark}>Built from a blank canvas.</SectionHeading>

          <div className="space-y-8">

            {/* ── Feature 01 ── */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="inline-block text-[11px] font-medium tracking-[0.18em] uppercase px-3 py-1 rounded-full"
                  style={{ background: `${ACCENT}18`, color: ACCENT }}
                >
                  Feature 01
                </span>
                <h3 className={`text-lg font-semibold tracking-[-0.02em] ${isDark ? "text-white" : "text-[#171717]"}`} style={{ fontFamily: "Inter, sans-serif" }}>
                  Instant Video Consultation
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card isDark={isDark}>
                  <CardLabel text="What it is" />
                  <p className={`text-sm ${body}`} style={{ lineHeight: "1.8" }}>
                    A zero-wait video consultation that connects a patient directly to an available doctor the moment they initiate — no scheduled appointment, no waiting room queue.
                  </p>
                </Card>
                <Card isDark={isDark}>
                  <CardLabel text="Why it was needed" />
                  <p className={`text-sm ${body}`} style={{ lineHeight: "1.8" }}>
                    Patients with urgent queries — a sudden symptom, a dosage question, a child's fever — couldn't wait 48 hours for an appointment. This feature gave them immediate access for non-emergency situations that still needed a medical opinion.
                  </p>
                </Card>
                <Card isDark={isDark}>
                  <CardLabel text="Key design decisions" />
                  <Bullet isDark={isDark} items={[
                    "Removed the appointment calendar entirely — immediacy was the entire value proposition",
                    "Designed explicit failure states for when no doctor was available",
                    "Three screens: initiating → in-call → post-call summary with prescription download",
                    "Trust signals before the call: doctor name, specialty, and rating visible before connecting",
                  ]} />
                </Card>
              </div>

              <div className={`mt-5 rounded-2xl overflow-hidden border ${isDark ? "border-white/8" : "border-black/8"}`}>
                <img
                  src={bajajVideoConsult}
                  alt="Instant Video Consultation — home, specialist selection, consultation details, finding doctor"
                  className="w-full block"
                />
              </div>
            </div>

            <div className={`w-full h-px ${isDark ? "bg-white/6" : "bg-black/8"}`} />

            {/* ── Feature 02 ── */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="inline-block text-[11px] font-medium tracking-[0.18em] uppercase px-3 py-1 rounded-full"
                  style={{ background: "#6f563f18", color: "#6f563f" }}
                >
                  Feature 02
                </span>
                <h3 className={`text-lg font-semibold tracking-[-0.02em] ${isDark ? "text-white" : "text-[#171717]"}`} style={{ fontFamily: "Inter, sans-serif" }}>
                  Spin the Wheel
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card isDark={isDark}>
                  <CardLabel text="What it is" color={ACCENT} />
                  <p className={`text-sm ${body}`} style={{ lineHeight: "1.8" }}>
                    A one-time gamification feature that rewards users with free healthcare plans and health products — activated by spinning a wheel inside the app during their first few sessions.
                  </p>
                </Card>
                <Card isDark={isDark}>
                  <CardLabel text="Why it was needed" color={ACCENT} />
                  <p className={`text-sm ${body}`} style={{ lineHeight: "1.8" }}>
                    Bajaj Finserv Health's insurance and health plans were complex and unfamiliar. Users would open the app, encounter subscription products they didn't understand, and leave. The spin mechanic drove product discovery and gave users a low-friction reason to explore what they'd won.
                  </p>
                </Card>
                <Card isDark={isDark}>
                  <CardLabel text="Key design decisions" color={ACCENT} />
                  <Bullet isDark={isDark} items={[
                    "One-time mechanic only — no repeating loops that would feel predatory in a healthcare context",
                    "The reward reveal was the beginning of a conversion flow, not the end",
                    "Designed the win → reward revealed → plan activated path as a single uninterrupted journey",
                    "Placed in early-session discovery, surfaced when it would have most impact",
                  ]} />
                </Card>
              </div>

              <div className={`mt-5 rounded-2xl overflow-hidden border ${isDark ? "border-white/8" : "border-black/8"}`}>
                <img
                  src={bajajSpinWheel}
                  alt="Spin the Wheel — wheel, winner reveal, form, and thank you screens"
                  className="w-full block"
                />
              </div>
            </div>

          </div>
        </FadeSection>

        <div className={divider} />

        {/* 04 · REDESIGNS */}
        <FadeSection>
          <SectionLabel text="04: Flows Redesigned" />
          <SectionHeading isDark={isDark}>Broken things, made better.</SectionHeading>

          <div className="space-y-8 mb-10">

            {/* ── Redesign 01 ── */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                  style={{ background: `${ACCENT}18`, color: ACCENT }}
                >
                  Redesign 01
                </span>
                <h3 className={`text-lg font-semibold tracking-[-0.02em] ${isDark ? "text-white" : "text-[#171717]"}`} style={{ fontFamily: "Inter, sans-serif" }}>
                  Pre-login Journey
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card isDark={isDark}>
                  <CardLabel text="The problem" color={ACCENT} />
                  <p className={`text-sm ${body}`} style={{ lineHeight: "1.8" }}>
                    Users reached the pre-login screens having no idea what the app did. Generic stock illustrations didn't tell the product story, and a wall of text that nobody read meant users signed up with zero context, then quickly churned.
                  </p>
                </Card>
                <Card isDark={isDark}>
                  <CardLabel text="The approach" color={ACCENT} />
                  <p className={`text-sm ${body}`} style={{ lineHeight: "1.8" }}>
                    I rebuilt the pre-login flow around a feature-led carousel showing the app's four core value propositions using real UI screenshots instead of illustrations. By the time a user taps "Sign Up," they should already want what the app offers.
                  </p>
                </Card>
                <Card isDark={isDark}>
                  <CardLabel text="What changed" color={ACCENT} />
                  <Bullet isDark={isDark} items={[
                    "Replaced generic illustrations with real in-app UI screenshots",
                    "Reduced 6 onboarding screens to 4 focused feature-highlight slides",
                    "Added social proof: doctor count and app rating visible before sign-up",
                    "Redesigned CTA hierarchy — primary action was competing with secondary options",
                  ]} />
                </Card>
              </div>

              <div className={`mt-5 rounded-2xl overflow-hidden border ${isDark ? "border-white/8" : "border-black/8"}`}>
                <img
                  src={bajajPrelogin}
                  alt="Pre-login Journey redesign — feature-led onboarding carousel screens"
                  className="w-full block"
                />
              </div>
            </div>

            <div className={`w-full h-px ${isDark ? "bg-white/6" : "bg-gray-100"}`} />

            {/* ── Redesign 02 ── */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                  style={{ background: `${ACCENT}18`, color: ACCENT }}
                >
                  Redesign 02
                </span>
                <h3 className={`text-lg font-semibold tracking-[-0.02em] ${isDark ? "text-white" : "text-[#171717]"}`} style={{ fontFamily: "Inter, sans-serif" }}>
                  Doctor Chat
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card isDark={isDark}>
                  <CardLabel text="The problem" />
                  <p className={`text-sm ${body}`} style={{ lineHeight: "1.8" }}>
                    The original chat was a bare messaging interface — no document uploads, no contextual quick-replies, and no clear end state when a consultation closed. The post-consultation experience was a complete dead end.
                  </p>
                </Card>
                <Card isDark={isDark}>
                  <CardLabel text="The approach" />
                  <p className={`text-sm ${body}`} style={{ lineHeight: "1.8" }}>
                    I designed three distinct states — pre-consultation, in-consultation, and post-consultation — each with the right tools visible at that moment. The post-consultation state received the most attention: it was where the app was losing users it had already earned.
                  </p>
                </Card>
                <Card isDark={isDark}>
                  <CardLabel text="What was added" />
                  <Bullet isDark={isDark} items={[
                    "Document attachment support — reports, prescriptions, and images in-chat",
                    "Contextual quick-reply chips for common follow-up responses",
                    "\"Book Follow-up\" floating CTA in the post-consultation state",
                    "Case-closed state with summary, prescription download, and next steps",
                    "Typing indicators and read receipts — doctor is engaged",
                  ]} />
                </Card>
              </div>
            </div>

          </div>

          {/* Doctor Chat screens */}
          <div className={`rounded-2xl overflow-hidden border ${isDark ? "border-white/8" : "border-black/8"}`}>
            <img
              src={bajajDoctorChat}
              alt="Doctor Chat redesign — chat states and video call screens"
              className="w-full block"
            />
          </div>
        </FadeSection>

        <div className={divider} />

        {/* 05 · DESIGN CONSTRAINTS */}
        <FadeSection>
          <SectionLabel text="05: Design Constraints" />
          <SectionHeading isDark={isDark}>Working within real limits.</SectionHeading>
          <p className={`text-base mb-6 max-w-2xl ${body}`} style={{ lineHeight: "1.8" }}>
            Good design doesn't happen in a vacuum. These were the constraints I was designing within — and navigating them was a big part of the actual work.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                label: "Healthcare Regulations",
                body: "UI copy had to be carefully worded — no phrasing that could be interpreted as medical advice. Every label, button, and empty state went through a medical communication lens.",
              },
              {
                label: "Existing Design System",
                body: "I was working within Bajaj Finserv Health's established brand and component system. Novel solutions had to be built on top of existing patterns, not replace them.",
              },
              {
                label: "India-Specific UX",
                body: "Users spanned tier-1 to tier-3 cities, varying literacy levels, and different device capabilities. Clarity and accessibility weren't optional.",
              },
              {
                label: "Tooling — Adobe XD (2020)",
                body: "This predates Figma's dominance. Adobe XD had limited component tooling and no equivalent to Figma's auto-layout — constraints that shaped how assets were structured.",
              },
              {
                label: "Agile Speed in Enterprise",
                body: "Bajaj Finserv is a large corporate, but the product team moved fast. Designs had to be review-ready quickly, with minimal back-and-forth.",
              },
              {
                label: "Multi-Vertical Coherence",
                body: "Consultations, plans, diagnostics, and pharmacy — four very different user jobs in one app. New features had to feel native to the existing experience.",
              },
            ].map((c, i) => (
              <Card key={i} isDark={isDark}>
                <p className="text-xs font-bold tracking-widest uppercase mb-2.5" style={{ color: ACCENT }}>{c.label}</p>
                <p className={`text-sm ${body}`} style={{ lineHeight: "1.8" }}>{c.body}</p>
              </Card>
            ))}
          </div>
        </FadeSection>

        <div className={divider} />

        {/* 06 · SCREENS — Behance redirect */}
        <FadeSection>
          <SectionLabel text="06: Full Designs" />
          <SectionHeading isDark={isDark}>The screens live on Behance.</SectionHeading>

          <div className={`rounded-2xl border p-5 mb-6 ${isDark ? "border-white/8 bg-white/[0.03]" : "border-black/8 bg-white/55"}`}>
            <p className="text-xs font-medium tracking-[0.18em] uppercase mb-2" style={{ color: ACCENT, fontFamily: "Inter, sans-serif" }}>A note on screens</p>
            <p className={`text-sm ${isDark ? "text-white/65" : "text-[#171717]/62"}`} style={{ lineHeight: "1.8", fontFamily: "Inter, sans-serif" }}>
              This project was designed in <strong>Adobe XD in 2020</strong>. Adobe discontinued XD and the original source files can no longer be opened to extract screens or assets. The complete set of designs — all four deliverables, full screen flows, and interaction annotations — is preserved and documented on my Behance.
            </p>
          </div>

          {/* Behance CTA card */}
          <div className={`relative rounded-2xl overflow-hidden border ${isDark ? "border-white/10" : "border-black/8"}`}>
            {/* Background texture */}
            <div
              className="absolute inset-0"
              style={{
                background: isDark
                  ? "linear-gradient(135deg, #161311 0%, #0f0f0f 60%, #15120f 100%)"
                  : "linear-gradient(135deg, #fbf7f1 0%, #ffffff 58%, #f1e7da 100%)",
              }}
            />
            {/* Warm glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 20% 50%, rgba(139,107,79,0.10) 0%, transparent 60%)",
              }}
            />

            <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Left: copy */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                  <div className="w-5 h-px" style={{ background: ACCENT }} />
                  <span className="text-xs font-medium tracking-[0.18em] uppercase" style={{ color: ACCENT, fontFamily: "Inter, sans-serif" }}>Behance Case Study</span>
                </div>
                <h3
                  className={`text-2xl md:text-3xl font-semibold tracking-[-0.03em] mb-3 ${isDark ? "text-white" : "text-[#171717]"}`}
                  style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.2" }}
                >
                  View the full case study with all screens
                </h3>
                <p className={`text-sm mb-6 ${isDark ? "text-white/55" : "text-[#171717]/58"}`} style={{ fontFamily: "Inter, sans-serif" }}>
                  All four deliverables are documented end-to-end on Behance — screen flows, interaction notes, before/after comparisons, and the complete design thinking behind each decision.
                </p>
                <a
                  href={BEHANCE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[0.985] ${isDark ? "bg-white text-[#111111]" : "bg-[#171717] text-white"}`}
                >
                  Open Behance Case Study
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* Right: decorative stat pills */}
              <div className="flex flex-col gap-3 flex-shrink-0">
                {[
                  { value: "4", label: "Deliverables" },
                  { value: "2020", label: "Adobe XD" },
                  { value: "Live", label: "Shipped to production" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${isDark ? "border-white/8 bg-white/[0.03]" : "border-black/8 bg-white/70"}`}
                  >
                    <span className="text-lg font-semibold" style={{ color: ACCENT, fontFamily: "Inter, sans-serif" }}>
                      {s.value}
                    </span>
                    <span className={`text-xs font-medium ${isDark ? "text-white/45" : "text-[#171717]/52"}`} style={{ fontFamily: "Inter, sans-serif" }}>
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeSection>

        <div className={divider} />

        {/* 07 · WHAT I LEARNED */}
        <FadeSection>
          <SectionLabel text="07: Reflections" />
          <SectionHeading isDark={isDark}>What this project taught me.</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                label: "Healthcare UX is different",
                body: "Every copy decision, every empty state, every loading indicator carries more weight when someone is using the product because they're worried about their health. Designing for emotional states — urgency, anxiety, relief — was the real work.",
              },
              {
                label: "Constraints are the design",
                body: "Working within an existing system, a regulated domain, and a limited toolset forced precision. I couldn't rethink the entire design language — I had to solve specific problems exceptionally well within defined boundaries.",
              },
              {
                label: "Post-conversion UX is undervalued",
                body: "The Doctor Chat redesign taught me that the moment after a user takes an action is where most products give up. The post-consultation state — getting users to book a follow-up — was worth more than the entire pre-consultation flow.",
              },
            ].map((r, i) => (
              <Card key={i} isDark={isDark}>
                <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: ACCENT }}>{r.label}</p>
                <p className={`text-sm ${body}`} style={{ lineHeight: "1.8" }}>{r.body}</p>
              </Card>
            ))}
          </div>
        </FadeSection>

        {/* ── NEXT PROJECT ── */}
        <FadeSection>
          <div className="pt-4">
            <p className={`text-xs font-medium tracking-[0.18em] uppercase mb-6 ${isDark ? "text-white/28" : "text-[#171717]/28"}`} style={{ fontFamily: "Inter, sans-serif" }}>
              Next Project
            </p>
            <SharedProjectCard project={nextProject} index={0} isDark={isDark} animate={false} />
          </div>
        </FadeSection>
      </div>
    </div>
  );
}
