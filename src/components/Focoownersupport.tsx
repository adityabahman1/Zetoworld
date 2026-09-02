// src/components/Focoownersupport.tsx

import { useEffect, useRef, useState } from "react";
import { Radar, Gauge, Wrench } from "lucide-react";

/**
 * -----------------------------------------------------------------------
 * FOCO — THE TECH STACK RUNNING THE FLEET
 * -----------------------------------------------------------------------
 *
 * A tech-ops reassurance section for prospective FOCO owners: the fleet
 * isn't run on guesswork — live tracking, demand-based utilization, and
 * predictive servicing all run in the background so the hub stays
 * productive without the owner watching it. Same icon-badge card-grid
 * shape as FofoBenefitCards / WhyChooseZetoFoco, trimmed to 3 cards.
 */

interface SupportPoint {
  icon: typeof Radar;
  title: string;
  description: string;
}

const SUPPORT_POINTS: SupportPoint[] = [
  {
    icon: Radar,
    title: "Real-time fleet tracking",
    description:
      "Every scooter's location, battery level and status streams live to Zeto's ops dashboard, so nothing at the hub goes unnoticed.",
  },
  {
    icon: Gauge,
    title: "Smarter fleet utilization",
    description:
      "Demand-based rebalancing and swap-station routing keep more scooters out earning during peak hours instead of parked.",
  },
  {
    icon: Wrench,
    title: "Predictive maintenance",
    description:
      "Sensor data flags wear before it becomes downtime, so scooters get serviced on schedule instead of after they break down.",
  },
];

export default function FocoOwnerSupport() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const index = Math.round(track.scrollLeft / track.clientWidth);
      setActiveIndex(Math.min(Math.max(index, 0), SUPPORT_POINTS.length - 1));
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => track.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCard = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: index * track.clientWidth, behavior: "smooth" });
  };

  return (
    <section
      className="
        bg-white
        px-6
        py-20
        sm:px-10
        lg:py-28
      "
    >
      <div className="mx-auto max-w-7xl">
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
              border-[#1FA24A]/20
              bg-[#1FA24A]/5
              px-4
              py-1.5
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#1FA24A]" />
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#1FA24A]">
              FOCO technology
            </span>
          </div>

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
            Technology runs the fleet, not guesswork.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-500">
            Zeto's ops stack keeps every scooter tracked, utilized and
            maintained — so your investment stays productive around the
            clock.
          </p>
        </div>

        {/* =====================================================
            CARDS
            ===================================================== */}

        <div
          ref={trackRef}
          className="
            no-scrollbar
            mt-14
            flex
            snap-x
            snap-mandatory
            gap-0
            overflow-x-auto
            sm:grid
            sm:grid-cols-3
            sm:gap-6
            sm:overflow-visible
          "
        >
          {SUPPORT_POINTS.map((point) => {
            const Icon = point.icon;

            return (
              <div
                key={point.title}
                className="
                  group
                  relative
                  flex
                  w-full
                  shrink-0
                  snap-center
                  flex-col
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  transition-colors
                  duration-300
                  hover:border-[#1FA24A]/50
                  hover:bg-[#1FA24A]/[0.04]
                "
              >
                {/* Icon badge */}

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-slate-900
                    text-white
                    transition-colors
                    duration-300
                    group-hover:bg-[#1FA24A]
                  "
                >
                  <Icon size={20} strokeWidth={1.8} />
                </div>

                {/* Title */}

                <h3
                  className="
                    mt-5
                    text-base
                    font-bold
                    text-slate-800
                  "
                >
                  {point.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-2
                    text-sm
                    leading-relaxed
                    text-slate-500
                  "
                >
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* =====================================================
            SCROLL DOTS (mobile only)
            ===================================================== */}

        <div className="mt-6 flex justify-center gap-2 sm:hidden">
          {SUPPORT_POINTS.map((point, index) => (
            <button
              key={point.title}
              type="button"
              aria-label={`Show card ${index + 1} of ${SUPPORT_POINTS.length}`}
              aria-current={index === activeIndex}
              onClick={() => scrollToCard(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-6 bg-[#1FA24A]"
                  : "w-1.5 bg-slate-200"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
