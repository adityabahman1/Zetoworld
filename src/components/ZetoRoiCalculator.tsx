import { useMemo, useRef, useState } from "react";
import { ArrowUpDown, Calendar, ImagePlus, Minus, Plus, TrendingUp, Wallet } from "lucide-react";
import img from "../assets/ChatGPT Image Sep 1, 2026, 04_58_03 PM.png"
/**
 * Zeto ROI Calculator
 *
 * Logic (unchanged):
 * - Cost per scooter: ₹40,000
 * - ROI: 45% over 3 years (applied to total investment)
 */

const COST_PER_SCOOTER = 40_000;
const ROI_PERCENT_3YR = 45;

const MIN_SCOOTERS = 1;
const MAX_SCOOTERS = 200;
const DEFAULT_SCOOTERS = 10;

function formatINR(n: number) {
  return "₹" + Math.round(n).toLocaleString("en-IN");
}

// ---- Arc gauge geometry ----
const GAUGE_CX = 120;
const GAUGE_CY = 118;
const GAUGE_R = 96;

function pointOnArc(percent: number) {
  const theta = Math.PI - percent * Math.PI; // PI (left/min) -> 0 (right/max)
  return {
    x: GAUGE_CX + GAUGE_R * Math.cos(theta),
    y: GAUGE_CY - GAUGE_R * Math.sin(theta),
  };
}

const ARC_LENGTH = Math.PI * GAUGE_R;

