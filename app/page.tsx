"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ShoppingBag, ChevronRight, Star, ArrowRight, Sparkles, Leaf, Gem, Award, Instagram, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function HomePage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [quickViewProduct, setQuickViewProduct] = useState<number | null>(null)
  const [cartNotification, setCartNotification] = useState(false)

  const products = [
    {
      id: 1,
      name: "The Obsidian Serum",
      price: "$320",
      description: "A midnight black elixir infused with activated charcoal and 24k gold particles. Deeply purifies while delivering luminous radiance.",
      image: "/images/product-1.png",
      details: ["30ml", "Activated Charcoal", "24k Gold Particles", "Hyaluronic Acid"]
    },
    {
      id: 2,
      name: "Noir Elixir",
      price: "$180",
      description: "Concentrated nighttime renewal treatment. Black pearl extract meets Japanese camellia for transformative overnight repair.",
      image: "/images/product-2.png",
      details: ["25ml", "Black Pearl Extract", "Japanese Camellia", "Retinol Complex"]
    },
    {
      id: 3,
      name: "Gold Mask",
      price: "$240",
      description: "Pure indulgence in a jar. 24k gold leaf treatment mask that firms, lifts, and imparts an otherworldly glow.",
      image: "/images/product-3.png",
      details: ["50ml", "24k Gold Leaf", "Collagen Peptides", "Vitamin C"]
    }
  ]

  const handleAddToCart = () => {
    setQuickViewProduct(null)
    setCartNotification(true)
    setTimeout(() => setCartNotification(false), 3000)
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#0A0A0A" }}>
      {/* Cart Notification */}
      <div 
        className={`fixed top-24 right-4 z-50 px-6 py-4 transition-all duration-500 ${
          cartNotification ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
        }`}
        style={{ backgroundColor: "#1A1A1A", borderLeft: "2px solid #C9A962" }}
      >
        <p style={{ color: "#FAFAFA" }} className="text-sm font-light">Added to bag</p>
      </div>

      {/* Quick View Modal */}
      {quickViewProduct !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setQuickViewProduct(null)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div 
            className="relative max-w-2xl w-full p-8 md:p-12"
            style={{ backgroundColor: "#1A1A1A" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 transition-colors duration-300"
              style={{ color: "#6B6B6B" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#C9A962"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#6B6B6B"}
            >
              <X size={24} />
            </button>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative aspect-square" style={{ backgroundColor: "#0A0A0A" }}>
                <Image
                  src={products[quickViewProduct].image}
                  alt={products[quickViewProduct].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 
                  className="text-2xl mb-2"
                  style={{ color: "#FAFAFA", fontFamily: "Cormorant Garamond, serif" }}
                >
                  {products[quickViewProduct].name}
                </h3>
                <p 
                  className="text-xl mb-4"
                  style={{ color: "#C9A962", fontFamily: "Cormorant Garamond, serif" }}
                >
                  {products[quickViewProduct].price}
                </p>
                <p 
                  className="text-sm mb-6 leading-relaxed"
                  style={{ color: "#6B6B6B", fontFamily: "Inter, sans-serif" }}
                >
                  {products[quickViewProduct].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {products[quickViewProduct].details.map((detail, i) => (
                    <span 
                      key={i}
                      className="text-xs px-3 py-1"
                      style={{ 
                        color: "#C9A962", 
                        border: "1px solid #C9A962",
                        fontFamily: "Inter, sans-serif"
                      }}
                    >
                      {detail}
                    </span>
                  ))}
                </div>
                <button
                  onClick={handleAddToCart}
                  className="w-full py-4 text-sm tracking-widest uppercase transition-all duration-300"
                  style={{ 
                    backgroundColor: "#C9A962", 
                    color: "#0A0A0A",
                    fontFamily: "Inter, sans-serif"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#FAFAFA"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#C9A962"
                  }}
                >
                  Add to Bag
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sticky Navigation */}
      <nav 
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
        style={{ backgroundColor: "rgba(10, 10, 10, 0.95)", backdropFilter: "blur(10px)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="relative z-50">
            <h1 
              className="text-2xl tracking-wider"
              style={{ color: "#FAFAFA", fontFamily: "Cormorant Garamond, serif" }}
            >
              LUXE<span style={{ color: "#C9A962" }}>NOIR</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {["Collection", "Philosophy", "Ritual", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs tracking-widest uppercase transition-colors duration-300"
                style={{ color: "#6B6B6B", fontFamily: "Inter, sans-serif" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#C9A962"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#6B6B6B"}
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <button 
              className="relative transition-colors duration-300"
              style={{ color: "#FAFAFA" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#C9A962"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#FAFAFA"}
            >
              <ShoppingBag size={20} />
            </button>
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="md:hidden relative z-50 transition-colors duration-300"
              style={{ color: "#FAFAFA" }}
            >
              {mobileNavOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden fixed inset-0 transition-all duration-500 ${
            mobileNavOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          style={{ backgroundColor: "#0A0A0A" }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {["Collection", "Philosophy", "Ritual", "Contact"].map((item, i) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileNavOpen(false)}
                className={`text-2xl tracking-wider transition-all duration-500 ${
                  mobileNavOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ 
                  color: "#FAFAFA", 
                  fontFamily: "Cormorant Garamond, serif",
                  transitionDelay: `${i * 100}ms`
                }}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: "radial-gradient(ellipse at center, #C9A962 0%, transparent 70%)"
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
          <p 
            className="text-xs tracking-[0.3em] uppercase mb-8"
            style={{ color: "#C9A962", fontFamily: "Inter, sans-serif" }}
          >
            The Art of Midnight Beauty
          </p>
          
          <h2 
            className="text-5xl md:text-7xl lg:text-8xl mb-8 leading-none"
            style={{ color: "#FAFAFA", fontFamily: "Cormorant Garamond, serif" }}
          >
            Where Darkness
            <br />
            <span style={{ color: "#C9A962" }}>Meets Luminescence</span>
          </h2>
          
          <p 
            className="max-w-xl mx-auto mb-12 text-sm leading-relaxed"
            style={{ color: "#6B6B6B", fontFamily: "Inter, sans-serif" }}
          >
            Ultra premium skincare formulated in the void. Each elixir harnesses the power of obsidian minerals and 24k gold to reveal your most radiant self.
          </p>

          <div className="relative w-full max-w-3xl mx-auto aspect-[16/10] mb-12">
            <Image
              src="/images/hero.png"
              alt="Luxe Noir Hero Collection"
              fill
              className="object-contain"
              priority
            />
          </div>

          <Link
            href="#collection"
            className="inline-flex items-center gap-3 text-xs tracking-widest uppercase transition-all duration-300 group"
            style={{ color: "#FAFAFA", fontFamily: "Inter, sans-serif" }}
          >
            Discover the Collection
            <ChevronRight 
              size={16} 
              className="transition-transform duration-300 group-hover:translate-x-2"
              style={{ color: "#C9A962" }}
            />
          </Link>
        </div>

        <div 
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ backgroundColor: "#1A1A1A" }}
        />
      </section>

      {/* Featured Products */}
      <section id="collection" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p 
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: "#C9A962", fontFamily: "Inter, sans-serif" }}
            >
              The Collection
            </p>
            <h3 
              className="text-4xl md:text-5xl"
              style={{ color: "#FAFAFA", fontFamily: "Cormorant Garamond, serif" }}
            >
              Three Pillars of Radiance
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-1">
            {products.map((product, index) => (
              <div 
                key={product.id}
                className="group relative cursor-pointer"
                onClick={() => setQuickViewProduct(index)}
              >
                <div 
                  className="relative aspect-[3/4] overflow-hidden transition-all duration-700"
                  style={{ backgroundColor: "#1A1A1A" }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Hover Overlay */}
                  <div 
                    className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "linear-gradient(to top, rgba(10,10,10,0.95) 0%, transparent 100%)" }}
                  >
                    <p 
                      className="text-sm mb-4 leading-relaxed"
                      style={{ color: "#FAFAFA", fontFamily: "Inter, sans-serif" }}
                    >
                      {product.description}
                    </p>
                    <span 
                      className="text-xs tracking-widest uppercase flex items-center gap-2"
                      style={{ color: "#C9A962", fontFamily: "Inter, sans-serif" }}
                    >
                      Quick View <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
                
                <div className="py-6 text-center">
                  <h4 
                    className="text-xl mb-2"
                    style={{ color: "#FAFAFA", fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {product.name}
                  </h4>
                  <p 
                    className="text-sm"
                    style={{ color: "#C9A962", fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Split Section */}
      <section id="philosophy" className="py-32" style={{ backgroundColor: "#1A1A1A" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square">
              <Image
                src="/images/feature.png"
                alt="Ingredient Philosophy"
                fill
                className="object-cover"
              />
              <div 
                className="absolute inset-0"
                style={{ 
                  background: "linear-gradient(135deg, transparent 50%, rgba(10,10,10,0.8) 100%)" 
                }}
              />
            </div>
            
            <div className="lg:pl-12">
              <p 
                className="text-xs tracking-[0.3em] uppercase mb-6"
                style={{ color: "#C9A962", fontFamily: "Inter, sans-serif" }}
              >
                Our Philosophy
              </p>
              <h3 
                className="text-4xl md:text-5xl mb-8 leading-tight"
                style={{ color: "#FAFAFA", fontFamily: "Cormorant Garamond, serif" }}
              >
                Born from the Earth,
                <br />
                Refined by Science
              </h3>
              <div className="space-y-6">
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: "#6B6B6B", fontFamily: "Inter, sans-serif" }}
                >
                  We source the rarest minerals from volcanic depths and precious metals refined to pharmaceutical purity. Each ingredient is selected not for trend, but for transformative efficacy.
                </p>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: "#6B6B6B", fontFamily: "Inter, sans-serif" }}
                >
                  Our obsidian extraction process captures activated carbon in its most potent form, while 24k gold particles are suspended at the molecular level for maximum absorption and luminosity.
                </p>
              </div>
              
              <div 
                className="h-px my-10"
                style={{ backgroundColor: "#C9A962", width: "60px" }}
              />
              
              <Link
                href="#ritual"
                className="text-xs tracking-widest uppercase flex items-center gap-3 transition-colors duration-300"
                style={{ color: "#FAFAFA", fontFamily: "Inter, sans-serif" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#C9A962"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#FAFAFA"}
              >
                Discover Our Ritual <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section 
        className="py-20"
        style={{ 
          backgroundColor: "#0A0A0A",
          borderTop: "1px solid #1A1A1A",
          borderBottom: "1px solid #1A1A1A"
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {[
              { value: "99.7%", label: "Pure Ingredients" },
              { value: "24K", label: "Gold Standard" },
              { value: "3X", label: "More Radiance" },
              { value: "12+", label: "Awards Won" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p 
                  className="text-4xl md:text-5xl mb-2"
                  style={{ color: "#C9A962", fontFamily: "Cormorant Garamond, serif" }}
                >
                  {stat.value}
                </p>
                <p 
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "#6B6B6B", fontFamily: "Inter, sans-serif" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section id="ritual" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p 
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: "#C9A962", fontFamily: "Inter, sans-serif" }}
            >
              The Experience
            </p>
            <h3 
              className="text-4xl md:text-5xl"
              style={{ color: "#FAFAFA", fontFamily: "Cormorant Garamond, serif" }}
            >
              Crafted for the Discerning
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Sparkles, title: "Luminous Formulas", desc: "24k gold particles suspended at the molecular level for unprecedented radiance" },
              { icon: Leaf, title: "Pure Origins", desc: "Ethically sourced volcanic minerals and botanical extracts from pristine environments" },
              { icon: Gem, title: "Precious Ingredients", desc: "Black pearl, obsidian, and rare earth elements in pharmaceutical grade purity" },
              { icon: Award, title: "Proven Results", desc: "Clinically tested formulations with visible results within fourteen days" }
            ].map((feature, i) => (
              <div 
                key={i}
                className="group p-8 transition-all duration-500"
                style={{ backgroundColor: "#1A1A1A" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#0A0A0A"
                  e.currentTarget.style.borderColor = "#C9A962"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#1A1A1A"
                  e.currentTarget.style.borderColor = "transparent"
                }}
              >
                <feature.icon 
                  size={28} 
                  className="mb-6 transition-colors duration-300 group-hover:text-[#C9A962]"
                  style={{ color: "#6B6B6B" }}
                />
                <h4 
                  className="text-lg mb-4"
                  style={{ color: "#FAFAFA", fontFamily: "Cormorant Garamond, serif" }}
                >
                  {feature.title}
                </h4>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: "#6B6B6B", fontFamily: "Inter, sans-serif" }}
                >
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-32" style={{ backgroundColor: "#1A1A1A" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p 
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: "#C9A962", fontFamily: "Inter, sans-serif" }}
            >
              Luxury Packaging
            </p>
            <h3 
              className="text-4xl md:text-5xl"
              style={{ color: "#FAFAFA", fontFamily: "Cormorant Garamond, serif" }}
            >
              Unwrap the Extraordinary
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <div className="col-span-2 row-span-2 relative aspect-square">
              <Image
                src="/images/product-1.png"
                alt="The Obsidian Serum packaging"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square">
              <Image
                src="/images/product-2.png"
                alt="Noir Elixir packaging"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square">
              <Image
                src="/images/product-3.png"
                alt="Gold Mask packaging"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square">
              <Image
                src="/images/feature.png"
                alt="Luxe Noir collection"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square">
              <Image
                src="/images/hero.png"
                alt="Luxe Noir hero"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p 
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "#C9A962", fontFamily: "Inter, sans-serif" }}
          >
            What They Say
          </p>
          <h3 
            className="text-4xl md:text-5xl mb-16"
            style={{ color: "#FAFAFA", fontFamily: "Cormorant Garamond, serif" }}
          >
            Voices of Radiance
          </h3>

          <div className="space-y-16">
            {[
              {
                quote: "The Obsidian Serum transformed my nighttime ritual into something sacred. My skin has never looked more luminous.",
                author: "Beauty Editor",
                source: "Vogue Beauty"
              },
              {
                quote: "Finally, a luxury skincare brand that delivers on its promises. The Gold Mask is pure indulgence with visible results.",
                author: "Skincare Specialist",
                source: "Harper's Bazaar"
              }
            ].map((testimonial, i) => (
              <div key={i} className="space-y-6">
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} fill="#C9A962" style={{ color: "#C9A962" }} />
                  ))}
                </div>
                <blockquote 
                  className="text-xl md:text-2xl leading-relaxed italic"
                  style={{ color: "#FAFAFA", fontFamily: "Cormorant Garamond, serif" }}
                >
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p 
                    className="text-sm"
                    style={{ color: "#C9A962", fontFamily: "Inter, sans-serif" }}
                  >
                    {testimonial.author}
                  </p>
                  <p 
                    className="text-xs"
                    style={{ color: "#6B6B6B", fontFamily: "Inter, sans-serif" }}
                  >
                    {testimonial.source}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Strip */}
      <section 
        className="py-24"
        style={{ 
          backgroundColor: "#1A1A1A",
          borderTop: "1px solid #C9A962"
        }}
      >
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p 
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "#C9A962", fontFamily: "Inter, sans-serif" }}
          >
            Exclusive Access
          </p>
          <h3 
            className="text-3xl md:text-4xl mb-4"
            style={{ color: "#FAFAFA", fontFamily: "Cormorant Garamond, serif" }}
          >
            Enter the Inner Circle
          </h3>
          <p 
            className="text-sm mb-10"
            style={{ color: "#6B6B6B", fontFamily: "Inter, sans-serif" }}
          >
            First access to new releases, exclusive rituals, and members only events.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-1 border-0 rounded-none py-6"
              style={{ 
                backgroundColor: "#0A0A0A", 
                color: "#FAFAFA",
                fontFamily: "Inter, sans-serif"
              }}
            />
            <Button
              type="submit"
              className="rounded-none px-8 py-6 text-xs tracking-widest uppercase transition-all duration-300"
              style={{ 
                backgroundColor: "#C9A962", 
                color: "#0A0A0A",
                fontFamily: "Inter, sans-serif"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#FAFAFA"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#C9A962"
              }}
            >
              Join
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-20" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <h2 
                className="text-3xl tracking-wider mb-6"
                style={{ color: "#FAFAFA", fontFamily: "Cormorant Garamond, serif" }}
              >
                LUXE<span style={{ color: "#C9A962" }}>NOIR</span>
              </h2>
              <p 
                className="text-sm leading-relaxed max-w-sm"
                style={{ color: "#6B6B6B", fontFamily: "Inter, sans-serif" }}
              >
                Ultra premium skincare born from darkness, refined by science. Where obsidian meets gold, and beauty becomes ritual.
              </p>
            </div>
            
            <div>
              <h4 
                className="text-xs tracking-widest uppercase mb-6"
                style={{ color: "#C9A962", fontFamily: "Inter, sans-serif" }}
              >
                Navigate
              </h4>
              <div className="space-y-4">
                {["Collection", "Philosophy", "Ritual", "Contact"].map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-sm transition-colors duration-300"
                    style={{ color: "#6B6B6B", fontFamily: "Inter, sans-serif" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "#FAFAFA"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "#6B6B6B"}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            
            <div>
              <h4 
                className="text-xs tracking-widest uppercase mb-6"
                style={{ color: "#C9A962", fontFamily: "Inter, sans-serif" }}
              >
                Connect
              </h4>
              <div className="flex gap-4">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="transition-colors duration-300"
                    style={{ color: "#6B6B6B" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "#C9A962"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "#6B6B6B"}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href="mailto:contact@luxenoir.com"
                  className="text-sm transition-colors duration-300"
                  style={{ color: "#6B6B6B", fontFamily: "Inter, sans-serif" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#FAFAFA"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#6B6B6B"}
                >
                  contact@luxenoir.com
                </a>
              </div>
            </div>
          </div>
          
          <div 
            className="pt-10 flex flex-col md:flex-row justify-between items-center gap-4"
            style={{ borderTop: "1px solid #1A1A1A" }}
          >
            <p 
              className="text-xs"
              style={{ color: "#6B6B6B", fontFamily: "Inter, sans-serif" }}
            >
              © 2024 Luxe Noir. All rights reserved.
            </p>
            <div className="flex gap-8">
              {["Privacy", "Terms", "Shipping"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-xs transition-colors duration-300"
                  style={{ color: "#6B6B6B", fontFamily: "Inter, sans-serif" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#FAFAFA"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#6B6B6B"}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}