import React from "react";

type IconProps = {
  size?: number;
  strokeWidth?: number;
};

const Icon = {
  Alert: ({ size = 20, strokeWidth = 2 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M12 7.5v5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <circle cx="12" cy="16" r="1" fill="currentColor" />
    </svg>
  ),
  Check: ({ size = 20, strokeWidth = 2.5 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="m7.7 12.1 2.8 2.8 5.9-6" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  MapPin: ({ size = 18, strokeWidth = 2 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M19 10.2c0 5.1-7 10.3-7 10.3S5 15.3 5 10.2a7 7 0 1 1 14 0Z" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  ),
  Eye: ({ size = 22, strokeWidth = 2 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M2.8 12s3.2-6 9.2-6 9.2 6 9.2 6-3.2 6-9.2 6-9.2-6-9.2-6Z" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="12" cy="12" r="2.6" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  ),
  Users: ({ size = 22, strokeWidth = 2 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M3.5 19c.6-3.2 2.4-5 5.5-5s4.9 1.8 5.5 5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M15.5 5.5a3 3 0 0 1 0 5.8M17 14.2c2 .6 3.1 2 3.5 4.2" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  ),
  Leaf: ({ size = 22, strokeWidth = 2 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M19.5 4.5C12 4.7 6.4 7.2 6.4 13.1c0 3.4 2.5 5.3 5.3 5.3 5.5 0 7.4-6.6 7.8-13.9Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" />
      <path d="M4.5 20c2.5-5.5 6.3-8.2 11.2-10.2" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  ),
  Chart: ({ size = 22, strokeWidth = 2 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 19V5M4 19h17" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="m7 15 3-3 3 2 6-7" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Arrow: ({ size = 24, strokeWidth = 2 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Billboard: ({ size = 46, strokeWidth = 1.7 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect x="8" y="8" width="45" height="25" rx="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M12 12h37v17H12z" fill="currentColor" opacity=".08" />
      <path d="M30.5 33v20M23 53h15M12 39h38M16 33l-4 6M48 33l4 6" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M18 8V5M28 8V5M38 8V5M48 8V5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  ),
};

const problems = [
  "Static & easy to ignore",
  "Limited to fixed locations",
  "High cost to reach audiences",
  "No meaningful audience tracking",
];

const zones = ["Restaurants", "Offices", "Markets", "Residential", "Universities", "IT Parks", "Airports", "Metro Stations"];

const benefits = [
  { icon: Icon.Eye, title: "High Visibility", text: "Everywhere" },
  { icon: Icon.Users, title: "Targeted", text: "Local Audience" },
  { icon: Icon.Leaf, title: "Eco-Friendly", text: "Branding" },
  { icon: Icon.Chart, title: "Cost-Effective", text: "High ROI" },
];

export default function ZetoMovingBillboardsSection() {
  return (
    <section className="zeto-section" aria-labelledby="zeto-heading">
      <style>{`
        .zeto-section {
          --zeto-green: #08752d;
          --zeto-dark: #063f25;
          --zeto-lime: #62bd00;
          --zeto-ink: #101a16;
          --zeto-muted: #66706c;
          width: 100%;
          box-sizing: border-box;
          padding: clamp(28px, 5vw, 64px);
          background:
            radial-gradient(circle at 85% 10%, rgba(90, 188, 0, .08), transparent 28%),
            #fff;
          color: var(--zeto-ink);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .zeto-shell {
          max-width: 1024px;
          margin: 0 auto;
        }

        .zeto-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 28px;
          margin-bottom: 30px;
        }

        .zeto-heading-wrap {
          max-width: 760px;
        }

        .zeto-eyebrow {
          width: 52px;
          height: 4px;
          border-radius: 99px;
          background: var(--zeto-green);
          margin-bottom: 13px;
        }

        .zeto-heading {
          margin: 0;
          font-size: clamp(32px, 4vw, 56px);
          line-height: .98;
          letter-spacing: -0.045em;
          font-weight: 800;
        }

        .zeto-heading span {
          color: var(--zeto-green);
        }

        .zeto-subtitle {
          margin: 16px 0 0;
          max-width: 650px;
          color: var(--zeto-muted);
          font-size: clamp(15px, 1.6vw, 19px);
          line-height: 1.55;
        }

        .zeto-brand {
          flex: 0 0 auto;
          min-width: 138px;
          padding: 13px 19px;
          border: 1px solid #aeb8b3;
          border-radius: 15px;
          display: flex;
          align-items: center;
          gap: 9px;
          color: var(--zeto-dark);
          font-size: 24px;
          font-weight: 800;
          letter-spacing: -.04em;
          box-shadow: 0 8px 22px rgba(0, 50, 30, .05);
        }

        .zeto-logo-mark {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: linear-gradient(145deg, #1e8b37, #0c4d20);
          color: #fff;
          font-weight: 900;
          font-style: italic;
          transform: rotate(-6deg);
        }

        .zeto-grid {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, .92fr) minmax(0, 1.28fr);
          gap: clamp(22px, 4vw, 58px);
          align-items: stretch;
        }

        .zeto-card {
          position: relative;
          overflow: hidden;
          border-radius: 25px;
          min-height: 455px;
          box-shadow: 0 18px 45px rgba(9, 45, 30, .09);
        }

        .zeto-problem {
          background: linear-gradient(145deg, #fff6f4 0%, #fff 75%);
          border: 1px solid #f2dcd8;
          padding: 27px;
        }

        .zeto-solution {
          background: linear-gradient(145deg, #07502f 0%, #043a25 100%);
          color: #fff;
          padding: 27px;
        }

        .zeto-card-title {
          display: flex;
          align-items: center;
          gap: 11px;
          font-size: 18px;
          font-weight: 800;
          letter-spacing: .01em;
          margin-bottom: 25px;
        }

        .zeto-problem .zeto-card-title {
          color: #b51d1d;
        }

        .zeto-solution .zeto-card-title {
          color: #fff;
        }

        .zeto-title-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: grid;
          place-items: center;
        }

        .zeto-problem .zeto-title-icon {
          background: #c51f20;
          color: #fff;
        }

        .zeto-solution .zeto-title-icon {
          background: #fff;
          color: var(--zeto-green);
        }

        .zeto-problem-body {
          display: grid;
          grid-template-columns: 45% 55%;
          gap: 14px;
          align-items: center;
        }

        .zeto-billboard {
          min-height: 220px;
          display: grid;
          place-items: center;
          color: #68736e;
          position: relative;
        }

        .zeto-billboard:after {
          content: "";
          position: absolute;
          width: 150px;
          height: 30px;
          bottom: 11px;
          border-radius: 50%;
          background: rgba(117, 64, 56, .09);
          filter: blur(5px);
        }

        .zeto-billboard svg {
          width: 150px;
          height: 150px;
          position: relative;
          z-index: 1;
        }

        .zeto-problem-list {
          display: grid;
          gap: 18px;
        }

        .zeto-problem-item {
          display: grid;
          grid-template-columns: 30px 1fr;
          gap: 10px;
          align-items: start;
          padding-bottom: 15px;
          border-bottom: 1px solid #e8d9d6;
          color: #313936;
          font-size: 15px;
          line-height: 1.35;
        }

        .zeto-x {
          width: 25px;
          height: 25px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: #ca2525;
          color: #fff;
          font-size: 15px;
          font-weight: 800;
        }

        .zeto-problem-footer {
          position: absolute;
          left: 27px;
          right: 27px;
          bottom: 27px;
          border: 1px solid #ece4e1;
          background: rgba(255,255,255,.92);
          border-radius: 17px;
          padding: 17px 18px;
          display: flex;
          gap: 14px;
          align-items: center;
          color: #3c4441;
          font-size: 14px;
          line-height: 1.45;
          box-shadow: 0 8px 22px rgba(40, 20, 20, .06);
        }

        .zeto-problem-footer strong {
          color: #c32929;
        }

        .zeto-mini-chart {
          width: 42px;
          height: 42px;
          flex: 0 0 auto;
          color: #c32929;
        }

        .zeto-solution-top {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 18px;
          margin-bottom: 20px;
        }

        .zeto-stat {
          display: flex;
          align-items: baseline;
          gap: 9px;
        }

        .zeto-stat-number {
          font-size: clamp(45px, 6vw, 68px);
          line-height: .82;
          font-weight: 850;
          letter-spacing: -.06em;
        }

        .zeto-stat-label {
          color: #8edb1c;
          font-weight: 700;
          font-size: 15px;
        }

        .zeto-locations {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          justify-content: flex-end;
          max-width: 270px;
        }

        .zeto-location {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 7px 10px;
          border-radius: 8px;
          background: #f4faf5;
          color: #2e3833;
          font-size: 12px;
          font-weight: 700;
        }

        .zeto-location svg {
          color: var(--zeto-green);
        }

        .zeto-coverage-label {
          margin: 5px 0 12px;
          color: #91d31c;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .06em;
          text-transform: uppercase;
        }

        .zeto-solution-content {
          display: grid;
          grid-template-columns: 1.12fr .88fr;
          gap: 17px;
        }

        .zeto-zones {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 8px;
        }

        .zeto-zone {
          display: flex;
          align-items: center;
          gap: 9px;
          min-height: 47px;
          padding: 0 12px;
          border-radius: 9px;
          background: rgba(15, 133, 54, .72);
          border: 1px solid rgba(139, 226, 60, .12);
          color: #f4fff5;
          font-size: 12px;
          font-weight: 700;
        }

        .zeto-zone-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #91df20;
          box-shadow: 0 0 0 4px rgba(145,223,32,.1);
        }

        .zeto-map {
          position: relative;
          min-height: 205px;
          border-radius: 16px;
          overflow: hidden;
          background:
            radial-gradient(circle at 70% 30%, rgba(102, 189, 0, .2), transparent 32%),
            radial-gradient(circle at 30% 75%, rgba(102, 189, 0, .13), transparent 32%),
            #043b27;
        }

        .zeto-map-grid {
          position: absolute;
          inset: 0;
          opacity: .18;
          background-image: radial-gradient(circle, #a2dc69 1px, transparent 1px);
          background-size: 8px 8px;
          mask-image: linear-gradient(90deg, transparent, #000 25%, #000 78%, transparent);
        }

        .zeto-route {
          position: absolute;
          inset: 18px 13px;
          width: calc(100% - 26px);
          height: calc(100% - 36px);
        }

        .zeto-pin {
          position: absolute;
          width: 19px;
          height: 19px;
          border-radius: 50% 50% 50% 0;
          background: #8edb19;
          border: 3px solid #e7ffd0;
          transform: rotate(-45deg);
          box-shadow: 0 0 0 5px rgba(142,219,25,.13);
        }

        .zeto-pin:after {
          content: "";
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #06472b;
          top: 4px;
          left: 4px;
        }

        .zeto-pin.one { top: 18%; right: 18%; }
        .zeto-pin.two { top: 50%; right: 42%; }
        .zeto-pin.three { bottom: 18%; left: 23%; }

        .zeto-benefits {
          position: absolute;
          left: 27px;
          right: 27px;
          bottom: 27px;
          background: #fff;
          color: #20332a;
          border-radius: 16px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          overflow: hidden;
        }

        .zeto-benefit {
          padding: 14px 10px;
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 0;
        }

        .zeto-benefit + .zeto-benefit {
          border-left: 1px solid #dce5df;
        }

        .zeto-benefit-icon {
          flex: 0 0 auto;
          color: var(--zeto-green);
        }

        .zeto-benefit-title {
          font-size: 11px;
          line-height: 1.25;
          font-weight: 800;
        }

        .zeto-benefit-text {
          font-size: 10px;
          line-height: 1.2;
          color: #65706b;
        }

        .zeto-connector {
          position: absolute;
          left: calc(50% - 22px);
          top: 50%;
          transform: translate(-50%, -50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #fff;
          color: var(--zeto-green);
          display: grid;
          place-items: center;
          z-index: 5;
          box-shadow: 0 7px 20px rgba(0, 0, 0, .12);
          border: 3px solid #e7f4ea;
        }

        @media (max-width: 900px) {
          .zeto-header { flex-direction: column; }
          .zeto-brand { align-self: flex-start; }
          .zeto-grid { grid-template-columns: 1fr; }
          .zeto-connector { display: none; }
          .zeto-card { min-height: 430px; }
        }

        @media (max-width: 620px) {
          .zeto-section { padding: 25px 16px; }
          .zeto-problem-body { grid-template-columns: 1fr; }
          .zeto-billboard { min-height: 150px; }
          .zeto-solution-top { flex-direction: column; align-items: flex-start; }
          .zeto-locations { justify-content: flex-start; max-width: none; }
          .zeto-solution-content { grid-template-columns: 1fr; }
          .zeto-map { min-height: 170px; }
          .zeto-benefits {
            position: static;
            margin-top: 16px;
            grid-template-columns: repeat(2, 1fr);
          }
          .zeto-benefit:nth-child(3) { border-left: 0; border-top: 1px solid #dce5df; }
          .zeto-benefit:nth-child(4) { border-top: 1px solid #dce5df; }
          .zeto-problem-footer {
            position: static;
            margin-top: 22px;
          }
        }
      `}</style>

      <div className="zeto-shell">
        <header className="zeto-header">
          <div className="zeto-heading-wrap">
            <div className="zeto-eyebrow" />
            <h2 id="zeto-heading" className="zeto-heading">
              The Problem <span>&amp; Our Solution</span>
            </h2>
            <p className="zeto-subtitle">
              Traditional advertising is expensive and hard to measure.
              <br />
              <strong>ZETO</strong> turns everyday movement into hyperlocal brand visibility.
            </p>
          </div>

          
        </header>

        <div className="zeto-grid">
          <article className="zeto-card zeto-problem">
            <div className="zeto-card-title">
              <div className="zeto-title-icon"><Icon.Alert /></div>
              <span>THE PROBLEM — STATIC BILLBOARDS</span>
            </div>

            <div className="zeto-problem-body">
              <div className="zeto-billboard">
                <Icon.Billboard size={150} />
              </div>

              <div className="zeto-problem-list">
                {problems.map((problem) => (
                  <div className="zeto-problem-item" key={problem}>
                    <span className="zeto-x">×</span>
                    <span>{problem}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="zeto-problem-footer">
              <svg className="zeto-mini-chart" viewBox="0 0 42 42" fill="none" aria-hidden="true">
                <path d="M5 35V8M5 35h31" stroke="currentColor" strokeWidth="2" />
                <path d="m9 28 7-7 6 4 9-13" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M26 12h5v5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>
                Brands need <strong>better ROI</strong>, local visibility,
                continuous exposure and measurable reach.
              </span>
            </div>
          </article>

          

          <article className="zeto-card zeto-solution">
            <div className="zeto-card-title">
              <div className="zeto-title-icon"><Icon.Check /></div>
              <span>OUR SOLUTION — MOVING BILLBOARDS</span>
            </div>

            <div className="zeto-solution-top">
              <div>
                <div className="zeto-stat">
                  <span className="zeto-stat-number">500+</span>
                </div>
                <div className="zeto-stat-label mt-4">Electric scooters on the move</div>
              </div>

              <div className="zeto-locations">
                {["Chandigarh", "Mohali", "Panchkula"].map((location) => (
                  <span className="zeto-location" key={location}>
                    <Icon.MapPin size={14} />
                    {location}
                  </span>
                ))}
              </div>
            </div>

            <div className="zeto-coverage-label">Daily coverage across</div>

            <div className="zeto-solution-content">
              <div className="zeto-zones">
                {zones.map((zone) => (
                  <div className="zeto-zone" key={zone}>
                    <span className="zeto-zone-dot" />
                    {zone}
                  </div>
                ))}
              </div>

              <div className="zeto-map" aria-label="Illustrative moving scooter route map">
                <div className="zeto-map-grid" />
                <svg className="zeto-route" viewBox="0 0 260 190" fill="none" aria-hidden="true">
                  <path
                    d="M214 25C188 20 164 29 177 47C189 64 232 51 220 73C209 92 142 73 132 99C122 126 187 129 170 153C158 170 87 145 62 159"
                    stroke="#8fdc20"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="1 1"
                  />
                  <path
                    d="M218 26C190 19 166 28 178 47"
                    stroke="#d0f89b"
                    strokeWidth="1.5"
                    opacity=".7"
                  />
                </svg>
                <span className="zeto-pin one" />
                <span className="zeto-pin two" />
                <span className="zeto-pin three" />
              </div>
            </div>

            
          </article>
        </div>
      </div>
    </section>
  );
}