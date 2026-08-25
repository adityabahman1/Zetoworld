
type IconProps = {
  size?: number;
  strokeWidth?: number;
};

const Icon = {
  Invest: ({ size = 26, strokeWidth = 1.8 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3.5 15c2-4 5-6 8.5-6s6.5 2 8.5 6" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <circle cx="12" cy="9.2" r="2.7" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M12 5v-.8M12 18.5V21" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  ),
  Operate: ({ size = 26, strokeWidth = 1.8 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="3.1" stroke="currentColor" strokeWidth={strokeWidth} />
      <path
        d="M19.4 13.6a1.5 1.5 0 0 0 .3 1.65l.05.06a1.8 1.8 0 1 1-2.55 2.55l-.06-.05a1.5 1.5 0 0 0-1.65-.3 1.5 1.5 0 0 0-.9 1.37v.15a1.8 1.8 0 0 1-3.6 0v-.08a1.5 1.5 0 0 0-1-1.37 1.5 1.5 0 0 0-1.65.3l-.06.05a1.8 1.8 0 1 1-2.55-2.55l.05-.06a1.5 1.5 0 0 0 .3-1.65 1.5 1.5 0 0 0-1.37-.9h-.15a1.8 1.8 0 0 1 0-3.6h.08a1.5 1.5 0 0 0 1.37-1 1.5 1.5 0 0 0-.3-1.65l-.05-.06a1.8 1.8 0 1 1 2.55-2.55l.06.05a1.5 1.5 0 0 0 1.65.3h.08A1.5 1.5 0 0 0 10.9 3.1v-.15a1.8 1.8 0 0 1 3.6 0v.08a1.5 1.5 0 0 0 .9 1.37 1.5 1.5 0 0 0 1.65-.3l.06-.05a1.8 1.8 0 1 1 2.55 2.55l-.05.06a1.5 1.5 0 0 0-.3 1.65v.08a1.5 1.5 0 0 0 1.37.9h.15a1.8 1.8 0 0 1 0 3.6h-.08a1.5 1.5 0 0 0-1.37.9z"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.9}
        strokeLinejoin="round"
      />
    </svg>
  ),
  Trust: ({ size = 26, strokeWidth = 1.8 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3.5 4.5 6v6c0 5 3.2 8 7.5 9.5 4.3-1.5 7.5-4.5 7.5-9.5V6Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" />
      <path d="m8.5 12.2 2.3 2.3 4.7-5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Grow: ({ size = 26, strokeWidth = 1.8 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 20V4M4 20h16" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <rect x="7.2" y="13.5" width="2.6" height="6.5" rx=".6" fill="currentColor" />
      <rect x="12" y="10" width="2.6" height="10" rx=".6" fill="currentColor" />
      <rect x="16.8" y="6.5" width="2.6" height="13.5" rx=".6" fill="currentColor" />
    </svg>
  ),
  Shield: ({ size = 20, strokeWidth = 1.8 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3.5 5 6v6c0 4.7 2.9 7.6 7 9.5 4.1-1.9 7-4.8 7-9.5V6Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" />
      <path d="m9 12 2.2 2.2L15.5 9.6" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Arrow: ({ size = 22, strokeWidth = 2 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Rupee: ({ size = 18, strokeWidth = 2 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 4.5h12M6 9h12M6 4.5c4 0 6.5 1.3 6.5 4.5S10 13.5 6 13.5l9 6.5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Scooter: ({ size = 18, strokeWidth = 2 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="5.5" cy="18.5" r="2.2" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="18.5" cy="18.5" r="2.2" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M5.5 18.5H12l2-6h-3.5M18.5 18.5H16c0-2.3-1.4-3.7-3.7-3.7H10.5M6.7 9.5H5M6.7 9.5l1-3h4l1 3h3.3c1.5 0 2.5 1.1 2.5 2.8" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

const steps = [
  {
    icon: Icon.Invest,
    title: "Invest",
    text: "Put in the minimum capital to secure your franchise slot and starter fleet.",
  },
  {
    icon: Icon.Operate,
    title: "Zeto Operates",
    text: "Zeto's trained team handles daily operations — riders, servicing, battery swaps, everything.",
  },
  {
    icon: Icon.Trust,
    title: "Build Trust",
    text: "Transparent reporting and steady payouts build a track record you can rely on.",
  },
  {
    icon: Icon.Grow,
    title: "Reinvest & Grow",
    text: "Roll earnings back into the fleet and scale beyond your first 10 scooters.",
  },
];

const highlights = [
  { icon: Icon.Rupee, label: "Min. Investment", value: "₹4 Lakh*" },
  { icon: Icon.Scooter, label: "Starter Fleet", value: "10 Scooters" },
  { icon: Icon.Grow, label: "Projected ROI", value: "Up to 45%*" },
];

export default function FocoModelExplainer() {
  return (
    <section className="foco-section" aria-labelledby="foco-heading">
      <style>{`
        .foco-section {
          --green: #08752d;
          --green-dark: #063f25;
          --green-deep: #052e1b;
          --lime: #67bd14;
          --ink: #101a16;
          --muted: #5c6864;
          width: 100%;
          box-sizing: border-box;
          padding: clamp(28px, 5vw, 64px);
          background:
            radial-gradient(circle at 12% 8%, rgba(103, 189, 20, .07), transparent 30%),
            #fff;
          color: var(--ink);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .foco-shell {
          max-width: 1024px;
          margin: 0 auto;
        }

        .foco-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 28px;
        }

        .foco-eyebrow {
          width: 52px;
          height: 4px;
          border-radius: 99px;
          background: var(--green);
          margin-bottom: 13px;
        }

        .foco-heading {
          margin: 0;
          font-size: clamp(30px, 3.8vw, 50px);
          line-height: 1.03;
          letter-spacing: -.045em;
          font-weight: 800;
        }

        .foco-heading .accent {
          color: var(--green);
        }

        .foco-subtitle {
          margin: 14px 0 0;
          max-width: 620px;
          color: var(--muted);
          font-size: clamp(15px, 1.5vw, 18px);
          line-height: 1.55;
        }

        .foco-brand {
          flex: 0 0 auto;
          min-width: 138px;
          padding: 13px 19px;
          border: 1px solid #aeb8b3;
          border-radius: 15px;
          display: flex;
          align-items: center;
          gap: 9px;
          color: var(--green-dark);
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -.04em;
        }

        .foco-logo-mark {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: linear-gradient(145deg, #1e8b37, #0c4d20);
          color: #fff;
          font-weight: 900;
          font-style: italic;
          transform: rotate(-6deg);
        }

        .foco-hero {
          position: relative;
          overflow: hidden;
          border-radius: 22px;
          background: linear-gradient(150deg, var(--green-dark) 0%, var(--green-deep) 100%);
          color: #fff;
          padding: clamp(24px, 3.5vw, 38px);
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 20px;
        }

        .foco-hero-tag {
          grid-column: 1 / -1;
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .07em;
          text-transform: uppercase;
          color: #9fe86a;
          margin-bottom: 4px;
        }

        .foco-stat {
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.14);
          border-radius: 15px;
          padding: 16px 18px;
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .foco-stat-icon {
          width: 38px;
          height: 38px;
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: rgba(255,255,255,.12);
          color: #9fe86a;
        }

        .foco-stat-label {
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: .03em;
          text-transform: uppercase;
          color: #c8ddc6;
        }

        .foco-stat-value {
          margin-top: 2px;
          font-size: clamp(18px, 2.1vw, 23px);
          font-weight: 800;
          letter-spacing: -.02em;
        }

        .foco-flow-label {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 8px 0 16px;
        }

        .foco-flow-label span {
          font-size: 13px;
          font-weight: 800;
          letter-spacing: .05em;
          text-transform: uppercase;
          color: var(--green);
          white-space: nowrap;
        }

        .foco-flow-line {
          height: 1px;
          flex: 1;
          background: #dfe6e1;
        }

        .foco-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        .foco-step {
          position: relative;
          border: 1px solid #dfe6e1;
          border-radius: 16px;
          padding: 18px 16px 20px;
          background: #fafcfa;
        }

        .foco-step-number {
          position: absolute;
          top: 14px;
          right: 16px;
          font-size: 12px;
          font-weight: 800;
          color: #a9b6b0;
        }

        .foco-step-icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          background: var(--green);
          color: #fff;
          margin-bottom: 14px;
        }

        .foco-step-title {
          font-size: 15.5px;
          font-weight: 800;
          margin-bottom: 6px;
        }

        .foco-step-text {
          font-size: 13px;
          line-height: 1.5;
          color: var(--muted);
        }

        .foco-step-arrow {
          display: none;
        }

        .foco-footer {
          margin-top: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          flex-wrap: wrap;
        }

        .foco-badge {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 11px 18px;
          border: 1px solid #c7d3cd;
          border-radius: 99px;
          font-size: 13px;
          font-weight: 700;
          color: var(--green-dark);
        }

        .foco-badge svg {
          color: var(--green);
        }

        .foco-cta {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          background: var(--lime);
          color: #0b2e14;
          font-weight: 800;
          font-size: 14.5px;
          padding: 14px 24px;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          letter-spacing: .01em;
        }

        .foco-disclaimer {
          margin-top: 16px;
          font-size: 11.5px;
          line-height: 1.5;
          color: #8b968f;
        }

        @media (max-width: 860px) {
          .foco-hero { grid-template-columns: 1fr; }
          .foco-steps { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 620px) {
          .foco-header { flex-direction: column; }
          .foco-brand { align-self: flex-start; }
          .foco-steps { grid-template-columns: 1fr; }
          .foco-footer { flex-direction: column; align-items: flex-start; }
          .foco-cta { width: 100%; justify-content: center; }
        }
      `}</style>

      <div className="foco-shell">
        <header className="foco-header">
          <div>
            <div className="foco-eyebrow" />
            <h2 id="foco-heading" className="foco-heading">
              The <span className="accent">FOCO</span> Franchise Model
            </h2>
            <p className="foco-subtitle">
              Franchise-Owned, Company-Operated. You invest in the fleet — Zeto's
              trained team runs the day-to-day so you earn without managing operations.
            </p>
          </div>

          
        </header>

        <div className="foco-hero">
          <div className="foco-hero-tag">
            <Icon.Shield size={16} />
            Own the opportunity. We run the operations.
          </div>

          {highlights.map((h) => (
            <div className="foco-stat" key={h.label}>
              <span className="foco-stat-icon">
                <h.icon size={19} />
              </span>
              <div>
                <div className="foco-stat-label">{h.label}</div>
                <div className="foco-stat-value">{h.value}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="foco-flow-label">
          <span>How FOCO Works</span>
          <div className="foco-flow-line" />
        </div>

        <div className="foco-steps">
          {steps.map((step, i) => (
            <div className="foco-step" key={step.title}>
              <span className="foco-step-number">0{i + 1}</span>
              <span className="foco-step-icon">
                <step.icon size={22} />
              </span>
              <div className="foco-step-title">{step.title}</div>
              <div className="foco-step-text">{step.text}</div>
            </div>
          ))}
        </div>

      

        
      </div>
    </section>
  );
}