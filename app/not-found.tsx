import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-brand-light flex-1 flex items-center justify-center py-20">
      <div className="text-center px-6">
        <p className="text-6xl font-bold text-brand-primary mb-4">404</p>
        <h1 className="text-2xl font-bold text-brand-dark mb-2">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="bg-brand-primary hover:bg-brand-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}
