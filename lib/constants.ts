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
    experience: "12+",
    bio: "We've spent over 12 years running paid media, growth strategy, reporting, and creative analysis. BrandAlly is how we turn that experience into practical tools and consulting that move real numbers for the teams we work with.",
  },
};

export const CASE_STUDIES = [
  {
    slug: "coaching",
    pdf: "/case-studies/coaching.pdf",
    client: "Coaching",
    industry: "High-ticket · Nurse coaching",
    headline: "Scaled to $1.47M from $80K",
    accent: "$1.47M",
    timeframe: "in 6 months",
    summary:
      "A high-ticket nurse coaching program stuck at $80K. We tested multiple funnels, built 5 persona ad sets, and rebuilt the upper funnel so closers only got hot, qualified leads. Call-to-close hit 30%.",
    metrics: [
      { value: "$1.47M", label: "Closed-won revenue" },
      { value: "30%", label: "Call-to-close rate" },
      { value: "$4,184", label: "Average order value" },
    ],
  },
  {
    slug: "fitness-coaching",
    pdf: "/case-studies/fitness-coaching.pdf",
    client: "Fitness coaching",
    industry: "Coaching · Veteran fitness",
    headline: "Leads under $6 on Meta",
    accent: "$6",
    timeframe: "live campaigns",
    summary:
      "A veteran fitness coaching brand with a messy CRM and a funnel built for everyone. We cleaned the data and attribution, rewrote the offer for veterans fighting low testosterone, and built Meta and local ads that hold leads under $6.",
    metrics: [
      { value: "$4.53", label: "Lowest cost / lead" },
      { value: "656", label: "Leads, one campaign" },
      { value: "20%", label: "Local ad conversion" },
    ],
  },
  {
    slug: "ski-apparel",
    pdf: "/case-studies/ski-apparel.pdf",
    client: "Ski apparel",
    industry: "D2C · Ski apparel & home goods",
    headline: "Scaled to $250K at 4X ROAS",
    accent: "$250K",
    timeframe: "in 100 days",
    summary:
      "A USA ski brand stuck at 1.79X ROAS. We rebuilt the Meta and Google accounts, fixed the funnel, and scaled spend without losing efficiency.",
    metrics: [
      { value: "$250K", label: "Revenue" },
      { value: "4X", label: "Blended ROAS" },
      { value: "$35", label: "Blended CAC" },
    ],
  },
  {
    slug: "sports-games",
    pdf: "/case-studies/sports-games.pdf",
    client: "Sports games",
    industry: "D2C · Sports simulation",
    headline: "Scaled to $430K at 20X ROAS",
    accent: "$430K",
    timeframe: "in 3 months",
    summary:
      "A 60-year-old brand leaving money on the table. We reset the P&L, reworked Meta, and reported against real profit instead of vanity metrics.",
    metrics: [
      { value: "$430K", label: "Revenue" },
      { value: "20X", label: "ROAS" },
      { value: "$25", label: "New customer CAC" },
    ],
  },
  {
    slug: "dog-products",
    pdf: "/case-studies/dog-products.pdf",
    client: "Dog products",
    industry: "D2C · Dog training",
    headline: "Scaled to $180K at 3X ROAS",
    accent: "$180K",
    timeframe: "in 3 months",
    summary:
      "Stuck at 1.5X ROAS with Google left untouched. We aligned messaging, rebuilt the campaign structure, and scaled profitably.",
    metrics: [
      { value: "$180K", label: "Revenue" },
      { value: "3X", label: "ROAS" },
      { value: "$26", label: "Blended CAC" },
    ],
  },
  {
    slug: "construction-tech",
    pdf: "/case-studies/construction-tech.pdf",
    client: "Construction tech",
    industry: "B2B · Construction tech consulting",
    headline: "$1M closed from a $1.5M pipeline",
    accent: "$1M",
    timeframe: "in 11 months",
    summary:
      "No lead nurturing, no clear sales process. We built full-funnel paid ABM, aligned sales and marketing, and turned $50K of spend into seven figures.",
    metrics: [
      { value: "$1M", label: "Closed revenue" },
      { value: "72", label: "SQLs created" },
      { value: "$50K", label: "Ad spend" },
    ],
  },
];

export const PARTNER = {
  name: "ClickTrac",
  tagline: "We work while you sleep.",
  blurb:
    "ClickTrac is our paid media partner, with teams across the US and India. Someone is always in your accounts, in every time zone, so the work doesn't stop when your day ends.",
  locations: ["USA", "India", "Gujarat", "Kolkata", "Pune"],
};

export const PRODUCTS = [
  {
    name: "CreativeIntel",
    description:
      "Market research for D2C brands: competitor ad analysis, messaging insights, and creative intelligence in one place.",
    url: "https://www.getcreativeintel.com/",
    icon: "brain" as const,
  },
];

export const TESTIMONIALS = [
  {
    name: "Ski apparel brand",
    role: "D2C · Ski apparel & home goods",
    text: "We were stuck around 1.8X and couldn't push past it. They rebuilt our Meta and Google setup and we hit $250K at a 4X return in three months. The $35 CAC is the part that still surprises me.",
    result: "$250K · 4X ROAS",
    rating: 5,
  },
  {
    name: "Sports simulation brand",
    role: "D2C · Sports simulation",
    text: "Sixty years in and we'd never scaled paid this cleanly. They reset the whole P&L view, reworked our Meta, and got us to 20X ROAS. New customers are coming in at $25.",
    result: "$430K · 20X ROAS",
    rating: 5,
  },
  {
    name: "Dog products brand",
    role: "D2C · Dog training",
    text: "Our Google account was basically untouched and we were stuck at 1.5X. Three months later we're at 3X and $180K, with CAC down to $26. They fixed the funnel, not just the ads.",
    result: "$180K · 3X ROAS",
    rating: 5,
  },
  {
    name: "Construction tech firm",
    role: "B2B · Construction tech",
    text: "No lead nurturing, no real sales process. They built full-funnel paid ABM and turned $50K of spend into $1M closed and a $1.5M pipeline. Sales finally trusts the numbers.",
    result: "$1M closed",
    rating: 5,
  },
  {
    name: "Mia K.",
    role: "Agency Owner",
    text: "Their research tooling changed how we handle client work. The insights are actionable and save us hours every week.",
    rating: 5,
  },
  {
    name: "Jon D.",
    role: "D2C Founder",
    text: "The strategy and execution together gave us a clear growth path. We saw real movement inside the first month.",
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
      "BrandAlly was founded by a marketing operator with over 12 years of experience in paid media, growth strategy, reporting, and creative analysis.",
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
