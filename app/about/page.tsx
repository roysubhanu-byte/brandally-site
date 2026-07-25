import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Mail,
  ArrowRight,
  Megaphone,
  Clapperboard,
  BarChart3,
} from "lucide-react";
import { BRAND, TESTIMONIALS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "The team behind BrandAlly: 21 years of paid media, an anti-agency model where you talk straight to the person running your ads.",
};

const WHY = [
  { value: "21 years", label: "Paid media across the team" },
  { value: "$5M", label: "Dubai agency scaled from scratch" },
  { value: "$28M", label: "Series A we helped a SaaS raise (Sept 2025)" },
  { value: "$1M+", label: "Revenue milestones hit for clients" },
];

const FOCUS = [
  {
    Icon: Megaphone,
    title: "Paid media",
    desc: "We run and scale Meta and Google ads built around profit, not vanity metrics.",
  },
  {
    Icon: Clapperboard,
    title: "Creative",
    desc: "Hooks and ads that sound like your customer, tested fast so the winners scale.",
  },
  {
    Icon: BarChart3,
    title: "Tracking & reporting",
    desc: "We rebuild measurement so every dollar traces to a booked job or a sale.",
  },
];

const ABOUT_TESTIMONIALS = (
  TESTIMONIALS as {
    name: string;
    role: string;
    text: string;
    result?: string;
    rating: number;
  }[]
)
  .filter((t) => t.result)
  .slice(0, 4);

export default function AboutPage() {
  return (
    <div className="bg-[#faf9f4] text-[#171712]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#faf9f4]">
        <div className="absolute inset-0 grid-bg-light grid-bg-fade" />
        <div className="relative max-w-4xl mx-auto px-6 pt-20 pb-14 md:pt-28 text-center">
          <span className="inline-flex items-center rounded-full border border-[#e6e4d9] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#5c7a1e]">
            About us
          </span>
          <h1 className="font-display mt-6 text-4xl md:text-6xl font-bold max-w-3xl mx-auto leading-[1.02]">
            We run the ads. We{" "}
            <span className="rounded-xl bg-lime px-2">carry the risk.</span>
          </h1>
          <p className="mt-5 text-lg text-[#636256] max-w-2xl mx-auto">
            BrandAlly is an AI-enabled performance marketing team. You talk
            straight to the person managing your ads, not a chain of account
            managers.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-[#e6e4d9] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#5c7a1e]">
            Our story
          </span>
          <h2 className="font-display mt-6 text-3xl md:text-4xl font-bold mb-5">
            Built by operators, not middlemen.
          </h2>
          <div className="space-y-4 text-lg text-[#636256] leading-relaxed">
            <p>
              Between us we&apos;ve spent 21 years running paid media. We scaled
              a Dubai marketing agency from scratch to $5M, helped a SaaS
              company raise a $28M Series A in September 2025, and taken
              multiple businesses past their first million in revenue.
            </p>
            <p>
              BrandAlly is how we put that work directly in your account. No
              layers, no hand-offs, no learning your industry on your budget.
              The person you talk to is the person making the changes.
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-semibold text-[#171712] hover:bg-lime-soft transition"
          >
            Book a free profit audit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Why us */}
      <section className="border-y border-[#e6e4d9] bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center">
            We&apos;ve done this at real scale.
          </h2>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-[#e6e4d9] bg-[#faf9f4] p-7 text-center"
              >
                <div className="font-display text-4xl md:text-5xl font-bold">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-[#636256]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-10">
          What we do all day
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {FOCUS.map((area) => (
            <div
              key={area.title}
              className="rounded-2xl border border-[#e6e4d9] bg-white p-7"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-lime">
                <area.Icon className="w-5 h-5 text-[#171712]" />
              </span>
              <h3 className="font-display mt-4 text-xl font-bold">
                {area.title}
              </h3>
              <p className="mt-2 text-[#636256]">{area.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-[#e6e4d9] bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-10">
            What clients say
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {ABOUT_TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-[#e6e4d9] bg-[#faf9f4] p-8"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-[#5c7a1e]">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-lg leading-relaxed text-[#171712]">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <div className="font-display font-bold">{t.name}</div>
                    <div className="text-sm text-[#636256]">{t.role}</div>
                  </div>
                  {t.result && (
                    <span className="rounded-full bg-lime px-3 py-1 text-sm font-semibold text-[#171712]">
                      {t.result}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-10">
          Where to find us
        </h2>
        <div className="grid md:grid-cols-3 gap-5 text-center">
          {[
            {
              Icon: MapPin,
              title: "Address",
              body: (
                <>
                  {BRAND.address.street}
                  <br />
                  {BRAND.address.city}, {BRAND.address.state}{" "}
                  {BRAND.address.zip}
                </>
              ),
            },
            { Icon: Clock, title: "Hours", body: BRAND.hours },
            { Icon: Mail, title: "Email", body: BRAND.email },
          ].map(({ Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-[#e6e4d9] bg-white p-7"
            >
              <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-lime">
                <Icon className="w-5 h-5 text-[#171712]" />
              </span>
              <h3 className="font-semibold mb-1">{title}</h3>
              <p className="text-[#636256] text-sm">{body}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-[#636256]/70 text-sm mt-8">
          BrandAlly LLC is registered in Wyoming and works with businesses
          across the USA.
        </p>
      </section>
    </div>
  );
}
