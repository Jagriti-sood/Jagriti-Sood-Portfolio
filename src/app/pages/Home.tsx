import { Hero } from "../components/Hero";
import { SkillsManifesto } from "../components/SkillsManifesto";
import { Projects } from "../components/Projects";
import { About } from "../components/About";
import { Experience } from "../components/Experience";
import { Creative } from "../components/Creative";
import { Contact } from "../components/Contact";
import { useTheme } from "../context/ThemeContext";

export default function Home() {
  const { isDark } = useTheme();
  return (
    <>
      <Hero isDark={isDark} />
      <SkillsManifesto isDark={isDark} />
      <Projects isDark={isDark} />
      <About isDark={isDark} />
      <Experience isDark={isDark} />
      <Creative isDark={isDark} />
      <Contact isDark={isDark} />
    </>
  );
}