"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { SlidersHorizontal, X, Heart, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const allProducts = [
  { id: 1, name: "Oversized Wool Blazer", price: 289, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop", category: "women", type: "Outerwear", isNew: true },
  { id: 2, name: "Silk Midi Dress", price: 195, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop", category: "women", type: "Dresses", isNew: true },
  { id: 3, name: "Cashmere Knit Sweater", price: 245, image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&auto=format&fit=crop", category: "women", type: "Knitwear" },
  { id: 4, name: "Wide Leg Trousers", price: 165, image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&auto=format&fit=crop", category: "women", type: "Bottoms" },
  { id: 5, name: "Tailored Wool Coat", price: 395, image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&auto=format&fit=crop", category: "women", type: "Outerwear" },
  { id: 6, name: "Ribbed Tank Top", price: 45, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop", category: "women", type: "Basics" },
  { id: 7, name: "Satin Slip Skirt", price: 125, image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=800&auto=format&fit=crop", category: "women", type: "Bottoms" },
  { id: 8, name: "Linen Blazer", price: 265, image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&auto=format&fit=crop", category: "women", type: "Outerwear", isNew: true },
  { id: 9, name: "Cotton Poplin Shirt", price: 125, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop", category: "men", type: "Tops" },
  { id: 10, name: "Linen Blend Shorts", price: 95, image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&auto=format&fit=crop", category: "men", type: "Bottoms" },
  { id: 11, name: "Slim Fit Chinos", price: 135, image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&auto=format&fit=crop", category: "men", type: "Bottoms" },
  { id: 12, name: "Merino Wool Sweater", price: 185, image: "https://images.unsplash.com/photo-1614975059251-992f11792b9f?w=800&auto=format&fit=crop", category: "men", type: "Knitwear", isNew: true },
  { id: 13, name: "Leather Crossbody Bag", price: 175, originalPrice: 220, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop", category: "accessories", type: "Bags" },
  { id: 14, name: "Minimal Gold Hoops", price: 85, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop", category: "accessories", type: "Jewelry" },
  { id: 15, name: "Structured Tote Bag", price: 225, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop", category: "accessories", type: "Bags" },
  { id: 16, name: "Silk Scarf", price: 95, image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&auto=format&fit=crop", category: "accessories", type: "Scarves", isNew: true },
  { id: 17, name: "Leather Belt", price: 75, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop", category: "accessories", type: "Belts" },
  { id: 18, name: "Cashmere Beanie", price: 65, image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800&auto=format&fit=crop", category: "accessories", type: "Hats", isNew: true },
]

const categoryInfo: Record<string, { title: string; description: string; image: string }> = {
  women: { title: "Women", description: "Discover contemporary pieces designed for the modern woman. From tailored essentials to statement pieces.", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&auto=format&fit=crop" },
  men: { title: "Men", description: "Refined menswear that balances classic style with modern sensibility. Effortless sophistication.", image: "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=1600&auto=format&fit=crop" },
  accessories: { title: "Accessories", description: "Complete your look with our curated selection of bags, jewelry, and finishing touches.", image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=1600&auto=format&fit=crop" },
  new: { title: "New Arrivals", description: "Be the first to shop our latest drops. Fresh styles added weekly.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&auto=format&fit=crop" },
}

export default function CategoryPage() {
  const params = useParams()
  const slug = params.slug as string
  const [priceRange, setPriceRange] = useState([0, 500])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortBy, setSortBy] = useState("featured")

  const info = categoryInfo[slug] || { title: "Products", description: "Browse our collection", image: "" }
  let categoryProducts = slug === "new" ? allProducts.filter(p => p.isNew) : allProducts.filter(p => p.category === slug)
  const types = [...new Set(categoryProducts.map(p => p.type))]

  const toggleType = (type: string) => setSelectedTypes(prev => prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type])
  const clearFilters = () => { setSelectedTypes([]); setPriceRange([0, 500]) }
  const hasActiveFilters = selectedTypes.length > 0 || priceRange[0] > 0 || priceRange[1] < 500

  let filteredProducts = categoryProducts.filter(product => {
    if (selectedTypes.length > 0 && !selectedTypes.includes(product.type)) return false
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false
    return true
  })

  if (sortBy === "price-low") filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price)
  else if (sortBy === "price-high") filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price)

  const FilterContent = () => (
    <div className="space-y-6">
      {hasActiveFilters && <button onClick={clearFilters} className="text-xs underline text-muted-foreground hover:text-foreground">Clear all</button>}
      <Accordion type="multiple" defaultValue={["type", "price"]}>
        <AccordionItem value="type" className="border-b-0">
          <AccordionTrigger className="text-sm font-medium py-3 hover:no-underline">Product Type</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              {types.map(type => (
                <div key={type} className="flex items-center gap-3">
                  <Checkbox id={`type-${type}`} checked={selectedTypes.includes(type)} onCheckedChange={() => toggleType(type)} />
                  <Label htmlFor={`type-${type}`} className="text-sm font-normal cursor-pointer">{type}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="price" className="border-b-0">
          <AccordionTrigger className="text-sm font-medium py-3 hover:no-underline">Price</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              <Slider value={priceRange} onValueChange={setPriceRange} max={500} step={25} />
              <div className="flex justify-between text-sm text-muted-foreground"><span>${priceRange[0]}</span><span>${priceRange[1]}</span></div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )

  return (
    <div className="min-h-screen">
      <div className="relative h-[45vh] min-h-[350px]">
        {info.image && <Image src={info.image} alt={info.title} fill className="object-cover" priority />}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-2xl px-4">
            <span className="text-xs tracking-[0.3em] uppercase mb-3 block opacity-80">Collection</span>
            <h1 className="text-4xl md:text-6xl font-medium mb-4">{info.title}</h1>
            <p className="text-white/80 max-w-lg mx-auto">{info.description}</p>
          </div>
        </div>
      </div>
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="flex items-center justify-between mb-8 pb-4 border-b">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="md:hidden rounded-none" onClick={() => setMobileFiltersOpen(true)}>
              <SlidersHorizontal className="h-4 w-4 mr-2" />Filters
            </Button>
            <span className="text-sm text-muted-foreground">{filteredProducts.length} products</span>
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[160px] rounded-none text-sm border-0 border-b"><SelectValue placeholder="Sort by" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2 mb-6">
            {selectedTypes.map(type => (
              <button key={type} onClick={() => toggleType(type)} className="flex items-center gap-1 text-xs bg-secondary px-3 py-1.5">{type}<X className="h-3 w-3" /></button>
            ))}
          </div>
        )}
        <div className="flex gap-12">
          <aside className="hidden md:block w-56 shrink-0"><FilterContent /></aside>
          <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
            <SheetContent side="left" className="w-full sm:max-w-sm border-0">
              <SheetHeader><SheetTitle className="text-left font-medium">Filters</SheetTitle></SheetHeader>
              <div className="mt-6"><FilterContent /></div>
            </SheetContent>
          </Sheet>
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground mb-4">No products match your filters.</p>
                <Button variant="outline" onClick={clearFilters} className="rounded-none">Clear Filters</Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <Link key={product.id} href="/shop" className="group product-card">
                    <div className="aspect-[3/4] relative overflow-hidden bg-muted mb-4">
                      <Image src={product.image} alt={product.name} fill className="object-cover product-image" />
                      {product.isNew && <span className="absolute top-3 left-3 text-[10px] tracking-wider uppercase bg-foreground text-background px-2 py-1">New</span>}
                      {product.originalPrice && <span className="absolute top-3 left-3 text-[10px] tracking-wider uppercase bg-red-500 text-white px-2 py-1">Sale</span>}
                      <div className="absolute top-3 right-3"><button className="p-2 bg-white/90 hover:bg-white transition-colors"><Heart className="h-4 w-4" /></button></div>
                      <div className="absolute bottom-0 left-0 right-0 p-3 quick-add"><Button size="sm" className="w-full rounded-none text-xs"><ShoppingBag className="h-3 w-3 mr-2" />Quick Add</Button></div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[11px] text-muted-foreground tracking-wider uppercase">{product.type}</p>
                      <h3 className="text-sm font-medium">{product.name}</h3>
                      <div className="flex items-center gap-2">
                        <p className="text-sm">${product.price}</p>
                        {product.originalPrice && <p className="text-sm text-muted-foreground line-through">${product.originalPrice}</p>}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
