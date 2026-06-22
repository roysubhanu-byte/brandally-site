import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const reviews = TESTIMONIALS.slice(0, 4);

  return (
    <section className="bg-ink py-24 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-lime/40 bg-lime/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-lime">
            Reviews
          </span>
          <h2 className="font-display mt-6 text-4xl md:text-5xl font-bold text-white">
            What clients say after the numbers move.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-4">
          {reviews.map((t) => {
            const result = (t as { result?: string }).result;
            return (
            <div
              key={t.name}
              className="rounded-2xl border border-line bg-surface p-7"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-lime text-lg">
                      ★
                    </span>
                  ))}
                </div>
                {result && (
                  <span className="rounded-full border border-lime/40 bg-lime/10 px-3 py-1 text-xs font-semibold text-lime">
                    {result}
                  </span>
                )}
              </div>
              <p className="mt-4 text-white/90 leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-5 border-t border-line pt-4">
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-sm text-muted">{t.role}</p>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
