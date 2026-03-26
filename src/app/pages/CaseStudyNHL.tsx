import image_8e71449eea3a53bed6e92a0d8a1f19957f0248e2 from 'figma:asset/8e71449eea3a53bed6e92a0d8a1f19957f0248e2.png'
import image_e428e10bafcb1801eb327883064f118f42b5c037 from 'figma:asset/e428e10bafcb1801eb327883064f118f42b5c037.png'
import image_32ee01328dd6e8d103b386294daeff2783455117 from 'figma:asset/32ee01328dd6e8d103b386294daeff2783455117.png'
import image_209f8d105135ffb00c4bc5b63925e26ec526bbbb from 'figma:asset/209f8d105135ffb00c4bc5b63925e26ec526bbbb.png'
import image_bd7ea60f7f634923279591217842ed2503ffee4a from 'figma:asset/bd7ea60f7f634923279591217842ed2503ffee4a.png'
import image_d317d9d7b5be08f3cfeba76fedb7b92dce304723 from 'figma:asset/d317d9d7b5be08f3cfeba76fedb7b92dce304723.png'
import image_2d21ce31719972625805c6e6824524805975e69f from 'figma:asset/2d21ce31719972625805c6e6824524805975e69f.png'
import image_23ac728deaa58f4daee1e9f741635b30bf9e761b from 'figma:asset/23ac728deaa58f4daee1e9f741635b30bf9e761b.png'
import image_481117db7ea38e826023047cc5125af679581cea from 'figma:asset/481117db7ea38e826023047cc5125af679581cea.png'
import image_07250a1c947ec4f2584424fd0293a75dd712505f from 'figma:asset/07250a1c947ec4f2584424fd0293a75dd712505f.png'
import image_bbe9b5fca28d77707395e83c1a2a8979ea556da2 from 'figma:asset/bbe9b5fca28d77707395e83c1a2a8979ea556da2.png'
import { useEffect, useRef } from "react";
import React from "react";
import { motion, useInView } from "motion/react";
import { useTheme } from "../context/ThemeContext";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SharedProjectCard } from "../components/SharedProjectCard";
import { projects } from "../data/projects";
import nhlMockup from "figma:asset/b203f5004c8d3a5ad93bd6d311dc6be3b46afdee.png";
import { getPageSurfaceClass, getPageSurfaceOverlayClass, getPaperTexture } from "../lib/surfaces";

const ACCENT = "#8b6b4f";

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
    <div className={`p-5 rounded-2xl border ${isDark ? "border-white/8 bg-white/[0.03]" : "border-black/8 bg-white/55"}`}>
      <p className="text-[11px] font-medium tracking-[0.18em] uppercase mb-3" style={{ color: ACCENT, fontFamily: "Inter, sans-serif" }}>{title}</p>
      {children}
    </div>
  );
}

const nextProject = projects[1]; // 101 Healthcare

