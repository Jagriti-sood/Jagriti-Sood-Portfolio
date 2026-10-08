import { createContext, useCallback, useContext, useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router";
import { ArrowUpRight, Eye, EyeOff, LoaderCircle, LockKeyhole, LockKeyholeOpen, X } from "lucide-react";
import { Button } from "../components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "../components/ui/drawer";
import { useIsMobile } from "../components/ui/use-mobile";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { decryptCaseStudy, fromBase64, type ProtectedCaseStudy } from "../lib/protected-case-study.mjs";
import {
  projectAtRoute, projectsInGroup, protectedGroups, protectedProjects,
  type ProtectedGroupId, type ProtectedProjectId,
} from "../lib/protected-projects";
import "../../styles/protected-study.css";

type UnlockedStudy = { projectId: ProtectedProjectId; study: ProtectedCaseStudy; images: Record<string, string> };
const ProtectedStudyContext = createContext<{
  unlocked: UnlockedStudy | null;
  openGroup: (group: ProtectedGroupId, projectId?: ProtectedProjectId) => void;
  openStudy: (projectId: ProtectedProjectId) => void;
  resumeStudy: (projectId: ProtectedProjectId) => boolean;
} | null>(null);
const rasterTypes = new Set(["image/png", "image/jpeg", "image/webp", "image/avif"]);

export function useProtectedStudy() {
  return useContext(ProtectedStudyContext);
}

async function fetchEnvelope(id: string, signal: AbortSignal) {
  const response = await fetch(`${import.meta.env.BASE_URL}protected/${id}.json`, {
    signal, cache: "no-cache", credentials: "omit",
  });
  if (!response.ok || !response.headers.get("content-type")?.includes("application/json")) {
    throw new Error("The case study is unavailable right now. Please try again later or request access below.");
  }
  return response.json();
}

function isWrongKey(cause: unknown) {
  return cause instanceof DOMException && cause.name === "OperationError";
}

function describeFailure(cause: unknown) {
  if (cause instanceof TypeError) return "Couldn’t load the case study. Check your connection and try again.";
  return cause instanceof Error ? cause.message : "Couldn’t open the case study. Please try again.";
}

export function ProtectedStudyProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"password" | "choose">("password");
  const [group, setGroup] = useState<ProtectedGroupId>("rbc");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openingProject, setOpeningProject] = useState<ProtectedProjectId | null>(null);
  const [error, setError] = useState("");
  const [unlocked, setUnlocked] = useState<UnlockedStudy | null>(null);
  const input = useRef<HTMLInputElement>(null);
  const chooserHeading = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const objectUrls = useRef<string[]>([]);
  const unlockedRoute = useRef<string | null>(null);
  const targetProject = useRef<ProtectedProjectId | null>(null);
  // The verified password stays in memory only while the modal is open or a
  // protected study is on screen, so visitors can switch studies without
  // retyping it. Leaving the protected routes or locking forgets it.
  const groupKey = useRef<{ group: ProtectedGroupId; password: string; thumbnails: Record<string, string> } | null>(null);
  const request = useRef<AbortController | null>(null);
  const attempt = useRef(0);
  const openingStudy = useRef(false);

  const releaseImages = useCallback(() => {
    objectUrls.current.forEach((url) => URL.revokeObjectURL(url));
    objectUrls.current = [];
  }, []);

  const forgetGroup = useCallback(() => {
    Object.values(groupKey.current?.thumbnails ?? {}).forEach((url) => URL.revokeObjectURL(url));
    groupKey.current = null;
  }, []);

  useEffect(() => () => {
    attempt.current += 1;
    request.current?.abort();
    releaseImages();
    forgetGroup();
  }, [releaseImages, forgetGroup]);

  useEffect(() => {
    // Only clear on a committed route change. Unlocking can render while a
    // lazy case-study route is still loading and the homepage is still active.
    if (unlockedRoute.current && location.pathname !== unlockedRoute.current) {
      unlockedRoute.current = null;
      setUnlocked(null);
      releaseImages();
    }
    if (!projectAtRoute(location.pathname)) forgetGroup();
  }, [location.pathname, releaseImages, forgetGroup]);

  useEffect(() => {
    if (open && step === "choose") chooserHeading.current?.focus({ preventScroll: true });
  }, [open, step]);

  const openGroup = useCallback((nextGroup: ProtectedGroupId, projectId?: ProtectedProjectId) => {
    attempt.current += 1;
    request.current?.abort();
    setLoading(false);
    setOpeningProject(null);
    setGroup(nextGroup);
    targetProject.current = projectId ?? null;
    trigger.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    openingStudy.current = false;
    setError("");
    setPassword("");
    setVisible(false);
    setStep(groupKey.current?.group === nextGroup ? "choose" : "password");
    setOpen(true);
  }, []);

  const openStudy = useCallback((projectId: ProtectedProjectId) => {
    openGroup(protectedProjects[projectId].group, projectId);
  }, [openGroup]);

  // Lets a study page reopen its study in place (browser Back/Forward between
  // studies) while the verified password is still in memory.
  const openProjectRef = useRef<(projectId: ProtectedProjectId) => Promise<void>>(async () => {});
  const resuming = useRef<ProtectedProjectId | null>(null);
  const resumeStudy = useCallback((projectId: ProtectedProjectId) => {
    if (groupKey.current?.group !== protectedProjects[projectId].group) return false;
    if (resuming.current !== projectId) {
      resuming.current = projectId;
      void openProjectRef.current(projectId).finally(() => { resuming.current = null; });
    }
    return true;
  }, []);

  function closeModal() {
    attempt.current += 1;
    request.current?.abort();
    setOpen(false);
    setPassword("");
    setVisible(false);
    setError("");
    setLoading(false);
    setOpeningProject(null);
    targetProject.current = null;
    if (!openingStudy.current && !projectAtRoute(location.pathname)) forgetGroup();
  }

  async function openProject(projectId: ProtectedProjectId) {
    const key = groupKey.current;
    if (!key) { setStep("password"); return; }
    if (unlocked?.projectId === projectId) { closeModal(); return; }
    setError("");
    setOpeningProject(projectId);
    const currentAttempt = ++attempt.current;
    request.current?.abort();
    const controller = new AbortController();
    request.current = controller;
    const urls: string[] = [];
    try {
      const envelope = await fetchEnvelope(projectId, controller.signal);
      const study = await decryptCaseStudy(envelope, key.password, projectId);
      if (currentAttempt !== attempt.current) return;
      if (!study.title || !Array.isArray(study.sections) || !study.assets) {
        throw new Error("The case-study file could not be opened. Please request access below.");
      }
      const images: Record<string, string> = {};
      for (const [name, asset] of Object.entries(study.assets)) {
        if (!rasterTypes.has(asset.mime)) throw new Error("The case-study file contains an unsupported image.");
        const url = URL.createObjectURL(new Blob([fromBase64(asset.data)], { type: asset.mime }));
        urls.push(url);
        images[name] = url;
      }
      releaseImages();
      objectUrls.current = urls;
      openingStudy.current = true;
      unlockedRoute.current = protectedProjects[projectId].route;
      setUnlocked({ projectId, study, images });
      closeModal();
      const route = protectedProjects[projectId].route;
      navigate(route, { replace: location.pathname === route });
    } catch (cause) {
      urls.forEach((url) => URL.revokeObjectURL(url));
      if (currentAttempt !== attempt.current || controller.signal.aborted) return;
      setError(isWrongKey(cause) ? "This case study couldn’t be opened with that password." : describeFailure(cause));
    } finally {
      if (currentAttempt === attempt.current) setOpeningProject(null);
    }
  }

  openProjectRef.current = openProject;

  async function unlock(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (loading || !password) return;
    setError("");
    if (!window.isSecureContext || !crypto.subtle) {
      setError("Please open this page over HTTPS to unlock the case study.");
      return;
    }
    setLoading(true);
    const currentAttempt = ++attempt.current;
    const controller = new AbortController();
    request.current = controller;
    try {
      // The group file holds no case-study content; decrypting it only confirms
      // the password before any study is downloaded.
      const envelope = await fetchEnvelope(group, controller.signal);
      const check = await decryptCaseStudy(envelope, password, group) as unknown as {
        group?: string;
        thumbnails?: Record<string, { mime: string; data: string }>;
      };
      if (currentAttempt !== attempt.current) return;
      if (check.group !== group) throw new Error("The case-study file could not be opened. Please request access below.");
      const thumbnails: Record<string, string> = {};
      for (const [id, asset] of Object.entries(check.thumbnails ?? {})) {
        if (rasterTypes.has(asset.mime)) thumbnails[id] = URL.createObjectURL(new Blob([fromBase64(asset.data)], { type: asset.mime }));
      }
      forgetGroup();
      groupKey.current = { group, password, thumbnails };
      setPassword("");
      setVisible(false);
      setLoading(false);
      setStep("choose");
      if (targetProject.current) void openProject(targetProject.current);
    } catch (cause) {
      if (currentAttempt !== attempt.current || controller.signal.aborted) return;
      if (isWrongKey(cause)) {
        setError("Incorrect password. Please try again.");
        input.current?.focus({ preventScroll: true });
        input.current?.select();
      } else {
        setError(describeFailure(cause));
      }
    } finally {
      if (currentAttempt === attempt.current) setLoading(false);
    }
  }

  const choices = projectsInGroup(group);
  const thumbnails = groupKey.current?.thumbnails ?? {};
  const openingTitle = openingProject ? protectedProjects[openingProject].title : "";

  // On phones the case-study picker opens as a bottom sheet; the password step stays a centred dialog. Colours follow the
  // site: Tailwind grays for text, #E8699A accents, and the #E8699A → #C2547C CTA gradient.
  const asSheet = isMobile && step === "choose";
  const Header = asSheet ? DrawerHeader : DialogHeader;
  const Title = asSheet ? DrawerTitle : DialogTitle;
  const Description = asSheet ? DrawerDescription : DialogDescription;
  const surfaceClass = "border-gray-100 bg-white text-gray-900 dark:border-white/[0.08] dark:bg-[#0a0a0f] dark:text-white";
  const closeButtonClass = "absolute top-3 right-3 grid size-10 cursor-pointer place-items-center rounded-full text-gray-500 transition-[background-color,color,scale] duration-200 hover:bg-gray-100 hover:text-gray-900 active:scale-95 focus-visible:bg-gray-100 focus-visible:text-gray-900 focus-visible:ring-2 focus-visible:ring-[#E8699A]/40 focus-visible:outline-hidden motion-reduce:transition-none dark:text-white/45 dark:hover:bg-white/[0.06] dark:hover:text-white dark:focus-visible:bg-white/[0.06] dark:focus-visible:text-white [&_svg]:size-5";

  function focusOnOpen(event: Event) {
    event.preventDefault();
    // preventScroll keeps the page behind from jumping (notably in Safari). On phones the
    // password field isn't focused automatically, so the keyboard doesn't push the sheet around.
    const target = step === "choose" ? chooserHeading.current : isMobile ? (event.target as HTMLElement) : input.current;
    target?.focus({ preventScroll: true });
  }

  function restoreFocus(event: Event) {
    event.preventDefault();
    if (!openingStudy.current) trigger.current?.focus({ preventScroll: true });
  }

  const body = step === "password" ? (
    <>
      <Header className="gap-2 p-0 text-left">
        <Title className="flex items-center gap-2 text-lg leading-snug font-semibold text-gray-900 dark:text-white">
          <LockKeyhole className="size-4 text-[#E8699A]" aria-hidden="true" />
          Private case studies
        </Title>
        <Description className="text-sm text-gray-500 dark:text-white/55">Enter the password to view my {protectedGroups[group].title}.</Description>
      </Header>
      <form onSubmit={unlock} aria-busy={loading} className="grid gap-3">
        <Label htmlFor="rbc-password" className="sr-only">Password</Label>
        <div className="relative">
          <Input
            ref={input} id="rbc-password" name="password" type={visible ? "text" : "password"}
            value={password} onChange={(event) => { setPassword(event.target.value); if (error) setError(""); }}
            autoComplete="current-password" autoCapitalize="none" spellCheck={false}
            required readOnly={loading} aria-invalid={Boolean(error)}
            aria-describedby={error ? "rbc-password-error" : undefined} placeholder="Password"
            className="h-12 rounded-full border-gray-200 bg-white px-5 pr-12 text-base text-gray-900 placeholder:text-gray-400 hover:border-gray-300 focus-visible:border-[#E8699A] focus-visible:ring-0 aria-invalid:border-red-400 aria-invalid:ring-0 md:text-sm dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-white/35 dark:hover:border-white/20 dark:focus-visible:border-[#E8699A]"
          />
          <Button
            type="button" variant="ghost" size="icon" onClick={() => setVisible(!visible)}
            aria-label={visible ? "Hide password" : "Show password"} aria-controls="rbc-password" aria-pressed={visible}
            className="absolute top-1/2 right-1.5 -translate-y-1/2 rounded-full text-gray-400 hover:bg-transparent hover:text-gray-700 dark:text-white/40 dark:hover:bg-transparent dark:hover:text-white/80"
          >
            {visible ? <EyeOff aria-hidden="true" /> : <Eye aria-hidden="true" />}
          </Button>
        </div>
        {error && <p id="rbc-password-error" className="px-1 text-sm text-red-600 dark:text-red-400" role="alert">{error}</p>}
        <Button
          type="submit" disabled={loading}
          className="h-12 w-full rounded-full bg-gradient-to-r from-[#E8699A] to-[#C2547C] text-sm font-medium text-white transition-opacity duration-200 hover:opacity-90"
        >
          {loading ? "Unlocking…" : "Unlock"}
        </Button>
        <span className="sr-only" role="status">{loading ? "Checking password. Please wait." : ""}</span>
      </form>
      <p className="text-center text-sm text-gray-500 dark:text-white/55">
        Don’t have a password?{" "}
        <a href="mailto:jagritisood30@gmail.com?subject=Access%20to%20your%20RBC%20case%20studies" className="font-semibold text-gray-900 underline decoration-[#E8699A]/50 underline-offset-4 transition-colors hover:text-[#E8699A] dark:text-white">
          Request access
        </a>
      </p>
    </>
  ) : (
    <>
      {/* Focus lands on the heading so no card looks pre-selected; Tab reaches the cards. */}
      <div ref={chooserHeading} tabIndex={-1} className="outline-none">
        <Header className="gap-2 p-0 pr-8 text-left">
          <p className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#E8699A] uppercase">
            <LockKeyholeOpen className="size-3.5" aria-hidden="true" /> Unlocked
          </p>
          <Title className="text-2xl leading-tight font-semibold tracking-tight text-gray-900 dark:text-white">{protectedGroups[group].title}</Title>
          <Description className="text-base text-gray-500 dark:text-white/55">Choose a case study to explore.</Description>
        </Header>
      </div>
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2" aria-busy={Boolean(openingProject)}>
        {choices.map((id) => {
          const project = protectedProjects[id];
          const isOpening = openingProject === id;
          const isCurrent = unlocked?.projectId === id;
          return (
            <li key={id} className="min-w-0">
              <button
                type="button"
                onClick={() => void openProject(id)}
                disabled={Boolean(openingProject)}
                aria-current={isCurrent ? "page" : undefined}
                className={`protected-choice group/choice disabled:cursor-wait ${openingProject && !isOpening ? "opacity-50" : ""}`}
              >
                <span className="protected-choice-glow" aria-hidden="true" />
                <span className="protected-choice-image relative block aspect-[16/10] overflow-hidden bg-[#FDF5F8] dark:bg-[#1A0F13]" aria-hidden="true">
                  {thumbnails[id]
                    ? <img src={thumbnails[id]} alt="" className="size-full object-cover" />
                    : <span className="grid size-full place-items-center text-lg font-semibold tracking-tight text-[#E8699A]">RBC</span>}
                  <span className="protected-choice-shade" />
                  {isCurrent && (
                    <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-[#C2547C] backdrop-blur dark:bg-[#0a0a0f]/80 dark:text-[#E8699A]">Viewing</span>
                  )}
                  {isOpening && (
                    <span className="absolute inset-0 grid place-items-center bg-white/60 backdrop-blur-sm dark:bg-[#0a0a0f]/60">
                      <LoaderCircle className="size-7 animate-spin text-[#E8699A]" />
                    </span>
                  )}
                </span>
                <span className="relative flex flex-1 items-end justify-between gap-4 p-4 sm:p-5">
                  <span className="min-w-0">
                    <span className="block text-base font-semibold text-gray-900 dark:text-white">{project.title}</span>
                    <span className="mt-1 block text-sm text-gray-500 dark:text-white/55">{project.summary}</span>
                  </span>
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-gray-200 text-gray-400 transition-colors duration-300 group-hover/choice:border-transparent group-hover/choice:bg-gradient-to-r group-hover/choice:from-[#E8699A] group-hover/choice:to-[#C2547C] group-hover/choice:text-white dark:border-white/10 dark:text-white/50" aria-hidden="true">
                    <ArrowUpRight className="size-4" />
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      {error && <p className="text-sm text-red-600 dark:text-red-400" role="alert">{error}</p>}
      <span className="sr-only" role="status">{openingProject ? `Opening ${openingTitle}. Please wait.` : ""}</span>
    </>
  );

  return (
    <ProtectedStudyContext.Provider value={{ unlocked, openGroup, openStudy, resumeStudy }}>
      {children}
      {asSheet ? (
        <Drawer open={open} onOpenChange={(next) => { if (!next) closeModal(); }}>
          <DrawerContent
            // Match the Drawer's direction variants so these overrides win over its defaults.
            className={`${surfaceClass} outline-none data-[vaul-drawer-direction=bottom]:max-h-[90dvh] data-[vaul-drawer-direction=bottom]:rounded-t-3xl data-[vaul-drawer-direction=bottom]:border-t-0`}
            onOpenAutoFocus={focusOnOpen}
            onCloseAutoFocus={restoreFocus}
          >
            <DrawerClose className={closeButtonClass}><X /><span className="sr-only">Close</span></DrawerClose>
            <div className="grid gap-6 overflow-y-auto px-6 pt-4 pb-[max(1.75rem,env(safe-area-inset-bottom))]">{body}</div>
          </DrawerContent>
        </Drawer>
      ) : (
        <Dialog open={open} onOpenChange={(next) => { if (!next) closeModal(); }}>
          <DialogContent
            className={`${surfaceClass} max-h-[calc(100dvh-2rem)] grid-cols-1 gap-6 overflow-y-auto rounded-3xl outline-none p-7 shadow-[0_24px_60px_-20px_rgba(17,24,39,0.25)] ${step === "choose" ? "sm:max-w-[760px] sm:p-9" : "sm:max-w-[420px] sm:p-8"}`}
            onOpenAutoFocus={focusOnOpen}
            onCloseAutoFocus={restoreFocus}
          >
            {body}
          </DialogContent>
        </Dialog>
      )}
    </ProtectedStudyContext.Provider>
  );
}
