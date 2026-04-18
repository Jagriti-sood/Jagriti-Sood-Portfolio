import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import avatar from "@/assets/avatar.webp";

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1mfKm_SgYF3CDsRvUl2ryqh6u_Jte8Lzt/view?usp=drivesdk",
    external: true,
  },
];

export function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const location = useLocation();
  const navigate = useNavigate();
  const isCaseStudy = location.pathname !== "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["hero", "work", "about", "experience", "contact"];
    const handleScroll = () => {
      const triggerY = window.innerHeight * 0.35;
      let current = "hero";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= triggerY) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    if (isCaseStudy) {
      navigate("/");
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? isDark
              ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/10"
              : "bg-white/90 backdrop-blur-xl border-b border-black/8"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => {
              setMenuOpen(false);
              if (isCaseStudy) {
                navigate("/");
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center gap-2 group"
          >
            <img
              src={avatar}
              alt="Jagriti Sood"
              className="w-8 h-8 rounded-lg object-cover flex-shrink-0"
              style={{
                boxShadow: isDark
                  ? "0 0 0 1px rgba(255,255,255,0.16), 0 4px 12px rgba(0,0,0,0.4)"
                  : "0 0 0 1px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.08)",
              }}
            />
            <span
              className={`text-base font-semibold tracking-tight transition-colors ${
                isDark ? "text-white/75" : "text-gray-600"
              }`}
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Jagriti Sood
            </span>
          </button>

          {/* Desktop Center Nav — only on homepage */}
          {!isCaseStudy && (
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                      isDark
                        ? "text-white/60 hover:text-white"
                        : "text-gray-500 hover:text-gray-900"
                    }`}
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {link.label}
                  </a>
                ) : (
                  <button
                    key={link.href}
                    onClick={() => handleNav(link.href)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                      activeSection === link.href.slice(1)
                        ? "text-[#E8699A]"
                        : isDark
                        ? "text-white/60 hover:text-white"
                        : "text-gray-500 hover:text-gray-900"
                    }`}
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {activeSection === link.href.slice(1) && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-[#E8699A]/10 rounded-full"
                        style={{ zIndex: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 35,
                          mass: 0.8,
                        }}
                      />
                    )}
                  </button>
                )
              )}
            </div>
          )}

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* On case study pages: show Resume link */}
            {isCaseStudy && (
              <a
                href="https://drive.google.com/file/d/1mfKm_SgYF3CDsRvUl2ryqh6u_Jte8Lzt/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className={`hidden md:inline-flex text-sm font-medium transition-colors px-4 py-2 rounded-full ${
                  isDark
                    ? "text-white/55 hover:text-white"
                    : "text-gray-500 hover:text-gray-900"
                }`}
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                Resume
              </a>
            )}

            {/* Theme Toggle */}
            <button
              onClick={onToggleTheme}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${
                isDark
                  ? "bg-white/10 hover:bg-white/20 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Let's Talk CTA — always visible on desktop */}
            <button
              onClick={() => {
                if (isCaseStudy) {
                  navigate("/#contact");
                } else {
                  handleNav("#contact");
                }
              }}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#E8699A] to-[#C2547C] text-white text-sm font-medium hover:opacity-90 transition-all duration-200"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Let's Talk
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${
                isDark
                  ? "bg-white/10 hover:bg-white/20 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={`fixed top-16 left-0 right-0 z-40 md:hidden ${
              isDark
                ? "bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/10"
                : "bg-white/95 backdrop-blur-xl border-b border-black/10"
            }`}
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {isCaseStudy ? (
                <>
                  <a
                    href="https://drive.google.com/file/d/1mfKm_SgYF3CDsRvUl2ryqh6u_Jte8Lzt/view?usp=drivesdk"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isDark
                        ? "text-white/80 hover:text-white hover:bg-white/5"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    Resume
                  </a>
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      navigate("/#contact");
                    }}
                    className="mt-1 px-5 py-3 rounded-xl bg-gradient-to-r from-[#E8699A] to-[#C2547C] text-white text-sm font-medium text-center"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    Let's Talk
                  </button>
                </>
              ) : (
                navLinks.map((link) =>
                  link.external ? (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMenuOpen(false)}
                      className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isDark
                          ? "text-white/80 hover:text-white hover:bg-white/5"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      }`}
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <button
                      key={link.href}
                      onClick={() => handleNav(link.href)}
                      className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isDark
                          ? "text-white/80 hover:text-white hover:bg-white/5"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      }`}
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      {link.label}
                    </button>
                  )
                )
              )}

              {!isCaseStudy && (
                <button
                  onClick={() => handleNav("#contact")}
                  className="mt-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#E8699A] to-[#C2547C] text-white text-sm font-medium text-center"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  Let's Talk
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
