import type { Metadata } from "next";
import {
  ArrowRight,
  FileText,
  ShieldCheck,
  BarChart3,
  Clapperboard,
  Filter,
  TrendingUp,
} from "lucide-react";
import SnapshotHero from "@/components/marketing/SnapshotHero";
import D2CAdShowcase from "@/components/marketing/D2CAdShowcase";
import LeadForm from "@/components/LeadForm";
import { CASE_STUDIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Paid Ads for D2C Brands",
  description:
    "BrandAlly runs Meta and Google ads for D2C brands in food, beverage, and lifestyle. Scale spend without wrecking margin, reported on profit not vanity ROAS, backed by a profit guarantee.",
};

const BAR_STATS = [
  { value: "20X", label: "ROAS on a scaled account" },
  { value: "4X", label: "Blended ROAS at $250K" },
  { value: "$25", label: "New-customer CAC" },
];

const SERVICES = [
  {
    icon: BarChart3,
    title: "Real profit tracking",
    body: "We rebuild your measurement so you see contribution and new-customer CAC, not just platform-reported ROAS that double-counts every sale.",
  },
  {
    icon: Clapperboard,
    title: "Creative that moves spend",
    body: "Hooks and angles that sound like your customer, tested fast. We scale the winners and kill the rest before they drain budget.",
  },
  {
    icon: Filter,
    title: "Funnel and offer, not just ads",
    body: "Most D2C accounts leak between the click and checkout. We fix the offer, the landing page, and the flow so paid traffic actually converts.",
  },
  {
    icon: TrendingUp,
    title: "Scale on what converts",
    body: "We push spend only where the numbers hold, so you grow revenue without watching your margin quietly disappear.",
  },
];

const STEPS = [
  {
    num: "1",
    title: "Free profit audit",
    body: "We review your account, tracking, and funnel, then send a written plan on where you're leaking margin and what we'd fix first. Yours whether you hire us or not.",
  },
  {
    num: "2",
    title: "Rebuild and launch",
    body: "We fix tracking, rework the account structure, and build creative that matches how your customer actually talks. You approve before it goes live.",
  },
  {
    num: "3",
    title: "Scale on profit",
    body: "Weekly reporting on contribution and CAC, not vanity ROAS. When the account is profitable, we scale what works.",
  },
];

const FAQS = [
  {
    q: "What does this cost?",
    a: "Your ad budget goes to the platforms and stays in your name. Our fee depends on scope, quoted after the free audit. No long lock-in.",
  },
  {
    q: "How does the profit guarantee work?",
    a: "We agree on a profit target in writing before we start. If we don't hit it in 60 days, the next month is on us. We set the target honestly together, based on your margins and current numbers.",
  },
  {
    q: "We tried agencies before and just paid for reports.",
    a: "You'll talk to the person running your account, not an account manager. Reporting is on profit and CAC, and if the numbers aren't moving, you're not locked in.",
  },
  {
    q: "Our margins are tight. Can paid ads still work?",
    a: "Tight margins are exactly why measurement matters. We model your contribution per order first, so we only scale spend where you actually make money on a new customer.",
  },
  {
    q: "What do you need from us?",
    a: "Access to your ad accounts and analytics, your real product costs, and a few hours up front to get the tracking right. We handle the rest.",
  },
];

const D2C_CASES = ["sports-games", "ski-apparel", "dog-products"]
  .map((slug) => CASE_STUDIES.find((c) => c.slug === slug))
  .filter(Boolean) as typeof CASE_STUDIES;

function Headline({ text, accent }: { text: string; accent: string }) {
  const [before, after] = text.split(accent);
  return (
    <>
      {before}
      <span className="rounded-lg bg-lime px-1.5">{accent}</span>
      {after}
    </>
  );
}

