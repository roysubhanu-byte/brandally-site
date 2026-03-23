import Link from "next/link";

export default function Newsletter() {
  return (
    <section className="bg-gradient-to-r from-brand-dark to-brand-primary text-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Scale Your Business?
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Get in touch to learn how BrandAlly&apos;s tools and consulting can
          help your agency or brand grow faster and smarter.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-brand-accent hover:bg-brand-accent/90 text-white px-8 py-3.5 rounded-lg font-semibold text-lg transition shadow-lg shadow-brand-accent/25"
          >
            Contact Us Today
          </Link>
          <Link
            href="/services"
            className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-3.5 rounded-lg font-semibold text-lg transition"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
