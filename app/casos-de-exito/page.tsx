import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Quote } from "lucide-react"

const categories = ["Todos", "Marketing Digital", "Desarrollo Web", "Branding", "E-commerce", "Asesoría Estratégica"]

const cases = [
  {
    client: "MAROX",
    industry: "Branding",
    service: "Desarrollo de software",
    challenge:
      "La marca no tenía identidad visual definida. Poseía poca consistencia visual y no destacaba dentro de su campo.",
    solution:
      "Creamos una identidad visual completa desde cero: logotipo, paleta de colores, tipografía, manual de marca y plantillas de flyers para su uso en redes sociales.",
    results: ["Identidad reconocible.", "Marca más segura, confiable y profesional."],
    testimonial:
      "TRAS transformó nuestra presencia digital. Ahora tenemos una comunidad activa que compra y recomienda nuestros productos.",
    testimonialAuthor: "María González",
    testimonialRole: "Fundadora",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    client: "BCortes",
    industry: "Marketing digital",
    service: "Turismo",
    challenge:
      "Tenía poca presencia digital. No sabía cómo llegar a sus clientes. La difusión de su información no era lo suficientemente atractiva por lo que no se generaba engagement.",
    solution:
      "Implementamos una estrategia de contenido; creamos un calendario de contenido y plantillas de flyers de rápida edición y customización para su empleo y rápida divulgación en redes.",
    results: [
      "200% más consultas desde el sitio",
      "40% reducción en tasa de rebote",
      "Posicionamiento en primera página de Google",
    ],
    testimonial:
      "El nuevo sitio web nos posicionó como líderes en nuestro sector. Los clientes nos encuentran fácilmente y la primera impresión es profesional.",
    testimonialAuthor: "Carlos Ramírez",
    testimonialRole: "Director General",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    client: "Café Artesanal",
    industry: "Alimentos y Bebidas",
    service: "Branding",
    challenge:
      "La marca no tenía identidad visual definida. Usaban elementos gráficos inconsistentes y no se diferenciaban de la competencia.",
    solution:
      "Creamos una identidad visual completa desde cero: logotipo, paleta de colores, tipografía, manual de marca y aplicaciones en empaque, menú y redes sociales.",
    results: [
      "Identidad reconocible y memorable",
      "Incremento en precio promedio de venta",
      "Expansión a 3 nuevas sucursales",
    ],
    testimonial:
      "TRAS entendió la esencia de nuestra marca. Ahora tenemos una imagen que refleja la calidad y pasión que ponemos en cada taza.",
    testimonialAuthor: "Ana Martínez",
    testimonialRole: "Propietaria",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    client: "Fashion Store Online",
    industry: "E-commerce",
    service: "Tienda Online",
    challenge:
      "Vendían solo por WhatsApp y redes sociales. El proceso era manual, lento y perdían ventas por falta de inventario visible y opciones de pago.",
    solution:
      "Desarrollamos una tienda online completa con catálogo dinámico, pasarelas de pago, control de inventario, y marketing automatizado para recuperación de carritos.",
    results: [
      "400% aumento en ventas mensuales",
      "Automatización del 80% del proceso",
      "Expansión a ventas nacionales",
    ],
    testimonial:
      "Pasar de vender por WhatsApp a tener nuestra propia tienda fue un cambio total. Ahora vendemos las 24 horas sin esfuerzo manual.",
    testimonialAuthor: "Laura Sánchez",
    testimonialRole: "CEO",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function CasosDeExitoPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-[#2a2c44] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#f75a1c] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              Conozca cómo hemos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f75a1c] to-[#fc8860]">
                impactado
              </span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl mt-6 max-w-2xl">
              Aprende de los casos de éxito de quienes han confiado en TRAS para transformar sus negocios.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-[#e5e5e5] sticky top-16 md:top-20 z-30">
        <div className="container mx-auto px-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  index === 0 ? "bg-[#f75a1c] text-white" : "bg-[#f4f4f4] text-[#2a2c44] hover:bg-[#f75a1c]/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-16 md:py-24 bg-[#f4f4f4]">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {cases.map((caseStudy, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="grid lg:grid-cols-2">
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <img
                      src={caseStudy.image || "/placeholder.svg"}
                      alt={caseStudy.client}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className={`p-6 lg:p-10 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-[#f75a1c] text-white text-xs font-bold px-3 py-1 rounded-full">
                        {caseStudy.service}
                      </span>
                      <span className="bg-[#2a2c44] text-white text-xs px-3 py-1 rounded-full">
                        {caseStudy.industry}
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-[#2a2c44]">{caseStudy.client}</h2>

                    <div className="mt-6 space-y-4">
                      <div>
                        <h3 className="text-sm font-bold text-[#f75a1c] uppercase tracking-wider">El Reto</h3>
                        <p className="text-[#777777] mt-2">{caseStudy.challenge}</p>
                      </div>

                      <div>
                        <h3 className="text-sm font-bold text-[#f75a1c] uppercase tracking-wider">Nuestra Solución</h3>
                        <p className="text-[#777777] mt-2">{caseStudy.solution}</p>
                      </div>

                      <div>
                        <h3 className="text-sm font-bold text-[#f75a1c] uppercase tracking-wider">Resultados</h3>
                        <ul className="mt-2 space-y-1">
                          {caseStudy.results.map((result, rIndex) => (
                            <li key={rIndex} className="flex items-center gap-2 text-[#2a2c44]">
                              <span className="w-2 h-2 bg-[#f75a1c] rounded-full"></span>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="mt-6 p-4 bg-[#f4f4f4] rounded-xl">
                      <Quote className="w-8 h-8 text-[#f75a1c]/30 mb-2" />
                      <p className="text-[#2a2c44] italic">"{caseStudy.testimonial}"</p>
                      <div className="mt-3">
                        <p className="text-[#f75a1c] font-semibold text-sm">{caseStudy.testimonialAuthor}</p>
                        <p className="text-[#777777] text-xs">
                          {caseStudy.testimonialRole}, {caseStudy.client}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#f75a1c] to-[#982704]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white">Tu caso de éxito podría ser el siguiente</h2>
          <p className="text-white/80 text-lg mt-4 max-w-2xl mx-auto">
            Agenda una consulta y descubre cómo podemos transformar tu negocio.
          </p>
          <Link href="/#contacto" className="inline-block mt-8">
            <Button size="lg" className="bg-white text-[#f75a1c] hover:bg-[#f4f4f4] font-semibold px-8">
              Comienza tu transformación
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
