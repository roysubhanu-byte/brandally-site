import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { CASE_STUDIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real accounts, real revenue. Paid media results from BrandAlly clients across D2C, B2B, coaching, and local services. Numbers pulled straight from client dashboards.",
};

const AGGREGATE = [
  { value: "$3.3M+", label: "Revenue & pipeline driven" },
  { value: "20X", label: "Peak blended ROAS" },
  { value: "$4.53", label: "Lowest cost per lead" },
  { value: "7", label: "Accounts scaled" },
];

// Splits a headline around its accent figure so it can render highlighted.
function Headline({ text, accent }: { text: string; accent?: string }) {
  if (!accent || !text.includes(accent)) {
    return <>{text}</>;
  }
  const [before, after] = text.split(accent);
  return (
    <>
      {before}
      <span className="rounded-lg bg-lime px-1.5">{accent}</span>
      {after}
    </>
  );
}

export default function CaseStudiesPage() {
  return (
    <div className="bg-[#faf9f4] text-[#171712]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#faf9f4]">
        <div className="absolute inset-0 grid-bg-light grid-bg-fade" />
        <div className="relative max-w-4xl mx-auto px-6 pt-20 pb-14 md:pt-28 text-center">
          <span className="inline-flex items-center rounded-full border border-[#e6e4d9] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#5c7a1e]">
            Case studies
          </span>
          <h1 className="font-display mt-6 text-4xl md:text-6xl font-bold">
            Real accounts.{" "}
            <span className="rounded-xl bg-lime px-2">Real revenue.</span>
          </h1>
          <p className="mt-5 text-lg text-[#636256] max-w-2xl mx-auto">
            Numbers pulled straight from client dashboards. Categories shown,
            names kept private. This is the work, not a pitch.
          </p>

          {/* Aggregate strip */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 overflow-hidden rounded-2xl border border-[#e6e4d9] bg-white divide-x divide-y md:divide-y-0 divide-[#e6e4d9]">
            {AGGREGATE.map((s) => (
              <div key={s.label} className="p-6">
                <p className="font-display text-3xl md:text-4xl font-bold">
                  {s.value}
                </p>
                <p className="mt-1.5 text-xs uppercase tracking-wider text-[#636256]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-5">
          {CASE_STUDIES.map((cs) => (
            <a
              key={cs.slug}
              href={cs.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#e6e4d9] bg-white transition duration-200 hover:-translate-y-1 hover:border-lime"
            >
              {/* Result panel */}
              <div className="border-b border-[#f0efe6] px-7 pt-7 pb-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#5c7a1e]">
                  {cs.client}
                </p>
                <h2 className="font-display mt-3 text-3xl md:text-[2.4rem] font-bold leading-[1.05]">
                  <Headline text={cs.headline} accent={cs.accent} />
                </h2>
                <p className="mt-3 text-sm font-medium text-[#636256]">
                  {cs.industry} <span className="text-[#636256]/40">·</span>{" "}
                  {cs.timeframe}
                </p>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col px-7 pb-7 pt-6">
                <p className="text-sm leading-relaxed text-[#636256] line-clamp-3">
                  {cs.summary}
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-[#f0efe6] pt-5">
                  {cs.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="font-display text-2xl font-bold">
                        {m.value}
                      </p>
                      <p className="mt-0.5 text-xs text-[#636256]">{m.label}</p>
                    </div>
                  ))}
                </div>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#171712]">
                  <FileText className="h-4 w-4" />
                  Read the case study
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#e6e4d9] bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Want numbers like these on your account?
          </h2>
          <p className="text-[#636256] mb-8 max-w-xl mx-auto">
            Tell us where you&apos;re stuck. We&apos;ll look at your Meta and
            Google accounts and find where the budget is leaking.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-lime px-8 py-3.5 font-semibold text-[#171712] hover:bg-lime-soft transition"
          >
            Book a free profit audit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
