import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, X } from "lucide-react";
import { CASE_STUDIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real accounts, real numbers. Meta ads case studies for D2C brands and lead gen businesses, pulled straight from client dashboards, plus how we plan, fix and scale.",
};

type Filter = "all" | "d2c" | "leadgen";

// D2C buyers spend $500K-$5M a year on ads ($2.5M-$25M revenue): biggest brand first,
// every card framed as short-term growth, not total business size.
const D2C_ORDER = ["baby-formula", "sports-games", "ski-apparel", "dog-products"];

const FILTERS: { key: Filter; label: string; href: string }[] = [
  { key: "all", label: "All case studies", href: "/case-studies" },
  { key: "d2c", label: "D2C brands", href: "/case-studies?type=d2c" },
  { key: "leadgen", label: "Lead gen", href: "/case-studies?type=leadgen" },
];

const HERO: Record<Filter, { title: string; accent: string; sub: string }> = {
  all: {
    title: "Real accounts. Real numbers.",
    accent: "Real numbers.",
    sub: "Every number comes from a client dashboard: Meta Ads Manager, Shopify, HubSpot. Open any card for the full case study with screenshots.",
  },
  d2c: {
    title: "Meta ads for D2C brands.",
    accent: "D2C brands.",
    sub: "Ecommerce brands we've run Meta for. Where each one was stuck, what we changed, and the Shopify and Ads Manager numbers after.",
  },
  leadgen: {
    title: "Leads that turn into sales.",
    accent: "into sales.",
    sub: "Coaching, local and B2B. We judge lead gen on deals closed, not cost per lead. Meta and Google, numbers from the CRM.",
  },
};

const STATS: Record<Filter, { value: string; label: string }[]> = {
  all: [
    { value: "$3.3M+", label: "Revenue & pipeline driven" },
    { value: "4.6X", label: "Best Meta ROAS" },
    { value: "$4.53", label: "Lowest Meta cost per lead" },
    { value: "8", label: "Accounts scaled" },
  ],
  d2c: [
    { value: "4.6X", label: "Best Meta ROAS" },
    { value: "$25", label: "Lowest new customer CAC" },
    { value: "+60%", label: "Orders a day, one month" },
    { value: "4", label: "D2C brands" },
  ],
  leadgen: [
    { value: "$1.47M", label: "Closed-won, one account" },
    { value: "$4.53", label: "Lowest Meta cost per lead" },
    { value: "30%", label: "Call-to-close rate" },
    { value: "4", label: "Lead gen accounts" },
  ],
};

const STEPS = [
  {
    n: "01",
    title: "Plan",
    line: "Start with profit, not ads.",
    points: [
      "Work out what you can pay for a customer and still make money.",
      "Pick the one offer that pays back fastest. That's what the ads sell.",
      "Agree one number to hit before we spend a dollar.",
    ],
  },
  {
    n: "02",
    title: "Fix",
    line: "Stop the leaks first.",
    points: [
      "Check Meta's numbers against your real orders. Most accounts over-count.",
      "Switch off anything that spends without selling.",
      "Aim every campaign at sales, not clicks or visits.",
    ],
  },
  {
    n: "03",
    title: "Scale",
    line: "Grow while profit holds.",
    points: [
      "Raise budget about 5% on Monday, Wednesday and Friday while the numbers hold.",
      "Test new ideas inside the same campaign, next to the ads already winning.",
      "Judge every test on total sales, not the ad's own numbers.",
    ],
  },
];

const COMPARE = [
  {
    old: "Lots of campaigns, each with a small budget",
    now: "One campaign per offer, so Meta learns faster",
  },
  {
    old: "Interest targeting and stacked audiences",
    now: "Broad audience. The ad tells Meta who to find",
  },
  {
    old: "Ten versions of the same ad",
    now: "Different reasons to buy, one per type of customer",
  },
  {
    old: "Kill ads on day-one cost per sale",
    now: "Judge on where Meta moves the money and on real sales",
  },
];

// Splits a headline around its accent so it can render highlighted.
function Accent({ text, accent, className }: { text: string; accent?: string; className: string }) {
  if (!accent || !text.includes(accent)) return <>{text}</>;
  const [before, after] = text.split(accent);
  return (
    <>
      {before}
      <span className={className}>{accent}</span>
      {after}
    </>
  );
}

