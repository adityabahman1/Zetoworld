import React from "react";

type IconProps = {
  size?: number;
  strokeWidth?: number;
};

const Icons = {
  Billboard: ({ size = 22, strokeWidth = 1.8 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="16" height="9" rx="1.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M12 13v7M8.5 20h7M7 16h10M7 13l-2 3M17 13l2 3" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  ),
  Kiosk: ({ size = 22, strokeWidth = 1.8 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="7" y="3" width="10" height="17" rx="1.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="9.5" y="5.5" width="5" height="6" rx=".6" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M9 15h6M12 20v1.5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  ),
  Newspaper: ({ size = 22, strokeWidth = 1.7 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="4" width="17" height="16" rx="1.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M6.5 7h5v5h-5zM13.5 7h4M13.5 10h4M6.5 14.5h11M6.5 17h11" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  ),
  Digital: ({ size = 22, strokeWidth = 1.8 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5.5" y="3" width="13" height="18" rx="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M9 6h6M10 18h4" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <circle cx="12" cy="15" r="1.2" fill="currentColor" />
    </svg>
  ),
  Check: ({ size = 22 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="4" fill="currentColor" />
      <path d="m7 12.2 3.2 3.1L17.5 8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

const rows = [
  { name: "Billboard", icon: Icons.Billboard, exposure: "Fixed", cost: "High", mobility: "✕" },
  { name: "Pole Kiosk", icon: Icons.Kiosk, exposure: "Fixed", cost: "Medium", mobility: "✕" },
  { name: "Newspaper", icon: Icons.Newspaper, exposure: "One Time", cost: "High", mobility: "✕" },
  { name: "Digital Ads", icon: Icons.Digital, exposure: "Skip-able", cost: "High", mobility: "Limited" },
  { name: "ZETO", icon: null, exposure: "Continuous", cost: "Low", mobility: "check", featured: true },
];

export default function WhyScooterAdvertisingWins() {
  return (
    <section className="zeto-comparison" aria-labelledby="zeto-comparison-title">
      <style>{`
        .zeto-comparison {
          --green: #07502f;
          --green-2: #08752d;
          --lime: #67bd14;
          --ink: #111c18;
          --line: #d8ddd9;
          width: 100%;
          box-sizing: border-box;
          padding: clamp(26px, 4vw, 54px) clamp(18px, 3vw, 42px);
          background:
            radial-gradient(circle at 88% 8%, rgba(103, 189, 20, .08), transparent 25%),
            #fff;
          color: var(--ink);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .zeto-comparison-shell {
          max-width: 1024px;
          margin: 0 auto;
        }

        .zeto-comparison-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 18px;
        }

        .zeto-comparison-heading-wrap {
          min-width: 0;
        }

        .zeto-comparison-title {
          margin: 0;
          font-size: clamp(34px, 4.2vw, 57px);
          line-height: 1;
          letter-spacing: -.052em;
          font-weight: 800;
        }

        .zeto-comparison-title .accent {
          color: var(--green-2);
        }

        .zeto-comparison-rule {
          width: 43px;
          height: 4px;
          margin-top: 14px;
          border-radius: 99px;
          background: var(--green-2);
        }

        .zeto-comparison-brand {
          flex: 0 0 auto;
          min-width: 140px;
          min-height: 72px;
          box-sizing: border-box;
          padding: 10px 18px;
          border: 1px solid #81918a;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          color: #13261c;
          font-size: 24px;
          font-weight: 800;
          letter-spacing: -.05em;
        }

        .zeto-comparison-logo {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: white;
          background: linear-gradient(145deg, #268f38, #0b4b21);
          font-size: 22px;
          font-weight: 900;
          font-style: italic;
          transform: rotate(-7deg);
          box-shadow: inset 0 0 0 1px rgba(255,255,255,.15);
        }

        .zeto-table-wrap {
          border: 1px solid #d6ddd8;
          border-radius: 15px;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 13px 35px rgba(8, 60, 35, .07);
        }

        .zeto-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          table-layout: fixed;
        }

        .zeto-table th {
          height: 48px;
          padding: 0 18px;
          background: linear-gradient(180deg, #075431, #06472c);
          color: #fff;
          font-size: clamp(14px, 1.6vw, 18px);
          font-weight: 800;
          letter-spacing: .01em;
          text-align: center;
          border-right: 1px solid rgba(255,255,255,.45);
        }

        .zeto-table th:first-child {
          text-align: left;
          padding-left: 30px;
        }

        .zeto-table th:last-child {
          border-right: 0;
        }

        .zeto-table td {
          height: 53px;
          padding: 0 18px;
          font-size: clamp(14px, 1.5vw, 18px);
          text-align: center;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          background: #fff;
        }

        .zeto-table td:first-child {
          text-align: left;
          padding-left: 30px;
        }

        .zeto-table td:last-child {
          border-right: 0;
        }

        .zeto-table tbody tr:last-child td {
          border-bottom: 0;
        }

        .zeto-platform {
          display: inline-flex;
          align-items: center;
          gap: 15px;
          font-weight: 550;
        }

        .zeto-platform-icon {
          width: 34px;
          height: 34px;
          flex: 0 0 34px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: linear-gradient(145deg, #087348, #06442d);
          color: #fff;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,.18);
        }

        .zeto-table tr.featured td {
          background:
            linear-gradient(90deg, rgba(106, 193, 17, .13), rgba(106, 193, 17, .07)),
            #f6fbea;
          color: #387c22;
          font-weight: 800;
        }

        .zeto-table tr.featured .zeto-platform {
          color: #4b8e26;
          font-weight: 850;
        }

        .zeto-z-mark {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: #fff;
          background: linear-gradient(145deg, #73c927, #198039);
          font-size: 20px;
          font-weight: 900;
          font-style: italic;
          transform: rotate(-7deg);
        }

        .zeto-cross {
          color: #c91f24;
          font-size: 31px;
          line-height: 1;
          font-weight: 500;
        }

        .zeto-limited {
          color: #202723;
        }

        .zeto-check {
          display: inline-grid;
          place-items: center;
          color: #57b81b;
        }

        @media (max-width: 700px) {
          .zeto-comparison-header {
            flex-direction: column;
          }

          .zeto-comparison-brand {
            align-self: flex-start;
          }

          .zeto-table-wrap {
            overflow-x: auto;
          }

          .zeto-table {
            min-width: 680px;
          }
        }
      `}</style>

      <div className="zeto-comparison-shell">
        <header className="zeto-comparison-header">
          <div className="zeto-comparison-heading-wrap">
            <h2 id="zeto-comparison-title" className="zeto-comparison-title">
              Why <span className="accent">Scooter</span> Advertising Wins
            </h2>
            <div className="zeto-comparison-rule" />
          </div>

          
        </header>

        <div className="zeto-table-wrap">
          <table className="zeto-table">
            <thead>
              <tr>
                <th>Platform</th>
                <th>Daily Exposure</th>
                <th>Cost</th>
                <th>Mobility</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row) => {
                const PlatformIcon = row.icon;

                return (
                  <tr key={row.name} className={row.featured ? "featured" : ""}>
                    <td>
                      <span className="zeto-platform">
                        {row.featured ? (
                          <span ></span>
                        ) : (
                          <span className="zeto-platform-icon">
                            {PlatformIcon && <PlatformIcon size={21} />}
                          </span>
                        )}
                        <span>{row.name}</span>
                      </span>
                    </td>

                    <td>{row.exposure}</td>
                    <td>{row.cost}</td>

                    <td>
                      {row.mobility === "check" ? (
                        <span className="zeto-check">
                          <Icons.Check size={27} />
                        </span>
                      ) : row.mobility === "✕" ? (
                        <span className="zeto-cross" aria-label="No">×</span>
                      ) : (
                        <span className="zeto-limited">{row.mobility}</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}