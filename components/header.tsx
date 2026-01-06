"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingBag, Search, User, Menu, X, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const navLinks = [
    { href: "/shop", label: "Shop All" },
    { href: "/category/living", label: "Living" },
    { href: "/category/bedroom", label: "Bedroom" },
    { href: "/category/kitchen", label: "Kitchen" },
    { href: "/category/decor", label: "Decor" },
    { href: "/about", label: "About" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      {/* Top announcement bar */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-xs tracking-wider">
        FREE SHIPPING ON ORDERS OVER $150 | NEW ARRIVALS WEEKLY
      </div>
      
      <div className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-light tracking-[0.15em] uppercase">
              STREETWEARZONE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex" asChild>
              <Link href="/login">
                <User className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative" asChild>
              <Link href="/cart">
                <ShoppingBag className="h-5 w-5" />
                <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-[10px] bg-foreground text-background">
                  2
                </Badge>
              </Link>
            </Button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="border-t py-4 px-4 md:px-6">
            <div className="container max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search for products..."
                  className="w-full pl-10 border-0 border-b rounded-none focus-visible:ring-0 bg-transparent"
                  autoFocus
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="w-full sm:max-w-sm">
          <SheetHeader className="text-left">
            <SheetTitle className="text-xl font-light tracking-[0.15em] uppercase">
              STREETWEARZONE
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-6 mt-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg tracking-wide text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t pt-6 mt-2">
              <Link
                href="/login"
                className="text-lg tracking-wide text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Account
              </Link>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  )
}