export default function D2CPage() {
  return (
    <div className="bg-[#faf9f4] text-[#171712] pb-20 md:pb-0">
      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 inset-x-0 z-40 md:hidden border-t border-[#e6e4d9] bg-[#faf9f4]/95 backdrop-blur px-4 py-3">
        <a
          href="#get-started"
          className="flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-3.5 font-bold text-[#171712]"
        >
          Book a free profit audit <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <SnapshotHero
        eyebrow="Paid ads for D2C brands"
        staticLine="Scale your spend."
        leadIn="Protect your"
        words={["margin", "profit", "AOV", "cash"]}
        subhead={
          <>
            Food, beverage, lifestyle. We rebuild your{" "}
            <span className="text-[#171712] underline decoration-lime underline-offset-4 decoration-2">
              Meta and Google ads
            </span>{" "}
            around profit, not vanity ROAS, so you grow without your CAC quietly
            eating the business.
          </>
        }
        primaryLabel="Book a free profit audit"
        secondaryHref="/case-studies"
        secondaryLabel="See D2C case studies →"
        trustLine="Real client accounts: 20X ROAS scaled, $250K at 4X, new customers at $25."
        snapshotTitle="D2C accounts we've scaled"
        snapshotStats={[
          { value: "20X", label: "ROAS on a scaled account ($430K)" },
          { value: "4X", label: "Blended ROAS at $250K revenue" },
          { value: "$25", label: "New-customer CAC" },
        ]}
        snapshotFootnote="Real client numbers, brands kept private. Full case studies on request."
      />

      {/* Proof strip */}
      <section className="bg-lime">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-[#171712]/60">
            Real D2C accounts we&apos;ve scaled
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            {BAR_STATS.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl md:text-5xl font-bold text-[#171712]">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-[#171712]/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <D2CAdShowcase />

      {/* Guarantee */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="rounded-3xl border border-[#171712] bg-[#171712] text-white p-8 md:p-14 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-lime">
            <ShieldCheck className="h-3.5 w-3.5" /> Our guarantee
          </span>
          <h2 className="font-display mt-6 text-3xl md:text-5xl font-bold max-w-3xl mx-auto">
            Hit your profit target in 60 days, or the next month is on us.
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-white/70">
            No discounts, no vanity metrics. We agree on a profit target in
            writing, tie ourselves to it, and go get it. Miss it and you
            don&apos;t pay for the month it takes to fix.
          </p>
        </div>
      </section>

      {/* What we fix */}
      <section className="max-w-6xl mx-auto px-6 pb-20 md:pb-28">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center">
          Why good D2C brands stall at the same ROAS.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[#636256]">
          We fix all four.
        </p>
        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-[#e6e4d9] bg-white p-7 hover:border-lime transition"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-lime">
                <s.icon className="w-5 h-5 text-[#171712]" />
              </span>
              <h3 className="font-display mt-4 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-[#636256]">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case studies */}
      <section className="max-w-6xl mx-auto px-6 pb-20 md:pb-28">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center">
          Real D2C accounts. Real profit.
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {D2C_CASES.map((c) => (
            <a
              key={c.slug}
              href={c.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-[#e6e4d9] bg-white p-7 hover:border-lime hover:-translate-y-0.5 transition"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-[#5c7a1e]">
                {c.industry}
              </span>
              <h3 className="font-display mt-3 text-2xl font-bold leading-tight">
                <Headline text={c.headline} accent={c.accent} />
              </h3>
              <p className="mt-3 text-sm text-[#636256] line-clamp-3">
                {c.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#f0efe6] pt-5">
                {c.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-display text-lg font-bold">
                      {m.value}
                    </div>
                    <div className="text-[11px] uppercase tracking-wider text-[#636256]">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#171712]">
                <FileText className="w-4 h-4" /> Read the case study
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-[#e6e4d9] bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center">
            How it works
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {STEPS.map((s) => (
              <div
                key={s.num}
                className="rounded-2xl border border-[#e6e4d9] bg-[#faf9f4] p-7"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lime font-display font-bold">
                  {s.num}
                </span>
                <h3 className="font-display mt-4 text-xl font-bold">
                  {s.title}
                </h3>
                <p className="mt-2 text-[#636256]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section
        id="get-started"
        className="max-w-6xl mx-auto px-6 py-20 md:py-28 scroll-mt-24"
      >
        <div className="grid md:grid-cols-5 gap-10 md:gap-14 items-start">
          <div className="md:col-span-2">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Let&apos;s find your leak.
            </h2>
            <p className="mt-4 text-lg text-[#636256]">
              Share a few details about your brand and where you&apos;re at with
              paid. We&apos;ll audit your account, tracking, and funnel, then
              send a written plan on where your margin is leaking and what
              we&apos;d fix first. Completely free.
            </p>
            <ul className="mt-6 space-y-3 text-[#636256]">
              {[
                "No retainer pitch on the first call, just a real conversation",
                "You'll hear back within 1 business day",
                "Your ad accounts stay in your name, always",
              ].map((li) => (
                <li key={li} className="flex gap-3">
                  <ArrowRight className="w-5 h-5 text-[#5c7a1e] shrink-0 mt-0.5" />
                  {li}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3 rounded-3xl border border-[#e6e4d9] bg-white p-7 md:p-9">
            <LeadForm
              submitLabel="Book my free profit audit"
              defaultType="D2C brand"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[#e6e4d9] bg-white">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-24">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center">
            Questions we get
          </h2>
          <div className="mt-10 space-y-4">
            {FAQS.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-[#e6e4d9] bg-[#faf9f4] p-6"
              >
                <summary className="cursor-pointer list-none font-display font-semibold flex items-center justify-between gap-4">
                  {f.q}
                  <ArrowRight className="w-4 h-4 text-[#5c7a1e] transition group-open:rotate-90" />
                </summary>
                <p className="mt-3 text-[#636256]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
