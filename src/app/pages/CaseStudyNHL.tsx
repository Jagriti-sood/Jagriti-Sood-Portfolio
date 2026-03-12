import image_bbe9b5fca28d77707395e83c1a2a8979ea556da2 from 'figma:asset/bbe9b5fca28d77707395e83c1a2a8979ea556da2.png'
import { useEffect, useRef } from "react";
import React from "react";
import { motion, useInView } from "motion/react";
import { useTheme } from "../context/ThemeContext";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SharedProjectCard } from "../components/SharedProjectCard";
import { projects } from "../data/projects";
import nhlMockup from "figma:asset/b203f5004c8d3a5ad93bd6d311dc6be3b46afdee.png";

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-5 h-px bg-[#E8699A]" />
      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#E8699A]" style={{ fontFamily: "Poppins, sans-serif" }}>
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

const nextProject = projects[1]; // 101 Healthcare

export default function CaseStudyNHL() {
  const { isDark } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const body = isDark ? "text-white/52" : "text-gray-500";
  const divider = `w-full h-px ${isDark ? "bg-white/6" : "bg-gray-100"}`;

  const meta = [
    { label: "My Role", value: "Lead UX Designer" },
    { label: "Timeline", value: "16 Weeks · 2022" },
    { label: "Tools", value: "Figma, Maze, UserZoom, Miro" },
    { label: "Deliverables", value: "Discovery, App Redesign, Design System, Handoff" },
  ];

  const outcomes = [
    { value: "92%", label: "Session discovery rate (up from 34%)", color: "#E8699A" },
    { value: "4.6★", label: "App Store rating (up from 2.8)", color: "#C2547C" },
    { value: "8k", label: "Attendees served at NHL TechShow 2022", color: "#F4A0C0" },
  ];

  return (
    <div className={`min-h-screen ${isDark ? "bg-[#0a0a0f]" : "bg-white"}`}>
      {/* ── HERO ── */}
      <section className="pt-28 md:pt-36 pb-0 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.05 }} className="flex flex-wrap gap-2 mb-6">
            {["Events Tech", "Mobile App", "UX Research", "Interaction Design"].map((tag) => (
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
            NHL TechShow
            <br />
            <span style={{ fontStyle: "italic", background: "linear-gradient(125deg, #E8699A, #C2547C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Event Platform Redesign
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.18 }}
            className={`max-w-2xl text-base leading-relaxed mb-10 ${body}`}
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            8,000 attendees. 200+ sessions. One app untouched since 2019. As the sole UX lead, I ran discovery workshops across four distinct attendee segments and redesigned everything from pre-event registration through to live-session engagement and post-event access.
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
              src={nhlMockup}
              alt="NHL TechShow App — Final Design"
              className="w-full h-full object-cover"
            />
          </div>
          <p className={`text-center text-[11px] mt-3 ${isDark ? "text-white/22" : "text-gray-300"}`} style={{ fontFamily: "Poppins, sans-serif" }}>
            NHL TechShow 2022 App — Final Design
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
                NHL TechShow is an annual technology and innovation conference run by the National Hockey League, bringing together 8,000+ tech executives, startup founders, and sports innovators. The event app — the primary attendee experience layer — hadn't been redesigned since 2019. It was slow, hard to navigate, and carried a 2.8-star rating on the App Store.
              </p>
              <p className={`text-sm leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                I was brought in as the UX lead to redesign the app from the ground up in 16 weeks — including discovery, IA restructure, full UI redesign, and handoff to a development team of four.
              </p>
            </div>
            <div className="space-y-4 lg:pt-16">
              <InfoCard title="My Role" isDark={isDark}>
                <p className={`text-sm leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  Solo UX lead working with an event producer as product owner and an external dev team. I ran all research, owned design from sketch to handoff, and managed stakeholder reviews at three key milestones.
                </p>
              </InfoCard>
              <InfoCard title="Key Constraints" isDark={isDark}>
                <p className={`text-sm leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  Hard deadline tied to the live event date. Existing app backend couldn't be replaced — new UI had to map to legacy data structures. NHL brand guidelines were strict with limited flexibility.
                </p>
              </InfoCard>
            </div>
          </div>
        </FadeSection>

        <div className={divider} />

        {/* 02 · PROBLEM */}
        <FadeSection>
          <SectionLabel text="02 — The Problem" />
          <SectionHeading isDark={isDark}>A 2019 app at a 2022 event.</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              { title: "Session discovery was broken", body: "200+ sessions with a flat list and no filtering. Attendees couldn't find what was relevant to them — 66% of discovery attempts ended in abandonment based on analytics data." },
              { title: "No real-time context", body: "The app showed the schedule but had no live indicators, room changes, or queue information. Attendees had to check physical signage or ask staff — defeating the app's purpose." },
              { title: "Networking was an afterthought", body: "Attendees consistently listed networking as their primary goal for attending — but the app had no attendee directory, no connection request, no in-app messaging." },
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
              "How might we help NHL TechShow attendees quickly find sessions relevant to their interests, stay informed in real time during the event, and make meaningful professional connections — all from a single mobile experience?"
            </p>
          </div>
        </FadeSection>

        <div className={divider} />

        {/* 03 · RESEARCH */}
        <FadeSection>
          <SectionLabel text="03 — Research & Discovery" />
          <SectionHeading isDark={isDark}>Four segments. One app. Wildly different needs.</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            <InfoCard title="Research Methods" isDark={isDark}>
              <ul className={`text-sm space-y-2 ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                {["16 user interviews across 4 attendee segments (general, speaker, sponsor, press)", "App Store review analysis — 340 reviews coded by theme", "In-person observation at a comparable event (C2 Montreal)", "Comparative analysis of 5 leading event apps (Hopin, Whova, Cvent, Bizzabo, Eventbase)", "Post-event survey from NHL TechShow 2021 (existing data provided by client)"].map((item, i) => (
                  <li key={i} className="flex gap-2"><span className="text-[#E8699A] flex-shrink-0">—</span>{item}</li>
                ))}
              </ul>
            </InfoCard>
            <InfoCard title="Key Findings" isDark={isDark}>
              <ul className={`text-sm space-y-2 ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                {["All 4 segments had a distinct primary job-to-be-done — one navigation model couldn't serve them all", "Session relevance filtering was the single most-requested feature across all segments", "Speakers and sponsors needed backstage features the existing app completely lacked", "'Serendipitous discovery' — finding something unexpectedly — was cited as a key joy by general attendees", "Real-time push notifications were expected but absent from the existing experience"].map((item, i) => (
                  <li key={i} className="flex gap-2"><span className="text-[#E8699A] flex-shrink-0">—</span>{item}</li>
                ))}
              </ul>
            </InfoCard>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              { n: 1, title: "Segment-first navigation", body: "Each attendee type needed a different default home screen. A speaker's primary need (their session details, green room access) is completely different from a general attendee's (browse + discover)." },
              { n: 2, title: "Filters before browse", body: "The most common behaviour pattern: open app → immediately try to filter by topic, time, or track. The existing flat list made this impossible, so users gave up." },
              { n: 3, title: "Networking needs friction reduction", body: "Attendees wanted to connect but felt awkward making cold approaches. A lightweight 'I'm interested in connecting' feature with low social commitment tested well as a solution." },
              { n: 4, title: "Real-time = table stakes", body: "Any app in 2022 that can't push room change alerts or session-starting reminders is immediately perceived as outdated. This was a must-fix, non-negotiable." },
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
              src="https://images.unsplash.com/photo-1683576242671-9e618f4cda90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjB0ZWNobm9sb2d5JTIwZXZlbnQlMjBjb25mZXJlbmNlJTIwdmVudWV8ZW58MXx8fHwxNzcyNjkwNTc5fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="NHL TechShow event environment"
              className="w-full h-full object-cover"
            />
          </div>
          <p className={`text-center text-[11px] mt-3 ${isDark ? "text-white/22" : "text-gray-300"}`} style={{ fontFamily: "Poppins, sans-serif" }}>
            On-site research at NHL TechShow — observing navigation behaviour in the venue
          </p>
        </FadeSection>

        <div className={divider} />

        {/* 04 · DESIGN PROCESS */}
        <FadeSection>
          <SectionLabel text="04 — Design Process" />
          <SectionHeading isDark={isDark}>Designing for four audiences at once.</SectionHeading>
          <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InfoCard title="IA Approach" isDark={isDark}>
                <p className={`text-sm leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  I designed a role-based onboarding that personalised the home screen and navigation based on attendee type. General attendees got a discovery-first home; speakers got their session + green room; sponsors got lead capture tools front and centre.
                </p>
              </InfoCard>
              <InfoCard title="Key Design Decisions" isDark={isDark}>
                <p className={`text-sm leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                  Multi-select topic + time + track filters on the session browser. Real-time session status badges (Live / Starting Soon / Ended). Lightweight connection card with one-tap "Open to connect" status. Push notification centre with relevance settings.
                </p>
              </InfoCard>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-[16/8]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1627757818592-ce2649563a6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB3aXJlZnJhbWUlMjBwcm90b3R5cGUlMjBkZXNpZ24lMjBwcm9jZXNzfGVufDF8fHx8MTc3MjY5MDU3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Wireframes"
                className="w-full h-full object-cover"
              />
            </div>
            <p className={`text-center text-[11px] mt-1 ${isDark ? "text-white/22" : "text-gray-300"}`} style={{ fontFamily: "Poppins, sans-serif" }}>
              Mid-fidelity prototype — session discovery flow tested with 8 attendees across 2 rounds
            </p>

            <div className={`p-5 rounded-2xl border-l-2 border-[#E8699A] ${isDark ? "bg-[#E8699A]/5" : "bg-[#E8699A]/4"}`}>
              <p className="text-[10px] font-bold tracking-widest uppercase mb-2 text-[#E8699A]" style={{ fontFamily: "Poppins, sans-serif" }}>What I Tried & Discarded</p>
              <p className={`text-sm leading-relaxed ${isDark ? "text-white/70" : "text-gray-600"}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                My first networking model used a Tinder-style swipe mechanic for "connect / skip" on attendee profiles. Testing showed it felt inappropriate in a professional conference context — "This is a networking event, not a date." I replaced it with a passive "Open to Connect" status badge visible on session attendee lists, which tested as low-friction and professionally appropriate.
              </p>
            </div>
          </div>
        </FadeSection>

        <div className={divider} />

        {/* 05 · FINAL DESIGNS */}
        <FadeSection>
          <SectionLabel text="05 — Final Designs" />
          <SectionHeading isDark={isDark}>The finished experience.</SectionHeading>
          <p className={`text-sm leading-relaxed mb-8 max-w-2xl ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
            A role-aware mobile app with powerful session discovery, real-time live indicators, and lightweight professional networking — built within NHL's existing design language with a modernised component system.
          </p>
          <div className="space-y-5">

            {/* Mockup showcase — dark stage */}
            <div className="rounded-2xl md:rounded-3xl overflow-hidden bg-[#0d0f14] px-6 md:px-12 pt-10 pb-10 flex flex-col items-center">
              {/* Label row */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {[
                  { dot: "#E8699A", text: "Live game score + period" },
                  { dot: "#C2547C", text: "Real-time power rankings" },
                  { dot: "#F4A0C0", text: "LIVE broadcast badge" },
                ].map((chip) => (
                  <div key={chip.text} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10">
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: chip.dot }} />
                    <span className="text-[11px] text-white/55" style={{ fontFamily: "Poppins, sans-serif" }}>{chip.text}</span>
                  </div>
                ))}
              </div>
              {/* Mockup image — sits at the bottom, not clipped */}
              <img
                src={image_bbe9b5fca28d77707395e83c1a2a8979ea556da2}
                alt="NHL TechShow — Live Broadcast & Rankings Screen"
                className="w-full max-w-3xl block"
                style={{ display: "block" }}
              />
            </div>
            <p className={`text-center text-[11px] ${isDark ? "text-white/22" : "text-gray-300"}`} style={{ fontFamily: "Poppins, sans-serif" }}>
              Live in-game view with real-time NHL Power Rankings — the centrepiece of the redesigned experience
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              
            </div>
          </div>
        </FadeSection>

        <div className={divider} />

        {/* 06 · OUTCOMES */}
        <FadeSection>
          <SectionLabel text="06 — Outcomes" />
          <SectionHeading isDark={isDark}>From 2.8 stars to 4.6.</SectionHeading>
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
                Post-event survey (n=1,240) showed a 78% satisfaction score with the app experience — up from 31% the previous year. The session filter was cited as the most-used feature.
              </p>
              <p className={`text-sm leading-relaxed italic ${isDark ? "text-white/40" : "text-gray-400"}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                "Finally an event app that actually helps me find what I care about." — General Attendee, post-event survey
              </p>
            </InfoCard>
            <InfoCard title="Business Impact" isDark={isDark}>
              <p className={`text-sm leading-relaxed ${body}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                Sponsor lead-capture via the app generated 40% more qualified contacts than the previous year's badge-scan system. The NHL Events team cited the redesigned app as a factor in a 15% increase in early-bird registrations for TechShow 2023.
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
              { title: "What worked well", body: "The role-based personalisation was the right call — every attendee segment felt the app was 'for them' in a way that generic event apps never achieve. The multi-select filter system was particularly praised." },
              { title: "What I'd do differently", body: "I'd have pushed harder for a dedicated sponsor analytics dashboard. We designed the lead-capture flow but stopped short of a real-time dashboard. Sponsors asked for it immediately post-event." },
              { title: "What I learned", body: "Designing for live events is unlike designing for standard apps — context changes by the minute. I now think explicitly about 'temporal design' — how the UI should adapt as time progresses through an event." },
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