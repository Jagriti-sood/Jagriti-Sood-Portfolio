import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import profilePhoto from "figma:asset/8c07fac08dfabb5a554111b06c11c12cb5296766.png";
import { ArrowUpRight } from "lucide-react";

interface AboutProps {
  isDark: boolean;
}

const tools = [
  { name: "Figma", category: "Design" },
  { name: "Maze", category: "Research" },
  { name: "Hotjar", category: "Analytics" },
  { name: "Notion", category: "Strategy" },
  { name: "Miro", category: "Workshops" },
  { name: "Zeplin", category: "Handoff" },
  { name: "AI Assisted Design", category: "Emerging" },
  { name: "Vibe Coding", category: "Emerging" },
];

export function About({ isDark }: AboutProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      className={`py-24 md:py-32 px-6 md:px-10 ${isDark ? "bg-[#0a0a0f]" : "bg-white"}`}
    >
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-start"
        >
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1 lg:sticky lg:top-28"
          >
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/5]">
              <ImageWithFallback
                src={profilePhoto}
                alt="Jagriti Sood - UX Designer"
                className="w-full h-full object-cover"
              />
              {/* Film grain overlay */}
              <div
                className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
                style={{
                  background: "linear-gradient(160deg, rgba(107,127,196,0.15) 0%, rgba(74,155,142,0.1) 60%, transparent 100%)",
                }}
              />
            </div>

            {/* Floating availability card */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className={`absolute -bottom-4 left-4 right-4 md:left-6 md:right-6 p-4 rounded-2xl border shadow-xl ${
                isDark ? "bg-[#111118] border-white/10" : "bg-white border-gray-100"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <div>
                    <p
                      className={`text-xs font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      Available for new roles
                    </p>
                    <p
                      className={`text-[10px] ${isDark ? "text-white/40" : "text-gray-400"}`}
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      Open to full-time · remote or hybrid
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-7 h-7 rounded-full bg-gradient-to-br from-[#E8699A] to-[#C2547C] flex items-center justify-center flex-shrink-0"
                >
                  <ArrowUpRight size={12} className="text-white" />
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 pt-0 lg:pt-4"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px" style={{ background: "#4A9B8E" }} />
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "#4A9B8E", fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                The Person Behind the Work
              </span>
            </div>

            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Designing like{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #E8699A, #C2547C)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                someone's experience
              </span>{" "}
              depends on it. Because it does.
            </h2>

            <div
              className={`space-y-5 text-sm leading-relaxed mb-10 ${
                isDark ? "text-white/58" : "text-gray-500"
              }`}
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              <p>
                I got into UX because I couldn't stop noticing when things didn't work. A hospital
                website making patients more anxious. A dashboard making smart people feel stupid.
                A form so badly designed it cost someone an hour of their life. I kept thinking:{" "}
                <em className={isDark ? "text-white/80 not-italic font-medium" : "text-gray-700 not-italic font-medium"}>someone should fix that.</em>
              </p>
              <p>
                I've spent the last 5 years being that someone. My work spans healthcare, ad-tech,
                B2B platforms, and event technology - always grounded in the same belief: good design
                isn't about aesthetics. It's about making people feel capable, confident, and seen.
              </p>
              <p>
                I think in systems, not screens. I ask "why" before I ask "what." And I don't
                consider a project done until real users have told me it works - not with words, but
                with behavior.
              </p>
              <p>
                Outside the screen, I make hand-poured candles. Turns out the obsession over scent
                throw, burn time, and vessel choice is more UX than most people realise - the
                discipline of getting an experience <em className={isDark ? "text-white/80 not-italic font-medium" : "text-gray-700 not-italic font-medium"}>exactly right</em>, every single time.
              </p>
            </div>

            {/* Tools */}
            <div className="mb-10">
              <p
                className={`text-[10px] font-bold tracking-widest uppercase mb-4 ${
                  isDark ? "text-white/35" : "text-gray-400"
                }`}
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                My Stack
              </p>
              <div className="grid grid-cols-3 gap-2">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className={`flex flex-col p-3 rounded-xl border transition-all hover:border-[#E8699A]/40 ${
                      isDark
                        ? "border-white/8 bg-white/3"
                        : "border-gray-100 bg-gray-50"
                    }`}
                  >
                    <span
                      className={`text-[10px] font-medium mb-0.5 ${isDark ? "text-white/30" : "text-gray-300"}`}
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      {tool.category}
                    </span>
                    <span
                      className={`text-xs font-semibold ${isDark ? "text-white/75" : "text-gray-700"}`}
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#E8699A] to-[#C2547C] text-white text-sm font-semibold hover:opacity-90 transition-all"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                Let's Work Together
              </button>
              <a
                href="https://drive.google.com/file/d/1-H4f0bjV999U0hn-z_-sb7cGnwY52sju/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold border transition-all ${
                  isDark
                    ? "border-white/12 text-white/70 hover:text-white hover:border-white/25"
                    : "border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300"
                }`}
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
