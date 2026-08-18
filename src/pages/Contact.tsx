// Advertising.tsx

import HeroCommon from "../components/HeroCommon";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GetInTouch from "../components/Getintouch";
import adImg from "../assets/ChatGPT Image Aug 17, 2026, 12_57_25 PM.png";

export function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header variant="dark" />

      {/* =========================
          HERO SECTION
      ========================== */}
      <HeroCommon
        title="Grow with Zeto"
        highlight="Let's Connect"
        description="Ride with us, build with us, or put your brand on the move. Explore the different ways you can partner with Zeto."
        heroImage={adImg}
        heroImageAlt="Zeto partnership and advertising"
      />

      {/* =========================
          PARTNERSHIP OPPORTUNITIES
      ========================== */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Section Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              Partner With Zeto
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              There’s more than one way
              <span className="text-green-700"> to grow with Zeto.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Whether you want to ride with us, build a Zeto business, or put
              your brand on the move, we have opportunities designed for you.
            </p>
          </div>

          {/* =========================
              OPPORTUNITY CARDS
          ========================== */}
          <div className="mt-14 grid gap-6 lg:grid-cols-3">

            {/* =========================
                CARD 1 — RIDER
            ========================== */}
            <div className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-2xl">
                🛵
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-wider text-green-700">
                Opportunity 01
              </p>

              <h3 className="mt-2 text-2xl font-bold text-gray-900">
                Become a Zeto Rider
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Join the Zeto rider network and turn your everyday mobility
                into an earning opportunity. Get on the road, deliver with
                Zeto, and become part of a growing delivery ecosystem.
              </p>

              <div className="mt-7 space-y-3">

                <div className="flex items-start gap-3">
                  <span className="mt-1 text-green-700">✓</span>

                  <span className="text-sm text-gray-600">
                    Flexible earning opportunities
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-1 text-green-700">✓</span>

                  <span className="text-sm text-gray-600">
                    Join the Zeto rider network
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-1 text-green-700">✓</span>

                  <span className="text-sm text-gray-600">
                    Work across your preferred service areas
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-1 text-green-700">✓</span>

                  <span className="text-sm text-gray-600">
                    Become part of the Zeto ecosystem
                  </span>
                </div>

              </div>
            </div>

            {/* =========================
                CARD 2 — FRANCHISE
            ========================== */}
            <div className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-2xl">
                🏢
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-wider text-green-700">
                Opportunity 02
              </p>

              <h3 className="mt-2 text-2xl font-bold text-gray-900">
                Start a Zeto Franchise
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Bring Zeto to your city or expand your existing business with
                our franchise opportunities. Choose the operating model that
                best fits your business goals.
              </p>

              <div className="mt-7 space-y-4">

                {/* FOCO */}
                <div className="rounded-2xl bg-gray-50 p-5">

                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="font-bold text-gray-900">
                      FOCO
                    </h4>

                    <span className="rounded-full bg-green-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-green-700">
                      Franchise Owned
                    </span>
                  </div>

                  <p className="mt-1 text-xs font-medium text-gray-500">
                    Franchise Owned, Company Operated
                  </p>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Invest in a Zeto franchise while Zeto manages the
                    day-to-day operations of the business.
                  </p>

                </div>

                {/* FOFO */}
                <div className="rounded-2xl bg-gray-50 p-5">

                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="font-bold text-gray-900">
                      FOFO
                    </h4>

                    <span className="rounded-full bg-green-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-green-700">
                      Franchise Operated
                    </span>
                  </div>

                  <p className="mt-1 text-xs font-medium text-gray-500">
                    Franchise Owned, Franchise Operated
                  </p>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Own and operate your Zeto franchise with the support,
                    systems, and brand ecosystem provided by Zeto.
                  </p>

                </div>

              </div>
            </div>

            {/* =========================
                CARD 3 — ADVERTISING
            ========================== */}
            <div className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-2xl">
                📢
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-wider text-green-700">
                Opportunity 03
              </p>

              <h3 className="mt-2 text-2xl font-bold text-gray-900">
                Advertise Your Brand
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Put your brand where people see it every day. Use Zeto's
                moving fleet as an advertising platform and create visibility
                across busy streets, neighbourhoods, and cities.
              </p>

              <div className="mt-7 space-y-3">

                <div className="flex items-start gap-3">
                  <span className="mt-1 text-green-700">✓</span>

                  <span className="text-sm text-gray-600">
                    Scooter & fleet branding
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-1 text-green-700">✓</span>

                  <span className="text-sm text-gray-600">
                    Rider & helmet branding
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-1 text-green-700">✓</span>

                  <span className="text-sm text-gray-600">
                    City-wide campaign opportunities
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-1 text-green-700">✓</span>

                  <span className="text-sm text-gray-600">
                    Custom brand activation campaigns
                  </span>
                </div>

              </div>
            </div>

          </div>

          {/* =========================
              CONNECT BANNER
          ========================== */}
          <div className="mt-16 overflow-hidden rounded-3xl bg-gray-900 px-8 py-12 text-center sm:px-12">

            <div className="mx-auto max-w-3xl">

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
                Let's Connect
              </span>

              <h3 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Have an opportunity in mind?
              </h3>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-300">
                Tell us what you're looking for — whether you want to ride
                with Zeto, start a franchise, or take your brand on the road.
                Our team will connect with you and guide you through the next
                steps.
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* =========================
          CONTACT FORM
      ========================== */}
      <GetInTouch pageType="contact" />

      {/* =========================
          FOOTER
      ========================== */}
      <Footer />
    </div>
  );
}

export default Contact;