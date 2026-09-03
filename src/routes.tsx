// src/routes.tsx
//
// Replaces the <Routes>/<Route> JSX that was in App.tsx. Same page
// components, same paths — just a plain array instead of JSX, which is
// what vite-react-ssg needs so it can crawl every path at build time and
// pre-render each one to static HTML.

import type { RouteRecord } from "vite-react-ssg";

import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import Advertising from "./pages/Advertising";
import Contact from "./pages/Contact";
import Foco from "./pages/Foco";
import Fofo from "./pages/Fofo";
import Battery from "./pages/Battery";
import PrivacyPolicy from "./components/Privacypolicy";
import TermsAndConditions from "./components/Termsandconditions";

// Every route is nested under RootLayout so ScrollToTop stays mounted once
// and resets the scroll position on every navigation. Add new routes as
// children here — don't add them as new top-level entries — so they keep
// getting that reset for free.
export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "advertising", element: <Advertising /> },
      { path: "contact", element: <Contact /> },
      { path: "foco", element: <Foco /> },
      { path: "fofo", element: <Fofo /> },
      { path: "battery", element: <Battery /> },
      { path: "privacy-policy", element: <PrivacyPolicy /> },
      { path: "terms-conditons", element: <TermsAndConditions /> },
    ],
  },
];