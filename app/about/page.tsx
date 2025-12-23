import Image from "next/image"
import Link from "next/link"
import { Heart, Award, Users, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function AboutPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">About Us</h1>
        <div className="flex items-center text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <span>About</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-4">Founded in 2018, awesomeproducts-world was born from a passion for fashion and a commitment to quality. We believe everyone deserves clothing that is both stylish and comfortable.</p>
          <p className="text-muted-foreground mb-4">From a small studio to serving hundreds of thousands of customers nationwide, we have always adhered to our philosophy of "Quality First, Fashion Forward." Our design team stays on top of international trends while incorporating timeless elegance.</p>
          <p className="text-muted-foreground">We partner with premium fabric suppliers and maintain strict quality control at every stage of production. awesomeproducts-world is not just a clothing brand—it's an expression of lifestyle.</p>
        </div>
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop" alt="awesomeproducts-world Studio" fill className="object-cover" />
        </div>
      </div>

      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-muted-foreground mb-4">At awesomeproducts-world, our core values guide every decision we make, from product design to customer service.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-card rounded-lg border p-6 text-center">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4"><Heart className="h-6 w-6" /></div>
            <h3 className="font-semibold text-lg mb-2">Thoughtful Design</h3>
            <p className="text-muted-foreground">Every piece reflects our designers' dedication to detail and perfection.</p>
          </div>
          <div className="bg-card rounded-lg border p-6 text-center">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4"><Award className="h-6 w-6" /></div>
            <h3 className="font-semibold text-lg mb-2">Quality Assurance</h3>
            <p className="text-muted-foreground">Premium fabrics and rigorous quality control ensure excellence in every item.</p>
          </div>
          <div className="bg-card rounded-lg border p-6 text-center">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4"><Users className="h-6 w-6" /></div>
            <h3 className="font-semibold text-lg mb-2">Customer First</h3>
            <p className="text-muted-foreground">We listen to our customers and build lasting relationships based on trust.</p>
          </div>
          <div className="bg-card rounded-lg border p-6 text-center">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4"><Truck className="h-6 w-6" /></div>
            <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
            <p className="text-muted-foreground">Partnering with top logistics to ensure quick and safe delivery.</p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">A passionate team of professionals dedicated to bringing you the best shopping experience.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Sarah Johnson", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop" },
            { name: "Michael Chen", role: "Design Director", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop" },
            { name: "Emily Davis", role: "Marketing Director", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" },
            { name: "David Kim", role: "Operations Director", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" },
          ].map((member, index) => (
            <div key={index} className="bg-card rounded-lg border overflow-hidden">
              <div className="relative h-64 w-full"><Image src={member.image} alt={member.name} fill className="object-cover" /></div>
              <div className="p-4 text-center"><h3 className="font-semibold text-lg">{member.name}</h3><p className="text-muted-foreground">{member.role}</p></div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16" id="faq">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Here are answers to some common questions from our customers.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I choose the right size?</AccordionTrigger>
              <AccordionContent>Each product page includes a detailed size chart with measurements for bust, waist, and hips. We recommend measuring yourself and comparing with our size guide. If you're between sizes, we suggest choosing the larger size. Contact our customer service for personalized advice.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How long does shipping take?</AccordionTrigger>
              <AccordionContent>We typically ship orders within 24 hours of confirmation (excluding holidays). Delivery times vary by location: major cities usually receive orders in 2-3 business days, while other areas may take 5-7 business days. You can track your order in your account.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What is your return policy?</AccordionTrigger>
              <AccordionContent>We offer a 30-day return policy. Items must be in original condition with tags attached. You can initiate a return from "My Orders" or contact customer service. Refunds are processed within 3-5 business days after we receive the returned item.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
              <AccordionContent>We accept multiple payment methods including credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay. All payments are processed through secure encrypted channels.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>How can I contact customer service?</AccordionTrigger>
              <AccordionContent>You can reach us through: Live chat (Mon-Fri 9am-6pm), Phone: (555) 123-4567, Email: support@awesomeproducts-world.com. We respond to all inquiries within 24 hours.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Start Your Fashion Journey</h2>
        <p className="max-w-2xl mx-auto mb-6">Explore awesomeproducts-world's curated collection and find your unique style.</p>
        <Button size="lg" variant="secondary" asChild><Link href="/shop">Shop Now</Link></Button>
      </div>
    </div>
  )
}
