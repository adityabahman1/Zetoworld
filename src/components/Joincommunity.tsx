import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import img1 from "../assets/WhatsApp Image 2026-08-26 at 11.01.29 AM.jpeg";
import img2 from "../assets/WhatsApp Image 2026-08-26 at 11.01.30 AM.jpeg";
import img3 from "../assets/WhatsApp Image 2026-08-26 at 11.01.29 AM (1).jpeg";
import img4 from "../assets/WhatsApp Image 2026-08-26 at 11.01.29 AM (2).jpeg";

const images = [img1, img2, img3, img4];

export default function JoinCommunity() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl shadow-xl bg-[#0B1E3F]">
          {/* Full-bleed auto-advancing image slideshow */}
          <div className="relative h-[420px] w-full overflow-hidden">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="ZETO rider community"
                loading="lazy"
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                  i === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {/* Gradient overlay for text legibility */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0B1E3F]/95 via-[#0B1E3F]/70 to-[#0B1E3F]/20" />

            {/* Slide indicator dots */}
            <div className="absolute bottom-5 right-6 flex gap-2">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeIndex ? "w-6 bg-white" : "w-1.5 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="absolute inset-0 flex max-w-lg flex-col justify-center gap-5 px-10">
            <h2 className="text-4xl font-extrabold leading-tight text-white">
              Join the
              <br />
              Community
            </h2>
            <p className="text-sm leading-relaxed text-slate-200">
              Be part of a growing network of gig workers who are driving the
              change towards a sustainable future while building a secure
              livelihood.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="mt-2 flex w-fit items-center gap-2 rounded-full bg-[#0B6E3B] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#0A5E32]"
            >
              Join the Revolution
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}