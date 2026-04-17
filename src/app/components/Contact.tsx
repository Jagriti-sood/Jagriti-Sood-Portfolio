import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Mail, Linkedin, ArrowUpRight, CheckCircle } from "lucide-react";
import { VIEWPORT, fadeUp, stagger, iconSwap } from "../lib/motion";

interface ContactProps {
  isDark: boolean;
}

export function Contact({ isDark }: ContactProps) {
  const ref = useRef(null);
  const inView = useInView(ref, VIEWPORT);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    const email = "jagritisood30@gmail.com";
    // Try the modern Clipboard API first; fall back to execCommand for sandboxed iframes
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).catch(() => fallbackCopy(email));
    } else {
      fallbackCopy(email);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const fallbackCopy = (text: string) => {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try {
      document.execCommand("copy");
    } catch {}
    document.body.removeChild(ta);
  };

  return (
    <section
      id="contact"
      className={`py-20 md:py-32 px-6 md:px-10 relative overflow-hidden ${
        isDark ? "bg-[#0a0a0f]" : "bg-white"
      }`}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, #E8699A 0%, #C2547C 40%, transparent 70%)",
            filter: "blur(80px)",
            opacity: isDark ? 0.07 : 0.05,
          }}
        />
      </div>

      <div ref={ref} className="max-w-6xl mx-auto relative z-10 text-center">
        <motion.div
          variants={stagger(0.09)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-6">
            <div className="w-6 h-px bg-[#E8699A]" />
            <span
              className="text-xs font-semibold tracking-widest uppercase text-[#E8699A]"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Open to Opportunities
            </span>
            <div className="w-6 h-px bg-[#E8699A]" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            You've seen the work.
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #E8699A, #C2547C)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Let's talk
            </span>{" "}
            about yours.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className={`text-base max-w-xl mx-auto leading-relaxed mb-10 ${
              isDark ? "text-white/55" : "text-gray-500"
            }`}
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            If you're building something that genuinely matters to people - I want to hear about it.{" "}
            <span className={`font-medium ${isDark ? "text-white/75" : "text-gray-700"}`}>
              No pitch deck. Just a conversation.
            </span>
          </motion.p>

          {/* Email copy block */}
          <motion.button
            variants={fadeUp}
            onClick={handleCopyEmail}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`group w-full max-w-sm mx-auto flex items-center justify-between gap-3 px-5 py-4 rounded-2xl border transition-all duration-200 mb-10 ${
              isDark
                ? "border-white/10 bg-white/4 hover:border-white/20 hover:bg-white/7"
                : "border-gray-100 bg-gray-50 hover:border-gray-200 hover:bg-gray-100"
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E8699A] to-[#C2547C] flex items-center justify-center flex-shrink-0">
                <Mail size={14} className="text-white" />
              </div>
              <span
                className={`text-sm font-medium truncate ${isDark ? "text-white/75" : "text-gray-600"}`}
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                jagritisood30@gmail.com
              </span>
            </div>
            <span
              className={`text-xs font-semibold flex-shrink-0 flex items-center gap-1.5 transition-colors duration-200 ${
                copied
                  ? "text-green-500"
                  : isDark
                  ? "text-white/35 group-hover:text-white/70"
                  : "text-gray-300 group-hover:text-gray-600"
              }`}
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {copied ? (
                  <motion.span
                    key="copied"
                    variants={iconSwap}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="flex items-center gap-1.5"
                  >
                    <CheckCircle size={13} />
                    Copied!
                  </motion.span>
                ) : (
                  <motion.span
                    key="copy"
                    variants={iconSwap}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                  >
                    Copy
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
          </motion.button>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="mailto:jagritisood30@gmail.com"
              className="group flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#E8699A] to-[#C2547C] text-white text-sm font-semibold hover:opacity-90 transition-all"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              <Mail size={15} />
              Send me an email
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="https://linkedin.com/in/jagriti-sood"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold border transition-all ${
                isDark
                  ? "border-white/12 text-white/75 hover:text-white hover:border-white/25 bg-white/4 hover:bg-white/8"
                  : "border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300 bg-white hover:bg-gray-50"
              }`}
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              <Linkedin size={15} />
              View LinkedIn Profile
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}