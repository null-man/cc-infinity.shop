"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { QuickAddButton } from "@/components/quick-add-button"

export default function HomePage() {
  const categories = [
    {
      name: "Women",
      slug: "women",
      image: "/ai-images/category-women.jpg",
      count: "240+ styles"
    },
    {
      name: "Men",
      slug: "men", 
      image: "/ai-images/category-men.jpg",
      count: "180+ styles"
    },
  ]

  const newArrivals = [
    {
      id: 1,
      name: "Oversized Wool Blazer",
      price: 289,
      image: "/ai-images/product-blazer.jpg",
      category: "Outerwear",
      isNew: true
    },
    {
      id: 2,
      name: "Silk Midi Dress",
      price: 195,
      image: "/ai-images/product-dress.jpg",
      category: "Dresses",
      isNew: true
    },
    {
      id: 3,
      name: "Cashmere Knit Sweater",
      price: 245,
      image: "/ai-images/product-sweater.jpg",
      category: "Knitwear",
      isNew: true
    },
    {
      id: 4,
      name: "Wide Leg Trousers",
      price: 165,
      image: "/ai-images/product-trousers.jpg",
      category: "Bottoms",
      isNew: true
    },
  ]

  const trending = [
    {
      id: 5,
      name: "Cotton Poplin Shirt",
      price: 125,
      image: "/ai-images/trending-shirt.jpg",
      category: "Tops"
    },
    {
      id: 6,
      name: "Tailored Wool Coat",
      price: 395,
      image: "/ai-images/trending-coat.jpg",
      category: "Outerwear"
    },
    {
      id: 7,
      name: "Ribbed Tank Top",
      price: 45,
      image: "/ai-images/trending-tank.jpg",
      category: "Basics"
    },
    {
      id: 8,
      name: "Linen Blend Shorts",
      price: 95,
      image: "/ai-images/trending-shorts.jpg",
      category: "Bottoms"
    },
  ]

  return (
    <main className="flex-1">
      {/* Hero Section - Split Design */}
      <section className="grid md:grid-cols-2 min-h-[90vh]">
        <div className="relative h-[50vh] md:h-auto">
          <Image
            src="/ai-images/hero-main.jpg"
            alt="Fashion editorial"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <span className="text-xs tracking-[0.3em] uppercase mb-2 block">New Collection</span>
            <h2 className="text-2xl md:text-3xl font-medium">Spring/Summer 2026</h2>
          </div>
        </div>
        <div className="flex flex-col justify-center px-8 md:px-16 py-16 bg-secondary">
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Curated Fashion</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-6">
            Effortless<br /><span className="text-muted-foreground">Style</span>
          </h1>
          <p className="text-muted-foreground max-w-md mb-8 leading-relaxed">
            Discover pieces that define modern elegance. Thoughtfully designed, sustainably crafted for the conscious fashion lover.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="rounded-none px-8" asChild>
              <Link href="/category/women">Shop Women</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-none px-8" asChild>
              <Link href="/category/men">Shop Men</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Browse</span>
              <h2 className="text-3xl md:text-4xl font-medium mt-2">Categories</h2>
            </div>
            <Link href="/shop" className="text-sm flex items-center gap-2 hover:gap-3 transition-all">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`} className="group relative aspect-[3/4] overflow-hidden">
                <Image src={category.image} alt={category.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-xs tracking-wider uppercase mb-1 opacity-80">{category.count}</p>
                  <h3 className="text-2xl font-medium">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Just Dropped</span>
              <h2 className="text-3xl md:text-4xl font-medium mt-2">New Arrivals</h2>
            </div>
            <Link href="/category/new" className="text-sm flex items-center gap-2 hover:gap-3 transition-all">
              See All New <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {newArrivals.map((product) => (
              <div key={product.id} className="group product-card">
                <div className="aspect-[3/4] relative overflow-hidden bg-muted mb-4">
                  <Link href="/shop">
                    <Image src={product.image} alt={product.name} fill className="object-cover product-image" />
                  </Link>
                  {product.isNew && <span className="absolute top-3 left-3 text-[10px] tracking-wider uppercase bg-foreground text-background px-2 py-1">New</span>}
                  <div className="absolute top-3 right-3"><button className="p-2 bg-white/90 hover:bg-white transition-colors"><Heart className="h-4 w-4" /></button></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 quick-add">
                    <QuickAddButton product={product} />
                  </div>
                </div>
                <Link href="/shop" className="space-y-1 block">
                  <p className="text-[11px] text-muted-foreground tracking-wider uppercase">{product.category}</p>
                  <h3 className="text-sm font-medium">{product.name}</h3>
                  <p className="text-sm">${product.price}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Banner */}
      <section className="relative h-[70vh] md:h-[80vh]">
        <Image src="/ai-images/editorial-banner.jpg" alt="Editorial" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-2xl px-4">
            <span className="text-xs tracking-[0.3em] uppercase mb-4 block opacity-80">The Edit</span>
            <h2 className="text-4xl md:text-6xl font-medium mb-6">Minimal Luxe</h2>
            <p className="text-lg opacity-80 mb-8 max-w-lg mx-auto">Clean lines, premium fabrics, timeless silhouettes. Discover our curated selection of elevated essentials.</p>
            <Button size="lg" variant="outline" className="rounded-none px-10 border-white text-white hover:bg-white hover:text-foreground">Explore The Edit</Button>
          </div>
        </div>
      </section>

      {/* Trending Now */}
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Most Loved</span>
              <h2 className="text-3xl md:text-4xl font-medium mt-2">Trending Now</h2>
            </div>
            <Link href="/shop" className="text-sm flex items-center gap-2 hover:gap-3 transition-all">Shop All <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {trending.map((product) => (
              <div key={product.id} className="group product-card">
                <div className="aspect-[3/4] relative overflow-hidden bg-muted mb-4">
                  <Link href="/shop">
                    <Image src={product.image} alt={product.name} fill className="object-cover product-image" />
                  </Link>
                  <div className="absolute top-3 right-3"><button className="p-2 bg-white/90 hover:bg-white transition-colors"><Heart className="h-4 w-4" /></button></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 quick-add">
                    <QuickAddButton product={product} />
                  </div>
                </div>
                <Link href="/shop" className="space-y-1 block">
                  <p className="text-[11px] text-muted-foreground tracking-wider uppercase">{product.category}</p>
                  <h3 className="text-sm font-medium">{product.name}</h3>
                  <p className="text-sm">${product.price}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 border-y">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { title: "Free Shipping", desc: "On orders over $200" },
              { title: "Easy Returns", desc: "30-day return policy" },
              { title: "Secure Payment", desc: "100% secure checkout" },
              { title: "24/7 Support", desc: "Dedicated support team" },
            ].map((feature, i) => (
              <div key={i}>
                <h4 className="font-medium mb-1">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
