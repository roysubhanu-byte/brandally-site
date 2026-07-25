import Link from "next/link";
import {
  ArrowRight,
  FileText,
  ShieldCheck,
  MessageSquare,
  Users,
  Zap,
  MapPin,
  ShoppingBag,
  PawPrint,
  Target,
  Clapperboard,
  MousePointerClick,
  TrendingUp,
} from "lucide-react";
import SnapshotHero from "@/components/marketing/SnapshotHero";
import LeadForm from "@/components/LeadForm";
import { CASE_STUDIES, TESTIMONIALS } from "@/lib/constants";

const PROOF = [
  { value: "$3.3M+", label: "Revenue driven" },
  { value: "20X", label: "Best ROAS" },
  { value: "$4.53", label: "Lowest cost per lead" },
  { value: "1,240", label: "Local bookings" },
];

const PATHS = [
  {
    icon: MapPin,
    title: "Local service businesses",
    body: "Cleaning, roofing, snow removal, landscaping, boarding, grooming. We fill your calendar with booked jobs, not clicks.",
    href: "#get-started",
    cta: "Get my free plan",
  },
  {
    icon: ShoppingBag,
    title: "D2C brands",
    body: "Food, beverage, lifestyle. We scale spend without wrecking your margin, and report on profit, not vanity ROAS.",
    href: "#get-started",
    cta: "Get my free plan",
  },
  {
    icon: PawPrint,
    title: "Dog businesses",
    body: "Trainers, board-and-train, daycare, grooming. We've booked 1,240 local conversions for one facility at $11 each, and built you a dedicated page.",
    href: "/dog-training",
    cta: "See the dog page",
  },
];

const WHY = [
  { value: "21 years", label: "Paid media across the team" },
  { value: "$5M", label: "Dubai agency scaled from scratch" },
  { value: "$28M", label: "Series A we helped a SaaS raise (Sept 2025)" },
  { value: "$1M+", label: "Revenue milestones hit for clients" },
];

const LEVERS = [
  {
    icon: Target,
    title: "Audience",
    body: "The right people, in the right place, at the moment they're ready to buy. No wasted spend on clicks that never convert.",
  },
  {
    icon: Clapperboard,
    title: "Creative",
    body: "Ads that sound like your customer, not a brochure. We test hooks fast and scale the ones that book jobs and sales.",
  },
  {
    icon: MousePointerClick,
    title: "Conversion",
    body: "We fix the leaks between the click and the sale, so more of the traffic you pay for actually turns into revenue.",
  },
  {
    icon: TrendingUp,
    title: "Scaling",
    body: "Once the account is profitable, we scale spend without breaking what works. Growth you can see in the P&L.",
  },
];

const FAQS = [
  {
    q: "What does this cost?",
    a: "Your ad budget goes straight to the platforms and stays in your name. Our fee depends on scope, and we quote it after the free audit so you're not guessing. No long lock-in.",
  },
  {
    q: "We tried ads before and lost money. Why would this be different?",
    a: "Usually the ads weren't the problem. Tracking was wrong, the offer was soft, or spend scaled before the account was ready. The audit finds which one it was for you before you spend another dollar.",
  },
  {
    q: "How does the guarantee actually work?",
    a: "We agree on the target and the terms in writing before we start. For local service businesses that's 100 new clients in 60 days. For D2C it's your agreed profit target. If we miss it, we keep working at no extra cost until we hit it.",
  },
  {
    q: "Who will I actually be talking to?",
    a: "The person running your account. No account managers relaying messages, no middle layer. Fewer people, faster decisions.",
  },
  {
    q: "Do you lock me into a long contract?",
    a: "No. If we're not moving your numbers, you shouldn't be stuck with us. We'd rather earn the next month than trap you in a year.",
  },
];

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

// Local and service work first, then D2C proof.
const HOME_CASES = [
  "dog-local",
  "construction-tech",
  "sports-games",
  "ski-apparel",
  "dog-products",
  "coaching",
]
  .map((slug) => CASE_STUDIES.find((c) => c.slug === slug))
  .filter(Boolean) as typeof CASE_STUDIES;

type HomeTestimonial = {
  name: string;
  role: string;
  text: string;
  result?: string;
  rating: number;
};
const HOME_TESTIMONIALS = (TESTIMONIALS as HomeTestimonial[])
  .filter((t) => t.result)
  .slice(0, 4);

