import Link from "next/link"

export default function CookiePolicyPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Cookie Policy</h1>
        <div className="flex items-center text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <span>Cookie Policy</span>
        </div>
        <p className="text-sm text-muted-foreground mt-4">Last updated: January 1, 2024</p>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">1. What Are Cookies</h2>
          <p className="text-muted-foreground">Cookies are small text files stored on your device by websites. They help websites remember your preferences, login status, and other information to provide a better user experience.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">2. Types of Cookies We Use</h2>
          <div className="space-y-4 text-muted-foreground">
            <div><h3 className="font-medium text-foreground">Essential Cookies</h3><p>Required for basic website functionality like shopping cart and user login. The website cannot function properly without these.</p></div>
            <div><h3 className="font-medium text-foreground">Functional Cookies</h3><p>Remember your preferences such as language and region settings for a personalized experience.</p></div>
            <div><h3 className="font-medium text-foreground">Analytics Cookies</h3><p>Help us understand how visitors use our website so we can improve our services.</p></div>
            <div><h3 className="font-medium text-foreground">Marketing Cookies</h3><p>Used to show you relevant advertisements and promotional content.</p></div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">3. Third-Party Cookies</h2>
          <p className="text-muted-foreground mb-4">We may use third-party services that set their own cookies:</p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Payment processors (PayPal, Stripe)</li>
            <li>Social media platforms (sharing features)</li>
            <li>Analytics services (Google Analytics)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">4. Managing Cookies</h2>
          <p className="text-muted-foreground mb-4">You can manage cookies through your browser settings:</p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
            <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies</li>
            <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
            <li><strong>Edge:</strong> Settings → Cookies and Site Permissions</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">5. Impact of Disabling Cookies</h2>
          <p className="text-muted-foreground mb-4">Disabling cookies may affect the following features:</p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Unable to stay logged in</li>
            <li>Shopping cart contents may not be saved</li>
            <li>Personalized recommendations may not work</li>
            <li>Some page features may not function properly</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">6. Contact Us</h2>
          <p className="text-muted-foreground">If you have questions about our Cookie Policy, please contact us:</p>
          <div className="text-muted-foreground mt-2">
            <p>Email: privacy@awesomeproducts-world.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
        </section>
      </div>
    </div>
  )
}
