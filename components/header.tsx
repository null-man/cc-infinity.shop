"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, Search, ChevronDown, Globe, User, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">awesomeproducts-world</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">Home</Link>
            <Link href="/shop" className="text-sm font-medium transition-colors hover:text-primary">Shop</Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary">
                Categories <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem><Link href="/category/women" className="w-full">Women</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/category/men" className="w-full">Men</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/category/accessories" className="w-full">Accessories</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/category/shoes" className="w-full">Shoes</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">About</Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">Contact</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search..." className="w-[200px] pl-8 md:w-[250px] rounded-full bg-muted" />
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative"><Globe className="h-5 w-5" /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Español</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" size="icon" className="relative" asChild>
            <Link href="/login"><User className="h-5 w-5" /></Link>
          </Button>
          <Button variant="ghost" size="icon" className="relative" asChild>
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-primary">3</Badge>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden border-t p-4 space-y-4 bg-background">
          <div className="relative mb-4">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search..." className="w-full pl-8 rounded-full bg-muted" />
          </div>
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">Home</Link>
            <Link href="/shop" className="text-sm font-medium transition-colors hover:text-primary">Shop</Link>
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between text-sm font-medium transition-colors hover:text-primary">Categories <ChevronDown className="h-4 w-4" /></summary>
              <nav className="mt-2 ml-4 flex flex-col space-y-2">
                <Link href="/category/women" className="text-sm transition-colors hover:text-primary">Women</Link>
                <Link href="/category/men" className="text-sm transition-colors hover:text-primary">Men</Link>
                <Link href="/category/accessories" className="text-sm transition-colors hover:text-primary">Accessories</Link>
                <Link href="/category/shoes" className="text-sm transition-colors hover:text-primary">Shoes</Link>
              </nav>
            </details>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">About</Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  )
}
