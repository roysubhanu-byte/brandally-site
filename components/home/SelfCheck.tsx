"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const ITEMS = [
  "We're spending on ads, but returns are inconsistent",
  "Our cost per acquisition keeps climbing",
  "We can't tell which creative is actually working",
  "Every time we scale, ROAS falls apart",
  "We're not sure which platform deserves more budget",
  "We've tried agencies, but nothing really changed",
];

function verdict(count: number) {
  if (count === 0)
    return {
      tag: "Your account looks healthy.",
      copy: "You're in a good spot. Let's keep the spend profitable.",
    };
  if (count <= 2)
    return {
      tag: "A couple of leaks to plug.",
      copy: "Small fixes in targeting or creative can pull your cost per acquisition back down fast.",
    };
  if (count <= 4)
    return {
      tag: "Your ad spend has friction.",
      copy: "The bottleneck is showing. A focused audit tells you exactly where the budget is leaking.",
    };
  return {
    tag: "Time to fix the account, not the symptoms.",
    copy: "Most of these trace back to one or two root causes. That's what a BrandAlly paid media audit surfaces.",
  };
}

export default function SelfCheck() {
  const [checked, setChecked] = useState<boolean[]>(Array(ITEMS.length).fill(false));
  const count = checked.filter(Boolean).length;
  const v = verdict(count);

  function toggle(i: number) {
    setChecked((prev) => prev.map((c, idx) => (idx === i ? !c : c)));
  }

  return (
    <section className="bg-ink py-24 border-t border-line">
      <div className="max-w-5xl mx-auto px-6">
        <span className="inline-flex items-center rounded-full border border-lime/40 bg-lime/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-lime">
          Self check
        </span>
        <h2 className="font-display mt-6 text-4xl md:text-5xl font-bold text-white max-w-2xl">
          What&apos;s slowing down your growth right now?
        </h2>
        <p className="mt-4 max-w-md text-muted">
          Check what feels familiar. The more boxes you tick, the clearer the
          bottleneck.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-4">
          {ITEMS.map((item, i) => (
            <button
              key={i}
              onClick={() => toggle(i)}
              className={`flex items-center gap-4 rounded-xl border px-5 py-4 text-left transition ${
                checked[i]
                  ? "border-lime/60 bg-lime/10"
                  : "border-line bg-surface hover:border-white/20"
              }`}
            >
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border transition ${
                  checked[i] ? "border-lime bg-lime" : "border-line bg-ink"
                }`}
              >
                {checked[i] && <Check className="h-4 w-4 text-ink" />}
              </span>
              <span className={checked[i] ? "text-white" : "text-muted"}>
                {item}
              </span>
            </button>
          ))}
        </div>

        {/* Result */}
        <div className="mt-8 rounded-2xl border border-line bg-surface p-7">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted/70">
            {count} of {ITEMS.length} checked
          </p>
          <h3 className="font-display mt-2 text-2xl font-bold text-white">
            {v.tag}
          </h3>
          <p className="mt-2 text-muted">{v.copy}</p>
          {count > 0 && (
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-semibold text-ink hover:bg-lime-soft transition"
            >
              Book a paid media audit <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
