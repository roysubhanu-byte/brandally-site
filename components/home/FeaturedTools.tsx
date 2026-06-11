import { Brain, BarChart3, GraduationCap, Rocket, ArrowUpRight } from "lucide-react";
import { PRODUCTS } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  brain: Brain,
  barChart3: BarChart3,
  graduationCap: GraduationCap,
  rocketIcon: Rocket,
};

export default function FeaturedTools() {
  return (
    <section className="bg-ink py-24 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-lime/40 bg-lime/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-lime">
            Our products
          </span>
          <h2 className="font-display mt-6 text-4xl md:text-5xl font-bold text-white">
            The tool behind our paid media work
          </h2>
          <p className="mt-4 text-muted">
            We built our own software to research ad creative and watch
            competitors. The same tool we run for clients.
          </p>
        </div>

        <div
          className={`mt-12 gap-4 ${
            PRODUCTS.length === 1 ? "max-w-2xl" : "grid md:grid-cols-2"
          }`}
        >
          {PRODUCTS.map((product) => {
            const Icon = iconMap[product.icon] || Brain;
            return (
              <a
                key={product.name}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-5 rounded-2xl border border-line bg-surface p-6 hover:border-lime/40 transition"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-lime/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-lime" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-lime transition">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {product.description}
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted/50 group-hover:text-lime transition shrink-0" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
