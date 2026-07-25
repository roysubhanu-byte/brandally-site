import { MapPin, Clock, Mail } from "lucide-react";
import { BRAND } from "@/lib/constants";
import LeadForm from "@/components/LeadForm";

export default function ContactPage() {
  return (
    <div className="bg-[#faf9f4] text-[#171712]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#faf9f4]">
        <div className="absolute inset-0 grid-bg-light grid-bg-fade" />
        <div className="relative max-w-4xl mx-auto px-6 pt-20 pb-14 md:pt-28 text-center">
          <span className="inline-flex items-center rounded-full border border-[#e6e4d9] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#5c7a1e]">
            Contact
          </span>
          <h1 className="font-display mt-6 text-4xl md:text-6xl font-bold">
            Let&apos;s find the money you&apos;re{" "}
            <span className="rounded-xl bg-lime px-2">leaving</span> on the
            table.
          </h1>
          <p className="mt-5 text-lg text-[#636256] max-w-2xl mx-auto">
            Tell us where you&apos;re stuck. We&apos;ll come back with where your
            paid media is leaking and what we&apos;d fix first. Free, no
            obligation.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Form */}
          <div className="md:col-span-2 rounded-3xl border border-[#e6e4d9] bg-white p-7 md:p-9">
            <h2 className="font-display text-2xl font-bold mb-2">
              Tell us about your business
            </h2>
            <p className="text-[#636256] mb-6">
              Share a few details and we&apos;ll get back to you within 1
              business day.
            </p>
            <LeadForm submitLabel="Send it over" />
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            {[
              {
                Icon: Mail,
                title: "Email",
                body: (
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="text-[#636256] hover:text-[#5c7a1e] transition"
                  >
                    {BRAND.email}
                  </a>
                ),
              },
              {
                Icon: MapPin,
                title: "Address",
                body: (
                  <p className="text-[#636256]">
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
                body: <p className="text-[#636256]">{BRAND.hours}</p>,
              },
            ].map(({ Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-[#e6e4d9] bg-white p-6"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime">
                    <Icon className="w-4 h-4 text-[#171712]" />
                  </span>
                  <h3 className="font-semibold">{title}</h3>
                </div>
                {body}
              </div>
            ))}

            <div className="rounded-2xl border border-[#e6e4d9] bg-white p-6">
              <p className="text-sm text-[#636256]">
                BrandAlly LLC is registered in Wyoming and works with businesses
                across the USA. We respond to every inquiry within 1 business
                day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
