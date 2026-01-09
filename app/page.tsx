"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const categories = [
    {
      name: "Women",
      slug: "women",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop",
      count: "240+ styles"
    },
    {
      name: "Men",
      slug: "men", 
      image: "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=800&auto=format&fit=crop",
      count: "180+ styles"
    },
    {
      name: "Accessories",
      slug: "accessories",
      image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&auto=format&fit=crop",
      count: "120+ items"
    },
  ]

  const newArrivals = [
    {
      id: 1,
      name: "Oversized Wool Blazer",
      price: 289,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop",
      category: "Outerwear",
      isNew: true
    },
    {
      id: 2,
      name: "Silk Midi Dress",
      price: 195,
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop",
      category: "Dresses",
      isNew: true
    },
    {
      id: 3,
      name: "Cashmere Knit Sweater",
      price: 245,
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&auto=format&fit=crop",
      category: "Knitwear",
      isNew: true
    },
    {
      id: 4,
      name: "Wide Leg Trousers",
      price: 165,
      image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&auto=format&fit=crop",
      category: "Bottoms",
      isNew: true
    },
  ]

  const trending = [
    {
      id: 5,
      name: "Leather Crossbody Bag",
      price: 175,
      originalPrice: 220,
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop",
      category: "Bags"
    },
    {
      id: 6,
      name: "Minimal Gold Hoops",
      price: 85,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop",
      category: "Jewelry"
    },
    {
      id: 7,
      name: "Cotton Poplin Shirt",
      price: 125,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop",
      category: "Tops"
    },
    {
      id: 8,
      name: "Tailored Wool Coat",
      price: 395,
      image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&auto=format&fit=crop",
      category: "Outerwear"
    },
    {
      id: 9,
      name: "Ribbed Tank Top",
      price: 45,
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop",
      category: "Basics"
    },
    {
      id: 10,
      name: "Linen Blend Shorts",
      price: 95,
      image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&auto=format&fit=crop",
      category: "Bottoms"
    },
  ]

  const instagramFeed = [
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&auto=format&fit=crop",
  ]

  return (
    <main className="flex-1">
      {/* Hero Section - Split Design */}
      <section className="grid md:grid-cols-2 min-h-[90vh]">
        <div className="relative h-[50vh] md:h-auto">
          <Image
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&auto=format&fit=crop"
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
          <div className="grid md:grid-cols-3 gap-4">
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
              <Link key={product.id} href="/shop" className="group product-card">
                <div className="aspect-[3/4] relative overflow-hidden bg-muted mb-4">
                  <Image src={product.image} alt={product.name} fill className="object-cover product-image" />
                  {product.isNew && <span className="absolute top-3 left-3 text-[10px] tracking-wider uppercase bg-foreground text-background px-2 py-1">New</span>}
                  <div className="absolute top-3 right-3"><button className="p-2 bg-white/90 hover:bg-white transition-colors"><Heart className="h-4 w-4" /></button></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 quick-add">
                    <Button size="sm" className="w-full rounded-none text-xs"><ShoppingBag className="h-3 w-3 mr-2" />Quick Add</Button>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] text-muted-foreground tracking-wider uppercase">{product.category}</p>
                  <h3 className="text-sm font-medium">{product.name}</h3>
                  <p className="text-sm">${product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Banner */}
      <section className="relative h-[70vh] md:h-[80vh]">
        <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&auto=format&fit=crop" alt="Editorial" fill className="object-cover" />
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {trending.map((product) => (
              <Link key={product.id} href="/shop" className="group product-card">
                <div className="aspect-[3/4] relative overflow-hidden bg-muted mb-4">
                  <Image src={product.image} alt={product.name} fill className="object-cover product-image" />
                  {product.originalPrice && <span className="absolute top-3 left-3 text-[10px] tracking-wider uppercase bg-red-500 text-white px-2 py-1">Sale</span>}
                  <div className="absolute top-3 right-3"><button className="p-2 bg-white/90 hover:bg-white transition-colors"><Heart className="h-4 w-4" /></button></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 quick-add">
                    <Button size="sm" className="w-full rounded-none text-xs"><ShoppingBag className="h-3 w-3 mr-2" />Quick Add</Button>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] text-muted-foreground tracking-wider uppercase">{product.category}</p>
                  <h3 className="text-sm font-medium">{product.name}</h3>
                  <div className="flex items-center gap-2">
                    <p className="text-sm">${product.price}</p>
                    {product.originalPrice && <p className="text-sm text-muted-foreground line-through">${product.originalPrice}</p>}
                  </div>
                </div>
              </Link>
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

      {/* Instagram Feed */}
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Follow Us</span>
            <h2 className="text-3xl md:text-4xl font-medium mt-2">@mode.fashion</h2>
            <p className="text-muted-foreground mt-2">Share your style with #MODÉstyle</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {instagramFeed.map((post, i) => (
              <a key={i} href="#" className="relative aspect-square overflow-hidden group ins-grid-item">
                <Image src={post} alt={`Instagram post ${i + 1}`} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
