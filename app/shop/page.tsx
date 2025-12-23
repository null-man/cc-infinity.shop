"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Heart, Search, ChevronDown, Filter, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"

export default function ShopPage() {
  const [priceRange, setPriceRange] = useState([0, 500])
  const [selectedFilters, setSelectedFilters] = useState({ categories: [] as string[], brands: [] as string[], ratings: [] as number[] })
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const products = [
    { id: 1, name: "Elegant Dress", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1983&auto=format&fit=crop", price: 129.99, offerPrice: 89.99, category: "Women", brand: "StyleVogue", rating: 5 },
    { id: 2, name: "Business Casual Suit", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop", price: 299.99, offerPrice: 199.99, category: "Men", brand: "StyleVogue", rating: 5 },
    { id: 3, name: "Designer Handbag", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1935&auto=format&fit=crop", price: 149.99, offerPrice: 99.99, category: "Accessories", brand: "Elegance", rating: 4 },
    { id: 4, name: "Classic Sneakers", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop", price: 179.99, offerPrice: 129.99, category: "Shoes", brand: "SportStyle", rating: 5 },
    { id: 5, name: "Silk Blouse", image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=1974&auto=format&fit=crop", price: 159.99, offerPrice: 109.99, category: "Women", brand: "StyleVogue", rating: 4 },
    { id: 6, name: "Casual Jeans", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1926&auto=format&fit=crop", price: 89.99, offerPrice: 69.99, category: "Men", brand: "DenimCo", rating: 4 },
    { id: 7, name: "Luxury Watch", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1999&auto=format&fit=crop", price: 399.99, offerPrice: 299.99, category: "Accessories", brand: "Elegance", rating: 5 },
    { id: 8, name: "High Heel Sandals", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=2080&auto=format&fit=crop", price: 139.99, offerPrice: 99.99, category: "Shoes", brand: "StyleVogue", rating: 4 },
  ]

  const toggleFilter = (type: "categories" | "brands" | "ratings", value: string | number) => {
    setSelectedFilters((prev) => {
      const current = [...prev[type]] as (string | number)[]
      const index = current.indexOf(value)
      if (index === -1) current.push(value)
      else current.splice(index, 1)
      return { ...prev, [type]: current }
    })
  }

  const clearFilters = () => {
    setSelectedFilters({ categories: [], brands: [], ratings: [] })
    setPriceRange([0, 500])
  }

  const FilterSidebar = ({ isMobile = false }) => (
    <div className={`space-y-6 ${isMobile ? "" : "sticky top-20"}`}>
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-lg">Filters</h3>
        {(selectedFilters.categories.length > 0 || selectedFilters.brands.length > 0 || priceRange[0] > 0 || priceRange[1] < 500) && (
          <Button variant="ghost" size="sm" onClick={clearFilters} className="h-8 text-xs text-primary hover:text-primary/80">Clear all</Button>
        )}
      </div>
      <Accordion type="single" collapsible defaultValue="categories">
        <AccordionItem value="categories">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {["Women", "Men", "Accessories", "Shoes"].map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox id={`category-${category}`} checked={selectedFilters.categories.includes(category)} onCheckedChange={() => toggleFilter("categories", category)} />
                  <Label htmlFor={`category-${category}`} className="text-sm font-normal cursor-pointer">{category}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 px-1">
              <Slider defaultValue={[0, 500]} max={500} step={10} value={priceRange} onValueChange={setPriceRange} className="py-4" />
              <div className="flex items-center justify-between"><span className="text-sm">${priceRange[0]}</span><span className="text-sm">${priceRange[1]}</span></div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="brands">
          <AccordionTrigger>Brands</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {["StyleVogue", "Elegance", "DenimCo", "SportStyle"].map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox id={`brand-${brand}`} checked={selectedFilters.brands.includes(brand)} onCheckedChange={() => toggleFilter("brands", brand)} />
                  <Label htmlFor={`brand-${brand}`} className="text-sm font-normal cursor-pointer">{brand}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )

  const filteredProducts = products.filter((product) => {
    if (selectedFilters.categories.length > 0 && !selectedFilters.categories.includes(product.category)) return false
    if (selectedFilters.brands.length > 0 && !selectedFilters.brands.includes(product.brand)) return false
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false
    return true
  })

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">All Products</h1>
        <div className="flex items-center text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <span>Shop</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="hidden md:block w-64 shrink-0"><FilterSidebar /></div>
        <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
          <SheetContent side="left" className="w-full sm:max-w-md">
            <SheetHeader className="mb-4"><SheetTitle>Filters</SheetTitle><SheetDescription>Narrow down your search</SheetDescription></SheetHeader>
            <FilterSidebar isMobile={true} />
          </SheetContent>
        </Sheet>

        <div className="flex-1">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="md:hidden flex items-center gap-2" onClick={() => setMobileFiltersOpen(true)}><Filter className="h-4 w-4" />Filters</Button>
              <div className="flex flex-wrap gap-2">
                {selectedFilters.categories.map((category) => (<Badge key={`cat-${category}`} variant="secondary" className="flex items-center gap-1">{category}<X className="h-3 w-3 cursor-pointer" onClick={() => toggleFilter("categories", category)} /></Badge>))}
                {selectedFilters.brands.map((brand) => (<Badge key={`brand-${brand}`} variant="secondary" className="flex items-center gap-1">{brand}<X className="h-3 w-3 cursor-pointer" onClick={() => toggleFilter("brands", brand)} /></Badge>))}
              </div>
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <span className="text-sm text-muted-foreground hidden sm:inline">{filteredProducts.length} products</span>
              <Select defaultValue="featured">
                <SelectTrigger className="w-[150px]"><SelectValue placeholder="Sort by" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest Arrivals</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">No products found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your filters</p>
              <Button onClick={clearFilters}>Clear Filters</Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="aspect-square overflow-hidden rounded-lg bg-background">
                    <Image src={product.image} alt={product.name} width={300} height={300} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full opacity-0 transition-opacity group-hover:opacity-100"><Heart className="h-4 w-4" /></Button>
                      <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full opacity-0 transition-opacity group-hover:opacity-100"><Search className="h-4 w-4" /></Button>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                      <Button className="mx-auto"><ShoppingCart className="mr-2 h-4 w-4" />Add to Cart</Button>
                    </div>
                  </div>
                  <div className="mt-4 space-y-1 text-center">
                    <Badge variant="outline" className="mb-2">{product.category}</Badge>
                    <h3 className="font-medium">{product.name}</h3>
                    <div className="flex justify-center gap-2">
                      <span className="text-muted-foreground line-through">${product.price}</span>
                      <span className="font-medium text-primary">${product.offerPrice}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center justify-center space-x-2 mt-12">
            <Button variant="outline" size="icon" disabled><ChevronDown className="h-4 w-4 rotate-90" /></Button>
            <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-primary text-primary-foreground hover:bg-primary/90">1</Button>
            <Button variant="outline" size="sm" className="h-8 w-8 p-0">2</Button>
            <Button variant="outline" size="sm" className="h-8 w-8 p-0">3</Button>
            <Button variant="outline" size="icon"><ChevronDown className="h-4 w-4 -rotate-90" /></Button>
          </div>
        </div>
      </div>
    </div>
  )
}
