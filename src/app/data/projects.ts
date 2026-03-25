import imgNHL from "figma:asset/322867aa2bd51e13f19317633a5f0373aab4f93b.png";
import img101Healthcare from "figma:asset/aa8f4c31f60399f1e417f9b76dbab0d035506671.png";
import imgAdScheduler from "figma:asset/d6a778e753650b852ad71f897e1f721f0fa1fb6a.png";
import imgBajaj from "figma:asset/7229c5eeb01d91cda83f69a4a72af2d17576d520.png";
import imgMapleCode from "@/assets/maplecode-cover.webp";

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
    title: "NHL Tech Showcase 2022",
    industry: "Events Tech · Mobile & Web",
    tags: ["UX Research", "Product Ownership", "Interaction Design"],
    accent: "#C2547C",
    cardBgLight: "#FDF8F3",
    cardBgDark: "#1B1410",
    image: imgNHL,
    description:
      "Fan streaming redesign for the 2022 NHL Tech Showcase. Live stats, player tracking, and personalised tools — built for 5,000+ attendees.",
    impact: ["72% session discovery rate", "5k+ Attendees at NHL Tech Showcase"],
    caseStudyUrl: "/work/nhl-techshow",
  },
  {
    id: 1,
    number: "02",
    title: "101 Healthcare - Senior Home Care",
    industry: "Healthcare · Web Design",
    tags: ["UX Research", "IA & Content Strategy", "UI Design"],
    accent: "#F4A0C0",
    cardBgLight: "#FDFAF4",
    cardBgDark: "#1A160D",
    image: img101Healthcare,
    description:
      "A senior home care agency in Ontario with no digital presence. I built their first website — and stayed on until consultation bookings tripled.",
    impact: ["3× consultation bookings", "42% drop in bounce rate"],
    caseStudyUrl: "/work/101-healthcare",
  },
  {
    id: 4,
    number: "03",
    title: "Campaigns - Source Digital",
    industry: "Ad-Tech · Internal Tooling",
    tags: ["User Research", "Systems Design", "Usability Testing"],
    accent: "#F4A0C0",
    cardBgLight: "#FDFAF2",
    cardBgDark: "#1A1810",
    image: imgAdScheduler,
    description:
      "Three designers tried to fix this. None shipped. I embedded for four weeks before opening Figma — then built the tool that finally stuck.",
    impact: ["6-hour workflow → 45 min", "70% fewer scheduling errors"],
    caseStudyUrl: "/work/ad-scheduler",
  },
  {
    id: 5,
    number: "04",
    title: "Bajaj Finserv Health",
    industry: "Healthcare · Mobile App (iOS & Android)",
    tags: ["Feature Design", "Flow Redesign", "Interaction Design"],
    accent: "#E8699A",
    cardBgLight: "#FDF5F8",
    cardBgDark: "#1A0F13",
    image: imgBajaj,
    description:
      "2 new features, 2 redesigned flows  shipped to 500k+ users across India. Video consultations and gamified plan discovery, rebuilt end-to-end.",
    impact: ["4.4★ on app stores", "Shipped to 500k+ users"],
    caseStudyUrl: "/work/bajaj-health",
  },
  {
    id: 3,
    number: "05",
    title: "MapleCode Innovations",
    industry: "B2B Tech · Brand & Product",
    tags: ["Design Systems", "Brand Identity", "UX/UI Design"],
    accent: "#E8699A",
    cardBgLight: "#FDF5F8",
    cardBgDark: "#1A0F13",
    image: imgMapleCode,
    description:
      "An ongoing embedded partnership with a Toronto-based B2B software company — design, marketing, and customer ops across multiple concurrent projects.",
    impact: ["Embedded Partner", "Design · Marketing · Ops"],
    caseStudyUrl: "/work/maplecode",
  },
];
