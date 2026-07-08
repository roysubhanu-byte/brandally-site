import Image from "next/image";
import { PawPrint, Heart, MessageCircle, Share2 } from "lucide-react";

type AdCard = {
  brand: string;
  tag: string;
  hook: string;
  image: string;
  alt: string;
  cta: string;
};

// Placeholder creatives — swap `image` paths when real ad images land
const ROW_ONE: AdCard[] = [
  {
    brand: "Board & Train Co.",
    tag: "Hook video",
    hook: "He used to drag me down the entire street. This is week 3 of board & train.",
    image: "/images/dogs/hero-puppy.jpg",
    alt: "Golden retriever puppy holding a sit",
    cta: "Book a free evaluation",
  },
  {
    brand: "Puppy School",
    tag: "Puppy angle",
    hook: "Biting, chewing, zero recall? 8 weeks old is the perfect time to start.",
    image: "/images/dogs/corgi.jpg",
    alt: "Corgi puppy against an orange backdrop",
    cta: "See class times",
  },
  {
    brand: "Daycare & Boarding",
    tag: "Facility tour",
    hook: "A Tuesday at daycare. This is where the zoomies go.",
    image: "/images/dogs/running-duo.jpg",
    alt: "Two dogs running down a trail",
    cta: "Book a tour",
  },
  {
    brand: "Board & Train Co.",
    tag: "Testimonial",
    hook: "“We finally have guests over without hiding the dog.” Sarah, after 21 days.",
    image: "/images/dogs/golden-portrait.jpg",
    alt: "Golden retriever looking at the camera",
    cta: "Read her story",
  },
];

const ROW_TWO: AdCard[] = [
  {
    brand: "Board & Train Co.",
    tag: "Offer drop",
    hook: "3 board & train spots open for spring. Your dog comes home different.",
    image: "/images/dogs/happy-aussie.jpg",
    alt: "Happy Australian shepherd",
    cta: "Claim a spot",
  },
  {
    brand: "Day Training",
    tag: "Before / after",
    hook: "Week 1 vs week 3. Same dog, same owner, brand new walks.",
    image: "/images/dogs/running-duo.jpg",
    alt: "Two dogs mid-run on a trail",
    cta: "Watch the change",
  },
  {
    brand: "Board & Train Co.",
    tag: "Reactive dog",
    hook: "A reactive dog doesn't mean a bad owner. It means you need a plan.",
    image: "/images/dogs/golden-portrait.jpg",
    alt: "Calm golden retriever portrait",
    cta: "Get the plan",
  },
  {
    brand: "Grooming Studio",
    tag: "Local offer",
    hook: "New local pups get their first groom at $20 off. This week only.",
    image: "/images/dogs/corgi.jpg",
    alt: "Freshly groomed corgi puppy",
    cta: "Book a slot",
  },
];

function AdCardView({ ad }: { ad: AdCard }) {
  return (
    <div className="w-72 shrink-0 rounded-2xl border border-[#e6e4d9] bg-white shadow-sm overflow-hidden">
      {/* Ad header */}
      <div className="flex items-center gap-2.5 px-4 pt-3.5 pb-2.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime">
          <PawPrint className="h-4 w-4 text-[#171712]" />
        </span>
        <div className="min-w-0">
          <div className="text-sm font-semibold text-[#171712] truncate">
            {ad.brand}
          </div>
          <div className="text-[11px] text-[#636256]">Sponsored</div>
        </div>
      </div>

      {/* Primary text */}
      <p className="px-4 pb-3 text-sm leading-snug text-[#171712]">
        {ad.hook}
      </p>

      {/* Creative */}
      <div className="relative aspect-square">
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

      {/* CTA bar */}
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

function MarqueeRow({
  ads,
  reverse = false,
}: {
  ads: AdCard[];
  reverse?: boolean;
}) {
  const animation = reverse
    ? "animate-marquee-slow-reverse"
    : "animate-marquee-slow";
  return (
    <div className="overflow-hidden">
      <div className={`flex w-max gap-5 ${animation}`}>
        {[false, true].map((dup) => (
          <div
            key={dup ? "dup" : "main"}
            aria-hidden={dup}
            className="flex gap-5 pr-5"
          >
            {ads.map((ad) => (
              <AdCardView key={`${ad.brand}-${ad.tag}`} ad={ad} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DogAdShowcase() {
  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center">
          What the ads actually look like
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[#636256]">
          A few of the formats and angles we run, written the way dog owners
          talk. Yours get your dogs, your voice, and your results.
        </p>
      </div>

      <div className="marquee-hover-pause relative mt-12 space-y-5">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-32 bg-gradient-to-r from-[#faf9f4] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-32 bg-gradient-to-l from-[#faf9f4] to-transparent" />
        <MarqueeRow ads={ROW_ONE} />
        <MarqueeRow ads={ROW_TWO} reverse />
      </div>
    </section>
  );
}
