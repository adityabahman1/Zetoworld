// SwapStationsMap.tsx
// Everything in this file touches `leaflet` / `react-leaflet`, which reads
// `window` at import time. It's loaded via React.lazy() + <ClientOnly> from
// Swapstationfeatures.tsx (see CityRoute.tsx/CityRouteMap.tsx for the same
// split) so this module is never imported during the SSR build.

import { Marker, MapContainer, Popup, TileLayer, ZoomControl } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/* ---------- 30 station markers, scattered across the Tricity ----------
 *
 * Positions (and each marker's pulse-animation delay) come from a seeded
 * PRNG rather than Math.random(). This component only ever mounts
 * client-side (ClientOnly + lazy above), so a hydration mismatch isn't
 * actually possible here — but a fixed seed still means the "random"
 * layout is stable across reloads and re-renders instead of reshuffling
 * every time, which reads as a real, if illustrative, station map rather
 * than noise.
 */

function mulberry32(seed: number) {
  return function random() {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

interface StationHub {
  city: string;
  lat: number;
  lng: number;
  spread: number; // degrees — how far markers scatter from the hub center
  count: number;
}

// Same four Tricity coordinates used in CityRoute.tsx, each seeded with a
// marker count roughly matching Zeto's actual rollout weighting (Chandigarh
// & Zirakpur live and busiest, Mohali/Panchkula launching).
const TRICITY_HUBS: StationHub[] = [
  { city: "Chandigarh", lat: 30.7333, lng: 76.7794, spread: 0.022, count: 11 },
  { city: "Mohali", lat: 30.7046, lng: 76.7179, spread: 0.018, count: 8 },
  { city: "Panchkula", lat: 30.6942, lng: 76.8606, spread: 0.016, count: 6 },
  { city: "Zirakpur", lat: 30.6425, lng: 76.8173, spread: 0.014, count: 5 },
];

interface StationMarker {
  city: string;
  lat: number;
  lng: number;
  delay: number; // seconds — staggers the pulse so markers don't blink in unison
}

const STATION_MARKERS: StationMarker[] = (() => {
  const random = mulberry32(1907);
  const markers: StationMarker[] = [];

  TRICITY_HUBS.forEach((hub) => {
    for (let i = 0; i < hub.count; i++) {
      const angle = random() * Math.PI * 2;
      const radius = Math.sqrt(random()) * hub.spread;

      markers.push({
        city: hub.city,
        lat: hub.lat + Math.sin(angle) * radius,
        lng: hub.lng + Math.cos(angle) * radius,
        delay: random() * 2.4,
      });
    }
  });

  return markers;
})();

// Roughly the Tricity area plus a little breathing room — keeps the map
// from panning/zooming out into unrelated parts of Punjab.
const TRICITY_BOUNDS = L.latLngBounds([30.58, 76.62], [30.82, 76.95]);

// A small lime dot with an expanding, fading "live" ring behind it (the
// classic radar-ping pattern) — built once per delay value and reused, not
// created inline in JSX, since a fresh L.divIcon on every render makes
// react-leaflet swap the marker's icon on every re-render (see the same
// note in CityRouteMap.tsx's makeIcon).
const ICON_SIZE = 14;

function makeStationIcon(delay: number) {
  return L.divIcon({
    className: "",
    html: `
      <span style="position:relative;display:block;width:${ICON_SIZE}px;height:${ICON_SIZE}px;">
        <span
          class="zeto-station-ping"
          style="position:absolute;inset:-7px;border-radius:9999px;background:#D9E24E;animation-delay:${delay}s;"
        ></span>
        <span style="position:absolute;inset:0;border-radius:9999px;background:#D9E24E;border:1.5px solid #0B0B10;box-shadow:0 0 8px 1px rgba(217,226,78,0.55);"></span>
      </span>`,
    iconSize: [ICON_SIZE, ICON_SIZE],
    iconAnchor: [ICON_SIZE / 2, ICON_SIZE / 2],
    popupAnchor: [0, -ICON_SIZE / 2 - 2],
  });
}

const stationIcons = STATION_MARKERS.map((m) => makeStationIcon(m.delay));

export default function SwapStationsMap() {
  return (
    <>
      {/* self-contained: the pulse keyframes travel with this component
          rather than living in the parent's <style> block, since Leaflet
          injects the marker HTML above straight into the DOM, outside
          React's own render tree. */}
      <style>{`
        @keyframes zeto-station-ping {
          0% { transform: scale(0.6); opacity: 0.55; }
          70%, 100% { transform: scale(2); opacity: 0; }
        }
        .zeto-station-ping {
          animation: zeto-station-ping 2.4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        /* Fakes a dark basemap on top of the plain (light) OSM tiles —
           invert flips light-to-dark, then hue-rotate undoes the color
           shift invert() causes (roads/water would otherwise come out an
           odd orange/blue). Scoped to the tile pane only, so the lime
           station markers and popups keep their real colors. */
        .zeto-stations-map .leaflet-tile-pane {
          filter: invert(1) hue-rotate(180deg) brightness(0.85) contrast(0.9) saturate(0.6);
        }
      `}</style>

      <MapContainer
        center={[30.6937, 76.7938]}
        zoom={12}
        minZoom={11}
        maxZoom={16}
        maxBounds={TRICITY_BOUNDS}
        maxBoundsViscosity={1.0}
        zoomControl={false}
        scrollWheelZoom={false}
        className="zeto-stations-map h-full w-full"
      >
        <TileLayer
          // Carto's free dark_all tiles now watermark every tile with
          // "API KEY REQUIRED" unless you're on a paid plan — so this uses
          // the same plain OpenStreetMap tile server as CityRouteMap.tsx
          // (proven working there) and fakes the dark theme with a CSS
          // filter on .leaflet-tile-pane below, instead of depending on a
          // provider that can start gating its free tier at any time.
          //
          // Fine for prototyping — for production traffic, swap in a
          // provider with a usage policy for hosted apps (e.g. MapTiler,
          // a paid Carto plan).
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <ZoomControl position="bottomright" />

        {STATION_MARKERS.map((m, i) => (
          <Marker key={i} position={[m.lat, m.lng]} icon={stationIcons[i]}>
            <Popup>{m.city} swap station</Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}
