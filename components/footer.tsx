import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 py-16 md:px-6">
        {/* Newsletter section */}
        <div className="text-center mb-16 max-w-xl mx-auto">
          <h3 className="text-2xl font-light tracking-wide mb-4">
            Join Our Community
          </h3>
          <p className="text-primary-foreground/70 text-sm mb-6">
            Subscribe for exclusive offers, design inspiration, and early access to new collections.
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-transparent border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-primary-foreground/50"
            />
            <Button variant="secondary" className="shrink-0">
              Subscribe
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-sm font-medium tracking-wider uppercase mb-4">
              Shop
            </h4>
            <nav className="flex flex-col gap-3">
              <Link href="/shop" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                All Products
              </Link>
              <Link href="/category/living" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Living Room
              </Link>
              <Link href="/category/bedroom" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Bedroom
              </Link>
              <Link href="/category/kitchen" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Kitchen
              </Link>
              <Link href="/category/decor" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Decor
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-wider uppercase mb-4">
              About
            </h4>
            <nav className="flex flex-col gap-3">
              <Link href="/about" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Our Story
              </Link>
              <Link href="/about#sustainability" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Sustainability
              </Link>
              <Link href="/contact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-wider uppercase mb-4">
              Help
            </h4>
            <nav className="flex flex-col gap-3">
              <Link href="/refund-policy" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Shipping & Returns
              </Link>
              <Link href="/about#faq" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                FAQ
              </Link>
              <Link href="/contact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Customer Care
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-wider uppercase mb-4">
              Follow Us
            </h4>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Instagram
              </a>
              <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Pinterest
              </a>
              <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Facebook
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-primary-foreground/60">
              © {new Date().getFullYear()} STREETWEARZONE. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
