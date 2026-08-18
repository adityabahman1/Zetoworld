import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Shield, PanelsTopLeft, Bike, CircleDot } from "lucide-react";

interface Hotspot {
  id: string;
  icon: LucideIcon;
  accent: string;
  title: string;
  description: string;
  reach: string;
  // Position of the dot as a % of the illustration's bounding box
  x: number;
  y: number;
  // Which side the hover label should unfold toward, so it never runs
  // off the edge of the card
  labelSide: "left" | "right";
}

const HOTSPOTS: Hotspot[] = [
  {
    id: "helmet",
    icon: Shield,
    accent: "#1FA24A",
    title: "Helmet Branding",
    description:
      "Eye-level space that rides at the top of every frame — the first thing pedestrians and traffic notice.",
    reach: "~9,000 eye-level views / day",
    x: 47,
    y: 20,
    labelSide: "right",
  },
  {
    id: "side-panel",
    icon: PanelsTopLeft,
    accent: "#3B82F6",
    title: "Side Panel Wrap",
    description:
      "The largest flat surface on the vehicle. Visible from both directions while lane-splitting through traffic.",
    reach: "~14,000 street-level views / day",
    x: 44,
    y: 68,
    labelSide: "left",
  },
  {
    id: "cargo-box",
    icon: Bike,
    accent: "#E11D48",
    title: "Cargo Box Display",
    description:
      "Directly in the eyeline of every vehicle stuck behind the scooter — prime spot for QR codes and offers.",
    reach: "~11,000 tailing views / day",
    x: 17,
    y: 52,
    labelSide: "left",
  },
  {
    id: "front-apron",
    icon: CircleDot,
    accent: "#64748B",
    title: "Front Apron Space",
    description:
      "A clean, head-on panel that puts your logo in front of oncoming pedestrians and cross traffic at every junction.",
    reach: "~7,500 head-on views / day",
    x: 78,
    y: 58,
    labelSide: "right",
  },
];

