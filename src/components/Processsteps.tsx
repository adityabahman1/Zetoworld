import { Smartphone, ListChecks, Wallet } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import img1 from "../assets/ChatGPT Image Aug 17, 2026, 12_50_24 PM.png"

interface Step {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: 1,
    icon: Smartphone,
    title: "Download Zeto Pilot App",
    description:
      "Get the Zeto Pilot app, create your account or log in, and complete a quick KYC with your basic details and valid driving license.",
  },
  {
    number: 2,
    icon: ListChecks,
    title: "Select Your Plan",
    description:
      "Browse available EV rental and battery-swap plans in the app, and pick the one that fits how much and how often you ride.",
  },
  {
    number: 3,
    icon: Wallet,
    title: "Start Earning",
    description:
      "Pick up your scooter, connect with partner delivery platforms, and start accepting orders — earnings track live in the app.",
  },
];

export default function ProcessSteps() {
  return (
    <section className=" px-6 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
        {/* Image placeholder — swap for a screenshot/mockup of the actual
            Zeto app sign-up or plan-selection screen. */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src={img1}
            alt="Zeto rider app sign-up and plan selection screens"
            className=" w-full "
          />
        </div>

        {/* Steps */}
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Simple 3-Step Process
          </h2>
          <p className="mt-4 max-w-md text-slate-500">
            Getting started with Zeto is quick and hassle-free — all from the
            app. Sign up, pick your plan, and hit the road in no time.
          </p>

          <ol className="mt-10 space-y-8">
            {STEPS.map((step) => (
              <li key={step.number} className="flex gap-5">
                <div className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#1FA24A] text-lg font-bold text-[#1FA24A]">
                  {step.number}
                  <step.icon
                    size={14}
                    className="absolute -bottom-1 -right-1 rounded-full bg-[#1FA24A] p-0.5 text-white"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}