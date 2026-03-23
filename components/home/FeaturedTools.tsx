import { Brain, BarChart3, GraduationCap, Rocket, ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  brain: Brain,
  barChart3: BarChart3,
  graduationCap: GraduationCap,
  rocketIcon: Rocket,
};

export default function FeaturedTools() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-brand-primary font-semibold text-sm uppercase tracking-wider mb-2">
            Our Products
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
            Featured Tools
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Powerful marketing tools designed to simplify research, reporting,
            and automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PRODUCTS.map((product) => {
            const Icon = iconMap[product.icon] || Brain;
            return (
              <a
                key={product.name}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-5 p-6 rounded-2xl border border-gray-100 hover:border-brand-primary/30 hover:shadow-lg transition"
              >
                <div className="shrink-0 w-14 h-14 bg-gradient-to-br from-brand-primary to-brand-dark rounded-xl flex items-center justify-center">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-primary transition">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mt-1 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-brand-primary transition mt-1 shrink-0" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
