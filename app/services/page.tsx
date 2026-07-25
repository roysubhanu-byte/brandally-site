import type { Metadata } from "next";
import Link from "next/link";
import {
  Brain,
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Megaphone,
  Clapperboard,
  MousePointerClick,
  BarChart3,
} from "lucide-react";
import { PRODUCTS, TESTIMONIALS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Paid media, creative, CRO, and reporting for local businesses and D2C brands. You talk straight to the person running your ads, backed by a performance guarantee.",
};

const coreServices = [
  {
    Icon: Megaphone,
    title: "Paid ads",
    desc: "We run and scale Meta and Google campaigns built around profit, not vanity metrics.",
  },
  {
    Icon: Clapperboard,
    title: "Creative",
    desc: "Hooks, statics, and video that sound like your customer, then tested fast so winners scale.",
  },
  {
    Icon: MousePointerClick,
    title: "CRO",
    desc: "We fix the leaks between the click and the sale, so more of the traffic you pay for converts.",
  },
  {
    Icon: BarChart3,
    title: "Tracking & reporting",
    desc: "Measurement rebuilt so every dollar traces back to a booked job or a sale. No guessing.",
  },
];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  brain: Brain,
};

export default function ServicesPage() {
  return (
    <div className="bg-[#faf9f4] text-[#171712]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#faf9f4]">
        <div className="absolute inset-0 grid-bg-light grid-bg-fade" />
        <div className="relative max-w-4xl mx-auto px-6 pt-20 pb-14 md:pt-28 text-center">
          <span className="inline-flex items-center rounded-full border border-[#e6e4d9] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#5c7a1e]">
            What we do
          </span>
          <h1 className="font-display mt-6 text-4xl md:text-6xl font-bold">
            Ad spend that{" "}
            <span className="rounded-xl bg-lime px-2">pays you back.</span>
          </h1>
          <p className="mt-5 text-lg text-[#636256] max-w-2xl mx-auto">
            We own the four levers that move revenue, end to end, or plug into
            the gaps your team needs filled.
          </p>
        </div>
      </section>

      {/* Core services */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {coreServices.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-[#e6e4d9] bg-white p-7 hover:border-lime transition"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-lime">
                <s.Icon className="w-5 h-5 text-[#171712]" />
              </span>
              <h3 className="font-display mt-4 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-[#636256] leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Guarantee */}
      <section className="max-w-6xl mx-auto px-6 pb-4">
        <div className="rounded-3xl border border-[#171712] bg-[#171712] text-white p-8 md:p-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-lime">
            <ShieldCheck className="h-3.5 w-3.5" /> How we price it
          </span>
          <h2 className="font-display mt-6 text-2xl md:text-4xl font-bold max-w-3xl">
            No fixed package. We tie our fee to your result.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            Your ad budget goes to the platforms and stays in your name. Our fee
            depends on scope, quoted after a free audit. Local service
            businesses get a 100-new-clients-in-60-days guarantee. D2C brands
            get a profit target, or the next month is on us. No long lock-in.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-semibold text-[#171712] hover:bg-lime-soft transition"
          >
            Book a free profit audit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Also from us: tool */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="max-w-2xl mb-8">
          <span className="inline-flex items-center rounded-full border border-[#e6e4d9] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#636256]">
            Also from us
          </span>
          <h2 className="font-display mt-5 text-3xl md:text-4xl font-bold">
            The tool behind the work
          </h2>
          <p className="mt-3 text-[#636256]">
            Marketing software we built in-house to research creative and watch
            competitors.
          </p>
        </div>
        <div className={PRODUCTS.length === 1 ? "max-w-2xl" : "grid md:grid-cols-2 gap-5"}>
          {PRODUCTS.map((product) => {
            const Icon = iconMap[product.icon] || Brain;
            return (
              <a
                key={product.name}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-5 rounded-2xl border border-[#e6e4d9] bg-white p-7 hover:border-lime transition"
              >
                <span className="shrink-0 flex h-14 w-14 items-center justify-center rounded-xl bg-lime">
                  <Icon className="w-7 h-7 text-[#171712]" />
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold group-hover:text-[#5c7a1e] transition">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-[#636256] leading-relaxed">
                    {product.description}
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#636256]/50 group-hover:text-[#5c7a1e] transition shrink-0" />
              </a>
            );
          })}
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-[#e6e4d9] bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-10">
            What clients say
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {TESTIMONIALS.slice(0, 2).map((t) => (
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
                <p className="text-lg leading-relaxed text-[#171712] mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="font-display font-bold">{t.name}</p>
                  <p className="text-sm text-[#636256]">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Ready to grow?
        </h2>
        <p className="text-[#636256] mb-8">
          Let&apos;s find the one thing holding your account back.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-lime px-8 py-3.5 font-semibold text-[#171712] hover:bg-lime-soft transition"
        >
          Book a free profit audit <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
