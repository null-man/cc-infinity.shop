"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ShoppingBag, Search, User, Menu, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { useCartStore } from "@/lib/cart-store"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const items = useCartStore((state) => state.items)
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navLinks = [
    { href: "/category/new", label: "New In" },
    { href: "/category/women", label: "Women" },
    { href: "/category/men", label: "Men" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md">
      {/* Marquee announcement */}
      <div className="bg-foreground text-background overflow-hidden py-2">
        <div className="animate-marquee whitespace-nowrap flex">
          <span className="mx-8 text-xs tracking-[0.2em] uppercase">Free Express Shipping on Orders $200+</span>
          <span className="mx-8 text-xs tracking-[0.2em] uppercase">✦</span>
          <span className="mx-8 text-xs tracking-[0.2em] uppercase">New Season Arrivals</span>
          <span className="mx-8 text-xs tracking-[0.2em] uppercase">✦</span>
          <span className="mx-8 text-xs tracking-[0.2em] uppercase">Exclusive Member Rewards</span>
          <span className="mx-8 text-xs tracking-[0.2em] uppercase">✦</span>
          <span className="mx-8 text-xs tracking-[0.2em] uppercase">Free Express Shipping on Orders $200+</span>
          <span className="mx-8 text-xs tracking-[0.2em] uppercase">✦</span>
          <span className="mx-8 text-xs tracking-[0.2em] uppercase">New Season Arrivals</span>
          <span className="mx-8 text-xs tracking-[0.2em] uppercase">✦</span>
          <span className="mx-8 text-xs tracking-[0.2em] uppercase">Exclusive Member Rewards</span>
        </div>
      </div>
      
      <div className="border-b border-border/50">
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
          <Link href="/" className="flex items-center absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
            <span className="text-2xl md:text-3xl font-semibold tracking-tight">
              ccInfinity
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide hover:text-muted-foreground transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(!searchOpen)}
              className="hover:bg-transparent"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex hover:bg-transparent" asChild>
              <Link href="/login">
                <User className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex hover:bg-transparent">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative hover:bg-transparent" asChild>
              <Link href="/cart">
                <ShoppingBag className="h-5 w-5" />
                {mounted && totalItems > 0 && (
                  <Badge className="absolute -right-1 -top-1 h-4 w-4 rounded-full p-0 flex items-center justify-center text-[10px] bg-foreground text-background border-0">
                    {totalItems}
                  </Badge>
                )}
              </Link>
            </Button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="border-t border-border/50 py-4 px-4 md:px-6 bg-background">
            <div className="container max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search for products, brands..."
                  className="w-full pl-8 border-0 border-b border-foreground/20 rounded-none focus-visible:ring-0 bg-transparent text-base placeholder:text-muted-foreground/60"
                  autoFocus
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="w-full sm:max-w-md border-0">
          <SheetHeader className="text-left pb-8 border-b">
            <SheetTitle className="text-2xl font-semibold tracking-tight">
              ccInfinity
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-0 mt-0">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xl py-4 border-b border-border/50 hover:pl-2 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-8 flex flex-col gap-4">
              <Link
                href="/login"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In / Register
              </Link>
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  )
}
