// CityRouteMap.tsx
// Everything in this file touches `leaflet` / `react-leaflet`, which reads
// `window` at import time. It's loaded via React.lazy() + <ClientOnly> from
// CityRoute.tsx so this module is never imported during the SSR build.

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

interface CityRouteMapProps {
  stops: Stop[];
  allPositions: [number, number][];
}

export default function CityRouteMap({ stops, allPositions }: CityRouteMapProps) {
  return (
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
  );
}