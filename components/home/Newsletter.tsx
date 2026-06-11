import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="bg-ink py-24 border-t border-line">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-lime/30 bg-surface p-10 md:p-16 text-center">
          <div className="absolute inset-0 grid-bg grid-bg-fade opacity-60" />
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-40 w-40 rounded-full bg-lime/20 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
              Ready to make your ad spend profitable?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
              Let&apos;s look at your Meta, Google, and TikTok accounts together
              and find where the budget is leaking. Start with an audit.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-7 py-3.5 font-semibold text-ink hover:bg-lime-soft transition glow-lime"
              >
                Contact us today <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-line bg-ink/40 px-7 py-3.5 font-semibold text-white hover:border-white/40 transition"
              >
                View services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
