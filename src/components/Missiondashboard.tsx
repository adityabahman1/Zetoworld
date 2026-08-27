import React from "react";

interface Stat {
  value: string;
  label: string;
}

interface MissionDashboardProps {
  eyebrow?: string;
  headline?: string;
  paragraphs?: string[];
  stats?: Stat[];
}

const defaultStats: Stat[] = [
  { value: "500+", label: "Scooters live" },
  { value: "1", label: "City running" },
  { value: "3", label: "Cities launching" },
  { value: "100%", label: "Electric" },
];

const defaultParagraphs = [
  "Owning a scooter means fuel, EMIs, insurance, and upkeep — whether you ride ten minutes a day or two hours. Zeto exists so riders only pay for the time they spend on the road, in a scooter that's always available, charged, and ready for errands, commutes, or a quick ride across town.",
];

export default function MissionDashboard({
  eyebrow = "Our mission",
  headline = "Make hourly electric riding the obvious choice",
  paragraphs = defaultParagraphs,
  stats = defaultStats,
}: MissionDashboardProps) {
  return (
    <section className="bg-[#F3F8F2] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Copy block */}
        <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3F7A4F]">
          <span className="h-2 w-2 rounded-full bg-[#5FAE6A]" />
          {eyebrow}
        </div>

        <h2 className="max-w-2xl text-4xl font-black uppercase leading-[1.05] tracking-tight text-[#173A22] sm:text-5xl">
          {headline}
        </h2>

        <div className="mt-8 max-w-2xl">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-[17px] leading-relaxed text-[#4A5F4E]">
              {p}
            </p>
          ))}
        </div>

        {/* Stats — one horizontal row, numbers highlighted */}
        <div className="mt-16 grid grid-cols-2 divide-y divide-[#D9E9D6] rounded-3xl border border-[#D9E9D6] bg-white sm:grid-cols-4 sm:divide-y-0 sm:divide-x">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center gap-2 px-6 py-10 text-center"
            >
              <span className="inline-flex items-center justify-center rounded-2xl bg-[#5FAE6A]/15 px-4 py-1.5">
                <span className="font-mono text-4xl font-black tabular-nums text-[#173A22] sm:text-5xl">
                  {stat.value}
                </span>
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#527257]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}