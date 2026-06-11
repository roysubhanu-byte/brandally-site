"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);

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
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-line bg-surface/80 backdrop-blur px-2 py-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-1.5 text-sm font-medium text-muted hover:text-white transition rounded-full hover:bg-white/5"
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
        <nav className="md:hidden mt-3 max-w-6xl mx-auto rounded-2xl border border-line bg-surface p-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-muted hover:text-white transition"
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
