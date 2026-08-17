import React from "react";

const PARTNERS: string[] = ["zomato", "Swiggy", "zepto", "Blinkit", "dunzo"];

export default function Partners() {
  return (
    <section className="bg-gradient-to-b from-white to-[#F7FAFF] px-6 py-16">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Trusted by leading delivery platforms
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
          {PARTNERS.map((name) => (
            <span
              key={name}
              className="text-xl font-bold text-slate-400 grayscale transition hover:text-slate-500"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}