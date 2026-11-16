"use client";

import { useState } from "react";
import D2CAdJourney from "@/components/marketing/D2CAdJourney";
import MetaPost from "@/components/marketing/MetaPost";
import { ADS, JOBS, type JobKey } from "@/lib/d2cAds";

const FILTERS: (JobKey | 0)[] = [0, 1, 2, 3, 4];

export default function D2CAdJobs() {
  const [filter, setFilter] = useState<JobKey | 0>(0);
  const shown = filter === 0 ? ADS : ADS.filter((a) => a.job === filter);

  return (
    <section id="ads" className="py-20 md:py-28 scroll-mt-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <span className="block text-center text-xs font-semibold uppercase tracking-wider text-[#5c7a1e]">
          How we think about Meta ads
        </span>
        <h2 className="font-display mt-3 text-3xl md:text-5xl font-bold text-center text-balance">
          Four ads. Different people. One goal.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[#636256]">
          Nobody buys from one ad. Ad 1 makes them curious, Ads 2 and 3
          convince them, and Ad 4 closes the deal. Watch one customer&apos;s
          week.
        </p>

        <div className="mt-14">
          <D2CAdJourney />
        </div>

        <div className="mt-14 rounded-3xl bg-[#171712] p-7 md:p-10 text-white">
          <div className="grid md:grid-cols-3 gap-6 md:gap-10 items-center">
            <p className="font-display text-2xl md:text-3xl font-bold md:col-span-1">
              Ad 4 gets the credit. Ads 1, 2 and 3 did the work.
            </p>
            <p className="text-white/70 md:col-span-2">
              Most people look at ROAS ad by ad, see zero sales on the first
              three, and switch them off. Then sales drop. So we read the
              campaign first, then frequency by ad set (around 1 is finding new
              people, above 2 is closing), and only then single ads. We&apos;re
              looking for the best combination, not one winning ad.
            </p>
          </div>
        </div>

        {/* All ads */}
        <div className="mt-20 flex flex-col md:flex-row md:items-end md:justify-between gap-5">
          <div>
            <h3 className="font-display text-2xl md:text-4xl font-bold">
              Real Meta ads we run.
            </h3>
            <p className="mt-2 text-[#636256]">
              From D2C client accounts. Brand names hidden.
            </p>
          </div>
          <div
            role="tablist"
            className="flex flex-wrap gap-2"
          >
            {FILTERS.map((f) => {
              const on = f === filter;
              return (
                <button
                  key={f}
                  role="tab"
                  aria-selected={on}
                  onClick={() => setFilter(f)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    on
                      ? "border-[#171712] bg-[#171712] text-white"
                      : "border-[#e6e4d9] bg-white text-[#171712] hover:border-[#171712]"
                  }`}
                >
                  {f === 0 ? `All ${ADS.length}` : `${JOBS[f].label} · ${JOBS[f].short}`}
                </button>
              );
            })}
          </div>
        </div>

        <div
          key={filter}
          className="mt-8 -mx-6 px-6 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:overflow-visible sm:pb-0"
        >
          {shown.map((ad, i) => (
            <div
              key={ad.id}
              className="w-[80%] shrink-0 snap-center sm:w-auto animate-fade-up"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <MetaPost
                ad={ad}
                className="transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(23,23,18,0.35)]"
              />
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-[#636256] sm:hidden">
          Swipe to see all {shown.length}
        </p>
      </div>
    </section>
  );
}
