import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <div className="flex items-center text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <span>Privacy Policy</span>
        </div>
        <p className="text-sm text-muted-foreground mt-4">Last updated: January 1, 2024</p>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-muted-foreground">MODÉ ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our services.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">2. Information We Collect</h2>
          <p className="text-muted-foreground mb-4">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li><strong>Personal Information:</strong> Name, email address, phone number, shipping address</li>
            <li><strong>Account Information:</strong> Username, password (encrypted), account preferences</li>
            <li><strong>Transaction Information:</strong> Order details, payment information, purchase history</li>
            <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
            <li><strong>Usage Data:</strong> Browsing history, click behavior, search queries</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Process and fulfill your orders</li>
            <li>Provide customer service and technical support</li>
            <li>Send order confirmations and shipping notifications</li>
            <li>Send promotional materials (with your consent)</li>
            <li>Improve our products and services</li>
            <li>Prevent fraud and protect account security</li>
            <li>Comply with legal requirements</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">4. Information Sharing</h2>
          <p className="text-muted-foreground mb-4">We do not sell your personal information. We may share your information in the following circumstances:</p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li><strong>Service Providers:</strong> Third-party vendors who help operate our business (shipping, payment processing)</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our legal rights</li>
            <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
            <li><strong>With Your Consent:</strong> In other situations with your explicit permission</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">5. Data Security</h2>
          <p className="text-muted-foreground">We implement appropriate technical and organizational measures to protect your personal information, including SSL encryption, encrypted storage of sensitive data, access controls, and regular security audits.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">6. Your Rights</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li><strong>Access:</strong> Request access to your personal information</li>
            <li><strong>Correction:</strong> Request correction of inaccurate information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information</li>
            <li><strong>Objection:</strong> Object to processing of your personal information</li>
            <li><strong>Portability:</strong> Request a copy of your personal information</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">7. Contact Us</h2>
          <p className="text-muted-foreground">If you have questions about this Privacy Policy, please contact us at:</p>
          <div className="text-muted-foreground mt-2">
            <p>Email: privacy@cc-infinity.shop</p>
            <p>Address: Online Store</p>
          </div>
        </section>
      </div>
    </div>
  )
}
