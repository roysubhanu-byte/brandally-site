import Link from "next/link";
import { BRAND, PRODUCTS, LEGAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-white text-lg font-bold mb-3">
              Brand<span className="text-brand-accent">Ally</span>
            </h3>
            <p className="mb-2">{BRAND.legal}</p>
            <p>
              {BRAND.address.street}
              <br />
              {BRAND.address.city}, {BRAND.address.state} {BRAND.address.zip}
            </p>
            <p className="mt-2">{BRAND.email}</p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-3">Products</h4>
            <ul className="space-y-2">
              {PRODUCTS.map((p) => (
                <li key={p.name}>
                  <a
                    href={p.url}
                    className="hover:text-white transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-3">Legal</h4>
            <ul className="space-y-2">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="hover:text-white transition"
                >
                  {BRAND.email}
                </a>
              </li>
              <li>{BRAND.hours}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-500">
          &copy; {new Date().getFullYear()} {BRAND.legal}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
