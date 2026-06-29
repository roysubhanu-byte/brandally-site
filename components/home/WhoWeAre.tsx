import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BRAND } from "@/lib/constants";

export default function WhoWeAre() {
  return (
    <section className="bg-ink py-24 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          {/* Text */}
          <div>
            <span className="inline-flex items-center rounded-full border border-lime/40 bg-lime/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-lime">
              Who we are
            </span>
            <h2 className="font-display mt-6 text-4xl md:text-5xl font-bold text-white">
              Built by media buyers, for growth.
            </h2>
            <p className="mt-6 text-muted leading-relaxed">
              We're a paid media team for D2C brands and agencies. We manage the
              ad accounts, test the creative, and own the numbers, so you can
              spend more without watching ROAS slide.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Built on {BRAND.founder.experience} years running paid media across
              Meta, Google, and TikTok. Deep experience, paired with the tools we
              built in-house.
            </p>
            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-lime hover:gap-3 transition-all"
            >
              Learn more about us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
