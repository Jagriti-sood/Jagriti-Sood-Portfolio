import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { About } from "../components/About";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";
import { useTheme } from "../context/ThemeContext";

export default function Home() {
  const { isDark } = useTheme();
  return (
    <>
      <Hero isDark={isDark} />
      <Projects isDark={isDark} />
      <About isDark={isDark} />
      <Testimonials isDark={isDark} />
      <Contact isDark={isDark} />
    </>
  );
}