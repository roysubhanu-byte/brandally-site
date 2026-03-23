"use client";

import { useState } from "react";
import { MapPin, Clock, Mail, Send, CheckCircle2 } from "lucide-react";
import { BRAND } from "@/lib/constants";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          subject: data.get("subject"),
          message: data.get("message"),
        }),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-dark to-brand-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-brand-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch Today
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions about our tools, consulting, or partnerships? Our
            team is ready to help.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Form */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-brand-dark mb-6">
                Send Us a Message
              </h2>

              {status === "sent" ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-green-700">
                    We&apos;ll get back to you within 1 business day.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 text-brand-primary font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition resize-none"
                      placeholder="Tell us more about your project..."
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-600 text-sm">
                      Something went wrong. Please try again or email us
                      directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/90 disabled:opacity-60 text-white px-6 py-3 rounded-lg font-semibold transition"
                  >
                    <Send className="w-4 h-4" />
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="w-5 h-5 text-brand-primary" />
                  <h3 className="font-semibold text-brand-dark">Email</h3>
                </div>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="text-gray-600 hover:text-brand-primary transition"
                >
                  {BRAND.email}
                </a>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-brand-primary" />
                  <h3 className="font-semibold text-brand-dark">Address</h3>
                </div>
                <p className="text-gray-600">
                  {BRAND.address.street}
                  <br />
                  {BRAND.address.city}, {BRAND.address.state}{" "}
                  {BRAND.address.zip}
                  <br />
                  {BRAND.address.country}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-brand-primary" />
                  <h3 className="font-semibold text-brand-dark">
                    Business Hours
                  </h3>
                </div>
                <p className="text-gray-600">{BRAND.hours}</p>
              </div>

              <div className="bg-brand-light rounded-xl p-6">
                <p className="text-sm text-gray-600">
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
