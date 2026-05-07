import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ThemeProvider, useTheme } from "../context/ThemeContext";
import { useFavicon } from "../hooks/useFavicon";

function Layout() {
  const { isDark, toggleTheme } = useTheme();
  useFavicon();
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [location.pathname, location.hash]);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-[#0a0a0f]" : "bg-white"
      }`}
    >
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
      <main>
        <Outlet />
      </main>
      <Footer isDark={isDark} />
    </div>
  );
}

export function Root() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}
