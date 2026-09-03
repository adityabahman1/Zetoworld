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
// (index 2 / "coming next" is orange to stand out from the green live/launching stages)
const markerColors = ["#173A22", "#5FAE6A", "#F2994A"];

// custom pin-shaped divIcon (classic map-marker teardrop) in the brand/stage
// color — avoids Leaflet's default blue-marker image (and the broken-image-
// path issue that comes with it under most bundlers).
// Built once per color/pulse combo at module scope (not inline in JSX) —
// creating a fresh L.divIcon on every render makes react-leaflet swap the
// marker's icon on every re-render, which under Leaflet's zoom/pan
// animations can leave stray empty icon elements behind on the map.
function makeIcon(color: string, pulse: boolean) {
  const w = pulse ? 32 : 26;
  const h = Math.round(w * 1.35);

  return L.divIcon({
    className: "",
    html: `
      <span style="position:relative;display:block;width:${w}px;height:${h}px;">
        ${
          pulse
            ? `<span style="position:absolute;left:50%;bottom:-2px;width:${w * 0.9}px;height:${w * 0.36}px;transform:translateX(-50%);border-radius:9999px;background:${color};opacity:0.35;animation:zeto-pulse 2.2s ease-in-out infinite;"></span>`
            : ""
        }
        <svg width="${w}" height="${h}" viewBox="0 0 24 32" style="position:absolute;inset:0;filter:drop-shadow(0 3px 6px rgba(23,58,34,0.45));">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 9.5 12 20 12 20s12-10.5 12-20C24 5.373 18.627 0 12 0z" fill="${color}" stroke="#fff" stroke-width="1.5"/>
          <circle cx="12" cy="12" r="5" fill="#fff"/>
        </svg>
      </span>`,
    iconSize: [w, h],
    // anchor at the tip of the pin (bottom-center), not the center of a circle
    iconAnchor: [w / 2, h],
    popupAnchor: [0, -h + 4],
  });
}

// one stable icon instance per stage color, index 0 (live) gets the pulse
const stageIcons = markerColors.map((color, i) => makeIcon(color, i === 0));

// fits the map to whatever pins are passed in, instead of a hardcoded center/zoom
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

      // On desktop (md+) the left portion of the map container sits under
      // the text/timeline scrim (see the gradient overlay in CityRoute.tsx,
      // opaque up to ~55% from the left and not fully clear until ~68%).
      // Symmetric padding centers the fitted bounds in the *whole*
      // container, which pushes most pins under that scrim and leaves the
      // visible right side showing empty map past the bounds — i.e. the
      // map reads as "bled to the left". Reserving extra left padding here
      // shifts the fitted content toward the right, into the unobstructed
      // area, instead.
      //
      // The scrim (see CityRoute.tsx) is fully opaque up to 55% of the
      // container width and only fully transparent by 68% — but pushing the
      // padding all the way out to 68% forces a much lower (more zoomed
      // out) fit than the marker cluster actually needs, just to clear a
      // zone that's already mostly faded out past 55%. Targeting just past
      // the *fully opaque* 55% mark — with a little headroom for the pin
      // graphic, which is drawn above its coordinate, not on it — keeps the
      // westmost pin (Amritsar) clear of the solid part of the scrim while
      // letting fitBounds pick a noticeably tighter zoom than clearing the
      // whole fade band would.
      const isDesktop = window.innerWidth >= 768; // matches Tailwind's md breakpoint
      const leftPad = isDesktop ? window.innerWidth * 0.58 + 30 : 48;
      const topPad = isDesktop ? 80 : 48;

      map.fitBounds(bounds, {
        paddingTopLeft: [leftPad, topPad],
        paddingBottomRight: [48, 48],
        maxZoom: 12,
      });
    };

    const raf = requestAnimationFrame(fit);

    // Also re-fit on any later resize (orientation change, devtools resize,
    // breakpoint switch, sidebar toggling, etc.) so it never gets stuck on
    // a stale frame — and so the left/right split above stays correct
    // across the md breakpoint.
    const ro = new ResizeObserver(() => fit());
    ro.observe(map.getContainer());

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [map, positions]);

  return null;
}

// Roughly India's bounding box (mainland + islands). Used to keep the map
// framed on India — scrolling/zooming out can't drift into neighboring
// countries or out to a world view.
const INDIA_BOUNDS = L.latLngBounds([6.5, 68.0], [37.6, 97.4]);

interface CityRouteMapProps {
  stops: Stop[];
  allPositions: [number, number][];
}

export default function CityRouteMap({ stops, allPositions }: CityRouteMapProps) {
  return (
    <MapContainer
      center={[30.9, 76.0]}
      zoom={8}
      minZoom={5}
      maxBounds={INDIA_BOUNDS}
      maxBoundsViscosity={1.0}
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