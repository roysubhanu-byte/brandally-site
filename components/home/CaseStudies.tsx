import { ArrowUpRight } from "lucide-react";
import { CASE_STUDIES } from "@/lib/constants";

export default function CaseStudies() {
  return (
    <section className="bg-ink py-24 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-lime/40 bg-lime/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-lime">
              Proof
            </span>
            <h2 className="font-display mt-6 text-4xl md:text-5xl font-bold text-white">
              Real accounts. Real revenue.
            </h2>
            <p className="mt-4 text-muted">
              A few brands we&apos;ve scaled, with the numbers pulled straight
              from their dashboards. Delivered with our partner ClickTrac.
            </p>
          </div>
          {/* BrandAlly stamp */}
          <div className="shrink-0 rounded-2xl border border-line bg-surface px-5 py-3">
            <p className="font-display text-lg font-bold text-white">
              brand<span className="text-lime">ally</span>
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted/70">
              Paid media results
            </p>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-4">
          {CASE_STUDIES.map((cs) => (
            <a
              key={cs.slug}
              href={cs.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-line bg-surface p-7 hover:border-lime/40 transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted/70">
                    {cs.industry}
                  </p>
                  <h3 className="font-display mt-2 text-2xl font-bold text-white">
                    {cs.client}
                  </h3>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted/50 group-hover:text-lime transition shrink-0" />
              </div>

              <p className="mt-4 text-lg font-semibold text-lime">
                {cs.headline}{" "}
                <span className="text-muted font-normal text-base">
                  {cs.timeframe}
                </span>
              </p>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                {cs.summary}
              </p>

              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-line pt-5">
                {cs.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="font-display text-2xl font-bold text-white">
                      {m.value}
                    </p>
                    <p className="text-xs text-muted mt-0.5">{m.label}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white group-hover:text-lime transition">
                View the case study (PDF)
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
