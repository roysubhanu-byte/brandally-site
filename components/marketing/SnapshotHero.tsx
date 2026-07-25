"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

type Stat = { value: string; label: string };

export default function SnapshotHero({
  eyebrow,
  staticLine,
  leadIn,
  words,
  subhead,
  primaryHref = "#get-started",
  primaryLabel = "Book a free profit audit",
  secondaryHref,
  secondaryLabel,
  trustLine,
  snapshotTitle,
  snapshotStats,
  snapshotFootnote,
}: {
  eyebrow: string;
  staticLine: string;
  leadIn: string;
  words: string[];
  subhead: ReactNode;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  trustLine: string;
  snapshotTitle: string;
  snapshotStats: Stat[];
  snapshotFootnote: string;
}) {
  const [word, setWord] = useState(0);

  useEffect(() => {
    const id = setTimeout(
      () => setWord((w) => (w === words.length - 1 ? 0 : w + 1)),
      2200
    );
    return () => clearTimeout(id);
  }, [word, words.length]);

  return (
    <section className="relative overflow-hidden bg-[#faf9f4]">
      <div className="absolute inset-0 grid-bg-light grid-bg-fade" />
      <div className="pointer-events-none absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-lime/25 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Copy */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#e6e4d9] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#5c7a1e]">
            <span className="h-1.5 w-1.5 rounded-full bg-lime" />
            {eyebrow}
          </span>

          <h1 className="font-display mt-7 text-4xl md:text-6xl font-bold leading-[1.05] text-[#171712]">
            <span className="block">{staticLine}</span>
            <span className="block">{leadIn}</span>
            <span className="relative block h-[1.35em] overflow-hidden">
              {words.map((w, i) => (
                <span
                  key={w}
                  aria-hidden={word !== i}
                  className={`absolute inset-x-0 top-[0.08em] transition-all duration-700 ease-[cubic-bezier(0.34,1.3,0.5,1)] ${
                    word === i
                      ? "translate-y-0 opacity-100"
                      : i < word || (word === 0 && i === words.length - 1)
                        ? "-translate-y-full opacity-0"
                        : "translate-y-full opacity-0"
                  }`}
                >
                  <span className="inline-block rounded-2xl bg-lime px-3 pb-1">
                    {w}.
                  </span>
                </span>
              ))}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-[#636256]">{subhead}</p>

          <div className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-8 py-4 font-bold text-[#171712] shadow-lg shadow-lime/40 hover:bg-lime-soft transition"
            >
              {primaryLabel} <ArrowRight className="w-4 h-4" />
            </Link>
            {secondaryHref && secondaryLabel && (
              <Link
                href={secondaryHref}
                className="inline-flex items-center gap-1.5 font-medium text-[#636256] underline decoration-[#d8d6c9] underline-offset-4 hover:text-[#171712] transition"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
          <p className="mt-4 text-sm text-[#636256]">{trustLine}</p>
        </div>

        {/* Results snapshot panel */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-2 translate-x-3 translate-y-3 rounded-3xl bg-lime rotate-2" />
          <div className="relative rounded-3xl border border-[#e6e4d9] bg-white p-7 md:p-8 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#636256]">
                {snapshotTitle}
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime">
                <TrendingUp className="h-4 w-4 text-[#171712]" />
              </span>
            </div>
            <div className="mt-6 space-y-5">
              {snapshotStats.map((s) => (
                <div
                  key={s.label}
                  className="flex items-end justify-between border-b border-[#f0efe6] pb-4 last:border-0 last:pb-0"
                >
                  <span className="text-sm text-[#636256] max-w-[55%]">
                    {s.label}
                  </span>
                  <span className="font-display text-3xl md:text-4xl font-bold text-[#171712]">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-[#636256]/70">{snapshotFootnote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
