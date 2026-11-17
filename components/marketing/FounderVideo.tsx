"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";

// Founder talking-head video: clean cover with one play button, native controls only after play.
export default function FounderVideo({
  src,
  poster,
  duration,
  label,
}: {
  src: string;
  poster: string;
  duration: string;
  label: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const start = () => {
    setStarted(true);
    ref.current?.play().catch(() => {});
  };

  return (
    <div className="relative mx-auto w-full max-w-[340px] overflow-hidden rounded-3xl bg-[#171712] shadow-[0_30px_70px_-25px_rgba(23,23,18,0.55)] ring-1 ring-black/10">
      <video
        ref={ref}
        src={src}
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
          aria-label={`Play: ${label}`}
          className="group absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/45 via-transparent to-transparent pb-8"
        >
          <span className="flex items-center gap-3 rounded-full bg-lime py-3 pl-3 pr-5 font-semibold text-[#171712] shadow-lg transition group-hover:scale-105">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#171712]">
              <Play className="ml-0.5 h-4 w-4 fill-lime text-lime" />
            </span>
            Watch · {duration}
          </span>
        </button>
      )}
    </div>
  );
}
