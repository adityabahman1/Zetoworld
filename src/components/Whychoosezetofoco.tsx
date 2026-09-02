// src/components/WhyChooseZetoFoco.tsx

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Banknote,
  LayoutDashboard,
  MapPin,
  Megaphone,
  TrendingUp,
  Users,
} from "lucide-react";

/**
 * -----------------------------------------------------------------------
 * WHY CHOOSE ZETO — FOCO
 * -----------------------------------------------------------------------
 *
 * FOCO = Franchise Owned, Company Operated.
 *
 * The partner brings the capital and the site; Zeto brings the staff,
 * the systems, and the day-to-day running of the business. The section
 * opens by showing that exchange directly, then breaks it into four
 * concrete reasons a FOCO partner gets a return without getting pulled
 * into operations.
 */

interface Reason {
  icon: typeof TrendingUp;
  title: string;
  description: string;
}

const REASONS: Reason[] = [
  {
    icon: TrendingUp,
    title: "You invest, we operate",
    description:
      "Put up the capital and the site — Zeto runs everything else. Your return builds in the background while you stay hands-off.",
  },
  {
    icon: Users,
    title: "A trained team, on us",
    description:
      "We hire, train, and manage every person on the ground, from site staff to supervisors, so you never have to run a shift.",
  },
  {
    icon: LayoutDashboard,
    title: "Your numbers, in real time",
    description:
      "Revenue, footfall, and performance sit inside the Zeto Pilot app — open it whenever you want a clear read on how the site is doing.",
  },
  {
    icon: Megaphone,
    title: "Demand, already generated",
    description:
      "Marketing, brand visibility, and customer acquisition are run centrally by Zeto, so the site opens to demand instead of chasing it.",
  },
];

export default function WhyChooseZetoFoco() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const index = Math.round(track.scrollLeft / track.clientWidth);
      setActiveIndex(Math.min(Math.max(index, 0), REASONS.length - 1));
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
      <div
        className="
          mx-auto
          max-w-5xl
        "
      >
        {/* =====================================================
            HEADER
            ===================================================== */}

        <div
          className="
            mx-auto
            max-w-2xl
            text-center
          "
        >
        

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
            Why franchise owners choose Zeto
          </h2>

          <p
            className="
              mt-4
              text-base
              leading-relaxed
              text-slate-500
            "
          >
            Franchise Owned, Company Operated means you own the asset and
            Zeto runs the business — here's what that gets you.
          </p>
        </div>

        {/* =====================================================
            SIGNATURE STRIP — the exchange, shown directly
            ===================================================== */}

        <div
          className="
            mx-auto
            mt-12
            flex
            max-w-3xl
            flex-col
            items-stretch
            gap-3
            sm:flex-row
            sm:items-center
            sm:gap-4
          "
        >
          <div
            className="
              flex
              flex-1
              items-center
              gap-3
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              px-5
              py-4
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
                bg-slate-900
                text-white
              "
            >
              <Banknote size={18} strokeWidth={1.8} />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                You bring
              </p>
              <p className="text-sm font-semibold text-slate-800">
                Capital &amp; site
              </p>
            </div>
          </div>

          <div
            className="
              flex
              shrink-0
              items-center
              justify-center
              self-center
              text-slate-300
              sm:rotate-0
              rotate-90
            "
          >
            <ArrowRight size={22} strokeWidth={2} />
          </div>

          <div
            className="
              flex
              flex-1
              items-center
              gap-3
              rounded-2xl
              border
              border-[#1FA24A]/25
              bg-[#1FA24A]/5
              px-5
              py-4
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
                bg-[#1FA24A]
                text-white
              "
            >
              <MapPin size={18} strokeWidth={1.8} />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-[#1FA24A]/70">
                Zeto runs
              </p>
              <p className="text-sm font-semibold text-slate-800">
                Staff, systems &amp; operations
              </p>
            </div>
          </div>
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
            sm:grid-cols-2
            sm:gap-6
            sm:overflow-visible
            lg:grid-cols-4
          "
        >
          {REASONS.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="
                  group
                  relative
                  flex
                  w-full
                  shrink-0
                  snap-center
                  flex-col
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-50
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#1FA24A]
                  hover:bg-[#1FA24A]/5
                  hover:shadow-lg
                  hover:shadow-[#1FA24A]/10
                "
              >
                {/* Top accent bar, revealed on hover */}

                <span
                  className="
                    absolute
                    inset-x-0
                    top-0
                    h-1
                    origin-left
                    scale-x-0
                    bg-[#1FA24A]
                    transition-transform
                    duration-300
                    group-hover:scale-x-100
                  "
                />

                {/* Icon badge */}

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#1FA24A]/10
                    text-[#1FA24A]
                    ring-1
                    ring-inset
                    ring-[#1FA24A]/15
                    transition-colors
                    duration-300
                    group-hover:bg-[#1FA24A]
                    group-hover:text-white
                    group-hover:ring-transparent
                  "
                >
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                {/* Title */}

                <h3
                  className="
                    mt-5
                    text-base
                    font-bold
                    text-slate-800
                    transition-colors
                    duration-300
                    group-hover:text-[#1FA24A]
                  "
                >
                  {reason.title}
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
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* =====================================================
            SCROLL DOTS (mobile only)
            ===================================================== */}

        <div className="mt-6 flex justify-center gap-2 sm:hidden">
          {REASONS.map((reason, index) => (
            <button
              key={reason.title}
              type="button"
              aria-label={`Show card ${index + 1} of ${REASONS.length}`}
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