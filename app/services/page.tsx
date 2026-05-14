import type { Metadata } from "next";
import Link from "next/link";
import {
  Brain,
  BarChart3,
  GraduationCap,
  Rocket,
  ArrowRight,
  CheckCircle2,
  Megaphone,
} from "lucide-react";
import { PRODUCTS, TESTIMONIALS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "SaaS marketing tools and growth consulting for agencies, D2C brands, and founders.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  brain: Brain,
  barChart3: BarChart3,
  graduationCap: GraduationCap,
  rocketIcon: Rocket,
};

const consultingIncludes = [
  "Full marketing audit of your current setup",
  "Detailed execution plan with actionable steps",
  "Channel-by-channel strategy breakdown",
  "Creative and messaging analysis",
  "Competitive landscape review",
  "30-day follow-up check-in",
];

const paidAdsPlatforms = [
  "Meta Ads (Facebook & Instagram)",
  "Google Ads (Search, Shopping, Performance Max)",
  "TikTok Ads",
  "LinkedIn Ads",
];

const paidAdsIncludes = [
  "Account setup, pixel/conversion tracking, and audience build",
  "Campaign structure, creative testing, and weekly optimisation",
  "Creative briefs handed to your team (or ours) every 2 weeks",
  "Bi-weekly performance reports with next-step recommendations",
  "Direct Slack/email access to your account lead",
  "Monthly strategy call to review spend, ROAS, and roadmap",
];

