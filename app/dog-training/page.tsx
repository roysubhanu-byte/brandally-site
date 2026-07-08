import type { Metadata } from "next";
import Image from "next/image";
import {
  MapPin,
  Target,
  CalendarCheck,
  TrendingUp,
  ArrowRight,
  FileText,
} from "lucide-react";
import DogHero from "@/components/dogs/DogHero";
import DogLeadForm from "@/components/dogs/DogLeadForm";
import DogAdShowcase from "@/components/dogs/DogAdShowcase";
import DogTestimonials from "@/components/dogs/DogTestimonials";

export const metadata: Metadata = {
  title: "Paid Ads for Dog Board & Train Businesses",
  description:
    "BrandAlly runs Meta and Google ads for dog trainers and board & train facilities. Qualified local dog owners on your calendar, backed by real dog-industry results.",
};

const STATS = [
  { value: "$180K", label: "New revenue in 90 days" },
  { value: "$26", label: "Cost per new customer" },
  { value: "90 days", label: "From stuck ads to scaled and profitable" },
];

const SERVICES = [
  {
    icon: MapPin,
    title: "Local demand, on tap",
    body: "Meta and Google ads aimed at local pet owners who are actively looking for training, boarding, daycare, or grooming. Not random clicks from people who live too far away to ever show up.",
  },
  {
    icon: Target,
    title: "Creative that sells the transformation",
    body: "Dog owners aren't really paying for board & train. They're paying to enjoy walks again, host guests without chaos, and stop feeling embarrassed at the park. Our ads sell that after, not the facility.",
  },
  {
    icon: CalendarCheck,
    title: "Bookings, not clicks",
    body: "Clicks don't pay your bills. Booked evaluation calls do. Every campaign is built to put qualified dog owners on your calendar, and we track cost per booked consult (not likes or clicks) so you always know what a new client costs you.",
  },
  {
    icon: TrendingUp,
    title: "Scale without the chaos",
    body: "Once your board & train slots are full, the real work starts. We help you build a waitlist, raise your prices with confidence, and expand into puppy programs or day training without adding stress to your operation.",
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
    body: "We build the campaigns, write the ads, and set up tracking down to the booked consult. You approve everything before it goes live.",
  },
  {
    num: "3",
    title: "Fill and scale",
    body: "Weekly reporting on what a consult costs and which ads book them. When your board & train fills, we scale what works.",
  },
];

const LOCAL_STATS = [
  { value: "1,240", label: "Google conversions in 10 months" },
  { value: "$11", label: "Cost per conversion" },
  { value: "118", label: "Meta training leads at $35 each" },
];

const FAQS = [
  {
    q: "We're a small facility. Is this for us?",
    a: "If you have capacity for more dogs and a solid program, absolutely. Small facilities often see the fastest turnaround, because three or four extra board & train bookings in a month changes your whole revenue picture.",
  },
  {
    q: "Will this replace our referrals?",
    a: "No, and it shouldn't. Referral clients are usually your best clients. Paid ads sit alongside your referrals so you're not at the mercy of word of mouth. When referrals slow down (and they always do at some point), your calendar doesn't.",
  },
  {
    q: "What do you need from us?",
    a: "Real footage and photos of dogs you've worked with (even casual phone videos are great), a rough idea of your current capacity, and someone on your end who answers consult inquiries fast. We take care of everything else.",
  },
  {
    q: "Do you work with dog product brands too?",
    a: "Yes. The case study above is a dog training products brand we helped generate $180K in 90 days. Whether you sell programs, gear, or courses, if it's in the dog world, we're in.",
  },
];