export default async function CaseStudiesPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  const filter: Filter = type === "d2c" || type === "leadgen" ? type : "all";
  const active = FILTERS.find((f) => f.key === filter)!;
  const hero = HERO[filter];
  const cases =
    filter === "all"
      ? CASE_STUDIES
      : filter === "d2c"
        ? D2C_ORDER.map((slug) => CASE_STUDIES.find((c) => c.slug === slug)!).filter(Boolean)
        : CASE_STUDIES.filter((c) => c.category === filter);

  return (
    <div className="bg-[#faf9f4] text-[#171712]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-light grid-bg-fade" />
        <div className="relative max-w-5xl mx-auto px-6 pt-16 pb-12 md:pt-24 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#e6e4d9] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#5c7a1e]">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-dim" />
            Case studies
          </span>
          <h1 className="font-display mt-6 text-4xl md:text-7xl font-bold tracking-tight text-balance">
            <Accent text={hero.title} accent={hero.accent} className="rounded-xl bg-lime px-2" />
          </h1>
          <p className="mt-5 text-lg text-[#636256] max-w-2xl mx-auto text-balance">
            {hero.sub}
          </p>

          {/* Filter dropdown */}
          <div className="mt-8 flex justify-center">
            <details className="group relative">
              <summary className="flex cursor-pointer list-none items-center gap-3 rounded-full border border-[#171712] bg-[#171712] px-6 py-3 text-sm font-semibold text-white [&::-webkit-details-marker]:hidden">
                <span className="text-white/60">Showing:</span> {active.label}
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="absolute left-1/2 z-20 mt-2 w-60 -translate-x-1/2 rounded-2xl border border-[#e6e4d9] bg-white p-2 text-left shadow-xl">
                {FILTERS.map((f) => (
                  <Link
                    key={f.key}
                    href={f.href}
                    className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-lime/40 ${
                      f.key === filter ? "bg-lime/30" : ""
                    }`}
                  >
                    {f.label}
                    {f.key === filter && <Check className="h-4 w-4" />}
                  </Link>
                ))}
              </div>
            </details>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 overflow-hidden rounded-2xl border border-[#e6e4d9] bg-white divide-x divide-y md:divide-y-0 divide-[#e6e4d9]">
            {STATS[filter].map((s) => (
              <div key={s.label} className="p-6">
                <p className="font-display text-3xl md:text-4xl font-bold">{s.value}</p>
                <p className="mt-1.5 text-xs uppercase tracking-wider text-[#636256]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="max-w-6xl mx-auto px-6 pb-20 md:pb-28">
        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((cs) => (
            <a
              key={cs.slug}
              href={cs.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-3xl border border-[#e6e4d9] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#171712]/10"
            >
              <div className="relative overflow-hidden bg-ink px-7 pt-7 pb-9 text-white">
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-lime">
                      {cs.client}
                    </p>
                    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/80">
                      {cs.platform}
                    </span>
                  </div>
                  <h2 className="font-display mt-5 text-3xl md:text-[2.5rem] font-bold leading-[1.05]">
                    <Accent text={cs.headline} accent={cs.accent} className="text-lime" />
                  </h2>
                  <p className="mt-3 text-sm text-white/60">
                    {cs.industry} · {cs.timeframe}
                  </p>
                </div>
              </div>

              <div className="flex flex-1 flex-col px-7 pb-7 pt-6">
                <p className="text-[15px] leading-relaxed text-[#636256]">{cs.summary}</p>
                <div className="mt-6 grid grid-cols-3 gap-3 rounded-2xl bg-[#faf9f4] p-4">
                  {cs.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="font-display text-xl md:text-2xl font-bold">{m.value}</p>
                      <p className="mt-0.5 text-xs leading-snug text-[#636256]">{m.label}</p>
                    </div>
                  ))}
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                  Read the full case study
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Method */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-lime">
            How we work
          </p>
          <h2 className="font-display mt-3 text-4xl md:text-6xl font-bold text-center">
            Plan. Fix. <span className="text-lime">Scale.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-lg text-white/60">
            Same three steps on every account, in this order.
          </p>
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {STEPS.map((s) => (
              <div
                key={s.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
              >
                <p className="font-display text-5xl font-bold text-lime">{s.n}</p>
                <h3 className="font-display mt-4 text-3xl font-bold">{s.title}</h3>
                <p className="mt-2 font-medium text-white/80">{s.line}</p>
                <ul className="mt-6 space-y-3.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-white/60">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Andromeda */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-[#5c7a1e]">
          Built for how Meta works now
        </p>
        <h2 className="font-display mt-3 text-3xl md:text-5xl font-bold text-center text-balance">
          Meta picks the buyer. <span className="rounded-xl bg-lime px-2">The ad tells it who.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[#636256]">
          Meta&apos;s newer delivery system (Andromeda) reads each ad and finds
          the people likely to buy from it. Most accounts are still set up the
          old way.
        </p>
        <div className="mt-12 overflow-hidden rounded-3xl border border-[#e6e4d9] bg-white">
          <div className="grid grid-cols-2 border-b border-[#e6e4d9] text-xs font-semibold uppercase tracking-wider">
            <div className="px-5 md:px-7 py-4 text-[#636256]">The old way</div>
            <div className="border-l border-[#e6e4d9] bg-lime px-5 md:px-7 py-4">How we run it</div>
          </div>
          {COMPARE.map((r) => (
            <div key={r.old} className="grid grid-cols-2 border-b border-[#f0efe6] last:border-b-0 text-sm md:text-base">
              <div className="flex gap-2.5 px-5 md:px-7 py-5 text-[#636256]">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-[#b45309]" />
                {r.old}
              </div>
              <div className="flex gap-2.5 border-l border-[#e6e4d9] px-5 md:px-7 py-5 font-medium">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#5c7a1e]" />
                {r.now}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20 md:pb-28">
        <div className="relative max-w-5xl mx-auto overflow-hidden rounded-3xl bg-ink px-6 py-16 md:py-20 text-center text-white">
          <div className="absolute inset-0 grid-bg-lime opacity-60" />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-balance">
              Want numbers like these on your account?
            </h2>
            <p className="mt-4 text-white/60 max-w-xl mx-auto">
              Book a call. We&apos;ll check your Meta numbers against your real
              sales and show you where the budget is leaking.
            </p>
            <Link
              href={filter === "d2c" ? "/d2c#get-started" : "/contact"}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime px-8 py-4 font-semibold text-ink hover:bg-lime-soft transition"
            >
              Book a free audit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
