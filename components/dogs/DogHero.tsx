"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PawPrint, FileText } from "lucide-react";

const WORDS = ["bookings", "waitlists", "growth", "pipeline"];

export default function DogHero() {
  const [word, setWord] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      setWord((w) => (w === WORDS.length - 1 ? 0 : w + 1));
    }, 2200);
    return () => clearTimeout(id);
  }, [word]);

  return (
    <section className="relative overflow-hidden bg-[#faf9f4]">
      {/* Faint technical grid, fading out toward the edges */}
      <div className="absolute inset-0 grid-bg-light grid-bg-fade" />
      {/* Soft lime depth glow */}
      <div className="pointer-events-none absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-lime/25 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Copy */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#e6e4d9] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#5c7a1e]">
            <PawPrint className="h-3.5 w-3.5" />
            Built for dog trainers. Run by dog people.
          </span>

          <h1 className="font-display mt-7 text-4xl md:text-6xl font-bold leading-[1.05] text-[#171712]">
            <span className="block">You handle the dogs.</span>
            <span className="block">We handle the</span>
            {/* Rotating word */}
            <span className="relative block h-[1.35em] overflow-hidden">
              {WORDS.map((w, i) => (
                <span
                  key={w}
                  aria-hidden={word !== i}
                  className={`absolute inset-x-0 top-[0.08em] transition-all duration-700 ease-[cubic-bezier(0.34,1.3,0.5,1)] ${
                    word === i
                      ? "translate-y-0 opacity-100"
                      : i < word || (word === 0 && i === WORDS.length - 1)
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

          <p className="mt-6 max-w-xl text-lg text-[#636256]">
            We run{" "}
            <span className="text-[#171712] underline decoration-lime underline-offset-4 decoration-2">
              Meta and Google ads
            </span>{" "}
            for dog trainers and board &amp; train businesses. Our job: the
            right local dog owners find you, and they actually book.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <Link
              href="#get-started"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#171712] px-7 py-3.5 font-semibold text-white hover:bg-[#171712]/85 transition"
            >
              Get my free growth plan <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="/case-studies/dog-products.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d8d6c9] bg-white px-7 py-3.5 font-semibold text-[#171712] hover:border-[#171712]/40 transition"
            >
              <FileText className="w-4 h-4" /> See how we scaled a dog brand
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          {/* Offset lime frame behind the photo */}
          <div className="absolute -inset-2 translate-x-3 translate-y-3 rounded-3xl bg-lime rotate-2" />
          <Image
            src="/images/dogs/real-hero.jpg"
            alt="Trainer walking a golden retriever at heel across a training field"
            width={1080}
            height={1350}
            priority
            className="relative rounded-3xl object-cover aspect-[4/5] w-full border border-[#e6e4d9]"
          />
          {/* Floating note */}
          <div className="absolute -bottom-5 -left-3 sm:-left-6 flex items-center gap-3 rounded-2xl border border-[#e6e4d9] bg-white px-4 py-3 shadow-lg">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lime">
              <PawPrint className="h-4.5 w-4.5 text-[#171712]" />
            </span>
            <div>
              <div className="font-display text-sm font-bold text-[#171712]">
                Good sit.
              </div>
              <div className="text-xs text-[#636256]">
                Great marketing.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
