"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image
          src="/ai-images/about-hero.jpg"
          alt="ccInfinity Studio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-2xl px-4">
            <span className="text-xs tracking-[0.3em] uppercase mb-4 block opacity-80">Our Story</span>
            <h1 className="text-4xl md:text-6xl font-medium mb-6">Fashion with Purpose</h1>
            <p className="text-lg opacity-80">Redefining contemporary style through thoughtful design and sustainable practices.</p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-medium mt-2 mb-6">Less but Better</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in 2020, ccInfinity was born from a simple belief: fashion should be intentional. 
                We create timeless pieces that transcend seasons, designed to be worn and loved for years.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every piece in our collection is crafted with care, using premium materials and ethical 
                manufacturing practices. We believe in quality over quantity, style over trends.
              </p>
              <Button variant="outline" className="rounded-none" asChild>
                <Link href="/shop">Explore Collection <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="relative aspect-[4/5]">
              <Image src="/ai-images/about-mission.jpg" alt="Our process" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-medium mt-2">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Sustainable Design", desc: "We prioritize eco-friendly materials and processes, minimizing our environmental footprint at every step." },
              { title: "Timeless Quality", desc: "Each piece is crafted to last, using premium fabrics and meticulous construction techniques." },
              { title: "Ethical Production", desc: "We partner with factories that share our commitment to fair wages and safe working conditions." },
            ].map((value, i) => (
              <div key={i} className="text-center p-8">
                <h3 className="text-xl font-medium mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Join the Movement</h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Be part of a community that values conscious fashion. Subscribe for exclusive access and updates.
          </p>
          <Button size="lg" className="rounded-none px-10" asChild>
            <Link href="/register">Create Account</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
