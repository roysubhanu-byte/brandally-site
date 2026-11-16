"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

// Pure conversion landing pages: minimal light header, one CTA, no site nav.
const LP_ROUTES = ["/dog-training", "/local", "/d2c"];
// Full site pages that use the light theme.
const LIGHT_ROUTES = ["/", "/contact", "/about", "/services", "/case-studies"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";

  const isLP = LP_ROUTES.some((r) => pathname.startsWith(r));
  const light = LIGHT_ROUTES.includes(pathname) || isLP;

  // Minimal light header for landing pages
  if (isLP) {
    return (
      <header className="sticky top-0 z-50 border-b border-[#e6e4d9] bg-[#faf9f4]/90 backdrop-blur">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 px-6 py-4">
          <Link
            href="/"
            className="font-display text-xl font-bold tracking-tight text-[#171712]"
          >
            brand<span className="text-[#5c7a1e]">ally</span>
          </Link>
          <Link
            href="#get-started"
            className="inline-flex items-center gap-1.5 rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-ink hover:bg-lime-soft transition"
          >
            {pathname.startsWith("/d2c") ? "Book a call" : "Get my free plan"}{" "}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </header>
    );
  }

  // Full nav (light on home/contact, dark elsewhere)
  const logoAccent = light ? "text-[#5c7a1e]" : "text-lime";
  const logoText = light ? "text-[#171712]" : "text-white";
  const navShell = light
    ? "border-[#e6e4d9] bg-white/80"
    : "border-line bg-surface/80";
  const linkClass = light
    ? "text-[#636256] hover:text-[#171712] hover:bg-[#171712]/5"
    : "text-muted hover:text-white hover:bg-white/5";
  const toggleClass = light
    ? "border-[#e6e4d9] bg-white text-[#171712]"
    : "border-line bg-surface text-white";
  const mobileShell = light
    ? "border-[#e6e4d9] bg-white"
    : "border-line bg-surface";
  const mobileLink = light
    ? "text-[#636256] hover:text-[#171712]"
    : "text-muted hover:text-white";

  const headerClass = light
    ? "sticky top-0 z-50 bg-[#faf9f4]/90 backdrop-blur border-b border-[#e6e4d9] px-4 py-4"
    : "sticky top-0 z-50 px-4 pt-4";

  return (
    <header className={headerClass}>
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className={`font-display text-xl font-bold tracking-tight ${logoText}`}
        >
          brand<span className={logoAccent}>ally</span>
        </Link>

        {/* Desktop pill nav */}
        <nav
          className={`hidden md:flex items-center gap-1 rounded-full border backdrop-blur px-2 py-2 ${navShell}`}
        >
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={`inline-flex items-center gap-1 px-4 py-1.5 text-sm font-medium transition rounded-full ${linkClass}`}
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="min-w-[200px] rounded-2xl border border-[#e6e4d9] bg-white p-2 shadow-xl">
                    {link.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block rounded-xl px-4 py-2.5 text-sm font-medium text-[#171712] hover:bg-lime/40"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-1.5 text-sm font-medium transition rounded-full ${linkClass}`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-ink hover:bg-lime-soft transition"
        >
          Book a free audit <ArrowRight className="w-4 h-4" />
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 rounded-full border ${toggleClass}`}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav
          className={`md:hidden mt-3 max-w-6xl mx-auto rounded-2xl border p-3 ${mobileShell}`}
        >
          {NAV_LINKS.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 transition ${mobileLink}`}
              >
                {link.label}
              </Link>
              {link.children
                ?.filter((c) => c.href !== link.href)
                .map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    onClick={() => setOpen(false)}
                    className={`block py-2.5 pl-8 pr-4 text-sm transition ${mobileLink}`}
                  >
                    {c.label}
                  </Link>
                ))}
            </div>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-1.5 rounded-full bg-lime px-5 py-3 font-semibold text-ink"
          >
            Book a free audit <ArrowRight className="w-4 h-4" />
          </Link>
        </nav>
      )}
    </header>
  );
}
