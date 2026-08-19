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
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Reasons — now depend on which page the form is embedded in                 */
/* -------------------------------------------------------------------------- */

type PageType = "home" | "franchise" | "advertising" | "contact";

const REASONS_BY_PAGE: Record<PageType, readonly string[]> = {
  home: ["Join as Zeto Rider"],
  franchise: ["Start a Franchise", "Investment Opportunity", "Fleet Partnership"],
  advertising: ["Vehicle Branding", "Digital Ad Campaign", "Sponsorship"],
  contact: ["General Inquiry", "Join as Zeto Rider", "Start a Franchise", "Advertising", "Support"],
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
        <Icon size={14} className="text-slate-400" />
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
  "w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1FA24A] focus:ring-2 focus:ring-[#1FA24A]/10";

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
    <section id="contact" className="bg-white px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Get in touch
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500 sm:text-base">
          Have a question or want to partner with us? Fill in your details
          and we'll get back to you.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-slate-200 p-6 sm:p-8">
        {status === "success" ? (
          <div className="flex flex-col items-center py-10 text-center">
            <CheckCircle2 size={40} strokeWidth={1.8} className="text-[#1FA24A]" />

            <h3 className="mt-4 text-lg font-bold text-slate-900">You're all set!</h3>

            <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
              We've received your details and will get in touch shortly.
            </p>

            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 text-sm font-semibold text-[#1FA24A] underline-offset-2 hover:underline"
            >
              Submit another response
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
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

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Phone number" icon={Phone}>
                <div className="flex overflow-hidden rounded-lg border border-slate-200 bg-white transition focus-within:border-[#1FA24A] focus-within:ring-2 focus-within:ring-[#1FA24A]/10">
                  <span className="flex items-center border-r border-slate-200 px-3 text-sm text-slate-500">
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
                    className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm outline-none placeholder:text-slate-400"
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

            {/* Reason — a plain select keeps this compact regardless of how
                many options a given page offers. Home has just one option,
                pre-selected. */}
            <Field label="What would you like to discuss?" icon={Building2}>
              <select
                value={form.reason ?? ""}
                onChange={(e) => updateField("reason", e.target.value)}
                disabled={isSingleReason}
                className={`${inputClass} ${isSingleReason ? "text-slate-500" : ""}`}
              >
                {!isSingleReason && (
                  <option value="" disabled>
                    Select a reason
                  </option>
                )}
                {reasons.map((reason) => (
                  <option key={reason} value={reason}>
                    {reason}
                  </option>
                ))}
              </select>
            </Field>

            <div className="grid gap-4 sm:grid-cols-3">
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
                className="rounded-lg border border-red-100 bg-red-50 px-4 py-2.5 text-sm text-red-600"
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#1FA24A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#188A3E] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                "Send enquiry"
              )}
            </button>

            <p className="text-center text-xs text-slate-400">
              We'll only use your details to respond to your enquiry.
            </p>
          </form>
        )}
      </div>

      {/* Contact details — plain row below the form, not a separate panel */}
      <div className="mx-auto mt-8 flex max-w-xl flex-col items-center gap-3 text-sm text-slate-500 sm:flex-row sm:justify-center sm:gap-6">
        {CONTACT_DETAILS.map((item) => {
          const Icon = item.icon;
          const isExternal = item.href.startsWith("http");

          return (
            <a
              key={item.label}
              href={item.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="flex items-center gap-1.5 hover:text-[#1FA24A]"
            >
              <Icon size={14} />
              {item.value}
            </a>
          );
        })}
      </div>
    </section>
  );
}