import type { Metadata } from "next";
import {
  MapPin,
  Target,
  CalendarCheck,
  TrendingUp,
  ArrowRight,
  FileText,
  PawPrint,
} from "lucide-react";
import DogHero from "@/components/dogs/DogHero";
import DogLeadForm from "@/components/dogs/DogLeadForm";

export const metadata: Metadata = {
  title: "Paid Ads for Dog Board & Train Businesses",
  description:
    "BrandAlly runs Meta and Google ads for dog trainers and board & train facilities. Qualified local dog owners on your calendar, backed by real dog-industry results.",
};

const STATS = [
  { value: "$180K", label: "Revenue in 3 months" },
  { value: "3X", label: "ROAS" },
  { value: "$26", label: "Blended CAC" },
];

const SERVICES = [
  {
    icon: MapPin,
    title: "Local demand, on tap",
    body: "Meta and Google campaigns aimed at dog owners in your actual service area. Not clicks from three states away.",
  },
  {
    icon: Target,
    title: "Creative that sells the transformation",
    body: "Owners don't buy kennels and logos. They buy the calm, off-leash dog at the end. Our ads show the after.",
  },
  {
    icon: CalendarCheck,
    title: "Consults, not clicks",
    body: "Every campaign points to a booked evaluation call. We track cost per consult, so you know exactly what a new client costs you.",
  },
  {
    icon: TrendingUp,
    title: "Scale without the chaos",
    body: "Once slots fill, we help you raise prices, open a waitlist, and expand into puppy programs or day training.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Free growth plan",
    body: "Tell us about your business. We review your ads (if you're running any), your local market, and your competitors. You get a written plan whether you hire us or not.",
  },
  {
    num: "02",
    title: "Launch",
    body: "We build the campaigns, write the ads, and set up tracking down to the booked consult. You approve everything before it goes live.",
  },
  {
    num: "03",
    title: "Fill and scale",
    body: "Weekly reporting on what a consult costs and which ads book them. When your board & train fills, we scale what works.",
  },
];

const FAQS = [
  {
    q: "We're a small facility. Is this for us?",
    a: "If you have room for more dogs and a program worth selling, yes. Small facilities often see the fastest impact because a handful of extra board & train bookings changes the whole month.",
  },
  {
    q: "Will this replace our referrals?",
    a: "No, and it shouldn't. Referrals are your best clients. Ads sit on top of them so your calendar doesn't depend on word of mouth alone.",
  },
  {
    q: "What do you need from us?",
    a: "Footage and photos of real dogs you've trained, a rough idea of your capacity, and someone who answers consult requests fast. We handle the rest.",
  },
  {
    q: "Do you work with dog product brands too?",
    a: "Yes. The case study on this page is a dog training products brand we scaled to $180K at 3X ROAS. Dogs are the niche, not just the service side.",
  },
];

export default function DogTrainingPage() {
  return (
    <>
      <DogHero />

      {/* Proof strip */}
      <section className="border-y border-line bg-surface/40">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted">
            A dog brand we run
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl md:text-5xl font-bold text-lime">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why only dogs */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-lime">
              <PawPrint className="h-3.5 w-3.5" /> Why only dogs
            </span>
            <h2 className="font-display mt-6 text-3xl md:text-5xl font-bold text-white">
              Because we love them. And because focus wins.
            </h2>
          </div>
          <div className="space-y-5 text-lg text-muted">
            <p>
              Most agencies run ads for anyone with a budget. A dentist on
              Monday, a dog trainer on Tuesday. The ads end up interchangeable.
            </p>
            <p>
              We picked one lane: dogs. Board &amp; train, day training, puppy
              programs, dog products. That focus means we already know what a
              high-ticket board &amp; train ad needs to show (the
              transformation, not the kennel), which objections stop owners
              from booking, and what separates a tire-kicker from a buyer.
            </p>
            <p className="text-white">
              You shouldn&apos;t have to teach your agency your industry. Ours
              already lives in it.
            </p>
          </div>
        </div>
      </section>

      {/* What we fix */}
      <section className="border-t border-line bg-surface/30">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white text-center">
            What we fix
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted">
            Four things stand between a good trainer and a full calendar. We
            handle all four.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-line bg-surface/60 p-7 hover:border-lime/40 transition"
              >
                <s.icon className="w-6 h-6 text-lime" />
                <h3 className="font-display mt-4 text-xl font-bold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <div className="rounded-3xl border border-line bg-surface/60 p-8 md:p-12 relative overflow-hidden">
          <div className="pointer-events-none absolute -top-20 right-0 h-64 w-64 rounded-full bg-lime/[0.08] blur-3xl" />
          <span className="text-xs font-semibold uppercase tracking-wider text-lime">
            Case study · D2C dog training brand
          </span>
          <h2 className="font-display mt-4 text-3xl md:text-4xl font-bold text-white max-w-xl">
            Stuck at 1.5X ROAS. Scaled to{" "}
            <span className="text-lime">$180K at 3X</span> in 3 months.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            A dog training products brand came to us with Meta underperforming
            and Google untouched. We rebuilt the campaign structure, matched
            the ads to how dog owners actually talk about their problems, and
            scaled spend only where it stayed profitable.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-bold text-white">
                  {s.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-muted">
                  {s.label}
                </div>
              </div>
            ))}
            <a
              href="/case-studies/dog-products.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-semibold text-ink hover:bg-lime-soft transition"
            >
              <FileText className="w-4 h-4" /> Read the case study
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-line bg-surface/30">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white text-center">
            How it works
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {STEPS.map((s) => (
              <div
                key={s.num}
                className="rounded-2xl border border-line bg-surface/60 p-7"
              >
                <div className="font-display text-4xl font-bold text-lime/50">
                  {s.num}
                </div>
                <h3 className="font-display mt-3 text-xl font-bold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section id="get-started" className="max-w-5xl mx-auto px-6 py-20 md:py-28 scroll-mt-24">
        <div className="grid md:grid-cols-5 gap-10 md:gap-14 items-start">
          <div className="md:col-span-2">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Tell us about your dog business.
            </h2>
            <p className="mt-4 text-lg text-muted">
              We&apos;ll review your local market and current marketing, then
              send you a written growth plan. Free, and yours to keep either
              way.
            </p>
            <ul className="mt-6 space-y-3 text-muted">
              <li className="flex gap-3">
                <ArrowRight className="w-5 h-5 text-lime shrink-0 mt-0.5" />
                No retainers pitched on the first call
              </li>
              <li className="flex gap-3">
                <ArrowRight className="w-5 h-5 text-lime shrink-0 mt-0.5" />
                Response within 1 business day
              </li>
              <li className="flex gap-3">
                <ArrowRight className="w-5 h-5 text-lime shrink-0 mt-0.5" />
                Dog businesses only. That&apos;s the whole point.
              </li>
            </ul>
          </div>
          <div className="md:col-span-3 rounded-3xl border border-line bg-surface/60 p-7 md:p-9">
            <DogLeadForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-surface/30">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-24">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white text-center">
            Questions we get
          </h2>
          <div className="mt-10 space-y-4">
            {FAQS.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-line bg-surface/60 p-6"
              >
                <summary className="cursor-pointer list-none font-display font-semibold text-white flex items-center justify-between gap-4">
                  {f.q}
                  <ArrowRight className="w-4 h-4 text-lime transition group-open:rotate-90" />
                </summary>
                <p className="mt-3 text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
