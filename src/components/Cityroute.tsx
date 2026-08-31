import { lazy, Suspense } from "react";
import { ClientOnly } from "vite-react-ssg";

// Loaded lazily (dynamic import) so this chunk — and the `leaflet` /
// `react-leaflet` imports inside it — is never evaluated during the
// vite-react-ssg server build. Combined with <ClientOnly> below, it's only
// fetched and rendered once this component has actually mounted in a
// real browser.
const CityRouteMap = lazy(() => import("./Cityroutemap"));

interface StopCity {
  name: string;
  lat: number;
  lng: number;
}

interface Stop {
  tag: string;
  cities: string;
  description: string;
  locations: StopCity[];
}

interface CityRouteProps {
  eyebrow?: string;
  headline?: string;
  intro?: string;
  stops?: Stop[];
  joinEyebrow?: string;
  joinHeadline?: string;
  joinSubtext?: string;
  primaryCta?: string;
  secondaryCta?: string;
}

const defaultStops: Stop[] = [
  {
    tag: "Live now",
    cities: "Chandigarh",
    description: "500+ scooters running across the city — our home base and proving ground.",
    locations: [{ name: "Chandigarh", lat: 30.7333, lng: 76.7794 }],
  },
  {
    tag: "Launching now",
    cities: "Mohali, Zirakpur & Panchkula",
    description: "The next three cities in the Chandigarh Tricity area, building out from our existing swap network.",
    locations: [
      { name: "Mohali", lat: 30.7046, lng: 76.7179 },
      { name: "Zirakpur", lat: 30.6425, lng: 76.8173 },
      { name: "Panchkula", lat: 30.6942, lng: 76.8606 },
    ],
  },
  {
    tag: "Coming next",
    cities: "Ludhiana, Jalandhar & Amritsar",
    description: "Punjab's major cities — where we plan to bring the same fleet, app, and franchise model.",
    locations: [
      { name: "Ludhiana", lat: 30.901, lng: 75.8573 },
      { name: "Jalandhar", lat: 31.326, lng: 75.5762 },
      { name: "Amritsar", lat: 31.634, lng: 74.8723 },
    ],
  },
];

// stage colors, keyed by index so the timeline dots match the map pins
// (the map's own copy of this lives in CityRouteMap.tsx — kept in sync
// manually since they're in separate files for the SSR split)
const markerColors = ["#173A22", "#5FAE6A", "#8FC996"];

export default function CityRoute({
  eyebrow = "Where we are",
  headline = "The roadmap across Punjab",
  intro = "Zeto's expansion follows a simple pattern: prove the model in one city, build the swap infrastructure, then move to the next.",
  stops = defaultStops,
}: CityRouteProps) {
  const allPositions: [number, number][] = stops.flatMap((s) => s.locations.map((l) => [l.lat, l.lng] as [number, number]));

  return (
    // overflow-x-hidden here is the actual scrollbar fix: the full-bleed
    // trick below (`w-screen` + `-mx-[50vw]`) sizes itself off 100vw, which
    // *includes* the width of the vertical scrollbar. That makes the bleed
    // element a few px wider than the visible viewport, which is exactly
    // what causes an unwanted horizontal scrollbar on the page. Clipping
    // overflow at this level keeps the visual full-bleed effect but stops
    // it from ever pushing the document wider than the viewport.
    <section className="overflow-x-hidden bg-white px-6 py-24 md:py-32">
      {/* pulse keyframe for the "live" pin — plain CSS so it works with any setup */}
      <style>{`
        @keyframes zeto-pulse {
          0%, 100% { transform: scale(1); opacity: 0.28; }
          50% { transform: scale(1.9); opacity: 0; }
        }
        .zeto-map .leaflet-popup-content-wrapper { border-radius: 12px; }
        .zeto-map .leaflet-popup-content { margin: 8px 12px; font-size: 12px; font-weight: 600; color: #173A22; }
        .zeto-map .leaflet-control-attribution { font-size: 9px; background: rgba(255,255,255,0.75); }
      `}</style>

      <div className="mx-auto max-w-6xl">
        <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3F7A4F]">
          <span className="h-2 w-2 rounded-full bg-[#5FAE6A]" />
          {eyebrow}
        </div>
        <h2 className="max-w-2xl text-4xl font-black uppercase leading-[1.05] tracking-tight text-[#173A22] sm:text-5xl">
          {headline}
        </h2>
        <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-[#4A5F4E]">{intro}</p>
      </div>

      {/* Real map — full-bleed overlay behind the timeline on desktop;
          a separate, fully visible block below the timeline on mobile
          (a heavy scrim over a tiny screen just hides the map entirely,
          so mobile doesn't use the overlay treatment at all). */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] mt-16 w-screen overflow-hidden pb-8 md:min-h-[600px] md:pb-0">
        {/* timeline — normal content flow on mobile (map sits below it);
            absolutely-stacked overlay on desktop (z-20, on top of the map) */}
        <div className="relative z-20 mx-auto grid max-w-6xl gap-10 px-6 py-8 pointer-events-auto md:gap-8 md:py-16 md:pointer-events-none">
          <div className="space-y-9 border-l-2 border-[#D9E9D6] pl-8 md:max-w-md">
            {stops.map((stop, i) => (
              <div key={stop.cities} className="relative">
                <span
                  className="absolute -left-[38px] top-1 h-3.5 w-3.5 rounded-full border-2 border-white"
                  style={{ backgroundColor: markerColors[i % markerColors.length] }}
                />
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#3F7A4F]">{stop.tag}</p>
                <p className="mt-2 text-xl font-bold text-[#173A22]">{stop.cities}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-[#527257]">{stop.description}</p>
              </div>
            ))}

            {/* legend, tucked under the timeline */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#EEF5EC] pt-5">
              {stops.map((stop, i) => (
                <div key={stop.cities} className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: markerColors[i % markerColors.length] }} />
                  <span className="text-[11px] font-medium uppercase tracking-wide text-[#527257]">{stop.tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* right side stays empty on desktop so the live map shows through and stays clickable/draggable */}
          <div className="hidden md:block" />
        </div>

        {/* map — its own visible block on mobile (h-[380px], normal flow,
            no scrim), full-bleed absolute overlay from md upward.
            ClientOnly + React.lazy keeps every leaflet/react-leaflet import
            out of the SSR build entirely (see CityRouteMap.tsx). */}
        <div className="relative mt-8 h-[380px] w-full overflow-hidden md:absolute md:inset-0 md:z-0 md:mt-0 md:h-auto md:w-auto [&_.leaflet-container]:h-full [&_.leaflet-container]:w-full [&_.leaflet-container]:bg-[#EAF6EA]">
          <ClientOnly>
            {() => (
              <Suspense fallback={null}>
                <CityRouteMap stops={stops} allPositions={allPositions} />
              </Suspense>
            )}
          </ClientOnly>
        </div>

        {/* soft top fade + readability scrim — desktop only; mobile has no
            overlay to fade since the map isn't sitting behind any text */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-10 hidden h-16 md:block"
          style={{ background: "linear-gradient(to bottom, #FFFFFF 0%, rgba(255,255,255,0) 100%)" }}
        />
        <div
          className="pointer-events-none absolute inset-0 z-10 hidden backdrop-blur-[2px] md:block"
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.82) 32%, rgba(255,255,255,0.45) 48%, rgba(255,255,255,0) 64%)",
            WebkitMaskImage: "linear-gradient(to right, black 0%, black 55%, transparent 68%)",
            maskImage: "linear-gradient(to right, black 0%, black 55%, transparent 68%)",
          }}
        />
      </div>
    </section>
  );
}