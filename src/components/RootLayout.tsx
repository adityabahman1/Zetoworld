// src/components/RootLayout.tsx
//
// Layout route wrapping every page in routes.tsx. Keeps ScrollToTop mounted
// once at the top of the tree so it runs on every route change, regardless
// of which page is rendered in the <Outlet />.

import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

export default function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}
