import React from "react";

// --- Icons (inline SVG, no external deps) ---

const ScooterIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="5.5" cy="18.5" r="2.5" fill="#0B3D2E" />
    <circle cx="18.5" cy="18.5" r="2.5" fill="#0B3D2E" />
    <path
      d="M5.5 18.5H3M5.5 18.5H12L14 12.5H10.5M18.5 18.5H16.5C16.5 16 15 14.5 12.5 14.5H10.5M10.5 14.5L9 9.5H6.5M6.5 9.5H5M6.5 9.5L7.5 6.5H11.5L12.5 9.5H16C17.5 9.5 18.5 10.7 18.5 12.5"
      stroke="#0B3D2E"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HelmetIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 15C4 9 7.5 5 12 5C16.5 5 20 9 20 15"
      stroke="#0B3D2E"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M3.5 15H20.5C20.5 17 19 18.5 17 18.5H7C5 18.5 3.5 17 3.5 15Z"
      stroke="#0B3D2E"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path d="M12 5V9" stroke="#0B3D2E" strokeWidth="1.4" strokeLinecap="round" />
    <rect x="9" y="9.2" width="6" height="2.6" rx="1.3" fill="#0B3D2E" />
  </svg>
);

const InstallationIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="6" height="6" rx="1" fill="#0B3D2E" />
    <rect x="14" y="4" width="6" height="6" rx="1" fill="#0B3D2E" opacity="0.55" />
    <rect x="4" y="14" width="6" height="6" rx="1" fill="#0B3D2E" opacity="0.55" />
    <rect x="14" y="14" width="6" height="6" rx="1" fill="#0B3D2E" />
  </svg>
);

const ArtworkIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 21C12 21 19 15 19 9.5C19 5.9 16 3 12 3C8 3 5 5.9 5 9.5C5 15 12 21 12 21Z"
      stroke="#0B3D2E"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="9.5" r="2.5" stroke="#0B3D2E" strokeWidth="1.5" />
  </svg>
);

const CoverageIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6" cy="6" r="2.2" stroke="#0B3D2E" strokeWidth="1.5" />
    <circle cx="18" cy="18" r="2.2" stroke="#0B3D2E" strokeWidth="1.5" />
    <path
      d="M7.8 7.2C10 9 8.5 12.5 11 14C13 15.2 14.5 13.5 16.2 15.5"
      stroke="#0B3D2E"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const ZetoLogo = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#1E8A3C" />
    <path
      d="M8 8H16L8.5 16H16"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// --- Reusable pieces ---

interface PricingCardProps {
  icon: React.ReactNode;
  title: string;
  price: string;
  suffix: string;
  bullets: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({ icon, title, price, suffix, bullets }) => (
  <div className="flex-1 rounded-2xl bg-[#F4F7F3] p-6 sm:p-7">
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-[#0B3D2E] sm:text-xl">{title}</h3>
    </div>

    <div className="mt-6 flex items-baseline gap-2">
      <span className="text-4xl font-extrabold text-[#1E8A3C] sm:text-5xl">{price}</span>
      <span className="text-base text-gray-500">/ {suffix}</span>
    </div>

    <div className="mt-4 mb-4 h-px w-full bg-gray-200" />

    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-semibold text-[#0B3D2E]">
      {bullets.map((b, i) => (
        <React.Fragment key={b}>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1E8A3C]" />
            {b}
          </span>
          {i < bullets.length - 1 && <span className="text-gray-300">|</span>}
        </React.Fragment>
      ))}
    </div>
  </div>
);

interface FeaturePillProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const FeaturePill: React.FC<FeaturePillProps> = ({ icon, label, value }) => (
  <div className="flex flex-1 items-center gap-4 rounded-2xl bg-[#0B3D2E] px-6 py-5">
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white">
      {icon}
    </div>
    <div>
      <p className="text-xs font-bold uppercase tracking-wide text-[#7CD98A] sm:text-sm">
        {label}
      </p>
      <p className="mt-0.5 text-base font-bold text-white sm:text-lg">{value}</p>
    </div>
  </div>
);

// --- Main component ---

const BrandingPricing: React.FC = () => {
  return (
    <div className="min-h-full w-full bg-white p-6 sm:p-10">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-[#0B3D2E] sm:text-4xl">
              Branding Options <span className="text-[#1E8A3C]">&amp; Pricing</span>
            </h1>
            <div className="mt-3 h-1 w-14 rounded-full bg-[#1E8A3C]" />
          </div>
          
        </div>

        {/* Pricing cards */}
        <div className="mt-8 flex flex-col gap-5 sm:flex-row">
          <PricingCard
            icon={<ScooterIcon />}
            title="Scooter Branding"
            price="₹500"
            suffix="month"
            bullets={["MOQ: 100 Scooters", "3-Month Lock-in"]}
          />
          <PricingCard
            icon={<HelmetIcon />}
            title="Helmet Branding"
            price="₹500"
            suffix="one time"
            bullets={["MOQ: 200 Helmets"]}
          />
        </div>

        {/* Feature pills */}
        <div className="mt-5 flex flex-col gap-5 sm:flex-row">
          <FeaturePill icon={<InstallationIcon />} label="Installation" value="One Time" />
          <FeaturePill icon={<ArtworkIcon />} label="Artwork" value="Provided By Brand" />
          <FeaturePill icon={<CoverageIcon />} label="Coverage" value="Entire Tricity" />
        </div>
      </div>
    </div>
  );
};

export default BrandingPricing;