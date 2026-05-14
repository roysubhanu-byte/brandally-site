import Link from "next/link";
import { Megaphone, CheckCircle2, ArrowRight } from "lucide-react";

const platforms = [
  "Meta Ads",
  "Google Ads",
  "TikTok Ads",
  "LinkedIn Ads",
];

const bullets = [
  "Strategy, creative briefs, and weekly optimisation",
  "Bi-weekly reporting + monthly strategy call",
  "Direct Slack/email access to your account lead",
  "No long contract, cancel anytime after 30 days",
];

export default function PaidAdsCallout() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-gradient-to-br from-brand-dark to-brand-primary text-white p-10 md:p-14 shadow-lg">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 mb-5">
                <Megaphone className="w-4 h-4 text-brand-accent" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Paid Ads as a Service
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                We Run Your Ads. You Run Your Business.
              </h2>
              <p className="text-gray-200 leading-relaxed mb-6">
                Flat monthly retainer to manage your paid media across every
                major channel. We handle strategy, creative, optimisation, and
                reporting, so you can stay focused on the rest of the
                business.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {platforms.map((p) => (
                  <span
                    key={p}
                    className="bg-white/10 border border-white/20 text-sm px-3 py-1.5 rounded-full"
                  >
                    {p}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white px-6 py-3.5 rounded-lg font-semibold transition shadow"
                >
                  Start at $2,000/mo
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center text-white/90 hover:text-white font-medium underline-offset-4 hover:underline"
                >
                  See what&apos;s included
                </Link>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-accent mb-4">
                What you get
              </p>
              <ul className="space-y-3">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                    <span className="text-gray-100">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-white/10 mt-6 pt-6">
                <p className="text-sm text-gray-300">
                  Ad spend billed separately. Recommended minimum ad budget:{" "}
                  <span className="font-semibold text-white">
                    $3,000/month
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
