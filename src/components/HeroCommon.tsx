import type { LucideIcon } from "lucide-react";

export interface HeroHighlight {
  icon: LucideIcon;
  label: string;
}

export interface HeroCommonProps {
  /** Small uppercase label above the title, e.g. "FOR BRANDS" — optional. */
  eyebrow?: string;
  /** Main heading, split into a plain part and a highlighted (green) part.
   *  e.g. title="Cutting Emission" highlight="Creating Jobs" */
  title: string;
  highlight?: string;
  description: string;
  /** The hero photo/illustration used from the `sm` breakpoint up (and as
   *  the fallback everywhere if `heroImageMobile` isn't given). */
  heroImage: string;
  heroImageAlt: string;
  /**
   * OPTIONAL but recommended for banners that were composed with a wide
   * desktop canvas in mind (empty/plain area on one side for the caption,
   * subject pushed toward the other side). Provide a separately-cropped
   * portrait version of the same banner here, and the browser will swap to
   * it below the `sm` breakpoint via a native <picture> media query — no
   * JS, no layout shift. This is the reliable fix: instead of asking one
   * wide image to survive being cropped into a tall box, you give mobile
   * an image that was already composed for a tall box.
   */
  heroImageMobile?: string;
  /** object-position for `heroImage` from `sm` up. Any valid CSS
   *  object-position value, e.g. "center", "80% center", "right top".
   *  Defaults to "center". */
  imagePosition?: string;
  /**
   * object-position used below `sm`, applied to whichever image is
   * actually showing (heroImageMobile if given, else heroImage). Use this
   * as the no-new-asset quick fix: if your subject sits toward the right
   * of a wide banner, set this to something like "80% center" or "right
   * center" so the mobile crop is biased toward the subject instead of
   * cropping symmetrically around the middle. Defaults to `imagePosition`.
   */
  mobileImagePosition?: string;
  /** Optional row of small feature icons under the description. */
  highlights?: HeroHighlight[];
  /** Optional floating stat/proof chip. */
  badge?: string;
  /** Optional CTA button. Omit either field to skip rendering the button. */
  ctaLabel?: string;
  ctaHref?: string;
}

export default function HeroCommon({
  eyebrow,
  title,
  highlight,
  description,
  heroImage,
  heroImageAlt,
  heroImageMobile,
  imagePosition = "center",
  mobileImagePosition,
  highlights = [],
  badge,
  ctaLabel,
  ctaHref,
}: HeroCommonProps) {
  const resolvedMobilePosition = mobileImagePosition ?? imagePosition;

  return (
    <section className="relative isolate flex h-[100dvh] min-h-[480px] max-h-[880px] w-full items-center overflow-hidden">
      <style>{`
        @keyframes hc-fade-up {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hc-fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .hc-anim-text  { animation: hc-fade-up 0.6s ease-out both; }
        .hc-anim-image { animation: hc-fade-in 0.8s ease-out both; }
        @media (prefers-reduced-motion: reduce) {
          .hc-anim-text, .hc-anim-image { animation: none; }
        }

        /* Responsive object-position without relying on Tailwind's
           arbitrary-value classes (which don't accept dynamic runtime
           strings). Below sm: --hc-pos-mobile wins. From sm up:
           --hc-pos-desktop takes over. */
        .hc-hero-img {
          object-position: var(--hc-pos-mobile, center);
        }
        @media (min-width: 640px) {
          .hc-hero-img {
            object-position: var(--hc-pos-desktop, center);
          }
        }
      `}</style>

      {/* Full-bleed background. <picture> lets us swap to a genuinely
          different, mobile-composed image below sm — true art direction,
          not just a CSS crop of the desktop banner. If heroImageMobile
          isn't provided, every breakpoint just uses heroImage, and only
          the object-position shifts. */}
      <div className="hc-anim-image absolute inset-0 h-full w-full">
        <picture className="block h-full w-full">
          {heroImageMobile && (
            <source media="(max-width: 639px)" srcSet={heroImageMobile} />
          )}
          <img
            src={heroImage}
            alt={heroImageAlt}
            className="hc-hero-img block h-full w-full object-cover"
            style={
              {
                "--hc-pos-mobile": resolvedMobilePosition,
                "--hc-pos-desktop": imagePosition,
              } as React.CSSProperties
            }
          />
        </picture>
        {/* Scrim so the white text stays readable regardless of what part
            of the photo ends up under it. */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06170D]/85 via-[#06170D]/50 to-[#06170D]/10 sm:to-transparent" />
      </div>

      {badge && (
        <div className="pointer-events-auto absolute bottom-6 right-6 z-10 rounded-2xl bg-white/95 px-4 py-3 shadow-xl backdrop-blur-sm sm:bottom-8 sm:right-8">
          <span className="text-sm font-bold text-[#0B3D22]">{badge}</span>
        </div>
      )}

      {/* Text — overlaid on top of the image, left-aligned, vertically
          centered in the section at every breakpoint. */}
      <div className="relative z-10 w-full px-5 sm:px-10 lg:px-16 xl:px-20">
        <div className="hc-anim-text max-w-xl">
          {eyebrow && (
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/25 backdrop-blur-sm sm:mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4ADE80]" />
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-white sm:text-[11px]">
                {eyebrow}
              </span>
            </div>
          )}

          <h1 className="text-3xl font-extrabold leading-[1.1] text-white sm:text-5xl sm:leading-[1.08] lg:text-6xl xl:text-7xl">
            {title}
            {highlight && (
              <>
                <br />
                <span className="text-[#4ADE80]">{highlight}</span>
              </>
            )}
          </h1>

          <div className="mt-4 h-1.5 w-12 rounded-full bg-[#4ADE80] sm:mt-6 sm:w-16" />

          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/85 sm:mt-6 sm:text-base lg:text-lg">
            {description}
          </p>

          {highlights.length > 0 && (
            <div className="mt-7 grid grid-cols-3 gap-3 sm:mt-9 sm:flex sm:flex-wrap sm:gap-8 lg:mt-10">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-start gap-2 sm:max-w-[110px] sm:gap-3"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25 backdrop-blur-sm sm:h-12 sm:w-12">
                    <item.icon size={16} className="text-white sm:h-5 sm:w-5" />
                  </div>
                  <span className="text-[11px] font-medium leading-tight text-white/90 sm:text-sm">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {ctaLabel && ctaHref && (
            <a
              href={ctaHref}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1FA24A] px-6 py-3 text-sm font-semibold text-white
                         transition hover:bg-[#188A3E] focus-visible:outline focus-visible:outline-2
                         focus-visible:outline-offset-2 focus-visible:outline-white sm:mt-10 sm:px-7 sm:py-3.5 lg:mt-11"
            >
              {ctaLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}