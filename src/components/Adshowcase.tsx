import { CircleDot, PanelsTopLeft, Bike, Shield } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import img1 from "../assets/ChatGPT Image Aug 26, 2026, 12_14_58 PM.png";
import img2 from "../assets/ChatGPT Image Aug 18, 2026, 03_26_26 PM.png";
import img3 from "../assets/ChatGPT Image Aug 18, 2026, 03_24_09 PM.png";
import img4 from "../assets/ChatGPT Image Aug 26, 2026, 12_17_35 PM.png";

interface AdSpot {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  image: string;
  title: string;
  description: string;
}

// Swap each `image` path for the real photo once you have it — drop files
// into `../assets/` and update the path. Each shot should show the rider /
// scooty with that specific ad zone clearly visible (helmet, side panel,
// rear panel, front apron, etc).
const AD_SPOTS: AdSpot[] = [
  {
    icon: Shield,
    iconBg: "bg-[#1FA24A]",
    iconColor: "text-white",
    image: img2,
    title: "Helmet Branding",
    description:
      "Put your brand right at eye level. High-visibility space on the rider's helmet gets noticed at every stop light and delivery drop.",
  },
  {
    icon: PanelsTopLeft,
    iconBg: "bg-[#3B82F6]",
    iconColor: "text-white",
    image: img1,
    title: "Side Panel Wrap",
    description:
      "Full-length side panels turn every ride into a moving billboard, visible from both directions in dense city traffic.",
  },
  {
    icon: CircleDot,
    iconBg: "bg-[#64748B]",
    iconColor: "text-white",
    image: img4,
    title: "Front Apron Space",
    description:
      "A clean, prominent front-facing panel that puts your logo in front of pedestrians and oncoming traffic alike.",
  },
];

export default function AdShowcase() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Advertise on Every Ride
          </h2>
          <p className="mt-4 text-slate-500">
            Turn our fleet of EV 2-wheelers into moving ad space — from the
            rider's helmet to every panel on the scooty.
          </p>
        </div>

        {/* Card grid — photo on top, title + description centered below. */}
        <div className="mt-14 grid gap-8 sm:grid-cols-3 lg:grid-cols-3">
          {AD_SPOTS.map((spot) => (
            <div
              key={spot.title}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Photo — fixed aspect ratio so all cards line up evenly
                  regardless of each image's native size. */}
              <div className="relative  w-full overflow-hidden bg-slate-100">
                <img
                  src={spot.image}
                  alt={spot.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Icon badge floating over the image, top-left */}
            
              </div>

              <div className="px-6 pb-7 pt-6 text-center">
                <h3 className="text-lg font-bold text-slate-900">
                  {spot.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {spot.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}