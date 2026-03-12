import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ThemeProvider, useTheme } from "../context/ThemeContext";
import { useFavicon } from "../hooks/useFavicon";

function Layout() {
  const { isDark, toggleTheme } = useTheme();
  useFavicon();

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
