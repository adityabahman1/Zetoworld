import { useState } from "react";
import { Phone, Mail, MapPin, User, Building2, Hash, Loader2, CheckCircle2 } from "lucide-react";

const REASONS = ["Franchise", "Advertising", "Other"] as const;
type Reason = (typeof REASONS)[number];

interface FormState {
  name: string;
  phone: string;
  email: string;
  reason: Reason | null;
  city: string;
  area: string;
  pincode: string;
}

const INITIAL_FORM: FormState = {
  name: "",
  phone: "",
  email: "",
  reason: null,
  city: "",
  area: "",
  pincode: "",
};

const CONTACT_DETAILS = [
  { icon: Phone, label: "Phone", value: "+91-8449595495" },
  { icon: Mail, label: "Email", value: "info@zetoworld.com" },
  { icon: MapPin, label: "Address", value: "Sector 70, Mohali - 160071" },
];

// Deploy the Apps Script Web App and paste its /exec URL here.
const LEAD_ENDPOINT = "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec";

// Flat-style delivery-rider mascot, built entirely from SVG primitives — no
// external image file needed, and it inherits currentColor so it always
// matches the panel it sits on.
function RiderIllustration() {
  return (
    <svg
      viewBox="0 0 280 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[220px]"
    >
      {/* Ground shadow */}
      <ellipse cx="140" cy="182" rx="90" ry="10" fill="#000000" fillOpacity="0.12" />

      {/* Scooter body */}
      <path
        d="M55 165c0-8 6-14 14-14h60l14-30h20l10 30h8c11 0 20 9 20 20 0 6-3 11-7 14H62c-4-4-7-11-7-14v-6z"
        fill="#FFFFFF"
      />
      <path d="M129 121h20l10 30h-38l8-30z" fill="#0B3D22" fillOpacity="0.15" />

      {/* Wheels */}
      <circle cx="82" cy="170" r="16" fill="#0B3D22" />
      <circle cx="82" cy="170" r="7" fill="#FFFFFF" />
      <circle cx="192" cy="170" r="16" fill="#0B3D22" />
      <circle cx="192" cy="170" r="7" fill="#FFFFFF" />

      {/* Handlebar */}
      <path d="M172 121l4-16" stroke="#0B3D22" strokeWidth="4" strokeLinecap="round" />
      <path d="M164 105h24" stroke="#0B3D22" strokeWidth="4" strokeLinecap="round" />

      {/* Delivery box */}
      <rect x="40" y="118" width="34" height="30" rx="4" fill="#FFFFFF" fillOpacity="0.9" />
      <rect x="40" y="118" width="34" height="8" rx="2" fill="#FFFFFF" />

      {/* Rider legs */}
      <path d="M118 152c4-10 10-18 16-22" stroke="#0B3D22" strokeWidth="7" strokeLinecap="round" />
      <path d="M134 130c6 2 10 8 10 14" stroke="#0B3D22" strokeWidth="7" strokeLinecap="round" />

      {/* Rider torso */}
      <path
        d="M118 96c0-9 7-16 16-16h4c9 0 16 7 16 16v24c0 6-5 11-11 11h-14c-6 0-11-5-11-11V96z"
        fill="#FFFFFF"
      />

      {/* Rider arm to handlebar */}
      <path d="M150 100l14 10" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" />

      {/* Helmet */}
      <circle cx="128" cy="72" r="16" fill="#0B3D22" />
      <path d="M113 72a15 15 0 0 1 30 0" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="0.4" />
      <rect x="112" y="70" width="16" height="6" rx="3" fill="#FFFFFF" fillOpacity="0.9" />

      {/* Little motion lines for a sense of speed */}
      <path d="M18 100h24" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.7" />
      <path d="M8 116h20" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.5" />
      <path d="M20 132h16" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.35" />
    </svg>
  );
}

