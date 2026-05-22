import { createBrowserRouter, Navigate } from "react-router";
import { Root } from "./components/Root";
import Home from "./pages/Home";
import CaseStudyNHL from "./pages/CaseStudyNHL";
import CaseStudyMaple from "./pages/CaseStudyMaple";
import CaseStudyAdScheduler from "./pages/CaseStudyAdScheduler";
import CaseStudyBajaj from "./pages/CaseStudyBajaj";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "work/101-healthcare", element: <Navigate to="/work/maplecode" replace /> },
      { path: "work/nhl-techshow", Component: CaseStudyNHL },
      { path: "work/maplecode", Component: CaseStudyMaple },
      { path: "work/ad-scheduler", Component: CaseStudyAdScheduler },
      { path: "work/bajaj-health", Component: CaseStudyBajaj },
      { path: "*", Component: NotFound },
    ],
  },
]);