export default function CaseStudyNHL() {
  const { isDark } = useTheme();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const body = isDark ? "text-white/52" : "text-[#171717]/62";
  const divider = `w-full h-px ${isDark ? "bg-white/6" : "bg-black/8"}`;

  const meta = [
    { label: "My Role", value: "Lead UX Designer" },
    { label: "Timeline", value: "16 Weeks · 2022" },
    { label: "Tools", value: "Figma, Maze, UserZoom, Miro" },
    { label: "Deliverables", value: "Discovery, App Redesign, Design System, Handoff" },
  ];

  const outcomes = [
    { value: "72%", label: "Session discovery rate", color: "#8b6b4f" },
    { value: "5k+", label: "Attendees at NHL Tech Showcase 2022", color: "#6f563f" },
    { value: "46%", label: "Users explored multiple modules", color: "#b3987d" },
  ];

  return (
    <div className={`relative min-h-screen overflow-hidden ${getPageSurfaceClass(isDark)}`}>
      <div aria-hidden="true" className="-z-10 pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-multiply dark:mix-blend-screen" style={{ backgroundImage: getPaperTexture(isDark) }} />
      <div aria-hidden="true" className={`-z-10 pointer-events-none absolute inset-0 ${getPageSurfaceOverlayClass(isDark)}`} />
      {/* ── HERO ── */}
      <section className="relative z-10 pt-32 md:pt-36 pb-0 px-6">
        <div className="max-w-[860px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.05 }} className="flex flex-wrap gap-2 mb-6">
            {["Events Tech", "Mobile App", "UX Research", "Interaction Design"].map((tag) => (
              <span key={tag} className={`px-3 py-1 rounded-full text-xs font-medium border ${isDark ? "border-white/10 text-white/45" : "border-black/10 text-[#171717]/42"}`} style={{ fontFamily: "Inter, sans-serif" }}>
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`text-[2.4rem] sm:text-[3rem] md:text-[3.8rem] font-semibold leading-[0.98] tracking-[-0.045em] mb-5 ${isDark ? "text-white" : "text-[#171717]"}`}
            style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.08", letterSpacing: "-0.04em" }}
          >
            <span className="block">NHL Tech Showcase 2022:</span>
            <span className={`text-[1.5rem] sm:text-[2rem] md:text-[2.4rem] block pb-1 font-editorial italic tracking-[-0.01em] ${isDark ? "text-white/78" : "text-[#171717]/72"}`}>
              Reimagining the fan streaming experience
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.18 }}
            className={`max-w-[38rem] text-base leading-[1.7] mb-10 ${body}`}
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            A concept-led platform redesign that helped fans discover the live stats, player context, and interactive tools most relevant to them.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.24 }}
            className={`grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 rounded-2xl border overflow-hidden mb-10 ${isDark ? "border-white/8 divide-white/8" : "border-black/8 divide-black/8"}`}
          >
            {meta.map((m) => (
              <div key={m.label} className={`px-5 py-4 ${isDark ? "bg-white/[0.025]" : "bg-white/45"}`}>
                <p className={`text-[11px] font-medium tracking-[0.18em] uppercase mb-1 ${isDark ? "text-white/28" : "text-[#171717]/34"}`} style={{ fontFamily: "Inter, sans-serif" }}>{m.label}</p>
                <p className={`text-sm font-semibold ${isDark ? "text-white/75" : "text-[#171717]/78"}`} style={{ fontFamily: "Inter, sans-serif" }}>{m.value}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} className="max-w-[1080px] mx-auto">
          <div className="rounded-2xl md:rounded-3xl overflow-hidden aspect-[16/8]">
            <ImageWithFallback
              src={image_e428e10bafcb1801eb327883064f118f42b5c037}
              alt="NHL TechShow App — Final Design"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* ── BODY ── */}
      <div className="relative z-10 max-w-[860px] mx-auto px-6 mt-10 md:mt-14 space-y-10 md:space-y-12 pb-24">

        {/* 01 · OVERVIEW */}
        <FadeSection>
          <SectionLabel text="01: Overview" />
          <div className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
              <div>
                <SectionHeading isDark={isDark}>The brief.</SectionHeading>
                <p className={`text-sm leading-[1.65] mb-4 ${body}`} style={{ fontFamily: "Inter, sans-serif" }}>
                  Source Digital participated in the 2022 NHL Tech Showcase to explore how live hockey viewing could become more personalized, data-rich, and interactive. The opportunity was to design a fan-facing platform concept that brought together real-time stats, player information, fantasy tools, betting context, and personalized rankings into one cohesive experience. The goal was not just to showcase technology, but to make the value of that technology immediately understandable and usable for different types of NHL fans.
                </p>
              </div>
              <InfoCard title="My Role" isDark={isDark}>
                <p className={`text-sm leading-[1.65] ${body}`} style={{ fontFamily: "Inter, sans-serif" }}>
                  I led the end-to-end UX process for the project; from discovery and research synthesis to information architecture, concept design, feature prioritization, and final UI direction. I worked within an agile process, translated fan and stakeholder needs into a modular product strategy, and designed the experience around multiple user types including casual fans, fantasy players, and bettors.
                </p>
              </InfoCard>
            </div>
            <InfoCard title="Key Constraints" isDark={isDark}>
              <p className={`text-sm leading-[1.65] ${body}`} style={{ fontFamily: "Inter, sans-serif" }}>
                The project had a tight showcase timeline and needed to serve multiple fan types: casual viewers, fantasy players, and bettors; within one cohesive experience. It also had to deliver real-time insights during fast-paced gameplay without overwhelming users, while working seamlessly across multiple devices and presenting an innovative yet practical concept for the tech showcase.
              </p>
            </InfoCard>
          </div>
        </FadeSection>

        <div className={`${divider} !mt-8 !mb-8`} />

        {/* 02 · PROBLEM */}
        <FadeSection>
          <SectionLabel text="02: The Problem" />
          <SectionHeading isDark={isDark}>Too Much Data, Too Little Clarity</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              { title: "Tight Timeline", body: "The project had to move from discovery to design within a compressed schedule aligned with the NHL Tech Showcase." },
              { title: "Multiple Fan Types", body: "The experience needed to support casual viewers, fantasy players, and bettors within one cohesive platform." },
              { title: "Real-Time, Multi-Device Experience", body: "The platform had to deliver live insights during fast-paced gameplay while working seamlessly across mobile, tablet, desktop, and TV environments." },
            ].map((p, i) => (
              <div key={i} className={`p-5 rounded-2xl border ${isDark ? "border-white/8 bg-white/[0.03]" : "border-black/8 bg-white/55"}`}>
                <p className={`text-sm font-semibold mb-2 ${isDark ? "text-white/80" : "text-[#171717]"}`} style={{ fontFamily: "Inter, sans-serif" }}>{p.title}</p>
                <p className={`text-sm leading-[1.65] ${body}`} style={{ fontFamily: "Inter, sans-serif" }}>{p.body}</p>
              </div>
            ))}
          </div>
          <div className={`p-6 rounded-2xl border ${isDark ? "border-white/8 bg-white/[0.03]" : "border-black/8 bg-white/55"}`}>
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase mb-2" style={{ color: ACCENT, fontFamily: "Inter, sans-serif" }}>Problem Statement</p>
            <p className={`text-base leading-[1.65] ${isDark ? "text-white/75" : "text-[#171717]/68"}`} style={{ fontFamily: "Inter, sans-serif", fontStyle: "italic" }}>
              "How might we design a live NHL viewing experience that helps different types of fans quickly discover the most relevant content; from stats and player tracking to betting and fantasy insights, without overwhelming them during the pace of the game?"
            </p>
          </div>
        </FadeSection>

        <div className={divider} />

        {/* 03 · RESEARCH */}
        <FadeSection>
          <SectionLabel text="03: Research & Discovery" />
          <SectionHeading isDark={isDark}>Four segments. One app. Wildly different needs.</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            <InfoCard title="Research Methods" isDark={isDark}>
              <ul className={`text-sm space-y-2 ${body}`} style={{ fontFamily: "Inter, sans-serif" }}>
                {["Questionnaires and interviews with NHL representatives, technology partners, and hockey fans", "Synthesis of fan preferences, unmet needs, and live-game pain points", "Persona development for three core audience types: casual fan, fantasy sports enthusiast, and bettor", "Journey mapping across pre-game, during-game, and post-game behaviors", "Agile concept testing and iterative feature refinement around five core content blocks: Power Rankings, Player Tracker, Bio, BetSlip, and Stats"].map((item, i) => (
                  <li key={i} className="flex gap-2.5 items-start"><span className={`mt-[6px] h-1.5 w-1.5 rounded-full flex-shrink-0 ${isDark ? "bg-white/45" : "bg-[#171717]/38"}`} />{item}</li>
                ))}
              </ul>
            </InfoCard>
            <InfoCard title="Key Findings" isDark={isDark}>
              <ul className={`text-sm space-y-2 ${body}`} style={{ fontFamily: "Inter, sans-serif" }}>
                {["Fans wanted personalized experiences centered around favorite teams, players, and preferred modes of engagement.", "Fantasy users valued real-time player stats, projections, and matchup analysis during live viewing.", "Bettors needed frictionless live betting support, including live odds, secure flows, and personalized bet slips.", "Users wanted deep stats and analysis, but struggled when too much information appeared at once during live gameplay.", "Fans found it frustrating to switch between platforms for player profiles, social content, stats, and game context.", "Device flexibility mattered: users expected the experience to work across phones, tablets, computers, and smart TVs."].map((item, i) => (
                  <li key={i} className="flex gap-2.5 items-start"><span className={`mt-[6px] h-1.5 w-1.5 rounded-full flex-shrink-0 ${isDark ? "bg-white/45" : "bg-[#171717]/38"}`} />{item}</li>
                ))}
              </ul>
            </InfoCard>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              { n: 1, title: "Personalization mattered more than feature volume.", body: "Fans were not asking for every tool at once; they wanted the experience to adapt to what they cared about most, whether that was their team, a specific player, fantasy performance, or betting context." },
              { n: 2, title: "Real-time data is only valuable if it's discoverable in the moment.", body: "The live nature of hockey made speed essential. Stats, player updates, and betting information had to surface at exactly the right time, with minimal effort." },
              { n: 3, title: "Different fan mindsets required different entry points.", body: "Casual fans, fantasy users, and bettors were not using the product in the same way. A one-size-fits-all layout would force everyone through the same experience, reducing relevance for all three." },
              { n: 4, title: "Balancing depth with focus", body: "Users wanted richer information, but not at the cost of missing the game itself. The product needed to feel layered and powerful without becoming noisy or distracting." },
            ].map((ins) => (
              <div key={ins.n} className={`p-5 rounded-2xl border ${isDark ? "border-white/8 bg-white/[0.03]" : "border-black/8 bg-white/55"}`}>
                <p className="text-[10px] font-medium tracking-[0.18em] uppercase mb-2" style={{ color: ACCENT, fontFamily: "Inter, sans-serif" }}>Insight {ins.n}</p>
                <p className={`text-sm font-semibold mb-1.5 ${isDark ? "text-white/80" : "text-[#171717]"}`} style={{ fontFamily: "Inter, sans-serif" }}>{ins.title}</p>
                <p className={`text-sm leading-[1.65] ${body}`} style={{ fontFamily: "Inter, sans-serif" }}>{ins.body}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden aspect-[16/7]">
            <ImageWithFallback
              src={image_481117db7ea38e826023047cc5125af679581cea}
              alt="NHL TechShow event environment"
              className="w-full h-full object-cover"
            />
          </div>
          <p className={`text-center text-xs mt-3 ${isDark ? "text-white/22" : "text-[#171717]/26"}`} style={{ fontFamily: "Inter, sans-serif" }}>
            Synthesising interview findings and fan pain points across three distinct audience segments
          </p>
        </FadeSection>

        <div className={divider} />

        {/* 04 · DESIGN PROCESS */}
        <FadeSection>
          <SectionLabel text="04: Design Process" />
          <SectionHeading isDark={isDark}>Designing for four audiences at once.</SectionHeading>
          <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InfoCard title="IA Approach" isDark={isDark}>
                <p className={`text-sm leading-[1.65] ${body}`} style={{ fontFamily: "Inter, sans-serif" }}>
                  I structured the platform around a modular information architecture, where high-value content was grouped into distinct functional blocks rather than buried in dense navigation. This let users move quickly between the type of information they cared about most; such as live stats, player tracking, bios, betting support, or rankings; without forcing a single linear path. The structure also made it easier to adapt the experience for different fan intents while keeping the system scalable.
                </p>
              </InfoCard>
              <InfoCard title="Key Design Decisions" isDark={isDark}>
                <ul className={`text-sm space-y-2 ${body}`} style={{ fontFamily: "Inter, sans-serif" }}>
                  {["Broke the experience into five clear content modules: Power Rankings, Player Tracker, Bio, BetSlip, and Stats.", "Designed for progressive disclosure, so users could scan quickly and dive deeper only when needed", "Prioritized live-game discoverability over exhaustive navigation", "Created a structure that could support multiple fan personas without splitting into separate products", "Reduced cross-platform switching by bringing related live context into one interface", "Balanced immersive, showcase-worthy visuals with a UI model that still felt usable and product-ready"].map((item, i) => (
                    <li key={i} className="flex gap-2.5 items-start"><span className={`mt-[6px] h-1.5 w-1.5 rounded-full flex-shrink-0 ${isDark ? "bg-white/45" : "bg-[#171717]/38"}`} />{item}</li>
                  ))}
                </ul>
              </InfoCard>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-[16/8]">
              <ImageWithFallback
                src={image_07250a1c947ec4f2584424fd0293a75dd712505f}
                alt="Wireframes"
                className="w-full h-full object-cover"
              />
            </div>
            <p className={`text-center text-xs mt-1 ${isDark ? "text-white/22" : "text-[#171717]/26"}`} style={{ fontFamily: "Inter, sans-serif" }}>
              Mid-fidelity prototype — session discovery flow tested with 8 attendees across 2 rounds
            </p>

            <div className={`p-5 rounded-2xl border ${isDark ? "border-white/8 bg-white/[0.03]" : "border-black/8 bg-white/55"}`}>
              <p className="text-[10px] font-medium tracking-[0.18em] uppercase mb-2" style={{ color: ACCENT, fontFamily: "Inter, sans-serif" }}>What I Tried & Discarded</p>
              <p className={`text-base leading-[1.65] ${isDark ? "text-white/70" : "text-[#171717]/62"}`} style={{ fontFamily: "Inter, sans-serif" }}>
                I explored broader, content-heavy layouts early on, but they made the live experience feel crowded and cognitively expensive, especially for a sport as fast as hockey. I also considered a more uniform experience where all users saw the same hierarchy, but research showed that casual fans, fantasy players, and bettors each entered with very different goals. I moved away from both approaches and shifted toward a modular system that made discovery faster, clearer, and more adaptive to intent.
              </p>
            </div>
          </div>
        </FadeSection>

        <div className={divider} />

        {/* 05 · FINAL DESIGNS */}
        <FadeSection>
          <SectionLabel text="05: Final Designs" />
          <SectionHeading isDark={isDark}>The finished experience.</SectionHeading>
          <p className={`text-base leading-[1.65] mb-5 max-w-2xl ${body}`} style={{ fontFamily: "Inter, sans-serif" }}>
            A modular live-viewing experience built around discovery, personalization, and real-time context
          </p>
          <ScreensShowcase body={body} isDark={isDark} />
        </FadeSection>

        <div className={divider} />

        {/* 06 · OUTCOMES */}
        <FadeSection>
          <SectionLabel text="06: Outcomes" />
          <SectionHeading isDark={isDark}>Improving discoverability in a high-speed, high-information live sports environment</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {outcomes.map((o) => (
              <div key={o.label} className={`p-6 rounded-2xl border ${isDark ? "border-white/8 bg-white/[0.025]" : "border-black/8 bg-white/55"}`}>
                <p className="text-4xl font-semibold mb-2" style={{ fontFamily: "Inter, sans-serif", color: o.color }}>{o.value}</p>
                <p className={`text-sm leading-[1.65] ${body}`} style={{ fontFamily: "Inter, sans-serif" }}>{o.label}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <InfoCard title="Qualitative Outcomes" isDark={isDark}>
              <ul className={`text-sm space-y-2 ${body}`} style={{ fontFamily: "Inter, sans-serif" }}>
                {["Attendees could more easily understand how emerging NHL technologies might translate into actual fan-facing product experiences", "The concept made advanced real-time data feel more approachable by packaging it into clear, role-based modules", "The experience resonated across different fan types instead of privileging only one mode of engagement", "The final design helped communicate Source Digital's value within the broader NHL innovation ecosystem", "Stakeholders could better see how personalization, live stats, fantasy behavior, and betting support could coexist in a single cohesive experience"].map((item, i) => (
                  <li key={i} className="flex gap-2.5 items-start"><span className={`mt-[6px] h-1.5 w-1.5 rounded-full flex-shrink-0 ${isDark ? "bg-white/45" : "bg-[#171717]/38"}`} />{item}</li>
                ))}
              </ul>
            </InfoCard>
            <InfoCard title="Business Impact" isDark={isDark}>
              <p className={`text-sm leading-[1.65] ${body}`} style={{ fontFamily: "Inter, sans-serif" }}>
                This project translated abstract innovation into a product vision that stakeholders could evaluate, discuss, and rally around. Instead of presenting technology as isolated capabilities, the platform demonstrated how real-time data, personalization, and interactive viewing could become a unified fan experience. For Source Digital, that meant stronger strategic visibility at a high-profile NHL showcase. For stakeholders, it created a clearer picture of how emerging capabilities could drive engagement, feature adoption, and future monetization opportunities across fantasy, sponsorship, betting, and premium fan experiences.
              </p>
            </InfoCard>
          </div>

          {/* Stadium / in-use photo placeholder */}
          <div className="mt-5 rounded-2xl overflow-hidden" style={{ minHeight: "340px" }}>
            <img
              src={image_8e71449eea3a53bed6e92a0d8a1f19957f0248e2}
              alt="App in use at NHL Tech Showcase 2022"
              className="w-full h-full object-cover"
              style={{ minHeight: "340px" }}
            />
          </div>
        </FadeSection>

        <div className={divider} />

        {/* 07 · REFLECTIONS */}
        <FadeSection>
          <SectionLabel text="07: Reflections" />
          <SectionHeading isDark={isDark}>What I'd do differently.</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className={`p-5 rounded-2xl border ${isDark ? "border-white/8 bg-white/[0.03]" : "border-black/8 bg-white/55"}`}>
              <p className="text-[10px] font-medium tracking-[0.18em] uppercase mb-3" style={{ color: ACCENT, fontFamily: "Inter, sans-serif" }}>What worked well</p>
              <ul className={`text-sm space-y-2 ${body}`} style={{ fontFamily: "Inter, sans-serif" }}>
                {["Grounding the concept in distinct fan types helped the experience feel strategic rather than feature-led", "The modular architecture created flexibility without sacrificing clarity", "Focusing on discoverability was the right UX lens for a fast-moving, live sports environment", "Designing around real user intents made the concept feel more credible and scalable"].map((item, i) => (
                  <li key={i} className="flex gap-2.5 items-start"><span className={`mt-[6px] h-1.5 w-1.5 rounded-full flex-shrink-0 ${isDark ? "bg-white/45" : "bg-[#171717]/38"}`} />{item}</li>
                ))}
              </ul>
            </div>
            <div className={`p-5 rounded-2xl border ${isDark ? "border-white/8 bg-white/[0.03]" : "border-black/8 bg-white/55"}`}>
              <p className="text-[10px] font-medium tracking-[0.18em] uppercase mb-3" style={{ color: ACCENT, fontFamily: "Inter, sans-serif" }}>What I'd do differently</p>
              <ul className={`text-sm space-y-2 ${body}`} style={{ fontFamily: "Inter, sans-serif" }}>
                {["I would validate the final information hierarchy with more lightweight usability testing in a live or simulated game context", "I would test different personalization defaults to understand what should be inferred versus user-controlled", "I would spend more time designing motion, transitions, and timing behavior to make live updates feel even more natural and less interruptive", "I would explore how the experience changes across mobile, tablet, and larger shared-viewing contexts more explicitly"].map((item, i) => (
                  <li key={i} className="flex gap-2.5 items-start"><span className={`mt-[6px] h-1.5 w-1.5 rounded-full flex-shrink-0 ${isDark ? "bg-white/45" : "bg-[#171717]/38"}`} />{item}</li>
                ))}
              </ul>
            </div>
            <div className={`p-5 rounded-2xl border ${isDark ? "border-white/8 bg-white/[0.03]" : "border-black/8 bg-white/55"}`}>
              <p className="text-[10px] font-medium tracking-[0.18em] uppercase mb-3" style={{ color: ACCENT, fontFamily: "Inter, sans-serif" }}>What I learned</p>
              <ul className={`text-sm space-y-2 ${body}`} style={{ fontFamily: "Inter, sans-serif" }}>
                {["In live sports, relevance beats density: the best experience is not the one with the most information, but the one that surfaces the right information at the right time", "Personalization is most effective when it reduces effort, not when it simply adds more options", "Strong UX in innovation projects comes from translating complex ecosystems into simple, believable user value", "Designing for multiple audience mindsets requires flexible systems, not one-size-fits-all flows"].map((item, i) => (
                  <li key={i} className="flex gap-2.5 items-start"><span className={`mt-[6px] h-1.5 w-1.5 rounded-full flex-shrink-0 ${isDark ? "bg-white/45" : "bg-[#171717]/38"}`} />{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </FadeSection>

        {/* ── NEXT PROJECT ── */}
        <FadeSection>
          <div className="pt-4">
            <p className={`text-[10px] font-medium tracking-[0.18em] uppercase mb-6 ${isDark ? "text-white/28" : "text-[#171717]/28"}`} style={{ fontFamily: "Inter, sans-serif" }}>
              Next Project
            </p>
            <SharedProjectCard project={nextProject} index={0} isDark={isDark} animate={false} />
          </div>
        </FadeSection>
      </div>
    </div>
  );
}

// ── Screens Showcase (Final Designs section only) ─────────────────────────────

const SCREEN_SHOWCASE = [
  {
    image: image_bbe9b5fca28d77707395e83c1a2a8979ea556da2,
    alt: "NHL TechShow — Rankings Screen",
    chips: [
      { dot: "#8b6b4f", text: "Live game score + period" },
      { dot: "#6f563f", text: "Real-time power rankings" },
      { dot: "#b3987d", text: "LIVE broadcast badge" },
    ],
    caption: "Live in-game view with real-time NHL Power Rankings — the centrepiece of the redesigned experience",
  },
  {
    image: image_209f8d105135ffb00c4bc5b63925e26ec526bbbb,
    alt: "NHL TechShow — Tracker Screen",
    chips: [
      { dot: "#8b6b4f", text: "On-ice players by team" },
      { dot: "#6f563f", text: "Player watchlist star" },
      { dot: "#b3987d", text: "Live roster feed" },
    ],
    caption: "Tracker module — browse on-ice players by team and add them to your personal watchlist in real time",
  },
  {
    image: image_bd7ea60f7f634923279591217842ed2503ffee4a,
    alt: "NHL TechShow — Bio Screen",
    chips: [
      { dot: "#8b6b4f", text: "Player profile card" },
      { dot: "#6f563f", text: "Draft & career details" },
      { dot: "#b3987d", text: "Favourite player badge" },
    ],
    caption: "Bio module — full player profile with draft history, physical details, and career bio surfaced in-context",
  },
  {
    image: image_d317d9d7b5be08f3cfeba76fedb7b92dce304723,
    alt: "NHL TechShow — Bets Screen",
    chips: [
      { dot: "#8b6b4f", text: "Live bet slip" },
      { dot: "#6f563f", text: "Open + pending bets" },
      { dot: "#b3987d", text: "Quick bet placement" },
    ],
    caption: "Bets module — live bet slip with open, pending, and closed bets surfaced in-context during the game",
  },
  {
    image: image_2d21ce31719972625805c6e6824524805975e69f,
    alt: "NHL TechShow — Stats Screen",
    chips: [
      { dot: "#8b6b4f", text: "Season stats table" },
      { dot: "#6f563f", text: "Career comparison" },
      { dot: "#b3987d", text: "Live player context" },
    ],
    caption: "Stats module — season and career stats comparison for any tracked player, accessible without leaving the stream",
  },
  {
    image: image_23ac728deaa58f4daee1e9f741635b30bf9e761b,
    alt: "NHL TechShow — Twitter Screen",
    chips: [
      { dot: "#8b6b4f", text: "Live Twitter feed" },
      { dot: "#6f563f", text: "Player & team tweets" },
      { dot: "#b3987d", text: "Social context layer" },
    ],
    caption: "Twitter module — curated live social feed bringing player and team tweets into the viewing experience",
  },
];

function ScreensShowcase({ body, isDark }: { body: string; isDark: boolean }) {
  const [featured, ...supporting] = SCREEN_SHOWCASE;
  return (
    <div className="space-y-5">
      <div
        className={`rounded-[24px] border p-4 md:p-5 ${
          isDark ? "border-white/8 bg-white/[0.03]" : "border-black/8 bg-white/55"
        }`}
      >
        <div className="grid gap-4 md:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)] md:items-start">
          <div
            className={`overflow-hidden rounded-[18px] border ${
              isDark ? "border-white/8 bg-[#0d0f14]" : "border-black/8 bg-[#f3ece2]"
            }`}
          >
            <img src={featured.image} alt={featured.alt} className="block w-full" />
          </div>

          <div className={`rounded-[18px] border p-4 md:p-5 ${isDark ? "border-white/8 bg-white/[0.025]" : "border-black/8 bg-[#fbf7f1]"}`}>
            <p
              className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em]"
              style={{ color: ACCENT, fontFamily: "Inter, sans-serif" }}
            >
              Featured Screen
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              {featured.chips.map((chip) => (
                <div
                  key={chip.text}
                  className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[12px] ${
                    isDark ? "bg-white/[0.06] text-white/60" : "bg-black/[0.045] text-[#171717]/56"
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: chip.dot }} />
                  <span style={{ fontFamily: "Inter, sans-serif" }}>{chip.text}</span>
                </div>
              ))}
            </div>
            <p className={`text-sm leading-[1.7] ${body}`} style={{ fontFamily: "Inter, sans-serif" }}>
              {featured.caption}
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {supporting.map((slide) => (
          <figure
            key={slide.alt}
            className={`rounded-[22px] border p-3 md:p-4 ${
              isDark ? "border-white/8 bg-white/[0.03]" : "border-black/8 bg-white/55"
            }`}
          >
            <div
              className={`mb-3 overflow-hidden rounded-[16px] border ${
                isDark ? "border-white/8 bg-[#0d0f14]" : "border-black/8 bg-[#f3ece2]"
              }`}
            >
              <img src={slide.image} alt={slide.alt} className="block w-full" />
            </div>
            <div className="mb-2 flex flex-wrap gap-2">
              {slide.chips.map((chip) => (
                <span
                  key={chip.text}
                  className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[11px] ${
                    isDark ? "bg-white/[0.06] text-white/56" : "bg-black/[0.045] text-[#171717]/54"
                  }`}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: chip.dot }} />
                  {chip.text}
                </span>
              ))}
            </div>
            <figcaption className={`text-[13px] leading-[1.65] ${body}`} style={{ fontFamily: "Inter, sans-serif" }}>
              {slide.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
