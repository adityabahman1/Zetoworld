import { useEffect, useState } from "react";
import {
  Zap,
  BatteryFull,
  BatteryLow,
  ShieldCheck,
  Timer,
} from "lucide-react";

/**
 * Zeto Battery Swapping Station — product explainer
 *
 * Design notes:
 * - Palette: light green theme — white base, soft mint surfaces, a fresh
 *   green (#2F8F4E) as the primary accent and a lime green (#8BC34A) as
 *   the secondary "charged" accent.
 * - Display face: Plus Jakarta Sans (clean, modern, friendly). Body: Inter.
 * - Signature element: an animated battery swap — a depleted pack slides
 *   out on the left, a full pack slides in on the right, charge bar fills.
 */

const STATS = [
  { value: "<90s", label: "Average swap time" },
  { value: "24/7", label: "Station availability" },
  { value: "1,000+", label: "Charge cycles per pack" },
  { value: "0", label: "Minutes spent waiting to charge" },
];

const BENEFITS = [
  {
    icon: Timer,
    title: "No downtime",
    body: "Swapping takes the time of a fuel stop, not a charging session. Fleets stay on the road instead of parked at a plug.",
  },
  {
    icon: ShieldCheck,
    title: "Batteries you don't own",
    body: "Every pack is owned, maintained, and health-checked by Zeto, so degraded batteries never become your problem.",
  },
  {
    icon: Zap,
    title: "Grid-friendly charging",
    body: "Stations charge idle packs off-peak in bulk, which is gentler on batteries and cheaper than fast-charging one at a time.",
  },
];

export default function ZetoBatterySwapStation() {
  const [charging, setCharging] = useState(false);

  useEffect(() => {
    const id = window.setInterval(() => setCharging((c) => !c), 2600);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      style={{
        // component-scoped design tokens (light green theme)
        ["--zeto-bg" as any]: "#FFFFFF",
        ["--zeto-surface" as any]: "#EFF6EE",
        ["--zeto-surface-2" as any]: "#DEEBDB",
        ["--zeto-ink" as any]: "#1C2A1E",
        ["--zeto-ink-dim" as any]: "#5E6E5B",
        ["--zeto-ink-faint" as any]: "#8CA087",
        ["--zeto-primary" as any]: "#2F8F4E",
        ["--zeto-primary-dim" as any]: "#BFE3C6",
        ["--zeto-secondary" as any]: "#8BC34A",
        ["--zeto-line" as any]: "#DCE8D8",
      }}
      className="w-full bg-[var(--zeto-bg)] text-[var(--zeto-ink)] font-[Inter,ui-sans-serif,system-ui] antialiased"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap');
        .zeto-display { font-family: 'Plus Jakarta Sans', ui-sans-serif, system-ui; }
        @media (prefers-reduced-motion: reduce) {
          .zeto-anim { transition: none !important; animation: none !important; }
        }
      `}</style>

      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden border-b border-[var(--zeto-line)]">
        <div className="max-w-[72rem] mx-auto px-6 md:px-10 pt-16 pb-14 md:pt-24 md:pb-20 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-6">
            <Zap size={16} className="text-[var(--zeto-primary)]" />
            <span className="zeto-display text-xs tracking-[0.2em] uppercase text-[var(--zeto-primary)]">
              Zeto Swap Station
            </span>
          </div>

          <h2 className="zeto-display text-4xl md:text-6xl leading-[1.05] font-semibold w-full">
            Charging takes an hour.
            <br />
            <span className="">Swapping takes a stoplight.</span>
          </h2>

          <p className="mt-6 max-w-3xl text-[15px] md:text-lg leading-relaxed text-[var(--zeto-ink-dim)]">
            Zeto stations let electric two- and three-wheelers trade a
            depleted battery for a fully charged one in under 90 seconds —
            so riders spend their day moving, not waiting at a plug.
          </p>

          {/* Signature element: animated swap visual */}
          <div className="mt-12 w-full rounded-2xl border border-[var(--zeto-line)] bg-[var(--zeto-surface)] p-6 md:p-6">
            <div className="flex items-center justify-between gap-4 md:gap-10">
              {/* outgoing depleted battery */}
              <div className="flex-1 flex flex-col items-center gap-3">
                <BatteryLow
                  size={40}
                  className="zeto-anim text-[var(--zeto-ink-dim)] transition-transform duration-700"
                  style={{ transform: charging ? "translateX(-6px)" : "translateX(0)" }}
                />
                <span className="text-xs uppercase tracking-widest text-[var(--zeto-ink-dim)]">
                  Depleted pack out
                </span>
              </div>

              {/* charge bar */}
              <div className="flex-[2] flex flex-col items-center gap-3">
                <div className="w-full h-2.5 rounded-full bg-[var(--zeto-surface-2)] overflow-hidden border border-[var(--zeto-line)]">
                  <div
                    className="zeto-anim h-full rounded-full transition-[width] duration-[2200ms] ease-in-out"
                    style={{
                      width: charging ? "96%" : "8%",
                      background:
                        "linear-gradient(90deg, var(--zeto-primary), var(--zeto-secondary))",
                    }}
                  />
                </div>
                <span className="zeto-display text-xs tracking-[0.2em] uppercase text-[var(--zeto-secondary)]">
                  {charging ? "Swap complete" : "Swapping…"}
                </span>
              </div>

              {/* incoming full battery */}
              <div className="flex-1 flex flex-col items-center gap-3">
                <BatteryFull
                  size={40}
                  className="zeto-anim transition-transform duration-700"
                  style={{
                    color: charging ? "var(--zeto-secondary)" : "var(--zeto-ink-dim)",
                    transform: charging ? "translateX(6px)" : "translateX(0)",
                  }}
                />
                <span className="text-xs uppercase tracking-widest text-[var(--zeto-ink-dim)]">
                  Charged pack in
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- STATS ---------------- */}
      <section className="border-b border-[var(--zeto-line)]">
        <div className="max-w-[72rem] mx-auto px-6 md:px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="zeto-display text-2xl md:text-3xl text-[var(--zeto-primary)]">
                {s.value}
              </div>
              <div className="mt-1 text-xs md:text-sm text-[var(--zeto-ink-dim)] leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- BENEFITS ---------------- */}
      <section>
        <div className="max-w-[72rem] mx-auto px-6 md:px-10 py-14 grid gap-10 md:grid-cols-3 text-center">
          {BENEFITS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex flex-col items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--zeto-surface-2)]">
                <Icon size={18} className="text-[var(--zeto-primary)]" />
              </div>
              <h3 className="zeto-display text-lg text-[var(--zeto-ink)]">{title}</h3>
              <p className="text-sm leading-relaxed text-[var(--zeto-ink-dim)]">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}