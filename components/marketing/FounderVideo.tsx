"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

// Founder video: nothing loads with the page. It buffers quietly once the
// section scrolls near, so play starts instantly, with sound.
export default function FounderVideo({
  src,
  poster,
  label,
}: {
  src: string;
  poster: string;
  label: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        if (!v.getAttribute("src")) {
          v.preload = "auto";
          v.src = src;
          v.load();
        }
        io.disconnect();
      },
      { rootMargin: "1200px 0px" },
    );
    io.observe(v);
    return () => io.disconnect();
  }, [src]);

  const start = () => {
    const v = ref.current;
    if (!v) return;
    setStarted(true);
    if (!v.getAttribute("src")) v.src = src;
    v.muted = false;
    v.play().catch(() => {});
  };

  return (
    <div className="relative mx-auto w-full max-w-[340px] overflow-hidden rounded-3xl bg-[#171712] shadow-[0_30px_70px_-25px_rgba(23,23,18,0.55)] ring-1 ring-black/10">
      <video
        ref={ref}
        poster={poster}
        controls={started}
        playsInline
        preload="none"
        aria-label={label}
        className="block aspect-[9/16] w-full object-cover"
      />
      {!started && (
        <button
          type="button"
          onClick={start}
          aria-label={`Play video: ${label}`}
          className="group absolute inset-0 flex items-center justify-center"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-black/60 backdrop-blur-sm transition group-hover:scale-110 group-hover:bg-black/75">
            <Play className="ml-1 h-7 w-7 fill-white text-white" />
          </span>
        </button>
      )}
    </div>
  );
}
