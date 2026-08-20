// src/components/Header.tsx

import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  Smartphone,
  X,
} from "lucide-react";

interface DropdownChild {
  label: string;
  to: string;
}

interface NavLink {
  label: string;
  href: string;
  type: "scroll" | "route" | "dropdown";
  children?: DropdownChild[];
}

interface HeaderProps {
  /**
   * light:
   *   Initial = transparent + dark text
   *   Scrolled = white + dark text
   *
   * dark:
   *   Initial = transparent + white text
   *   Scrolled = white + dark text
   */
  variant?: "light" | "dark";
}

const NAV_LINKS: NavLink[] = [
  {
    label: "Home",
    href: "home",
    type: "scroll",
  },
  {
    label: "Battery",
    href: "/battery",
    type: "route",
  },
  {
    label: "Franchise",
    href: "franchise",
    type: "dropdown",
    children: [
      {
        label: "FOCO",
        to: "/foco",
      },
      {
        label: "FOFO",
        to: "/fofo",
      },
    ],
  },
  {
    label: "Advertising",
    href: "/advertising",
    type: "route",
  },
  {
    label: "Contact",
    href: "/contact",
    type: "route",
  },
];

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.zeto.pilot&hl=en_IN";

export default function Header({
  variant = "light",
}: HeaderProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  const [active, setActive] = useState("Home");

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  const [openDropdown, setOpenDropdown] =
    useState<string | null>(null);

  /**
   * Used to delay dropdown closing.
   *
   * This prevents the dropdown from disappearing
   * while the cursor is moving from the
   * "Franchise" button to the dropdown.
   */
  const dropdownCloseTimer =
    useRef<ReturnType<typeof setTimeout> | null>(
      null
    );

  /*
  |--------------------------------------------------------------------------
  | ACTIVE ROUTE
  |--------------------------------------------------------------------------
  */

  const getActiveLink = (): string => {
    if (location.pathname === "/battery") {
      return "Battery";
    }

    if (location.pathname === "/advertising") {
      return "Advertising";
    }

    if (location.pathname === "/contact") {
      return "Contact";
    }

    if (
      location.pathname === "/foco" ||
      location.pathname === "/fofo"
    ) {
      return "Franchise";
    }

    return "Home";
  };

  /*
  |--------------------------------------------------------------------------
  | UPDATE ACTIVE NAVIGATION
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    setActive(getActiveLink());

    setOpenDropdown(null);

    setMobileOpen(false);
  }, [location.pathname]);

  /*
  |--------------------------------------------------------------------------
  | SCROLL DETECTION
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /*
  |--------------------------------------------------------------------------
  | HEADER THEME
  |--------------------------------------------------------------------------
  |
  | IMPORTANT:
  |
  | Light theme:
  |
  |   Initial:
  |     transparent
  |     dark green logo
  |     dark navigation
  |
  |   Scrolled:
  |     white
  |     dark navigation
  |
  | Dark theme:
  |
  |   Initial:
  |     transparent
  |     white navigation
  |
  |   Scrolled:
  |     white
  |     dark navigation
  |
  */

  const isLightTheme =
    variant === "light";

  const headerHasWhiteBackground =
    scrolled;

  const useDarkText =
    isLightTheme || scrolled;

  /*
  |--------------------------------------------------------------------------
  | SCROLL TO SECTION FROM OTHER PAGES
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const scrollTo = (
      location.state as {
        scrollTo?: string;
      } | null
    )?.scrollTo;

    if (!isHome || !scrollTo) {
      return;
    }

    const timer = window.setTimeout(() => {
      const element =
        document.getElementById(scrollTo);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      navigate("/", {
        replace: true,
        state: {},
      });
    }, 150);

    return () => {
      window.clearTimeout(timer);
    };
  }, [
    isHome,
    location.state,
    navigate,
  ]);

  /*
  |--------------------------------------------------------------------------
  | DROPDOWN TIMER
  |--------------------------------------------------------------------------
  */

  const clearDropdownTimer = () => {
    if (dropdownCloseTimer.current) {
      clearTimeout(
        dropdownCloseTimer.current
      );

      dropdownCloseTimer.current = null;
    }
  };

  const openDropdownMenu = (
    label: string
  ) => {
    clearDropdownTimer();

    setOpenDropdown(label);
  };

  const closeDropdownMenu = () => {
    clearDropdownTimer();

    dropdownCloseTimer.current =
      setTimeout(() => {
        setOpenDropdown(null);
      }, 300);
  };

  useEffect(() => {
    return () => {
      clearDropdownTimer();
    };
  }, []);

  /*
  |--------------------------------------------------------------------------
  | NAVIGATION
  |--------------------------------------------------------------------------
  */

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: NavLink
  ) => {
    setActive(link.label);

    setMobileOpen(false);

    setOpenDropdown(null);

    /*
     * Normal route.
     */
    if (link.type === "route") {
      return;
    }

    /*
     * Scroll link.
     */
    e.preventDefault();

    if (isHome) {
      const element =
        document.getElementById(
          link.href
        );

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    /*
     * If user is on another page,
     * navigate home and then scroll.
     */
    navigate("/", {
      state: {
        scrollTo: link.href,
      },
    });
  };

  /*
  |--------------------------------------------------------------------------
  | NAVIGATION LINK CLASS
  |--------------------------------------------------------------------------
  */

  const getNavClass = (
    isActive: boolean
  ) => {
    if (isActive) {
      return `
        border-b-2
        pb-1
        text-sm
        font-medium
        transition-colors
        duration-300
        ${
          useDarkText
            ? `
                border-[#1FA24A]
                text-[#1FA24A]
              `
            : `
                border-white
                text-white
              `
        }
      `;
    }

    return `
      text-sm
      font-medium
      transition-colors
      duration-300
      ${
        useDarkText
          ? `
              text-slate-700
              hover:text-[#1FA24A]
            `
          : `
              text-white/90
              hover:text-white
            `
      }
    `;
  };

  /*
  |--------------------------------------------------------------------------
  | NORMAL NAVIGATION LINK
  |--------------------------------------------------------------------------
  */

  const renderLink = (
    link: NavLink,
    isActive: boolean,
    mobile = false
  ) => {
    const className = getNavClass(
      isActive
    );

    if (link.type === "route") {
      return (
        <Link
          key={link.label}
          to={link.href}
          onClick={(e) =>
            handleNavClick(e, link)
          }
          className={
            mobile
              ? `
                  block
                  py-1
                  ${className}
                `
              : className
          }
        >
          {link.label}
        </Link>
      );
    }

    return (
      <a
        key={link.label}
        href={
          isHome
            ? `#${link.href}`
            : `/#${link.href}`
        }
        onClick={(e) =>
          handleNavClick(e, link)
        }
        className={
          mobile
            ? `
                block
                py-1
                ${className}
              `
            : className
        }
      >
        {link.label}
      </a>
    );
  };

  /*
  |--------------------------------------------------------------------------
  | DESKTOP FRANCHISE DROPDOWN
  |--------------------------------------------------------------------------
  */

  const renderDesktopDropdown = (
    link: NavLink
  ) => {
    const isActive =
      active === link.label;

    const isOpen =
      openDropdown === link.label;

    const triggerClass = isActive
      ? `
          flex
          items-center
          gap-1
          border-b-2
          pb-1
          text-sm
          font-medium
          transition-colors
          duration-300
          ${
            useDarkText
              ? `
                  border-[#1FA24A]
                  text-[#1FA24A]
                `
              : `
                  border-white
                  text-white
                `
          }
        `
      : `
          flex
          items-center
          gap-1
          text-sm
          font-medium
          transition-colors
          duration-300
          ${
            useDarkText
              ? `
                  text-slate-700
                  hover:text-[#1FA24A]
                `
              : `
                  text-white/90
                  hover:text-white
                `
          }
        `;

    return (
      <div
        key={link.label}
        className="relative"
        onMouseEnter={() =>
          openDropdownMenu(
            link.label
          )
        }
        onMouseLeave={
          closeDropdownMenu
        }
      >
        {/* Trigger */}

        <button
          type="button"
          className={triggerClass}
          aria-haspopup="menu"
          aria-expanded={isOpen}
          onClick={() => {
            if (isOpen) {
              closeDropdownMenu();
            } else {
              openDropdownMenu(
                link.label
              );
            }
          }}
        >
          <span>{link.label}</span>

          <ChevronDown
            size={15}
            strokeWidth={1.8}
            className={`
              transition-transform
              duration-200
              ${
                isOpen
                  ? "rotate-180"
                  : ""
              }
            `}
          />
        </button>

        {isOpen && (
          <>
            {/*
             * IMPORTANT:
             *
             * This invisible area fills the gap between
             * the button and dropdown.
             *
             * Therefore the dropdown won't close while
             * the cursor is travelling downward.
             */}

            <div
              className="
                absolute
                left-[-32px]
                right-[-32px]
                top-full
                h-7
              "
              aria-hidden="true"
            />

            {/* Dropdown */}

            <div
              role="menu"
              className="
                absolute
                left-1/2
                top-full
                z-[10000]
                mt-4
                w-[360px]
                -translate-x-1/2
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-4
                shadow-[0_20px_60px_rgba(0,0,0,0.14)]
              "
              onMouseEnter={() =>
                openDropdownMenu(
                  link.label
                )
              }
              onMouseLeave={
                closeDropdownMenu
              }
            >
              {/* Dropdown header */}

              <div className="mb-4">
                <div className="flex items-center gap-2">
                  <span
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-[#1FA24A]
                    "
                  />

                  <p
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-[#1FA24A]
                    "
                  >
                    Franchise Models
                  </p>
                </div>

                <p
                  className="
                    mt-2
                    max-w-[290px]
                    text-xs
                    leading-relaxed
                    text-slate-500
                  "
                >
                  Choose the franchise model
                  that best fits your business.
                </p>
              </div>

              {/* Options */}

              <div className="grid grid-cols-2 gap-3">
                {link.children?.map(
                  (child) => (
                    <Link
                      key={child.label}
                      to={child.to}
                      role="menuitem"
                      onMouseEnter={() =>
                        openDropdownMenu(
                          link.label
                        )
                      }
                      onClick={() => {
                        setActive(
                          link.label
                        );

                        setOpenDropdown(
                          null
                        );

                        setMobileOpen(
                          false
                        );
                      }}
                      className="
                        group
                        flex
                        min-h-[145px]
                        flex-col
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        p-3
                        transition-all
                        duration-200
                        hover:-translate-y-1
                        hover:border-[#1FA24A]
                        hover:bg-[#1FA24A]/5
                        hover:shadow-lg
                      "
                    >
                      {/* Model icon */}

                      <div
                        className="
                          flex
                          h-16
                          w-full
                          items-center
                          justify-center
                          rounded-lg
                          bg-[#1FA24A]/10
                          text-base
                          font-bold
                          text-[#1FA24A]
                          transition-colors
                          duration-200
                          group-hover:bg-[#1FA24A]/15
                        "
                      >
                        {child.label}
                      </div>

                      {/* Model information */}

                      <div className="mt-3">
                        <p
                          className="
                            text-sm
                            font-bold
                            text-slate-800
                            transition-colors
                            group-hover:text-[#1FA24A]
                          "
                        >
                          {child.label}
                        </p>

                        <p
                          className="
                            mt-1
                            text-[10px]
                            leading-[1.4]
                            text-slate-500
                          "
                        >
                          {child.label ===
                          "FOCO"
                            ? "Franchise Owned, Company Operated"
                            : "Franchise Owned, Franchise Operated"}
                        </p>
                      </div>
                    </Link>
                  )
                )}
              </div>
            </div>
          </>
        )}
      </div>
    );
  };

  /*
  |--------------------------------------------------------------------------
  | MOBILE FRANCHISE DROPDOWN
  |--------------------------------------------------------------------------
  */

  const renderMobileDropdown = (
    link: NavLink
  ) => {
    const isActive =
      active === link.label;

    const isOpen =
      openDropdown === link.label;

    return (
      <div
        key={link.label}
        className="flex flex-col"
      >
        <button
          type="button"
          onClick={() => {
            if (isOpen) {
              setOpenDropdown(null);
            } else {
              setOpenDropdown(
                link.label
              );
            }
          }}
          className={`
            flex
            w-full
            items-center
            justify-between
            py-1
            text-left
            text-sm
            font-medium
            ${
              isActive
                ? "text-[#1FA24A]"
                : "text-slate-700 hover:text-[#1FA24A]"
            }
          `}
          aria-expanded={isOpen}
        >
          <span>{link.label}</span>

          <ChevronDown
            size={16}
            className={`
              transition-transform
              duration-200
              ${
                isOpen
                  ? "rotate-180"
                  : ""
              }
            `}
          />
        </button>

        {isOpen && (
          <div
            className="
              mt-3
              grid
              grid-cols-2
              gap-3
            "
          >
            {link.children?.map(
              (child) => (
                <Link
                  key={child.label}
                  to={child.to}
                  onClick={() => {
                    setActive(
                      link.label
                    );

                    setOpenDropdown(
                      null
                    );

                    setMobileOpen(
                      false
                    );
                  }}
                  className="
                    group
                    flex
                    flex-col
                    items-center
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    p-3
                    text-center
                    shadow-sm
                    transition-all
                    duration-200
                    hover:border-[#1FA24A]
                    hover:shadow-md
                  "
                >
                  <div
                    className="
                      flex
                      h-14
                      w-full
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#1FA24A]/10
                      text-sm
                      font-bold
                      text-[#1FA24A]
                    "
                  >
                    {child.label}
                  </div>

                  <span
                    className="
                      mt-2
                      text-[11px]
                      font-semibold
                      leading-tight
                      text-slate-700
                      group-hover:text-[#1FA24A]
                    "
                  >
                    {child.label ===
                    "FOCO"
                      ? "Company Operated"
                      : "Franchise Operated"}
                  </span>
                </Link>
              )
            )}
          </div>
        )}
      </div>
    );
  };

  /*
  |--------------------------------------------------------------------------
  | HEADER
  |--------------------------------------------------------------------------
  */

  return (
    <header
      className={`
        fixed
        left-0
        top-0
        z-[9999]
        w-full
        border-b
        transition-all
        duration-300
        ease-in-out
        ${
          headerHasWhiteBackground
            ? `
                border-slate-200/80
                bg-white/95
                shadow-sm
                backdrop-blur-xl
              `
            : `
                border-transparent
                bg-transparent
              `
        }
      `}
    >
      <div
        className="
          mx-auto
          flex
          h-20
          max-w-7xl
          items-center
          justify-between
          px-6
          sm:px-10
        "
      >
        {/* =========================================================
            LOGO
            ========================================================= */}

        <Link
          to="/"
          onClick={() => {
            setActive("Home");
            setMobileOpen(false);
            setOpenDropdown(null);
          }}
          className="
            flex
            items-center
          "
          aria-label="Zeto Home"
        >
          <span
            className={`
              text-4xl
              font-bold
              tracking-tight
              transition-colors
              duration-300
              ${
                useDarkText
                  ? "text-[#1d7239]"
                  : "text-white drop-shadow-md"
              }
            `}
          >
            zeto
          </span>
        </Link>

        {/* =========================================================
            DESKTOP NAVIGATION
            ========================================================= */}

        <nav
          className="
            hidden
            items-center
            gap-7
            lg:flex
            xl:gap-8
          "
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) =>
            link.type === "dropdown"
              ? renderDesktopDropdown(
                  link
                )
              : renderLink(
                  link,
                  active ===
                    link.label
                )
          )}
        </nav>

        {/* =========================================================
            DESKTOP CTA
            ========================================================= */}

        <div
          className="
            hidden
            items-center
            gap-3
            lg:flex
          "
        >
          {/* Get App */}

          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex
              items-center
              gap-2
              rounded-full
              border
              px-5
              py-2.5
              text-sm
              font-semibold
              transition-all
              duration-300
              ${
                useDarkText
                  ? `
                      border-[#1FA24A]
                      text-[#1FA24A]
                      hover:bg-[#1FA24A]/10
                    `
                  : `
                      border-white/80
                      text-white
                      hover:bg-white/10
                    `
              }
            `}
          >
            <Smartphone size={16} />

            Get the App
          </a>

          {/* Get Started */}

          <Link
            to="/contact"
            onClick={() => {
              setActive("Contact");
              setMobileOpen(false);
              setOpenDropdown(null);
            }}
            className="
              rounded-full
              bg-[#1FA24A]
              px-6
              py-2.5
              text-sm
              font-semibold
              text-white
              shadow-sm
              transition-all
              duration-300
              hover:bg-[#188A3E]
              hover:shadow-lg
              hover:shadow-[#1FA24A]/20
            "
          >
            Get Started
          </Link>
        </div>

        {/* =========================================================
            MOBILE MENU BUTTON
            ========================================================= */}

        <button
          type="button"
          className={`
            rounded-lg
            p-2
            transition-colors
            duration-300
            lg:hidden
            ${
              useDarkText
                ? `
                    text-slate-700
                    hover:bg-slate-100
                  `
                : `
                    text-white
                    hover:bg-white/10
                  `
            }
          `}
          onClick={() =>
            setMobileOpen(
              (previous) =>
                !previous
            )
          }
          aria-label={
            mobileOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* ===========================================================
          MOBILE MENU
          =========================================================== */}

      {mobileOpen && (
        <div
          className="
            border-t
            border-slate-200
            bg-white
            px-6
            py-5
            shadow-xl
            lg:hidden
          "
        >
          <nav
            className="
              flex
              flex-col
              gap-5
            "
            aria-label="Mobile Navigation"
          >
            {NAV_LINKS.map((link) =>
              link.type === "dropdown"
                ? renderMobileDropdown(
                    link
                  )
                : renderLink(
                    link,
                    active ===
                      link.label,
                    true
                  )
            )}
          </nav>

          {/* Mobile Get App */}

          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-6
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-full
              border
              border-[#1FA24A]
              px-6
              py-3
              text-sm
              font-semibold
              text-[#1FA24A]
              transition-all
              hover:bg-[#1FA24A]/10
            "
          >
            <Smartphone size={16} />

            Get the App
          </a>

          {/* Mobile Get Started */}

          <Link
            to="/contact"
            onClick={() => {
              setActive("Contact");
              setMobileOpen(false);
              setOpenDropdown(null);
            }}
            className="
              mt-3
              flex
              w-full
              items-center
              justify-center
              rounded-full
              bg-[#1FA24A]
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              transition-all
              hover:bg-[#188A3E]
            "
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}