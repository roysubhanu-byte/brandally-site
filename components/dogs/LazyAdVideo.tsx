"use client";

import { useEffect, useRef, useState } from "react";

// Defers video download until the card is near the viewport,
// so the ad marquee doesn't pull ~8MB of video on page load.
export default function LazyAdVideo({
  src,
  poster,
  alt,
}: {
  src: string;
  poster: string;
  alt: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="absolute inset-0">
      {inView ? (
        <video
          src={src}
          poster={poster}
          muted
          loop
          autoPlay
          playsInline
          preload="none"
          className="h-full w-full object-cover"
          aria-label={alt}
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={poster}
          alt={alt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      )}
    </div>
  );
}
