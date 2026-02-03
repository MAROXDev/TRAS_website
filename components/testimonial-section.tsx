"use client"

import { useState } from "react"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote:
      "TRAS transformó completamente nuestra presencia digital. En solo 3 meses triplicamos nuestras ventas online gracias a su estrategia de marketing.",
    author: "María González",
    role: "CEO, Boutique Digital",
    image: "/images/woman-portrait.png",
  },
  {
    quote:
      "El curso de WhatsApp Business cambió la forma en que atendemos a nuestros clientes. Ahora cerramos más ventas y nuestros clientes están más satisfechos.",
    author: "Carlos Ramírez",
    role: "Director, Servicios Profesionales",
    image: "/professional-man-portrait-headshot-business.jpg",
  },
  {
    quote:
      "La asesoría estratégica nos ayudó a identificar oportunidades que no veíamos. Hoy somos líderes en nuestro nicho gracias al acompañamiento de TRAS.",
    author: "Ana Martínez",
    role: "Fundadora, Tech Startup",
    image: "/professional-woman-entrepreneur.png",
  },
]

export function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 md:py-24 bg-[#f4f4f4]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-[#f75a1c] font-semibold text-sm uppercase tracking-wider">— Testimonios</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#2a2c44] mt-4">Lo que dicen nuestros clientes</h2>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm text-center">
                      <Quote className="w-12 h-12 text-[#f75a1c]/20 mx-auto mb-6" />
                      <p className="text-[#2a2c44] text-lg md:text-xl leading-relaxed mb-8">"{testimonial.quote}"</p>
                      <div className="flex flex-col items-center">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.author}
                          className="w-16 h-16 rounded-full object-cover mb-4 border-4 border-[#f75a1c]/20"
                        />
                        <h4 className="text-[#2a2c44] font-bold">{testimonial.author}</h4>
                        <p className="text-[#777777] text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center text-[#2a2c44] hover:bg-[#f75a1c] hover:text-white transition-colors"
                aria-label="Anterior testimonio"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all",
                      index === activeIndex ? "bg-[#f75a1c]" : "bg-[#777777]/30",
                    )}
                    aria-label={`Ir a testimonio ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center text-[#2a2c44] hover:bg-[#f75a1c] hover:text-white transition-colors"
                aria-label="Siguiente testimonio"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
