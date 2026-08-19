// src/components/FocoPartnerJourney.tsx

import {
  FileSignature,
  Hammer,
  Rocket,
  Wallet,
  Check,
} from "lucide-react";

/**
 * -----------------------------------------------------------------------
 * FOCO — THE PARTNERSHIP JOURNEY
 * -----------------------------------------------------------------------
 *
 * A fourth, distinct idea: not a benefits pitch, not an ownership table,
 * not a daily timeline — this is the partnership itself as a process,
 * from signing to first payout. It answers "what actually happens, and
 * when." Milestones carry a rough timeframe so the roadmap reads as a
 * real plan, not a metaphor.
 *
 * Palette locked to the Zeto brand green (#1FA24A) throughout — no
 * off-brand accent colors. The final "payouts" milestone is the payoff
 * the whole roadmap builds to, so it carries the most visual weight:
 * solid fill, glow, and a pulsing live marker.
 */

interface Milestone {
  stage: string;
  timeframe: string;
  title: string;
  detail: string;
  icon: typeof FileSignature;
}

const MILESTONES: Milestone[] = [
  {
    stage: "01",
    timeframe: "Week 1",
    title: "Sign & commit capital",
    detail: "Site and investment locked in, agreement signed.",
    icon: FileSignature,
  },
  {
    stage: "02",
    timeframe: "Weeks 2–6",
    title: "Zeto builds the site",
    detail: "Fit-out, licensing, hiring, and systems setup.",
    icon: Hammer,
  },
  {
    stage: "03",
    timeframe: "Week 7",
    title: "Site goes live",
    detail: "Zeto's team opens and starts running operations.",
    icon: Rocket,
  },
  {
    stage: "04",
    timeframe: "Ongoing",
    title: "Payouts land",
    detail: "Your share of revenue, on a fixed monthly cycle.",
    icon: Wallet,
  },
];

export default function FocoPartnerJourney() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-slate-950
        px-6
        py-20
        sm:px-10
        lg:py-28
      "
    >
      {/* Ambient glow field — brand green only */}

      <div
        className="
          pointer-events-none
          absolute
          -top-32
          left-1/2
          h-[420px]
          w-[820px]
          -translate-x-1/2
          rounded-full
          bg-[#1FA24A]/20
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          h-[300px]
          w-[300px]
          translate-x-1/3
          translate-y-1/3
          rounded-full
          bg-[#1FA24A]/10
          blur-[100px]
        "
      />

      <div className="relative mx-auto max-w-6xl">
        {/* =====================================================
            HEADER
            ===================================================== */}

        <div className="mx-auto max-w-2xl text-center">
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#1FA24A]/30
              bg-[#1FA24A]/10
              px-4
              py-1.5
            "
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1FA24A] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#1FA24A]" />
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#3ECB80]">
              From signing to payout
            </span>
          </div>

          <h2
            className="
              mt-5
              text-3xl
              font-bold
              tracking-tight
              text-white
              sm:text-4xl
            "
          >
            What actually happens next
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-400">
            Four stages, one path. No open-ended timeline, no guessing
            when the site starts paying you back.
          </p>
        </div>

        {/* =====================================================
            ROADMAP
            ===================================================== */}

        <div className="mt-16">
          {/* Connector row (desktop) — fills green left to right */}

          <div className="relative hidden sm:block">
            <div className="absolute left-[12.5%] right-[12.5%] top-6 h-0.5 bg-slate-800" />
            <div
              className="
                absolute
                left-[12.5%]
                top-6
                h-0.5
                w-[75%]
                bg-gradient-to-r
                from-[#1FA24A]/40
                via-[#1FA24A]
                to-[#1FA24A]
              "
            />

            <div className="relative grid grid-cols-4">
              {MILESTONES.map((milestone, index) => {
                const isLast = index === MILESTONES.length - 1;
                return (
                  <div
                    key={milestone.stage}
                    className="flex flex-col items-center"
                  >
                    <div
                      className={`
                        relative
                        z-10
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        border-2
                        text-sm
                        font-bold
                        ${
                          isLast
                            ? "border-[#1FA24A] bg-[#1FA24A] text-slate-950 shadow-[0_0_0_6px_rgba(31,162,74,0.15)]"
                            : "border-[#1FA24A] bg-slate-950 text-[#3ECB80]"
                        }
                      `}
                    >
                      {isLast ? <Check size={18} strokeWidth={3} /> : milestone.stage}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cards */}

          <div
            className="
              mt-6
              grid
              grid-cols-1
              gap-5
              sm:mt-6
              sm:grid-cols-4
              sm:gap-5
            "
          >
            {MILESTONES.map((milestone, index) => {
              const Icon = milestone.icon;
              const isLast = index === MILESTONES.length - 1;

              return (
                <div key={milestone.stage} className="relative">
                  {/* Mobile stage marker */}

                  <div className="mb-3 flex items-center gap-3 sm:hidden">
                    <div
                      className={`
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border-2
                        border-[#1FA24A]
                        text-xs
                        font-bold
                        ${isLast ? "bg-[#1FA24A] text-slate-950" : "text-[#3ECB80]"}
                      `}
                    >
                      {isLast ? <Check size={16} strokeWidth={3} /> : milestone.stage}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
                      {milestone.timeframe}
                    </span>
                  </div>

                  <div
                    className={`
                      group
                      relative
                      flex
                      h-full
                      flex-col
                      overflow-hidden
                      rounded-2xl
                      border
                      p-5
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      ${
                        isLast
                          ? "border-[#1FA24A]/50 bg-gradient-to-b from-[#1FA24A]/[0.14] to-[#1FA24A]/[0.04] shadow-[0_0_40px_-8px_rgba(31,162,74,0.35)]"
                          : "border-slate-800 bg-slate-900/60 hover:border-[#1FA24A]/40"
                      }
                    `}
                  >
                    {/* Giant ghost number, signature element */}

                    <span
                      aria-hidden="true"
                      className={`
                        pointer-events-none
                        absolute
                        -right-2
                        -top-4
                        select-none
                        text-7xl
                        font-bold
                        leading-none
                        ${isLast ? "text-[#1FA24A]/15" : "text-white/5"}
                      `}
                    >
                      {milestone.stage}
                    </span>

                    <div
                      className={`
                        relative
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-lg
                        ${
                          isLast
                            ? "bg-[#1FA24A] text-slate-950"
                            : "bg-[#1FA24A]/10 text-[#3ECB80] ring-1 ring-inset ring-[#1FA24A]/20 group-hover:bg-[#1FA24A]/20"
                        }
                      `}
                    >
                      <Icon size={18} strokeWidth={isLast ? 2.2 : 1.8} />
                    </div>

                    <span className="relative mt-3 hidden text-xs font-bold uppercase tracking-wide text-[#3ECB80]/80 sm:block">
                      {milestone.timeframe}
                    </span>

                    <h3 className="relative mt-2 text-base font-bold text-white">
                      {milestone.title}
                    </h3>

                    <p className="relative mt-2 text-sm leading-relaxed text-slate-400">
                      {milestone.detail}
                    </p>

                    {isLast && (
                      <div className="relative mt-4 flex items-center gap-1.5 text-xs font-bold text-[#3ECB80]">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1FA24A] opacity-75" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#1FA24A]" />
                        </span>
                        <span>Recurring from here on</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}