import { Leaf, Users, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import img1 from "../assets/ChatGPT Image Aug 14, 2026, 02_47_43 PM.png"

interface Highlight {
  icon: LucideIcon;
  label: string;
}

const HIGHLIGHTS: Highlight[] = [
  { icon: Leaf, label: "Zero Emission Deliveries" },
  { icon: Users, label: "Creating Jobs in Communities" },
  { icon: Globe, label: "Sustainable Tomorrow" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#fcfdfa] via-[#f2f7ec] to-[#D3E8BC] lg:min-h-[600px]">
      {/* Bottom fade-to-white — sits on top of the horizontal gradient and
          blends the section's bottom edge into pure white regardless of how
          green that edge is horizontally, so it merges seamlessly into the
          white background of the next section (WhyChooseZeto) below. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-b from-transparent to-white sm:h-32 lg:h-40" />

      {/* Desktop/tablet image — pulled in from the right edge, sitting
          closer to the text block, cropped toward the left of its box. */}
      <div className="pointer-events-none absolute inset-y-0 right-24 hidden w-[40%] items-center p-10 lg:flex xl:right-40 xl:p-14">
        <img
          src={img1}
          alt="Zeto delivery rider on an electric scooter"
          className="h-full w-full object-contain object-left"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 sm:px-10 sm:py-16 lg:py-24">
        <div className="max-w-md lg:pl-4 xl:pl-6">
          <h1 className="text-3xl font-extrabold leading-[1.15] text-[#0B3D22] sm:text-4xl lg:text-5xl">
            Cutting Emission
            <br />
            <span className="text-[#1FA24A]">Creating Jobs</span>
          </h1>

          <div className="mt-4 h-1 w-14 rounded-full bg-[#1FA24A] sm:mt-5" />

          <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:mt-6 sm:text-base">
            Zeto is building a sustainable delivery ecosystem that reduces
            pollution and empowers communities with meaningful job
            opportunities.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-3 sm:mt-10 sm:flex sm:flex-wrap sm:gap-8">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-start gap-2 sm:max-w-[110px] sm:gap-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1FA24A] sm:h-12 sm:w-12">
                  <item.icon size={18} className="text-white sm:h-5 sm:w-5" />
                </div>
                <span className="text-xs font-medium leading-tight text-slate-700 sm:text-sm">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile image — full width, sits below the text, stays centered
          (object-center) rather than shifting left like the desktop crop. */}
      <div className="relative flex h-[260px] w-full items-center justify-center sm:h-[320px] lg:hidden">
        <img
          src={img1}
          alt="Zeto delivery rider on an electric scooter"
          className="h-full w-full object-contain object-center"
        />
      </div>
    </section>
  );
}