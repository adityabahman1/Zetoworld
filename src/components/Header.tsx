import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Smartphone } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
  /**
   * "scroll" = section on the Home page, scrolled to by id.
   * "route"  = its own page, navigated to with react-router.
   */
  type: "scroll" | "route";
}

interface HeaderProps {
  /**
   * "dark" = header sits over a dark/photo hero, starts with white text.
   * "light" = header sits over a light/pale hero, starts with dark text.
   * Once scrolled, the header always becomes white with dark text.
   */
  variant?: "light" | "dark";
}

// Home/Pricing/Franchise/Contact are sections on the "/" page.
// Advertising is its own route, per App.tsx.
const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "home", type: "scroll" },
  { label: "Pricing", href: "pricing", type: "scroll" },
  { label: "Franchise", href: "franchise", type: "scroll" },
  { label: "Advertising", href: "/advertising", type: "route" },
  { label: "Contact", href: "contact", type: "scroll" },
];

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.zeto.pilot&hl=en_IN";

export default function Header({ variant = "dark" }: HeaderProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  const [active, setActive] = useState(
    location.pathname === "/advertising" ? "Advertising" : "Home"
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Keep the highlighted link in sync with the route itself — covers
  // landing directly on /advertising, using the back button, etc.
  useEffect(() => {
    if (location.pathname === "/advertising") {
      setActive("Advertising");
    } else if (!location.state?.scrollTo) {
      setActive("Home");
    }
  }, [location.pathname]);

  // If we navigated here from another page with a section to scroll to
  // (see handleNavClick below), do that scroll once this page has mounted.
  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)
      ?.scrollTo;

    if (isHome && scrollTo) {
      const timer = setTimeout(() => {
        document
          .getElementById(scrollTo)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isHome, location.state]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: NavLink
  ) => {
    setActive(link.label);
    setMobileOpen(false);

    if (link.type === "route") {
      // Let react-router's <Link> handle the actual navigation.
      return;
    }

    e.preventDefault();

    if (isHome) {
      document
        .getElementById(link.href)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Not on the Home page — go there, then scroll once it's mounted.
      navigate("/", { state: { scrollTo: link.href } });
    }
  };

  // White theme after scrolling OR when explicitly requested.
  const isLightTheme = scrolled || variant === "light";

  const renderLink = (link: NavLink, isActive: boolean, mobile = false) => {
    const desktopClass = isActive
      ? `border-b-2 pb-1 text-sm font-medium transition-colors duration-300 ${
          isLightTheme
            ? "border-[#1FA24A] text-[#1FA24A]"
            : "border-white text-white"
        }`
      : `text-sm font-medium transition-colors duration-300 ${
          isLightTheme
            ? "text-slate-600 hover:text-[#1FA24A]"
            : "text-white/85 hover:text-white"
        }`;

    const mobileClass = isActive
      ? `text-sm font-medium ${isLightTheme ? "text-[#1FA24A]" : "text-white"}`
      : `text-sm font-medium ${
          isLightTheme ? "text-slate-600" : "text-white/85"
        }`;

    const className = mobile ? mobileClass : desktopClass;

    if (link.type === "route") {
      return (
        <Link
          key={link.label}
          to={link.href}
          onClick={(e) => handleNavClick(e, link)}
          className={className}
        >
          {link.label}
        </Link>
      );
    }

    return (
      <a
        key={link.label}
        href={isHome ? `#${link.href}` : `/#${link.href}`}
        onClick={(e) => handleNavClick(e, link)}
        className={className}
      >
        {link.label}
      </a>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all rounded-b-3xl duration-300 ${
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1">
          <span
            className={`text-4xl font-bold tracking-tight transition-colors duration-300 ${
              isLightTheme
                ? "text-[#1d7239]"
                : "text-white drop-shadow-sm"
            }`}
          >
            zeto
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex xl:gap-8">
          {NAV_LINKS.map((link) => renderLink(link, active === link.label))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${
              isLightTheme
                ? "border-[#1FA24A] text-[#1FA24A] hover:bg-[#1FA24A]/10"
                : "border-white/70 text-white hover:bg-white/10"
            }`}
          >
            <Smartphone size={16} />
            Get the App
          </a>

          <button className="rounded-full bg-[#1FA24A] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#188A3E]">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`transition-colors duration-300 lg:hidden ${
            isLightTheme ? "text-slate-700" : "text-white"
          }`}
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className={`flex flex-col gap-4 border-t px-6 py-4 lg:hidden ${
            isLightTheme
              ? "border-slate-200 bg-white"
              : "border-white/20 bg-black/40 backdrop-blur-md"
          }`}
        >
          {NAV_LINKS.map((link) => renderLink(link, active === link.label, true))}

          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-2 flex w-full items-center justify-center gap-2 rounded-full border px-6 py-2.5 text-sm font-semibold ${
              isLightTheme
                ? "border-[#1FA24A] text-[#1FA24A]"
                : "border-white/70 text-white"
            }`}
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