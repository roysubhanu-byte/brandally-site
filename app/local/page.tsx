import type { Metadata } from "next";
import {
  ArrowRight,
  FileText,
  ShieldCheck,
  MapPin,
  Target,
  CalendarCheck,
  TrendingUp,
} from "lucide-react";
import SnapshotHero from "@/components/marketing/SnapshotHero";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Paid Ads for Local Service Businesses",
  description:
    "BrandAlly runs Meta and Google ads for local service businesses (cleaning, roofing, snow removal, landscaping, boarding, grooming). Booked jobs on your calendar, backed by a new-client guarantee.",
};

const BAR_STATS = [
  { value: "1,240", label: "Booked conversions for one local business" },
  { value: "$11", label: "Cost per booked conversion" },
  { value: "$0.69", label: "Average cost per click" },
];

const SERVICES = [
  {
    icon: MapPin,
    title: "Local demand, on tap",
    body: "Meta and Google ads aimed at people nearby who are actively looking for what you do. Not random clicks from the other side of the country.",
  },
  {
    icon: Target,
    title: "Creative that sells the outcome",
    body: "Your customers aren't buying a service. They're buying a clean house, a dry roof, a cleared driveway. Our ads sell that result, not a list of features.",
  },
  {
    icon: CalendarCheck,
    title: "Booked jobs, not clicks",
    body: "Clicks don't pay your crew. Booked jobs do. Every campaign is built to put real appointments on your calendar, and we track cost per booked job so you always know what a customer costs.",
  },
  {
    icon: TrendingUp,
    title: "Scale without the chaos",
    body: "Once your schedule fills, we help you raise prices with confidence, build a waitlist, and expand into new service areas without adding stress to your operation.",
  },
];

const STEPS = [
  {
    num: "1",
    title: "Free growth plan",
    body: "Tell us about your business. We review your ads (if you're running any), your local market, and your competitors. You get a written plan whether you hire us or not.",
  },
  {
    num: "2",
    title: "Launch",
    body: "We build the campaigns, write the ads, and set up tracking down to the booked job. You approve everything before it goes live.",
  },
  {
    num: "3",
    title: "Fill and scale",
    body: "Weekly reporting on what a job costs and which ads book them. When your calendar fills, we scale what works.",
  },
];

const FAQS = [
  {
    q: "What does this cost?",
    a: "The growth plan is free, with no retainer pitch on the call. If you decide to work with us after, we quote a flat monthly fee up front based on your market and goals. Ad accounts stay in your name, so your data and audiences are always yours.",
  },
  {
    q: "How does the 100-clients guarantee work?",
    a: "We agree on the target and the terms in writing before we start. If we don't book you 100 new clients in 60 days, we keep working at no extra cost until we do. It's tied to your capacity and market, so we set it honestly together.",
  },
  {
    q: "We tried ads before and lost money. Why would this be different?",
    a: "Usually the money went to clicks nobody tracked. We fix tracking before we spend a dollar, so every booking traces back to the ad that caused it. The business in our case study came to us in exactly that spot and now books at $11 a conversion.",
  },
  {
    q: "We're a small operation. Is this for us?",
    a: "If you have capacity for more jobs and do good work, absolutely. Small businesses often see the fastest turnaround, because a handful of extra jobs a month changes your whole revenue picture.",
  },
  {
    q: "What do you need from us?",
    a: "A rough idea of your current capacity, real photos or footage of your work, and someone who answers inquiries fast. We handle everything else.",
  },
];

export default function LocalPage() {
  return (
    <div className="bg-[#faf9f4] text-[#171712] pb-20 md:pb-0">
      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 inset-x-0 z-40 md:hidden border-t border-[#e6e4d9] bg-[#faf9f4]/95 backdrop-blur px-4 py-3">
        <a
          href="#get-started"
          className="flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-3.5 font-bold text-[#171712]"
        >
          Get my free growth plan <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <SnapshotHero
        eyebrow="Paid ads for local service businesses"
        staticLine="You run the business."
        leadIn="We book the"
        words={["jobs", "calls", "estimates", "appointments"]}
        subhead={
          <>
            Cleaning, roofing, snow removal, landscaping, boarding, grooming. We
            run{" "}
            <span className="text-[#171712] underline decoration-lime underline-offset-4 decoration-2">
              Meta and Google ads
            </span>{" "}
            that put local customers who are ready to buy on your calendar.
          </>
        }
        primaryLabel="Get my free growth plan"
        secondaryHref="/case-studies/dog-local.pdf"
        secondaryLabel="See a local case study →"
        trustLine="Free plan, no retainer pitch on the call. 1,240 booked conversions for one local business."
        snapshotTitle="A local business we run ads for"
        snapshotStats={[
          { value: "1,240", label: "Booked conversions in 10 months" },
          { value: "$11", label: "Cost per booked conversion" },
          { value: "$0.69", label: "Average cost per click" },
        ]}
        snapshotFootnote="Real client numbers, brand kept private. Full case study on request."
      />

      {/* Proof strip */}
      <section className="bg-lime">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-[#171712]/60">
            A real local business we run ads for
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

      {/* Guarantee */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="rounded-3xl border border-[#171712] bg-[#171712] text-white p-8 md:p-14 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-lime">
            <ShieldCheck className="h-3.5 w-3.5" /> Our guarantee
          </span>
          <h2 className="font-display mt-6 text-3xl md:text-5xl font-bold max-w-3xl mx-auto">
            100 new clients in 60 days, or we work for free until you get them.
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-white/70">
            We tie ourselves to the one number that matters to you: booked
            clients. We set the target together, in writing, based on your
            capacity and market. If we miss it, we keep going at no extra cost.
          </p>
        </div>
      </section>

      {/* What we fix */}
      <section className="max-w-6xl mx-auto px-6 pb-20 md:pb-28">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center">
          Four reasons good local businesses still have gaps in the schedule.
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

      {/* Case study */}
      <section className="max-w-6xl mx-auto px-6 pb-20 md:pb-28">
        <div className="rounded-3xl border border-[#e6e4d9] bg-white p-8 md:p-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#5c7a1e]">
            Case study · Local business
          </span>
          <h2 className="font-display mt-4 text-3xl md:text-4xl font-bold max-w-2xl">
            Invisible on Maps to{" "}
            <span className="rounded-xl bg-lime px-2">1,240</span> conversions
            at $11 each.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-[#636256]">
            This business had bookings running through their software, but none
            of that data reached Google, and brand terms ate 80% of the budget
            catching people who were already customers. We fixed tracking first,
            put them on Search and Maps with Performance Max, then layered Meta a
            month later. Ten months in, the two engines feed each other.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            {BAR_STATS.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-bold">{s.value}</div>
                <div className="text-xs uppercase tracking-wider text-[#636256]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <a
            href="/case-studies/dog-local.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#171712] px-6 py-3 font-semibold text-white hover:bg-[#171712]/85 transition"
          >
            <FileText className="w-4 h-4" /> Read the case study
          </a>
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
              Let&apos;s look at your market together.
            </h2>
            <p className="mt-4 text-lg text-[#636256]">
              Share a few details about your business. We&apos;ll look at your
              local competition, your current ads (if any), and the demand in
              your area, then send you a written plan with exactly what
              we&apos;d do. Completely free.
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
              submitLabel="Send me the growth plan"
              defaultType="Local service business"
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
