import { motion } from "motion/react";
import { ArrowUpRight, Lock, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { useLocation } from "react-router";
import { projects } from "../data/projects";
import { useTheme } from "../context/ThemeContext";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { getPageSurfaceClass, getPageSurfaceOverlayClass, getPaperTexture } from "../lib/surfaces";
import profilePhoto from "@/assets/jagriti-avatar-closeup.png";
import sunflowerCandle from "figma:asset/6f6b36c40b35f0725b8fa97be9ce865514a8a837.png";
import wineGlasses from "figma:asset/4e0173e83ea76e48b112d6778f7273d8643cea1e.png";
import giftBasket from "figma:asset/48315edc9be0e96e6149d33a3fe19acd1da79c47.png";
import mangaSketch from "figma:asset/a4ada0d494d57b186c25f777b7ff20457ce59acf.png";
import purpleCake from "figma:asset/d7e28abf91ba1c1f15bf879ce952c43014d94c47.png";
import blueberryCandle from "figma:asset/a656586deeda80f768392adbd30fbf610b1bd1dc.png";
import candyCandle from "figma:asset/4c8e3fa9751ab13445c0fe8b04bb094d5d723e60.png";
import redRoses from "figma:asset/ba1cf1d91770ecff11bef4bbfc4a09fcfdc1e44e.png";
import journalPurpose from "figma:asset/d1e8f6c5ea38f967b0a0782226f34605cbd05774.png";
import journalPassions from "figma:asset/4d20c458e8b1eb0c4df1061427adb729dab0e37f.png";
import narutoSplit from "figma:asset/ca1682f32f41e7d905ee85bde9e877f03c82019e.png";
import tanjiroSketch from "figma:asset/081aab239821c260747338b13ded2ee73050db5c.png";
import babyShower from "figma:asset/682a52ae305d4d0fc76db90cf5c238e3c2a20db4.png";
import snoopyCandle from "figma:asset/b1ac13acfcc3d85bf7baf491f9d7667bec19ff92.png";
import parfaitCandle from "figma:asset/c6fa95e34368fc2fc495cd8315dac560474fa2ee.png";

const EASE = [0.22, 1, 0.36, 1] as const;
const SECTION_SCROLL_OFFSET = 56;

const experience = [
  {
    role: "Senior UX/UI Designer",
    company: "101 Healthcare",
    period: "2025 to 2026",
  },
  {
    role: "Senior UX/UI Designer",
    company: "Maple Code Innovations",
    period: "2024 to 2025",
  },
  {
    role: "UX/UI Designer",
    company: "Source Digital",
    period: "2021 to 2024",
  },
  {
    role: "UX/UI Designer",
    company: "Bajaj Finserv Health",
    period: "2020 to 2021",
  },
];

const outsideWork = [
  { image: sunflowerCandle, label: "Candles" },
  { image: purpleCake, label: "Candles" },
  { image: giftBasket, label: "Gifting" },
  { image: blueberryCandle, label: "Candles" },
  { image: candyCandle, label: "Candles" },
  { image: redRoses, label: "Gifting" },
  { image: mangaSketch, label: "Sketches" },
  { image: wineGlasses, label: "Glass painting" },
  { image: journalPurpose, label: "Journaling" },
  { image: narutoSplit, label: "Sketches" },
  { image: babyShower, label: "Gifting" },
  { image: snoopyCandle, label: "Candles" },
  { image: journalPassions, label: "Journaling" },
  { image: tanjiroSketch, label: "Sketches" },
  { image: parfaitCandle, label: "Candles" },
];

function BootstrapEnvelopeFillIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
    </svg>
  );
}

function BootstrapLinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
    </svg>
  );
}

