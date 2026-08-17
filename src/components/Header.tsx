import { useState, useEffect } from "react";
import { Menu, X, Smartphone } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Pricing", href: "#pricing" },
  { label: "Franchise", href: "#franchise" },
  { label: "Advertising", href: "#advertising" },
  { label: "Contact", href: "#contact" },
];

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.zeto.pilot&hl=en_IN";

export default function Header() {
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
<header
  className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
    scrolled
      ? "bg-white shadow-md py-0"
      : "bg-transparent py-0"
  }`}
>      
<div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10">        {/* Logo */}
        <div className="ml-8 flex items-center gap-1">
          <span className="text-4xl font-bold tracking-tight text-[#1d7239]">
            zeto
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex xl:gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.label;

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActive(link.label)}
                className={
                  isActive
                    ? "whitespace-nowrap border-b-2 border-[#1FA24A] pb-1 text-sm font-medium text-[#1FA24A]"
                    : "whitespace-nowrap text-sm font-medium text-slate-600 transition-colors hover:text-[#1FA24A]"
                }
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-[#1FA24A] px-5 py-2.5 text-sm font-semibold text-[#1FA24A] transition-colors hover:bg-[#1FA24A]/10"
          >
            <Smartphone size={16} />
            Get the App
          </a>

          <button className="mr-20 rounded-full bg-[#1FA24A] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#188A3E]">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-slate-700 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="flex flex-col gap-4 border-t border-slate-200 px-6 py-4 lg:hidden">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.label;

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  setActive(link.label);
                  setMobileOpen(false);
                }}
                className={
                  isActive
                    ? "text-sm font-medium text-[#1FA24A]"
                    : "text-sm font-medium text-slate-600"
                }
              >
                {link.label}
              </a>
            );
          })}

          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-full border border-[#1FA24A] px-6 py-2.5 text-sm font-semibold text-[#1FA24A]"
          >
            <Smartphone size={16} />
            Get the App
          </a>

          <button className="w-full rounded-full bg-[#1FA24A] px-6 py-2.5 text-sm font-semibold text-white">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}