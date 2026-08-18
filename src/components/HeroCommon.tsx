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
  /** The hero photo/illustration — now the full section background. */
  heroImage: string;
  heroImageAlt: string;
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
  highlights = [],
  badge,
  ctaLabel,
  ctaHref,
}: HeroCommonProps) {
  return (
    <section className="relative isolate flex h-[600px] items-center overflow-hidden sm:h-[640px] lg:h-[85vh] lg:min-h-[620px]">
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
      `}</style>

      {/* Full-bleed background image — fills the entire hero, full width
          and full height, with the text hovering directly on top of it. */}
      <div className="hc-anim-image absolute inset-0">
        <img
          src={heroImage}
          alt={heroImageAlt}
          className="h-full w-full object-cover"
        />
        {/* Scrim — dark brand-green wash, strongest on the left where the
            text sits, fading out toward the right so the image still
            reads clearly on its own side. */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06170D]/85 via-[#06170D]/45 to-transparent" />
      </div>

      {badge && (
        <div className="pointer-events-auto absolute bottom-6 right-6 rounded-2xl bg-white/95 px-4 py-3 shadow-xl backdrop-blur-sm sm:bottom-8 sm:right-8">
          <span className="text-sm font-bold text-[#0B3D22]">{badge}</span>
        </div>
      )}

      {/* Text — overlaid on top of the image, left-aligned, no separate
          panel or background of its own beyond the scrim above. */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="hc-anim-text max-w-xl">
          {eyebrow && (
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/25 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4ADE80]" />
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                {eyebrow}
              </span>
            </div>
          )}

          <h1 className="text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            {title}
            {highlight && (
              <>
                <br />
                <span className="text-[#4ADE80]">{highlight}</span>
              </>
            )}
          </h1>

          <div className="mt-5 h-1.5 w-16 rounded-full bg-[#4ADE80] sm:mt-6" />

          <p className="mt-6 max-w-md text-base leading-relaxed text-white/85 sm:mt-7 sm:text-lg">
            {description}
          </p>

          {highlights.length > 0 && (
            <div className="mt-9 grid grid-cols-3 gap-3 sm:mt-10 sm:flex sm:flex-wrap sm:gap-8">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-start gap-2 sm:max-w-[110px] sm:gap-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25 backdrop-blur-sm sm:h-12 sm:w-12">
                    <item.icon size={18} className="text-white sm:h-5 sm:w-5" />
                  </div>
                  <span className="text-xs font-medium leading-tight text-white/90 sm:text-sm">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {ctaLabel && ctaHref && (
            <a
              href={ctaHref}
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#1FA24A] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#188A3E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:mt-11"
            >
              {ctaLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}