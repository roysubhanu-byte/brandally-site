"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

// Founder video: plays muted on its own while on screen, one small sound toggle.
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
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Start fetching a little before it scrolls into view, play while visible.
    const near = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && v.preload !== "auto") {
          v.preload = "auto";
          v.load();
        }
      },
      { rootMargin: "800px 0px" },
    );
    const vis = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !reduced) v.play().catch(() => {});
        else if (!e.isIntersecting) v.pause();
      },
      { threshold: 0.4 },
    );
    near.observe(v);
    vis.observe(v);
    return () => {
      near.disconnect();
      vis.disconnect();
    };
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    const next = !muted;
    v.muted = next;
    setMuted(next);
    if (!next) v.play().catch(() => {});
  };

  return (
    <div className="relative mx-auto w-full max-w-[340px] overflow-hidden rounded-3xl bg-[#171712] shadow-[0_30px_70px_-25px_rgba(23,23,18,0.55)] ring-1 ring-black/10">
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={label}
        className="block aspect-[9/16] w-full object-cover"
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={muted ? "Turn sound on" : "Turn sound off"}
        className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black/75"
      >
        {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
      </button>
    </div>
  );
}
