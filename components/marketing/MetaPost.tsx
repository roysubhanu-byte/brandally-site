import Image from "next/image";
import {
  Bookmark,
  ChevronRight,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Play,
  Send,
} from "lucide-react";
import { JOBS, type MetaAd } from "@/lib/d2cAds";

// A Meta (Facebook / Instagram) feed post wrapper around a real ad creative.
export default function MetaPost({
  ad,
  showJob = true,
  priority = false,
  className = "",
}: {
  ad: MetaAd;
  showJob?: boolean;
  priority?: boolean;
  className?: string;
}) {
  const initials = ad.brand
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <article
      className={`overflow-hidden rounded-2xl border border-[#e6e4d9] bg-white text-[#171712] ${className}`}
    >
      <header className="flex items-center gap-2.5 px-3.5 py-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-lime to-[#8aa83a] p-[2px]">
          <span className="flex h-full w-full items-center justify-center rounded-full bg-white text-[10px] font-bold">
            {initials}
          </span>
        </span>
        <div className="min-w-0 flex-1 leading-tight">
          <div className="truncate text-[13px] font-semibold">{ad.brand}</div>
          <div className="text-[11px] text-[#636256]">Sponsored</div>
        </div>
        {showJob ? (
          <span className="shrink-0 rounded-full bg-[#171712] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-lime">
            {JOBS[ad.job].label} · {JOBS[ad.job].short}
          </span>
        ) : (
          <MoreHorizontal className="h-4 w-4 text-[#636256]" />
        )}
      </header>

      <div className="relative aspect-[4/5] bg-[#f0efe6]">
        <Image
          src={ad.image}
          alt={ad.alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 80vw"
          className="object-cover"
        />
        {ad.video && (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/45 backdrop-blur-sm">
              <Play className="ml-0.5 h-6 w-6 fill-white text-white" />
            </span>
          </span>
        )}
      </div>

      <div className="flex items-center justify-between border-b border-[#f0efe6] bg-[#f7f6f0] px-3.5 py-2.5 text-[13px] font-semibold">
        {ad.cta}
        <ChevronRight className="h-4 w-4" />
      </div>

      <div className="flex items-center gap-3.5 px-3.5 pt-3 text-[#171712]">
        <Heart className="h-5 w-5" />
        <MessageCircle className="h-5 w-5" />
        <Send className="h-5 w-5" />
        <Bookmark className="ml-auto h-5 w-5" />
      </div>

      <p className="px-3.5 pb-4 pt-2 text-[13px] leading-snug line-clamp-2">
        <span className="font-semibold">{ad.brand}</span> {ad.text}
      </p>
    </article>
  );
}
