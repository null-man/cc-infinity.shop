import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieConsent from "@/components/cookie-consent"

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
})

export const metadata: Metadata = {
  title: "STREETWEARZONE | Curated Home & Living",
  description: "Discover thoughtfully designed, sustainably made home essentials. Curated furniture, decor, and lifestyle products for modern living.",
  metadataBase: new URL('https://streetwearzone.shop'),
  openGraph: {
    title: "STREETWEARZONE | Curated Home & Living",
    description: "Discover thoughtfully designed, sustainably made home essentials.",
    url: "https://streetwearzone.shop",
    siteName: "STREETWEARZONE",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieConsent />
        </div>
      </body>
    </html>
  )
}
