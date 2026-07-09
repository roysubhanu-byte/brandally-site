"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-[#e6e4d9] bg-[#faf9f4] text-[#171712] placeholder-[#636256]/50 focus:border-lime focus:ring-2 focus:ring-lime/40 outline-none transition";

const DOG_BUSINESS_TYPES = [
  "Board & train",
  "Day training / group classes",
  "Puppy programs",
  "Dog daycare / boarding",
  "Dog products & gear",
  "Other dog business",
];

export default function DogLeadForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    const eventId = crypto.randomUUID();

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          business: data.get("business"),
          business_email: data.get("business_email"),
          website: data.get("website"),
          niche: `Dog: ${data.get("niche")}`,
          event_id: eventId,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
        const w = window as unknown as { fbq?: (...args: unknown[]) => void };
        w.fbq?.("track", "Lead", {}, { eventID: eventId });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-lime bg-lime/25 p-8 text-center">
        <CheckCircle2 className="w-12 h-12 text-[#5c7a1e] mx-auto mb-4" />
        <h3 className="font-display text-xl font-bold text-[#171712] mb-2">
          Got it. We&apos;ll be in touch.
        </h3>
        <p className="text-[#636256]">
          We&apos;ll look at your business and local market, then reach out
          within 1 business day with a plan.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 font-semibold text-[#5c7a1e] hover:underline"
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-[#636256] mb-1.5">
            Your name
          </label>
          <input
            type="text"
            name="name"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#636256] mb-1.5">
            Business name
          </label>
          <input
            type="text"
            name="business"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-[#636256] mb-1.5">
            Business email
          </label>
          <input
            type="email"
            name="business_email"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#636256] mb-1.5">
            Website
          </label>
          <input
            type="text"
            name="website"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#636256] mb-1.5">
          What describes your business best?
        </label>
        <select name="niche" defaultValue="" className={inputClass} required>
          <option value="" disabled>
            Select one
          </option>
          {DOG_BUSINESS_TYPES.map((n) => (
            <option key={n} value={n} className="bg-white">
              {n}
            </option>
          ))}
        </select>
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-semibold text-ink hover:bg-lime-soft disabled:opacity-60 transition"
      >
        <Send className="w-4 h-4" />
        {status === "sending" ? "Sending..." : "Send me the growth plan"}
      </button>
    </form>
  );
}
