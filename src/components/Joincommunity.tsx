import React from "react";
import { ArrowRight } from "lucide-react";
import img from "../assets/ChatGPT Image Aug 17, 2026, 01_37_53 PM.png"

export default function JoinCommunity() {
  return (
    <section className=" px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl shadow-xl">
          {/* Background photograph — swap src for the real community photo */}
          <img
            src={img}
            alt="ZETO rider community standing with their electric scooters"
            className="h-[420px] w-full object-cover"
          />

          {/* Gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E3F]/90 via-[#0B1E3F]/60 to-transparent" />

          <div className="absolute inset-0 flex max-w-lg flex-col justify-center gap-5 px-10">
            <h2 className="text-4xl font-extrabold leading-tight text-white">
              Join the
              <br />
              Community
            </h2>
            <p className="text-sm leading-relaxed text-slate-200">
              Be part of a growing network of gig workers who are driving the
              change towards a sustainable future while building a secure
              livelihood.
            </p>
            <button className="mt-2 flex w-fit items-center gap-2 rounded-full bg-[#0B6E3B] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#0A5E32]">
              Join the Revolution
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}