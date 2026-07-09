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
  { value: "$3.3M+", label: "Revenue & pipeline driven", accent: true },
  { value: "20X", label: "Peak blended ROAS" },
  { value: "$4.53", label: "Lowest cost per lead" },
  { value: "7", label: "Accounts scaled" },
];

// Splits a headline around its accent figure so it can render in lime.
function Headline({ text, accent }: { text: string; accent?: string }) {
  if (!accent || !text.includes(accent)) {
    return <>{text}</>;
  }
  const [before, after] = text.split(accent);
  return (
    <>
      {before}
      <span className="text-lime">{accent}</span>
      {after}
    </>
  );
}

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink py-24">
        <div className="absolute inset-0 grid-bg grid-bg-fade" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center rounded-full border border-lime/40 bg-lime/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-lime">
            Case studies
          </span>
          <h1 className="font-display mt-6 text-5xl md:text-6xl font-bold text-white">
            Real accounts. <span className="text-lime">Real revenue.</span>
          </h1>
          <p className="mt-5 text-lg text-muted max-w-2xl mx-auto">
            Numbers pulled straight from client dashboards. Categories shown,
            names kept private. This is the work, not a pitch.
          </p>

          {/* Aggregate strip */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 overflow-hidden rounded-2xl border border-line bg-surface divide-x divide-y md:divide-y-0 divide-line">
            {AGGREGATE.map((s) => (
              <div key={s.label} className="p-6">
                <p
                  className={`font-display text-3xl md:text-4xl font-bold ${
                    s.accent ? "text-lime" : "text-white"
                  }`}
                >
                  {s.value}
                </p>
                <p className="mt-1.5 text-xs uppercase tracking-wider text-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-ink py-24 border-t border-line">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-5">
            {CASE_STUDIES.map((cs) => (
              <a
                key={cs.slug}
                href={cs.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition duration-200 hover:-translate-y-1 hover:border-lime/50 hover:shadow-[0_0_40px_-12px_rgba(198,242,78,0.35)]"
              >
                {/* Result panel */}
                <div className="relative overflow-hidden border-b border-line px-7 pt-7 pb-8">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-80"
                    style={{
                      background:
                        "radial-gradient(80% 120% at 0% 0%, rgba(198,242,78,0.16), rgba(198,242,78,0) 55%)",
                    }}
                  />
                  <p className="relative text-xs font-semibold uppercase tracking-wider text-muted/70">
                    {cs.client}
                  </p>
                  <h2 className="font-display relative mt-3 text-3xl md:text-[2.6rem] font-bold leading-[1.02] text-white">
                    <Headline text={cs.headline} accent={cs.accent} />
                  </h2>
                  <p className="relative mt-3 text-sm font-medium text-muted">
                    {cs.industry} <span className="text-muted/40">·</span>{" "}
                    {cs.timeframe}
                  </p>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col px-7 pb-7 pt-6">
                  <p className="text-sm leading-relaxed text-muted line-clamp-3">
                    {cs.summary}
                  </p>

                  <div className="mt-6 grid grid-cols-3 gap-3 border-t border-line pt-5">
                    {cs.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="font-display text-2xl font-bold text-white">
                          {m.value}
                        </p>
                        <p className="mt-0.5 text-xs text-muted">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-lime">
                    <FileText className="h-4 w-4" />
                    Read the case study
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20 border-t border-line">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-4">
            Want numbers like these on your account?
          </h2>
          <p className="text-muted mb-8 max-w-xl mx-auto">
            Tell us where you&apos;re stuck. We&apos;ll look at your Meta,
            Google, and TikTok accounts and find where the budget is leaking.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-lime px-8 py-3.5 font-semibold text-ink hover:bg-lime-soft transition glow-lime"
          >
            Book a paid media audit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
