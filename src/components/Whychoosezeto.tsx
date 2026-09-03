import { Leaf, Zap, Wrench, Wallet } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import img1 from "../assets/ChatGPT Image Sep 3, 2026, 12_31_48 PM.png"
import img2 from "../assets/ChatGPT Image Aug 26, 2026, 11_00_42 AM.png"
import img3 from "../assets/ChatGPT Image Aug 17, 2026, 12_12_43 PM.png"
import img4 from "../assets/ChatGPT Image Aug 17, 2026, 12_24_22 PM.png"

interface Feature {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  image: string;
  title: string;
  description: string;
}

// Swap each `image` path for the real photo once you have it — drop files
// into `public/images/` and update the path, same pattern as the Hero image.
const FEATURES: Feature[] = [
  {
    icon: Leaf,
    iconBg: "bg-[#1FA24A]",
    iconColor: "text-white",
    image: img1,
    title: "Zero Emission",
    description:
      "Contribute to a cleaner environment with our 100% electric scooter fleet, reducing urban pollution.",
  },
  {
    icon: Wrench,
    iconBg: "bg-[#64748B]",
    iconColor: "text-white",
    image: img3,
    title: "Low Maintenance",
    description:
      "Say goodbye to expensive oil changes and mechanical repairs. EVs require significantly less upkeep.",
  },
  {
    icon: Zap,
    iconBg: "bg-[#3B82F6]",
    iconColor: "text-white",
    image: img2,
    title: "Smart Swapping",
    description:
      "Never wait to charge. Swap depleted batteries for fully charged ones in seconds at our network of hubs.",
  },
  {
    icon: Wallet,
    iconBg: "bg-[#E11D48]",
    iconColor: "text-white",
    image: img4,
    title: "Reliable Income",
    description:
      "Maximize your earnings with lower running costs compared to petrol vehicles. Keep more of what you make.",
  },
];

export default function WhyChooseZeto() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Why Choose Zeto?
          </h2>
          <p className="mt-4 text-slate-500">
            Discover the benefits of joining our eco-friendly electric
            mobility platform for your daily deliveries.
          </p>
        </div>

        {/* Card grid — photo on top, title + description centered below,
            matching the Zypp reference layout. */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Photo — fixed aspect ratio so all four cards line up evenly
                  regardless of each image's native size. */}
              <div className="relative w-full overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="px-6 pb-7 pt-8 text-center">
                <h3 className="text-lg font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}