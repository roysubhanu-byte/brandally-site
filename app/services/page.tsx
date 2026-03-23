import type { Metadata } from "next";
import Link from "next/link";
import {
  Brain,
  BarChart3,
  GraduationCap,
  Rocket,
  ArrowRight,
  CheckCircle2,
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
