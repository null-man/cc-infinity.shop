import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter */}
      <div className="border-b border-background/10">
        <div className="container px-4 py-16 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-medium mb-2">
                Stay in the loop
              </h3>
              <p className="text-background/60 text-sm">
                Subscribe for exclusive drops, styling tips, and 10% off your first order.
              </p>
            </div>
            <div className="flex gap-0">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-background/30 text-background placeholder:text-background/40 focus-visible:ring-0 focus-visible:border-background/60 rounded-none flex-1"
              />
              <Button className="bg-background text-foreground hover:bg-background/90 rounded-none px-8">
                Join
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 py-12 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-2xl font-semibold tracking-tight">
              MODÉ
            </Link>
            <p className="text-background/50 text-sm mt-4 leading-relaxed">
              Contemporary fashion for the modern individual. Curated with intention.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-background/50 hover:text-background transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/50 hover:text-background transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/50 hover:text-background transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase mb-4">
              Shop
            </h4>
            <nav className="flex flex-col gap-3">
              <Link href="/category/new" className="text-sm text-background/50 hover:text-background transition-colors">
                New Arrivals
              </Link>
              <Link href="/category/women" className="text-sm text-background/50 hover:text-background transition-colors">
                Women
              </Link>
              <Link href="/category/men" className="text-sm text-background/50 hover:text-background transition-colors">
                Men
              </Link>
              <Link href="/category/accessories" className="text-sm text-background/50 hover:text-background transition-colors">
                Accessories
              </Link>
              <Link href="/shop" className="text-sm text-background/50 hover:text-background transition-colors">
                Sale
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase mb-4">
              Help
            </h4>
            <nav className="flex flex-col gap-3">
              <Link href="/contact" className="text-sm text-background/50 hover:text-background transition-colors">
                Contact Us
              </Link>
              <Link href="/refund-policy" className="text-sm text-background/50 hover:text-background transition-colors">
                Shipping & Returns
              </Link>
              <Link href="/about#faq" className="text-sm text-background/50 hover:text-background transition-colors">
                FAQ
              </Link>
              <Link href="/about#size-guide" className="text-sm text-background/50 hover:text-background transition-colors">
                Size Guide
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase mb-4">
              About
            </h4>
            <nav className="flex flex-col gap-3">
              <Link href="/about" className="text-sm text-background/50 hover:text-background transition-colors">
                Our Story
              </Link>
              <Link href="/about#sustainability" className="text-sm text-background/50 hover:text-background transition-colors">
                Sustainability
              </Link>
              <Link href="/about#careers" className="text-sm text-background/50 hover:text-background transition-colors">
                Careers
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase mb-4">
              Legal
            </h4>
            <nav className="flex flex-col gap-3">
              <Link href="/privacy-policy" className="text-sm text-background/50 hover:text-background transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-background/50 hover:text-background transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="text-sm text-background/50 hover:text-background transition-colors">
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-background/40">
              © {new Date().getFullYear()} MODÉ. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-background/40">We accept</span>
              <div className="flex gap-2">
                {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((card) => (
                  <span key={card} className="text-xs text-background/60 px-2 py-1 border border-background/20 rounded">
                    {card}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
