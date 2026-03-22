import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "../context/ThemeContext";

export function PageLoader() {
  const { isDark } = useTheme();
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const p = Math.min(elapsed / duration, 1);
      // ease-out cubic so it rushes in then slows to 100%
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(eased * 100);

      if (p < 1) {
        requestAnimationFrame(tick);
      } else {
        setProgress(100);
        setTimeout(() => setDone(true), 180);
      }
    };

    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.72, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-8"
          style={{ background: isDark ? "#0a0a0f" : "#ffffff" }}
        >
          {/* Brand mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="w-14 h-14 rounded-[13px] bg-gradient-to-br from-[#E8699A] to-[#C2547C] flex items-center justify-center shadow-lg"
            style={{ boxShadow: "0 8px 32px rgba(232,105,154,0.3)" }}
          >
            <span
              className="text-white text-lg font-bold"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              JS
            </span>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.3 }}
            className="w-28 h-[2px] rounded-full overflow-hidden"
            style={{ background: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)" }}
          >
            <div
              className="h-full rounded-full"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, #E8699A, #C2547C)",
                transition: "width 0.04s linear",
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
