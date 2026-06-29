import { CASE_STUDIES } from "@/lib/constants";

// Splits a headline around its accent number so the figure can render in lime.
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
              Numbers pulled straight from client dashboards. Categories shown,
              names kept private.
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

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {CASE_STUDIES.map((cs) => (
            <div
              key={cs.slug}
              className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface"
            >
              {/* Result panel — outcome is the hero */}
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
                <h3 className="font-display relative mt-3 text-3xl md:text-[2.6rem] font-bold leading-[1.02] text-white">
                  <Headline text={cs.headline} accent={cs.accent} />
                </h3>
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

                <div className="mt-auto grid grid-cols-3 gap-3 border-t border-line pt-5">
                  {cs.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="font-display text-2xl font-bold text-white">
                        {m.value}
                      </p>
                      <p className="mt-0.5 text-xs text-muted">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
