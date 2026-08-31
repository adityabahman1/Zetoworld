// src/routes.tsx
//
// Replaces the <Routes>/<Route> JSX that was in App.tsx. Same page
// components, same paths — just a plain array instead of JSX, which is
// what vite-react-ssg needs so it can crawl every path at build time and
// pre-render each one to static HTML.

import type { RouteRecord } from "vite-react-ssg";

import Home from "./pages/Home";
import Advertising from "./pages/Advertising";
import Contact from "./pages/Contact";
import Foco from "./pages/Foco";
import Fofo from "./pages/Fofo";
import Battery from "./pages/Battery";
import PrivacyPolicy from "./components/Privacypolicy";
import TermsAndConditions from "./components/Termsandconditions";

export const routes: RouteRecord[] = [
  { path: "/", element: <Home /> },
  { path: "/advertising", element: <Advertising /> },
  { path: "/contact", element: <Contact /> },
  { path: "/foco", element: <Foco /> },
  { path: "/fofo", element: <Fofo /> },
  { path: "/battery", element: <Battery /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/terms-conditons", element: <TermsAndConditions /> },
];