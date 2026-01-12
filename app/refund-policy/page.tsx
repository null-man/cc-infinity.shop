import Link from "next/link"

export default function RefundPolicyPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Refund & Dispute Policy</h1>
        <div className="flex items-center text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <span>Refund Policy</span>
        </div>
        <p className="text-sm text-muted-foreground mt-4">Last updated: January 1, 2024</p>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">1. Return Policy Overview</h2>
          <p className="text-muted-foreground">ccInfinity is committed to your satisfaction. If you're not happy with your purchase, we offer a 30-day return policy. Please read the following terms carefully.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">2. Return Conditions</h2>
          <p className="text-muted-foreground mb-4">Items eligible for return must meet the following conditions:</p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Return request submitted within 30 days of delivery</li>
            <li>Items must be unworn, unwashed, and undamaged</li>
            <li>Original tags and labels must be attached</li>
            <li>Original packaging must be intact</li>
            <li>Proof of purchase required</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">3. Non-Returnable Items</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Items returned after 30 days</li>
            <li>Items that have been worn, washed, or show signs of use</li>
            <li>Items with removed or damaged tags</li>
            <li>Items damaged due to customer negligence</li>
            <li>Intimate apparel and swimwear (for hygiene reasons)</li>
            <li>Custom or final sale items (as noted at purchase)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">4. Return Process</h2>
          <div className="text-muted-foreground space-y-4">
            <div><h3 className="font-medium text-foreground">Step 1: Submit Request</h3><p>Log into your account, find the order in "My Orders", click "Request Return", and provide the reason.</p></div>
            <div><h3 className="font-medium text-foreground">Step 2: Await Approval</h3><p>We'll review your request within 1-2 business days and notify you via email.</p></div>
            <div><h3 className="font-medium text-foreground">Step 3: Ship Items</h3><p>Once approved, ship items within 7 days using a trackable shipping method.</p></div>
            <div><h3 className="font-medium text-foreground">Step 4: Refund Processing</h3><p>After receiving and inspecting items, refunds are processed within 3-5 business days.</p></div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">5. Refund Methods & Timeline</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Refunds are returned to the original payment method</li>
            <li>Credit/Debit Cards: 5-10 business days</li>
            <li>PayPal: 1-3 business days</li>
            <li>Store Credit: Immediate</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">6. Shipping Costs</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li><strong>Defective Items:</strong> Return shipping paid by ccInfinity</li>
            <li><strong>Change of Mind:</strong> Return shipping paid by customer</li>
            <li><strong>Free Shipping Orders:</strong> Original shipping cost may be deducted from refund</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">7. Dispute Resolution</h2>
          <p className="text-muted-foreground">If you have concerns about your return, please contact our customer service team. We're committed to finding a fair resolution. If we cannot resolve the issue directly, you may contact consumer protection agencies or pursue legal remedies.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">8. Contact Us</h2>
          <div className="text-muted-foreground">
            <p>Email: returns@cc-infinity.shop</p>
            <p>Please contact us via email for return instructions.</p>
          </div>
        </section>
      </div>
    </div>
  )
}
