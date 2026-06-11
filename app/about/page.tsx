import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, Mail, ArrowRight } from "lucide-react";
import { BRAND, TESTIMONIALS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about BrandAlly LLC, founded by Subhanu Roy with 12+ years of marketing expertise.",
};

const focusAreas = [
  {
    title: "Paid Media",
    desc: "Data-driven advertising across Meta, Google, TikTok, and LinkedIn.",
  },
  {
    title: "Growth Strategy",
    desc: "Systematic testing, scaling, and optimizing of marketing performance.",
  },
  {
    title: "Creative Analysis",
    desc: "Deep creative intelligence to understand what works and why across your ads.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink py-24">
        <div className="absolute inset-0 grid-bg grid-bg-fade" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center rounded-full border border-lime/40 bg-lime/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-lime">
            About us
          </span>
          <h1 className="font-display mt-6 text-5xl md:text-6xl font-bold text-white max-w-3xl mx-auto leading-[0.98]">
            Helping agencies and brands{" "}
            <span className="text-lime">grow smarter.</span>
          </h1>
          <p className="mt-5 text-lg text-muted max-w-2xl mx-auto">
            Tailored SaaS tools and expert consulting built on real-world
            marketing experience.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="bg-ink py-24 border-t border-line">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center rounded-full border border-lime/40 bg-lime/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-lime">
                Our story
              </span>
              <h2 className="font-display mt-6 text-4xl font-bold text-white mb-6">
                Founded on experience.
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                {BRAND.founder.bio}
              </p>
              <p className="text-muted leading-relaxed mb-6">
                Today, BrandAlly combines practical marketing expertise with
                straightforward tools, so teams can research more efficiently,
                improve reporting, and scale with greater confidence.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-semibold text-lime hover:gap-3 transition-all"
              >
                Explore our services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="rounded-2xl overflow-hidden border border-line bg-surface">
              <Image
                src="/images/founder-headshot.png"
                alt="Subhanu Roy, Founder & CEO of BrandAlly"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="p-6 text-center border-t border-line">
                <h3 className="text-xl font-bold text-white">
                  {BRAND.founder.name}
                </h3>
                <p className="text-lime font-medium">Founder & CEO</p>
                <p className="text-muted mt-1">
                  {BRAND.founder.experience} years in marketing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-ink py-24 border-t border-line">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden border border-line order-2 md:order-1">
              <Image
                src="/images/consulting.png"
                alt="BrandAlly consulting session"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <span className="inline-flex items-center rounded-full border border-lime/40 bg-lime/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-lime">
                Our mission
              </span>
              <h2 className="font-display mt-6 text-4xl font-bold text-white mb-6">
                Systems that scale businesses.
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                {BRAND.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="bg-ink py-24 border-t border-line">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-white text-center mb-12">
            What we focus on
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-2xl border border-line bg-surface p-8"
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  {area.title}
                </h3>
                <p className="text-muted">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-ink py-24 border-t border-line">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-white text-center mb-12">
            Client testimonials
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {TESTIMONIALS.slice(2).map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-line bg-surface p-8"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-lime text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-white/90 leading-relaxed mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-muted">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-ink py-24 border-t border-line">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-white text-center mb-12">
            Where to find us
          </h2>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            {[
              {
                Icon: MapPin,
                title: "Address",
                body: (
                  <>
                    {BRAND.address.street}
                    <br />
                    {BRAND.address.city}, {BRAND.address.state}{" "}
                    {BRAND.address.zip}
                  </>
                ),
              },
              { Icon: Clock, title: "Hours", body: BRAND.hours },
              { Icon: Mail, title: "Email", body: BRAND.email },
            ].map(({ Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-line bg-surface p-7"
              >
                <Icon className="w-7 h-7 text-lime mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-1">{title}</h3>
                <p className="text-muted text-sm">{body}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-muted/70 text-sm mt-8">
            BrandAlly LLC is registered in Wyoming and serves clients remotely
            across the USA.
          </p>
        </div>
      </section>
    </>
  );
}