const platformDetails = [
  {
    name: "Meta Ads",
    tag: "Facebook + Instagram",
    bestFor: "D2C, ecommerce, lead gen",
    items: [
      "Pixel + Conversions API (CAPI) setup with deduplication",
      "Advantage+ Shopping Campaigns and Advantage+ Audiences",
      "Full-funnel structure: prospecting, retargeting, retention",
      "Static, video, UGC, carousel, and Reels creative testing",
      "Catalog and Dynamic Product Ads (DPA) for ecommerce",
      "Weekly creative iteration based on top performers",
    ],
  },
  {
    name: "Google Ads",
    tag: "Search, Shopping, Performance Max",
    bestFor: "Bottom-of-funnel demand capture",
    items: [
      "Keyword research with intent-mapped Search campaigns",
      "Performance Max with asset groups and audience signals",
      "Google Shopping + Merchant Center feed optimisation",
      "Enhanced Conversions and offline conversion imports",
      "YouTube ads and demand gen campaigns (where relevant)",
      "Search-term audits, negative keyword pruning, bid tuning",
    ],
  },
  {
    name: "TikTok Ads",
    tag: "Spark Ads, In-Feed, TopView",
    bestFor: "Brand discovery, viral creative",
    items: [
      "Pixel + Events API setup with first-party deduplication",
      "Spark Ads to amplify organic creator content",
      "In-Feed and TopView placements for awareness scale",
      "Creator brief packs and UGC sourcing guidance",
      "Rapid creative refresh cadence (TikTok burns ads fast)",
      "Smart Performance and ROAS-optimised campaign builds",
    ],
  },
  {
    name: "LinkedIn Ads",
    tag: "Sponsored Content, Lead Gen Forms",
    bestFor: "B2B, SaaS, enterprise lead gen",
    items: [
      "Insight Tag setup and offline conversion tracking",
      "Sponsored Content (single image, video, carousel, doc)",
      "Lead Gen Forms with native CRM (HubSpot/Salesforce) sync",
      "Audience targeting by job title, function, seniority, firmographic",
      "Account-Based Marketing (ABM) campaigns and matched audiences",
      "B2B-specific creative briefs tuned for the LinkedIn feed",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-dark to-brand-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-brand-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Our Services
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            What We Offer
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Tailored SaaS tools and hands-on growth consulting to help agencies,
            D2C brands, and founders improve research, reporting, and marketing
            performance.
          </p>
        </div>
      </section>

      {/* SaaS Tools */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-brand-dark">SaaS Tools</h2>
            <p className="text-gray-600 mt-2">
              Powerful marketing tools designed to simplify research, reporting,
              and automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {PRODUCTS.map((product) => {
              const Icon = iconMap[product.icon] || Brain;
              return (
                <a
                  key={product.name}
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-5 p-8 rounded-2xl border border-gray-100 hover:border-brand-primary/30 hover:shadow-lg transition"
                >
                  <div className="shrink-0 w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-dark rounded-xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-primary transition">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mt-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-brand-primary transition mt-2 shrink-0" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consulting */}
      <section className="bg-brand-light py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand-primary font-semibold text-sm uppercase tracking-wider mb-2">
                Growth Consulting
              </p>
              <h2 className="text-3xl font-bold text-brand-dark mb-4">
                Strategic Guidance to Scale
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our consulting engagement starts with a deep dive into your
                marketing operations, followed by a comprehensive execution plan
                tailored to your business goals.
              </p>
              <ul className="space-y-3 mb-8">
                {consultingIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex bg-brand-primary hover:bg-brand-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                Get Started — $2,500
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="text-center">
                <p className="text-5xl font-bold text-brand-primary mb-2">
                  $2,500
                </p>
                <p className="text-xl text-brand-dark font-medium mb-4">
                  Marketing Service Package
                </p>
                <p className="text-gray-500 mb-6">
                  Comprehensive audit + execution plan building
                </p>
                <div className="border-t border-gray-100 pt-6">
                  <p className="text-sm text-gray-500">
                    Includes a{" "}
                    <span className="font-semibold text-brand-dark">
                      15-Day Satisfaction Guarantee
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paid Ads as a Service */}
      <section id="paid-ads" className="bg-white py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-brand-light rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-brand-primary to-brand-dark rounded-xl flex items-center justify-center">
                  <Megaphone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-5xl font-bold text-brand-primary leading-none">
                    $2,000
                    <span className="text-lg text-gray-500 font-medium">
                      {" "}
                      / month
                    </span>
                  </p>
                </div>
              </div>
              <p className="text-xl text-brand-dark font-semibold mb-2">
                Paid Ads Management
              </p>
              <p className="text-gray-500 mb-6">
                Across Meta, Google, TikTok, and LinkedIn
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {paidAdsPlatforms.map((p) => (
                  <div
                    key={p}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-6 text-center">
                <p className="text-sm text-gray-500">
                  No long-term contract.{" "}
                  <span className="font-semibold text-brand-dark">
                    Cancel anytime after 30 days.
                  </span>
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <p className="text-brand-primary font-semibold text-sm uppercase tracking-wider mb-2">
                Paid Ads as a Service
              </p>
              <h2 className="text-3xl font-bold text-brand-dark mb-4">
                We Run Your Ads, You Run Your Business
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                A flat monthly retainer to manage your paid media across every
                major channel. We handle the strategy, the creative briefs, the
                optimisation, and the reporting, so you can focus on the rest
                of the business.
              </p>
              <ul className="space-y-3 mb-8">
                {paidAdsIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex bg-brand-primary hover:bg-brand-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                Start Running Ads — $2,000/mo
              </Link>
              <p className="text-xs text-gray-500 mt-3">
                Ad spend billed separately. Minimum recommended ad budget:
                $3,000/month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms We Manage */}
      <section className="bg-brand-light py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-brand-primary font-semibold text-sm uppercase tracking-wider mb-2">
              Platforms We Manage
            </p>
            <h2 className="text-3xl font-bold text-brand-dark">
              Deep Expertise on Every Channel
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              The $2,000/mo retainer covers the platforms below. Pick one,
              pick all four, the price stays the same.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {platformDetails.map((platform) => (
              <div
                key={platform.name}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-brand-primary/30 hover:shadow-lg transition"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-2xl font-bold text-brand-dark">
                    {platform.name}
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full">
                    {platform.tag}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-5">
                  Best for: {platform.bestFor}
                </p>
                <ul className="space-y-2.5">
                  {platform.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-3.5 rounded-lg font-semibold text-lg transition shadow-sm"
            >
              Get a Custom Plan — $2,000/mo
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-dark text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.slice(0, 2).map((t) => (
              <div
                key={t.name}
                className="bg-brand-light rounded-2xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-brand-dark">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-brand-dark to-brand-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow?</h2>
          <p className="text-gray-300 mb-8">
            Let&apos;s talk about how BrandAlly can help your business scale.
          </p>
          <Link
            href="/contact"
            className="bg-brand-accent hover:bg-brand-accent/90 text-white px-8 py-3.5 rounded-lg font-semibold text-lg transition shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
