import type { Metadata } from "next";
import { ArrowRight, FileText } from "lucide-react";
import SnapshotHero from "@/components/marketing/SnapshotHero";
import D2CAdJobs from "@/components/marketing/D2CAdJobs";
import LeadForm from "@/components/LeadForm";
import { CASE_STUDIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Paid Ads for D2C Brands",
  description:
    "BrandAlly runs Meta ads for D2C brands. Real case studies, the real ads we run, and how we scale spend while profit per order holds.",
};

const SCALE_STEPS = [
  {
    num: "1",
    title: "What do you keep per order?",
    body: "After product, shipping and ads. We call it GPT, gross profit per order, and we add it as a column in Ads Manager. Positive and holding, we scale. Negative, we kill the ad, even if it's a closing ad.",
  },
  {
    num: "2",
    title: "Are new customers going up?",
    body: "We check Shopify, not just Meta. Spend up and new customers up, we scale. Revenue up only from returning customers? That's a red flag. You're paying Meta for people who'd buy anyway.",
  },
  {
    num: "3",
    title: "Are the four ads working together?",
    body: "Campaign first, then frequency by ad set, then single ads. Winners get broken down by hook rate and hold rate, and we build new ads from the winning piece.",
  },
  {
    num: "4",
    title: "Does it all run on one ad?",
    body: "If one ad or one product stops and the business tanks, that's not scale. Budget goes up in small steps, only while the numbers above hold.",
  },
];

const WEEKLY = [
  { label: "Gross profit per order", note: "What you keep after product, shipping and ads" },
  { label: "Cost per new customer", note: "Not repeat buyers Meta takes credit for" },
  { label: "Blended cost per sale", note: "All ad spend divided by all orders" },
];

const FAQS = [
  {
    q: "What does this cost?",
    a: "Your ad budget goes straight to Meta, in your name. Our fee depends on how much we're running, and we'll tell you on the first call. No long contract.",
  },
  {
    q: "We tried agencies before and just got reports.",
    a: "You talk to the person running your account, not an account manager. The weekly numbers are profit per order and cost per new customer, so you can see if it's working.",
  },
  {
    q: "Our margins are tight. Can paid ads still work?",
    a: "That's why we start with the number. If a sale at your current cost doesn't make money, we'll tell you before you spend more, and fix that first (offer, bundle, page).",
  },
  {
    q: "What do you need from us?",
    a: "Access to your ad accounts and analytics, your real product costs, and a few hours up front to get tracking right. We handle the rest.",
  },
];

type Case = {
  slug: string;
  pdf?: string;
  industry: string;
  headline: string;
  accent: string;
  timeframe: string;
  summary: string;
  metrics: { value: string; label: string }[];
};

const D2C_CASES = ["baby-formula", "sports-games", "ski-apparel", "dog-products"]
  .map((slug) => CASE_STUDIES.find((c) => c.slug === slug))
  .filter(Boolean) as Case[];

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
          Book a call <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <SnapshotHero
        eyebrow="Meta ads for D2C brands"
        staticLine="Scale your spend."
        leadIn="Keep your"
        words={["margin", "profit", "cash"]}
        subhead={
          <>
            We&apos;re founders who&apos;ve built and scaled our own
            businesses. We run your Meta ads on{" "}
            <span className="text-[#171712] underline decoration-lime underline-offset-4 decoration-2">
              profit per order
            </span>
            , not the ROAS Meta shows you.
          </>
        }
        primaryLabel="Book a call"
        secondaryHref="#ads"
        secondaryLabel="See the ads we run ↓"
        trustLine="Real client accounts: $430K at 20X ROAS, $250K at 4X, new customers at $25."
        snapshotTitle="D2C accounts we've scaled"
        snapshotStats={[
          { value: "20X", label: "ROAS on a scaled account ($430K)" },
          { value: "4X", label: "Blended ROAS at $250K revenue" },
          { value: "$25", label: "New-customer CAC" },
        ]}
        snapshotFootnote="Real client numbers, brands kept private."
      />

      {/* Case studies */}
      <section className="border-y border-[#e6e4d9] bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center text-balance">
            D2C brands we&apos;ve scaled.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[#636256]">
            Where each one was stuck, what we changed, and the numbers after.
          </p>
          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {D2C_CASES.map((c) => (
              <a
                key={c.slug}
                href={c.pdf ?? "#get-started"}
                target={c.pdf ? "_blank" : undefined}
                rel={c.pdf ? "noopener noreferrer" : undefined}
                className="group flex flex-col rounded-2xl border border-[#e6e4d9] bg-[#faf9f4] p-7 hover:border-lime hover:-translate-y-0.5 transition"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-[#5c7a1e]">
                  {c.industry}
                </span>
                <h3 className="font-display mt-3 text-2xl font-bold leading-tight">
                  <Headline text={c.headline} accent={c.accent} />
                </h3>
                <p className="mt-1 text-sm font-semibold text-[#636256]">
                  {c.timeframe}
                </p>
                <p className="mt-3 text-sm text-[#636256]">{c.summary}</p>
                <div className="mt-auto pt-5">
                  <div className="flex flex-wrap gap-x-6 gap-y-3 border-t border-[#e6e4d9] pt-5">
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
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#171712] group-hover:underline">
                    <FileText className="w-4 h-4" />{" "}
                    {c.pdf ? "Read the full case study" : "Ask us for the full numbers"}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Ads by job */}
      <D2CAdJobs />

      {/* How we scale on profit */}
      <section className="bg-[#171712] text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center text-balance">
            Before we scale, we fix the setup.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-white/70">
            When you double spend, Meta has to find people who&apos;ve never
            heard of you. They aren&apos;t ready to buy yet, and you pay while
            they warm up. That&apos;s why profit shrinks. So we answer four
            questions first.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SCALE_STEPS.map((s) => (
              <div
                key={s.num}
                className="rounded-2xl border border-white/15 bg-white/[0.04] p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lime font-display font-bold text-[#171712]">
                  {s.num}
                </span>
                <h3 className="font-display mt-4 text-xl font-bold">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-white/70">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-white/15 p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-lime">
              What you see every week
            </p>
            <div className="mt-5 grid sm:grid-cols-3 gap-6">
              {WEEKLY.map((w) => (
                <div key={w.label}>
                  <div className="font-display text-lg font-bold">{w.label}</div>
                  <div className="mt-1 text-sm text-white/60">{w.note}</div>
                </div>
              ))}
            </div>
            <p className="mt-6 border-t border-white/10 pt-5 text-sm text-white/60">
              Meta&apos;s dashboard and your store rarely match. We go by
              Shopify.
            </p>
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
              Let&apos;s look at your account.
            </h2>
            <p className="mt-4 text-lg text-[#636256]">
              Tell us about your brand and where paid ads are at right now.
              We&apos;ll get back to you to set up a call.
            </p>
            <ul className="mt-6 space-y-3 text-[#636256]">
              {[
                "You talk to the person who'd run your account",
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
            <LeadForm submitLabel="Book a call" defaultType="D2C brand" />
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
