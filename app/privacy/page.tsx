export default function PrivacyPolicyPage() {
  return (
    <div className="prose prose-gray max-w-none">
      <h1 className="text-3xl font-bold text-[#1a1a2e] mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Effective Date: March 24, 2026 · Last Updated: March 24, 2026</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#1a1a2e] mb-3">1. Introduction</h2>
        <p className="text-gray-700">
          BrandAlly LLC (&quot;BrandAlly,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website (www.brandally.net) and our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#1a1a2e] mb-3">2. Information We Collect</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-[#1a1a2e] mb-3">Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Name, email address, phone number, and business information when you contact us or purchase services</li>
              <li>Payment information (processed securely through Stripe — we do not store your credit card details)</li>
              <li>Communications you send to us via email or contact forms</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-[#1a1a2e] mb-3">Information Collected Automatically</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Browser type, IP address, and device information</li>
              <li>Pages visited, time spent on pages, and other usage data</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#1a1a2e] mb-3">3. How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Deliver and improve our marketing services and software products</li>
          <li>Process payments and send transaction confirmations</li>
          <li>Respond to your inquiries and provide customer support</li>
          <li>Send service-related communications</li>
          <li>Comply with legal obligations</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#1a1a2e] mb-3">4. How We Share Your Information</h2>
        <p className="text-gray-700 mb-3">We do not sell your personal information. We may share your information with:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Payment processors</strong> (Stripe) to process transactions</li>
          <li><strong>Service providers</strong> who assist in delivering our services, bound by confidentiality agreements</li>
          <li><strong>Legal authorities</strong> when required by law or to protect our rights</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#1a1a2e] mb-3">5. Data Security</h2>
        <p className="text-gray-700">
          We implement appropriate technical and organizational measures to protect your personal information, including encryption of data in transit and at rest. However, no method of transmission over the internet is 100% secure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#1a1a2e] mb-3">6. Your Rights</h2>
        <p className="text-gray-700 mb-3">You have the right to:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your personal information</li>
          <li>Opt out of marketing communications</li>
        </ul>
        <p className="text-gray-700 mt-3">To exercise these rights, email us at support@brandally.net.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#1a1a2e] mb-3">7. Cookies</h2>
        <p className="text-gray-700">
          Our website uses cookies to enhance your browsing experience. You can control cookie settings through your browser preferences.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#1a1a2e] mb-3">8. Third-Party Links</h2>
        <p className="text-gray-700">
          Our website may contain links to third-party sites. We are not responsible for the privacy practices of those sites.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#1a1a2e] mb-3">9. Children&apos;s Privacy</h2>
        <p className="text-gray-700">
          Our services are not directed to individuals under 18. We do not knowingly collect information from children.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#1a1a2e] mb-3">10. Changes to This Policy</h2>
        <p className="text-gray-700">
          We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date.
        </p>
      </section>

      <div className="bg-[#1a1a2e] text-white p-6 rounded-lg">
        <h3 className="font-semibold mb-2">11. Contact</h3>
        <p>Email: support@brandally.net</p>
        <p>BrandAlly LLC, 30 N Gould St, Ste R, Sheridan, WY 82801</p>
      </div>
    </div>
  );
}
