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

type WorkedWithLogo = { name: string; image?: string };

const WORKED_WITH: WorkedWithLogo[] = [
  { name: "Munchkin", image: "/images/d2c-ads/logos/munchkin.png" },
  { name: "Heather's Heroes", image: "/images/d2c-ads/logos/heathersheroes.png" },
  { name: "Ancient Aura" },
  { name: "Lulu Liquor Cakes", image: "/images/d2c-ads/logos/lulu.png" },
  { name: "Gum of Gods", image: "/images/d2c-ads/logos/gumofgods.png" },
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

// Cards per second the strip glides at when idle. One full lap of 10 cards
// takes count / SPEED_PER_MS milliseconds.
const LAP_MS = 42000;

function shortestDelta(diff: number, count: number) {
  let d = diff % count;
  if (d > count / 2) d -= count;
  if (d < -count / 2) d += count;
  return d;
}

function cardStyle(offset: number) {
  const abs = Math.abs(offset);
  if (abs > 3.4) {
    return { transform: "translateX(0px)", opacity: 0, zIndex: 0, pointerEvents: "none" as const };
  }
  const dir = offset < 0 ? -1 : offset > 0 ? 1 : 0;
  const translate = offset * 168;
  const scale = Math.max(0.5, 1 - abs * 0.14);
  const rotate = -dir * Math.min(abs * 14, 34);
  const opacity = abs < 0.02 ? 1 : Math.max(0.12, 0.78 - abs * 0.22);
  return {
    transform: `translateX(${translate}px) scale(${scale}) rotateY(${rotate}deg)`,
    zIndex: Math.round(100 - abs),
    opacity,
    pointerEvents: (abs > 2.4 ? "none" : "auto") as "none" | "auto",
  };
}

// Continuously drives a fractional "position" via requestAnimationFrame so
// the coverflow glides on its own instead of jump-cutting between cards.
// Manual nav (arrows/dots/click) sets a target that gets eased into, then
// the idle drift resumes from there.
function useSelfScrollingCoverflow(
  count: number,
  cardRefs: React.MutableRefObject<(HTMLButtonElement | null)[]>
) {
  const positionRef = useRef(0);
  const targetRef = useRef<number | null>(null);
  const pausedRef = useRef(false);
  const lastTsRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastActiveRef = useRef(0);
  const reducedMotionRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const applyStyles = useCallback(() => {
    const pos = positionRef.current;
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const offset = shortestDelta(i - pos, count);
      const s = cardStyle(offset);
      el.style.transform = s.transform;
      el.style.opacity = String(s.opacity);
      el.style.zIndex = String(s.zIndex);
      el.style.pointerEvents = s.pointerEvents;
    });
    const normalized = ((Math.round(pos) % count) + count) % count;
    if (normalized !== lastActiveRef.current) {
      lastActiveRef.current = normalized;
      setActiveIndex(normalized);
    }
  }, [count, cardRefs]);

  useEffect(() => {
    reducedMotionRef.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    applyStyles();

    const speed = count / LAP_MS; // cards per ms
    function tick(ts: number) {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = ts - lastTsRef.current;
      lastTsRef.current = ts;

      if (targetRef.current != null) {
        const d = shortestDelta(targetRef.current - positionRef.current, count);
        if (Math.abs(d) < 0.01) {
          positionRef.current = targetRef.current;
          targetRef.current = null;
        } else {
          positionRef.current += d * 0.1;
        }
      } else if (!pausedRef.current && !reducedMotionRef.current) {
        positionRef.current += speed * dt;
      }
      positionRef.current = ((positionRef.current % count) + count) % count;

      applyStyles();
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [count, applyStyles]);

  const goTo = useCallback((idx: number) => {
    const cur = positionRef.current;
    const d = shortestDelta(idx - cur, count);
    targetRef.current = cur + d;
  }, [count]);

  const next = useCallback(
    () => goTo(Math.round(positionRef.current) + 1),
    [goTo]
  );
  const prev = useCallback(
    () => goTo(Math.round(positionRef.current) - 1),
    [goTo]
  );
  const setPaused = useCallback((v: boolean) => {
    pausedRef.current = v;
  }, []);

  return { activeIndex, goTo, next, prev, setPaused };
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
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const { activeIndex, goTo, next, prev, setPaused } = useSelfScrollingCoverflow(
    ADS.length,
    cardRefs
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
        <p className="mt-8 text-center text-xs font-semibold uppercase tracking-wider text-[#636256]">
          Brands we&apos;ve worked with
        </p>
        <div className="mx-auto mt-5 flex max-w-4xl flex-wrap items-center justify-center gap-4">
          {WORKED_WITH.map((b) => (
            <div
              key={b.name}
              className="flex h-20 items-center justify-center rounded-xl border border-[#e6e4d9] bg-white px-6"
            >
              {b.image ? (
                <Image
                  src={b.image}
                  alt={`${b.name} logo`}
                  width={160}
                  height={64}
                  className="h-11 w-auto object-contain md:h-12"
                />
              ) : (
                <span className="font-display text-lg font-bold tracking-wide text-[#171712]">
                  {b.name}
                </span>
              )}
            </div>
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
            {ADS.map((ad, i) => (
              <button
                key={`${ad.brand}-${ad.tag}-${i}`}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                type="button"
                aria-label={`Show ${ad.brand} ad`}
                onClick={() => goTo(i)}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ willChange: "transform, opacity" }}
              >
                <AdCardView ad={ad} active={i === activeIndex} />
              </button>
            ))}
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