export default function Home() {
  const { isDark } = useTheme();
  const location = useLocation();
  const [expandedOutsideWork, setExpandedOutsideWork] = useState<number | null>(null);
  const outsideWorkRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!location.hash) return;

    const element = document.querySelector(location.hash);
    if (!element) return;

    const navHeight = document.querySelector("nav")?.getBoundingClientRect().height ?? 0;
    const top = element.getBoundingClientRect().top + window.scrollY - navHeight - SECTION_SCROLL_OFFSET;

    window.requestAnimationFrame(() => {
      window.scrollTo({ top, behavior: "smooth" });
    });
  }, [location.hash]);

  useEffect(() => {
    if (expandedOutsideWork === null) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!outsideWorkRef.current?.contains(event.target as Node)) {
        setExpandedOutsideWork(null);
      }
    };

    window.addEventListener("pointerdown", handlePointerDown);
    return () => window.removeEventListener("pointerdown", handlePointerDown);
  }, [expandedOutsideWork]);

  return (
    <div
      className={`relative overflow-hidden transition-colors duration-300 ${
        getPageSurfaceClass(isDark)
      } ${isDark ? "text-[#f5f1ea]" : "text-[#171717]"
      }`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-multiply dark:mix-blend-screen"
        style={{ backgroundImage: getPaperTexture(isDark) }}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 ${getPageSurfaceOverlayClass(isDark)}`}
      />
      <main className="mx-auto max-w-[840px] px-6 pb-24 pt-32 md:px-7 md:pt-36">
        <motion.section
          id="intro"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="mb-20 md:mb-24"
        >
          <div className="mb-4 flex items-center gap-3">
            <div
              className={`h-12 w-12 shrink-0 overflow-hidden rounded-full border ${
                isDark ? "border-white/10 bg-white/6" : "border-black/8 bg-black/[0.03]"
              }`}
            >
              <ImageWithFallback
                src={profilePhoto}
                alt="Jagriti Sood"
                className="h-full w-full scale-[1.24] rounded-full object-cover object-[center_24%]"
              />
            </div>
            <div className="min-w-0">
              <p className={`text-[15px] font-medium ${isDark ? "text-white" : "text-[#171717]"}`}>
                Jagriti Sood
              </p>
              <p className={`-mt-0.5 text-[15px] leading-[1.2] ${isDark ? "text-white/58" : "text-[#171717]/62"}`}>
                UX Designer · 5 years experience
              </p>
            </div>
          </div>

          <div
            className={`mb-5 inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[12px] font-medium leading-5 ${
              isDark
                ? "bg-white/[0.03] text-white/80"
                : "bg-black/[0.025] text-[#171717]/80"
            }`}
          >
            <span className="relative inline-flex h-3 w-3 items-center justify-center">
              <motion.span
                aria-hidden="true"
                className={`absolute h-3 w-3 rounded-full ${
                  isDark ? "bg-[#8fd39b]/30" : "bg-[#4f7a57]/22"
                }`}
                animate={{ scale: [1, 1.9, 1], opacity: [0.55, 0, 0.55] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
              <span
                className={`relative h-2 w-2 rounded-full ${
                  isDark ? "bg-[#9ed0a8]" : "bg-[#4f7a57]"
                }`}
              />
            </span>
            <span>Available now for full-time roles</span>
          </div>

          <h1
            className={`mb-5 max-w-[14ch] text-[clamp(2.7rem,8vw,3.85rem)] font-semibold leading-[0.98] tracking-[-0.045em] md:max-w-[18ch] ${
              isDark ? "text-white" : "text-[#171717]"
            }`}
          >
            Designing experiences
            <br />
            <span className="md:whitespace-nowrap">
              that{" "}
              <span className="font-editorial text-[1.06em] italic tracking-[-0.01em]">
                feel right.
              </span>
            </span>
          </h1>

          <div
            className={`max-w-[41rem] space-y-4 text-base leading-[1.65] ${
              isDark ? "text-white/72" : "text-[#171717]/72"
            }`}
          >
            <p>
              I’m Jagriti, a UX designer with{" "}
              <span className="font-editorial text-[1.08em] font-semibold italic tracking-[0.01em]">
                5 years of experience
              </span>{" "}
              across healthcare, ad-tech, and B2B software. I’m currently
              available and looking for my next{" "}
              <span className="font-editorial text-[1.08em] font-semibold italic tracking-[0.01em]">
                full-time role.
              </span>
            </p>
            <p>
              I redesign messy product experiences so they feel{" "}
              <span className="font-editorial text-[1.08em] font-semibold italic tracking-[0.01em]">
                clearer, calmer, and easier to use.
              </span>{" "}
              Previously I’ve worked with teams at 101 Healthcare, Maple Code,
              Source Digital, and Bajaj Finserv Health. You can reach me at{" "}
              <a
                href="mailto:jagritisood30@gmail.com"
                className={`inline-flex items-center gap-[0.28rem] text-[0.98em] ${
                  isDark ? "text-white" : "text-[#171717]"
                }`}
              >
                <BootstrapEnvelopeFillIcon className="relative top-[0.5px] h-[0.82em] w-[0.82em] shrink-0 opacity-85" />
                <span className="underline decoration-[0.06em] underline-offset-[0.14em]">
                  email
                </span>
              </a>{" "}
              or connect on{" "}
              <a
                href="https://linkedin.com/in/jagriti-sood"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-[0.28rem] text-[0.98em] ${
                  isDark ? "text-white" : "text-[#171717]"
                }`}
              >
                <BootstrapLinkedInIcon className="relative top-[0.5px] h-[0.82em] w-[0.82em] shrink-0 opacity-85" />
                <span className="underline decoration-[0.06em] underline-offset-[0.14em]">
                  LinkedIn
                </span>
              </a>
              .
            </p>
          </div>
        </motion.section>

        <section id="work" className="mb-24 md:mb-28 scroll-mt-36 md:scroll-mt-40">
          <div className="mb-5">
            <h2 className={`text-base font-medium ${isDark ? "text-white" : "text-[#171717]"}`}>
              Work
            </h2>
          </div>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: EASE }}
              >
                {(() => {
                  const isMaple = project.caseStudyUrl === "/work/maplecode";
                  return (
                <Link
                  to={project.caseStudyUrl}
                  className={`group grid gap-4 rounded-[16px] border p-3 transition-colors duration-200 md:grid-cols-[236px_minmax(0,1fr)] md:items-start ${
                    isDark
                      ? "border-white/10 bg-white/[0.02]"
                      : "border-black/8 bg-white/55"
                  }`}
                >
                  <div
                    className="relative overflow-hidden rounded-[12px] border"
                    style={{
                      background: isDark ? project.cardBgDark : project.cardBgLight,
                      borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="aspect-[1.15/0.82] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      style={{
                        filter: isMaple ? "blur(10px) brightness(0.72) saturate(0.78)" : undefined,
                        transform: isMaple ? "scale(1.06)" : undefined,
                      }}
                    />
                    {isMaple && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/18 backdrop-blur-[2px]">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/18 bg-white/10">
                          <Lock size={18} className="text-white/88" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <p className={`mb-1 text-[12px] ${isDark ? "text-white/46" : "text-[#171717]/46"}`}>
                        {project.industry}
                      </p>
                      <h3 className={`text-base font-medium leading-6 ${isDark ? "text-white" : "text-[#171717]"}`}>
                        {project.title}
                      </h3>
                      <p className={`mt-1 text-[15px] leading-6 ${isDark ? "text-white/58" : "text-[#171717]/58"}`}>
                        {project.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.impact.map((item) => (
                          <span
                            key={item}
                            className={`whitespace-nowrap rounded-full px-2.5 py-1 text-[12px] ${
                              isDark
                                ? "bg-white/6 text-white/56"
                                : "bg-black/[0.045] text-[#171717]/56"
                            }`}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ArrowUpRight
                      size={15}
                      className={`mt-1 shrink-0 ${isDark ? "text-white/50" : "text-[#171717]/48"}`}
                    />
                  </div>
                </Link>
                  );
                })()}
              </motion.div>
            ))}
          </div>
        </section>

        <section id="experience" className="mb-24 md:mb-28 scroll-mt-36 md:scroll-mt-40">
          <h2 className={`mb-5 text-base font-medium ${isDark ? "text-white" : "text-[#171717]"}`}>
            Experience
          </h2>
          <div>
            {experience.map((item) => (
              <div
                key={`${item.company}-${item.period}`}
                className={`grid gap-1.5 py-4 md:grid-cols-[120px_minmax(0,1fr)_minmax(0,1fr)] md:items-baseline md:gap-8 ${
                  isDark ? "text-white/68" : "text-[#171717]/68"
                } ${
                  item !== experience[experience.length - 1]
                    ? isDark
                      ? "border-b border-white/8"
                      : "border-b border-black/8"
                    : ""
                }`}
              >
                <p
                  className={`text-[13px] leading-6 md:pt-0.5 ${
                    isDark ? "text-white/42" : "text-[#171717]/42"
                  }`}
                >
                  {item.period}
                </p>
                <p className={`text-[15px] font-medium leading-6 ${isDark ? "text-white" : "text-[#171717]"}`}>
                  {item.company}
                </p>
                <p className="text-[14px] leading-6 md:text-[15px] md:text-right">
                  {item.role}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="outside-work" className="mb-24 md:mb-28">
          <h2 className={`mb-2 text-base font-medium ${isDark ? "text-white" : "text-[#171717]"}`}>
            Outside Work
          </h2>
          <p className={`mb-5 max-w-[38rem] text-[15px] leading-6 ${isDark ? "text-white/58" : "text-[#171717]/58"}`}>
            Outside product design, I spend time making things by hand. That
            practice feeds back into my work: patience, material sensitivity,
            and a stronger eye for finish.
          </p>
          <div
            ref={outsideWorkRef}
            className="grid grid-cols-4 gap-1.5 sm:grid-cols-5 sm:gap-2"
          >
            {outsideWork.map((item, index) => (
              <button
                key={`${item.label}-${index}`}
                type="button"
                onClick={() =>
                  setExpandedOutsideWork((current) => (current === index ? null : index))
                }
                className={`group relative aspect-square overflow-visible rounded-[9px] text-left transition-all duration-300 ${
                  expandedOutsideWork === index ? "z-10" : "z-0"
                }`}
                aria-pressed={expandedOutsideWork === index}
              >
                <span
                  className={`block h-full w-full overflow-hidden rounded-[9px] shadow-[0_6px_18px_rgba(0,0,0,0.08)] transition-all duration-300 ${
                    expandedOutsideWork === index
                      ? isDark
                        ? "scale-[1.75] shadow-[0_26px_64px_rgba(0,0,0,0.52)]"
                        : "scale-[1.75] shadow-[0_26px_64px_rgba(40,28,18,0.24)]"
                      : "scale-100"
                  }`}
                >
                  <ImageWithFallback
                    src={item.image}
                    alt={item.label}
                    className="h-full w-full rounded-[inherit] object-cover"
                  />
                </span>
              </button>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-36 md:scroll-mt-40">
          <h2 className={`mb-5 text-base font-medium ${isDark ? "text-white" : "text-[#171717]"}`}>
            Contact
          </h2>
          <p className={`max-w-[38rem] text-base leading-[1.65] ${isDark ? "text-white/72" : "text-[#171717]/72"}`}>
            Open to full-time roles, contract work, and thoughtful teams
            building digital products. Reach out by{" "}
            <a
              href="mailto:jagritisood30@gmail.com"
              className={`underline underline-offset-4 ${isDark ? "text-white" : "text-[#171717]"}`}
            >
              email
            </a>{" "}
            or view my{" "}
            <a
              href="https://drive.google.com/file/d/1-H4f0bjV999U0hn-z_-sb7cGnwY52sju/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={`underline underline-offset-4 ${isDark ? "text-white" : "text-[#171717]"}`}
            >
              resume
            </a>
            .
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="mailto:jagritisood30@gmail.com"
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors ${
                isDark
                  ? "bg-white text-[#111111] hover:bg-[#ebe3d7]"
                  : "bg-[#171717] text-white hover:bg-[#2b2b2b]"
              }`}
            >
              <Mail size={14} />
              Email me
            </a>
            <a
              href="https://linkedin.com/in/jagriti-sood"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
                isDark
                  ? "border-white/12 text-white/76 hover:border-white/22 hover:text-white"
                  : "border-black/12 text-[#171717]/76 hover:border-black/22 hover:text-[#171717]"
              }`}
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
