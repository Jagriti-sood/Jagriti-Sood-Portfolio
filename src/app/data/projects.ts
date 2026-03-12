export type Project = {
  id: number;
  number: string;
  title: string;
  industry: string;
  tags: string[];
  accent: string;
  cardBgLight: string;
  cardBgDark: string;
  image: string;
  description: string;
  impact: string[];
  caseStudyUrl: string;
};

export const projects: Project[] = [
  {
    id: 2,
    number: "01",
    title: "NHL TechShow Platform",
    industry: "Events Tech · Mobile & Web",
    tags: ["UX Research", "Product Ownership", "Interaction Design"],
    accent: "#C2547C",
    cardBgLight: "#FDF8F3",
    cardBgDark: "#1B1410",
    image:
      "https://images.unsplash.com/photo-1676272748285-2cee8e35db69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMGV2ZW50JTIwbW9iaWxlJTIwYXBwJTIwc2NyZWVuc3xlbnwxfHx8fDE3NzI2OTA1NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "8,000 attendees. 200+ sessions. One app untouched since 2019. As sole UX lead I ran discovery workshops across 4 attendee segments and redesigned everything from registration to live-session engagement.",
    impact: ["Session discovery 34% → 92%", "App rating 2.8 → 4.6 ★"],
    caseStudyUrl: "/work/nhl-techshow",
  },
  {
    id: 1,
    number: "02",
    title: "101 Healthcare Website",
    industry: "Healthcare · Web Design",
    tags: ["UX Research", "IA & Content Strategy", "UI Design"],
    accent: "#F4A0C0",
    cardBgLight: "#FDFAF4",
    cardBgDark: "#1A160D",
    image:
      "https://images.unsplash.com/photo-1653647054667-c99dc7f914ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVWCUyMGRlc2lnbmVyJTIwZmlnbWElMjBwcm90b3R5cGUlMjBzY3JlZW4lMjBkZXNpZ24lMjB3b3JrfGVufDF8fHx8MTc3MjY4NDc4NXww&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Zero web presence. Exceptional caregivers. I designed 101 Healthcare's first website from the ground up — research to handoff — turning a referral-only agency into a bookable digital presence.",
    impact: ["3× consultation bookings", "40% drop in support calls"],
    caseStudyUrl: "/work/101-healthcare",
  },
  {
    id: 3,
    number: "03",
    title: "MapleCode Innovations",
    industry: "B2B Tech · Brand & Product",
    tags: ["Design Systems", "Brand Identity", "UX/UI Design"],
    accent: "#E8699A",
    cardBgLight: "#FDF8F7",
    cardBgDark: "#1B1412",
    image:
      "https://images.unsplash.com/photo-1770303430564-8aa0a487dddb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCMkIlMjBTYWFTJTIwc3RhcnR1cCUyMGJyYW5kJTIwZGVzaWduJTIwc3lzdGVtfGVufDF8fHx8MTc3MjY5MDU3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Exceptional engineering, forgettable brand. MapleCode was losing enterprise deals not on product — but on presence. I led a full visual overhaul: new design system, marketing site, and product UI.",
    impact: ["60% faster page-to-demo", "3 new enterprise accounts"],
    caseStudyUrl: "/work/maplecode",
  },
  {
    id: 4,
    number: "04",
    title: "Ad Scheduler — Source Digital",
    industry: "Ad-Tech · Internal Tooling",
    tags: ["User Research", "Systems Design", "Usability Testing"],
    accent: "#F4A0C0",
    cardBgLight: "#FDFAF2",
    cardBgDark: "#1A1810",
    image:
      "https://images.unsplash.com/photo-1676276374803-36e48196d5ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpYSUyMHBsYW5uaW5nJTIwYWQlMjBjYW1wYWlnbiUyMGRhc2hib2FyZCUyMHNjcmVlbnxlbnwxfHx8fDE3NzI2OTA1NzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Campaign managers were scheduling multi-channel ads via spreadsheets and stress. Three designers had tried to fix it — none shipped. I spent 4 weeks embedded with the ops team before designing anything.",
    impact: ["6-hour workflow → 45 min", "Scheduling errors down 70%"],
    caseStudyUrl: "/work/ad-scheduler",
  },
];