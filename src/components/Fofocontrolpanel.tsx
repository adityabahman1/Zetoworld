// src/components/FofoControlPanel.tsx

import {
  GraduationCap,
  Package,
  BookOpenCheck,
  Sparkles,
  Truck,
} from "lucide-react";

/**
 * -----------------------------------------------------------------------
 * FOFO — FRANCHISE OWNED, FRANCHISE OPERATED
 * -----------------------------------------------------------------------
 *
 * FOFO flips FOCO: the franchisee owns AND operates the business.
 * Zeto's role shrinks to equipping, not running. To make that flip
 * legible, this component leads with a different idea entirely — a
 * control gauge, not a card grid, table, timeline, or roadmap. The
 * gauge is split into two zones (Zeto operates / you operate) and the
 * needle swings fully into the owner's zone, arguing the model
 * visually before a word of copy explains it.
 *
 * Below the gauge, a horizontal "toolkit belt" replaces the previous
 * icon-card pattern: five equipped items, styled as a strip of gear
 * rather than a benefits grid, so it doesn't reuse the FOCO layouts.
 */

interface KitItem {
  icon: typeof GraduationCap;
  label: string;
}

const KIT_ITEMS: KitItem[] = [
  { icon: BookOpenCheck, label: "Playbook" },
  { icon: GraduationCap, label: "Training" },
  { icon: Truck, label: "Supply chain" },
  { icon: Sparkles, label: "Brand" },
  { icon: Package, label: "Launch kit" },
];

export default function FofoControlPanel() {
  return (
    <section
      className="
        bg-white
        px-6
        py-4
        sm:px-10
        lg:py-28
      "
    >
      <div className="mx-auto max-w-4xl">
        {/* =====================================================
            HEADER
            ===================================================== */}

        <div className="mx-auto max-w-2xl text-center">
    

          <h2
            className="
              mt-5
              text-3xl
              font-bold
              tracking-tight
              text-slate-900
              sm:text-4xl
            "
          >
            You own it. You run it.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-500">
            Franchise Owned, Franchise Operated puts the wheel fully in
            your hands. Zeto equips the business — every call on the
            ground is yours.
          </p>
        </div>

        {/* =====================================================
            CONTROL GAUGE — signature element
            ===================================================== */}

        <div className="mt-14 flex flex-col items-center">
          <div className="h-[172px] w-[320px]">
            <svg
              viewBox="0 0 320 172"
              className="h-full w-full overflow-visible"
              role="img"
              aria-label="Gauge split into a Zeto zone and an owner zone, with the needle fully in the owner zone"
            >
              <title>Owner holds full operational control</title>
              <desc>
                A semicircular gauge split into two zones. The left zone
                represents Zeto operating the business, the right zone
                represents the owner operating it. The needle points fully
                into the owner zone, showing complete control under the
                FOFO model.
              </desc>

              {/* Left zone — Zeto operates (gray) */}
              <path
                d="M 20 160 A 140 140 0 0 1 160 20"
                fill="none"
                stroke="#CBD5E1"
                strokeWidth="22"
                strokeLinecap="round"
              />

              {/* Right zone — you operate (brand green) */}
              <path
                d="M 160 20 A 140 140 0 0 1 300 160"
                fill="none"
                stroke="#1FA24A"
                strokeWidth="22"
                strokeLinecap="round"
              />

              {/* Tick at each end */}
              <circle cx="20" cy="160" r="4" fill="#94A3B8" />
              <circle cx="300" cy="160" r="4" fill="#0F6E56" />

              {/* Needle, swung into the owner (green) zone */}
              <line
                x1="160"
                y1="150"
                x2="279"
                y2="106"
                stroke="#0F172A"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* Center hub */}
              <circle cx="160" cy="150" r="8" fill="#0F172A" />
            </svg>
          </div>

          {/* Gauge end labels */}
          <div className="-mt-0 flex w-[320px] justify-between px-1">
            <span className="text-xs font-semibold text-slate-400">
              Zeto operates
            </span>
            <span className="text-xs font-semibold text-[#1FA24A]">
              You operate
            </span>
          </div>

          {/* Reading, below the gauge — no overlap with the needle */}
          <div className="mt-3 flex flex-col items-center">
            <span className="text-2xl font-bold text-slate-900">
              Full control
            </span>
            <span className="text-xs font-bold uppercase tracking-wide text-slate-400">
              Owner-operated
            </span>
          </div>
        </div>

        {/* =====================================================
            TOOLKIT BELT
            ===================================================== */}

        <div className="mt-16">
          <p className="text-center text-sm font-semibold text-slate-500">
            What Zeto hands you before day one
          </p>

          <div
            className="
              relative
              mt-6
              flex
              flex-col
              gap-3
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              p-3
              sm:flex-row
              sm:items-stretch
              sm:gap-0
              sm:divide-x
              sm:divide-slate-200
              sm:p-0
            "
          >
            {KIT_ITEMS.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="
                    flex
                    flex-1
                    items-center
                    gap-3
                    px-5
                    py-4
                    sm:flex-col
                    sm:items-center
                    sm:justify-center
                    sm:gap-2.5
                    sm:text-center
                  "
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#1FA24A]/10
                      text-[#1FA24A]
                    "
                  >
                    <Icon size={18} strokeWidth={1.8} />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          <p className="mt-5 text-center text-sm text-slate-400">
            From there, the site is yours to run — staffing, hours,
            pricing calls, day-to-day decisions, all in your hands.
          </p>
        </div>
      </div>
    </section>
  );
}