export default function HomePage() {
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
        eyebrow="AI-enabled performance marketing. Built for profit."
        staticLine="You run the business."
        leadIn="We fill the"
        words={["calendar", "pipeline", "order book", "schedule"]}
        subhead={
          <>
            We run and scale your{" "}
            <span className="text-[#171712] underline decoration-lime underline-offset-4 decoration-2">
              Meta and Google ads
            </span>{" "}
            with one goal: more profit, sooner. You talk straight to the person
            in your account, never a chain of account managers.
          </>
        }
        primaryLabel="Book a free profit audit"
        secondaryHref="/case-studies"
        secondaryLabel="See real accounts we run →"
        trustLine="21 years across the team. $3.3M+ tracked revenue. Google and Meta certified."
        snapshotTitle="Results we've driven"
        snapshotStats={[
          { value: "20X", label: "Best ROAS on a D2C account" },
          { value: "$11", label: "Cost per booked local conversion" },
          { value: "$4.53", label: "Lowest cost per lead" },
        ]}
        snapshotFootnote="Real client numbers, brands kept private. Ask for the full case studies."
      />

      {/* Proof strip */}
      <section className="bg-lime">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-[#171712]/60">
            Real accounts we run, real numbers
          </p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {PROOF.map((s) => (
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
        <div className="rounded-3xl border border-[#171712] bg-[#171712] text-white p-8 md:p-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-lime">
            <ShieldCheck className="h-3.5 w-3.5" /> Our guarantee
          </span>
          <h2 className="font-display mt-6 text-3xl md:text-5xl font-bold max-w-3xl">
            We only win when you do.
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-white/70">
            Most agencies bill you whether the phone rings or not. We don&apos;t.
            We tie ourselves to one number that matters to your business, then
            go get it.
          </p>
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <div className="text-sm font-semibold uppercase tracking-wider text-lime">
                Local service businesses
              </div>
              <p className="mt-2 text-white/85">
                If we don&apos;t book you 100 new clients in 60 days, we keep
                working for free until we do.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <div className="text-sm font-semibold uppercase tracking-wider text-lime">
                D2C brands
              </div>
              <p className="mt-2 text-white/85">
                If we don&apos;t hit your agreed profit target in 60 days, the
                next month is on us.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm text-white/60">
            No discounts either. You get the full stack up front: a market and
            competitor teardown, done-for-you creative, and your tracking
            rebuilt right, all inside the first 30 days. Terms agreed in writing
            before we start.
          </p>
        </div>
      </section>

      {/* Pick your path */}
      <section className="max-w-6xl mx-auto px-6 pb-20 md:pb-28">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center">
          Built for businesses where every lead counts.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[#636256]">
          Pick the path that fits you. Each one has its own plan, its own proof,
          and the same person running your ads.
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {PATHS.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="group rounded-2xl border border-[#e6e4d9] bg-white p-7 hover:border-lime hover:-translate-y-0.5 transition"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-lime">
                <p.icon className="w-5 h-5 text-[#171712]" />
              </span>
              <h3 className="font-display mt-4 text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-[#636256]">{p.body}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 font-semibold text-[#5c7a1e]">
                {p.cta}{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Anti-agency */}
      <section className="border-y border-[#e6e4d9] bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#e6e4d9] bg-[#faf9f4] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#5c7a1e]">
              The anti-agency model
            </span>
            <h2 className="font-display mt-6 text-3xl md:text-5xl font-bold">
              No account managers. Just the person running your ads.
            </h2>
            <p className="mt-5 text-lg text-[#636256]">
              When you email us, the reply comes from the operator inside your
              account, not a middle layer relaying messages. That&apos;s the
              whole model. Fewer people, less telephone, faster decisions.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                icon: MessageSquare,
                t: "A direct line to your media buyer",
                d: "You talk to the person making the changes, not a coordinator.",
              },
              {
                icon: Users,
                t: "Weekly numbers you can actually read",
                d: "Cost per booked job or sale, not likes and impressions.",
              },
              {
                icon: Zap,
                t: "Changes made same day, not next sprint",
                d: "Something's off? It gets fixed now, not after three handoffs.",
              },
            ].map((i) => (
              <div
                key={i.t}
                className="flex gap-4 rounded-2xl border border-[#e6e4d9] bg-[#faf9f4] p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lime">
                  <i.icon className="w-5 h-5 text-[#171712]" />
                </span>
                <div>
                  <div className="font-display font-bold">{i.t}</div>
                  <p className="mt-1 text-[#636256]">{i.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center">
          We&apos;ve done this at real scale.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[#636256]">
          Google and Meta ads are what we do all day. Not one service on a menu
          of ten.
        </p>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-[#e6e4d9] bg-white p-7 text-center"
            >
              <div className="font-display text-4xl md:text-5xl font-bold text-[#171712]">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-[#636256]">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section className="border-y border-[#e6e4d9] bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center">
            We find the constraint before we touch your budget.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[#636256]">
            Most accounts aren&apos;t broken everywhere. They&apos;re broken in
            one place. We check all four levers, find the one holding you back,
            and fix that first.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {LEVERS.map((l) => (
              <div
                key={l.title}
                className="rounded-2xl border border-[#e6e4d9] bg-[#faf9f4] p-7"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-lime">
                  <l.icon className="w-5 h-5 text-[#171712]" />
                </span>
                <h3 className="font-display mt-4 text-xl font-bold">
                  {l.title}
                </h3>
                <p className="mt-2 text-[#636256]">{l.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Real accounts. Real revenue.
          </h2>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1.5 font-semibold text-[#5c7a1e] hover:underline"
          >
            See all case studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {HOME_CASES.map((c) => (
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

      {/* Testimonials */}
      <section className="border-y border-[#e6e4d9] bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center">
            What clients say
          </h2>
          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {HOME_TESTIMONIALS.map((t) => (
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

      {/* Lead form */}
      <section
        id="get-started"
        className="max-w-6xl mx-auto px-6 py-20 md:py-28 scroll-mt-24"
      >
        <div className="grid md:grid-cols-5 gap-10 md:gap-14 items-start">
          <div className="md:col-span-2">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Let&apos;s find the money you&apos;re leaving on the table.
            </h2>
            <p className="mt-4 text-lg text-[#636256]">
              Book a free profit audit. We&apos;ll look at your account, tell you
              the one thing holding it back, and show you what we&apos;d do
              first. No pitch deck, no obligation.
            </p>
            <ul className="mt-6 space-y-3 text-[#636256]">
              {[
                "You hear back within 1 business day",
                "No retainer pitch on the first call, just a real conversation",
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
            <LeadForm submitLabel="Book my free profit audit" />
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
