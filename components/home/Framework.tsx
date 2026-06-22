"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

type Tab = {
  key: string;
  num: string;
  title: string;
  headline: string;
  truths: string[];
  fixes: string[];
  cta: string;
  scoreLabel: string;
  scores: { name: string; value: number }[];
};

const TABS: Tab[] = [
  {
    key: "audience",
    num: "01",
    title: "Audience",
    headline: "Reach the people who actually buy.",
    truths: [
      "More reach isn't more revenue.",
      "The wrong audience drains the budget.",
    ],
    fixes: [
      "Who your best customers really are",
      "Which platforms reach them cheapest",
      "Where you're wasting spend right now",
    ],
    cta: "Budget pointed at buyers, not bystanders.",
    scoreLabel: "Targeting score",
    scores: [
      { name: "Audience fit", value: 82 },
      { name: "Platform mix", value: 64 },
      { name: "Targeting precision", value: 71 },
      { name: "Wasted spend cut", value: 49 },
    ],
  },
  {
    key: "creative",
    num: "02",
    title: "Creative",
    headline: "Ads that stop the scroll and sell.",
    truths: [
      "Pretty creative still has to convert.",
      "Winners win for a reason you can repeat.",
    ],
    fixes: [
      "Which hooks earn the click",
      "Why your best ads actually work",
      "What to test in the next batch",
    ],
    cta: "Repeatable winners, not lucky one-offs.",
    scoreLabel: "Creative score",
    scores: [
      { name: "Hook strength", value: 76 },
      { name: "Thumb-stop rate", value: 68 },
      { name: "Message match", value: 58 },
      { name: "Test velocity", value: 80 },
    ],
  },
  {
    key: "conversion",
    num: "03",
    title: "Conversion",
    headline: "Turn clicks into customers.",
    truths: [
      "Traffic you don't convert is money lost.",
      "The funnel matters as much as the ad.",
    ],
    fixes: [
      "Where clicks leak before checkout",
      "Which offers lift conversion",
      "What the landing page needs to say",
    ],
    cta: "More sales from the same traffic.",
    scoreLabel: "Conversion score",
    scores: [
      { name: "Landing page fit", value: 88 },
      { name: "Offer strength", value: 72 },
      { name: "Funnel leaks fixed", value: 79 },
      { name: "Checkout flow", value: 61 },
    ],
  },
  {
    key: "scaling",
    num: "04",
    title: "Scaling",
    headline: "Grow spend without breaking ROAS.",
    truths: [
      "Scaling the wrong ad scales the loss.",
      "Budget jumps need structure.",
    ],
    fixes: [
      "What's genuinely ready to scale",
      "How fast to raise the budget",
      "When to cut a loser early",
    ],
    cta: "More spend, steady returns.",
    scoreLabel: "Scaling score",
    scores: [
      { name: "Scale readiness", value: 70 },
      { name: "ROAS stability", value: 66 },
      { name: "Budget pacing", value: 84 },
      { name: "Account structure", value: 53 },
    ],
  },
];

export default function Framework() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <section className="bg-ink py-24 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <span className="inline-flex items-center rounded-full border border-lime/40 bg-lime/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-lime">
          The framework
        </span>
        <h2 className="font-display mt-6 text-4xl md:text-5xl font-bold text-white max-w-3xl">
          Your ad spend works harder when these levers work together.
        </h2>

        <div className="mt-12 overflow-hidden rounded-2xl border border-line bg-surface">
          {/* Tab bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-line">
            {TABS.map((t, i) => (
              <button
                key={t.key}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-5 py-4 text-sm font-semibold uppercase tracking-wider transition ${
                  i === active
                    ? "bg-lime text-ink"
                    : "text-muted hover:text-white"
                }`}
              >
                <span className="opacity-60">{t.num}</span>
                {t.title}
              </button>
            ))}
          </div>

          {/* Body */}
          <div className="grid md:grid-cols-2">
            {/* Left */}
            <div className="p-8 md:p-10 md:border-r border-line">
              <p className="text-xs font-semibold uppercase tracking-wider text-lime">
                {tab.num} / {tab.title}
              </p>
              <h3 className="font-display mt-3 text-2xl font-bold text-white">
                {tab.headline}
              </h3>
              <div className="mt-5 space-y-1.5">
                {tab.truths.map((t) => (
                  <p key={t} className="text-muted">
                    &mdash; {t}
                  </p>
                ))}
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-wider text-muted/70">
                We fix
              </p>
              <ul className="mt-3 space-y-2">
                {tab.fixes.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-white">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex items-center gap-3 rounded-xl border border-line bg-ink/60 px-4 py-3">
                <ArrowRight className="h-4 w-4 text-lime shrink-0" />
                <span className="text-sm text-white">{tab.cta}</span>
              </div>
            </div>

            {/* Right: score panel */}
            <div className="p-8 md:p-10">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted/70">
                  {tab.scoreLabel}
                </p>
                <span className="rounded-full border border-line px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted/60">
                  Illustrative
                </span>
              </div>
              <div className="mt-6 space-y-5">
                {tab.scores.map((s) => (
                  <div key={s.name}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted">{s.name}</span>
                      <span className="font-semibold text-lime">{s.value}%</span>
                    </div>
                    <div className="mt-2 h-1.5 rounded-full bg-line overflow-hidden">
                      <div
                        className="h-full rounded-full bg-lime transition-all duration-500"
                        style={{ width: `${s.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
