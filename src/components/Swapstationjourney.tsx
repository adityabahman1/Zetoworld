import React from "react";

interface SwapStep {
  id: string;
  icon: React.ReactNode;
  heading: string;
  description: string;
}

const IconScan = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 16V10a2 2 0 0 1 2-2h6M40 16V10a2 2 0 0 0-2-2h-6M8 32v6a2 2 0 0 0 2 2h6M40 32v6a2 2 0 0 1-2 2h-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="15" y="15" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
    <rect x="26" y="15" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
    <rect x="15" y="26" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
    <path d="M27 27h3v3M33 30v3h-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 24h40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="1 4" />
  </svg>
);

const IconSwap = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="14" y="6" width="20" height="30" rx="2" stroke="currentColor" strokeWidth="2" />
    <rect x="20" y="2" width="8" height="4" rx="1" stroke="currentColor" strokeWidth="2" />
    <path d="M18 16h12M18 22h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 40l-4-4 4-4M36 32l4 4-4 4M8 36h32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconGo = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="22" width="30" height="12" rx="3" stroke="currentColor" strokeWidth="2" />
    <path d="M10 22l4-8h14l4 8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <circle cx="14" cy="34" r="3" stroke="currentColor" strokeWidth="2" />
    <circle cx="30" cy="34" r="3" stroke="currentColor" strokeWidth="2" />
    <path d="M38 20l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const STEPS: SwapStep[] = [
  {
    id: "01",
    icon: <IconScan />,
    heading: "Scan the station",
    description: "Open the Zeto Rider app and scan the QR code on the swap station to unlock an open dock.",
  },
  {
    id: "02",
    icon: <IconSwap />,
    heading: "Pack swapped",
    description: "Drop your depleted battery into the unlocked dock and pull out a fully charged pack from another slot.",
  },
  {
    id: "03",
    icon: <IconGo />,
    heading: "Ride away charged",
    description: "The station confirms the new pack is locked and verified — full range restored in under a minute.",
  },
];

const BatterySwapProcess: React.FC = () => {
  return (
    <div className="w-full bg-[#0B0F0D] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center">
          <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-[#8CF25B] font-mono mb-3">
            How it works
          </span>
          <h2 className="text-[clamp(1.8rem,4vw,2.75rem)] font-semibold text-[#F2F5F1] tracking-tight leading-tight">
            Battery swap, start to finish
          </h2>
          <p className="mt-3 text-[#8A948C] max-w-xl mx-auto text-[15px] leading-relaxed">
            No cables, no waiting on a charger. Scan, swap, and go — a
            depleted pack becomes a full one while you stay on the bike.
          </p>
        </div>

        <div className="relative">
          {/* signature element: the charge rail connecting each step */}
          <div className="hidden md:block absolute top-[38px] left-0 right-0 h-px">
            <div className="h-full w-full bg-gradient-to-r from-transparent via-[#2A3830] to-transparent" />
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-[#8CF25B]/70 to-transparent animate-pulse" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-8">
            {STEPS.map((step) => (
              <div key={step.id} className="relative flex flex-col items-center text-center px-2">
                <div className="relative z-10 flex items-center justify-center w-[76px] h-[76px] rounded-full bg-[#121712] border border-[#2A3830] text-[#8CF25B] shadow-[0_0_0_4px_#0B0F0D]">
                  <div className="w-8 h-8">{step.icon}</div>
                </div>

                <span className="mt-4 text-[11px] font-mono tracking-widest text-[#4E5C52]">
                  {step.id}
                </span>

                <h3 className="mt-2 text-[#F2F5F1] font-semibold text-[16px] leading-snug">
                  {step.heading}
                </h3>

                <p className="mt-2 text-[#8A948C] text-[13.5px] leading-relaxed max-w-[210px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatterySwapProcess;