"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { SlidersHorizontal, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const allProducts = [
  { id: 1, name: "Linen Sofa", price: 1299, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop", category: "living", material: "Linen" },
  { id: 2, name: "Velvet Armchair", price: 599, image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&auto=format&fit=crop", category: "living", material: "Velvet" },
  { id: 3, name: "Marble Side Table", price: 349, image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=800&auto=format&fit=crop", category: "living", material: "Marble" },
  { id: 4, name: "Linen Curtains", price: 129, image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&auto=format&fit=crop", category: "living", material: "Linen" },
  { id: 5, name: "Cotton Bedding Set", price: 199, image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop", category: "bedroom", material: "Cotton" },
  { id: 6, name: "Wool Throw Blanket", price: 149, image: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?w=800&auto=format&fit=crop", category: "bedroom", material: "Wool" },
  { id: 7, name: "Linen Pillowcase Set", price: 79, image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop", category: "bedroom", material: "Linen" },
  { id: 8, name: "Wooden Nightstand", price: 299, image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800&auto=format&fit=crop", category: "bedroom", material: "Wood" },
]

const moreProducts = [
  { id: 9, name: "Oak Dining Table", price: 899, image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&auto=format&fit=crop", category: "kitchen", material: "Wood" },
  { id: 10, name: "Wooden Cutting Board", price: 59, image: "https://images.unsplash.com/photo-1605433246452-82f0f0f5c4a4?w=800&auto=format&fit=crop", category: "kitchen", material: "Wood" },
  { id: 11, name: "Stoneware Dinnerware", price: 159, image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&auto=format&fit=crop", category: "kitchen", material: "Stoneware" },
  { id: 12, name: "Glass Carafe", price: 45, image: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=800&auto=format&fit=crop", category: "kitchen", material: "Glass" },
  { id: 13, name: "Ceramic Vase Set", price: 89, image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&auto=format&fit=crop", category: "decor", material: "Ceramic" },
  { id: 14, name: "Rattan Pendant Light", price: 199, image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=800&auto=format&fit=crop", category: "decor", material: "Rattan" },
  { id: 15, name: "Terracotta Planter", price: 45, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&auto=format&fit=crop", category: "decor", material: "Terracotta" },
  { id: 16, name: "Woven Wall Art", price: 129, image: "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=800&auto=format&fit=crop", category: "decor", material: "Cotton" },
]

const products = [...allProducts, ...moreProducts]

const categoryInfo: Record<string, { title: string; description: string; image: string }> = {
  living: { title: "Living Room", description: "Create a space that reflects your style with our curated living room collection.", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1600&auto=format&fit=crop" },
  bedroom: { title: "Bedroom", description: "Transform your bedroom into a peaceful retreat with our cozy essentials.", image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1600&auto=format&fit=crop" },
  kitchen: { title: "Kitchen", description: "Elevate your culinary space with functional and beautiful kitchen pieces.", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&auto=format&fit=crop" },
  decor: { title: "Decor", description: "Add the finishing touches that make a house feel like home.", image: "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=1600&auto=format&fit=crop" },
}

export default function CategoryPage() {
  const params = useParams()
  const slug = params.slug as string
  const [priceRange, setPriceRange] = useState([0, 1500])
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([])
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortBy, setSortBy] = useState("featured")

  const info = categoryInfo[slug] || { title: "Products", description: "Browse our collection", image: "" }
  const categoryProducts = products.filter(p => p.category === slug)
  const materials = [...new Set(categoryProducts.map(p => p.material))]

  const toggleMaterial = (material: string) => {
    setSelectedMaterials(prev => prev.includes(material) ? prev.filter(m => m !== material) : [...prev, material])
  }

  const clearFilters = () => {
    setSelectedMaterials([])
    setPriceRange([0, 1500])
  }

  const hasActiveFilters = selectedMaterials.length > 0 || priceRange[0] > 0 || priceRange[1] < 1500

  let filteredProducts = categoryProducts.filter(product => {
    if (selectedMaterials.length > 0 && !selectedMaterials.includes(product.material)) return false
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false
    return true
  })

  if (sortBy === "price-low") filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price)
  else if (sortBy === "price-high") filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price)

  const FilterContent = () => (
    <div className="space-y-6">
      {hasActiveFilters && (
        <Button variant="ghost" size="sm" onClick={clearFilters} className="text-xs underline p-0 h-auto">Clear all filters</Button>
      )}
      <Accordion type="multiple" defaultValue={["price", "material"]}>
        <AccordionItem value="price" className="border-b-0">
          <AccordionTrigger className="text-sm font-medium py-3">Price</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              <Slider value={priceRange} onValueChange={setPriceRange} max={1500} step={50} />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="material" className="border-b-0">
          <AccordionTrigger className="text-sm font-medium py-3">Material</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              {materials.map(material => (
                <div key={material} className="flex items-center gap-3">
                  <Checkbox id={`mat-${material}`} checked={selectedMaterials.includes(material)} onCheckedChange={() => toggleMaterial(material)} />
                  <Label htmlFor={`mat-${material}`} className="text-sm font-normal cursor-pointer">{material}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[40vh] min-h-[300px]">
        {info.image && <Image src={info.image} alt={info.title} fill className="object-cover" priority />}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div>
            <h1 className="text-3xl md:text-5xl font-light mb-4">{info.title}</h1>
            <p className="text-white/80 max-w-xl mx-auto px-4">{info.description}</p>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="flex items-center justify-between mb-8 pb-4 border-b">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="md:hidden rounded-none" onClick={() => setMobileFiltersOpen(true)}>
              <SlidersHorizontal className="h-4 w-4 mr-2" />Filters
            </Button>
            <span className="text-sm text-muted-foreground hidden md:block">{filteredProducts.length} products</span>
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[160px] rounded-none text-sm"><SelectValue placeholder="Sort by" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2 mb-6">
            {selectedMaterials.map(mat => (
              <button key={mat} onClick={() => toggleMaterial(mat)} className="flex items-center gap-1 text-xs bg-secondary px-3 py-1.5">{mat}<X className="h-3 w-3" /></button>
            ))}
          </div>
        )}

        <div className="flex gap-12">
          <aside className="hidden md:block w-56 shrink-0"><FilterContent /></aside>
          <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
            <SheetContent side="left" className="w-full sm:max-w-sm">
              <SheetHeader><SheetTitle className="text-left font-light">Filters</SheetTitle></SheetHeader>
              <div className="mt-6"><FilterContent /></div>
            </SheetContent>
          </Sheet>

          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-4">No products match your filters.</p>
                <Button variant="outline" onClick={clearFilters} className="rounded-none">Clear Filters</Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                {filteredProducts.map(product => (
                  <Link key={product.id} href="/shop" className="group">
                    <div className="aspect-[4/5] relative overflow-hidden bg-muted mb-4">
                      <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground tracking-wide uppercase">{product.material}</p>
                      <h3 className="font-light">{product.name}</h3>
                      <p className="text-muted-foreground">${product.price}</p>
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
