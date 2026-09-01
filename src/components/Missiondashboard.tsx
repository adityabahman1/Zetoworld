"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: string;
  label: string;
}

interface MissionDashboardProps {
  eyebrow?: string;
  headline?: string;
  stats?: Stat[];
  scooterCount?: number;
  co2SavedPerScooterKg?: number;
  deliveriesLabel?: string;
}

const defaultStats: Stat[] = [
  { value: "500+", label: "Scooters live" },
  { value: "3", label: "Cities launching" },
];

function formatIndianNumber(num: number): string {
  return num.toLocaleString("en-IN");
}

function CountUpValue({ value, animateKey }: { value: string; animateKey: number }) {
  const match = value.match(/^([^\d]*)([\d,]+)(.*)$/);
  const [display, setDisplay] = useState(match ? `${match[1]}0${match[3]}` : value);

  useEffect(() => {
    if (!match) {
      setDisplay(value);
      return;
    }
    const [, prefix, numStr, suffix] = match;
    const target = parseInt(numStr.replace(/,/g, ""), 10);
    const duration = 1200;
    const start = performance.now();
    let raf: number;

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      setDisplay(`${prefix}${formatIndianNumber(current)}${suffix}`);
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animateKey]);

  return <>{display}</>;
}

export default function MissionDashboard({
  eyebrow = "Our mission",
  headline = "Make hourly electric riding the obvious choice",
  stats = defaultStats,
  scooterCount = 500,
  co2SavedPerScooterKg = 400,
  deliveriesLabel = "5 Lakh+",
}: MissionDashboardProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const wasVisible = useRef(false);
  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !wasVisible.current) {
          wasVisible.current = true;
          setAnimateKey((k) => k + 1);
        } else if (!entry.isIntersecting) {
          wasVisible.current = false;
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const co2SavedTonnes = Math.round((scooterCount * co2SavedPerScooterKg) / 1000);

  // "100% Electric" lives in the same grid as every other stat, so all
  // values share one flex row and align on a single baseline.
  const gridStats: Stat[] = [
    { value: "100%", label: "Electric" },
    ...stats,
    { value: deliveriesLabel, label: "Deliveries completed" },
    { value: `${formatIndianNumber(co2SavedTonnes)}+`, label: "Tonnes CO₂ saved" },
  ];

  return (
    <section ref={sectionRef} className="px-4 py-16 sm:px-6 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Header block — centered on every breakpoint, type scales down for mobile */}
        <div className="flex flex-col items-center border-b border-[#E3EBE4] pb-8 text-center sm:pb-10">
          <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#3F7A4F] sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-[#5FAE6A]" />
            {eyebrow}
          </div>

          <h2 className="max-w-3xl text-3xl font-black uppercase leading-[1.1] tracking-tight text-[#173A22] sm:text-4xl md:text-5xl">
            {headline}
          </h2>
        </div>

        {/* Stats row — 2 columns on mobile with the 5th stat centered on its own
            row, 5 columns from sm up. Number size scales per breakpoint but stays
            uniform within a row so every value still lands on one baseline. */}
        <div
          key={animateKey}
          className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 bg-white sm:mt-14 sm:grid-cols-5 sm:gap-x-8 sm:gap-y-12"
        >
          {gridStats.map((stat, i) => (
            <div
              key={`${stat.label}-${i}`}
              className={`flex h-full flex-col items-center px-2 text-center ${
                i === gridStats.length - 1 && gridStats.length % 2 === 1
                  ? "col-span-2 sm:col-span-1"
                  : ""
              }`}
            >
              <div className="flex h-10 items-end justify-center sm:h-[3.25rem] md:h-[3.75rem]">
                <span className="whitespace-nowrap font-mono text-3xl font-black tabular-nums leading-none text-[#173A22] sm:text-4xl md:text-5xl">
                  <CountUpValue value={stat.value} animateKey={animateKey} />
                </span>
              </div>

              <div className="mt-3 flex h-8 items-start justify-center">
                <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-wider text-[#527257] sm:text-[11px]">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}