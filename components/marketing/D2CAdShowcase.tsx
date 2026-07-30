"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Heart, MessageCircle, Share2 } from "lucide-react";

type AdCard = {
  brand: string;
  tag: string;
  hook: string;
  image: string;
  alt: string;
  cta: string;
};

const WORKED_WITH = [
  "Munchkin",
  "Heather's Heroes",
  "Ancient Aura",
  "Lulu Liquor Cakes",
  "Gum of Gods",
];

// Real ad creatives pulled from client Meta ad accounts we run (brand names hidden on the cards).
const ADS: AdCard[] = [
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

const AUTO_ADVANCE_MS = 3800;

function useCoverflow(count: number) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => setActive((a) => (a + 1) % count), [count]);
  const prev = useCallback(
    () => setActive((a) => (a - 1 + count) % count),
    [count]
  );

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(next, AUTO_ADVANCE_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, next]);

  return { active, setActive, next, prev, setPaused };
}

function cardStyle(offset: number): React.CSSProperties {
  const abs = Math.abs(offset);
  if (abs > 3) {
    return { opacity: 0, pointerEvents: "none", transform: "translateX(0)" };
  }
  const dir = Math.sign(offset);
  const translate = offset * 168;
  const scale = 1 - abs * 0.14;
  const rotate = -dir * Math.min(abs * 14, 34);
  const z = 100 - abs;
  const opacity = abs === 0 ? 1 : Math.max(0.15, 0.75 - abs * 0.22);
  return {
    transform: `translateX(${translate}px) scale(${scale}) rotateY(${rotate}deg)`,
    zIndex: z,
    opacity,
    pointerEvents: abs > 2 ? "none" : "auto",
  };
}

function AdCardView({ ad, active }: { ad: AdCard; active: boolean }) {
  return (
    <div
      className={`w-64 md:w-72 shrink-0 rounded-2xl border bg-white shadow-xl overflow-hidden transition-shadow ${
        active ? "border-lime shadow-[0_20px_60px_-15px_rgba(198,242,78,0.5)]" : "border-[#e6e4d9]"
      }`}
    >
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
          draggable={false}
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

export default function D2CAdShowcase() {
  const { active, setActive, next, prev, setPaused } = useCoverflow(ADS.length);

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
        <div className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-x-2 gap-y-2 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#636256]">
            Brands we&apos;ve worked with:
          </span>
          {WORKED_WITH.map((name) => (
            <span
              key={name}
              className="rounded-full border border-[#e6e4d9] bg-white px-3 py-1 text-xs font-medium text-[#171712]"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <div
        className="relative mt-14"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 md:w-40 bg-gradient-to-r from-[#faf9f4] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 md:w-40 bg-gradient-to-l from-[#faf9f4] to-transparent" />

        <div
          className="flex items-center justify-center"
          style={{ perspective: "1400px", height: "480px" }}
        >
          <div className="relative h-full w-full">
            {ADS.map((ad, i) => {
              let offset = i - active;
              if (offset > ADS.length / 2) offset -= ADS.length;
              if (offset < -ADS.length / 2) offset += ADS.length;
              return (
                <button
                  key={`${ad.brand}-${ad.tag}-${i}`}
                  type="button"
                  aria-label={`Show ${ad.brand} ad`}
                  onClick={() => setActive(i)}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out"
                  style={cardStyle(offset)}
                >
                  <AdCardView ad={ad} active={offset === 0} />
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative z-30 mt-8 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous ad"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e6e4d9] bg-white hover:border-lime transition group"
          >
            <ArrowLeft className="h-4 w-4 text-[#171712] group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <div className="flex items-center gap-1.5">
            {ADS.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to ad ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === active ? "w-6 bg-lime" : "w-1.5 bg-[#e6e4d9]"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next ad"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e6e4d9] bg-white hover:border-lime transition group"
          >
            <ArrowRight className="h-4 w-4 text-[#171712] group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