export default function ZetoRoiCalculator() {
  const [scooters, setScooters] = useState(DEFAULT_SCOOTERS);
  const svgRef = useRef<SVGSVGElement>(null);
  const draggingRef = useRef(false);

  const percent = (scooters - MIN_SCOOTERS) / (MAX_SCOOTERS - MIN_SCOOTERS);

  const { investment, threeYearReturn, profit } = useMemo(() => {
    const investment = scooters * COST_PER_SCOOTER;
    const profit = investment * (ROI_PERCENT_3YR / 100);
    const threeYearReturn = investment + profit;
    return { investment, threeYearReturn, profit };
  }, [scooters]);

  const clampScooters = (n: number) =>
    Math.min(MAX_SCOOTERS, Math.max(MIN_SCOOTERS, n));

  const updateFromPointer = (clientX: number, clientY: number) => {
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const scale = 240 / rect.width; // viewBox width is 240
    const x = (clientX - rect.left) * scale - GAUGE_CX;
    const y = (clientY - rect.top) * scale - GAUGE_CY;
    let theta = Math.atan2(-y, x); // 0..PI on top half
    theta = Math.max(0, Math.min(Math.PI, theta));
    const p = 1 - theta / Math.PI;
    const value = Math.round(MIN_SCOOTERS + p * (MAX_SCOOTERS - MIN_SCOOTERS));
    setScooters(clampScooters(value));
  };

  const handlePointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    draggingRef.current = true;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    updateFromPointer(e.clientX, e.clientY);
  };
  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!draggingRef.current) return;
    updateFromPointer(e.clientX, e.clientY);
  };
  const handlePointerUp = () => {
    draggingRef.current = false;
  };

  const handle = pointOnArc(percent);

  return (
    <div
      style={{
        ["--zeto-bg" as any]: "#F6FAF5",
        ["--zeto-surface" as any]: "#FFFFFF",
        ["--zeto-surface-2" as any]: "#EEF5EC",
        ["--zeto-ink" as any]: "#132116",
        ["--zeto-ink-dim" as any]: "#66766A",
        ["--zeto-primary" as any]: "#1E9E52",
        ["--zeto-primary-dim" as any]: "#CFEBD6",
        ["--zeto-secondary" as any]: "#8BC34A",
        ["--zeto-line" as any]: "#E3EEE2",
      }}
      className="w-full bg-[var(--zeto-bg)] text-[var(--zeto-ink)] font-[Inter,ui-sans-serif,system-ui] antialiased"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap');
        .zeto-display { font-family: 'Plus Jakarta Sans', ui-sans-serif, system-ui; }
        @media (prefers-reduced-motion: reduce) {
          .zeto-anim { transition: none !important; }
        }
      `}</style>

      <div className="max-w-[68rem] mx-auto px-6 md:px-10 py-14 md:py-20 grid md:grid-cols-2 gap-12 md:gap-10 items-center">
        {/* LEFT: headline + image */}
        <div>
          <h1 className="zeto-display text-4xl md:text-[3.4rem] leading-[1.05] font-bold text-[var(--zeto-ink)]">
            Invest Smart.
            <br />
            <span className="text-[var(--zeto-primary)]">Earn More.</span>
          </h1>
          <div className="mt-5 h-1 w-14 rounded-full bg-[var(--zeto-primary)]" />

          <div className="relative mt-10">
            {/* soft backdrop circle */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="h-[85%] w-[85%] rounded-full bg-[radial-gradient(circle,var(--zeto-primary-dim)_0%,transparent_70%)]" />
            </div>

            {/* image placeholder — replace with your own scooter image */}
            <div className="relative mx-auto  w-full max-w-[26rem]  border-[var(--zeto-primary-dim)] bg-white/60 flex flex-col items-center justify-center gap-2 text-[var(--zeto-ink-dim)]">
              <img src={img} alt="" />
            </div>

            {/* floating badges */}
            <div className="absolute -top-4 left-0 md:-left-6 bg-white rounded-2xl shadow-md px-4 py-2.5 flex items-center gap-3 border border-[var(--zeto-line)]">
              <span className="grid place-items-center h-8 w-8 rounded-full bg-[var(--zeto-primary)] text-white">
                <TrendingUp size={16} />
              </span>
              <div className="leading-tight">
                <div className="zeto-display text-sm font-bold text-[var(--zeto-primary)]">
                  {ROI_PERCENT_3YR}% ROI
                </div>
                <div className="text-xs text-[var(--zeto-ink-dim)]">in 3 Years</div>
              </div>
            </div>

            <div className="absolute bottom-4 -left-2 md:-left-8 bg-white rounded-2xl shadow-md px-4 py-2.5 flex items-center gap-3 border border-[var(--zeto-line)]">
              <span className="grid place-items-center h-8 w-8 rounded-full bg-[var(--zeto-primary)] text-white text-sm zeto-display">
                ₹
              </span>
              <div className="leading-tight">
                <div className="zeto-display text-sm font-bold">
                  {formatINR(COST_PER_SCOOTER)}
                </div>
                <div className="text-xs text-[var(--zeto-ink-dim)]">Per Scooter</div>
              </div>
            </div>

            <div className="absolute top-1/3 -right-2 md:-right-6 bg-white rounded-2xl shadow-md px-4 py-2.5 flex items-center gap-3 border border-[var(--zeto-line)]">
              <span className="grid place-items-center h-8 w-8 rounded-full bg-[var(--zeto-primary)] text-white">
                <Calendar size={16} />
              </span>
              <div className="leading-tight">
                <div className="zeto-display text-sm font-bold">3 Years</div>
                <div className="text-xs text-[var(--zeto-ink-dim)]">Return Period</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: calculator card */}
        <div className="rounded-[28px] border border-[var(--zeto-line)] bg-[var(--zeto-surface)] shadow-[0_20px_50px_-25px_rgba(30,158,82,0.35)] p-7 md:p-9">
          <div className="text-center text-xs font-semibold tracking-wide text-[var(--zeto-ink-dim)]">
            Choose fleet size
          </div>

          {/* Gauge */}
          <div className="mt-4 flex items-center justify-center gap-2">
            <button
              type="button"
              aria-label="Decrease scooters"
              onClick={() => setScooters((s) => clampScooters(s - 1))}
              className="grid place-items-center h-11 w-11 shrink-0 rounded-full bg-[var(--zeto-surface-2)] text-[var(--zeto-primary)] hover:bg-[var(--zeto-primary-dim)] transition-colors"
            >
              <Minus size={18} />
            </button>

            <svg
              ref={svgRef}
              viewBox="0 0 240 140"
              className="w-full max-w-[15rem] touch-none select-none cursor-pointer"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
            >
              <path
                d={`M ${GAUGE_CX - GAUGE_R} ${GAUGE_CY} A ${GAUGE_R} ${GAUGE_R} 0 0 1 ${GAUGE_CX + GAUGE_R} ${GAUGE_CY}`}
                fill="none"
                stroke="var(--zeto-surface-2)"
                strokeWidth={10}
                strokeLinecap="round"
              />
              <path
                d={`M ${GAUGE_CX - GAUGE_R} ${GAUGE_CY} A ${GAUGE_R} ${GAUGE_R} 0 0 1 ${GAUGE_CX + GAUGE_R} ${GAUGE_CY}`}
                fill="none"
                stroke="var(--zeto-primary)"
                strokeWidth={10}
                strokeLinecap="round"
                strokeDasharray={ARC_LENGTH}
                strokeDashoffset={ARC_LENGTH * (1 - percent)}
                className="zeto-anim transition-[stroke-dashoffset] duration-200 ease-out"
              />
              <circle
                cx={handle.x}
                cy={handle.y}
                r={11}
                fill="var(--zeto-primary)"
                stroke="white"
                strokeWidth={4}
              />
              <circle cx={handle.x} cy={handle.y} r={3.5} fill="white" />
              <text
                x={GAUGE_CX}
                y={GAUGE_CY - 22}
                textAnchor="middle"
                className="zeto-display"
                fontSize={40}
                fontWeight={700}
                fill="var(--zeto-primary)"
              >
                {scooters}
              </text>
              <text
                x={GAUGE_CX}
                y={GAUGE_CY + 4}
                textAnchor="middle"
                fontSize={13}
                fill="var(--zeto-ink-dim)"
              >
                Scooters
              </text>
            </svg>

            <button
              type="button"
              aria-label="Increase scooters"
              onClick={() => setScooters((s) => clampScooters(s + 1))}
              className="grid place-items-center h-11 w-11 shrink-0 rounded-full bg-[var(--zeto-surface-2)] text-[var(--zeto-primary)] hover:bg-[var(--zeto-primary-dim)] transition-colors"
            >
              <Plus size={18} />
            </button>
          </div>

          {/* Investment / Returns */}
          <div className="relative mt-2">
            <div className="rounded-2xl bg-[var(--zeto-surface-2)] p-5">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-[var(--zeto-ink-dim)]">
                <Wallet size={14} />
                Total investment
              </div>
              <div className="zeto-display text-2xl md:text-3xl font-bold mt-1.5">
                {formatINR(investment)}
              </div>
            </div>

            <div className="flex justify-center -my-3.5 relative z-10">
              <span className="grid place-items-center h-8 w-8 rounded-full bg-white border border-[var(--zeto-line)] shadow-sm text-[var(--zeto-primary)]">
                <ArrowUpDown size={14} />
              </span>
            </div>

            <div className="rounded-2xl bg-[var(--zeto-primary-dim)] p-5">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-[var(--zeto-primary)]">
                <TrendingUp size={14} />
                Estimated returns
              </div>
              <div className="zeto-display text-2xl md:text-3xl font-bold mt-1.5 text-[var(--zeto-primary)]">
                {formatINR(threeYearReturn)}
              </div>
              <div className="text-sm mt-1 text-[var(--zeto-ink)]">
                <span className="font-semibold text-[var(--zeto-primary)]">
                  {ROI_PERCENT_3YR}%
                </span>{" "}
                ROI in 3 years &middot; net profit {formatINR(profit)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}