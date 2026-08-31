// src/components/PrivacyPolicy.tsx

import {
    ShieldCheck,
    User,
    Cpu,
    MapPin,
    ListChecks,
    Cookie,
    Share2,
    Lock,
    UserCheck,
    Mail,
    FileCheck2,
} from "lucide-react";
import { Head } from "vite-react-ssg";
import { SITE_URL } from "../constants/site";

/* -------------------------------------------------------------------------- */
/* Content model                                                              */
/* -------------------------------------------------------------------------- */

interface Section {
    id: string;
    icon: typeof ShieldCheck;
    title: string;
    body: React.ReactNode;
}

const SECTIONS: Section[] = [
    {
        id: "information-we-collect",
        icon: User,
        title: "Information We Collect",
        body: (
            <>
                <p>We may collect the following information:</p>

                <p className="mt-4 font-semibold text-slate-800">Personal Information</p>
                <ul>
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Company name</li>
                    <li>Information submitted through contact forms or support requests</li>
                </ul>

                <p className="mt-4 font-semibold text-slate-800">Technical Information</p>
                <ul>
                    <li>IP address</li>
                    <li>Browser type</li>
                    <li>Device information</li>
                    <li>Operating system</li>
                    <li>Website usage and analytics</li>
                    <li>Cookies and similar technologies</li>
                </ul>
            </>
        ),
    },
    {
        id: "location-information",
        icon: MapPin,
        title: "Location Information",
        body: (
            <>
                <p>
                    To provide our fleet management and mobility solutions, we may
                    collect:
                </p>
                <ul>
                    <li>
                        <span className="font-semibold text-slate-800">
                            Live rider location
                        </span>{" "}
                        through our Rider Mobile App (with user permission) to support
                        real-time operations, safety, and route management.
                    </li>
                    <li>
                        <span className="font-semibold text-slate-800">
                            Vehicle location
                        </span>{" "}
                        through IoT/GPS devices installed in scooters, motorcycles, cars,
                        and other fleet vehicles to enable live tracking, fleet
                        monitoring, theft prevention, maintenance planning, and
                        operational efficiency.
                    </li>
                </ul>
                <p className="mt-4">
                    Location data is collected only for authorized business purposes
                    and is protected using industry-standard security measures.
                </p>
            </>
        ),
    },
    {
        id: "how-we-use-your-information",
        icon: ListChecks,
        title: "How We Use Your Information",
        body: (
            <>
                <p>Your information helps us to:</p>
                <ul>
                    <li>Respond to your inquiries and support requests.</li>
                    <li>Deliver our fleet management and connected mobility services.</li>
                    <li>
                        Monitor live rider and vehicle locations for operational
                        efficiency and safety.
                    </li>
                    <li>Improve our website, products, and customer experience.</li>
                    <li>Send important service updates and notifications.</li>
                    <li>Maintain platform security and prevent unauthorized activities.</li>
                </ul>
                <p className="mt-4">
                    We never use your personal information for spam or unauthorized
                    marketing.
                </p>
            </>
        ),
    },
    {
        id: "cookies",
        icon: Cookie,
        title: "Cookies",
        body: (
            <>
                <p>
                    Our website uses cookies to improve your browsing experience,
                    remember preferences, analyze website traffic, and enhance
                    performance.
                </p>
                <p className="mt-4">
                    You can disable cookies through your browser settings; however,
                    some features of the website may not function properly.
                </p>
            </>
        ),
    },
    {
        id: "data-sharing",
        icon: Share2,
        title: "Data Sharing",
        body: (
            <>
                <p>
                    We respect your privacy. We do not sell, rent, or trade your
                    personal information.
                </p>
                <p className="mt-4">Your information may only be shared:</p>
                <ul>
                    <li>When required by law or legal authorities.</li>
                    <li>
                        With trusted service providers who help us operate our services
                        under strict confidentiality agreements.
                    </li>
                    <li>To protect our legal rights, users, and platform security.</li>
                </ul>
            </>
        ),
    },
    {
        id: "data-security",
        icon: Lock,
        title: "Data Security",
        body: (
            <>
                <p>
                    We implement appropriate technical and organizational security
                    measures to protect your personal information from unauthorized
                    access, misuse, alteration, or disclosure.
                </p>
                <p className="mt-4">
                    Although we strive to protect your information, no online system
                    can guarantee absolute security.
                </p>
            </>
        ),
    },
    {
        id: "your-rights",
        icon: UserCheck,
        title: "Your Rights",
        body: (
            <>
                <p>You have the right to:</p>
                <ul>
                    <li>Access your personal information.</li>
                    <li>Request corrections or updates.</li>
                    <li>Request deletion of your data where applicable.</li>
                    <li>
                        Withdraw consent for location access through the mobile
                        application at any time (subject to service functionality).
                    </li>
                </ul>
            </>
        ),
    },
    {
        id: "consent",
        icon: FileCheck2,
        title: "Consent",
        body: (
            <p>
                By using our website, mobile applications, and IoT-enabled fleet
                services, you consent to the collection and processing of your
                information, including real-time rider location through the mobile
                application and vehicle location through IoT/GPS devices, solely for
                providing secure, reliable, and efficient fleet management services.
            </p>
        ),
    },
];

