"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ShoppingCart, Heart, Search, ChevronDown, Filter, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"

const allProducts = [
  { id: 1, name: "Elegant Dress", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1983&auto=format&fit=crop", price: 129.99, offerPrice: 89.99, category: "Women", slug: "women", brand: "StyleVogue" },
  { id: 2, name: "Silk Blouse", image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=1974&auto=format&fit=crop", price: 159.99, offerPrice: 109.99, category: "Women", slug: "women", brand: "StyleVogue" },
  { id: 3, name: "Summer Skirt", image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj9a?q=80&w=1974&auto=format&fit=crop", price: 79.99, offerPrice: 59.99, category: "Women", slug: "women", brand: "Elegance" },
  { id: 4, name: "Casual Cardigan", image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=2005&auto=format&fit=crop", price: 99.99, offerPrice: 79.99, category: "Women", slug: "women", brand: "StyleVogue" },
  { id: 5, name: "Business Casual Suit", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop", price: 299.99, offerPrice: 199.99, category: "Men", slug: "men", brand: "StyleVogue" },
  { id: 6, name: "Casual Jeans", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1926&auto=format&fit=crop", price: 89.99, offerPrice: 69.99, category: "Men", slug: "men", brand: "DenimCo" },
  { id: 7, name: "Cotton T-Shirt", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1980&auto=format&fit=crop", price: 39.99, offerPrice: 29.99, category: "Men", slug: "men", brand: "StyleVogue" },
  { id: 8, name: "Polo Shirt", image: "https://images.unsplash.com/photo-1625910513413-5fc45e80b5b7?q=80&w=1974&auto=format&fit=crop", price: 59.99, offerPrice: 44.99, category: "Men", slug: "men", brand: "SportStyle" },
  { id: 9, name: "Designer Handbag", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1935&auto=format&fit=crop", price: 149.99, offerPrice: 99.99, category: "Accessories", slug: "accessories", brand: "Elegance" },
  { id: 10, name: "Luxury Watch", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1999&auto=format&fit=crop", price: 399.99, offerPrice: 299.99, category: "Accessories", slug: "accessories", brand: "Elegance" },
  { id: 11, name: "Leather Belt", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1974&auto=format&fit=crop", price: 49.99, offerPrice: 39.99, category: "Accessories", slug: "accessories", brand: "StyleVogue" },
  { id: 12, name: "Sunglasses", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2080&auto=format&fit=crop", price: 129.99, offerPrice: 89.99, category: "Accessories", slug: "accessories", brand: "Elegance" },
  { id: 13, name: "Classic Sneakers", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop", price: 179.99, offerPrice: 129.99, category: "Shoes", slug: "shoes", brand: "SportStyle" },
  { id: 14, name: "High Heel Sandals", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=2080&auto=format&fit=crop", price: 139.99, offerPrice: 99.99, category: "Shoes", slug: "shoes", brand: "StyleVogue" },
  { id: 15, name: "Leather Boots", image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=1974&auto=format&fit=crop", price: 199.99, offerPrice: 149.99, category: "Shoes", slug: "shoes", brand: "StyleVogue" },
  { id: 16, name: "Casual Loafers", image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=2069&auto=format&fit=crop", price: 119.99, offerPrice: 89.99, category: "Shoes", slug: "shoes", brand: "Elegance" },
]

const categoryInfo: Record<string, { title: string; description: string }> = {
  women: { title: "Women's Collection", description: "Discover our latest women's fashion - from elegant dresses to casual everyday wear." },
  men: { title: "Men's Collection", description: "Explore our men's collection - stylish suits, casual wear, and everything in between." },
  accessories: { title: "Accessories", description: "Complete your look with our curated selection of bags, watches, and jewelry." },
  shoes: { title: "Shoes", description: "Step out in style with our collection of sneakers, heels, boots, and more." },
}

export default function CategoryPage() {
  const params = useParams()
  const slug = params.slug as string
  const [priceRange, setPriceRange] = useState([0, 500])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const info = categoryInfo[slug] || { title: "Products", description: "Browse our collection" }
  const categoryProducts = allProducts.filter(p => p.slug === slug)
  const brands = [...new Set(categoryProducts.map(p => p.brand))]

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand])
  }

  const clearFilters = () => {
    setSelectedBrands([])
    setPriceRange([0, 500])
  }

  const filteredProducts = categoryProducts.filter(product => {
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) return false
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false
    return true
  })

  const FilterSidebar = ({ isMobile = false }) => (
    <div className={`space-y-6 ${isMobile ? "" : "sticky top-20"}`}>
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-lg">Filters</h3>
        {(selectedBrands.length > 0 || priceRange[0] > 0 || priceRange[1] < 500) && (
          <Button variant="ghost" size="sm" onClick={clearFilters} className="h-8 text-xs text-primary">Clear all</Button>
        )}
      </div>
      <Accordion type="single" collapsible defaultValue="price">
        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 px-1">
              <Slider max={500} step={10} value={priceRange} onValueChange={setPriceRange} className="py-4" />
              <div className="flex justify-between text-sm"><span>${priceRange[0]}</span><span>${priceRange[1]}</span></div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="brands">
          <AccordionTrigger>Brands</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {brands.map(brand => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox id={`brand-${brand}`} checked={selectedBrands.includes(brand)} onCheckedChange={() => toggleBrand(brand)} />
                  <Label htmlFor={`brand-${brand}`} className="text-sm cursor-pointer">{brand}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{info.title}</h1>
        <div className="flex items-center text-sm text-muted-foreground mb-4">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-primary">Shop</Link>
          <span className="mx-2">/</span>
          <span className="capitalize">{slug}</span>
        </div>
        <p className="text-muted-foreground">{info.description}</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="hidden md:block w-64 shrink-0"><FilterSidebar /></div>
        <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
          <SheetContent side="left" className="w-full sm:max-w-md">
            <SheetHeader className="mb-4"><SheetTitle>Filters</SheetTitle><SheetDescription>Narrow down your search</SheetDescription></SheetHeader>
            <FilterSidebar isMobile />
          </SheetContent>
        </Sheet>

        <div className="flex-1">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="md:hidden" onClick={() => setMobileFiltersOpen(true)}><Filter className="h-4 w-4 mr-2" />Filters</Button>
              {selectedBrands.map(brand => (
                <Badge key={brand} variant="secondary" className="flex items-center gap-1">{brand}<X className="h-3 w-3 cursor-pointer" onClick={() => toggleBrand(brand)} /></Badge>
              ))}
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <span className="text-sm text-muted-foreground hidden sm:inline">{filteredProducts.length} products</span>
              <Select defaultValue="featured">
                <SelectTrigger className="w-[150px]"><SelectValue placeholder="Sort by" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
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
              {filteredProducts.map(product => (
                <div key={product.id} className="group relative">
                  <div className="aspect-square overflow-hidden rounded-lg bg-background">
                    <Image src={product.image} alt={product.name} width={300} height={300} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"><Heart className="h-4 w-4" /></Button>
                      <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"><Search className="h-4 w-4" /></Button>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button><ShoppingCart className="mr-2 h-4 w-4" />Add to Cart</Button>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
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
        </div>
      </div>
    </div>
  )
}
