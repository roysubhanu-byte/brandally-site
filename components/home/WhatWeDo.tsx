import { Monitor, TrendingUp, Brain } from "lucide-react";

const pillars = [
  {
    icon: Monitor,
    title: "Marketing Tools",
    description:
      "Research, reporting, creative insights, and automation — all built for marketers who want to move faster.",
  },
  {
    icon: TrendingUp,
    title: "Growth Consulting",
    description:
      "Hands-on systems and testing frameworks to help you find what works and scale it with confidence.",
  },
  {
    icon: Brain,
    title: "Expert Guidance",
    description:
      "12+ years of founder experience in paid media, growth strategy, and creative analysis at your service.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-brand-light py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-brand-primary font-semibold text-sm uppercase tracking-wider mb-2">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
            Everything You Need to Grow
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition"
            >
              <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-5">
                <pillar.icon className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                {pillar.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
