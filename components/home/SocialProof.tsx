import { Briefcase, Clock, MapPin, Package } from "lucide-react";

const stats = [
  { icon: Package, value: "4", label: "SaaS Products" },
  { icon: Clock, value: "12+", label: "Years Experience" },
  { icon: MapPin, value: "USA", label: "Based & Serving" },
  { icon: Briefcase, value: "$2,500", label: "Consulting Package" },
];

export default function SocialProof() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-primary/10 rounded-xl mb-3">
                <stat.icon className="w-6 h-6 text-brand-primary" />
              </div>
              <p className="text-3xl font-bold text-brand-dark">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
