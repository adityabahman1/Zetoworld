import { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  User,
  Building2,
  Hash,
  Loader2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Reasons — now depend on which page the form is embedded in                 */
/* -------------------------------------------------------------------------- */

type PageType = "home" | "franchise" | "advertising" | "contact";

const REASONS_BY_PAGE: Record<PageType, readonly string[]> = {
  home: ["Join as Zeto Rider"],
  franchise: ["Start a Franchise", "Investment Opportunity", "Fleet Partnership"],
  advertising: ["Vehicle Branding", "Digital Ad Campaign", "Sponsorship"],
  contact :[    "General Inquiry",     "Join as Zeto Rider",    "Start a Franchise",     "Advertising",    "Support"]
};

interface FormState {
  name: string;
  phone: string;
  email: string;
  reason: string | null;
  city: string;
  area: string;
  pincode: string;
}

function initialForm(reason: string | null = null): FormState {
  return {
    name: "",
    phone: "",
    email: "",
    reason,
    city: "",
    area: "",
    pincode: "",
  };
}

const CONTACT_DETAILS = [
  {
    icon: Phone,
    label: "Call us",
    value: "+91 84495 95495",
    href: "tel:+918449595495",
  },
  {
    icon: Mail,
    label: "Email us",
    value: "info@zetoworld.com",
    href: "mailto:info@zetoworld.com",
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: "Sector 70, Mohali - 160071",
    href: "https://www.google.com/maps/search/?api=1&query=Sector+70+Mohali+160071",
  },
];

const LEAD_ENDPOINT =
  "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec";

/* -------------------------------------------------------------------------- */
/* Rider Illustration                                                         */
/* -------------------------------------------------------------------------- */

function RiderIllustration() {
  return (
    <svg
      viewBox="0 0 280 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[230px]"
      aria-hidden="true"
    >
      <ellipse cx="140" cy="182" rx="90" ry="10" fill="#000" fillOpacity="0.12" />
      <path
        d="M55 165c0-8 6-14 14-14h60l14-30h20l10 30h8c11 0 20 9 20 20 0 6-3 11-7 14H62c-4-4-7-11-7-14v-6z"
        fill="#fff"
      />
      <path d="M129 121h20l10 30h-38l8-30z" fill="#0B3D22" fillOpacity="0.15" />
      <circle cx="82" cy="170" r="16" fill="#0B3D22" />
      <circle cx="82" cy="170" r="7" fill="#fff" />
      <circle cx="192" cy="170" r="16" fill="#0B3D22" />
      <circle cx="192" cy="170" r="7" fill="#fff" />
      <path d="M172 121l4-16" stroke="#0B3D22" strokeWidth="4" strokeLinecap="round" />
      <path d="M164 105h24" stroke="#0B3D22" strokeWidth="4" strokeLinecap="round" />
      <rect x="40" y="118" width="34" height="30" rx="4" fill="#fff" fillOpacity="0.95" />
      <rect x="40" y="118" width="34" height="8" rx="2" fill="#E8F7ED" />
      <path d="M118 152c4-10 10-18 16-22" stroke="#0B3D22" strokeWidth="7" strokeLinecap="round" />
      <path d="M134 130c6 2 10 8 10 14" stroke="#0B3D22" strokeWidth="7" strokeLinecap="round" />
      <path
        d="M118 96c0-9 7-16 16-16h4c9 0 16 7 16 16v24c0 6-5 11-11 11h-14c-6 0-11-5-11-11V96z"
        fill="#fff"
      />
      <path d="M150 100l14 10" stroke="#fff" strokeWidth="7" strokeLinecap="round" />
      <circle cx="128" cy="72" r="16" fill="#0B3D22" />
      <path d="M113 72a15 15 0 0 1 30 0" stroke="#fff" strokeWidth="2" strokeOpacity="0.4" />
      <rect x="112" y="70" width="16" height="6" rx="3" fill="#fff" fillOpacity="0.9" />
      <path d="M18 100h24" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.7" />
      <path d="M8 116h20" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.5" />
      <path d="M20 132h16" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.35" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Input component                                                            */
/* -------------------------------------------------------------------------- */

interface FieldProps {
  label: string;
  icon: React.ElementType;
  children: React.ReactNode;
  required?: boolean;
}

function Field({ label, icon: Icon, children, required = true }: FieldProps) {
  return (
    <div>
      <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-slate-700">
        <Icon size={14} className="text-[#1FA24A]" />
        {label}
        {required && (
          <span className="text-[#1FA24A]" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-[#1FA24A] focus:ring-2 focus:ring-[#1FA24A]/10";

/* -------------------------------------------------------------------------- */
/* Main component                                                             */
/* -------------------------------------------------------------------------- */

interface GetInTouchProps {
  /** Which page this form is embedded on — controls which reasons are
   *  offered. Defaults to "home" (single option: "Join as Zeto Rider"). */
  pageType?: PageType;
}

export default function GetInTouch({ pageType = "home" }: GetInTouchProps) {
  const reasons = REASONS_BY_PAGE[pageType];
  const isSingleReason = reasons.length === 1;

  const [form, setForm] = useState<FormState>(() =>
    initialForm(isSingleReason ? reasons[0] : null)
  );

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  // Reset the form whenever pageType changes, re-applying the single-reason
  // preselect if the new page only offers one option.
  useEffect(() => {
    setForm(initialForm(isSingleReason ? reasons[0] : null));
    setStatus("idle");
    setError("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageType]);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (status === "error") {
      setStatus("idle");
      setError("");
    }
  }

  function validate(): string | null {
    if (!form.name.trim()) return "Please enter your full name.";
    if (!/^\d{10}$/.test(form.phone.trim())) return "Please enter a valid 10-digit mobile number.";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) return "Please enter a valid email address.";
    if (!form.reason) return "Please select what you'd like to discuss.";
    if (!form.city.trim()) return "Please enter your city.";
    if (!form.area.trim()) return "Please enter your area.";
    if (!/^\d{6}$/.test(form.pincode.trim())) return "Please enter a valid 6-digit pincode.";
    return null;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      setStatus("error");
      return;
    }

    setError("");
    setStatus("submitting");

    try {
      await fetch(LEAD_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          ...form,
          pageType,
          submittedAt: new Date().toISOString(),
        }),
      });

      setStatus("success");
      setForm(initialForm(isSingleReason ? reasons[0] : null));
    } catch {
      setStatus("error");
      setError("We couldn't submit your request. Please try again in a moment.");
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-[#F5F8FB] via-white to-white px-6 py-20 sm:py-24"
    >
      <div
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#1FA24A]/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-2xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1FA24A]/20 bg-[#1FA24A]/5 px-3.5 py-1.5 text-xs font-semibold text-[#188A3E]">
          <Sparkles size={13} />
          Let's connect
        </div>

        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Let's build something
          <span className="text-[#1FA24A]"> greener.</span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
          Have a question, want to partner with us, or interested in bringing
          Zeto to your city? Tell us a little about yourself.
        </p>
      </div>

      <div className="relative mx-auto mt-12 max-w-6xl overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-[0_25px_80px_-30px_rgba(15,23,42,0.25)] lg:mt-14 lg:grid lg:grid-cols-[0.75fr_1.25fr]">
        {/* LEFT PANEL */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#1FA24A] via-[#188A3E] to-[#0B3D22] px-7 py-10 sm:px-10 sm:py-12">
          <div
            className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full border border-white/10"
            aria-hidden="true"
          />

          <div className="relative flex h-full flex-col">
            <div>
              <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-50">
                Contact Zeto
              </div>

              <h3 className="mt-5 text-2xl font-bold leading-tight text-white">
                We're here to
                <br />
                <span className="text-emerald-100">help you move forward.</span>
              </h3>

              <p className="mt-4 max-w-xs text-sm leading-6 text-emerald-50/80">
                Our team is ready to answer your questions and explore the
                right opportunity for you.
              </p>
            </div>

            <div className="mt-9 space-y-3">
              {CONTACT_DETAILS.map((item) => {
                const Icon = item.icon;
                const isExternal = item.href.startsWith("http");

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/5 p-3 transition-all duration-200 hover:border-white/20 hover:bg-white/10" >
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-white transition-transform duration-200 group-hover:scale-105">
                      <Icon size={17} />
                    </span>

                    <span className="min-w-0">
                      <span className="block text-[10px] font-semibold uppercase tracking-wider text-emerald-100/70">
                        {item.label}
                      </span>

                      <span className="mt-0.5 block truncate text-sm font-medium text-white">
                        {item.value}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="mt-auto hidden justify-center pt-10 lg:flex">
              <RiderIllustration />
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="p-7 sm:p-9 lg:p-10">
          {status === "success" ? (
            <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#1FA24A]/10">
                <CheckCircle2 size={42} strokeWidth={1.8} className="text-[#1FA24A]" />
              </div>

              <h3 className="mt-7 text-2xl font-bold text-slate-900">You're all set!</h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
                Thanks for reaching out to Zeto. We've received your details
                and someone from our team will get in touch with you shortly.
              </p>

              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-7 inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-[#1FA24A] hover:text-[#1FA24A]"
              >
                Submit another response
                <ArrowRight size={14} />
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="mb-7">
                <h3 className="text-xl font-bold text-slate-900">Tell us how we can help</h3>
                <p className="mt-1.5 text-sm text-slate-500">
                  Fill in your details and we'll get back to you.
                </p>
              </div>

              <Field label="Full name" icon={User}>
                <input
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  placeholder="Enter your full name"
                  className={inputClass}
                />
              </Field>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Phone number" icon={Phone}>
                  <div className="flex overflow-hidden rounded-xl border border-slate-200 bg-white transition focus-within:border-[#1FA24A] focus-within:ring-2 focus-within:ring-[#1FA24A]/10">
                    <span className="flex items-center border-r border-slate-200 px-3 text-sm font-medium text-slate-500">
                      +91
                    </span>

                    <input
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) =>
                        updateField("phone", e.target.value.replace(/\D/g, "").slice(0, 10))
                      }
                      placeholder="98765 43210"
                      className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none placeholder:text-slate-400"
                    />
                  </div>
                </Field>

                <Field label="Email address" icon={Mail}>
                  <input
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </Field>
              </div>

              {/* Reason — options come from REASONS_BY_PAGE[pageType].
                  Home offers just one ("Join as Zeto Rider"), auto-selected
                  and shown disabled so the person still sees what they're
                  submitting for without needing to click it. */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  What would you like to discuss?
                  <span className="ml-1 text-[#1FA24A]">*</span>
                </label>

                <div className="flex flex-wrap gap-2">
                  {reasons.map((reason) => {
                    const selected = form.reason === reason;

                    return (
                      <button
                        key={reason}
                        type="button"
                        onClick={() => updateField("reason", reason)}
                        aria-pressed={selected}
                        disabled={isSingleReason}
                        className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                          selected
                            ? "border-[#1FA24A] bg-[#1FA24A] text-white"
                            : "border-slate-200 bg-white text-slate-600 hover:border-[#1FA24A] hover:text-[#1FA24A]"
                        } ${isSingleReason ? "cursor-default" : ""}`}
                      >
                        {reason}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                <Field label="City" icon={Building2}>
                  <input
                    type="text"
                    autoComplete="address-level2"
                    value={form.city}
                    onChange={(e) => updateField("city", e.target.value)}
                    placeholder="Mohali"
                    className={inputClass}
                  />
                </Field>

                <Field label="Area" icon={MapPin}>
                  <input
                    type="text"
                    autoComplete="address-line1"
                    value={form.area}
                    onChange={(e) => updateField("area", e.target.value)}
                    placeholder="Sector 70"
                    className={inputClass}
                  />
                </Field>

                <Field label="Pincode" icon={Hash}>
                  <input
                    type="text"
                    inputMode="numeric"
                    autoComplete="postal-code"
                    value={form.pincode}
                    onChange={(e) =>
                      updateField("pincode", e.target.value.replace(/\D/g, "").slice(0, 6))
                    }
                    placeholder="160071"
                    className={inputClass}
                  />
                </Field>
              </div>

              {status === "error" && error && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-600"
                >
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#1FA24A] px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-[#1FA24A]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#188A3E] hover:shadow-lg disabled:cursor-not-allowed disabled:translate-y-0 disabled:opacity-70"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 size={17} className="animate-spin" />
                    Sending your request...
                  </>
                ) : (
                  <>
                    Send enquiry
                    <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </>
                )}
              </button>

              <p className="text-center text-[11px] leading-5 text-slate-400">
                We'll only use your details to respond to your enquiry.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}