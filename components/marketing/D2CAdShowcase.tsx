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

const AUTO_ADVANCE_MS = 4200;

// Single-card spotlight: only one ad is ever fully rendered, so there is
// nothing to compete with it visually. Auto-advances on its own, crossfades
// with a slight directional slide, and the active image slowly zooms
// (Ken Burns) to keep it feeling alive between transitions.
function useSpotlight(count: number) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const pausedRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (idx: number) => {
      setDirection(1);
      setActiveIndex(((idx % count) + count) % count);
    },
    [count]
  );
  const next = useCallback(() => {
    setDirection(1);
    setActiveIndex((i) => (i + 1) % count);
  }, [count]);
  const prev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((i) => (i - 1 + count) % count);
  }, [count]);

  useEffect(() => {
    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    timerRef.current = setInterval(() => {
      if (!pausedRef.current) {
        setDirection(1);
        setActiveIndex((i) => (i + 1) % count);
      }
    }, AUTO_ADVANCE_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [count]);

  const setPaused = useCallback((v: boolean) => {
    pausedRef.current = v;
  }, []);

  return { activeIndex, direction, goTo, next, prev, setPaused };
}

function SpotlightCard({ ad }: { ad: AdCard }) {
  return (
    <div className="w-72 sm:w-80 rounded-2xl border border-lime bg-white shadow-[0_25px_70px_-15px_rgba(198,242,78,0.55)] overflow-hidden">
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

      <p className="px-4 pb-3 text-sm leading-snug text-[#171712] line-clamp-2">
        {ad.hook}
      </p>

      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={ad.image}
          alt={ad.alt}
          fill
          sizes="320px"
          className="object-cover animate-kenburns"
          draggable={false}
          priority
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
  const { activeIndex, direction, goTo, next, prev, setPaused } = useSpotlight(
    ADS.length
  );

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

      <div
        className="relative mt-14 flex flex-col items-center"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative h-[560px] w-full max-w-sm sm:h-[600px]">
          {ADS.map((ad, i) => {
            const isActive = i === activeIndex;
            const isPrev =
              i === (activeIndex - 1 + ADS.length) % ADS.length;
            const isNext = i === (activeIndex + 1) % ADS.length;
            let className =
              "absolute inset-x-0 top-0 mx-auto transition-all duration-700 ease-out";
            if (isActive) {
              className += " translate-x-0 opacity-100 scale-100 z-20";
            } else if ((direction === 1 && isPrev) || (direction === -1 && isNext)) {
              className +=
                direction === 1
                  ? " -translate-x-10 opacity-0 scale-95 z-10"
                  : " translate-x-10 opacity-0 scale-95 z-10";
            } else if ((direction === 1 && isNext) || (direction === -1 && isPrev)) {
              className +=
                direction === 1
                  ? " translate-x-10 opacity-0 scale-95 z-10"
                  : " -translate-x-10 opacity-0 scale-95 z-10";
            } else {
              className += " opacity-0 scale-95 pointer-events-none";
            }
            return (
              <div key={`${ad.brand}-${ad.tag}-${i}`} className={className}>
                <SpotlightCard ad={ad} />
              </div>
            );
          })}
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
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === activeIndex ? "w-6 bg-lime" : "w-1.5 bg-[#e6e4d9]"
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
