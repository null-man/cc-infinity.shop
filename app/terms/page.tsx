import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
        <div className="flex items-center text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <span>Terms of Service</span>
        </div>
        <p className="text-sm text-muted-foreground mt-4">Last updated: January 1, 2024</p>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground">Welcome to MODÉ. By accessing or using our website, you agree to be bound by these Terms of Service. If you do not agree to any part of these terms, please do not use our website.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">2. Service Description</h2>
          <p className="text-muted-foreground">MODÉ is an online fashion retail platform offering clothing, accessories, and related products. We reserve the right to modify, suspend, or discontinue services at any time without notice.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">3. User Accounts</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>You must be at least 18 years old to create an account</li>
            <li>You must provide accurate and complete information</li>
            <li>You are responsible for maintaining password security</li>
            <li>You are responsible for all activities under your account</li>
            <li>We reserve the right to suspend accounts that violate these terms</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">4. Products & Pricing</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>We strive for accuracy but errors may occur</li>
            <li>Product images are for reference; actual items may vary slightly</li>
            <li>We reserve the right to modify prices at any time</li>
            <li>We may cancel orders with pricing errors and issue full refunds</li>
            <li>Promotional terms are as stated on the promotion page</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">5. Orders & Payment</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Submitting an order constitutes agreement to purchase</li>
            <li>Order confirmation will be sent via email</li>
            <li>We reserve the right to refuse or cancel orders</li>
            <li>Payment must be completed before order processing</li>
            <li>Ensure payment information is accurate and secure</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">6. Intellectual Property</h2>
          <p className="text-muted-foreground">All content on this website, including text, images, logos, designs, and software, is protected by intellectual property laws. Without our written permission, you may not copy, modify, distribute, or use any content for commercial purposes.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">7. User Conduct</h2>
          <p className="text-muted-foreground mb-4">When using our website, you agree not to:</p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe on others' intellectual property or rights</li>
            <li>Post false, misleading, or fraudulent information</li>
            <li>Transmit viruses or malicious code</li>
            <li>Interfere with website operations</li>
            <li>Access systems or data without authorization</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">8. Limitation of Liability</h2>
          <p className="text-muted-foreground">To the maximum extent permitted by law, MODÉ shall not be liable for any indirect, incidental, or consequential damages arising from use of our website. Our total liability shall not exceed the amount you paid for the products in question.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">9. Contact Us</h2>
          <div className="text-muted-foreground">
            <p>Email: legal@cc-infinity.shop</p>
            <p>Address: Online Store</p>
          </div>
        </section>
      </div>
    </div>
  )
}
