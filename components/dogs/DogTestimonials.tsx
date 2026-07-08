"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "They talk to dog owners the way we do. The ads sound like us, and the people booking consults actually show up ready to train.",
    name: "Board & train facility",
    designation: "Virginia",
    src: "/images/dogs/testi-board.jpg",
  },
  {
    quote:
      "We can see which ad brought in every single intro day booking. First agency that showed us what a new client actually costs us.",
    name: "Dog daycare & boarding",
    designation: "Columbus, Ohio",
    src: "/images/dogs/testi-daycare.jpg",
  },
  {
    quote:
      "Meta was bleeding budget before they rebuilt it. Ninety days later: $180K in new revenue at $26 per customer.",
    name: "Dog training products brand",
    designation: "The case study above",
    src: "/images/dogs/testi-products.jpg",
  },
];

const TILTS = [-6, 5, -3];

export default function DogTestimonials() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((a) => (a + 1) % TESTIMONIALS.length);
  }, []);
  const prev = () =>
    setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="border-y border-[#e6e4d9] bg-white">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center">
          Dog people, on working with us
        </h2>
        <div className="mt-12 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Photo stack */}
          <div className="relative aspect-square max-w-md mx-auto w-full">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.src}
                className="absolute inset-0 transition-all duration-500 ease-out"
                style={{
                  transform:
                    i === active
                      ? "rotate(0deg) scale(1)"
                      : `rotate(${TILTS[i]}deg) scale(0.94)`,
                  opacity: i === active ? 1 : 0.55,
                  zIndex: i === active ? 10 : 10 - Math.abs(i - active),
                }}
              >
                <Image
                  src={t.src}
                  alt={`${t.name}, ${t.designation}`}
                  fill
                  sizes="(min-width: 768px) 40vw, 90vw"
                  className="rounded-3xl object-cover border border-[#e6e4d9]"
                  draggable={false}
                />
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="flex flex-col justify-between min-h-64">
            <div key={active}>
              <p className="text-xl md:text-2xl leading-relaxed text-[#171712]">
                {TESTIMONIALS[active].quote.split(" ").map((word, i) => (
                  <span
                    key={i}
                    className="animate-word inline-block"
                    style={{ animationDelay: `${i * 22}ms` }}
                  >
                    {word}&nbsp;
                  </span>
                ))}
              </p>
              <div className="mt-6">
                <div className="font-display font-bold text-[#171712]">
                  {TESTIMONIALS[active].name}
                </div>
                <div className="text-sm text-[#636256]">
                  {TESTIMONIALS[active].designation}
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-10">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e6e4d9] bg-[#faf9f4] hover:border-lime transition group"
              >
                <ArrowLeft className="h-4 w-4 text-[#171712] group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e6e4d9] bg-[#faf9f4] hover:border-lime transition group"
              >
                <ArrowRight className="h-4 w-4 text-[#171712] group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
