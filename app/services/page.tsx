import type { Metadata } from "next";
import Link from "next/link";
import {
  Brain,
  BarChart3,
  GraduationCap,
  Rocket,
  ArrowUpRight,
  CheckCircle2,
  ArrowRight,
  Megaphone,
  Clapperboard,
  MousePointerClick,
  Mail,
} from "lucide-react";
import { PRODUCTS, TESTIMONIALS } from "@/lib/constants";

const coreServices = [
  {
    Icon: Megaphone,
    title: "Paid Ads",
    desc: "We run and scale Meta, Google, and TikTok campaigns built around profit, not vanity metrics.",
  },
  {
    Icon: Clapperboard,
    title: "Creatives",
    desc: "Ad creative that stops the scroll: hooks, statics, and video made to convert, then tested fast.",
  },
  {
    Icon: MousePointerClick,
    title: "CRO",
    desc: "We fix the leaks between click and checkout, so more of the traffic you pay for turns into sales.",
  },
  {
    Icon: Mail,
    title: "Email",
    desc: "Flows and campaigns that turn first-time buyers into repeat revenue without more ad spend.",
  },
];

export const metadata: Metadata = {
  title: "Services",
  description:
    "SaaS marketing tools and growth consulting for agencies, D2C brands, and founders.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  brain: Brain,
  barChart3: BarChart3,
  graduationCap: GraduationCap,
  rocketIcon: Rocket,
};

const consultingIncludes = [
  "Full marketing audit of your current setup",
  "Detailed execution plan with actionable steps",
  "Channel-by-channel strategy breakdown",
  "Creative and messaging analysis",
  "Competitive landscape review",
  "30-day follow-up check-in",
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink py-24">
        <div className="absolute inset-0 grid-bg grid-bg-fade" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center rounded-full border border-lime/40 bg-lime/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-lime">
            Our services
          </span>
          <h1 className="font-display mt-6 text-5xl md:text-6xl font-bold text-white">
            What we <span className="text-lime">offer</span>
          </h1>
          <p className="mt-5 text-lg text-muted max-w-2xl mx-auto">
            Tailored SaaS tools and hands-on growth consulting to help agencies,
            D2C brands, and founders improve research, reporting, and marketing
            performance.
          </p>
        </div>
      </section>

      {/* Core Services (primary) */}
      <section className="bg-ink py-24 border-t border-line">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="inline-flex items-center rounded-full border border-lime/40 bg-lime/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-lime">
              Core services
            </span>
            <h2 className="font-display mt-6 text-4xl font-bold text-white">
              What we run for you
            </h2>
            <p className="mt-3 text-muted">
              The four levers that move revenue. We own them end to end, or plug
              into the gaps your team needs filled.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {coreServices.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-line bg-surface p-7 hover:border-lime/40 transition"
              >
                <div className="w-12 h-12 rounded-xl bg-lime/10 flex items-center justify-center mb-5">
                  <s.Icon className="w-6 h-6 text-lime" />
                </div>
                <h3 className="text-xl font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SaaS Tools (secondary) */}
      <section className="bg-ink py-24 border-t border-line">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="inline-flex items-center rounded-full border border-line bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted">
              Also from us
            </span>
            <h2 className="font-display mt-6 text-4xl font-bold text-white">
              The tools behind the work
            </h2>
            <p className="mt-3 text-muted">
              Marketing software we built in-house to research creative, watch
              competitors, and report on spend faster.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {PRODUCTS.map((product) => {
              const Icon = iconMap[product.icon] || Brain;
              return (
                <a
                  key={product.name}
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-5 rounded-2xl border border-line bg-surface p-7 hover:border-lime/40 transition"
                >
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-lime/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-lime" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-lime transition">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-muted leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted/50 group-hover:text-lime transition shrink-0" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consulting */}
      <section className="bg-ink py-24 border-t border-line">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center rounded-full border border-lime/40 bg-lime/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-lime">
                Growth consulting
              </span>
              <h2 className="font-display mt-6 text-4xl font-bold text-white mb-4">
                Strategic guidance to scale.
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                Our consulting engagement starts with a deep dive into your
                marketing operations, followed by a comprehensive execution plan
                tailored to your business goals.
              </p>
              <ul className="space-y-3 mb-8">
                {consultingIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lime shrink-0 mt-0.5" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-semibold text-ink hover:bg-lime-soft transition"
              >
                Get started for $2,500 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="rounded-3xl border border-lime/30 bg-surface p-8 text-center glow-lime">
              <p className="font-display text-6xl font-bold text-lime mb-2">
                $2,500
              </p>
              <p className="text-xl text-white font-medium mb-4">
                Marketing service package
              </p>
              <p className="text-muted mb-6">
                Comprehensive audit + execution plan building
              </p>
              <div className="border-t border-line pt-6">
                <p className="text-sm text-muted">
                  Includes a{" "}
                  <span className="font-semibold text-white">
                    15-day satisfaction guarantee
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-ink py-24 border-t border-line">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-white text-center mb-12">
            What our clients say
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {TESTIMONIALS.slice(0, 2).map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-line bg-surface p-8"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-lime text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-white/90 leading-relaxed mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-muted">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20 border-t border-line">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-4">
            Ready to grow?
          </h2>
          <p className="text-muted mb-8">
            Let&apos;s talk about how BrandAlly can help your business scale.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-lime px-8 py-3.5 font-semibold text-ink hover:bg-lime-soft transition glow-lime"
          >
            Contact us today <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
