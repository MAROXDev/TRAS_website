"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"

const heroSlides = [
  {
    title: ["Impulsamos tu", "negocio hacia el", "éxito"],
    highlight: "éxito",
  },
  {
    title: ["Estrategia,", "marketing y", "tecnología"],
    highlight: "tecnología",
  },
  {
    title: ["Acelera tu", "crecimiento", "empresarial"],
    highlight: "crecimiento",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#2a2c44]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f75a1c] rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#982704] rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Animated Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          null
        ))}
      </div>

      <style jsx>{`
        @keyframes slideRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(50%); }
        }
      `}</style>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Subtitle */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#f75a1c]/20 rounded-full mb-4 sm:mb-[-100px]">
            <span className="w-2 h-2 bg-[#f75a1c] rounded-full animate-pulse"></span>
            <span className="text-[#fc8860] text-xs sm:text-sm font-medium">Aceleradora de Negocios</span>
          </div>

          {/* Main Title */}
          <div className="relative h-36 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 flex items-center justify-center ${
                  index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight">
                  {slide.title.map((line, lineIndex) => (
                    <span key={lineIndex} className="block">
                      {line.split(" ").map((word, wordIndex) => (
                        <span
                          key={wordIndex}
                          className={
                            word.toLowerCase() === slide.highlight.toLowerCase()
                              ? "text-transparent bg-clip-text bg-gradient-to-r from-[#f75a1c] to-[#fc8860]"
                              : ""
                          }
                        >
                          {word}{" "}
                        </span>
                      ))}
                    </span>
                  ))}
                </h1>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-white/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 px-2">
            Somos tu aliado estrategico para transformar tu emprendimiento en una empresa escalable, rentable y
            competitiva.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
            <Link href="/#contacto" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-[#f75a1c] to-[#982704] hover:from-[#fc8860] hover:to-[#f75a1c] text-white font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg group"
              >
                Comienza tu transformacion
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/lo-que-hacemos" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-[#f75a1c] font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg"
              >
                Conoce nuestros servicios
              </Button>
            </Link>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-8 sm:mt-10">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? "w-6 sm:w-8 bg-[#f75a1c]" : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/50" />
      </div>

      {/* Marquee at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#982704] to-[#f75a1c] py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="mx-6 text-white/90 font-semibold text-sm md:text-base">
              acelera • crece • triunfa • trasciende •
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
