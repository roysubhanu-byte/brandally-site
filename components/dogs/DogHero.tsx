"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, PawPrint, FileText } from "lucide-react";

const WORDS = ["booked solid", "profitable", "predictable", "waitlisted"];

export default function DogHero() {
  const ref = useRef<HTMLElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const [word, setWord] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      setWord((w) => (w === WORDS.length - 1 ? 0 : w + 1));
    }, 2200);
    return () => clearTimeout(id);
  }, [word]);

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
          <PawPrint className="h-3.5 w-3.5" />
          We love dogs. We scale dog businesses.
        </span>

        <h1 className="font-display mt-8 text-5xl md:text-7xl font-bold leading-[1.02]">
          <span className="block text-white">
            Board &amp; train programs
          </span>
          <span className="block text-white">that stay</span>
          {/* Rotating word */}
          <span className="relative block h-[1.15em] overflow-hidden">
            {WORDS.map((w, i) => (
              <span
                key={w}
                aria-hidden={word !== i}
                className={`absolute inset-x-0 text-lime transition-all duration-700 ease-[cubic-bezier(0.34,1.3,0.5,1)] ${
                  word === i
                    ? "translate-y-0 opacity-100"
                    : i < word || (word === 0 && i === WORDS.length - 1)
                      ? "-translate-y-full opacity-0"
                      : "translate-y-full opacity-0"
                }`}
              >
                {w}.
              </span>
            ))}
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-lg text-muted">
          We run{" "}
          <span className="text-white underline decoration-lime/60 underline-offset-4">
            Meta and Google ads
          </span>{" "}
          for dog trainers and board &amp; train facilities. You train the
          dogs. We keep qualified local owners on your calendar.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="#get-started"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-7 py-3.5 font-semibold text-ink hover:bg-lime-soft transition glow-lime"
          >
            Get your free growth plan <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="/case-studies/dog-products.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-surface/60 px-7 py-3.5 font-semibold text-white hover:border-white/40 transition"
          >
            <FileText className="w-4 h-4" /> See the dog case study
          </a>
        </div>
      </div>
    </section>
  );
}
