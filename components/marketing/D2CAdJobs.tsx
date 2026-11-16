import Image from "next/image";
import { ArrowRight } from "lucide-react";

type Ad = { image: string; alt: string; caption: string };

type Job = {
  num: string;
  short: string;
  title: string;
  who: string;
  job: string;
  judge: string;
  ads: Ad[];
};

// Real ads from D2C client accounts we run. Brand names and logos hidden.
const JOBS: Job[] = [
  {
    num: "Ad 1",
    short: "Stop the scroll",
    title: "Get a stranger to stop.",
    who: "People who have never heard of the brand.",
    job: "Open on a moment or a question they already have. No logo up front, no hard sell.",
    judge: "How cheaply it reaches new people. Not sales, yet.",
    ads: [
      {
        image: "/images/d2c-ads/lulu-1.png",
        alt: "Static ad: The answer to what do I bring, alcohol-infused cake jars",
        caption: "Names a moment every party guest knows.",
      },
      {
        image: "/images/d2c-ads/gumgods-1.jpg",
        alt: "Video ad cover: mastic trees with caption 8 grams that's less than 2 teaspoons",
        caption: "Curiosity first. The product comes later.",
      },
    ],
  },
  {
    num: "Ad 2",
    short: "Trust",
    title: "Answer \"is this legit?\"",
    who: "People who've seen the brand once or twice.",
    job: "Show who's behind it and how it works. Experience, method, real people.",
    judge: "Whether it lowers cost per sale across the whole account.",
    ads: [
      {
        image: "/images/d2c-ads/heathers-2.jpg",
        alt: "Founder quote ad: after 30 years training dogs",
        caption: "30 years of experience, in the founder's words.",
      },
      {
        image: "/images/d2c-ads/heathers-1.jpg",
        alt: "Bundle ad: the course is the method, the leash is the tool",
        caption: "Explains the method, then the product.",
      },
    ],
  },
  {
    num: "Ad 3",
    short: "Desire",
    title: "Make them want it.",
    who: "People who are interested but not sold.",
    job: "Help them picture owning it. The feeling, the look, the identity.",
    judge: "Click-through rate and add-to-carts from new visitors.",
    ads: [
      {
        image: "/images/d2c-ads/ancientaura-1.jpg",
        alt: "Jewelry ad: jewelry you never take off",
        caption: "Shower, sleep, work. Sells the everyday.",
      },
      {
        image: "/images/d2c-ads/lulu-2.png",
        alt: "Product lineup ad: taste like candy, feel like happy hour",
        caption: "Sells the feeling, not the ingredients.",
      },
      {
        image: "/images/d2c-ads/ancientaura-2.jpg",
        alt: "Jewelry ad: gold is an investment",
        caption: "Sells identity, not metal.",
      },
    ],
  },
  {
    num: "Ad 4",
    short: "Close",
    title: "Give a reason to buy today.",
    who: "People who visited and didn't buy.",
    job: "Offer, bundle, or guarantee. This is the only ad that pushes price.",
    judge: "Cost per sale and profit per order.",
    ads: [
      {
        image: "/images/d2c-ads/munchkin-1.png",
        alt: "Offer ad: buy one get one free infant formula",
        caption: "One clear offer. Nothing else on the page.",
      },
      {
        image: "/images/d2c-ads/gumgods-2.png",
        alt: "Offer ad: 25% off with 90-day guarantee",
        caption: "Discount plus a 90-day guarantee.",
      },
    ],
  },
];

export default function D2CAdJobs() {
  return (
    <section id="ads" className="max-w-6xl mx-auto px-6 py-20 md:py-28 scroll-mt-24">
      <h2 className="font-display text-3xl md:text-5xl font-bold text-center text-balance">
        Every ad has one job.
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[#636256]">
        A buyer doesn&apos;t go from scrolling to checkout in one ad. So we
        build four kinds, each for a different step. These are real ads from
        D2C accounts we run (names hidden).
      </p>

      {/* The 4-step path */}
      <ol className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
        {JOBS.map((j, i) => (
          <li
            key={j.num}
            className="relative rounded-2xl border border-[#e6e4d9] bg-white p-4 md:p-5"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-[#5c7a1e]">
              {j.num}
            </span>
            <div className="font-display mt-1 text-lg md:text-xl font-bold">
              {j.short}
            </div>
            <div className="mt-1 text-sm text-[#636256]">{j.who}</div>
            {i < JOBS.length - 1 && (
              <ArrowRight className="hidden md:block absolute -right-[18px] top-1/2 -translate-y-1/2 z-10 h-5 w-5 rounded-full bg-lime p-0.5 text-[#171712]" />
            )}
          </li>
        ))}
      </ol>

      {/* Each job with its real ads */}
      <div className="mt-14 space-y-6">
        {JOBS.map((j) => (
          <div
            key={j.num}
            className="grid md:grid-cols-12 gap-6 md:gap-8 rounded-3xl border border-[#e6e4d9] bg-white p-6 md:p-8"
          >
            <div className="md:col-span-4">
              <span className="inline-flex rounded-full bg-lime px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#171712]">
                {j.num} · {j.short}
              </span>
              <h3 className="font-display mt-4 text-2xl font-bold">{j.title}</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-[#171712]">Who sees it</dt>
                  <dd className="text-[#636256]">{j.who}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#171712]">What it does</dt>
                  <dd className="text-[#636256]">{j.job}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#171712]">How we judge it</dt>
                  <dd className="text-[#636256]">{j.judge}</dd>
                </div>
              </dl>
            </div>

            <div
              className={`md:col-span-8 grid grid-cols-2 gap-4 ${
                j.ads.length === 3 ? "sm:grid-cols-3" : "sm:max-w-[520px]"
              }`}
            >
              {j.ads.map((ad) => (
                <figure key={ad.image}>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-[#e6e4d9] bg-[#f0efe6]">
                    <Image
                      src={ad.image}
                      alt={ad.alt}
                      fill
                      sizes="(min-width: 768px) 240px, 45vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-2 text-xs leading-snug text-[#636256]">
                    {ad.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-10 max-w-2xl text-center text-[#636256]">
        Only Ad 4s? You keep selling to the same warm people and spend stops
        growing. Only Ad 1s? Cheap views, no sales. We run all four and build
        the next ad for whichever step is weakest.
      </p>
    </section>
  );
}
