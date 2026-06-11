import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-ink flex-1 flex items-center justify-center py-32">
      <div className="absolute inset-0 grid-bg grid-bg-fade" />
      <div className="relative text-center px-6">
        <p className="font-display text-7xl font-bold text-lime mb-4">404</p>
        <h1 className="font-display text-2xl font-bold text-white mb-2">
          Page not found
        </h1>
        <p className="text-muted mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-semibold text-ink hover:bg-lime-soft transition"
        >
          Go home <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
