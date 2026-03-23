export default function CancellationPolicyPage() {
  return (
    <div className="prose prose-gray max-w-none">
      <h1 className="text-3xl font-bold text-[#1a1a2e] mb-2">Cancellation Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Effective Date: March 24, 2026 · Last Updated: March 24, 2026</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#1a1a2e] mb-3">Overview</h2>
        <p className="text-gray-700">
          This cancellation policy applies to all services and subscriptions provided by BrandAlly LLC.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#1a1a2e] mb-3">Marketing Services Cancellation</h2>
        <p className="text-gray-700 mb-4">
          Our marketing services (audit and execution plan building at $2,500) can be cancelled under the following terms:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Before work begins:</strong> Full refund, no cancellation fee.</li>
          <li><strong>Within 15 days of service start:</strong> You may cancel and receive a full refund under our 15-Day Satisfaction Guarantee. Email support@brandally.net to initiate cancellation.</li>
          <li><strong>After 15 days:</strong> Cancellation requests will be reviewed on a case-by-case basis. You will be billed for work already completed, and any remaining balance will be refunded.</li>
        </ul>

        <div className="bg-gray-50 p-6 rounded-lg mt-4">
          <h3 className="text-lg font-semibold text-[#1a1a2e] mb-3">How to Cancel Marketing Services</h3>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>Email support@brandally.net with the subject line &quot;Cancellation Request&quot;</li>
            <li>Include your name, service purchased, and date of purchase</li>
            <li>Our team will confirm cancellation within 2 business days</li>
            <li>Any applicable refund will be processed within 5–10 business days</li>
          </ol>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#1a1a2e] mb-3">Software Product Cancellations</h2>
        <p className="text-gray-700 mb-4">For software products with recurring subscriptions:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Monthly subscriptions:</strong> You may cancel at any time. Your access will continue through the end of your current billing period. No further charges will be made after cancellation.</li>
          <li><strong>Annual subscriptions:</strong> You may cancel at any time. Your access will continue through the end of your current annual billing period. Refunds for unused months are handled per the specific product&apos;s refund terms.</li>
        </ul>

        <div className="bg-gray-50 p-6 rounded-lg mt-4">
          <h3 className="text-lg font-semibold text-[#1a1a2e] mb-3">How to Cancel a Software Subscription</h3>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>Log in to your account and navigate to your subscription settings, OR</li>
            <li>Email support@brandally.net with the subject line &quot;Subscription Cancellation&quot;</li>
            <li>Include the product name and your account email</li>
            <li>Cancellation will be confirmed via email within 2 business days</li>
          </ol>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#1a1a2e] mb-3">Important Notes</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Cancellation does not automatically trigger a refund. Please refer to our <a href="/refund-policy" className="text-[#e94560] hover:underline">Refund & Dispute Policy</a> for refund eligibility.</li>
          <li>We do not charge cancellation fees for any of our products or services.</li>
          <li>All cancellation confirmations are sent via email. If you do not receive a confirmation, please contact us.</li>
        </ul>
      </section>

      <div className="bg-[#1a1a2e] text-white p-6 rounded-lg">
        <h3 className="font-semibold mb-2">Contact</h3>
        <p>Email: support@brandally.net</p>
        <p>BrandAlly LLC, 30 N Gould St, Ste R, Sheridan, WY 82801</p>
      </div>
    </div>
  );
}
