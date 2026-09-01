

type IconProps = {
  size?: number;
  strokeWidth?: number;
};

const Icon = {
  Rupee: ({ size = 20, strokeWidth = 1.9 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 4.5h12M6 9h12M6 4.5c4 0 6.5 1.3 6.5 4.5S10 13.5 6 13.5l9 6.5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Scooter: ({ size = 20, strokeWidth = 1.9 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="5.5" cy="18.5" r="2.2" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="18.5" cy="18.5" r="2.2" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M5.5 18.5H12l2-6h-3.5M18.5 18.5H16c0-2.3-1.4-3.7-3.7-3.7H10.5M6.7 9.5H5M6.7 9.5l1-3h4l1 3h3.3c1.5 0 2.5 1.1 2.5 2.8" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Growth: ({ size = 20, strokeWidth = 1.9 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 19V5M4 19h17" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="m7 15 3-3 3 2 6-7" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Clock: ({ size = 20, strokeWidth = 1.9 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Wallet: ({ size = 18, strokeWidth = 1.8 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="6.5" width="18" height="13" rx="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M3 10.5h18" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="16.5" cy="14.3" r="1.1" fill="currentColor" />
    </svg>
  ),
  Shield: ({ size = 18, strokeWidth = 1.8 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3.5 5 6v6c0 4.7 2.9 7.6 7 9.5 4.1-1.9 7-4.8 7-9.5V6Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" />
      <path d="m9 12 2.2 2.2L15.5 9.6" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Tools: ({ size = 18, strokeWidth = 1.8 }: IconProps) => (
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
  Repeat: ({ size = 18, strokeWidth = 1.9 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7.5h11.5A3.5 3.5 0 0 1 19 11v1M20 16.5H8.5A3.5 3.5 0 0 1 5 13v-1" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="m14 4.5 2.5 3-2.5 3M10 19.5 7.5 16.5 10 13.5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Arrow: ({ size = 20, strokeWidth = 2 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

const investmentSnapshot = [
  { icon: Icon.Rupee, label: "Min. Investment", value: "₹4 Lakh*" },
  { icon: Icon.Scooter, label: "Starter Fleet", value: "10 Scooters" },
  { icon: Icon.Growth, label: "Projected ROI", value: "Up to 45%*" },
  { icon: Icon.Clock, label: "Payout Cycle", value: "Monthly" },
];

const allocation = [
  { icon: Icon.Scooter, label: "Scooter Fleet", note: "10 e-scooters, onboarded & branded", pct: 65 },
  { icon: Icon.Shield, label: "Security Deposit", note: "Refundable operating deposit held with Zeto", pct: 20 },
  { icon: Icon.Tools, label: "Setup & Onboarding", note: "Hub tie-up, KYC systems, initial servicing", pct: 15 },
];

const moneyFlow = [
  { icon: Icon.Wallet, title: "You Invest", text: "Minimum ₹4 Lakh secures your 10-scooter fleet." },
  { icon: Icon.Growth, title: "Zeto Operates", text: "Zeto operates the scooters and generates rider revenue." },
  { icon: Icon.Rupee, title: "Monthly Payout", text: "Your share of earnings is paid out on a fixed monthly cycle." },
  { icon: Icon.Repeat, title: "Reinvest & Scale", text: "Roll payouts back in to add scooters and grow beyond 10." },
];

export default function FocoRoiInvestment() {
  return (
    <section className="roi-section" aria-labelledby="roi-heading">
      <style>{`
        .roi-section {
          --green: #23a35a;
          --green-soft: #1c8a4c;
          --lime: #6fb52a;
          --bg: #ffffff;
          --panel: #ffffff;
          --panel-2: #f0f7f2;
          --line: #dfe8e2;
          --ink: #0f231a;
          --muted: #5d7269;
          width: 100%;
          box-sizing: border-box;
          padding: clamp(28px, 5vw, 64px);
          background:
            radial-gradient(circle at 92% 6%, rgba(143, 226, 63, .07), transparent 32%),
            radial-gradient(circle at 4% 92%, rgba(55, 194, 106, .06), transparent 30%),
            var(--bg);
          color: var(--ink);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .roi-shell {
          max-width: 1024px;
          margin: 0 auto;
        }

        .roi-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 26px;
        }

        .roi-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 13px 6px 8px;
          border-radius: 99px;
          background: var(--panel-2);
          border: 1px solid var(--line);
          color: var(--green-soft);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .04em;
          text-transform: uppercase;
          margin-bottom: 15px;
        }

        .roi-eyebrow-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--lime);
        }

        .roi-heading {
          margin: 0;
          font-size: clamp(30px, 3.8vw, 50px);
          line-height: 1.03;
          letter-spacing: -.045em;
          font-weight: 800;
          color: var(--ink);
        }

        .roi-heading .accent {
          color: var(--green);
        }

        .roi-subtitle {
          margin: 14px 0 0;
          max-width: 620px;
          color: var(--muted);
          font-size: clamp(15px, 1.5vw, 18px);
          line-height: 1.55;
        }

        .roi-brand {
          flex: 0 0 auto;
          min-width: 138px;
          padding: 13px 19px;
          border: 1px solid var(--line);
          border-radius: 15px;
          display: flex;
          align-items: center;
          gap: 9px;
          color: var(--ink);
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -.04em;
          background: var(--panel-2);
        }

        .roi-logo-mark {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: linear-gradient(145deg, var(--lime), var(--green));
          color: #ffffff;
          font-weight: 900;
          font-style: italic;
          transform: rotate(-6deg);
        }

        .roi-snapshot {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-bottom: 30px;
        }

        .roi-stat {
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 15px;
          padding: 16px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 1px 2px rgba(15, 35, 26, .04);
        }

        .roi-stat-icon {
          width: 38px;
          height: 38px;
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: rgba(35, 163, 90, .1);
          color: var(--green-soft);
        }

        .roi-stat-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .03em;
          text-transform: uppercase;
          color: var(--muted);
        }

        .roi-stat-value {
          margin-top: 2px;
          font-size: clamp(16px, 1.9vw, 20px);
          font-weight: 800;
          letter-spacing: -.02em;
          color: var(--ink);
        }

        .roi-flow-label {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 4px 0 16px;
        }

        .roi-flow-label span {
          font-size: 13px;
          font-weight: 800;
          letter-spacing: .05em;
          text-transform: uppercase;
          color: var(--green-soft);
          white-space: nowrap;
        }

        .roi-flow-line {
          height: 1px;
          flex: 1;
          background: var(--line);
        }

        .roi-panel {
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 18px;
          padding: clamp(20px, 3vw, 28px);
          margin-bottom: 28px;
          box-shadow: 0 1px 2px rgba(15, 35, 26, .04);
        }

        .roi-allocation-row {
          display: grid;
          grid-template-columns: 34px 1fr auto;
          align-items: center;
          gap: 14px;
          padding: 14px 0;
          border-bottom: 1px solid var(--line);
        }

        .roi-allocation-row:last-child {
          border-bottom: 0;
          padding-bottom: 0;
        }

        .roi-allocation-icon {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          display: grid;
          place-items: center;
          background: rgba(35, 163, 90, .1);
          color: var(--green-soft);
        }

        .roi-allocation-label {
          font-size: 14.5px;
          font-weight: 800;
          color: var(--ink);
        }

        .roi-allocation-note {
          margin-top: 2px;
          font-size: 12.5px;
          color: var(--muted);
        }

        .roi-allocation-bar-wrap {
          margin-top: 9px;
          height: 6px;
          border-radius: 99px;
          background: var(--line);
          overflow: hidden;
        }

        .roi-allocation-bar {
          height: 100%;
          border-radius: 99px;
          background: linear-gradient(90deg, var(--green), var(--lime));
        }

        .roi-allocation-pct {
          font-size: 17px;
          font-weight: 800;
          color: var(--green-soft);
          white-space: nowrap;
        }

        .roi-flow-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        .roi-flow-step {
          position: relative;
          border: 1px solid var(--line);
          border-radius: 15px;
          padding: 17px 16px 19px;
          background: var(--panel);
          box-shadow: 0 1px 2px rgba(15, 35, 26, .04);
          transition: box-shadow .15s ease, transform .15s ease, border-color .15s ease;
        }

        .roi-flow-step:hover {
          box-shadow: 0 14px 28px rgba(15, 35, 26, .1);
          transform: translateY(-2px);
          border-color: var(--green);
        }

        .roi-flow-icon {
          width: 40px;
          height: 40px;
          border-radius: 11px;
          display: grid;
          place-items: center;
          background: linear-gradient(150deg, var(--lime), var(--green));
          color: #ffffff;
          margin-bottom: 13px;
        }

        .roi-flow-title {
          font-size: 14.5px;
          font-weight: 800;
          margin-bottom: 6px;
          color: var(--ink);
        }

        .roi-flow-text {
          font-size: 12.5px;
          line-height: 1.5;
          color: var(--muted);
        }

        .roi-flow-connector {
          position: absolute;
          top: 30px;
          right: -21px;
          width: 20px;
          height: 20px;
          display: grid;
          place-items: center;
          color: var(--line);
          z-index: 2;
        }

        .roi-disclaimer {
          margin-top: 22px;
          font-size: 11.5px;
          line-height: 1.55;
          color: #8a9c92;
        }

        @media (max-width: 900px) {
          .roi-snapshot { grid-template-columns: repeat(2, 1fr); }
          .roi-flow-grid { grid-template-columns: repeat(2, 1fr); }
          .roi-flow-connector { display: none; }
        }

        @media (max-width: 620px) {
          .roi-header { flex-direction: column; }
          .roi-brand { align-self: flex-start; }
          .roi-snapshot { grid-template-columns: 1fr; }
          .roi-flow-grid { grid-template-columns: 1fr; }
          .roi-allocation-row { grid-template-columns: 30px 1fr; }
          .roi-allocation-pct {
            grid-column: 2;
            justify-self: start;
          }
        }
      `}</style>

      <div className="roi-shell">
        <header className="roi-header">
          <div>
            <span className="roi-eyebrow">
              <span className="roi-eyebrow-dot" />
              Franchise Economics
            </span>
            <h2 id="roi-heading" className="roi-heading">
              ROI &amp; <span className="accent">Investment</span> Breakdown
            </h2>
            <p className="roi-subtitle">
              A clear look at what your capital funds, how it turns into monthly
              payouts, and the return profile behind the FOCO model.
            </p>
          </div>

        
        </header>

        <div className="roi-snapshot">
          {investmentSnapshot.map((s) => (
            <div className="roi-stat" key={s.label}>
              <span className="roi-stat-icon">
                <s.icon size={19} />
              </span>
              <div>
                <div className="roi-stat-label">{s.label}</div>
                <div className="roi-stat-value">{s.value}</div>
              </div>
            </div>
          ))}
        </div>

        

        <div className="roi-flow-label">
          <span>How Returns Reach You</span>
          <div className="roi-flow-line" />
        </div>

        <div className="roi-flow-grid">
          {moneyFlow.map((step, i) => (
            <div className="roi-flow-step" key={step.title}>
              <span className="roi-flow-icon">
                <step.icon size={20} />
              </span>
              <div className="roi-flow-title">{step.title}</div>
              <div className="roi-flow-text">{step.text}</div>
              {i < moneyFlow.length - 1 && (
                <span className="roi-flow-connector">
                  <Icon.Arrow size={16} />
                </span>
              )}
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}