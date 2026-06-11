import Link from "next/link";
import { BRAND, PRODUCTS, LEGAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-line text-muted text-sm">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="font-display text-lg font-bold text-white mb-3">
              brand<span className="text-lime">ally</span>
            </h3>
            <p className="mb-2">{BRAND.legal}</p>
            <p>
              {BRAND.address.street}
              <br />
              {BRAND.address.city}, {BRAND.address.state} {BRAND.address.zip}
            </p>
            <p className="mt-2">{BRAND.email}</p>
            <p className="mt-3 text-muted/70">
              Partner:{" "}
              <span className="text-white">
                click<span className="text-lime">trac</span>
              </span>{" "}
              (USA &amp; India)
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-3">Products</h4>
            <ul className="space-y-2">
              {PRODUCTS.map((p) => (
                <li key={p.name}>
                  <a
                    href={p.url}
                    className="hover:text-lime transition"
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
                  <Link href={link.href} className="hover:text-lime transition">
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
                <Link href="/contact" className="hover:text-lime transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="hover:text-lime transition"
                >
                  {BRAND.email}
                </a>
              </li>
              <li>{BRAND.hours}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-line mt-12 pt-6 text-center text-muted/60">
          &copy; {new Date().getFullYear()} {BRAND.legal}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
