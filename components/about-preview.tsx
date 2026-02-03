import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Lightbulb, TrendingUp } from "lucide-react"

const stats = [
  { number: "100+", label: "Negocios acelerados" },
  { number: "3", label: "Pilares de aceleración" },
  { number: "24/7", label: "Plataforma de cursos" },
  { number: "6+", label: "Años de experiencia" },
]

const pillars = [
  {
    icon: Target,
    title: "Estrategia",
    description: "Escalamos tu negocio con capacitación para atraer clientes de alto valor y aumentar ventas.",
  },
  {
    icon: Lightbulb,
    title: "Valor Agregado",
    description: "Diferenciamos tus productos y servicios fortaleciendo tu identidad de marca.",
  },
  {
    icon: TrendingUp,
    title: "Automatización",
    description: "Implementamos procesos digitales para crecer sin límites y optimizar tiempos.",
  },
]

export function AboutPreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-[#f75a1c] font-semibold text-sm uppercase tracking-wider">— Qué nos mueve</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#2a2c44] mt-4 leading-tight">
              Tu aliado para{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f75a1c] to-[#982704]">
                conquistar
              </span>{" "}
              el mercado digital
            </h2>
            <p className="text-[#777777] text-lg mt-6 leading-relaxed">
              TRAS es una Aceleradora de Negocios creada para ayudar a emprendedores, microempresarios y PYMES a tomar
              el control de su negocio, crecer de forma estratégica y conquistar el mercado digital.
            </p>
            <p className="text-[#777777] text-lg mt-4 leading-relaxed">
              En TRAS no solo brindamos un servicio, impulsamos un proceso completo de aceleración. Somos el motor que
              transforma el potencial de tu marca en resultados reales.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <span className="text-3xl md:text-4xl font-black text-[#f75a1c]">{stat.number}</span>
                  <p className="text-[#777777] text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/que-nos-mueve">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#f75a1c] to-[#982704] hover:from-[#fc8860] hover:to-[#f75a1c] text-white font-semibold px-8"
                >
                  Conoce nuestra historia
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/#contacto">
                
              </Link>
            </div>
          </div>

          {/* Right Content - Pillars */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#2a2c44] mb-8">Nuestros 3 pilares de aceleración</h3>
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="flex gap-5 p-6 bg-[#f4f4f4] rounded-xl hover:shadow-lg transition-shadow group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#f75a1c] to-[#982704] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <pillar.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#2a2c44] mb-2">{pillar.title}</h4>
                  <p className="text-[#777777] text-sm leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
