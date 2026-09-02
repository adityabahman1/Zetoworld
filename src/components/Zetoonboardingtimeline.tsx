import { useEffect, useRef, useState } from "react";
import { Phone, MapPinned, FileSignature, Wrench, GraduationCap, Zap } from "lucide-react";

type Stop = {
  week: string;
  title: string;
  detail: string;
  icon: React.ReactNode;
};

const stops: Stop[] = [
  {
    week: "Week 1",
    title: "Discovery call",
    detail:
      "A 30-minute call to map your city, target rider volume, and available capital before anything else moves.",
    icon: <Phone size={20} strokeWidth={1.75} />,
  },
  {
    week: "Week 1–2",
    title: "Site scouting",
    detail:
      "Zeto's expansion team shortlists 2,000 sq ft plots near high-footfall corridors in your territory.",
    icon: <MapPinned size={20} strokeWidth={1.75} />,
  },
  {
    week: "Week 2",
    title: "Contract & deposit",
    detail:
      "Sign the 4-year swap-station license and put down ₹42L, split across setup and working capital.",
    icon: <FileSignature size={20} strokeWidth={1.75} />,
  },
  {
    week: "Week 3–4",
    title: "Station build-out",
    detail:
      "Cabinets, chargers, signage, and a fire-suppression unit go in. Zeto's contractors run the install.",
    icon: <Wrench size={20} strokeWidth={1.75} />,
  },
  {
    week: "Week 5",
    title: "Staff certification",
    detail:
      "Your 3-person crew completes battery-handling and safety certification at the regional training hub.",
    icon: <GraduationCap size={20} strokeWidth={1.75} />,
  },
  {
    week: "Week 6",
    title: "Grid goes live",
    detail:
      "Batteries land, riders get swap access through the app, and your station starts earning per swap.",
    icon: <Zap size={20} strokeWidth={1.75} />,
  },
];

export default function ZetoOnboardingTimeline() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const index = Math.round(track.scrollLeft / track.clientWidth);
      setActiveIndex(Math.min(Math.max(index, 0), stops.length - 1));
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => track.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToStop = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: index * track.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14 max-w-xl">
          <p
            className="text-sm mb-3"
            style={{ color: "#2E9E4A", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Zeto Partner Rollout
          </p>
          <h1
            className="text-4xl sm:text-5xl font-medium leading-[1.1] mb-4"
            style={{ color: "#12241A", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Six weeks from call to charged.
          </h1>
          <p
            className="text-base"
            style={{ color: "#5C7267", fontFamily: "Inter, sans-serif" }}
          >
            Every swap station we open follows the same route. Here's what
            happens, and when.
          </p>
        </div>

        <div
          ref={trackRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-0 overflow-x-auto sm:grid sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 sm:overflow-visible"
        >
          {stops.map((stop) => (
            <div key={stop.title} className="flex w-full shrink-0 snap-center flex-col sm:w-auto">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: "#EAF6ED",
                    color: "#2E9E4A",
                  }}
                >
                  {stop.icon}
                </div>
                <div
                  className="text-xs"
                  style={{ color: "#8FA398", fontFamily: "Inter, sans-serif" }}
                >
                  {stop.week}
                </div>
              </div>
              <h3
                className="text-xl mb-2"
                style={{ color: "#12241A", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {stop.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#5C7267", fontFamily: "Inter, sans-serif" }}
              >
                {stop.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2 sm:hidden">
          {stops.map((stop, index) => (
            <button
              key={stop.title}
              type="button"
              aria-label={`Show step ${index + 1} of ${stops.length}`}
              aria-current={index === activeIndex}
              onClick={() => scrollToStop(index)}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: index === activeIndex ? 24 : 6,
                backgroundColor: index === activeIndex ? "#2E9E4A" : "#D9E4DE",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}