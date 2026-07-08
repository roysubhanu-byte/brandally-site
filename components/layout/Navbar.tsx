"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  // Landing pages get a minimal light header: logo + one CTA, no site nav
  const landing = pathname?.startsWith("/dog-training");

  if (landing) {
    return (
      <header className="sticky top-0 z-50 border-b border-[#e6e4d9] bg-[#faf9f4]/90 backdrop-blur">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 px-6 py-4">
          <Link
            href="/dog-training"
            className="font-display text-xl font-bold tracking-tight text-[#171712]"
          >
            brand<span className="text-[#5c7a1e]">ally</span>
          </Link>
          <Link
            href="#get-started"
            className="inline-flex items-center gap-1.5 rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-ink hover:bg-lime-soft transition"
          >
            Get my free growth plan <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight text-white"
        >
          brand<span className="text-lime">ally</span>
        </Link>

        {/* Desktop pill nav */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border backdrop-blur px-2 py-2 border-line bg-surface/80">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-1.5 text-sm font-medium transition rounded-full text-muted hover:text-white hover:bg-white/5"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-ink hover:bg-lime-soft transition"
        >
          Start Growing <ArrowRight className="w-4 h-4" />
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-full border border-line bg-surface text-white"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden mt-3 max-w-6xl mx-auto rounded-2xl border p-3 border-line bg-surface">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 transition text-muted hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-1.5 rounded-full bg-lime px-5 py-3 font-semibold text-ink"
          >
            Start Growing <ArrowRight className="w-4 h-4" />
          </Link>
        </nav>
      )}
    </header>
  );
}
