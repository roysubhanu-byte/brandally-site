// Real Meta ads from D2C client accounts we run. Brand names and logos hidden.

export type JobKey = 1 | 2 | 3 | 4;

export type MetaAd = {
  id: string;
  job: JobKey;
  brand: string;
  text: string;
  image: string;
  alt: string;
  cta: string;
  video?: boolean;
};

export const JOBS: Record<
  JobKey,
  { label: string; short: string; who: string; does: string; freq: string }
> = {
  1: {
    label: "Ad 1",
    short: "Curious",
    who: "People who've never heard of you",
    does: "Makes them curious. No hard sell, no logo up front.",
    freq: "Frequency around 1: Meta is finding new people",
  },
  2: {
    label: "Ad 2",
    short: "Trust",
    who: "People who've seen you once or twice",
    does: "Clears the doubt. Who's behind it, and does it work?",
    freq: "Frequency 1 to 2: people warming up",
  },
  3: {
    label: "Ad 3",
    short: "Desire",
    who: "People who are interested, not sold",
    does: "Makes them want it. The feeling, the look, the identity.",
    freq: "Frequency 1 to 2: people warming up",
  },
  4: {
    label: "Ad 4",
    short: "Close",
    who: "People who visited and didn't buy",
    does: "Gives a reason to buy today. Offer, bundle, guarantee.",
    freq: "Frequency above 2: this is the closing ad",
  },
};

export const ADS: MetaAd[] = [
  {
    id: "gumgods-1",
    job: 1,
    brand: "Wellness Supplement Co.",
    text: "8 grams. Less than 2 teaspoons. Mastic resin, harvested by hand straight from the source.",
    image: "/images/d2c-ads/gumgods-1.jpg",
    alt: "Video ad cover: mastic trees, caption 8 grams that's less than 2 teaspoons",
    cta: "Learn more",
    video: true,
  },
  {
    id: "lulu-1",
    job: 1,
    brand: "Boozy Gifting Co.",
    text: "The answer to \"what do I bring?\" Alcohol-infused cake jars, gift ready.",
    image: "/images/d2c-ads/lulu-1.png",
    alt: "Static ad: the answer to what do I bring, cake jars",
    cta: "Shop now",
  },
  {
    id: "heathers-2",
    job: 2,
    brand: "Dog Training Co.",
    text: "\"After 30 years training dogs, here's what I know: your dog isn't ignoring you.\"",
    image: "/images/d2c-ads/heathers-2.jpg",
    alt: "Founder quote ad with four huskies",
    cta: "Learn more",
  },
  {
    id: "heathers-1",
    job: 2,
    brand: "Dog Training Co.",
    text: "The course is the method. The leash is the tool. Calmer walks start here.",
    image: "/images/d2c-ads/heathers-1.jpg",
    alt: "Course and leash bundle ad",
    cta: "Learn more",
  },
  {
    id: "ancientaura-1",
    job: 3,
    brand: "Jewelry Co.",
    text: "Jewelry you never take off. Shower, sleep, work: it stays the same.",
    image: "/images/d2c-ads/ancientaura-1.jpg",
    alt: "Gold ankh necklace ad: jewelry you never take off",
    cta: "Shop now",
  },
  {
    id: "lulu-2",
    job: 3,
    brand: "Boozy Gifting Co.",
    text: "Taste like candy. Feel like happy hour. Four flavors to pick from.",
    image: "/images/d2c-ads/lulu-2.png",
    alt: "Flavor lineup ad: taste like candy, feel like happy hour",
    cta: "Shop now",
  },
  {
    id: "ancientaura-2",
    job: 3,
    brand: "Jewelry Co.",
    text: "Gold is an investment. We're not selling metal, we're selling culture and identity.",
    image: "/images/d2c-ads/ancientaura-2.jpg",
    alt: "Jewelry ad: gold is an investment",
    cta: "Shop now",
  },
  {
    id: "munchkin-1",
    job: 4,
    brand: "Baby Formula Co.",
    text: "Buy one, get one free. One clear offer, nothing else.",
    image: "/images/d2c-ads/munchkin-1.png",
    alt: "Offer ad: buy one get one free infant formula",
    cta: "Shop now",
  },
  {
    id: "gumgods-2",
    job: 4,
    brand: "Wellness Supplement Co.",
    text: "25% off for a limited time. 100% natural mastic resin, 90-day guarantee.",
    image: "/images/d2c-ads/gumgods-2.png",
    alt: "Offer ad: 25% off with 90-day guarantee",
    cta: "Shop now",
  },
];
