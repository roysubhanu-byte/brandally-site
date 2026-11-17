"use client";

import { useEffect, useRef, useState } from "react";

// Muted looping ad clip. Downloads only once it's on screen (and active), then plays.
export default function AdVideo({
  src,
  poster,
  label,
  active = true,
}: {
  src: string;
  poster: string;
  label: string;
  active?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), {
      threshold: 0.4,
    });
    io.observe(v);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (visible && active) setLoad(true);
  }, [visible, active]);

  useEffect(() => {
    const v = ref.current;
    if (!v || !load) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (visible && active) v.play().catch(() => {});
    else v.pause();
  }, [visible, active, load]);

  return (
    <video
      ref={ref}
      src={load ? src : undefined}
      poster={poster}
      aria-label={label}
      muted
      loop
      playsInline
      preload="none"
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}
