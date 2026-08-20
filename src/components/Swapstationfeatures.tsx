import React from "react";

/* ---------- inline illustrations ---------- */

const ClockIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="105" r="70" fill="none" stroke="#48465C" strokeWidth="10" />
    <path
      d="M100 35a70 70 0 0 1 0 140 70 70 0 0 1-52-23"
      fill="none"
      stroke="#D9E24E"
      strokeWidth="10"
      strokeLinecap="round"
    />
    <line x1="100" y1="105" x2="100" y2="60" stroke="#F5F3ED" strokeWidth="6" strokeLinecap="round" />
    <line x1="100" y1="105" x2="70" y2="132" stroke="#F5F3ED" strokeWidth="6" strokeLinecap="round" />
    <circle cx="100" cy="105" r="6" fill="#D9E24E" />
    <rect x="88" y="18" width="24" height="10" rx="5" fill="#48465C" />
  </svg>
);

const PinBatteryIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="178" rx="46" ry="8" fill="#00000022" />
    <path
      d="M100 20c-38 0-62 28-62 62 0 46 62 96 62 96s62-50 62-96c0-34-24-62-62-62z"
      fill="#2E2C3C"
    />
    <rect x="66" y="70" width="68" height="56" rx="8" fill="#F5F3ED" />
    <rect x="90" y="60" width="20" height="12" rx="3" fill="#F5F3ED" />
    <rect x="74" y="80" width="52" height="36" rx="3" fill="#2E2C3C" />
    <path d="M104 84l-18 20h12l-4 16 18-22h-12l4-14z" fill="#D9E24E" />
  </svg>
);

const PhoneIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <rect x="55" y="18" width="90" height="164" rx="18" fill="#1B1A24" stroke="#3A3846" strokeWidth="3" />
    <rect x="63" y="34" width="74" height="130" rx="4" fill="#0F0E15" />
    <rect x="70" y="42" width="60" height="10" rx="2" fill="#D9E24E" />
    <rect x="70" y="58" width="40" height="6" rx="2" fill="#5A5768" />
    <rect x="70" y="90" width="60" height="40" rx="4" fill="#2E2C3C" />
    <path d="M100 98l-10 14h7l-3 10 11-15h-7l2-9z" fill="#D9E24E" />
    <rect x="70" y="140" width="60" height="16" rx="4" fill="#2E2C3C" />
  </svg>
);

const ShieldIllustration = () => (
  <svg viewBox="0 0 120 120" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M60 8l40 16v28c0 30-18 50-40 60-22-10-40-30-40-60V24z"
      fill="none"
      stroke="#D9E24E"
      strokeWidth="6"
      strokeLinejoin="round"
    />
    <path d="M42 60l12 12 24-26" fill="none" stroke="#D9E24E" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ---------- component ---------- */

const SwapStationFeatures: React.FC = () => {
  return (
    <section className="w-full  py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[minmax(0,1fr)]">
          {/* Swap in Seconds — dark purple, tall */}
          <div className="md:row-span-2 rounded-2xl bg-[#514E68] p-8 flex flex-col justify-between min-h-[380px]">
            <div>
              <h3 className="text-[#F5F3ED] text-3xl font-bold leading-snug">
                Lightning-Fast Swaps
              </h3>
              <p className="mt-3 text-[#C9C6D6] text-[14.5px] leading-relaxed">
                No waiting, no downtime.
                <br />
                Just swap and go.
              </p>
            </div>
            <div className="mt-8 w-44 h-44 mx-auto">
              <ClockIllustration />
            </div>
          </div>

          {/* Network Everywhere — lime, tall */}
          <div className="md:row-span-2 rounded-2xl bg-[#D9E24E] p-8 flex flex-col justify-between min-h-[380px]">
            <div>
              <h3 className="text-[#1B1A24] text-2xl font-bold leading-snug">
                Stations at Every Corner
              </h3>
              <p className="mt-3 text-[#3A3826] text-[14.5px] leading-relaxed">
                Accessible, convenient, and growing every day.
              </p>
            </div>
            <div className="mt-8 w-40 h-40 mx-auto">
              <PinBatteryIllustration />
            </div>
          </div>

          {/* Tech That Works for You — dark, wide top-right */}
          <div className="rounded-2xl bg-[#1F1E29] p-8 flex flex-col justify-between min-h-[180px] overflow-hidden">
            <div>
              <h3 className="text-[#F5F3ED] text-xl font-bold leading-snug">
                Smart App, Smoother Rides
              </h3>
              <p className="mt-2 text-[#9C99AA] text-[13.5px] leading-relaxed max-w-[220px]">
                Seamless app, real-time updates, and smooth operations.
              </p>
            </div>
            <div className="w-28 h-28 self-end -mb-2 -mr-2">
              <PhoneIllustration />
            </div>
          </div>

          {/* Flexible Plans — lavender, bottom-right */}
          <div className="rounded-2xl bg-[#B8AEDB] p-8 flex flex-col justify-center min-h-[160px]">
            <h3 className="text-[#1B1A24] text-lg font-bold leading-snug">
              Plans That Bend to You
            </h3>
            <p className="mt-2 text-[#3A3550] text-[13.5px] leading-relaxed">
              Pay as you go or choose a subscription.
            </p>
          </div>

          {/* Safety First — full width dark strip */}
          <div className="md:col-span-3 rounded-2xl bg-[#1F1E29] p-8 flex items-center gap-6">
            <ShieldIllustration />
            <div>
              <h3 className="text-[#F5F3ED] text-base font-bold leading-snug">
                Built on Safety
              </h3>
              <p className="mt-2 text-[#9C99AA] text-[13.5px] leading-relaxed">
                Our track record? Zero fire incidents, total peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwapStationFeatures;