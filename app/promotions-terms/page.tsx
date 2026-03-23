export default function PromotionsTermsPage() {
  return (
    <div className="prose prose-gray max-w-none">
      <h1 className="text-3xl font-bold text-[#1a1a2e] mb-2">Terms & Conditions of Promotions</h1>
      <p className="text-sm text-gray-500 mb-8">Effective Date: March 24, 2026 · Last Updated: March 24, 2026</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#1a1a2e] mb-3">Overview</h2>
        <p className="text-gray-700">
          This page outlines the general terms and conditions that apply to all promotional offers, discounts, and special deals provided by BrandAlly LLC.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#1a1a2e] mb-3">General Promotion Terms</h2>
        <ol className="list-decimal pl-6 space-y-4 text-gray-700">
          <li><strong>Eligibility:</strong> Promotions are available to new and existing clients unless otherwise specified in the promotion details.</li>
          <li><strong>Validity Period:</strong> Each promotion has a specific start and end date. The promotion must be redeemed within the specified period. Expired promotions will not be honored.</li>
          <li><strong>Non-Transferable:</strong> Promotional offers are non-transferable and cannot be sold, exchanged, or assigned to another party.</li>
          <li><strong>One-Time Use:</strong> Unless otherwise stated, promotional codes and discounts may only be used once per customer.</li>
          <li><strong>Cannot Be Combined:</strong> Promotions cannot be combined with other offers, discounts, or promotional codes unless explicitly stated.</li>
          <li><strong>No Cash Value:</strong> Promotional discounts have no cash value and cannot be redeemed for cash or credit.</li>
          <li><strong>Modification or Cancellation:</strong> BrandAlly reserves the right to modify, suspend, or cancel any promotion at any time without prior notice. If a promotion is cancelled, any purchases already made under the promotion will be honored.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#1a1a2e] mb-3">Marketing Services Promotions</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Discounted marketing service packages must be paid in full at the discounted rate to qualify.</li>
          <li>The 15-Day Satisfaction Guarantee still applies to all promotional purchases of marketing services.</li>
          <li>Promotional pricing does not alter the scope of services unless explicitly stated.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#1a1a2e] mb-3">Software Product Promotions</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Free trials, if offered, will be for the duration specified in the promotion.</li>
          <li>Discounted subscription rates may apply only for the initial billing period unless otherwise stated.</li>
          <li>Auto-renewal after a promotional period will be at the standard rate.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[#1a1a2e] mb-3">Referral Programs</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>If BrandAlly offers a referral program, specific terms will be published at the time the program is announced.</li>
          <li>Both the referrer and the referred party must meet eligibility requirements.</li>
          <li>BrandAlly reserves the right to withhold referral benefits in cases of fraud or abuse.</li>
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
