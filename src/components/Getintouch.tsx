import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ContactItem {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  label: string;
  lines: string[];
  note: string;
}

const CONTACT_ITEMS: ContactItem[] = [
  {
    icon: Phone,
    iconBg: "bg-emerald-50",
    iconColor: "text-[#0B6E3B]",
    label: "Phone",
    lines: ["+91 1800 123 4567"],
    note: "Mon–Fri from 9am to 6pm",
  },
  {
    icon: Mail,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    label: "Email",
    lines: ["hello@zetoworld.com"],
    note: "We'll respond within 24 hours",
  },
  {
    icon: MapPin,
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
    label: "Office",
    lines: ["123 Green Mobility Tech Park,", "Outer Ring Road, Bengaluru 560103"],
    note: "",
  },
];

export default function GetInTouch() {
  return (
    <section className="bg-[#F5F8FB] px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Get in Touch
        </h2>
        <p className="mt-4 text-slate-500">
          Have questions or want to partner with us? Reach out and our team
          will get back to you shortly.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-xl rounded-3xl bg-white p-10 shadow-sm">
        <div className="space-y-8">
          {CONTACT_ITEMS.map((item) => (
            <div key={item.label} className="flex items-start gap-4">
              <div
                className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl ${item.iconBg}`}
              >
                <item.icon size={20} className={item.iconColor} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {item.label}
                </h3>
                {item.lines.map((line) => (
                  <p key={line} className="text-sm text-slate-600">
                    {line}
                  </p>
                ))}
                {item.note && (
                  <p className="mt-1 text-xs text-slate-400">{item.note}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}