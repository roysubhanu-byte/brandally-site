import Link from "next/link";
import { BRAND } from "@/lib/constants";

export default function WhoWeAre() {
  return (
    <section className="bg-brand-light py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-brand-primary font-semibold text-sm uppercase tracking-wider mb-2">
              Who We Are
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
              Built by Marketers, for Marketers
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {BRAND.description}
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded by {BRAND.founder.name} with {BRAND.founder.experience}{" "}
              years of experience in paid media, growth strategy, and creative
              analysis — BrandAlly combines deep expertise with modern technology
              to deliver results.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-brand-primary font-semibold hover:underline"
            >
              Learn more about us &rarr;
            </Link>
          </div>

          {/* Visual */}
          <div className="bg-gradient-to-br from-brand-primary/10 to-brand-dark/10 rounded-2xl p-10 flex items-center justify-center min-h-[300px]">
            <div className="text-center">
              <p className="text-6xl font-bold text-brand-primary mb-2">
                {BRAND.founder.experience}
              </p>
              <p className="text-xl text-brand-dark font-medium">
                Years of Marketing Experience
              </p>
              <p className="text-gray-500 mt-2">
                Paid Media &bull; Growth Strategy &bull; Creative Analysis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
