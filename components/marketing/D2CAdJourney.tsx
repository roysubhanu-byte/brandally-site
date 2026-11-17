"use client";

import { useEffect, useRef, useState } from "react";
import { ShoppingBag } from "lucide-react";
import MetaPost from "@/components/marketing/MetaPost";
import { ADS, JOBS } from "@/lib/d2cAds";

const STEP_MS = 4200;

const pick = (id: string) => ADS.find((a) => a.id === id)!;

const STEPS = [
  { day: "Day 1", ad: pick("ad-02"), action: "Sees it. Doesn't click." },
  { day: "Day 3", ad: pick("video-01"), action: "Sees real people wearing it. Starts to trust it." },
  { day: "Day 5", ad: pick("video-02"), action: "Wants it. Clicks, looks around, doesn't buy." },
  { day: "Day 6", ad: pick("video-03"), action: "Sees the full set for $144. Buys. This ad gets the credit." },
];

export default function D2CAdJourney() {
  const [active, setActive] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [reduced, setReduced] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      threshold: 0.35,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const running = inView && !paused && !reduced;

  useEffect(() => {
    if (!running) return;
    const id = setTimeout(() => {
      setActive((a) => (a + 1) % STEPS.length);
      setCycle((c) => c + 1);
    }, STEP_MS);
    return () => clearTimeout(id);
  }, [running, active, cycle]);

  const go = (i: number) => {
    setActive(i);
    setCycle((c) => c + 1);
  };

  return (
    <div
      ref={ref}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
    >
      {/* Steps */}
      <div>
      <ol className="grid grid-cols-2 gap-2 lg:grid-cols-1 lg:gap-3">
        {STEPS.map((s, i) => {
          const job = JOBS[s.ad.job];
          const on = i === active;
          return (
            <li key={s.day}>
              <button
                type="button"
                onClick={() => go(i)}
                aria-current={on}
                className={`relative h-full w-full overflow-hidden rounded-2xl border p-3 lg:p-5 text-left transition-all duration-300 ${
                  on
                    ? "border-[#171712] bg-white shadow-[0_8px_30px_-12px_rgba(23,23,18,0.35)]"
                    : "border-[#e6e4d9] bg-white/60 hover:bg-white"
                }`}
              >
                <div className="flex flex-col items-start gap-1.5 lg:flex-row lg:items-center lg:gap-3">
                  <span
                    className={`rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider transition-colors ${
                      on ? "bg-lime text-[#171712]" : "bg-[#f0efe6] text-[#636256]"
                    }`}
                  >
                    {s.day}
                  </span>
                  <span className="font-display text-base lg:text-lg font-bold">
                    {job.label} · {job.short}
                  </span>
                </div>
                <p className="mt-2 hidden lg:block text-[#171712]">{s.action}</p>
                <div
                  className={`hidden lg:grid transition-all duration-300 ${
                    on ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden text-sm text-[#636256]">
                    <p>{job.does}</p>
                    <p className="mt-1 font-semibold text-[#5c7a1e]">{job.freq}</p>
                  </div>
                </div>
                {on && (
                  <span
                    key={cycle}
                    className="absolute bottom-0 left-0 h-1 bg-lime animate-step-progress"
                    style={{
                      animationDuration: `${STEP_MS}ms`,
                      animationPlayState: running ? "running" : "paused",
                    }}
                  />
                )}
              </button>
            </li>
          );
        })}
      </ol>
      {/* Mobile: detail for the active step */}
      <div key={active} className="lg:hidden mt-3 rounded-2xl bg-white border border-[#e6e4d9] p-4 animate-fade-up">
        <p className="font-semibold">{STEPS[active].action}</p>
        <p className="mt-1 text-sm text-[#636256]">{JOBS[STEPS[active].ad.job].does}</p>
        <p className="mt-1 text-sm font-semibold text-[#5c7a1e]">{JOBS[STEPS[active].ad.job].freq}</p>
      </div>
      </div>

      {/* Phone */}
      <div className="order-first lg:order-none flex justify-center">
        <div className="relative w-[270px] sm:w-[310px] rounded-[2.6rem] border-[10px] border-[#171712] bg-[#171712] shadow-[0_30px_60px_-20px_rgba(23,23,18,0.5)]">
          <div className="overflow-hidden rounded-[1.9rem] bg-[#faf9f4]">
            <div className="flex items-center justify-between px-6 pt-3 pb-2 text-[11px] font-semibold">
              <span>9:41</span>
              <span className="h-5 w-20 rounded-full bg-[#171712]" />
              <span>5G</span>
            </div>
            <div className="grid px-2.5 pb-3 [&>*]:[grid-area:1/1] [&>*]:min-w-0">
              {STEPS.map((s, i) => (
                <div
                  key={s.ad.id}
                  aria-hidden={i !== active}
                  className={`transition-all duration-500 ease-out ${
                    i === active
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-4 scale-[0.97] pointer-events-none"
                  }`}
                >
                  <MetaPost ad={s.ad} showJob={false} priority={i === 0} active={i === active} />
                </div>
              ))}
            </div>
          </div>

          {/* Order pop on the closing step */}
          {active === STEPS.length - 1 && (
            <div
              key={`order-${cycle}`}
              className="absolute -right-4 top-16 sm:-right-10 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 shadow-xl animate-pop-in"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lime">
                <ShoppingBag className="h-4 w-4 text-[#171712]" />
              </span>
              <div className="leading-tight">
                <div className="text-sm font-bold">New order</div>
                <div className="text-[11px] text-[#636256]">Credit: Ad 4</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
