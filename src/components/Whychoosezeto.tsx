import React from "react";
import { Leaf, Zap, Wrench, Wallet } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: Leaf,
    iconBg: "bg-[#1FA24A]",
    iconColor: "text-white",
    title: "Zero Emission",
    description:
      "Contribute to a cleaner environment with our 100% electric scooter fleet, reducing urban pollution.",
  },
  {
    icon: Zap,
    iconBg: "bg-[#AFCBFA]",
    iconColor: "text-white",
    title: "Smart Swapping",
    description:
      "Never wait to charge. Swap depleted batteries for fully charged ones in seconds at our network of hubs.",
  },
  {
    icon: Wrench,
    iconBg: "bg-[#8D97A5]",
    iconColor: "text-white",
    title: "Low Maintenance",
    description:
      "Say goodbye to expensive oil changes and mechanical repairs. EVs require significantly less upkeep.",
  },
  {
    icon: Wallet,
    iconBg: "bg-[#F7C8CC]",
    iconColor: "text-rose-700",
    title: "Reliable Income",
    description:
      "Maximize your earnings with lower running costs compared to petrol vehicles. Keep more of what you make.",
  },
];

export default function WhyChooseZeto() {
  return (
    <section className=" px-6 py-20 ">
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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.iconBg}`}
              >
                <feature.icon size={22} className={feature.iconColor} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}