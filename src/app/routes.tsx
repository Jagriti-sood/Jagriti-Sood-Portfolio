import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import Home from "./pages/Home";
import CaseStudy101 from "./pages/CaseStudy101";
import CaseStudyNHL from "./pages/CaseStudyNHL";
import CaseStudyMaple from "./pages/CaseStudyMaple";
import CaseStudyAdScheduler from "./pages/CaseStudyAdScheduler";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "work/101-healthcare", Component: CaseStudy101 },
      { path: "work/nhl-techshow", Component: CaseStudyNHL },
      { path: "work/maplecode", Component: CaseStudyMaple },
      { path: "work/ad-scheduler", Component: CaseStudyAdScheduler },
    ],
  },
]);
