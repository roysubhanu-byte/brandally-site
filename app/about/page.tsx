import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, Mail } from "lucide-react";
import { BRAND, TESTIMONIALS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about BrandAlly LLC — founded by Subhanu Roy with 12+ years of marketing expertise.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-dark to-brand-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-brand-accent font-semibold text-sm uppercase tracking-wider mb-3">
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl mx-auto">
            Helping Marketing Agencies and Brands Grow Smarter
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Tailored SaaS tools and expert consulting built on real-world
            marketing experience.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand-primary font-semibold text-sm uppercase tracking-wider mb-2">
                Our Story
              </p>
              <h2 className="text-3xl font-bold text-brand-dark mb-6">
                Founded on Experience
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {BRAND.founder.bio}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Today, BrandAlly combines practical marketing expertise with
                straightforward tools, enabling teams to research more
                efficiently, improve reporting, and expand operations with
                greater confidence.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center text-brand-primary font-semibold hover:underline"
              >
                Explore our services &rarr;
              </Link>
            </div>

            <div className="bg-gradient-to-br from-brand-primary/10 to-brand-dark/10 rounded-2xl p-10 text-center">
              <div className="w-24 h-24 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">SR</span>
              </div>
              <h3 className="text-xl font-bold text-brand-dark">
                {BRAND.founder.name}
              </h3>
              <p className="text-brand-primary font-medium">Founder & CEO</p>
              <p className="text-gray-500 mt-2">
                {BRAND.founder.experience} years in marketing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-brand-light py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-brand-primary font-semibold text-sm uppercase tracking-wider mb-2">
            Our Mission
          </p>
          <h2 className="text-3xl font-bold text-brand-dark mb-6">
            Building Systems That Scale Businesses
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {BRAND.description}
          </p>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-dark text-center mb-12">
            What We Focus On
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Paid Media",
                desc: "Data-driven advertising strategies across Meta, Google, TikTok, and LinkedIn.",
              },
              {
                title: "Growth Strategy",
                desc: "Systematic approaches to testing, scaling, and optimizing marketing performance.",
              },
              {
                title: "Creative Analysis",
                desc: "Deep creative intelligence to understand what works and why across your ad portfolio.",
              },
            ].map((area) => (
              <div
                key={area.title}
                className="bg-brand-light rounded-2xl p-8 text-center"
              >
                <h3 className="text-xl font-bold text-brand-dark mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-600">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-brand-light py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-dark text-center mb-12">
            Client Testimonials
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.slice(2).map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-8 shadow-sm">
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

      {/* Location */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-dark text-center mb-12">
            Where to Find Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <MapPin className="w-8 h-8 text-brand-primary mx-auto mb-3" />
              <h3 className="font-semibold text-brand-dark mb-1">Address</h3>
              <p className="text-gray-600 text-sm">
                {BRAND.address.street}
                <br />
                {BRAND.address.city}, {BRAND.address.state} {BRAND.address.zip}
              </p>
            </div>
            <div>
              <Clock className="w-8 h-8 text-brand-primary mx-auto mb-3" />
              <h3 className="font-semibold text-brand-dark mb-1">Hours</h3>
              <p className="text-gray-600 text-sm">{BRAND.hours}</p>
            </div>
            <div>
              <Mail className="w-8 h-8 text-brand-primary mx-auto mb-3" />
              <h3 className="font-semibold text-brand-dark mb-1">Email</h3>
              <p className="text-gray-600 text-sm">{BRAND.email}</p>
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            BrandAlly LLC is registered in Wyoming and serves clients remotely
            across the USA.
          </p>
        </div>
      </section>
    </>
  );
}
