"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  function handleMove(e: React.MouseEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    if (!active) setActive(true);
  }

  const flashlight = `radial-gradient(circle 200px at ${pos.x}px ${pos.y}px, #000 0%, rgba(0,0,0,0.35) 45%, transparent 70%)`;

  return (
    <section
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setActive(false)}
      className="relative overflow-hidden bg-ink"
    >
      {/* Faint base grid */}
      <div className="absolute inset-0 grid-bg grid-bg-fade opacity-70" />

      {/* Brighter grid, revealed only under the cursor */}
      <div
        className="pointer-events-none absolute inset-0 grid-bg-lime transition-opacity duration-500"
        style={{
          opacity: active ? 1 : 0,
          WebkitMaskImage: flashlight,
          maskImage: flashlight,
        }}
      />

      {/* Soft static depth glow behind the headline */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 h-80 w-[34rem] rounded-full bg-lime/[0.06] blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-28 md:pt-32 md:pb-36 text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-lime">
          <span className="h-1.5 w-1.5 rounded-full bg-lime" />
          Paid media &amp; demand gen for D2C, B2B &amp; agencies
        </span>

        <h1 className="font-display mt-8 text-5xl md:text-7xl font-bold leading-[0.95]">
          <span className="block text-white">Ad spend that</span>
          <span className="block text-lime">pays you back.</span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-lg text-muted">
          We run and scale{" "}
          <span className="text-white underline decoration-lime/60 underline-offset-4">
            Meta, Google, LinkedIn, and TikTok ads
          </span>{" "}
          for D2C brands, B2B firms, and agencies. You get pipeline and
          profit, not just impressions.
        </p>

        {/* Formula pill */}
        <div className="mx-auto mt-9 inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-line bg-surface/60 px-5 py-3 text-sm">
          <span className="text-muted">Returns =</span>
          <span className="font-semibold text-white">Audience</span>
          <span className="text-lime">&times;</span>
          <span className="font-semibold text-white">Creative</span>
          <span className="text-lime">&times;</span>
          <span className="font-semibold text-white">Conversion</span>
          <span className="text-lime">&times;</span>
          <span className="font-semibold text-white">Scaling</span>
        </div>
        <p className="mt-2 text-xs uppercase tracking-wider text-muted/70">
          The four levers we fix in every account
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-7 py-3.5 font-semibold text-ink hover:bg-lime-soft transition glow-lime"
          >
            Book a paid media audit <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-line bg-surface/60 px-7 py-3.5 font-semibold text-white hover:border-white/40 transition"
          >
            See how we work
          </Link>
        </div>
      </div>
    </section>
  );
}
