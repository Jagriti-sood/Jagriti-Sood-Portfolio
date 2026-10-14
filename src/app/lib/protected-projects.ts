// Public metadata only: titles and routes already shown on the homepage.
// Case-study content and picker thumbnails stay in the encrypted files.
export const protectedGroups = {
  rbc: { route: "/work/rbc", title: "RBC case studies" },
} as const;

export type ProtectedGroupId = keyof typeof protectedGroups;
export type ProtectedProjectId = "rbc-newcomer-hub" | "rbc-credit-cards-newcomers" | "rbc-account-opening";

export const protectedProjects: Record<ProtectedProjectId, {
  group: ProtectedGroupId;
  route: string;
  title: string;
  summary: string;
}> = {
  // Listed in the order the picker and homepage card show them.
  "rbc-newcomer-hub": {
    group: "rbc",
    route: "/work/rbc/newcomer-hub",
    title: "Newcomers Resource Hub",
    summary: "Guidance for life in Canada",
  },
  "rbc-credit-cards-newcomers": {
    group: "rbc",
    route: "/work/rbc/credit-cards-newcomers",
    title: "Credit Cards for Newcomers",
    summary: "Simplifying Canadian credit for newcomers",
  },
  "rbc-account-opening": {
    group: "rbc",
    route: "/work/rbc/account-opening",
    title: "Account Opening",
    summary: "Chequing & savings redesign",
  },
};

const projectIds = Object.keys(protectedProjects) as ProtectedProjectId[];

export const projectsInGroup = (group: ProtectedGroupId) =>
  projectIds.filter((id) => protectedProjects[id].group === group);

const normalizePath = (pathname: string) => pathname.replace(/\/$/, "") || "/";

export const projectAtRoute = (pathname: string): ProtectedProjectId | undefined => {
  const path = normalizePath(pathname);
  const exact = projectIds.find((id) => protectedProjects[id].route === path);
  if (exact) return exact;
  const match = path.match(/^\/work\/rbc\/([a-z0-9-]+)$/);
  if (!match) return undefined;
  const id = `rbc-${match[1]}` as ProtectedProjectId;
  return id in protectedProjects ? id : undefined;
};

export const groupAtRoute = (pathname: string) =>
  (Object.keys(protectedGroups) as ProtectedGroupId[]).find(
    (id) => protectedGroups[id].route === normalizePath(pathname),
  );

/** Any `/work/rbc` or `/work/rbc/...` URL is handled by the protected RBC flow (not site 404). */
export const isRbcProtectedPath = (pathname: string) =>
  normalizePath(pathname) === protectedGroups.rbc.route ||
  normalizePath(pathname).startsWith(`${protectedGroups.rbc.route}/`);
