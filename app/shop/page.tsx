"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import { QuickAddButton } from "@/components/quick-add-button"

const products = [
  { id: 1, name: "Oversized Wool Blazer", price: 289, image: "/ai-images/product-blazer.jpg", category: "Outerwear", isNew: true },
  { id: 2, name: "Silk Midi Dress", price: 195, image: "/ai-images/product-dress.jpg", category: "Dresses", isNew: true },
  { id: 3, name: "Cashmere Knit Sweater", price: 245, image: "/ai-images/product-sweater.jpg", category: "Knitwear" },
  { id: 4, name: "Wide Leg Trousers", price: 165, image: "/ai-images/product-trousers.jpg", category: "Bottoms" },
  { id: 5, name: "Cotton Poplin Shirt", price: 125, image: "/ai-images/trending-shirt.jpg", category: "Tops" },
  { id: 6, name: "Tailored Wool Coat", price: 395, image: "/ai-images/trending-coat.jpg", category: "Outerwear" },
  { id: 7, name: "Ribbed Tank Top", price: 45, image: "/ai-images/trending-tank.jpg", category: "Basics" },
  { id: 8, name: "Linen Blend Shorts", price: 95, image: "/ai-images/trending-shorts.jpg", category: "Bottoms" },
]

export default function ShopPage() {
  return (
    <div className="min-h-screen">
      <div className="container px-4 md:px-6 py-12">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-medium">All Products</h1>
          <p className="text-muted-foreground mt-2">{products.length} products</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <div key={product.id} className="group product-card">
              <div className="aspect-[3/4] relative overflow-hidden bg-muted mb-4">
                <Link href="#">
                  <Image src={product.image} alt={product.name} fill className="object-cover product-image" />
                </Link>
                {product.isNew && <span className="absolute top-3 left-3 text-[10px] tracking-wider uppercase bg-foreground text-background px-2 py-1">New</span>}
                <div className="absolute top-3 right-3">
                  <button className="p-2 bg-white/90 hover:bg-white transition-colors">
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 quick-add">
                  <QuickAddButton product={product} />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[11px] text-muted-foreground tracking-wider uppercase">{product.category}</p>
                <h3 className="text-sm font-medium">{product.name}</h3>
                <p className="text-sm">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