const CONTACT_LINES = [
    "ZetoWorld Technologies Pvt. Ltd.",
    "Email: info@zetoworld.com",
    "Location: Zirakpur, Punjab, India",
];

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function PrivacyPolicy() {
    return (
        <>
            <Head>
                <title>Privacy Policy | Zeto </title>
                <meta name="description" content="Read Zeto's privacy policy to understand how we collect, use, and protect your data." />
                <link rel="canonical" href={`${SITE_URL}/privacy-policy`} />
                <meta name="robots" content="noindex, follow" />
            </Head>

            <section className="bg-white px-6 py-20 sm:px-10 lg:py-28">
                <div className="mx-auto max-w-4xl">
                    {/* ================= HEADER ================= */}
                    <div className="text-center">
                        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#1FA24A]/20 bg-[#1FA24A]/5 px-3.5 py-1.5 text-xs font-semibold text-[#188A3E]">
                            <ShieldCheck size={13} />
                            Your privacy matters
                        </div>

                        <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                            Privacy Policy
                        </h1>

                        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500">
                            We are committed to protecting your privacy and ensuring
                            transparency about how we collect, use, and safeguard your
                            personal information.
                        </p>

                        <p className="mt-4 text-sm font-medium text-slate-400">
                            Last updated: March 18, 2026
                        </p>
                    </div>

                    {/* ================= INTRO ================= */}
                    <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm leading-relaxed text-slate-600 sm:p-8 sm:text-base">
                        At <span className="font-semibold text-slate-800">ZetoWorld Technologies Pvt. Ltd.</span>,
                        we are committed to protecting your privacy and being transparent
                        about how we collect, use, and safeguard your information. By using
                        our website, mobile applications, and connected services, you agree
                        to the practices described in this Privacy Policy.
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
                                        09
                                    </span>
                                    Contact Us
                                </a>
                            </li>
                        </ol>
                    </nav>

                    {/* ================= SECTIONS ================= */}
                    <div className="mt-12 divide-y divide-slate-200">
                        {SECTIONS.map((section) => {
                            const Icon = section.icon;

                            return (
                                <div key={section.id} id={section.id} className="scroll-mt-24 py-9">
                                    <div className="flex items-center gap-3">
                                        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#1FA24A]/10 text-[#1FA24A]">
                                            <Icon size={19} strokeWidth={1.8} />
                                        </span>
                                        <h2 className="text-xl font-bold text-slate-900">
                                            {section.title}
                                        </h2>
                                    </div>

                                    <div
                                        className="
                    mt-4
                    max-w-none
                    text-sm
                    leading-relaxed
                    text-slate-600
                    sm:text-base
                    [&_ul]:mt-2
                    [&_ul]:list-disc
                    [&_ul]:space-y-1.5
                    [&_ul]:pl-5
                    [&_li]:marker:text-[#1FA24A]
                  "
                                    >
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
                                <h2 className="text-xl font-bold text-slate-900">Contact Us</h2>
                            </div>

                            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                                If you have any questions regarding this Privacy Policy, please
                                contact us:
                            </p>

                            <div className="mt-5 max-w-sm rounded-2xl border border-slate-200 bg-slate-50 p-5">
                                {CONTACT_LINES.map((line) => (
                                    <p key={line} className="text-sm font-medium text-slate-700">
                                        {line}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ================= FOOTNOTE ================= */}
                    <div className="mt-10 flex items-start gap-3 rounded-2xl border border-[#1FA24A]/20 bg-[#1FA24A]/5 p-5">
                        <Cpu size={18} className="mt-0.5 flex-shrink-0 text-[#1FA24A]" />
                        <p className="text-sm leading-relaxed text-slate-600">
                            This policy may be updated periodically to reflect changes in our
                            practices or legal requirements. Please review this page
                            occasionally to stay informed about how we protect your
                            information.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}