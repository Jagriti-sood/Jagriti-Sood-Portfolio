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
        className="text-[10px] font-bold tracking-[0.2em] uppercase"
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
      className="text-[10px] font-bold tracking-widest uppercase mb-3"
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
      className={`text-center text-[11px] mt-3 ${isDark ? "text-white/22" : "text-gray-300"}`}
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
    { label: "Timeline", value: "9 Months · 2023" },
    { label: "Tools", value: "Figma · Hotjar · Maze · Webflow" },
    { label: "Type", value: "Zero-to-One · Web Design" },
  ];

  const outcomes = [
    { value: "3×", label: "Consultation bookings post-launch", color: "#E8699A" },
    { value: "40%", label: "Drop in inbound support calls", color: "#C2547C" },
    { value: "100%", label: "Task completion in usability testing", color: "#F4A0C0" },
    { value: "2", label: "Rounds of iteration after launch", color: "#E8699A" },
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
                className={`px-3 py-1 rounded-full text-[11px] font-medium border ${
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
            101 Healthcare Website
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
            presence. I designed and shipped their first website — then stayed on for months of
            post-launch iteration, tracking real behaviour and updating the design until the
            numbers moved.
          </motion.p>

          {/* Meta strip */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
            className={`grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 rounded-2xl border overflow-hidden mb-14 ${
              isDark ? "border-white/8 divide-white/8" : "border-gray-100 divide-gray-100"
            }`}
          >
            {meta.map((m) => (
              <div key={m.label} className={`px-5 py-4 ${isDark ? "bg-white/[0.025]" : "bg-gray-50/60"}`}>
                <p
                  className={`text-[10px] font-bold tracking-widest uppercase mb-1 ${isDark ? "text-white/28" : "text-gray-300"}`}
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {m.label}
                </p>
                <p
                  className={`text-xs font-semibold ${isDark ? "text-white/75" : "text-gray-700"}`}
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
              src="https://images.unsplash.com/photo-1642052502304-272cb5c31417?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwd2Vic2l0ZSUyMGRlc2lnbiUyMGxhcHRvcCUyMHNjcmVlbnxlbnwxfHx8fDE3NzI5MTIyNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="101 Healthcare — Final Website"
              className="w-full h-full object-cover"
            />
          </div>
          <ImageCaption text="Final website — designed in Figma, built in Webflow, iterated on for months post-launch" isDark={isDark} />
        </motion.div>
      </section>

      {/* ── BODY ─────────────────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 mt-20 md:mt-24 space-y-20 md:space-y-24 pb-28">

        {/* CONTEXT */}
        <FadeSection>
          <SectionLabel text="Context" />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
            <div className="lg:col-span-3">
              <SectionHeading isDark={isDark}>No website. Exceptional care. Nobody knew they existed.</SectionHeading>
              <p className={`text-sm leading-relaxed mb-4 ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                101 Healthcare had been operating on referrals alone for years — no website, no
                searchable presence, no way for a family to find them outside word of mouth. The
                work was genuinely good. The business was invisible.
              </p>
              <p className={`text-sm leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                I joined as the sole designer to build everything from scratch. What started
                as a design project became a nine-month engagement — initial research and
                design, close collaboration through the build, a full launch, and then
                continued iteration based on what real users actually did on the site.
              </p>
            </div>
            <div className="lg:col-span-2 space-y-3">
              <Card isDark={isDark}>
                <CardLabel text="My Scope" />
                <p className={`text-sm leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  User research · IA · Wireframing · Visual design · Design system · Dev
                  handoff & QA · Post-launch iteration
                </p>
              </Card>
              <Card isDark={isDark}>
                <CardLabel text="The Team" />
                <p className={`text-sm leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  Myself (designer) · Founder (stakeholder) · 1 Webflow developer ·
                  1 copywriter (early phases). I was the only designer throughout.
                </p>
              </Card>
            </div>
          </div>
        </FadeSection>

        <div className={divider} />

        {/* RESEARCH */}
        <FadeSection>
          <SectionLabel text="Research & Discovery" />
          <SectionHeading isDark={isDark}>I didn't open Figma until I understood the families.</SectionHeading>
          <p className={`text-sm leading-relaxed mb-8 max-w-2xl ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
            With no existing site to audit, I built the evidence base from user conversations,
            a card sort, competitor analysis, and review mining before any wireframe was drawn.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {/* image */}
            <div className="rounded-2xl overflow-hidden min-h-[240px] md:min-h-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1554103210-26d928978fb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVWCUyMHJlc2VhcmNoJTIwc3RpY2t5JTIwbm90ZXMlMjBhZmZpbml0eSUyMG1hcHxlbnwxfHx8fDE3NzI5MTIyNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Research & affinity mapping"
                className="w-full h-full object-cover"
                style={{ minHeight: "240px" }}
              />
            </div>
            {/* findings card — matches height via flex */}
            <Card isDark={isDark} className="flex flex-col justify-between">
              <CardLabel text="What Research Uncovered" />
              <BulletList isDark={isDark} items={[
                "Families search by situation ('help for mum after stroke'), not service name — navigation had to reflect this",
                "'Who's coming into my home?' was the first question in every interview. Caregiver trust was the real conversion lever",
                "7 of 8 participants had abandoned a competitor site because they couldn't understand what happened after submitting the contact form",
                "Clinical language triggered avoidance. Warm, plain language created immediate relief — tone was treated as a design decision from day one",
                "A card sort with 16 participants revealed 4 natural service groupings, which became the backbone of the site IA",
              ]} />
            </Card>
          </div>

          {/* Insight row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: "Families search by crisis",
                body: "Nobody types 'post-acute neurological home care'. They type 'help for dad after stroke'. The nav had to reflect the way people actually think when they're scared.",
              },
              {
                title: "The caregiver is the product",
                body: "Caregiver profiles weren't a nice-to-have. They were the primary trust mechanism — the thing that let a family feel safe handing a stranger a key to their parent's home.",
              },
              {
                title: "Ambiguity kills conversion",
                body: "Nobody knew what happened after they submitted a form. Spelling out the next steps explicitly — '3 steps. Here's what we do next' — became the centrepiece of the contact journey.",
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
                <p className={`text-xs leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
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
          <p className={`text-sm leading-relaxed mb-8 max-w-2xl ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
            The card sort data collapsed 12 internal service names into 4 recognisable care
            scenarios. I built the entire IA around situations, not org-chart logic. Every page
            was mapped to a four-stage care journey: Recognise → Understand → Trust → Act.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {/* Card matches image height */}
            <Card isDark={isDark} className="flex flex-col justify-between">
              <div>
                <CardLabel text="Design System Built From Scratch" />
                <BulletList isDark={isDark} items={[
                  "Warm neutral palette — approachable, not clinical",
                  "Caregiver profile card component — photo, name, specialisations, personal note",
                  "4 care scenario page templates — situation-first, service-second",
                  "2-step enquiry form with explicit 'what happens next' confirmation",
                  "Mobile-first across all 14 page templates",
                  "Figma component library with auto-layout, variants, and dev-ready annotations",
                ]} />
              </div>
              <div
                className={`mt-5 pt-4 border-t ${isDark ? "border-white/6" : "border-gray-100"}`}
              >
                <p className={`text-[10px] font-bold tracking-widest uppercase mb-1 ${isDark ? "text-white/25" : "text-gray-300"}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  Early decision I reversed
                </p>
                <p className={`text-xs leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  First concept used a care-finder quiz as the primary entry point. Prototype
                  testing killed it — families in crisis don't want to be assessed. The empathy-led
                  hero that replaced it lifted enquiry form completion by 38% in testing.
                </p>
              </div>
            </Card>
            {/* image */}
            <div className="rounded-2xl overflow-hidden min-h-[280px] md:min-h-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1653647054667-c99dc7f914ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVWCUyMGRlc2lnbmVyJTIwZmlnbWElMjBwcm90b3R5cGUlMjBzY3JlZW4lMjBkZXNpZ24lMjB3b3JrfGVufDF8fHx8MTc3MjY4NDc4NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Design system — final UI"
                className="w-full h-full object-cover"
                style={{ minHeight: "280px" }}
              />
            </div>
          </div>
          <ImageCaption text="Homepage design — situation-led hero, caregiver trust section, and frictionless enquiry path" isDark={isDark} />
        </FadeSection>

        <div className={divider} />

        {/* DEV COLLABORATION */}
        <FadeSection>
          <SectionLabel text="Working With the Developer" />
          <SectionHeading isDark={isDark}>I didn't hand off and disappear.</SectionHeading>
          <p className={`text-sm leading-relaxed mb-8 max-w-2xl ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
            I stayed embedded through the entire build. Weekly design-dev syncs, annotated Figma
            frames for every component, a shared Notion board for bug tracking — and same-day
            availability whenever the developer had a question.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* image */}
            <div className="rounded-2xl overflow-hidden min-h-[260px] md:min-h-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1763568258752-fe55f4ab7267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGRldmVsb3BlciUyMGNvbGxhYm9yYXRpb24lMjB3b3JraW5nJTIwdG9nZXRoZXIlMjBzY3JlZW58ZW58MXx8fHwxNzcyOTEyMjU0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Designer-developer collaboration"
                className="w-full h-full object-cover"
                style={{ minHeight: "260px" }}
              />
            </div>
            {/* card */}
            <Card isDark={isDark} className="flex flex-col justify-between">
              <div>
                <CardLabel text="What I Caught in QA" />
                <BulletList isDark={isDark} items={[
                  "Caregiver images cropping inconsistently at 768px — caught and fixed before any user saw it",
                  "Enquiry form confirmation panel not triggering on mobile Safari — flagged in cross-browser review",
                  "Nav CTA losing hover state on touch devices — resolved with a targeted CSS patch",
                  "Webflow CMS caregiver photos losing aspect ratio — wrote a detailed fix spec for the developer",
                  "Homepage text overflowing on narrow Android viewports — solved by adjusting the responsive type scale",
                ]} />
              </div>
              <div className={`mt-5 pt-4 border-t ${isDark ? "border-white/6" : "border-gray-100"}`}>
                <p className={`text-xs italic leading-relaxed ${isDark ? "text-white/35" : "text-gray-400"}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  "Most designers disappear after handoff. Jagriti was in staging every week.
                  The quality of what we shipped reflected that." — Webflow developer
                </p>
              </div>
            </Card>
          </div>
        </FadeSection>

        <div className={divider} />

        {/* POST-LAUNCH ITERATION */}
        <FadeSection>
          <SectionLabel text="Post-Launch Iteration" />
          <SectionHeading isDark={isDark}>The launch was the beginning, not the end.</SectionHeading>
          <p className={`text-sm leading-relaxed mb-8 max-w-2xl ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
            After launch I set up Hotjar and reviewed session recordings for weeks. Real
            behaviour surfaced two problems the prototype hadn't — and I redesigned both.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                label: "Iteration 1 — Caregiver Section",
                color: "#E8699A",
                before: "Hotjar heatmaps showed 68% of homepage visitors scrolling past the caregiver section — our highest-converting element in prototype testing.",
                after: "Moved the section higher, increased heading visual weight, added a subtle tint. Caregiver section engagement lifted 44% over the following three weeks.",
              },
              {
                label: "Iteration 2 — Enquiry Form",
                color: "#C2547C",
                before: "Session recordings showed mobile users abandoning at step 2 — a free-text 'Tell us about your situation' field that felt open-ended and overwhelming.",
                after: "Replaced with a pre-selected option list plus optional free-text. Mobile form completion improved 31% within the first week after deployment.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`p-5 rounded-2xl border ${isDark ? "border-white/8 bg-white/[0.025]" : "border-gray-100 bg-gray-50/60"}`}
              >
                <CardLabel text={item.label} color={item.color} />
                <p className={`text-[10px] font-bold tracking-widest uppercase mb-1 ${isDark ? "text-white/25" : "text-gray-300"}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  What the data showed
                </p>
                <p className={`text-xs leading-relaxed mb-4 ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  {item.before}
                </p>
                <p className={`text-[10px] font-bold tracking-widest uppercase mb-1`} style={{ fontFamily: "Poppins, sans-serif", color: item.color }}>
                  What I changed
                </p>
                <p className={`text-xs leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  {item.after}
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
                — Post-launch usability test participant
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
            {[
              {
                title: "What worked",
                body: "Staying embedded through the build. Treating post-launch as a design phase. Keeping a shared tracker with the developer so no decision lived only in someone's head.",
              },
              {
                title: "What I'd do differently",
                body: "Set up Hotjar before launch, not after. Two weeks of pre-launch baseline data would have sharpened my post-launch hypotheses significantly.",
              },
              {
                title: "What I learned",
                body: "Design maturity isn't measured in deliverables. It's measured in accountability — staying responsible for the outcome, not just the artefact.",
              },
            ].map((r, i) => (
              <Card key={i} isDark={isDark}>
                <CardLabel text={r.title} />
                <p className={`text-sm leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  {r.body}
                </p>
              </Card>
            ))}
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