import { MapPin, Clock } from "lucide-react";
import { PARTNER } from "@/lib/constants";

export default function Partners() {
  return (
    <section className="bg-ink py-20 border-t border-line">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface p-8 md:p-12">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-lime/10 blur-3xl" />
          <div className="relative">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <span className="inline-flex items-center rounded-full border border-lime/40 bg-lime/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-lime">
                  Our partner
                </span>
                <h2 className="font-display mt-6 text-3xl md:text-4xl font-bold text-white">
                  {PARTNER.tagline}
                </h2>
                <p className="mt-4 max-w-xl text-muted leading-relaxed">
                  {PARTNER.blurb}
                </p>
              </div>

              <div className="shrink-0 rounded-2xl border border-line bg-ink px-8 py-6 text-center">
                <p className="font-display text-3xl font-bold text-white">
                  click<span className="text-lime">trac</span>
                </p>
                <p className="mt-2 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-muted/70">
                  <Clock className="w-3.5 h-3.5 text-lime" /> Every time zone
                </p>
              </div>
            </div>

            {/* Locations */}
            <div className="mt-8 border-t border-line pt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted/70 mb-4">
                Where we work
              </p>
              <div className="flex flex-wrap gap-2.5">
                {PARTNER.locations.map((loc) => (
                  <span
                    key={loc}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-ink px-4 py-2 text-sm text-white"
                  >
                    <MapPin className="w-3.5 h-3.5 text-lime" />
                    {loc}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
