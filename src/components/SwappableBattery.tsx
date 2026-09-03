// src/components/SwappableBattery.tsx

import {
  ShieldCheck,
  BatteryCharging,
  Zap,
  QrCode,
  Gauge,
  Layers,
} from "lucide-react";

/**
 * Place the uploaded product photo at this path (or update the import):
 *   src/assets/zeto-smart-battery.jpeg
 */
import batteryImage from "../assets/ChatGPT Image Sep 3, 2026, 01_01_05 PM.png";

const SPECS = [
  { label: "Voltage", value: "51.2V" },
  { label: "Capacity", value: "45Ah" },
  { label: "Energy", value: "2,304Wh" },
  { label: "Chemistry", value: "LFP" },
] as const;

const HIGHLIGHTS = [
  {
    icon: ShieldCheck,
    title: "Safe by design",
    description:
      "LiFePO4 cells with built-in protection circuitry, engineered to run cool and stay stable swap after swap.",
  },
  {
    icon: BatteryCharging,
    title: "Long life",
    description:
      "Rated for thousands of charge cycles, so fleet operators get years of reliable range without a performance dip.",
  },
  {
    icon: Zap,
    title: "High performance",
    description:
      "51.2V / 45Ah delivers consistent power output across the full discharge curve — from a cold start to the last kilometre.",
  },
];

export default function SwappableBattery() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* ================= IMAGE ================= */}
          <div className="relative order-2 lg:order-1">
            <div
              className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-[#1FA24A]/10 blur-2xl"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-8 -right-6 h-32 w-32 rounded-full bg-emerald-100/60 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative overflow-hidden rounded-[28px] border border-slate-100 bg-slate-50 shadow-[0_25px_80px_-30px_rgba(15,23,42,0.35)]">
              <img
                src={batteryImage}
                alt="Zeto Energy LFP battery, model B699847, rated 51.2V 45Ah 2,304Wh"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating spec chip */}
            <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-lg shadow-slate-900/10 sm:left-10">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#1FA24A]/10 text-[#1FA24A]">
                <QrCode size={17} />
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                  Scan for battery info
                </p>
                <p className="text-xs font-bold text-slate-800">
                  Every unit, individually tracked
                </p>
              </div>
            </div>
          </div>

          {/* ================= CONTENT ================= */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1FA24A]/20 bg-[#1FA24A]/5 px-3.5 py-1.5 text-xs font-semibold text-[#188A3E]">
              <Layers size={13} />
              Zeto Energy Battery
            </div>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              One battery,
              <span className="text-[#1FA24A]"> built to swap</span> in
              seconds.
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-500">
              Every Zeto Energy battery is a self-contained, swappable LFP
              pack — pull it out of one scooter, drop it into a dock, and go.
              No cables, no waiting, no downtime for your fleet.
            </p>

            {/* Spec strip */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {SPECS.map((spec) => (
                <div
                  key={spec.label}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-center"
                >
                  <p className="text-base font-extrabold text-slate-900">
                    {spec.value}
                  </p>
                  <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                    {spec.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="mt-9 space-y-5">
              {HIGHLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#1FA24A]/10 text-[#1FA24A]">
                      <Icon size={19} strokeWidth={1.8} />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-slate-800">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-sm leading-relaxed text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex items-center gap-2 text-xs font-medium text-slate-400">
              <Gauge size={14} className="text-[#1FA24A]" />
              Powered by Zetrax Tech Pvt Ltd
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}