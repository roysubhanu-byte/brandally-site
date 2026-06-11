export default function RefundPolicyPage() {
  return (
    <div className="prose prose-gray bg-white text-brand-text rounded-2xl max-w-3xl mx-4 md:mx-auto my-16 p-8 md:p-12">
      <h1 className="text-3xl font-bold text-[#1a1a2e] mb-2">Refund & Dispute Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Effective Date: March 24, 2026 · Last Updated: March 24, 2026</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#1a1a2e] mb-3">Overview</h2>
        <p className="text-gray-700">
          At BrandAlly LLC, we stand behind the quality of our work. This policy outlines how we handle refunds and disputes for our digital marketing services and software products.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#1a1a2e] mb-3">Marketing Services Refund Policy</h2>
        <p className="text-gray-700 mb-4">
          Our marketing service packages (including audits and execution plan building) are priced at $2,500 and come with a <strong>15-Day Satisfaction Guarantee</strong>.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Within 15 days</strong> of service commencement: If you are not satisfied with our services for any reason, you may request a full refund. Simply contact us at support@brandally.net with your reason for the refund request.</li>
          <li><strong>After 15 days:</strong> Refunds for marketing services are evaluated on a case-by-case basis. Partial refunds may be issued for services not yet delivered.</li>
        </ul>

        <div className="bg-gray-50 p-6 rounded-lg mt-4">
          <h3 className="text-lg font-semibold text-[#1a1a2e] mb-3">How to Request a Marketing Services Refund</h3>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>Email support@brandally.net with the subject line &quot;Refund Request&quot;</li>
            <li>Include your name, service purchased, date of purchase, and reason for the request</li>
            <li>Our team will review your request within 3 business days</li>
            <li>Approved refunds will be processed to your original payment method within 5–10 business days</li>
          </ol>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#1a1a2e] mb-3">Software Products Refund Policy</h2>
        <p className="text-gray-700 mb-3">
          BrandAlly develops and sells software products with pricing that varies per product. Each software product has its own specific refund terms, which are clearly stated on the respective product page at the time of purchase.
        </p>
        <p className="text-gray-700 font-medium">General software product refund guidelines:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
          <li>Refund eligibility, timeframes, and conditions are specified on each product&apos;s purchase page</li>
          <li>Please review the product-specific refund terms before completing your purchase</li>
          <li>To request a refund for a software product, contact support@brandally.net and reference the specific product and its refund terms</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#1a1a2e] mb-3">Disputes</h2>
        <p className="text-gray-700 mb-3">If you believe a charge was made in error or you are dissatisfied with a purchase:</p>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700">
          <li><strong>Contact us first.</strong> Email support@brandally.net before initiating a dispute with your bank or credit card company. We are committed to resolving issues directly and promptly.</li>
          <li>We will acknowledge your dispute within 2 business days.</li>
          <li>We will work with you to reach a fair resolution within 10 business days.</li>
        </ol>
        <p className="text-gray-700 mt-3">If we are unable to resolve the issue to your satisfaction, you may then escalate the matter through your payment provider.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#1a1a2e] mb-3">Chargebacks</h2>
        <p className="text-gray-700">
          We encourage customers to contact us directly before filing a chargeback. Filing a chargeback without first contacting BrandAlly may delay resolution and could result in additional fees.
        </p>
      </section>

      <div className="bg-[#1a1a2e] text-white p-6 rounded-lg">
        <h3 className="font-semibold mb-2">Contact for Refunds & Disputes</h3>
        <p>Email: support@brandally.net</p>
        <p>BrandAlly LLC, 30 N Gould St, Ste R, Sheridan, WY 82801</p>
      </div>
    </div>
  );
}
