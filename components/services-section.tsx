"use client"

import { useState } from "react"
import Link from "next/link"
import {
  TrendingUp,
  Palette,
  Code,
  GraduationCap,
  Megaphone,
  BarChart3,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: TrendingUp,
    title: "Asesoría Estratégica",
    subtitle: "Tu guía hacia el crecimiento",
    description:
      "Acompañamiento integral que guía al empresario en cada etapa del crecimiento. Analizamos tu negocio, identificamos oportunidades y construimos un camino claro para escalar.",
    features: ["Diagnóstico empresarial", "Plan estratégico", "Acompañamiento continuo"],
    color: "from-[#f75a1c] to-[#982704]",
  },
  {
    icon: Megaphone,
    title: "Marketing Digital",
    subtitle: "Transforma tus redes en canales de venta",
    description:
      "Planes estratégicos personalizados para aumentar tu visibilidad digital, conectar con tu audiencia y fortalecer tu identidad de marca.",
    features: ["Gestión de redes sociales", "Campañas publicitarias", "Estrategia de contenido"],
    color: "from-[#fc8860] to-[#f75a1c]",
  },
  {
    icon: Code,
    title: "Desarrollo Web",
    subtitle: "Tu presencia digital profesional",
    description:
      "Sitios web personalizados diseñados para captar clientes. Diseño moderno, experiencia intuitiva, optimización SEO y adaptación total a todos los dispositivos.",
    features: ["Sitios web corporativos", "Tiendas online", "Landing pages"],
    color: "from-[#5a6396] to-[#2a2c44]",
  },
  {
    icon: GraduationCap,
    title: "Formación Empresarial",
    subtitle: "Conocimiento que transforma",
    description:
      "Cursos diseñados para que adquieras habilidades prácticas y aplicables de inmediato. WhatsApp Business, Contabilidad, Inteligencia Artificial y más.",
    features: ["Cursos 100% online", "Talleres personalizados", "Certificación incluida"],
    color: "from-[#982704] to-[#471202]",
  },
  {
    icon: Palette,
    title: "Branding e Identidad",
    subtitle: "Define lo que te hace único",
    description:
      "Diseñamos tu identidad visual corporativa para asegurar posicionamiento y expansión. Desde el logotipo hasta las aplicaciones promocionales.",
    features: ["Diseño de logotipo", "Manual de marca", "Material corporativo"],
    color: "from-[#f75a1c] to-[#fc8860]",
  },
  {
    icon: BarChart3,
    title: "E-commerce",
    subtitle: "Tu tienda lista para vender",
    description:
      "Tiendas online completas con catálogo dinámico, control de inventarios, múltiples métodos de pago, marketing automatizado y analítica integrada.",
    features: ["Gestión de productos", "Pasarelas de pago", "Analítica integrada"],
    color: "from-[#2a2c44] to-[#5a6396]",
  },
]

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length)
  }

  return (
    <section className="py-16 md:py-24 bg-[#f4f4f4]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#f75a1c] font-semibold text-sm uppercase tracking-wider">— Lo que hacemos</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#2a2c44] mt-4">
            Soluciones integrales para tu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f75a1c] to-[#982704]">
              crecimiento
            </span>
          </h2>
          <p className="text-[#777777] text-lg max-w-2xl mx-auto mt-4">
            Combinamos asesoría, marketing digital y tecnología para ofrecer soluciones completas que impulsan tu
            negocio.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={cn(
                  "w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br",
                  service.color,
                )}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2a2c44] mb-2">{service.title}</h3>
              <p className="text-[#f75a1c] text-sm font-medium mb-3">{service.subtitle}</p>
              <p className="text-[#777777] text-sm leading-relaxed mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-sm text-[#2a2c44]">
                    <span className="w-1.5 h-1.5 bg-[#f75a1c] rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/lo-que-hacemos"
                className="inline-flex items-center text-[#f75a1c] font-semibold text-sm group-hover:gap-3 gap-2 transition-all"
              >
                Ver más <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <div
                      className={cn(
                        "w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br",
                        service.color,
                      )}
                    >
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#2a2c44] mb-2">{service.title}</h3>
                    <p className="text-[#f75a1c] text-sm font-medium mb-3">{service.subtitle}</p>
                    <p className="text-[#777777] text-sm leading-relaxed mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2 text-sm text-[#2a2c44]">
                          <span className="w-1.5 h-1.5 bg-[#f75a1c] rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                onClick={prevSlide}
                className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center text-[#2a2c44] hover:bg-[#f75a1c] hover:text-white transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      index === activeIndex ? "w-6 bg-[#f75a1c]" : "bg-[#777777]/30",
                    )}
                    aria-label={`Ir a servicio ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center text-[#2a2c44] hover:bg-[#f75a1c] hover:text-white transition-colors"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Link href="/lo-que-hacemos">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#f75a1c] to-[#982704] hover:from-[#fc8860] hover:to-[#f75a1c] text-white font-semibold px-8"
            >
              Ver todos los servicios
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="/#contacto">
            
          </Link>
        </div>
      </div>
    </section>
  )
}
