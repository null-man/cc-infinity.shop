import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieConsent from "@/components/cookie-consent"

const outfit = Outfit({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "ccInfinity | Contemporary Fashion",
  description: "Discover curated contemporary fashion. Minimal aesthetics, maximum style. Shop the latest trends in women's and men's clothing.",
  metadataBase: new URL('https://cc-infinity.shop'),
  openGraph: {
    title: "ccInfinity | Contemporary Fashion",
    description: "Discover curated contemporary fashion. Minimal aesthetics, maximum style.",
    url: "https://cc-infinity.shop",
    siteName: "ccInfinity",
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
      <body className={outfit.className}>
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