export default function DogTrainingPage() {
  return (
    <div className="bg-[#faf9f4] text-[#171712]">
      <DogHero />

      {/* Proof strip */}
      <section className="bg-lime">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-[#171712]/60">
            A real dog training brand we worked with
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            {STATS.map((s) => (
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

      {/* Ad showcase */}
      <DogAdShowcase />

      {/* Case study */}
      <section className="max-w-6xl mx-auto px-6 pb-20 md:pb-28">
        <div className="rounded-3xl border border-[#e6e4d9] bg-white overflow-hidden grid md:grid-cols-5">
          <div className="md:col-span-3 p-8 md:p-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#5c7a1e]">
              Case study · Dog training products brand
            </span>
            <h2 className="font-display mt-4 text-3xl md:text-4xl font-bold max-w-xl">
              How we took a dog brand from stuck ads to{" "}
              <span className="rounded-xl bg-lime px-2">$180K</span> in 90
              days.
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-[#636256]">
              A dog training products brand came to us frustrated. Meta was
              bleeding budget with nothing to show for it, and Google
              hadn&apos;t been touched. We rebuilt their campaigns from
              scratch, rewrote the ads to match how dog owners actually talk
              (&ldquo;my dog pulls like crazy on leash,&rdquo; &ldquo;he jumps
              on every guest&rdquo;), and scaled spend only on what was
              converting at a healthy cost. Ninety days later: $180K in new
              revenue at $26 per customer.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl font-bold">
                    {s.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[#636256]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
            <a
              href="/case-studies/dog-products.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#171712] px-6 py-3 font-semibold text-white hover:bg-[#171712]/85 transition"
            >
              <FileText className="w-4 h-4" /> Read the case study
            </a>
          </div>
          <div className="md:col-span-2 relative min-h-64">
            <Image
              src="/images/dogs/real-case-2.jpg"
              alt="Trainer working with a husky on recall in a waterfront park"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Case study 2: local training & daycare */}
      <section className="max-w-6xl mx-auto px-6 pb-20 md:pb-28">
        <div className="rounded-3xl border border-[#e6e4d9] bg-white overflow-hidden grid md:grid-cols-5">
          <div className="md:col-span-2 relative min-h-64">
            <Image
              src="/images/dogs/case-local.jpg"
              alt="Trainer rewarding a dog holding a sit inside the training facility"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="md:col-span-3 p-8 md:p-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#5c7a1e]">
              Case study · Local dog training &amp; daycare
            </span>
            <h2 className="font-display mt-4 text-3xl md:text-4xl font-bold max-w-xl">
              Invisible on Maps to{" "}
              <span className="rounded-xl bg-lime px-2">1,240</span>{" "}
              conversions at $11 each.
            </h2>
            <div className="mt-4 max-w-2xl space-y-4 text-lg text-[#636256]">
              <p>
                This facility runs its bookings through Gingr, but none of
                that data reached Google. Campaigns were fragmented, and brand
                terms ate 80% of the budget catching existing customers who
                were coming back anyway. New owners searching nearby barely
                saw them.
              </p>
              <p>
                Tracking came first, so Google could learn what a paying
                customer looks like. Performance Max put them on Search and
                Maps at once, and a new search campaign went after what owners
                actually type (&ldquo;dog training near me&rdquo;). A month
                later we added Meta with creatives built on real owner
                frustrations. They took off locally, brand searches climbed,
                and Meta started driving direct bookings of its own. Ten
                months in, the two engines feed each other.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              {LOCAL_STATS.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl font-bold">
                    {s.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[#636256]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#get-started"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#171712] px-6 py-3 font-semibold text-white hover:bg-[#171712]/85 transition"
            >
              Get a plan like this <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <DogTestimonials />

      {/* What we fix */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center">
            Four reasons great trainers still have empty spots.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[#636256]">
            We fix all four. And since dogs are all we do, you&apos;re not
            paying an agency to learn your industry on your budget.
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
                <h3 className="font-display mt-4 text-xl font-bold">
                  {s.title}
                </h3>
                <p className="mt-2 text-[#636256]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center">
            How it works
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {STEPS.map((s) => (
              <div
                key={s.num}
                className="rounded-2xl border border-[#e6e4d9] bg-white p-7"
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
              Share a few details about your business and where you&apos;re at
              with marketing. We&apos;ll look at your local competition, your
              current ads (if any), and the demand in your area, then send you
              a written plan with exactly what we&apos;d do. Completely free.
            </p>
            <ul className="mt-6 space-y-3 text-[#636256]">
              <li className="flex gap-3">
                <ArrowRight className="w-5 h-5 text-[#5c7a1e] shrink-0 mt-0.5" />
                No retainer pitch on the first call, just a real conversation
              </li>
              <li className="flex gap-3">
                <ArrowRight className="w-5 h-5 text-[#5c7a1e] shrink-0 mt-0.5" />
                You&apos;ll hear back within 1 business day
              </li>
              <li className="flex gap-3">
                <ArrowRight className="w-5 h-5 text-[#5c7a1e] shrink-0 mt-0.5" />
                We only work with dog businesses. That&apos;s a real policy,
                not a tagline.
              </li>
            </ul>
            <Image
              src="/images/dogs/real-form-2.jpg"
              alt="Trainer running a dog through the agility yard"
              width={1080}
              height={1350}
              className="mt-8 hidden md:block rounded-2xl object-cover aspect-[4/5] w-full border border-[#e6e4d9]"
            />
          </div>
          <div className="md:col-span-3 rounded-3xl border border-[#e6e4d9] bg-white p-7 md:p-9">
            <DogLeadForm />
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
