import React from "react";
import { Share2 } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

const LEGAL_LINKS: FooterLink[] = [
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms of Service", href: "#terms" },
];

const SUPPORT_LINKS: FooterLink[] = [
  { label: "FAQ", href: "#faq" },
  { label: "Support", href: "#support" },
];

export default function Footer() {
  return (
    <footer className="bg-[#071B3F] px-6 pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 pb-14 sm:grid-cols-3">
          <div>
            <h3 className="text-lg font-extrabold text-white">ZETOWORLD</h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">
              Cutting Emission, Creating Jobs. Join the green revolution in
              last-mile delivery.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Legal
            </h4>
            <ul className="mt-4 space-y-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Support
            </h4>
            <ul className="mt-4 space-y-3">
              {SUPPORT_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © 2024 ZETOWORLD. Powered by ZETRAX TECH PVT. LTD.
          </p>
          <button
            aria-label="Share"
            className="text-slate-400 transition-colors hover:text-white"
          >
            <Share2 size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}