import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Target, Lightbulb, TrendingUp, CheckCircle, Rocket } from "lucide-react"

const beliefs = [
  {
    number: "01",
    title: "Experiencia que cuenta",
    description: "Años de trabajo con emprendedores y PYMES nos dan un conocimiento profundo del mercado.",
  },
  {
    number: "02",
    title: "Soluciones integrales",
    description: "Contamos con un equipo multidisciplinario de alta preparación y adaptabilidad.",
  },
  {
    number: "03",
    title: "Estrategias a tu medida",
    description: "Ponemos todos nuestros saberes y herramientas para diseñar soluciones personalizadas.",
  },
  {
    number: "04",
    title: "Crecemos junto a ti",
    description: "Nos adaptamos constantemente a un entorno cambiante y superamos cada desafío.",
  },
  {
    number: "05",
    title: "Innovación constante",
    description: "Nos motivan el cambio y la transformación digital de los negocios mexicanos.",
  },
  {
    number: "06",
    title: "Construimos alianzas",
    description: "Porque sabemos que el éxito solo se alcanza trabajando en equipo.",
  },
]

const timeline = [
  {
    year: "Inicio",
    title: "Nace TRAS",
    description:
      "Con la visión de ser el aliado estratégico de emprendedores y PYMES en su camino hacia el éxito digital.",
  },
  {
    year: "Crecimiento",
    title: "Expansión de servicios",
    description: "Incorporamos marketing digital, desarrollo web y formación empresarial a nuestra oferta.",
  },
  {
    year: "Consolidación",
    title: "Aceleradora integral",
    description:
      "Nos posicionamos como una aceleradora de negocios completa con programas de aceleración estructurados.",
  },
  {
    year: "Hoy",
    title: "Tu socio estratégico",
    description: "Seguimos creciendo y ayudando a más negocios a alcanzar su máximo potencial.",
  },
]

export default function QueNosMuevePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-[#2a2c44] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#f75a1c] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#982704] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              Nos mueve{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f75a1c] to-[#fc8860]">
                ser TRAS
              </span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl mt-6 max-w-2xl">
              Somos el aliado que acompaña a las marcas en su transformación, convirtiendo ideas, emprendimientos y
              negocios tradicionales en empresas escalables, rentables y competitivas.
            </p>
          </div>
        </div>
      </section>

      {/* Ser */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#f75a1c] font-semibold text-sm uppercase tracking-wider">— Ser</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#2a2c44] mt-4">
                Tu motor de crecimiento empresarial
              </h2>
              <p className="text-[#777777] text-lg mt-6 leading-relaxed">
                TRAS es una Aceleradora de Negocios creada para ayudar a emprendedores, microempresarios y pequeñas y
                medianas empresas a tomar el control de su negocio, crecer de forma estratégica y conquistar el mercado
                digital.
              </p>
              <p className="text-[#777777] text-lg mt-4 leading-relaxed">
                En un entorno donde el mundo digital, la tecnología y las redes sociales evolucionan a una velocidad
                imparable, TRAS nace como el aliado que acompaña a las marcas en su transformación.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Capacidad de entender las necesidades reales de los negocios",
                  "Experiencia trabajando con diversos sectores empresariales",
                  "Compromiso con resultados medibles y crecimiento sostenible",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#f75a1c] flex-shrink-0 mt-0.5" />
                    <span className="text-[#2a2c44]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#f75a1c]/10 to-[#982704]/10 rounded-2xl overflow-hidden">
                <img src="/business-team-collaboration-modern-office-orange-a.jpg" alt="Equipo TRAS" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#2a2c44] text-white p-6 rounded-xl">
                <span className="text-4xl font-black text-[#f75a1c]">100+</span>
                <p className="text-sm mt-1">Negocios acelerados</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="py-16 md:py-24 bg-[#f4f4f4]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#f75a1c] font-semibold text-sm uppercase tracking-wider">— Hacer</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#2a2c44] mt-4">Nuestros 3 pilares de aceleración</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Estrategia",
                description:
                  "Escalamos tu negocio mediante la capacitación para atraer clientes de alto valor, mejorar la propuesta comercial y aumentar las ventas.",
              },
              {
                icon: Lightbulb,
                title: "Valor Agregado",
                description:
                  "Trabajamos para diferenciar tus productos y servicios frente a la competencia, fortaleciendo la identidad de marca y su posicionamiento.",
              },
              {
                icon: TrendingUp,
                title: "Automatización",
                description:
                  "Implementamos procesos digitales que permiten crecer sin límites, optimizar tiempos y reducir la dependencia del esfuerzo manual.",
              },
            ].map((pillar, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#f75a1c] to-[#982704] rounded-xl flex items-center justify-center mx-auto mb-6">
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2a2c44] mb-4">{pillar.title}</h3>
                <p className="text-[#777777] leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creencias */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#f75a1c] font-semibold text-sm uppercase tracking-wider">— Nuestras creencias</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#2a2c44] mt-4">Lo que nos define</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beliefs.map((belief, index) => (
              <div
                key={index}
                className="p-6 border border-[#e5e5e5] rounded-xl hover:border-[#f75a1c] transition-colors group"
              >
                <span className="text-4xl font-black text-[#f75a1c]/20 group-hover:text-[#f75a1c]/40 transition-colors">
                  {belief.number}
                </span>
                <h3 className="text-lg font-bold text-[#2a2c44] mt-2 mb-2">{belief.title}</h3>
                <p className="text-[#777777] text-sm">{belief.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-16 md:py-24 bg-[#2a2c44]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#fc8860] font-semibold text-sm uppercase tracking-wider">— Nuestra historia</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-4">El camino que hemos recorrido</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#f75a1c] to-[#982704] rounded-full flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    {index !== timeline.length - 1 && <div className="w-0.5 h-full bg-[#5a6396]/30 mt-4"></div>}
                  </div>
                  <div className="pb-8">
                    <span className="text-[#f75a1c] font-semibold text-sm">{item.year}</span>
                    <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
                    <p className="text-white/70 mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inspiración */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[#f75a1c] font-semibold text-sm uppercase tracking-wider">— Qué nos inspira</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#2a2c44] mt-4">
              Creemos en el poder de la transformación
            </h2>
            <p className="text-[#777777] text-lg mt-6 leading-relaxed">
              En TRAS, creemos firmemente en el poder de la transformación y el cambio. Nuestra cultura está
              profundamente ligada a la misión de contribuir de manera activa a la transformación digital de los
              negocios mexicanos.
            </p>
            <p className="text-[#777777] text-lg mt-4 leading-relaxed">
              Somos actores de cambio y trabajamos incansablemente para ayudar a construir empresas más modernas, más
              competitivas y más eficientes.
            </p>

            <Link href="/#contacto" className="inline-block mt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#f75a1c] to-[#982704] hover:from-[#fc8860] hover:to-[#f75a1c] text-white font-semibold px-8"
              >
                Comienza tu transformación
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
