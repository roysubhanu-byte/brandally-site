import { MapPin, Clock, Mail } from "lucide-react";
import { BRAND } from "@/lib/constants";
import LeadForm from "@/components/LeadForm";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink py-24">
        <div className="absolute inset-0 grid-bg grid-bg-fade" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center rounded-full border border-lime/40 bg-lime/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-lime">
            Contact
          </span>
          <h1 className="font-display mt-6 text-5xl md:text-6xl font-bold text-white">
            Get in <span className="text-lime">touch.</span>
          </h1>
          <p className="mt-5 text-lg text-muted max-w-2xl mx-auto">
            Questions about our tools, consulting, or partnerships? We&apos;re
            ready to help.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-ink py-20 border-t border-line">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Form */}
            <div className="md:col-span-2 rounded-2xl border border-line bg-surface p-8">
              <h2 className="font-display text-2xl font-bold text-white mb-2">
                Tell us about your business
              </h2>
              <p className="text-muted mb-6">
                Share a few details and we&apos;ll come back with where your paid
                media is leaking and what we&apos;d fix first.
              </p>
              <LeadForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {[
                {
                  Icon: Mail,
                  title: "Email",
                  body: (
                    <a
                      href={`mailto:${BRAND.email}`}
                      className="text-muted hover:text-lime transition"
                    >
                      {BRAND.email}
                    </a>
                  ),
                },
                {
                  Icon: MapPin,
                  title: "Address",
                  body: (
                    <p className="text-muted">
                      {BRAND.address.street}
                      <br />
                      {BRAND.address.city}, {BRAND.address.state}{" "}
                      {BRAND.address.zip}
                      <br />
                      {BRAND.address.country}
                    </p>
                  ),
                },
                {
                  Icon: Clock,
                  title: "Business hours",
                  body: <p className="text-muted">{BRAND.hours}</p>,
                },
              ].map(({ Icon, title, body }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-line bg-surface p-6"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-5 h-5 text-lime" />
                    <h3 className="font-semibold text-white">{title}</h3>
                  </div>
                  {body}
                </div>
              ))}

              <div className="rounded-2xl border border-line bg-surface p-6">
                <p className="text-sm text-muted">
                  BrandAlly LLC is registered in Wyoming and serves clients
                  remotely across the USA. We aim to respond to all inquiries
                  within 1 business day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
