// src/components/ScrollToTop.tsx
//
// react-router doesn't reset scroll position on navigation by default, so
// clicking a link to another route can leave the new page scrolled down to
// wherever the previous page was. Mounted once in the root layout, this
// scrolls the window back to the top every time the path changes.

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
