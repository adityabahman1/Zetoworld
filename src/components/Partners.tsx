interface Partner {
  name: string;
  logo: string;
}

import img1 from "../assets/Icon/[CITYPNG.COM]Zomato Logo Transparent Background - 3000x3000.png"
import img2 from "../assets/Icon/Swiggy-Logo-SVG_001.svg"
import img3 from "../assets/Icon/Porter-logo.png"
import img4 from "../assets/Icon/bigbasket-seeklogo.png"
import img5 from "../assets/Icon/blinkit-seeklogo.png"
import img6 from "../assets/Icon/zepto.svg"

const PARTNERS: Partner[] = [
  { name: "Zomato", logo: img1 },
  { name: "Swiggy", logo: img2 },
  { name: "Zepto", logo: img3 },
  { name: "Blinkit", logo: img4 },
  { name: "Dunzo", logo: img5 },
  { name: "Dunzo", logo: img6 },
];

export default function Partners() {
  const partnerRow = [...PARTNERS, ...PARTNERS];

  return (
    <section className="overflow-hidden bg-gradient-to-b from-white to-[#F7FAFF] px-6 py-16">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-xl font-semibold uppercase tracking-[0.2em] text-slate-400 mb-16">
          Trusted by leading delivery platforms
        </p>

        <div className="relative mt-8">
          <div className="group flex overflow-hidden">
            <div className="flex shrink-0 animate-[scroll_25s_linear_infinite] items-center gap-14 pr-14 group-hover:[animation-play-state:paused]">
              {partnerRow.map((partner, i) => (
                <img
                  key={`${partner.name}-${i}`}
                  src={partner.logo}
                  alt={partner.name}
                  className="h-15 w-auto shrink-0 object-contain sm:h-[53px]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}