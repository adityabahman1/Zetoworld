// src/components/FofoBenefitCards.tsx

import { useEffect, useRef, useState } from "react";
import {
  Wallet,
  Store,
  LineChart,
  Handshake,
} from "lucide-react";

/**
 * -----------------------------------------------------------------------
 * FOFO — WHY OWNERS WHO WANT CONTROL CHOOSE IT
 * -----------------------------------------------------------------------
 *
 * A card grid, but built differently from the FOCO reason cards earlier
 * in this file set: each card carries a numbered corner ribbon (the
 * order these matter in an owner-operator's decision) and a large
 * ghost-outline icon watermark instead of a small filled badge, so the
 * cards read as a distinct family rather than a re-skin of the FOCO
 * grid. Hover deepens the card instead of lifting it, to keep the
 * grid feeling grounded — an operator planted on-site, not floating.
 */

interface Benefit {
  tag: string;
  icon: typeof Wallet;
  title: string;
  description: string;
}

const BENEFITS: Benefit[] = [
  {
    tag: "01",
    icon: Wallet,
    title: "Lets Operate together",
    description:
      "No revenue share for day-to-day operations — what the site earns after costs is yours in full.",
  },
  {
    tag: "02",
    icon: Store,
    title: "Run it your way",
    description:
      "Hours, staffing, local promotions, pricing calls — every operating decision stays in your hands.",
  },
  {
    tag: "03",
    icon: LineChart,
    title: "Build real operating experience",
    description:
      "Running the site yourself means the playbook, systems, and instincts you build stay with you.",
  },
  {
    tag: "04",
    icon: Handshake,
    title: "Zeto stays on call",
    description:
      "Training, supply chain, and brand support are still there whenever you need to lean on them.",
  },
];

export default function FofoBenefitCards() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const index = Math.round(track.scrollLeft / track.clientWidth);
      setActiveIndex(Math.min(Math.max(index, 0), BENEFITS.length - 1));
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
              FOFO model
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
            Built for Entrepreneurs Who Want Full Control         </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-500">
            FOFO is designed for partners who want to own, manage, and grow their ZETO business with greater operational independence.          </p>
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
          {BENEFITS.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.tag}
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
                  bg-white
                  p-6
                  pt-7
                  transition-colors
                  duration-300
                  hover:border-[#1FA24A]/50
                  hover:bg-[#1FA24A]/[0.04]
                  sm:w-auto
                  sm:shrink
                "
              >
                {/* Ghost icon watermark */}

                <Icon
                  aria-hidden="true"
                  size={104}
                  strokeWidth={1}
                  className="
                    pointer-events-none
                    absolute
                    -right-5
                    -top-5
                    text-slate-100
                    transition-colors
                    duration-300
                    group-hover:text-[#1FA24A]/10
                  "
                />

                {/* Numbered corner ribbon */}

                <span
                  className="
                    relative
                    text-xs
                    font-bold
                    tracking-wide
                    text-slate-300
                    transition-colors
                    duration-300
                    group-hover:text-[#1FA24A]
                  "
                >
                  {benefit.tag}
                </span>

                {/* Icon badge */}

                <div
                  className="
                    relative
                    mt-4
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
                    relative
                    mt-5
                    text-base
                    font-bold
                    text-slate-800
                  "
                >
                  {benefit.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    relative
                    mt-2
                    text-sm
                    leading-relaxed
                    text-slate-500
                  "
                >
                  {benefit.description}
                </p>

                {/* Bottom rule that fills on hover */}

                <span
                  className="
                    relative
                    mt-5
                    h-0.5
                    w-8
                    rounded-full
                    bg-slate-200
                    transition-all
                    duration-300
                    group-hover:w-full
                    group-hover:bg-[#1FA24A]
                  "
                />
              </div>
            );
          })}
        </div>

        {/* =====================================================
            SCROLL DOTS (mobile only)
            ===================================================== */}

        <div className="mt-6 flex justify-center gap-2 sm:hidden">
          {BENEFITS.map((benefit, index) => (
            <button
              key={benefit.tag}
              type="button"
              aria-label={`Show card ${index + 1} of ${BENEFITS.length}`}
              aria-current={index === activeIndex}
              onClick={() => scrollToCard(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex
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