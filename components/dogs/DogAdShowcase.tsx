import Image from "next/image";
import { PawPrint, Heart, MessageCircle, Share2 } from "lucide-react";

type AdCard = {
  brand: string;
  tag: string;
  hook: string;
  image: string;
  alt: string;
  cta: string;
  video?: string;
};

// Real ad creatives from a dog training client (brand anonymized in the images)
const ADS: AdCard[] = [
  {
    brand: "Board & Train Co.",
    tag: "Before / after",
    hook: "He ate a shoe on Monday. Three weeks later, calm and obedient.",
    image: "/images/dogs/ads/ad-1.jpg",
    alt: "Before and after ad: reactive dog to calm dog in 3 weeks",
    cta: "Book a free evaluation",
  },
  {
    brand: "Obedience School",
    tag: "UGC hook",
    hook: "Commands, focus, and real-world manners. You can see it in 3 weeks.",
    image: "/images/dogs/ads/ad-3.jpg",
    alt: "Handwritten whiteboard ad for obedience training",
    cta: "Book a consult",
  },
  {
    brand: "Board & Train Co.",
    tag: "Offer drop",
    hook: "Summer board & train spots are open. Real results, all summer long.",
    image: "/images/dogs/ads/ad-4.jpg",
    alt: "Summer program ad with trainer and dog on the training field",
    cta: "Claim a spot",
  },
  {
    brand: "Obedience School",
    tag: "Program ad",
    hook: "Training that holds up outside the yard, around real distractions.",
    image: "/images/dogs/ads/ad-5.jpg",
    alt: "Obedience training ad with dog holding a down-stay",
    cta: "Book a free consult",
  },
  {
    brand: "Board & Train Co.",
    tag: "Transformation",
    hook: "From dragging her down the street to walking right beside her.",
    image: "/images/dogs/ads/ad-2.jpg",
    alt: "Before and after ad: dog pulling on leash, then walking calmly",
    cta: "See the program",
  },
];

const MORE_ADS: AdCard[] = [
  {
    brand: "Daycare & Boarding",
    tag: "Social proof",
    hook: "Daycare that loves them like you do, with the numbers to back it up.",
    image: "/images/dogs/ads/ad-6.jpg",
    alt: "Daycare ad listing reviews, square footage, and certified staff",
    cta: "Book a visit",
  },
  {
    brand: "Daycare & Boarding",
    tag: "Boarding angle",
    hook: "A getaway they'll love while you're away. They play, you breathe.",
    image: "/images/dogs/ads/ad-7.jpg",
    alt: "Boarding ad with three puppies looking over a ledge",
    cta: "Book now",
  },
  {
    brand: "Daycare & Boarding",
    tag: "Objection killer",
    hook: "Nervous about daycare? Watch your dog anytime on live cameras.",
    image: "/images/dogs/ads/ad-8.jpg",
    alt: "Daycare ad showing live camera feed of dogs on a phone",
    cta: "See the cameras",
  },
  {
    brand: "Daycare & Boarding",
    tag: "Review ad",
    hook: "“The daycare dogs drag their humans into.” A real five-star review.",
    image: "/images/dogs/ads/ad-9.jpg",
    alt: "Review ad with a happy dalmatian at daycare",
    cta: "Book an intro day",
  },
  {
    brand: "Board & Train Co.",
    tag: "Pain point",
    hook: "A lunging, snapping dog isn't just stressful. It's dangerous.",
    image: "/images/dogs/ads/ad-10.jpg",
    alt: "Training ad about reactive dogs with visible results in 2 weeks",
    cta: "Get help today",
  },
  {
    brand: "Board & Train Co.",
    tag: "Hook ad",
    hook: "Is walking your dog a nightmare? Calm, easy walks in 2 weeks.",
    image: "/images/dogs/ads/ad-11.jpg",
    alt: "Training ad asking if walking your dog is a nightmare",
    cta: "Get help today",
  },
  {
    brand: "Board & Train Co.",
    tag: "Guarantee",
    hook: "If he isn't better in 7 days, we'll pay you $500 to train somewhere else.",
    image: "/images/dogs/ads/ad-12.jpg",
    alt: "Guarantee ad offering $500 if the dog isn't better in 7 days",
    cta: "Book a consult",
  },
];

