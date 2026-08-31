// src/components/TermsAndConditions.tsx

import {
  ScrollText,
  Gavel,
  UserCog,
  Bike,
  Copyright,
  ShieldAlert,
  Link2,
  Lock,
  RefreshCw,
  Landmark,
  Mail,
} from "lucide-react";
import { Head } from "vite-react-ssg";
import { SITE_URL } from "../constants/site";
/* -------------------------------------------------------------------------- */
/* Content model                                                              */
/* -------------------------------------------------------------------------- */

interface Section {
  id: string;
  icon: typeof ScrollText;
  title: string;
  body: React.ReactNode;
}

const SECTIONS: Section[] = [
  {
    id: "use-of-our-services",
    icon: Gavel,
    title: "Use of Our Services",
    body: (
      <p>
        You agree to use our website and services only for lawful purposes.
        You must not use the platform in any way that may damage, disrupt, or
        interfere with our services or security.
      </p>
    ),
  },
  {
    id: "user-information",
    icon: UserCog,
    title: "User Information",
    body: (
      <p>
        When you provide information through our contact forms or other
        interactions, you agree that the information is accurate and
        complete. You are responsible for maintaining the confidentiality of
        any information you share.
      </p>
    ),
  },
  {
    id: "services-description",
    icon: Bike,
    title: "Services Description",
    body: (
      <p>
        Zeto World provides an electric mobility platform aimed at enabling
        last-mile delivery solutions. While we strive to ensure accurate
        information, we do not guarantee that all content or services will
        always be error-free or uninterrupted.
      </p>
    ),
  },
  {
    id: "intellectual-property",
    icon: Copyright,
    title: "Intellectual Property",
    body: (
      <p>
        All content on this website, including text, graphics, logos, and
        images, is the property of Zeto World and is protected by applicable
        intellectual property laws. You may not copy, reproduce, or
        distribute any content without prior written permission.
      </p>
    ),
  },
  {
    id: "limitation-of-liability",
    icon: ShieldAlert,
    title: "Limitation of Liability",
    body: (
      <p>
        Zeto World shall not be held liable for any direct, indirect, or
        incidental damages arising from your use of our website or services.
        Your use of the platform is at your own risk.
      </p>
    ),
  },
  {
    id: "third-party-links",
    icon: Link2,
    title: "Third-Party Links",
    body: (
      <p>
        Our website may contain links to third-party websites. We are not
        responsible for the content, policies, or practices of any
        third-party sites.
      </p>
    ),
  },
  {
    id: "privacy",
    icon: Lock,
    title: "Privacy",
    body: (
      <p>
        Your use of our website is also governed by our{" "}
        <a
          href="/privacy-policy"
          className="font-semibold text-[#1FA24A] underline underline-offset-2 hover:text-[#188A3E]"
        >
          Privacy Policy
        </a>
        . Please review it to understand how we collect and use your
        information.
      </p>
    ),
  },
  {
    id: "changes-to-terms",
    icon: RefreshCw,
    title: "Changes to Terms",
    body: (
      <p>
        We reserve the right to update or modify these Terms and Conditions
        at any time without prior notice. Continued use of the website after
        changes means you accept those updates.
      </p>
    ),
  },
  {
    id: "governing-law",
    icon: Landmark,
    title: "Governing Law",
    body: (
      <p>
        These Terms shall be governed by and interpreted in accordance with
        the laws of India.
      </p>
    ),
  },
];

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function TermsAndConditions() {
  return (
    <>
    <Head>
        <title>Terms & Conditions | Zeto</title>
        <meta name="description" content="Read the terms and conditions governing use of Zeto's electric scooter rental and battery-swap services." />
        <link rel="canonical" href={`${SITE_URL}/terms-conditons`} />
        <meta name="robots" content="noindex, follow" />
      </Head>
    <section className="bg-white px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto max-w-4xl">
        {/* ================= HEADER ================= */}
        <div className="text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#1FA24A]/20 bg-[#1FA24A]/5 px-3.5 py-1.5 text-xs font-semibold text-[#188A3E]">
            <ScrollText size={13} />
            Please read carefully
          </div>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Terms &amp; Conditions
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500">
            These terms govern your access to and use of the Zeto World
            website and services. Please read them carefully before
            proceeding.
          </p>
        </div>

        {/* ================= INTRO ================= */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm leading-relaxed text-slate-600 sm:p-8 sm:text-base">
          Welcome to <span className="font-semibold text-slate-800">Zeto World</span>.
          By accessing or using our website and services, you agree to comply
          with and be bound by the following Terms and Conditions. If you do
          not agree with any part of these terms, please do not use our
          services.
        </div>

        {/* ================= TABLE OF CONTENTS ================= */}
        <nav
          aria-label="Table of contents"
          className="mt-10 rounded-2xl border border-slate-200 p-6 sm:p-8"
        >
          <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
            On this page
          </p>

          <ol className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
            {SECTIONS.map((section, i) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="group flex items-center gap-2 py-1 text-sm text-slate-600 transition hover:text-[#1FA24A]"
                >
                  <span className="text-xs font-semibold text-slate-300 group-hover:text-[#1FA24A]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {section.title}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact-us"
                className="group flex items-center gap-2 py-1 text-sm text-slate-600 transition hover:text-[#1FA24A]"
              >
                <span className="text-xs font-semibold text-slate-300 group-hover:text-[#1FA24A]">
                  10
                </span>
                Contact Us
              </a>
            </li>
          </ol>
        </nav>

        {/* ================= SECTIONS ================= */}
        <div className="mt-12 divide-y divide-slate-200">
          {SECTIONS.map((section, i) => {
            const Icon = section.icon;

            return (
              <div key={section.id} id={section.id} className="scroll-mt-24 py-9">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#1FA24A]/10 text-[#1FA24A]">
                    <Icon size={19} strokeWidth={1.8} />
                  </span>
                  <h2 className="text-xl font-bold text-slate-900">
                    <span className="mr-2 text-slate-300">{i + 1}.</span>
                    {section.title}
                  </h2>
                </div>

                <div className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {section.body}
                </div>
              </div>
            );
          })}

          {/* ================= CONTACT ================= */}
          <div id="contact-us" className="scroll-mt-24 py-9">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#1FA24A]/10 text-[#1FA24A]">
                <Mail size={19} strokeWidth={1.8} />
              </span>
              <h2 className="text-xl font-bold text-slate-900">
                <span className="mr-2 text-slate-300">10.</span>
                Contact Us
              </h2>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              If you have any questions about these Terms and Conditions,
              please contact us through our{" "}
              <a
                href="/contact"
                className="font-semibold text-[#1FA24A] underline underline-offset-2 hover:text-[#188A3E]"
              >
                Contact Us
              </a>{" "}
              page.
            </p>
          </div>
        </div>

        {/* ================= FOOTNOTE ================= */}
        <div className="mt-10 flex items-start gap-3 rounded-2xl border border-[#1FA24A]/20 bg-[#1FA24A]/5 p-5">
          <ScrollText size={18} className="mt-0.5 flex-shrink-0 text-[#1FA24A]" />
          <p className="text-sm leading-relaxed text-slate-600">
            By continuing to use the Zeto World website and services, you
            acknowledge that you have read, understood, and agree to be bound
            by these Terms and Conditions.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}