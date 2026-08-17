import React from "react";

interface Step {
  number: number;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: 1,
    title: "Sign Up",
    description:
      "Complete a quick registration process with your basic details and valid driving license.",
  },
  {
    number: 2,
    title: "Pick Your Scooter",
    description:
      "Choose your preferred EV model and complete a brief orientation on operations and safety.",
  },
  {
    number: 3,
    title: "Start Delivering",
    description:
      "Connect with our partner platforms, start accepting orders, and begin earning immediately.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="bg-[#EEF2F7] px-6 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
        {/* Image placeholder — swap src for the EcoSwap station photograph */}
        <div className="overflow-hidden rounded-3xl shadow-xl">
          <img
            src="/images/ecoswap-station.jpg"
            alt="Rider swapping a battery at an EcoSwap station"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>

        {/* Steps */}
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Simple 3-Step Process
          </h2>
          <p className="mt-4 max-w-md text-slate-500">
            Getting started with Zeto is quick and hassle-free. Join us and
            hit the road in no time.
          </p>

          <ol className="mt-10 space-y-8">
            {STEPS.map((step) => (
              <li key={step.number} className="flex gap-5">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#1FA24A] text-lg font-bold text-[#1FA24A]">
                  {step.number}
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