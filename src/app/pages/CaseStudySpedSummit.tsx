import { useEffect, useRef } from "react";
import React from "react";
import { motion, useInView } from "motion/react";
import { Lock } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { SharedProjectCard } from "../components/SharedProjectCard";
import { projects } from "../data/projects";
import spedSummitCover from "@/assets/sped-summit-cover.webp";

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
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8699A] flex-shrink-0 mt-[10px]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const nextProject = projects[3]; // Source Digital

export default function CaseStudySpedSummit() {
  const { isDark } = useTheme();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const body = isDark ? "text-white/52" : "text-gray-500";
  const divider = `w-full h-px ${isDark ? "bg-white/6" : "bg-gray-100"}`;

  const meta = [
    { label: "My Role", value: "UX/UI Designer" },
    { label: "Timeline", value: "2025 · MapleCode" },
    { label: "Tools", value: "Figma · Figma Make · Claude Code" },
    { label: "Type", value: "Landing Page · Web Design" },
  ];

  const audience = [
    "Special education teachers",
    "Speech-language pathologists",
    "Occupational therapists",
    "Physical therapists",
    "ABA professionals",
    "School-based service providers",
    "SPED leaders & consultants",
  ];

  const insights = [
    {
      title: "They're scanning, not reading",
      body: "Special educators juggle documentation, instruction, and parent meetings outside class time. The page had to deliver value in seconds, not paragraphs.",
    },
    {
      title: "Three questions decide everything",
      body: "Is this relevant to me? Is it credible? Is it worth my time? Every section had to answer one of these — and answer it fast.",
    },
    {
      title: "Free isn't enough on its own",
      body: "Replays, PD certificates, giveaways, and bonus resources all needed to be visible. Free gets attention; tangible take-aways earn the registration.",
    },
  ];

  const features = [
    {
      label: "Clear Hero Messaging",
      body: "The hero opens with what the event is and why it matters in one breath — a free conference for special education professionals — so visitors don't have to hunt for the value.",
    },
    {
      label: "Event Detail Cards",
      body: "Start date, session count, virtual format, replay availability, and free access — surfaced as scannable cards near the top so logistics never get in the way of the decision.",
    },
    {
      label: "Speaker Profiles",
      body: "Detailed bios with professional roles establish credibility. The audience trusts other practitioners — speakers carry the page's authority.",
    },
    {
      label: "Session Cards",
      body: "Each session shows the speaker, role, title, description, and date in a consistent card. The same shape, repeated — letting visitors scan instead of parse.",
    },
    {
      label: "FAQ Section",
      body: "Practical answers to the questions that block sign-up: virtual access, replays, PD certificates, who it's for, and how to register.",
    },
    {
      label: "Final Benefits Section",
      body: "Near the end, the page reinforces PD certificates, giveaways, and bonus resources — the last nudge for someone hovering on the sign-up button.",
    },
  ];

  const outcomes = [
    {
      headline: "Decision-First",
      label: "Information architecture organised around relevance, credibility, and worth-my-time — not feature lists.",
    },
    {
      headline: "Scannable",
      label: "Repeated card patterns and short copy let educators get the gist in under two minutes.",
    },
    {
      headline: "Credible",
      label: "Speaker bios, roles, and sponsor placement carry the trust load instead of marketing copy.",
    },
    {
      headline: "Persistent CTA",
      label: "The free sign-up surfaces in the hero, mid-page, and footer — visible at every scroll depth.",
    },
  ];

  const designPrinciples = [
    "Clear hierarchy",
    "Warm visual language",
    "Friendly illustrations",
    "Speaker-led credibility",
    "Scannable cards",
    "Repeated CTAs",
    "Section-based storytelling",
    "Mobile-friendly readability",
  ];

  const iaSteps = [
    "Hero & value proposition",
    "Giveaway hook",
    "Session overview",
    "Event details",
    "Sponsor section",
    "Speaker credibility",
    "Session schedule",
    "Registration section",
    "Replay & community info",
    "FAQ",
    "Final benefits",
  ];

  return (
    <div className={`min-h-screen ${isDark ? "bg-[#0a0a0f]" : "bg-white"}`}>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="pt-28 md:pt-36 pb-0 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Kicker */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="w-5 h-px bg-[#E8699A]" />
            <span
              className="text-xs font-bold tracking-[0.2em] uppercase text-[#E8699A]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              MapleCode Innovations · Featured Project
            </span>
          </motion.div>

          {/* Chips */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {["Education · Special Education", "Landing Page", "Visual System", "Content Strategy"].map((tag) => (
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
            A Free Special Education Summit,<br />Designed To Be Decided On In Minutes
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className={`max-w-2xl text-base leading-relaxed mb-5 ${body}`}
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Another MapleCode project — I designed the SPED Summit landing page as a decision journey for time-pressed special education professionals. Relevance first, then credibility, then a frictionless free sign-up.
          </motion.p>

          {/* MapleCode engagement note */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
            className={`max-w-2xl text-sm leading-relaxed mb-10 ${isDark ? "text-white/40" : "text-gray-400"}`}
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            MapleCode engagement · Embedded design partner · 04/2024 – Present. Most work under
            MapleCode is covered by NDA; this is one of the projects I've been cleared to share.
          </motion.p>

          {/* Meta strip */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.26 }}
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

        {/* Cover */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-6xl mx-auto"
        >
          <div className="rounded-2xl md:rounded-3xl overflow-hidden aspect-[16/8]">
            <img
              src={spedSummitCover}
              alt="SPED Summit — virtual conference landing page"
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
              <SectionHeading isDark={isDark}>A free conference. A page that had to earn 90 seconds of attention.</SectionHeading>
              <p className={`text-base leading-relaxed mb-4 ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                SPED Summit is a free virtual conference for special education professionals — teachers, SLPs, OTs, PTs, ABA professionals, and school-based service providers. The work itself is genuinely useful. Getting the right people to register was the design problem.
              </p>
              <p className={`text-base leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                The challenge was communicating a large amount of event information — speakers, sessions, logistics, replays, certificates — without overwhelming an audience that's already stretched thin on time and attention.
              </p>
            </div>
            <div className="lg:col-span-2">
              <Card isDark={isDark}>
                <CardLabel text="My Scope" />
                <p className={`text-sm leading-relaxed mb-3 ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  I owned the landing page end to end — from research and structure through visual system and final responsive build.
                </p>
                <p className={`text-sm font-semibold mb-2 ${isDark ? "text-white/65" : "text-gray-600"}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  Deliverables included:
                </p>
                <p className={`text-sm leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  -Landing page design<br />
                  -Visual system<br />
                  -Content structure<br />
                  -Speaker & session layouts<br />
                  -Responsive design<br />
                  -Conversion-focused IA
                </p>
              </Card>
            </div>
          </div>

          {/* Audience */}
          <div className="mt-8">
            <CardLabel text="Audience" />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {audience.map((person, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-xl border text-center ${
                    isDark ? "border-white/8 bg-white/[0.02]" : "border-gray-100 bg-gray-50/40"
                  }`}
                >
                  <p className={`text-xs leading-snug ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                    {person}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeSection>

        <div className={divider} />

        {/* RESEARCH */}
        <FadeSection>
          <SectionLabel text="Research Insight" />
          <SectionHeading isDark={isDark}>Designing for people who don't have time to be designed for.</SectionHeading>
          <p className={`text-base leading-relaxed mb-5 max-w-2xl ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
            Special education professionals work in a demanding environment. The Bureau of Labor Statistics notes that SPED teachers regularly update student records, prepare lessons, and meet with parents, students, teachers, and specialists outside instructional time.
          </p>
          <p className={`text-base leading-relaxed mb-6 max-w-2xl ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
            That reality shaped the entire design direction: the experience had to be fast to scan, easy to understand, and clearly valuable — or it would lose the audience before the value could land.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {/* Strategy questions card */}
            <Card isDark={isDark} className="flex flex-col justify-between">
              <div className="space-y-3" style={{ fontFamily: "Poppins, sans-serif" }}>
                <CardLabel text="Three Questions That Drove The Page" />
                <div className={`text-sm ${isDark ? "text-white/55" : "text-gray-500"}`}>
                  <div className="flex gap-2.5 items-start mb-3">
                    <span style={{ color: "#E8699A", fontWeight: 700 }} className="flex-shrink-0">1.</span>
                    <span><strong className={isDark ? "text-white/80" : "text-gray-800"}>Is this relevant to me?</strong> — answered through audience-specific language and session topics.</span>
                  </div>
                  <div className="flex gap-2.5 items-start mb-3">
                    <span style={{ color: "#E8699A", fontWeight: 700 }} className="flex-shrink-0">2.</span>
                    <span><strong className={isDark ? "text-white/80" : "text-gray-800"}>Is this credible?</strong> — answered through speaker bios, professional roles, and sponsor proof.</span>
                  </div>
                  <div className="flex gap-2.5 items-start">
                    <span style={{ color: "#E8699A", fontWeight: 700 }} className="flex-shrink-0">3.</span>
                    <span><strong className={isDark ? "text-white/80" : "text-gray-800"}>Is this worth my time?</strong> — answered with replays, PD certificates, giveaways, and concrete session takeaways.</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Research findings card */}
            <Card isDark={isDark} className="flex flex-col justify-between">
              <div className="space-y-3" style={{ fontFamily: "Poppins, sans-serif" }}>
                <CardLabel text="What That Meant For The Page" />
                <BulletList isDark={isDark} items={[
                  "Lead with audience and value, not branding",
                  "Front-load logistics so they don't gate scrolling",
                  "Let speakers carry the credibility load",
                  "Repeat the free sign-up at every meaningful pause",
                  "Treat the FAQ as a conversion tool, not an afterthought",
                ]} />
              </div>
            </Card>
          </div>

          {/* Insight row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {insights.map((ins, i) => (
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
          <SectionLabel text="IA & Visual Design" />
          <SectionHeading isDark={isDark}>Structured the page as a decision journey.</SectionHeading>
          <p className={`text-base leading-relaxed mb-6 max-w-2xl ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
            Instead of organising the page around event content, I organised it around the visitor's decision flow — moving from awareness, to relevance, to credibility, to commitment, with the free sign-up surfaced at each step.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {/* IA flow card */}
            <Card isDark={isDark} className="flex flex-col">
              <CardLabel text="Page Structure" />
              <p className={`text-sm leading-relaxed mb-3 ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                The landing page flows through eleven sections, each answering a specific question on the way to sign-up.
              </p>
              <ol className="space-y-1.5" style={{ fontFamily: "Poppins, sans-serif" }}>
                {iaSteps.map((step, i) => (
                  <li key={i} className={`flex gap-3 items-baseline text-sm leading-5 ${isDark ? "text-white/55" : "text-gray-500"}`}>
                    <span
                      className="flex-shrink-0 text-[10px] font-bold tracking-widest"
                      style={{ color: "#E8699A", fontFamily: "Poppins, sans-serif", minWidth: "1.5rem", lineHeight: "20px" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </Card>

            {/* Visual direction card */}
            <Card isDark={isDark} className="flex flex-col justify-between">
              <div>
                <CardLabel text="Visual Direction" />
                <p className={`text-sm leading-relaxed mb-3 ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  The tone needed to feel educational and trustworthy — but also warm and community-oriented. Special educators are not corporate buyers; they're caregivers in a system that often forgets them.
                </p>
                <p className={`text-sm font-semibold mb-2 ${isDark ? "text-white/65" : "text-gray-600"}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  Design principles:
                </p>
                <BulletList isDark={isDark} items={designPrinciples} />
              </div>
              <div className={`mt-5 pt-4 border-t ${isDark ? "border-white/6" : "border-gray-100"}`}>
                <p className={`text-[10px] font-bold tracking-widest uppercase mb-1 ${isDark ? "text-white/25" : "text-gray-300"}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  Why this matters
                </p>
                <p className={`text-sm leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  A friendly, professional tone made the page approachable for an audience that's seen too many cold, jargon-heavy PD platforms.
                </p>
              </div>
            </Card>
          </div>
        </FadeSection>

        <div className={divider} />

        {/* KEY FEATURES */}
        <FadeSection>
          <SectionLabel text="Key Features" />
          <SectionHeading isDark={isDark}>The pieces that did the heavy lifting.</SectionHeading>
          <p className={`text-base leading-relaxed mb-6 max-w-2xl ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
            Six recurring patterns shaped the page. Each one was designed to either lower friction or raise trust — nothing existed without a job to do.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <Card key={i} isDark={isDark}>
                <div
                  className="inline-block text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-full mb-4"
                  style={{ background: "#E8699A18", color: "#E8699A", fontFamily: "Poppins, sans-serif" }}
                >
                  {f.label}
                </div>
                <p className={`text-sm leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  {f.body}
                </p>
              </Card>
            ))}
          </div>
        </FadeSection>

        <div className={divider} />

        {/* OUTCOMES */}
        <FadeSection>
          <SectionLabel text="Outcome" />
          <SectionHeading isDark={isDark}>A long event page, turned into a quick decision.</SectionHeading>
          <p className={`text-base leading-relaxed mb-6 max-w-2xl ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
            The final design organised the event into a structured flow, improved scannability, strengthened speaker credibility, and kept the free sign-up visible throughout the page.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {outcomes.map((o) => (
              <div
                key={o.headline}
                className={`p-5 rounded-2xl border ${isDark ? "border-white/8 bg-white/[0.025]" : "border-gray-100 bg-gray-50/60"}`}
              >
                <p
                  className="text-2xl font-bold mb-2"
                  style={{ fontFamily: "Playfair Display, serif", color: "#E8699A" }}
                >
                  {o.headline}
                </p>
                <p className={`text-[12px] leading-snug ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  {o.label}
                </p>
              </div>
            ))}
          </div>

          <div
            className={`p-6 rounded-2xl border-l-[3px] border-[#E8699A] ${isDark ? "bg-white/[0.025]" : "bg-rose-50/40"}`}
          >
            <p className={`text-sm leading-relaxed ${isDark ? "text-white/70" : "text-gray-600"}`} style={{ fontFamily: "Poppins, sans-serif" }}>
              The brief asked for a landing page. The output is closer to a guided tour — one that respects how little time the audience has, and uses every section to either build trust or remove a reason to bounce.
            </p>
          </div>
        </FadeSection>

        <div className={divider} />

        {/* REFLECTION */}
        <FadeSection>
          <SectionLabel text="Reflection" />
          <SectionHeading isDark={isDark}>What this project reinforced for me.</SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card isDark={isDark}>
              <CardLabel text="What worked" />
              <BulletList isDark={isDark} items={[
                "Structuring the page as a decision flow, not a content dump",
                "Letting speakers carry the credibility load",
                "Repeating the free sign-up at every meaningful pause",
              ]} />
            </Card>

            <Card isDark={isDark}>
              <CardLabel text="What I'd do differently" />
              <BulletList isDark={isDark} items={[
                "Run a quick test with practising educators before final IA",
                "Pressure-test session card density on small screens earlier",
                "Add a low-commitment \"save the date\" path for unsure visitors",
              ]} />
            </Card>

            <Card isDark={isDark}>
              <CardLabel text="What I learned" />
              <p className={`text-sm leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                When the audience is time-poor and value-seeking, content design is conversion design. Cutting words, ordering sections, and repeating CTAs did more for sign-up than any visual flourish could.
              </p>
            </Card>
          </div>
        </FadeSection>

        <div className={divider} />

        {/* MORE AT MAPLECODE */}
        <FadeSection>
          <div
            className={`flex items-start gap-4 px-5 py-5 rounded-2xl border ${
              isDark ? "border-white/8 bg-white/[0.025]" : "border-gray-100 bg-gray-50/70"
            }`}
          >
            <div className="flex-shrink-0 mt-0.5">
              <div className="w-8 h-8 rounded-full bg-[#E8699A]/10 flex items-center justify-center">
                <Lock size={14} className="text-[#E8699A]" />
              </div>
            </div>
            <div>
              <span
                className="block text-xs font-bold tracking-widest uppercase text-[#E8699A] mb-1.5"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                More at MapleCode · Under NDA
              </span>
              <p
                className={`text-sm leading-relaxed ${isDark ? "text-white/65" : "text-gray-600"}`}
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Alongside SPED Summit and 101 Healthcare, I've led design systems work, product UX, and brand &
                marketing collateral across several MapleCode engagements. Those are covered by
                NDA — I'm happy to walk through the work privately.{" "}
                <a
                  href="mailto:jagritisood30@gmail.com"
                  className="font-semibold text-[#E8699A] hover:underline"
                >
                  Request a private walkthrough →
                </a>
              </p>
            </div>
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
