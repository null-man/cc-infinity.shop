import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">awesomeproducts-world</span>
            </Link>
            <p className="text-sm text-muted-foreground">Discover the latest fashion trends and quality clothing. We are committed to providing stylish, high-quality apparel for every occasion.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Shop</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/shop" className="text-sm text-muted-foreground hover:text-primary">All Products</Link>
              <Link href="/category/women" className="text-sm text-muted-foreground hover:text-primary">Women</Link>
              <Link href="/category/men" className="text-sm text-muted-foreground hover:text-primary">Men</Link>
              <Link href="/category/accessories" className="text-sm text-muted-foreground hover:text-primary">Accessories</Link>
              <Link href="/category/shoes" className="text-sm text-muted-foreground hover:text-primary">Shoes</Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Company</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link>
              <Link href="/about#faq" className="text-sm text-muted-foreground hover:text-primary">FAQ</Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact Us</Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Customer Service</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/refund-policy" className="text-sm text-muted-foreground hover:text-primary">Refund & Dispute Policy</Link>
              <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link>
              <Link href="/cookie-policy" className="text-sm text-muted-foreground hover:text-primary">Cookie Policy</Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Contact</h3>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <p>123 Fashion Avenue</p>
              <p>New York, NY 10001</p>
              <p>Email: hello@awesomeproducts-world.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} awesomeproducts-world. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="text-xs text-muted-foreground hover:text-primary">Privacy Policy</Link>
              <Link href="/terms" className="text-xs text-muted-foreground hover:text-primary">Terms of Service</Link>
              <Link href="/cookie-policy" className="text-xs text-muted-foreground hover:text-primary">Cookie Policy</Link>
            </div>
            <div className="flex items-center gap-2">
              <Image src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png" alt="PayPal" width={40} height={30} />
              <Image src="https://cdn.pixabay.com/photo/2021/12/08/05/16/mastercard-6854992_1280.png" alt="Mastercard" width={40} height={30} />
              <Image src="https://cdn.pixabay.com/photo/2022/01/17/14/39/credit-card-6944925_1280.png" alt="Visa" width={40} height={30} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
