import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { PageLoader } from "./PageLoader";
import { ThemeProvider, useTheme } from "../context/ThemeContext";
import { useFavicon } from "../hooks/useFavicon";
import { getPageSurfaceClass } from "../lib/surfaces";

function Layout() {
  const { isDark, toggleTheme } = useTheme();
  useFavicon();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        getPageSurfaceClass(isDark)
      }`}
    >
      <PageLoader />
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