const VIDEO_ADS: AdCard[] = [
  {
    brand: "Dog Products Co.",
    tag: "Video hook",
    hook: "He went from pulling her down the block to heeling like a pro.",
    image: "/videos/ads/ad-v1-poster.jpg",
    alt: "Video ad of a german shepherd learning loose-leash walking",
    cta: "Watch the change",
    video: "/videos/ads/ad-v1.mp4",
  },
  {
    brand: "Dog Products Co.",
    tag: "Street interview",
    hook: "“That thing changed my dog's walks.” Owners on camera, unscripted.",
    image: "/videos/ads/ad-v2-poster.jpg",
    alt: "Street interview video ad with a dog owner",
    cta: "See why",
    video: "/videos/ads/ad-v2.mp4",
  },
  {
    brand: "Board & Train Co.",
    tag: "Reel ad",
    hook: "Calm, easy walks in just 2 weeks. Here's what that looks like.",
    image: "/videos/ads/ad-v3-poster.jpg",
    alt: "Video ad promising calm walks in two weeks",
    cta: "Get started",
    video: "/videos/ads/ad-v3.mp4",
  },
  {
    brand: "Daycare & Boarding",
    tag: "Hook video",
    hook: "Caught on the lobby cam: he knows exactly where he's going.",
    image: "/videos/ads/ad-v4-poster.jpg",
    alt: "Lobby camera video of an excited dog arriving at daycare",
    cta: "Book an intro day",
    video: "/videos/ads/ad-v4.mp4",
  },
  {
    brand: "Daycare & Boarding",
    tag: "POV tour",
    hook: "Max gives the facility tour himself. Follow him in.",
    image: "/videos/ads/ad-v5-poster.jpg",
    alt: "Point of view video of a small dog touring the daycare",
    cta: "Take the tour",
    video: "/videos/ads/ad-v5.mp4",
  },
  {
    brand: "Daycare & Boarding",
    tag: "Daycare reel",
    hook: "Brain games day, obstacle course edition. Tired dogs tonight.",
    image: "/videos/ads/ad-v6-poster.jpg",
    alt: "Dogs running an obstacle course at daycare",
    cta: "See a day here",
    video: "/videos/ads/ad-v6.mp4",
  },
];

const ROW_ONE: AdCard[] = [
  ADS[0],
  MORE_ADS[2],
  VIDEO_ADS[0],
  ADS[2],
  VIDEO_ADS[4],
  MORE_ADS[4],
  VIDEO_ADS[2],
  ADS[4],
  MORE_ADS[3],
];
const ROW_TWO: AdCard[] = [
  MORE_ADS[6],
  ADS[1],
  VIDEO_ADS[3],
  MORE_ADS[1],
  ADS[3],
  VIDEO_ADS[5],
  MORE_ADS[5],
  MORE_ADS[0],
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
      <div className={`relative ${ad.video ? "aspect-[9/16]" : "aspect-square"}`}>
        {ad.video ? (
          <video
            src={ad.video}
            poster={ad.image}
            muted
            loop
            autoPlay
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
            aria-label={ad.alt}
          />
        ) : (
          <Image
            src={ad.image}
            alt={ad.alt}
            fill
            sizes="288px"
            className="object-cover"
          />
        )}
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
      <div className={`flex w-max items-start gap-5 ${animation}`}>
        {[false, true].map((dup) => (
          <div
            key={dup ? "dup" : "main"}
            aria-hidden={dup}
            className="flex items-start gap-5 pr-5"
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
          Real ads we run for dog training, board &amp; train, and daycare
          businesses (names hidden). Yours get your dogs, your voice, and your
          story.
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
