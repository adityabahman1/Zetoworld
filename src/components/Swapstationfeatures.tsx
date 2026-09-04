import React, { lazy, Suspense } from "react";
import { ClientOnly } from "vite-react-ssg";

// Loaded lazily (dynamic import) so this chunk — and the `leaflet` /
// `react-leaflet` imports inside it — is never evaluated during the
// vite-react-ssg server build. Combined with <ClientOnly> below, it's only
// fetched and rendered once this component has actually mounted in a real
// browser. Same split used by Cityroute.tsx / Cityroutemap.tsx.
const SwapStationsMap = lazy(() => import("./SwapStationsMap"));

/* ---------- inline illustrations ---------- */

const PhoneIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <rect x="55" y="18" width="90" height="164" rx="18" fill="#1B1A24" stroke="#3A3846" strokeWidth="3" />
    <rect x="63" y="34" width="74" height="130" rx="4" fill="#0F0E15" />
    <rect x="70" y="42" width="60" height="10" rx="2" fill="#D9E24E" />
    <rect x="70" y="58" width="40" height="6" rx="2" fill="#5A5768" />
    <rect x="70" y="90" width="60" height="40" rx="4" fill="#2E2C3C" />
    <path d="M100 98l-10 14h7l-3 10 11-15h-7l2-9z" fill="#D9E24E" />
    <rect x="70" y="140" width="60" height="16" rx="4" fill="#2E2C3C" />
  </svg>
);

const ShieldIllustration = () => (
  <svg viewBox="0 0 120 120" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M60 8l40 16v28c0 30-18 50-40 60-22-10-40-30-40-60V24z"
      fill="none"
      stroke="#D9E24E"
      strokeWidth="6"
      strokeLinejoin="round"
    />
    <path d="M42 60l12 12 24-26" fill="none" stroke="#D9E24E" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ---------- component ---------- */

const SwapStationFeatures: React.FC = () => {
  return (
    <section className="w-full  py-16 px-6">
      <style>{`
        .zeto-stations-map .leaflet-popup-content-wrapper { border-radius: 10px; }
        .zeto-stations-map .leaflet-popup-content { margin: 6px 10px; font-size: 12px; font-weight: 600; color: #1B1A24; }
        .zeto-stations-map .leaflet-control-attribution { font-size: 8px; background: rgba(255,255,255,0.75); }
      `}</style>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[minmax(0,1fr)]">
          {/* Swap in Seconds — dark purple, tall */}
          

          {/* Network Everywhere — the map itself is the card's full
              background, with a floating glass panel over it instead of a
              separate lime header block. */}
          <div className="relative md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden min-h-[380px] [&_.leaflet-container]:h-full [&_.leaflet-container]:w-full [&_.leaflet-container]:bg-[#1B1A24]">
            {/* z-0 (not just `absolute`) is load-bearing here: without an
                explicit z-index this wrapper never establishes its own
                stacking context, so Leaflet's internal panes/controls
                (map-pane is z-index:400, the zoom-control corner is
                z-index:1000 — see leaflet.css) leak out and render above
                the z-10 glass panel below instead of being contained
                beneath it. Same fix already used in Cityroute.tsx's map
                wrapper (its `md:z-0`). */}
            <div className="absolute inset-0 z-0">
              <ClientOnly>
                {() => (
                  <Suspense fallback={<div className="h-full w-full bg-[#1B1A24]" />}>
                    <SwapStationsMap />
                  </Suspense>
                )}
              </ClientOnly>
            </div>

            {/* frosted-glass info panel, floating over the map — narrower
                side insets (was inset-x-5/6) make it ~10% wider, tighter
                padding/text/line-spacing make it shorter */}
            <div className="pointer-events-none absolute inset-x-3 bottom-5 z-10 rounded-xl border border-white/15 bg-[#1B1A24]/75 px-5 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-md md:inset-x-4 md:bottom-6">
              <h3 className="text-[#F5F3ED] text-lg font-bold leading-tight">
                30+ Live Stations
                <br />
                Across Tricity
              </h3>
              <p className="mt-1 text-[#D9E24E] text-[13px] font-semibold uppercase tracking-wide">
                Growing every day
              </p>
            </div>
          </div>

          {/* Tech That Works for You — dark, wide top-right */}
          <div className="rounded-2xl bg-[#1F1E29] p-8 flex flex-col justify-between min-h-[180px] overflow-hidden">
            <div>
              <h3 className="text-[#F5F3ED] text-xl font-bold leading-snug">
                Smart App, Smoother Rides
              </h3>
              <p className="mt-2 text-[#9C99AA] text-[13.5px] leading-relaxed max-w-[220px]">
                Seamless app, real-time updates, and smooth operations.
              </p>
            </div>
            <div className="w-28 h-28 self-end -mb-2 -mr-2">
              <PhoneIllustration />
            </div>
          </div>

          {/* Flexible Plans — lavender, bottom-right */}
          <div className="rounded-2xl bg-[#B8AEDB] p-8 flex flex-col justify-center min-h-[160px]">
            <h3 className="text-[#1B1A24] text-lg font-bold leading-snug">
              Plans That Bend to You
            </h3>
            <p className="mt-2 text-[#3A3550] text-[13.5px] leading-relaxed">
              Pay as you go or choose a subscription.
            </p>
          </div>

          {/* Safety First — full width dark strip */}
          <div className="md:col-span-3 rounded-2xl bg-[#1F1E29] p-8 flex items-center gap-6">
            <ShieldIllustration />
            <div>
              <h3 className="text-[#F5F3ED] text-base font-bold leading-snug">
                Built on Safety
              </h3>
              <p className="mt-2 text-[#9C99AA] text-[13.5px] leading-relaxed">
                Our track record? Zero fire incidents, total peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwapStationFeatures;