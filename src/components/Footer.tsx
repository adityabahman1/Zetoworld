import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

interface RouteLink {
  label: string;
  to: string;
}

interface AnchorLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: "Instagram" | "LinkedIn" | "X" | "Facebook";
  href: string;
  label: string;
}

/**
 * Company links now point at real routes (matching App.tsx / Header.tsx)
 * instead of same-page hash anchors. Franchise is split into FOCO/FOFO
 * since the footer has no room for Header's hover dropdown.
 */
const COMPANY_LINKS: RouteLink[] = [
  { label: "Home", to: "/" },
  { label: "FOCO Franchise", to: "/foco" },
  { label: "FOFO Franchise", to: "/fofo" },
  { label: "Advertising", to: "/advertising" },
];

/**
 * Both legal pages now have real routes — Privacy Policy and Terms of
 * Service each render their own component.
 */
const LEGAL_LINKS: RouteLink[] = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms of Service", to: "/terms-conditons" },
];

const SUPPORT_LINKS: (RouteLink | AnchorLink)[] = [
  { label: "FAQ", href: "#faq" },
  { label: "Support", href: "#support" },
  { label: "Contact Us", to: "/contact" },
];

function isRouteLink(link: RouteLink | AnchorLink): link is RouteLink {
  return (link as RouteLink).to !== undefined;
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://instagram.com/zetoworld",
    label: "Instagram",
    icon: "Instagram",
  },
  {
    href: "https://linkedin.com/company/zetoworld",
    label: "LinkedIn",
    icon: "LinkedIn",
  },
  {
    href: "https://twitter.com/zetoworld",
    label: "Twitter / X",
    icon: "X",
  },
  {
    href: "https://facebook.com/zetoworld",
    label: "Facebook",
    icon: "Facebook",
  },
];

function SocialIcon({ type }: { type: SocialLink["icon"] }) {
  switch (type) {
    case "Instagram":
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle
            cx="17.5"
            cy="6.5"
            r="1"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      );

    case "LinkedIn":
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.1 2.1 0 1 0 4.75 7.2 2.1 2.1 0 0 0 4.75 3ZM21 13.85c0-3.75-2-5.5-4.65-5.5-2.15 0-3.1 1.18-3.65 2.02V8.5H9.2V21h3.5v-6.18c0-1.63.3-3.2 2.33-3.2 2 0 2.03 1.85 2.03 3.3V21H21v-7.15Z" />
        </svg>
      );

    case "X":
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M18.25 3H21l-6.01 6.87L22 21h-5.54l-4.34-5.67L7.17 21H4.41l6.43-7.35L4 3h5.68l3.92 5.17L18.25 3Zm-.97 15.85h1.53L8.8 5.06H7.16l10.12 13.79Z" />
        </svg>
      );

    case "Facebook":
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M14 8h3V4.5c-.52-.07-2.02-.2-3.75-.2-3.72 0-6.27 2.27-6.27 6.45v3.6H3v4h3.98V21h4.88v-2.65h4.07l.65-4h-4.72v-3.25c0-1.16.31-1.95 2.14-1.95Z" />
        </svg>
      );

    default:
      return null;
  }
}

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#fcfdfa] via-[#f2f7ec] to-[#D3E8BC] 


">
      {/* Top border */}
      <div className="border-t border-slate-100" />

      <div className="mx-auto max-w-6xl px-6 pt-16 sm:px-10">
        <div className="grid gap-12 pb-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-1">
              <span className="text-3xl font-bold tracking-tight text-[#1d7239]">
                zeto
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-800">
              Cutting Emission, Creating Jobs. Join the green revolution in
              last-mile delivery.
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-3">
              <a
                href="tel:8449595495"
                className="flex items-center gap-2.5 text-sm text-slate-800 transition-colors hover:text-[#1FA24A]"
              >
                <Phone size={14} className="text-[#1FA24A]" />
                +91-8449595495
              </a>

              <a
                href="mailto:info@zetoworld.com"
                className="flex items-center gap-2.5 text-sm text-slate-800 transition-colors hover:text-[#1FA24A]"
              >
                <Mail size={14} className="text-[#1FA24A]" />
                info@zetoworld.com
              </a>

              <div className="flex items-start gap-2.5 text-sm text-slate-800">
                <MapPin
                  size={14}
                  className="mt-0.5 flex-shrink-0 text-[#1FA24A]"
                />
                Sector 70, Mohali - 160071
              </div>
            </div>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-800 transition-all duration-200 hover:bg-[#1FA24A] hover:text-white"
                >
                  <SocialIcon type={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1FA24A]">
              Company
            </h4>

            <ul className="mt-4 space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-800 transition-colors hover:text-[#1FA24A]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1FA24A]">
              Legal
            </h4>

            <ul className="mt-4 space-y-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-800 transition-colors hover:text-[#1FA24A]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1FA24A]">
              Support
            </h4>

            <ul className="mt-4 space-y-3">
              {SUPPORT_LINKS.map((link) => (
                <li key={link.label}>
                  {isRouteLink(link) ? (
                    <Link
                      to={link.to}
                      className="text-sm text-slate-800 transition-colors hover:text-[#1FA24A]"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-slate-800 transition-colors hover:text-[#1FA24A]"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-100 py-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} ZETOWORLD. Powered by ZETRAX TECH PVT.
            LTD.
          </p>

          <div className="flex items-center gap-5">
            <Link
              to="/privacy-policy"
              className="text-xs text-slate-500 transition-colors hover:text-[#1FA24A]"
            >
              Privacy
            </Link>

            <Link
              to="/terms-conditons"
              className="text-xs text-slate-500 transition-colors hover:text-[#1FA24A]"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}