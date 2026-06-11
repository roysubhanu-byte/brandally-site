import { Clock, Layers, MapPin, ClipboardCheck } from "lucide-react";

const stats = [
  { icon: Clock, value: "12+", label: "Years in paid media" },
  { icon: Layers, value: "3", label: "Core ad channels" },
  { icon: MapPin, value: "USA", label: "Based & serving" },
  { icon: ClipboardCheck, value: "$2,500", label: "Audit + execution plan" },
];

const marquee = [
  "Meta Ads",
  "Google Ads",
  "TikTok Ads",
  "Creative Testing",
  "Retargeting",
  "Landing Pages",
  "ROAS Reporting",
  "Account Scaling",
];

export default function SocialProof() {
  return (
    <section className="bg-ink border-y border-line py-14">
      {/* Marquee */}
      <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted/70 mb-7">
        Channels &amp; capabilities we run
      </p>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent z-10" />
        <div className="flex w-max animate-marquee">
          {[...marquee, ...marquee].map((item, i) => (
            <div key={i} className="flex items-center gap-10 px-5">
              <span className="text-lg font-medium text-white/60 whitespace-nowrap">
                {item}
              </span>
              <span className="h-1 w-1 rounded-full bg-lime/60" />
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-5xl mx-auto px-6 mt-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-line bg-surface p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-lime/10 mb-3">
                <stat.icon className="w-5 h-5 text-lime" />
              </div>
              <p className="font-display text-3xl font-bold text-white">
                {stat.value}
              </p>
              <p className="text-sm text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
