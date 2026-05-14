import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand-primary to-brand-dark text-white">
      {/* Decorative circles */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-brand-primary/30 rounded-full blur-3xl" />
      <div className="absolute bottom-[-15%] left-[-5%] w-80 h-80 bg-brand-accent/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-36 text-center">
        <p className="text-brand-accent font-semibold text-sm uppercase tracking-wider mb-4">
          Paid Ads Management · SaaS · Consulting
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-4xl mx-auto text-balance">
          We Run Your Paid Ads.
          <br className="hidden md:block" /> You Run Your Business.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Managed paid media across Meta, Google, TikTok, and LinkedIn for a
          flat $2,000 a month. Ad spend is on you, account work is on us.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
          <Link
            href="/services#paid-ads"
            className="bg-brand-accent hover:bg-brand-accent/90 text-white px-8 py-3.5 rounded-lg font-semibold text-lg transition shadow-lg shadow-brand-accent/25"
          >
            Run My Ads — $2,000/mo
          </Link>
          <Link
            href="/services"
            className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-3.5 rounded-lg font-semibold text-lg transition"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
