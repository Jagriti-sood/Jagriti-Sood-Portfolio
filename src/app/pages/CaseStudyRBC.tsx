import { useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { ArrowLeft, ArrowUpRight, Expand, LayoutGrid } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { useTheme } from "../context/ThemeContext";
import { useProtectedStudy } from "../context/ProtectedStudyContext";
import type { CaseStudyFigure } from "../lib/protected-case-study.mjs";
import { groupAtRoute, projectAtRoute, projectsInGroup, protectedGroups, protectedProjects } from "../lib/protected-projects";
import NotFound from "./NotFound";

function Figure({ figure, images, eager = false }: { figure: CaseStudyFigure; images: Record<string, string>; eager?: boolean }) {
  return (
    <figure className={`protected-study-figure${figure.format ? ` protected-study-screen protected-study-screen-${figure.format}` : ""}`}>
      {figure.format ? <Dialog>
        <DialogTrigger asChild>
          <button className="protected-study-screen-trigger" aria-label={`Expand ${figure.label ?? "design"}`}>
            <span className="protected-study-screen-image"><img src={images[figure.asset]} alt={figure.alt} loading={eager ? "eager" : "lazy"} /></span>
            <span className="protected-study-screen-action">{figure.label ?? "View full design"}<Expand size={16} aria-hidden="true" /></span>
          </button>
        </DialogTrigger>
        <DialogContent
          className="protected-design-viewer border-gray-100 bg-white text-gray-900 outline-none dark:border-white/[0.08] dark:bg-[#0a0a0f] dark:text-white"
          aria-describedby={undefined}
          // Focus the dialog rather than the scroll area, which would otherwise draw
          // an outline around the whole design as soon as it opens.
          onOpenAutoFocus={(event) => { event.preventDefault(); (event.target as HTMLElement).focus(); }}
        >
          <DialogTitle className="pr-8 text-gray-900 dark:text-white">{figure.label ?? "Design detail"}</DialogTitle>
          <div className={`protected-design-viewer-scroll protected-design-viewer-${figure.format}`} tabIndex={0} role="region" aria-label="Scrollable full design">
            <img src={images[figure.asset]} alt={figure.alt} />
          </div>
        </DialogContent>
      </Dialog> : <img src={images[figure.asset]} alt={figure.alt} loading={eager ? "eager" : "lazy"} />}
      {figure.caption && <figcaption>{figure.caption}</figcaption>}
    </figure>
  );
}

export default function CaseStudyRBC() {
  const { isDark } = useTheme();
  const access = useProtectedStudy();
  const navigate = useNavigate();
  const location = useLocation();
  // `/work/rbc` opens the group's picker; `/work/rbc/<study>` opens one study.
  const projectId = projectAtRoute(location.pathname);
  const groupRoute = groupAtRoute(location.pathname);
  const isUnknownStudy = !projectId && !groupRoute;
  const group = projectId ? protectedProjects[projectId].group : groupRoute ?? "rbc";
  const heading = useRef<HTMLHeadingElement>(null);
  const anyUnlocked = access?.unlocked ?? null;
  const unlocked = anyUnlocked?.projectId === projectId ? anyUnlocked : null;
  const openGroup = access?.openGroup;
  const resumeStudy = access?.resumeStudy;

  useEffect(() => {
    if (isUnknownStudy) return;
    if (!unlocked) {
      // Another study is still in memory while navigation to it commits.
      if (anyUnlocked) return;
      // Back/Forward between studies: the password is still in memory, so open this one in place.
      if (projectId && resumeStudy?.(projectId)) return;
      navigate("/#work", { replace: true });
      openGroup?.(group, projectId);
      return;
    }
    window.scrollTo(0, 0);
    heading.current?.focus({ preventScroll: true });
    const previousTitle = document.title;
    document.title = `RBC · ${unlocked.study.title} | Jagriti Sood`;
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex, nofollow, noarchive";
    document.head.appendChild(robots);
    return () => { document.title = previousTitle; robots.remove(); };
  }, [isUnknownStudy, unlocked, anyUnlocked, navigate, openGroup, resumeStudy, group, projectId]);

  if (isUnknownStudy) return <NotFound />;
  if (!unlocked || !access) return null;
  const hasOtherStudies = projectsInGroup(group).length > 1;
  return (
    <div className={`protected-study ${isDark ? "protected-study-dark" : ""}`}>
        <article className="protected-study-content">
          <header className="protected-study-hero">
            <div className="protected-study-unlocked-bar"><p className="protected-study-eyebrow">RBC · Private case study</p></div>
            <ul className="protected-study-tags" aria-label="Project disciplines">{unlocked.study.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            <h1 ref={heading} tabIndex={-1}>{unlocked.study.title}<span>{unlocked.study.subtitle}</span></h1>
            <p className="protected-study-summary">{unlocked.study.summary}</p>
            <dl className="protected-study-meta">{unlocked.study.meta.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl>
            {unlocked.study.cover && <Figure figure={unlocked.study.cover} images={unlocked.images} eager />}
          </header>
          <nav className="protected-study-contents" aria-label="In this case study">{unlocked.study.sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.label}</a>)}</nav>
          {unlocked.study.sections.map((section, index) => (
            <section className="protected-study-section" id={section.id} key={section.id} aria-labelledby={`${section.id}-title`}>
              <div className="protected-study-section-intro">
              <div>
              <p className="protected-study-eyebrow">{String(index + 1).padStart(2, "0")} · {section.label}</p>
              <h2 id={`${section.id}-title`}>{section.title}</h2>
              </div>
              <div className="protected-study-section-text">
              {section.paragraphs.map((paragraph, i) => <p className="protected-study-paragraph" key={i}>{paragraph}</p>)}
              </div>
              </div>
              {section.decisions && <div className="protected-study-decisions">
                <div className="protected-study-decision-heading" aria-hidden="true">{(section.decisionLabels ?? ["What the research suggested", "Design response"]).map((label) => <span key={label}>{label}</span>)}</div>
                <dl>{section.decisions.map((decision) => <div key={decision.observation}><dt>{decision.observation}</dt><dd>{decision.response}</dd></div>)}</dl>
              </div>}
              {section.points && <div className="protected-study-points">{section.points.map((point) => <div key={point.title}><h3>{point.title}</h3>{point.body && <p>{point.body}</p>}</div>)}</div>}
              {section.quote && <blockquote>{section.quote}</blockquote>}
              {section.figures?.map((figure) => <Figure key={figure.asset} figure={figure} images={unlocked.images} />)}
              {section.links && <div className="protected-study-design-links">{section.links.filter((link) => {
                try { return new URL(link.href).origin === "https://www.figma.com"; } catch { return false; }
              }).map((link) => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}<ArrowUpRight size={16} aria-hidden="true" /></a>)}</div>}
            </section>
          ))}
          <footer className="protected-study-end">
            <Link to="/#work"><ArrowLeft size={17} aria-hidden="true" /> More selected work</Link>
            {hasOtherStudies && <button onClick={() => access.openGroup(group)} aria-haspopup="dialog"><LayoutGrid size={16} aria-hidden="true" /> All {protectedGroups[group].title}</button>}
          </footer>
        </article>
    </div>
  );
}
