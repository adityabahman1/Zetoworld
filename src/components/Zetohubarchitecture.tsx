
import { useEffect, useRef, useState, type ReactElement } from "react";
import img from "../assets/WhatsApp Image 2026-08-24 at 10.27.45 PM.jpeg"

type IconProps = {
  size?: number;
  strokeWidth?: number;
};

const Icon = {
  Entry: ({ size = 20, strokeWidth = 1.8 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 3.5h9v17H6z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" />
      <path d="M9.5 12h.01" stroke="currentColor" strokeWidth={strokeWidth * 1.4} strokeLinecap="round" />
      <path d="M15 8.5 19 11l-4 2.5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Kyc: ({ size = 20, strokeWidth = 1.8 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="14" rx="1.6" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="9" cy="10.3" r="1.8" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M6.3 15.5c.6-1.6 1.7-2.3 2.7-2.3s2.1.7 2.7 2.3M14 9.5h4M14 12.5h4" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  ),
  Allotment: ({ size = 20, strokeWidth = 1.8 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 21V9.5L12 4l6 5.5V21" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" />
      <path d="M9.5 21v-6h5v6" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" />
    </svg>
  ),
  Inventory: ({ size = 20, strokeWidth = 1.8 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="7" cy="17.5" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="17" cy="17.5" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M7 17.5H4.5M17 17.5H10l1.6-5H8.5M13.5 8.5h4l2 4H12" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Service: ({ size = 20, strokeWidth = 1.8 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14.7 6.3a3.6 3.6 0 0 1-4.6 4.6L5 16l3 3 5.1-5.1a3.6 3.6 0 0 1 4.6-4.6l-2.3 2.3-1.7-.3-.3-1.7z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  ),
  Battery: ({ size = 20, strokeWidth = 1.8 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="7.5" width="15" height="9" rx="1.6" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M19.5 10v4" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M11.6 9.5 9 12.2h2.4L9.6 14.5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  SpareParts: ({ size = 20, strokeWidth = 1.8 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="4" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="8" cy="8" r="1.3" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M4.5 19.5 7 15M11.5 15l2.5 4.5M9.2 12.5l1.6-2.8M16 5.5h4.5M16 9.5h4.5M16 13.5h4.5M16 17.5h4.5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  ),
  Staff: ({ size = 20, strokeWidth = 1.8 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="9" cy="7.5" r="2.6" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M3.8 18c.6-3 2.4-4.6 5.2-4.6s4.6 1.6 5.2 4.6" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M16 6v6M13.5 9h5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  ),
  Exit: ({ size = 20, strokeWidth = 1.8 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="3.5" width="10" height="17" rx="1.4" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M14 12h6M17 9l3 3-3 3" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Rider: ({ size = 18, strokeWidth = 1.8 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="6" r="2.4" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M6 20c1-4.5 3-6.5 6-6.5s5 2 6 6.5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  ),
  Scooter: ({ size = 18, strokeWidth = 1.8 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="5.5" cy="18.5" r="2.2" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="18.5" cy="18.5" r="2.2" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M5.5 18.5H12l2-6h-3.5M18.5 18.5H16c0-2.3-1.4-3.7-3.7-3.7H10.5M6.7 9.5H5M6.7 9.5l1-3h4l1 3h3.3c1.5 0 2.5 1.1 2.5 2.8" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Leaf: ({ size = 20, strokeWidth = 1.8 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M18.5 5C12.5 5.2 8 7.3 8 12.2c0 3 2.2 4.7 4.7 4.7C17.4 16.9 19 11.3 19.3 5.2Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" />
      <path d="M5.5 19c2.2-4.8 5.6-7.2 10-9" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  ),
};

const riderZones = [
  { icon: Icon.Entry, title: "Entry & Reception", text: "Riders check in and are greeted at the front desk." },
  { icon: Icon.Kyc, title: "KYC Area", text: "Aadhaar, PAN and license verification before allotment." },
  { icon: Icon.Allotment, title: "Allotment Area", text: "Helmets and scooter keys are handed over after inspection." },
];

const backendZones = [
  { icon: Icon.Inventory, title: "RFA Inventory", text: "Ready-for-allotment scooters staged and quality-tagged." },
  { icon: Icon.Service, title: "Service Area", text: "Routine maintenance and repair bay for the fleet." },
  { icon: Icon.Battery, title: "Battery Safety Corner", text: "High-voltage handling zone with a quarantine cabinet." },
  { icon: Icon.SpareParts, title: "Spare Parts Area", text: "Tyres, brake pads, controllers and consumables on hand." },
  { icon: Icon.Staff, title: "Staff & Utilities", text: "Back-office space for the hub team." },
  { icon: Icon.Exit, title: "Scooter Exit", text: "Checked-out scooters roll straight out to the rider." },
];

const flowLegend = [
  { icon: Icon.Rider, label: "Rider Flow", swatch: "#6fc21a" },
  { icon: Icon.Scooter, label: "Scooter Flow", swatch: "#0b3d22" },
];

const principles = ["Rider First", "Safe Rides", "Smart Mobility", "Zero Emission"];

type Zone = { icon: (props: IconProps) => ReactElement; title: string; text: string };

function ZoneTrack({ zones, className }: { zones: Zone[]; className?: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const index = Math.round(track.scrollLeft / track.clientWidth);
      setActiveIndex(Math.min(Math.max(index, 0), zones.length - 1));
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => track.removeEventListener("scroll", handleScroll);
  }, [zones.length]);

  const scrollToZone = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: index * track.clientWidth, behavior: "smooth" });
  };

  return (
    <>
      <div className={`hub-zones${className ? ` ${className}` : ""}`} ref={trackRef}>
        {zones.map((z) => (
          <div className="hub-zone" key={z.title}>
            <span className="hub-zone-icon">
              <z.icon size={19} />
            </span>
            <div className="hub-zone-title">{z.title}</div>
            <div className="hub-zone-text">{z.text}</div>
          </div>
        ))}
      </div>
      <div className="hub-zone-dots">
        {zones.map((z, index) => (
          <button
            key={z.title}
            type="button"
            aria-label={`Show ${z.title}`}
            aria-current={index === activeIndex}
            className={`hub-zone-dot${index === activeIndex ? " active" : ""}`}
            onClick={() => scrollToZone(index)}
          />
        ))}
      </div>
    </>
  );
}

export default function ZetoHubArchitecture() {
  return (
    <section className="hub-section" aria-labelledby="hub-heading">
      <style>{`
        .hub-section {
          --green: #0d8a3c;
          --green-deep: #0a6d30;
          --green-ink: #0b3d22;
          --lime: #6fc21a;
          --tint-50: #f3fbf3;
          --tint-100: #e6f7e8;
          --tint-200: #d3f0d8;
          --ink: #101a16;
          --muted: #5c6864;
          width: 100%;
          box-sizing: border-box;
          padding: clamp(28px, 5vw, 64px);
          background:
            radial-gradient(circle at 8% 4%, rgba(111, 194, 26, .09), transparent 30%),
            #fff;
          color: var(--ink);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .hub-shell {
          max-width: 1024px;
          margin: 0 auto;
        }

        .hub-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 26px;
        }

        .hub-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 13px 6px 8px;
          border-radius: 99px;
          background: var(--tint-100);
          color: var(--green-deep);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .04em;
          text-transform: uppercase;
          margin-bottom: 15px;
        }

        .hub-eyebrow-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--lime);
        }

        .hub-heading {
          margin: 0;
          font-size: clamp(30px, 3.8vw, 50px);
          line-height: 1.03;
          letter-spacing: -.045em;
          font-weight: 800;
        }

        .hub-heading .accent {
          color: var(--green);
        }

        .hub-subtitle {
          margin: 14px 0 0;
          max-width: 640px;
          color: var(--muted);
          font-size: clamp(15px, 1.5vw, 18px);
          line-height: 1.55;
        }

        .hub-brand {
          flex: 0 0 auto;
          min-width: 138px;
          padding: 13px 19px;
          border: 1px solid var(--tint-200);
          border-radius: 15px;
          display: flex;
          align-items: center;
          gap: 9px;
          color: var(--green-ink);
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -.04em;
          background: var(--tint-50);
        }

        .hub-logo-mark {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: linear-gradient(145deg, #4bc760, var(--green-deep));
          color: #fff;
          font-weight: 900;
          font-style: italic;
          transform: rotate(-6deg);
        }

        .hub-diagram-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--tint-200);
          box-shadow: 0 18px 40px rgba(13, 138, 60, .1);
          margin-bottom: 14px;
        }

        .hub-diagram-card img {
          display: block;
          width: 100%;
          height: auto;
        }

        .hub-legend {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 30px;
        }

        .hub-legend-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 99px;
          background: var(--tint-50);
          border: 1px solid var(--tint-200);
          font-size: 12.5px;
          font-weight: 700;
          color: var(--green-ink);
        }

        .hub-legend-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .hub-flow-label {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 4px 0 16px;
        }

        .hub-flow-label span {
          font-size: 13px;
          font-weight: 800;
          letter-spacing: .05em;
          text-transform: uppercase;
          color: var(--green-deep);
          white-space: nowrap;
        }

        .hub-flow-line {
          height: 1px;
          flex: 1;
          background: var(--tint-200);
        }

        .hub-zones {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .hub-zones.backend {
          margin-top: 12px;
        }

        .hub-zone {
          border: 1px solid var(--tint-200);
          border-radius: 15px;
          padding: 15px 16px 17px;
          background: var(--tint-50);
          transition: box-shadow .15s ease, transform .15s ease, background .15s ease;
        }

        .hub-zone:hover {
          box-shadow: 0 10px 22px rgba(13, 138, 60, .09);
          transform: translateY(-2px);
          background: #fff;
        }

        .hub-zone-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: grid;
          place-items: center;
          background: var(--tint-100);
          color: var(--green);
          margin-bottom: 11px;
        }

        .hub-zone-title {
          font-size: 14px;
          font-weight: 800;
          margin-bottom: 5px;
          color: var(--green-ink);
        }

        .hub-zone-text {
          font-size: 12.5px;
          line-height: 1.48;
          color: var(--muted);
        }

        .hub-zone-dots {
          display: none;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-top: 14px;
        }

        .hub-zone-dot {
          width: 7px;
          height: 7px;
          padding: 0;
          border: none;
          border-radius: 999px;
          background: var(--tint-200);
          cursor: pointer;
          transition: width .2s ease, background .2s ease;
        }

        .hub-zone-dot.active {
          width: 22px;
          background: var(--green);
        }

        .hub-principles {
          margin-top: 26px;
          padding-top: 22px;
          border-top: 1px solid var(--tint-200);
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .hub-principle {
          flex: 1;
          min-width: 150px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 13px 15px;
          border-radius: 12px;
          background: linear-gradient(150deg, var(--green-ink), var(--green-deep));
          color: #fff;
          font-size: 13px;
          font-weight: 700;
        }

        .hub-principle svg {
          color: #9fe86a;
          flex: 0 0 auto;
        }

        @media (max-width: 860px) {
          .hub-zones { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 620px) {
          .hub-header { flex-direction: column; }
          .hub-brand { align-self: flex-start; }
          .hub-zones {
            display: flex;
            grid-template-columns: none;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .hub-zones::-webkit-scrollbar { display: none; }
          .hub-zone {
            flex: 0 0 100%;
            scroll-snap-align: center;
          }
          .hub-zone-dots { display: flex; }
          .hub-principle { min-width: 100%; }
        }
      `}</style>

      <div className="hub-shell">
        <header className="hub-header">
          <div>
            <span className="hub-eyebrow">
              <span className="hub-eyebrow-dot" />
              FOCO Operations
            </span>
            <h2 id="hub-heading" className="hub-heading">
              Inside a <span className="accent">Zeto Hub</span>
            </h2>
            <p className="hub-subtitle">
              Every FOCO hub follows the same blueprint — a rider journey up front
              and a fully equipped backend that keeps the fleet ready, safe and moving.
            </p>
          </div>

          
        </header>

        <div className="hub-diagram-card">
          <img
            src={img}
            alt="Isometric layout of a Zeto Hub showing rider flow from entry and KYC through allotment, and scooter flow through service, battery safety, spare parts and RFA inventory to exit"
          />
        </div>

        <div className="hub-legend">
          {flowLegend.map((f) => (
            <span className="hub-legend-item" key={f.label}>
              <span className="hub-legend-dot" style={{ background: f.swatch }} />
              <f.icon size={14} />
              {f.label}
            </span>
          ))}
        </div>

        <div className="hub-flow-label">
          <span>Rider Journey</span>
          <div className="hub-flow-line" />
        </div>

        <ZoneTrack zones={riderZones} />

        <div className="hub-flow-label" style={{ marginTop: 24 }}>
          <span>Fleet & Backend</span>
          <div className="hub-flow-line" />
        </div>

        <ZoneTrack zones={backendZones} className="backend" />

        <div className="hub-principles">
          {principles.map((p) => (
            <div className="hub-principle" key={p}>
              <Icon.Leaf size={17} />
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}