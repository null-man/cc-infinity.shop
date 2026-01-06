"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { SlidersHorizontal, X, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const allProducts = [
  { id: 1, name: "Linen Sofa", price: 1299, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop", category: "Living", material: "Linen" },
  { id: 2, name: "Ceramic Vase Set", price: 89, image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&auto=format&fit=crop", category: "Decor", material: "Ceramic" },
  { id: 3, name: "Oak Dining Table", price: 899, image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&auto=format&fit=crop", category: "Kitchen", material: "Wood" },
  { id: 4, name: "Wool Throw Blanket", price: 149, image: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?w=800&auto=format&fit=crop", category: "Bedroom", material: "Wool" },
  { id: 5, name: "Rattan Pendant Light", price: 199, image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=800&auto=format&fit=crop", category: "Decor", material: "Rattan" },
  { id: 6, name: "Marble Side Table", price: 349, image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=800&auto=format&fit=crop", category: "Living", material: "Marble" },
  { id: 7, name: "Cotton Bedding Set", price: 199, image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop", category: "Bedroom", material: "Cotton" },
  { id: 8, name: "Wooden Cutting Board", price: 59, image: "https://images.unsplash.com/photo-1605433246452-82f0f0f5c4a4?w=800&auto=format&fit=crop", category: "Kitchen", material: "Wood" },
  { id: 9, name: "Velvet Armchair", price: 599, image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&auto=format&fit=crop", category: "Living", material: "Velvet" },
  { id: 10, name: "Terracotta Planter", price: 45, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&auto=format&fit=crop", category: "Decor", material: "Terracotta" },
  { id: 11, name: "Linen Curtains", price: 129, image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&auto=format&fit=crop", category: "Living", material: "Linen" },
  { id: 12, name: "Stoneware Dinnerware", price: 159, image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&auto=format&fit=crop", category: "Kitchen", material: "Stoneware" },
]

export default function ShopPage() {
  const [priceRange, setPriceRange] = useState([0, 1500])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([])
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortBy, setSortBy] = useState("featured")

  const categories = ["Living", "Bedroom", "Kitchen", "Decor"]
  const materials = ["Linen", "Wood", "Ceramic", "Wool", "Rattan", "Marble", "Cotton", "Velvet", "Terracotta", "Stoneware"]

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    )
  }

  const toggleMaterial = (material: string) => {
    setSelectedMaterials(prev =>
      prev.includes(material) ? prev.filter(m => m !== material) : [...prev, material]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedMaterials([])
    setPriceRange([0, 1500])
  }

  const hasActiveFilters = selectedCategories.length > 0 || selectedMaterials.length > 0 || priceRange[0] > 0 || priceRange[1] < 1500

  let filteredProducts = allProducts.filter(product => {
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) return false
    if (selectedMaterials.length > 0 && !selectedMaterials.includes(product.material)) return false
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false
    return true
  })

  // Sort products
  if (sortBy === "price-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price)
  } else if (sortBy === "price-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price)
  }

  const FilterContent = () => (
    <div className="space-y-6">
      {hasActiveFilters && (
        <Button variant="ghost" size="sm" onClick={clearFilters} className="text-xs underline p-0 h-auto">
          Clear all filters
        </Button>
      )}
      
      <Accordion type="multiple" defaultValue={["category", "price", "material"]}>
        <AccordionItem value="category" className="border-b-0">
          <AccordionTrigger className="text-sm font-medium py-3">Category</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              {categories.map(category => (
                <div key={category} className="flex items-center gap-3">
                  <Checkbox
                    id={`cat-${category}`}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => toggleCategory(category)}
                  />
                  <Label htmlFor={`cat-${category}`} className="text-sm font-normal cursor-pointer">
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price" className="border-b-0">
          <AccordionTrigger className="text-sm font-medium py-3">Price</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={1500}
                step={50}
                className="w-full"
              />
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
              {materials.slice(0, 6).map(material => (
                <div key={material} className="flex items-center gap-3">
                  <Checkbox
                    id={`mat-${material}`}
                    checked={selectedMaterials.includes(material)}
                    onCheckedChange={() => toggleMaterial(material)}
                  />
                  <Label htmlFor={`mat-${material}`} className="text-sm font-normal cursor-pointer">
                    {material}
                  </Label>
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
      <div className="bg-secondary/50 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-light mb-4">Shop All</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Discover our curated collection of thoughtfully designed home essentials.
            </p>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              className="md:hidden rounded-none"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <span className="text-sm text-muted-foreground hidden md:block">
              {filteredProducts.length} products
            </span>
          </div>
          
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[160px] rounded-none text-sm">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Active filters */}
        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2 mb-6">
            {selectedCategories.map(cat => (
              <button
                key={cat}
                onClick={() => toggleCategory(cat)}
                className="flex items-center gap-1 text-xs bg-secondary px-3 py-1.5 hover:bg-secondary/80 transition-colors"
              >
                {cat}
                <X className="h-3 w-3" />
              </button>
            ))}
            {selectedMaterials.map(mat => (
              <button
                key={mat}
                onClick={() => toggleMaterial(mat)}
                className="flex items-center gap-1 text-xs bg-secondary px-3 py-1.5 hover:bg-secondary/80 transition-colors"
              >
                {mat}
                <X className="h-3 w-3" />
              </button>
            ))}
          </div>
        )}

        <div className="flex gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-56 shrink-0">
            <FilterContent />
          </aside>

          {/* Mobile Filters */}
          <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
            <SheetContent side="left" className="w-full sm:max-w-sm">
              <SheetHeader>
                <SheetTitle className="text-left font-light tracking-wide">Filters</SheetTitle>
              </SheetHeader>
              <div className="mt-6">
                <FilterContent />
              </div>
            </SheetContent>
          </Sheet>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-4">No products match your filters.</p>
                <Button variant="outline" onClick={clearFilters} className="rounded-none">
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                {filteredProducts.map(product => (
                  <Link key={product.id} href="/shop" className="group">
                    <div className="aspect-[4/5] relative overflow-hidden bg-muted mb-4">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground tracking-wide uppercase">
                        {product.category}
                      </p>
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
