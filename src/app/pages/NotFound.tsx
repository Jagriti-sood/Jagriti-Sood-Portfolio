import { Link } from "react-router";
import { useTheme } from "../context/ThemeContext";
import { motion } from "motion/react";

export default function NotFound() {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-[80vh] flex items-center justify-center px-6 ${isDark ? "bg-[#0a0a0f]" : "bg-white"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-md"
      >
        <p
          className="text-8xl font-bold mb-4"
          style={{
            fontFamily: "Playfair Display, serif",
            background: "linear-gradient(125deg, #E8699A, #C2547C)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </p>
        <h1
          className={`text-2xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Page not found
        </h1>
        <p className={`text-sm mb-8 ${isDark ? "text-white/50" : "text-gray-500"}`}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-85 hover:scale-[0.98]"
          style={{ background: "linear-gradient(135deg, #E8699A, #C2547C)" }}
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
