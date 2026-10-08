// Public metadata only: titles and routes already shown on the homepage.
// Case-study content and picker thumbnails stay in the encrypted files.
export const protectedGroups = {
  rbc: { route: "/work/rbc", title: "RBC case studies" },
} as const;

export type ProtectedGroupId = keyof typeof protectedGroups;
export type ProtectedProjectId = "rbc-newcomer-hub" | "rbc-account-opening";

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

export const projectAtRoute = (pathname: string) =>
  projectIds.find((id) => protectedProjects[id].route === pathname);

export const groupAtRoute = (pathname: string) =>
  (Object.keys(protectedGroups) as ProtectedGroupId[]).find((id) => protectedGroups[id].route === pathname);
