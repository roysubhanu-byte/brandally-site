export const BRAND = {
  name: "BrandAlly",
  legal: "BrandAlly LLC",
  tagline: "Your Digital Partner for Software Development & Growth",
  description:
    "We help USA-based agencies, D2C brands, and founders use better research, smarter tools, and clear growth systems to scale with confidence.",
  email: "support@brandally.net",
  domain: "brandally.net",
  address: {
    street: "30 N Gould St, Ste R",
    city: "Sheridan",
    state: "WY",
    zip: "82801",
    country: "United States",
  },
  hours: "Monday – Friday, 9:00 AM – 5:00 PM (EST)",
  founder: {
    name: "Subhanu Roy",
    experience: "12+",
    bio: "With over 12 years of marketing expertise spanning paid media, growth strategy, reporting, and creative analysis, Subhanu founded BrandAlly to transform deep industry experience into practical tools and consulting that accelerate business growth.",
  },
};

export const CASE_STUDIES = [
  {
    slug: "powder-addicts",
    client: "Powder Addicts",
    industry: "D2C · Ski apparel & home goods",
    headline: "Scaled to $250K at 4X ROAS",
    timeframe: "in 100 days",
    summary:
      "A USA ski brand stuck at 1.79X ROAS. We rebuilt the Meta and Google accounts, fixed the funnel, and scaled spend without losing efficiency.",
    metrics: [
      { value: "$250K", label: "Revenue" },
      { value: "4X", label: "Blended ROAS" },
      { value: "$35", label: "Blended CAC" },
    ],
    pdf: "/case-studies/powder-addicts.pdf",
  },
  {
    slug: "strat-o-matic",
    client: "Strat-O-Matic",
    industry: "D2C · Sports simulation",
    headline: "Scaled to $430K at 20X ROAS",
    timeframe: "in 3 months",
    summary:
      "A 60-year-old brand leaving money on the table. We reset the P&L, reworked Meta, and reported against real profit instead of vanity metrics.",
    metrics: [
      { value: "$430K", label: "Revenue" },
      { value: "20X", label: "ROAS" },
      { value: "$25", label: "New customer CAC" },
    ],
    pdf: "/case-studies/strat-o-matic.pdf",
  },
  {
    slug: "heathers-heroes",
    client: "Heather's Heroes",
    industry: "D2C · Dog training",
    headline: "Scaled to $180K at 3X ROAS",
    timeframe: "in 3 months",
    summary:
      "Stuck at 1.5X ROAS with Google left untouched. We aligned messaging, rebuilt the campaign structure, and scaled profitably.",
    metrics: [
      { value: "$180K", label: "Revenue" },
      { value: "3X", label: "ROAS" },
      { value: "$26", label: "Blended CAC" },
    ],
    pdf: "/case-studies/heathers-heroes.pdf",
  },
  {
    slug: "rollout-crew",
    client: "The Rollout Crew",
    industry: "B2B · Construction tech consulting",
    headline: "$1M closed from a $1.5M pipeline",
    timeframe: "in 11 months",
    summary:
      "No lead nurturing, no clear sales process. We built full-funnel paid ABM, aligned sales and marketing, and turned $50K of spend into seven figures.",
    metrics: [
      { value: "$1M", label: "Closed revenue" },
      { value: "72", label: "SQLs created" },
      { value: "$50K", label: "Ad spend" },
    ],
    pdf: "/case-studies/rollout-crew.pdf",
  },
];

export const PARTNER = {
  name: "ClickTrac",
  region: "India",
  url: "#",
  blurb:
    "We work with ClickTrac, our paid media partner in India, to manage and optimize campaigns across time zones. Your accounts get worked on while you sleep.",
};

export const PRODUCTS = [
  {
    name: "CreativeIntel",
    description:
      "AI-powered market research for D2C brands with competitor ad analysis, messaging insights, and creative intelligence.",
    url: "https://www.getcreativeintel.com/",
    icon: "brain" as const,
  },
  {
    name: "ReportX",
    description:
      "Automated reporting dashboards and exportable insights for agencies and teams.",
    url: "#",
    icon: "barChart3" as const,
  },
  {
    name: "The Last Try IELTS",
    description:
      "AI-powered IELTS preparation platform with mock tests and practice support.",
    url: "#",
    icon: "graduationCap" as const,
  },
  {
    name: "ScaleUp",
    description:
      "Strategy and testing workflows built to help agencies and brands improve offers and scale.",
    url: "#",
    icon: "rocketIcon" as const,
  },
];

export const TESTIMONIALS = [
  {
    name: "Mia K.",
    role: "Agency Owner",
    text: "BrandAlly's tools completely transformed how we handle client research. The insights are actionable and save us hours every week.",
    rating: 5,
  },
  {
    name: "Jon D.",
    role: "D2C Founder",
    text: "The consulting and tools together gave us a clear growth path. We saw measurable improvements within the first month.",
    rating: 5,
  },
  {
    name: "Jenny K.",
    role: "Marketing Director",
    text: "BrandAlly's tools helped our agency double client reporting efficiency in just weeks.",
    rating: 5,
  },
  {
    name: "Mark L.",
    role: "Growth Lead",
    text: "Subhanu's consulting sharpened our growth strategy and boosted campaign ROI noticeably.",
    rating: 5,
  },
];

export const FAQ_ITEMS = [
  {
    question: "What is BrandAlly?",
    answer:
      "BrandAlly LLC is a Wyoming-registered digital marketing services and software company. We build SaaS tools for marketers and provide hands-on growth consulting for agencies, D2C brands, and founders across the USA.",
  },
  {
    question: "Who can use BrandAlly's services?",
    answer:
      "Our tools and consulting are designed for USA-based marketing agencies, D2C brands, and founders who want to improve their research, reporting, and marketing performance.",
  },
  {
    question: "How does consulting work?",
    answer:
      "Our marketing service starts with a comprehensive audit of your current setup, followed by a detailed execution plan. The engagement is priced at $2,500 and includes hands-on guidance to implement the strategy.",
  },
  {
    question: "Do you serve clients outside the USA?",
    answer:
      "Currently, BrandAlly serves clients remotely across the USA. We work with teams in all time zones and deliver everything digitally.",
  },
  {
    question: "Can I get a demo of your tools?",
    answer:
      "Yes! Reach out via our contact page or email support@brandally.net to schedule a walkthrough of any of our SaaS products.",
  },
  {
    question: "Who founded BrandAlly?",
    answer:
      "BrandAlly was founded by Subhanu Roy, who brings over 12 years of experience in paid media, growth strategy, reporting, and creative analysis.",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const LEGAL_LINKS = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Cancellation Policy", href: "/cancellation-policy" },
  { label: "Promotions Terms", href: "/promotions-terms" },
];