export default function AdHotspotDiagram() {
  const [activeId, setActiveId] = useState<string>(HOTSPOTS[0].id);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const active = HOTSPOTS.find((h) => h.id === activeId) ?? HOTSPOTS[0];
  const activeIndex = HOTSPOTS.findIndex((h) => h.id === activeId);

  return (
    <section className="bg-white px-6 py-20 sm:px-10">
      <style>{`
        @keyframes adPanelIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Explore the Ad Zones
          </h2>
          <p className="mt-4 text-slate-500">
            Tap a hotspot on the scooter to see where your brand can ride —
            and how many eyes it earns every day.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          {/* Illustration with hotspots */}
          <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-3xl bg-gradient-to-b from-slate-50 to-slate-100 p-8 sm:p-10">
            {/* Ambient backdrop circle behind the vehicle */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(59,130,246,0.08), transparent)",
              }}
            />

            <div className="relative aspect-[4/3] w-full">
              {/* Replace this placeholder SVG with a real scooter+rider
                  photo/illustration later. Keep the wrapper `relative` and
                  keep hotspot x/y percentages aligned to the same spots:
                  helmet (top), side panel (mid-body), cargo box (rear),
                  front apron (front fairing). */}
              <ScooterIllustration highlightedId={hoveredId ?? activeId} />

              {HOTSPOTS.map((spot) => {
                const isActive = spot.id === activeId;
                const isHovered = spot.id === hoveredId;
                return (
                  <div
                    key={spot.id}
                    className="group absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveId(spot.id)}
                      onMouseEnter={() => setHoveredId(spot.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      onFocus={() => setHoveredId(spot.id)}
                      onBlur={() => setHoveredId(null)}
                      className="relative flex h-7 w-7 items-center justify-center focus:outline-none"
                      aria-pressed={isActive}
                      aria-label={spot.title}
                    >
                      {isActive && (
                        <span
                          className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-50"
                          style={{ backgroundColor: spot.accent }}
                        />
                      )}
                      <span
                        className="relative inline-flex h-4 w-4 rounded-full transition-transform duration-200"
                        style={{
                          backgroundColor: spot.accent,
                          boxShadow: isActive
                            ? `0 0 0 5px rgba(255,255,255,0.95), 0 0 0 6px ${spot.accent}55`
                            : "0 0 0 4px rgba(255,255,255,0.9)",
                          transform: isActive || isHovered ? "scale(1.2)" : "scale(1)",
                        }}
                      />
                    </button>

                    {/* Floating label — shows on hover/focus, always shown for the active dot */}
                    <div
                      className={`pointer-events-none absolute top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-slate-900/90 px-3 py-1 text-xs font-medium text-white shadow-md transition-all duration-150 ${
                        spot.labelSide === "right" ? "left-full ml-3" : "right-full mr-3"
                      } ${
                        isActive || isHovered
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-1"
                      }`}
                    >
                      {spot.title}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Ground shadow */}
            <div className="mx-auto mt-2 h-3 w-2/3 rounded-full bg-slate-300/40 blur-md" />
          </div>

          {/* Detail panel */}
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Ad zone {activeIndex + 1} of {HOTSPOTS.length}
              </span>
              <div className="flex gap-1.5">
                {HOTSPOTS.map((spot) => (
                  <span
                    key={spot.id}
                    className="h-1.5 w-1.5 rounded-full transition-colors"
                    style={{
                      backgroundColor:
                        spot.id === activeId ? spot.accent : "#E2E8F0",
                    }}
                  />
                ))}
              </div>
            </div>

            <div key={active.id} className="mt-4" style={{ animation: "adPanelIn 0.25s ease-out" }}>
              <div className="flex items-center gap-3">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: active.accent }}
                >
                  <active.icon className="h-5 w-5 text-white" />
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  {active.title}
                </h3>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-500">
                {active.description}
              </p>

              <p
                className="mt-4 text-sm font-semibold"
                style={{ color: active.accent }}
              >
                {active.reach}
              </p>
            </div>

            {/* Hotspot picker list — mirrors the dots for keyboard/mobile users */}
            <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-6">
              {HOTSPOTS.map((spot) => (
                <button
                  key={spot.id}
                  type="button"
                  onClick={() => setActiveId(spot.id)}
                  onMouseEnter={() => setHoveredId(spot.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`rounded-full border px-4 py-1.5 text-xs font-medium transition ${
                    spot.id === activeId
                      ? "border-transparent text-white"
                      : "border-slate-200 text-slate-600 hover:border-slate-300"
                  }`}
                  style={
                    spot.id === activeId
                      ? { backgroundColor: spot.accent }
                      : undefined
                  }
                >
                  {spot.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// A side-profile scooter + rider illustration, flat/geometric style.
// Swap for a real photo/illustration later — keep the wrapper `relative`
// and re-check each hotspot's x/y % against your actual image so the
// dots still land on the helmet, side panel, cargo box, and front apron.
function ScooterIllustration({ highlightedId }: { highlightedId: string }) {
  const dim = (id: string, active: string, idle: string) =>
    highlightedId === id ? active : idle;

  return (
    <svg
      viewBox="0 0 400 300"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
    >
      {/* Wheels */}
      <circle cx="96" cy="240" r="34" fill="#1E293B" />
      <circle cx="96" cy="240" r="15" fill="#475569" />
      <circle cx="312" cy="240" r="34" fill="#1E293B" />
      <circle cx="312" cy="240" r="15" fill="#475569" />

      {/* Floorboard / side panel — connects the wheels */}
      <path
        d="M 118 222 Q 130 200 160 200 L 262 200 Q 292 200 300 222 L 300 236 Q 300 244 292 244 L 126 244 Q 118 244 118 236 Z"
        fill={dim("side-panel", "#3B82F6", "#CBD5E1")}
        style={{ transition: "fill 0.2s ease" }}
      />

      {/* Front apron / fairing — sweeps up to the handlebars */}
      <path
        d="M 262 200 Q 300 196 306 150 Q 310 112 296 84 Q 290 74 278 74 L 268 74 Q 258 74 256 86 L 250 150 Q 248 182 262 200 Z"
        fill={dim("front-apron", "#64748B", "#94A3B8")}
        style={{ transition: "fill 0.2s ease" }}
      />
      {/* Headlight */}
      <circle cx="288" cy="94" r="7" fill="#FDE68A" />
      {/* Handlebar */}
      <rect x="266" y="66" width="8" height="18" rx="3" fill="#334155" />
      <rect x="252" y="60" width="46" height="8" rx="4" fill="#334155" />
      {/* Mirror */}
      <circle cx="252" cy="56" r="5" fill="#334155" />

      {/* Cargo box — sits behind the seat, over the rear wheel */}
      <rect
        x="70"
        y="140"
        width="66"
        height="56"
        rx="10"
        fill={dim("cargo-box", "#E11D48", "#FCA5A5")}
        style={{ transition: "fill 0.2s ease" }}
      />
      <rect x="70" y="140" width="66" height="10" rx="5" fill="#00000022" />

      {/* Seat */}
      <path
        d="M 150 196 Q 150 184 164 184 L 224 184 Q 236 184 236 196 L 236 202 L 150 202 Z"
        fill="#334155"
      />

      {/* Rider torso + arms reaching to handlebar */}
      <path
        d="M 196 100 Q 176 108 172 132 L 168 184 L 210 184 L 214 140 Q 216 118 234 100 L 250 84 L 240 74 L 220 92 Q 204 104 196 100 Z"
        fill="#94A3B8"
      />
      {/* Rider leg */}
      <path
        d="M 176 184 L 172 210 Q 170 220 180 220 L 192 220 L 196 186 Z"
        fill="#64748B"
      />

      {/* Helmet */}
      <g style={{ transition: "transform 0.2s ease" }}>
        <circle cx="196" cy="78" r="28" fill={dim("helmet", "#1FA24A", "#CBD5E1")} style={{ transition: "fill 0.2s ease" }} />
        <path
          d="M 168 78 Q 168 52 196 50 Q 224 52 224 78 Z"
          fill="#00000014"
        />
        {/* Visor */}
        <path
          d="M 196 66 Q 216 66 220 82 Q 210 90 196 90 Q 182 90 172 82 Q 176 66 196 66 Z"
          fill="#1E293B"
          opacity="0.85"
        />
      </g>
    </svg>
  );
}