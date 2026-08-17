import React, { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact Us", href: "#contact" },
];

export default function Header() {
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-gradient-to-r from-[#fcfdfa] via-[#f2f7ec] to-[#D3E8BC]  ">
      {/* Same max-width + horizontal padding as Hero, so the logo lines up
          with the heading below it and the CTA lines up with the image edge. */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10">
        {/* Logo — matches the "zeto" wordmark used in the hero */}
        <div className="flex items-center gap-1 ml-8">
          <span className="text-4xl font-bold tracking-tight text-[#1d7239]">
            zeto
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={`text-sm font-medium transition-colors ${
                active === link.label
                  ? "border-b-2 border-[#1FA24A] pb-1 text-[#1FA24A]"
                  : "text-slate-600 hover:text-[#1FA24A]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="rounded-full bg-[#1FA24A] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors mr-20 hover:bg-[#188A3E]">
            Get Started
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-slate-700 md:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="flex flex-col gap-4 border-t border-slate-200 px-6 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                setActive(link.label);
                setMobileOpen(false);
              }}
              className={`text-sm font-medium ${
                active === link.label ? "text-[#1FA24A]" : "text-slate-600"
              }`}
            >
              {link.label}
            </a>
          ))}
          <button className="mt-2 w-full rounded-full bg-[#1FA24A] px-6 py-2.5 text-sm font-semibold  text-white">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}