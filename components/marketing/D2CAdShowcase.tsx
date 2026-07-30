import Image from "next/image";
import { Heart, MessageCircle, Share2 } from "lucide-react";

type AdCard = {
  brand: string;
  tag: string;
  hook: string;
  image: string;
  alt: string;
  cta: string;
};

// Real ad creatives pulled from client Meta ad accounts we run (brand names hidden).
const ROW_ONE: AdCard[] = [
  {
    brand: "Baby Formula Co.",
    tag: "Offer ad",
    hook: "Buy one, get one free. The offer that moves infant formula fastest.",
    image: "/images/d2c-ads/munchkin-1.png",
    alt: "Infant formula buy-one-get-one-free static ad",
    cta: "Shop now",
  },
  {
    brand: "Dog Wellness Co.",
    tag: "Founder quote",
    hook: "\"Your dog isn't ignoring you. They need clearer communication.\"",
    image: "/images/d2c-ads/heathers-2.jpg",
    alt: "Founder quote ad with four huskies",
    cta: "Learn more",
  },
  {
    brand: "Jewelry Co.",
    tag: "Product hook",
    hook: "Jewelry you never take off. Shower, sleep, work: stays the same.",
    image: "/images/d2c-ads/ancientaura-1.jpg",
    alt: "Gold Ankh necklace product ad",
    cta: "Shop everyday gold",
  },
  {
    brand: "Boozy Gifting Co.",
    tag: "Gifting angle",
    hook: "The answer to \"what do I bring?\" Alcohol-infused cake jars, gift ready.",
    image: "/images/d2c-ads/lulu-1.png",
    alt: "Gifting bundle static ad, alcohol-infused cake jars",
    cta: "Get a jar for each of them",
  },
  {
    brand: "Wellness Supplement Co.",
    tag: "Offer ad",
    hook: "25% off the bundle. Pure Chios mastic resin, 90-day guarantee.",
    image: "/images/d2c-ads/gumgods-2.png",
    alt: "Jawline mastic gum bundle offer ad",
    cta: "See details",
  },
];

const ROW_TWO: AdCard[] = [
  {
    brand: "Baby Formula Co.",
    tag: "UGC video",
    hook: "Real parent testimonials on why they made the switch.",
    image: "/images/d2c-ads/munchkin-2.jpg",
    alt: "UGC video ad cover, parent with infant formula product",
    cta: "Watch the story",
  },
  {
    brand: "Dog Wellness Co.",
    tag: "Bundle ad",
    hook: "The course is the method, the leash tool holds it together. Calmer walks start here.",
    image: "/images/d2c-ads/heathers-1.jpg",
    alt: "Leash and training course bundle ad",
    cta: "Learn more",
  },
  {
    brand: "Jewelry Co.",
    tag: "Belief ad",
    hook: "Gold is an investment. We're not selling metal, we're selling culture and identity.",
    image: "/images/d2c-ads/ancientaura-2.jpg",
    alt: "Gold is an investment jewelry ad",
    cta: "Shop now",
  },
  {
    brand: "Boozy Gifting Co.",
    tag: "Product lineup",
    hook: "Taste like candy, feel like happy hour. Four flavors, 25% off.",
    image: "/images/d2c-ads/lulu-2.png",
    alt: "Flavor lineup ad, alcohol-infused cake jars",
    cta: "Shop the flavors",
  },
  {
    brand: "Wellness Supplement Co.",
    tag: "Founder video",
    hook: "Straight from the source: mastic resin harvested by hand.",
    image: "/images/d2c-ads/gumgods-1.jpg",
    alt: "Founder video cover, mastic resin groves",
    cta: "See the origin",
  },
];

function AdCardView({ ad }: { ad: AdCard }) {
  return (
    <div className="w-72 shrink-0 rounded-2xl border border-[#e6e4d9] bg-white shadow-sm overflow-hidden">
      <div className="flex items-center gap-2.5 px-4 pt-3.5 pb-2.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime text-[11px] font-bold text-[#171712]">
          {ad.brand
            .split(" ")
            .map((w) => w[0])
            .slice(0, 2)
            .join("")}
        </span>
        <div className="min-w-0">
          <div className="text-sm font-semibold text-[#171712] truncate">
            {ad.brand}
          </div>
          <div className="text-[11px] text-[#636256]">Sponsored</div>
        </div>
      </div>

      <p className="px-4 pb-3 text-sm leading-snug text-[#171712]">{ad.hook}</p>

      <div className="relative aspect-[4/5]">
        <Image
          src={ad.image}
          alt={ad.alt}
          fill
          sizes="288px"
          className="object-cover"
        />
        <span className="absolute left-3 top-3 rounded-full bg-[#171712]/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">
          {ad.tag}
        </span>
      </div>

      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <div className="flex items-center gap-3 text-[#636256]">
          <Heart className="h-4 w-4" />
          <MessageCircle className="h-4 w-4" />
          <Share2 className="h-4 w-4" />
        </div>
        <span className="rounded-full bg-lime px-3.5 py-1.5 text-xs font-semibold text-[#171712]">
          {ad.cta}
        </span>
      </div>
    </div>
  );
}

function MarqueeRow({ ads, reverse = false }: { ads: AdCard[]; reverse?: boolean }) {
  const animation = reverse ? "animate-marquee-slow-reverse" : "animate-marquee-slow";
  return (
    <div className="overflow-hidden">
      <div className={`flex w-max items-start gap-5 ${animation}`}>
        {[false, true].map((dup) => (
          <div key={dup ? "dup" : "main"} aria-hidden={dup} className="flex items-start gap-5 pr-5">
            {ads.map((ad) => (
              <AdCardView key={`${ad.brand}-${ad.tag}-${dup}`} ad={ad} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function D2CAdShowcase() {
  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center">
          What we&apos;ve actually built
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[#636256]">
          Real ads pulled straight from client accounts we run (names hidden).
          Not mockups.
        </p>
      </div>

      <div className="marquee-hover-pause relative mt-12 space-y-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-32 bg-gradient-to-r from-[#faf9f4] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-32 bg-gradient-to-l from-[#faf9f4] to-transparent" />
        <MarqueeRow ads={ROW_ONE} />
        <MarqueeRow ads={ROW_TWO} reverse />
      </div>
    </section>
  );
}
