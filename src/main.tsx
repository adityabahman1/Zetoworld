// src/main.tsx
//
// Replaces createRoot(...).render(<App />). App.tsx (and its
// BrowserRouter/Routes/Route) is no longer imported anywhere — you can
// delete it, or leave it unused for reference.
//
// ViteReactSSG mounts to the same #root element your index.html already
// has, so index.html needs no changes.

import "./index.css";
import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./routes";

export const createRoot = ViteReactSSG({ routes });