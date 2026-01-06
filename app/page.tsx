"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function HomePage() {
  const categories = [
    {
      name: "Living Room",
      slug: "living",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2832&auto=format&fit=crop",
      description: "Sofas, chairs & more"
    },
    {
      name: "Bedroom",
      slug: "bedroom", 
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2880&auto=format&fit=crop",
      description: "Rest & relaxation"
    },
    {
      name: "Kitchen",
      slug: "kitchen",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2940&auto=format&fit=crop",
      description: "Cook in style"
    },
    {
      name: "Decor",
      slug: "decor",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2958&auto=format&fit=crop",
      description: "Finishing touches"
    },
  ]

  const featuredProducts = [
    {
      id: 1,
      name: "Linen Sofa",
      price: 1299,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop",
      category: "Living"
    },
    {
      id: 2,
      name: "Ceramic Vase Set",
      price: 89,
      image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&auto=format&fit=crop",
      category: "Decor"
    },
    {
      id: 3,
      name: "Oak Dining Table",
      price: 899,
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&auto=format&fit=crop",
      category: "Kitchen"
    },
    {
      id: 4,
      name: "Wool Throw Blanket",
      price: 149,
      image: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?w=800&auto=format&fit=crop",
      category: "Bedroom"
    },
    {
      id: 5,
      name: "Rattan Pendant Light",
      price: 199,
      image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=800&auto=format&fit=crop",
      category: "Decor"
    },
    {
      id: 6,
      name: "Marble Side Table",
      price: 349,
      image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=800&auto=format&fit=crop",
      category: "Living"
    },
  ]

  const instagramPosts = [
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2880&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2874&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=2940&auto=format&fit=crop",
  ]

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop"
          alt="Modern living room"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center">
          <div className="container px-4 md:px-6">
            <div className="max-w-xl text-white">
              <p className="text-sm tracking-[0.3em] uppercase mb-4 opacity-90">
                New Collection 2026
              </p>
              <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6">
                Curated Living
                <br />
                <span className="font-normal">For Modern Homes</span>
              </h1>
              <p className="text-lg opacity-90 mb-8 font-light">
                Discover timeless pieces that transform your space into a sanctuary of style and comfort.
              </p>
              <Button
                size="lg"
                className="bg-white text-foreground hover:bg-white/90 rounded-none px-8"
                asChild
              >
                <Link href="/shop">
                  Explore Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Browse by Room
            </p>
            <h2 className="text-3xl md:text-4xl font-light">Shop Categories</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="group relative aspect-[3/4] overflow-hidden"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 text-white">
                  <h3 className="text-lg md:text-xl font-light mb-1">{category.name}</h3>
                  <p className="text-sm opacity-80">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
                Handpicked for You
              </p>
              <h2 className="text-3xl md:text-4xl font-light">Featured Products</h2>
            </div>
            <Link
              href="/shop"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors mt-4 md:mt-0 flex items-center gap-2"
            >
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {featuredProducts.map((product) => (
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
                  <h3 className="font-light text-lg">{product.name}</h3>
                  <p className="text-muted-foreground">${product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2853&auto=format&fit=crop"
                alt="Our craftsmanship"
                fill
                className="object-cover"
              />
            </div>
            <div className="max-w-lg">
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
                Our Philosophy
              </p>
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Thoughtfully Designed,
                <br />
                Sustainably Made
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At STREETWEARZONE, we believe your home should be a reflection of your values. 
                Each piece in our collection is crafted with care, using sustainable 
                materials and ethical practices.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                From the artisans who shape our furniture to the designers who 
                envision each detail, quality and sustainability guide every decision we make.
              </p>
              <Button variant="outline" className="rounded-none px-8" asChild>
                <Link href="/about">
                  Learn Our Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Customer Love
            </p>
            <h2 className="text-3xl md:text-4xl font-light">What People Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Emma L.",
                text: "The quality exceeded my expectations. My living room has never looked better. The linen sofa is absolutely stunning.",
                rating: 5
              },
              {
                name: "James K.",
                text: "Finally found a brand that matches my aesthetic. Clean, minimal, and beautifully crafted. Will definitely be back.",
                rating: 5
              },
              {
                name: "Sofia M.",
                text: "Exceptional customer service and the products are even more beautiful in person. Love supporting sustainable brands.",
                rating: 5
              }
            ].map((testimonial, i) => (
              <div key={i} className="text-center">
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-foreground text-foreground" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="text-sm font-medium">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
              @streetwearzone
            </p>
            <h2 className="text-3xl md:text-4xl font-light">Follow Our Journey</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            {instagramPosts.map((post, i) => (
              <a
                key={i}
                href="#"
                className="relative aspect-square overflow-hidden group"
              >
                <Image
                  src={post}
                  alt={`Instagram post ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <svg
                    className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
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
