"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

const brandingItems = [
  {
    title: "Tazas Personalizadas",
    description: "Tu logo en cada café de la mañana",
    query: "professional white ceramic mug with minimalist orange logo mockup on desk",
  },
  {
    title: "Playeras Corporativas",
    description: "Uniformes que representan tu marca",
    query: "professional polo shirt mockup with embroidered company logo clean background",
  },
  {
    title: "Artículos de Oficina",
    description: "Papelería y accesorios con tu identidad",
    query: "corporate stationery set mockup notebook pen business card orange branding",
  },
  {
    title: "Merchandising",
    description: "Productos promocionales únicos",
    query: "promotional products mockup tote bag water bottle orange brand elements",
  },
]

export function BrandingSection() {
  return (
    <section className="py-16 md:py-24 bg-[#2a2c44] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f75a1c]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#982704]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f75a1c]/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#fc8860]" />
            <span className="text-[#fc8860] text-sm font-medium">Branding Corporativo</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
            Tu empresa también puede{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f75a1c] to-[#fc8860]">brillar</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mt-4">
            Diseñamos y producimos material promocional y merchandising que proyecta la imagen profesional que tu marca
            merece.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brandingItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-[#5a6396]/20 rounded-2xl overflow-hidden hover:bg-[#5a6396]/30 transition-all duration-300"
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={`/.jpg?height=400&width=400&query=${encodeURIComponent(item.query)}`}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a2c44] via-transparent to-transparent"></div>
              </div>
              <div className="p-5">
                <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-white/80 text-lg mb-6">¿Listo para llevar tu imagen al siguiente nivel?</p>
          <Link href="/#contacto">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#f75a1c] to-[#982704] hover:from-[#fc8860] hover:to-[#f75a1c] text-white font-semibold px-8"
            >
              Solicita tu cotización
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
