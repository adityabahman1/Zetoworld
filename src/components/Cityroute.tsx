// remove this line if you're not on Next.js App Router

// npm install leaflet react-leaflet
// If this lives in a Next.js app, import it with ssr disabled wherever you render it:
//   const CityRoute = dynamic(() => import("./CityRoute"), { ssr: false });
// Leaflet touches `window` at import time, so it can't be server-rendered.

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

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

// stage colors, keyed by index so the map pins match the timeline order
const markerColors = ["#173A22", "#5FAE6A", "#8FC996"];

// custom circular divIcon in the brand color — avoids Leaflet's default
// blue-marker image (and the broken-image-path issue that comes with it
// under most bundlers).
// Built once per color/pulse combo at module scope (not inline in JSX) —
// creating a fresh L.divIcon on every render makes react-leaflet swap the
// marker's icon on every re-render, which under Leaflet's zoom/pan
// animations can leave stray empty icon elements behind on the map.
function makeIcon(color: string, pulse: boolean) {
  const size = pulse ? 30 : 22;
  return L.divIcon({
    className: "",
    html: `
      <span style="position:relative;display:block;width:${size}px;height:${size}px;">
        ${
          pulse
            ? `<span style="position:absolute;inset:-9px;border-radius:9999px;background:${color};opacity:0.32;animation:zeto-pulse 2.2s ease-in-out infinite;"></span>`
            : ""
        }
        <span style="position:absolute;inset:0;border-radius:9999px;background:${color};border:3px solid #fff;box-shadow:0 3px 10px rgba(23,58,34,0.55);"></span>
      </span>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2],
  });
}

// one stable icon instance per stage color, index 0 (live) gets the pulse
const stageIcons = markerColors.map((color, i) => makeIcon(color, i === 0));

// fits the map to whatever pins are passed in, instead of a hardcoded center/zoom
function FitBounds({ positions }: { positions: [number, number][] }) {
  const map = useMap();

  useEffect(() => {
    if (positions.length === 0) return;

    const bounds = L.latLngBounds(positions);

    // Leaflet reads the container's current pixel size to compute fitBounds.
    // Right when React mounts, that size can still be 0 (or mid-reflow) —
    // especially here, since the map lives in a full-bleed w-screen wrapper
    // whose width settles after the initial paint, and the layout itself
    // switches from "block below content" (mobile) to "absolute overlay"
    // (desktop) at the md breakpoint. If fitBounds runs against a stale
    // size, it collapses to roughly the first marker (Chandigarh) instead
    // of framing every stop.
    //
    // invalidateSize() forces Leaflet to re-measure the container before we
    // fit — and we do it on a rAF (one paint later) rather than
    // synchronously, so it runs after the browser has actually laid out the
    // final size.
    const fit = () => {
      map.invalidateSize();
      map.fitBounds(bounds, { padding: [48, 48] });
    };

    const raf = requestAnimationFrame(fit);

    // Also re-fit on any later resize (orientation change, devtools resize,
    // breakpoint switch, sidebar toggling, etc.) so it never gets stuck on
    // a stale frame.
    const ro = new ResizeObserver(() => fit());
    ro.observe(map.getContainer());

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [map, positions]);

  return null;
}

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
            no scrim), full-bleed absolute overlay from md upward */}
        <div className="relative mt-8 h-[380px] w-full overflow-hidden md:absolute md:inset-0 md:z-0 md:mt-0 md:h-auto md:w-auto [&_.leaflet-container]:h-full [&_.leaflet-container]:w-full [&_.leaflet-container]:bg-[#EAF6EA]">
          <MapContainer
            center={[30.9, 76.0]}
            zoom={8}
            zoomControl={false}
            scrollWheelZoom={false}
            className="zeto-map h-full w-full"
          >
            <TileLayer
              // Fine for prototyping — for production traffic, swap in a
              // provider with a usage policy for hosted apps (e.g. MapTiler, Carto).
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <ZoomControl position="bottomright" />
            <FitBounds positions={allPositions} />

            {stops.map((stop, i) =>
              stop.locations.map((loc) => (
                <Marker key={loc.name} position={[loc.lat, loc.lng]} icon={stageIcons[i % stageIcons.length]}>
                  <Popup>
                    {loc.name} — {stop.tag}
                  </Popup>
                </Marker>
              ))
            )}
          </MapContainer>
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