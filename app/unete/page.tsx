import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Rocket, Users, Lightbulb, TrendingUp, Heart, Quote } from "lucide-react"

const benefits = [
  {
    icon: Rocket,
    title: "Experiencia acelerada",
    description:
      "Adquirirás rápidamente una experiencia profesional sólida que te hará destacar en el mercado laboral.",
  },
  {
    icon: Heart,
    title: "Impacto real",
    description:
      "Tu trabajo tendrá un significado, formarás parte de un equipo que impulsa el cambio en el sector empresarial.",
  },
  {
    icon: Users,
    title: "Flexibilidad y equilibrio",
    description:
      "Organiza tu tiempo como mejor se adapte a ti. Defendemos el equilibrio entre lo personal y lo profesional.",
  },
  {
    icon: Lightbulb,
    title: "Cultura de aprendizaje",
    description: "Cada día es una oportunidad para crecer. No creemos en la zona de confort, solo en la evolución.",
  },
  {
    icon: TrendingUp,
    title: "Proyectos desafiantes",
    description: "Trabajarás en proyectos innovadores que te retarán y te ayudarán a desarrollar todo tu potencial.",
  },
]

const testimonials = [
  {
    quote:
      "Siento que trabajo con un equipo que impacta en la vida de las personas. Negocios que empezaron desde cero ahora son empresas posicionadas en diferentes sectores.",
    author: "Miembro del equipo",
    role: "Comunicación y Social Media",
  },
  {
    quote:
      "Para mí TRAS es la posibilidad de tener que pensar, de sentarme a explicar lo que sé, e investigar lo que no. Vivir de lo que uno hace es importante, y si además te gusta, entonces bárbaro.",
    author: "Miembro del equipo",
    role: "Consultor Senior",
  },
  {
    quote:
      "En TRAS se vive un proceso creativo que no le teme al riesgo. Me ha dado la oportunidad de conocer emprendedores con historias y proyectos inspiradores.",
    author: "Miembro del equipo",
    role: "Diseñador",
  },
]

export default function UnetePage() {
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
              Con nosotros podrás{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f75a1c] to-[#fc8860]">crecer</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl mt-6 max-w-2xl">
              Acércate a nosotros y únete al equipo. Estamos en busca de talento que quiera hacer la diferencia.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#f75a1c] font-semibold text-sm uppercase tracking-wider">
                — Estamos en busca de
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-[#2a2c44] mt-4">Vida inteligente</h2>
              <p className="text-[#777777] text-lg mt-6 leading-relaxed">
                Nos encontramos en el centro de las transformaciones que están ocurriendo en la economía del país. Se
                está gestando un nuevo mundo y nosotros estamos en medio del cambio.
              </p>
              <p className="text-[#777777] text-lg mt-4 leading-relaxed">
                Con nosotros obtendrás una noción bastante amplia de cómo se mueven las leyes, la economía y los
                negocios, así como otros aspectos complejos y útiles para cualquier profesional.
              </p>
            </div>

            <div className="relative">
              <img src="/placeholder.svg?height=500&width=500" alt="Equipo TRAS" className="w-full rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-[#f4f4f4]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#f75a1c] font-semibold text-sm uppercase tracking-wider">— ¿Qué te</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#2a2c44] mt-2">Ofrecemos?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-[#f75a1c] to-[#982704] rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#2a2c44] mb-2">{benefit.title}</h3>
                <p className="text-[#777777] text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-[#2a2c44]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#fc8860] font-semibold text-sm uppercase tracking-wider">— ¿Qué se siente</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2">Trabajar en TRAS?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#5a6396]/20 p-6 rounded-xl">
                <Quote className="w-10 h-10 text-[#f75a1c]/30 mb-4" />
                <p className="text-white/80 text-sm leading-relaxed mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="text-[#f75a1c] font-semibold text-sm">{testimonial.author}</p>
                  <p className="text-white/60 text-xs">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <span className="text-[#f75a1c] font-semibold text-sm uppercase tracking-wider">
            — Envíanos tu currículum y súmate a
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#2a2c44] mt-4">Nuestra bolsa de empleo</h2>
          <p className="text-[#777777] text-lg mt-4 max-w-2xl mx-auto">
            Buscamos personas con ganas de aprender, investigar y mantenerse al tanto de las últimas herramientas y
            tendencias.
          </p>
          <Link href="/#contacto" className="inline-block mt-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#f75a1c] to-[#982704] hover:from-[#fc8860] hover:to-[#f75a1c] text-white font-semibold px-8"
            >
              Enviar mi CV
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