export default function GetInTouch() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): string | null {
    if (!form.name.trim()) return "Please enter your name.";
    if (!/^\d{10}$/.test(form.phone.trim())) return "Enter a valid 10-digit phone number.";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) return "Enter a valid email address.";
    if (!form.reason) return "Select a reason for contacting us.";
    if (!form.city.trim()) return "Please enter your city.";
    if (!form.area.trim()) return "Please enter your area.";
    if (!/^\d{6}$/.test(form.pincode.trim())) return "Enter a valid 6-digit pincode.";
    return null;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
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
        body: JSON.stringify({ ...form, submittedAt: new Date().toISOString() }),
      });
      setStatus("success");
      setForm(INITIAL_FORM);
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again in a moment.");
    }
  }

  return (
    <section className="bg-gradient-to-b from-[#F5F8FB] to-white px-6 py-20">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Get in Touch
        </h2>
        <p className="mt-4 text-slate-500">
          Have questions or want to partner with us? Fill out the form below
          and our team will get back to you shortly.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-8 overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-900/5 ring-1 ring-slate-100 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-0">
        {/* Contact details + mascot — left panel */}
        <div className="flex flex-col justify-between bg-gradient-to-b from-[#1FA24A] to-[#188A3E] px-8 py-10 sm:px-10 lg:py-12">
          <div>
            <p className="text-sm font-semibold text-white">
              Tell us a bit about yourself
            </p>
            <p className="mt-0.5 text-xs text-emerald-50/90">
              Takes less than a minute
            </p>

            <div className="mt-10 space-y-6">
              {CONTACT_DETAILS.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white/15">
                    <item.icon size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-emerald-50/80">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-white">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mascot — anchored to the bottom of the panel */}
          <div className="mt-10 flex justify-center lg:mt-16">
            <RiderIllustration />
          </div>
        </div>

        {/* Form */}
        <div className="p-8 sm:p-10">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
              <CheckCircle2 size={44} className="text-[#1FA24A]" />
              <h3 className="text-lg font-bold text-slate-900">Thanks — we got it!</h3>
              <p className="max-w-xs text-sm text-slate-500">
                Our team will reach out to you shortly. You'll also get a
                confirmation email.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-2 text-sm font-semibold text-[#1FA24A] hover:underline"
              >
                Submit another response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-slate-700">
                  <User size={14} /> Full name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#1FA24A] focus:ring-2 focus:ring-[#1FA24A]/20"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-slate-700">
                    <Phone size={14} /> Phone number
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value.replace(/\D/g, "").slice(0, 10))}
                    placeholder="98765 43210"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#1FA24A] focus:ring-2 focus:ring-[#1FA24A]/20"
                  />
                </div>
                <div>
                  <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-slate-700">
                    <Mail size={14} /> Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#1FA24A] focus:ring-2 focus:ring-[#1FA24A]/20"
                  />
                </div>
              </div>

              <div>
                <span className="mb-2.5 block text-sm font-medium text-slate-700">
                  Reason for contacting us
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {REASONS.map((reason) => {
                    const selected = form.reason === reason;
                    return (
                      <button
                        key={reason}
                        type="button"
                        onClick={() => updateField("reason", reason)}
                        aria-pressed={selected}
                        className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                          selected
                            ? "border-[#1FA24A] bg-[#1FA24A] text-white"
                            : "border-slate-200 bg-white text-slate-600 hover:border-[#1FA24A]/50 hover:text-[#1FA24A]"
                        }`}
                      >
                        {reason}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                <div>
                  <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-slate-700">
                    <Building2 size={14} /> City
                  </label>
                  <input
                    type="text"
                    value={form.city}
                    onChange={(e) => updateField("city", e.target.value)}
                    placeholder="Bengaluru"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#1FA24A] focus:ring-2 focus:ring-[#1FA24A]/20"
                  />
                </div>
                <div>
                  <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-slate-700">
                    <MapPin size={14} /> Area
                  </label>
                  <input
                    type="text"
                    value={form.area}
                    onChange={(e) => updateField("area", e.target.value)}
                    placeholder="Outer Ring Road"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#1FA24A] focus:ring-2 focus:ring-[#1FA24A]/20"
                  />
                </div>
                <div>
                  <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-slate-700">
                    <Hash size={14} /> Pincode
                  </label>
                  <input
                    type="text"
                    value={form.pincode}
                    onChange={(e) => updateField("pincode", e.target.value.replace(/\D/g, "").slice(0, 6))}
                    placeholder="560103"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#1FA24A] focus:ring-2 focus:ring-[#1FA24A]/20"
                  />
                </div>
              </div>

              {status === "error" && error && (
                <p className="text-sm font-medium text-red-600">{error}</p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#1FA24A] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#188A3E] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}