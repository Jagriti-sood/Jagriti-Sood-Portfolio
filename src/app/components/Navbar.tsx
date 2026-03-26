import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { ArrowLeft, Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { getPaperTexture } from "../lib/surfaces";

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const SECTION_SCROLL_OFFSET = 56;

export function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isCaseStudy = location.pathname !== "/";

  useEffect(() => {
    const updateScrolled = () => {
      setIsScrolled(window.scrollY > 12);
    };

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  useEffect(() => {
    if (isCaseStudy) return;

    const sectionIds = navLinks.map((link) => link.href);

    const updateActiveSection = () => {
      const navHeight = document.querySelector("nav")?.getBoundingClientRect().height ?? 0;
      const probeY = window.scrollY + navHeight + 48;
      const viewportBottom = window.scrollY + window.innerHeight;
      const pageBottom = document.documentElement.scrollHeight;

      let currentSection: string | null = null;

      if (pageBottom - viewportBottom < 140) {
        setActiveSection(sectionIds[sectionIds.length - 1] ?? null);
        return;
      }

      for (const sectionId of sectionIds) {
        const section = document.querySelector(sectionId);
        if (!section) continue;

        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        if (probeY >= sectionTop) {
          currentSection = sectionId;
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [isCaseStudy]);

  const handleNav = (href: string) => {
    setMenuOpen(false);

    if (isCaseStudy) {
      navigate(`/${href}`);
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const navHeight = document.querySelector("nav")?.getBoundingClientRect().height ?? 0;
      const top = element.getBoundingClientRect().top + window.scrollY - navHeight - SECTION_SCROLL_OFFSET;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? isDark
              ? "border-b border-white/8 bg-[#111111]/72 backdrop-blur-lg"
              : "border-b border-black/8 bg-[#f6f0e8]/92 backdrop-blur-xl"
            : isDark
              ? "bg-transparent"
              : "bg-transparent"
        }`}
      >
        {isScrolled && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-multiply dark:mix-blend-screen"
            style={{ backgroundImage: getPaperTexture(isDark) }}
          />
        )}
        <div
          className="relative mx-auto flex w-full max-w-[1240px] items-center justify-between px-8 py-4 md:px-10 lg:px-12"
        >
            <div className="flex items-center gap-8">
            <motion.button
              layout
              onClick={() => {
                setMenuOpen(false);
                if (isCaseStudy) {
                  navigate("/");
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              transition={{ layout: { duration: 0.32, ease: [0.22, 1, 0.36, 1] } }}
              className="text-left"
            >
              <motion.span
                layout
                transition={{ layout: { duration: 0.32, ease: [0.22, 1, 0.36, 1] } }}
                className={`inline-flex h-10 items-center overflow-hidden ${
                  isCaseStudy
                    ? `gap-2 rounded-full px-2.5 ${
                        isDark
                          ? "bg-white/[0.06] text-white/78 hover:bg-white/[0.1] hover:text-white"
                          : "bg-black/[0.04] text-[#171717]/76 hover:bg-black/[0.065] hover:text-[#171717]"
                      }`
                    : ""
                }`}
              >
                <motion.span
                  layout
                  transition={{ layout: { duration: 0.32, ease: [0.22, 1, 0.36, 1] } }}
                  className={`inline-flex shrink-0 items-center justify-center ${
                    isCaseStudy
                      ? `h-6 w-6 rounded-full ${
                          isDark ? "bg-white/[0.08]" : "bg-white/72"
                        }`
                      : `font-brand-mark h-10 w-10 rounded-[14px] border text-[1rem] font-bold tracking-[-0.07em] ${
                          isDark
                            ? "border-white/10 bg-white/[0.05] text-white/92"
                            : "border-black/8 bg-white/72 text-[#2b241d]"
                        }`
                  }`}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {isCaseStudy ? (
                      <motion.span
                        key="back-icon"
                        initial={{ opacity: 0, scale: 0.82, x: 4 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.82, x: -4 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="inline-flex items-center justify-center"
                      >
                        <ArrowLeft size={14} />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="brand-icon"
                        initial={{ opacity: 0, scale: 0.88 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.88 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      >
                        JS
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.span>

                <AnimatePresence initial={false}>
                  {isCaseStudy && (
                    <motion.span
                      key="back-label"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      className="pr-0.5 text-[13px] font-medium"
                    >
                      Back to home
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.span>
            </motion.button>

            <div className="hidden items-center gap-7 md:flex md:absolute md:left-1/2 md:-translate-x-1/2">
              {!isCaseStudy &&
                navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNav(link.href)}
                    className={`text-[13px] transition-colors ${
                      activeSection === link.href
                        ? isDark
                          ? "text-white"
                          : "text-[#171717]"
                        : isDark
                          ? "text-white/58 hover:text-white"
                          : "text-[#171717]/58 hover:text-[#171717]"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={onToggleTheme}
              className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-[13px] transition-colors ${
                isDark
                  ? "bg-white/8 text-white/78 hover:bg-white/12 hover:text-white"
                  : "bg-black/[0.045] text-[#171717]/74 hover:bg-black/[0.07] hover:text-[#171717]"
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <a
              href="https://drive.google.com/file/d/1-H4f0bjV999U0hn-z_-sb7cGnwY52sju/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center rounded-full px-4 py-2 text-[13px] transition-colors ${
                isDark
                  ? "bg-white/92 text-[#111111] hover:bg-white"
                  : "bg-[#171717] text-white hover:bg-[#2a2a2a]"
              }`}
            >
              Resume
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onToggleTheme}
              className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                isDark
                  ? "bg-white/7 text-white hover:bg-white/12"
                  : "bg-black/[0.05] text-[#171717] hover:bg-black/[0.08]"
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <button
              onClick={() => setMenuOpen((current) => !current)}
              className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                isDark
                  ? "bg-white/7 text-white hover:bg-white/12"
                  : "bg-black/[0.05] text-[#171717] hover:bg-black/[0.08]"
              }`}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={14} /> : <Menu size={14} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-x-0 top-[64px] z-40 ${
              isDark
                ? "bg-[#111111]/82 backdrop-blur-lg"
                : "bg-[#f6f0e8]/96 backdrop-blur-xl"
            }`}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-multiply dark:mix-blend-screen"
              style={{ backgroundImage: getPaperTexture(isDark) }}
            />
            <div className="mx-auto flex max-w-[780px] flex-col gap-1 px-6 py-4">
              {!isCaseStudy &&
                navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNav(link.href)}
                    className={`rounded-[10px] px-3 py-2 text-left text-[14px] ${
                      activeSection === link.href
                        ? isDark
                          ? "bg-white/6 text-white"
                          : "bg-black/[0.045] text-[#171717]"
                        : isDark
                          ? "text-white/78 hover:bg-white/5"
                          : "text-[#171717]/78 hover:bg-black/[0.04]"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              <a
                href="https://drive.google.com/file/d/1-H4f0bjV999U0hn-z_-sb7cGnwY52sju/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className={`mt-2 inline-flex items-center justify-center rounded-full px-4 py-2 text-[14px] ${
                  isDark
                    ? "bg-white text-[#111111] hover:bg-[#ece3d7]"
                    : "bg-[#171717] text-white hover:bg-[#2a2a2a]"
                }`}
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
