// src/components/SwapStation.tsx

import {
  ScanLine,
  RefreshCcw,
  Zap,
  Grid3x3,
  LifeBuoy,
  ShieldAlert,
  MonitorSmartphone,
} from "lucide-react";

/**
 * Place the uploaded product photo at this path (or update the import):
 *   src/assets/zeto-swap-station.jpeg
 */
import stationImage from "../assets/WhatsApp Image 2026-08-24 at 10.04.03 PM.jpeg";

const STEPS = [
  {
    icon: ScanLine,
    title: "Scan",
    description: "Scan the QR code on the station with the Zeto Rider app.",
  },
  {
    icon: RefreshCcw,
    title: "Swap",
    description: "Drop your depleted battery in an open dock and pull a charged one.",
  },
  {
    icon: Zap,
    title: "Go",
    description: "Lock it in and ride — the whole exchange takes under a minute.",
  },
];

const FEATURES = [
  {
    icon: Grid3x3,
    title: "12 smart docks",
    description:
      "Each dock charges and monitors a battery independently, with a live status light so riders can see what's ready at a glance.",
  },
  {
    icon: MonitorSmartphone,
    title: "Touch display",
    description:
      "An on-station screen guides every swap step-by-step and shows real-time availability before a rider even scans in.",
  },
  {
    icon: LifeBuoy,
    title: "One-touch help",
    description:
      "A dedicated help button connects riders straight to support if a swap doesn't go as expected.",
  },
  {
    icon: ShieldAlert,
    title: "Emergency stop",
    description:
      "A physical emergency-stop control and onboard camera keep every station safe and monitored around the clock.",
  },
];

export default function SwapStation() {
  return (
    <section className="bg-slate-50 px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto max-w-6xl">
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#1FA24A]/20 bg-[#1FA24A]/5 px-3.5 py-1.5 text-xs font-semibold text-[#188A3E]">
            <Grid3x3 size={13} />
            Zeto Energy Battery Swap
          </div>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            A charged battery,
            <span className="text-[#1FA24A]"> always around the corner.</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-500">
            Zeto's swap stations keep fleets moving without charging
            downtime — riders exchange a depleted battery for a fully
            charged one in under a minute, any time of day.
          </p>
        </div>

        {/* ================= IMAGE ================= */}
        <div className="relative mt-14">
          <div
            className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-[#1FA24A]/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-emerald-100/50 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative mx-auto w-4/5 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_25px_80px_-30px_rgba(15,23,42,0.3)]">
            <img
              src={stationImage}
              alt="Zeto Energy battery swap station with a Zeto scooter parked alongside"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Steps strip, overlapping the image on desktop */}
          <div className="relative z-10 mx-auto mt-[-2.5rem] hidden max-w-4xl grid-cols-3 gap-4 px-4 lg:grid">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-lg shadow-slate-900/10"
                >
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-[#1FA24A]/10 text-[#1FA24A]">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-3 text-sm font-bold text-slate-800">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Steps strip, stacked on mobile (no overlap trick) */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:hidden">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-center"
              >
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-[#1FA24A]/10 text-[#1FA24A]">
                  <Icon size={20} strokeWidth={1.8} />
                </span>
                <h3 className="mt-3 text-sm font-bold text-slate-800">
                  {step.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* ================= FEATURE GRID ================= */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1FA24A] hover:shadow-lg hover:shadow-[#1FA24A]/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1FA24A]/10 text-[#1FA24A] transition-colors duration-300 group-hover:bg-[#1FA24A] group-hover:text-white">
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-base font-bold text-slate-800 transition-colors duration-300 group-hover:text-[#1FA24A]">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}