import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Linkedin, Mail, Quote } from "lucide-react"

const management = [
  {
    name: "Arivey Martínez",
    role: "Estratega Comercial",
    bio: "",
    image: "/Arivey.png",
  },
]

const team = [
  {
    name: "María Karla del Valle",
    role: "Estratega Digital",
    image: "/mariakarla.jpg",
  },
  {
    name: "Karla Hernández",
    role: "Diseñadora Gráfica",
    image: "/karlahdez.jpeg",
  },
  {
    name: "Desarrollador Web",
    role: "Full Stack Developer",
    image: "/professional-developer-programmer-man-portrait.jpg",
  },
  {
    name: "Diseñadora Gráfica",
    role: "Brand Designer",
    image: "/professional-graphic-designer-woman-creative-portr.jpg",
  },
]

export default function EquipoPage() {
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
              Lo importante es el trabajo{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f75a1c] to-[#fc8860]">
                en colectivo
              </span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl mt-6 max-w-2xl">
              Conozca quién hace qué en TRAS. Un equipo multidisciplinario comprometido con tu crecimiento.
            </p>
            <Link href="/unete" className="inline-block mt-8">
              <Button className="bg-gradient-to-r from-[#f75a1c] to-[#982704] hover:from-[#fc8860] hover:to-[#f75a1c] text-white font-semibold">
                Únete al equipo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Management */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#f75a1c] font-semibold text-sm uppercase tracking-wider">— Nuestro</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#2a2c44] mt-2">Management</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {management.map((person, index) => (
              <div key={index} className="bg-[#f4f4f4] rounded-2xl overflow-hidden group">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={person.image || "/placeholder.svg"}
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2a2c44]">{person.name}</h3>
                  <p className="text-[#f75a1c] font-medium">{person.role}</p>
                  <p className="text-[#777777] text-sm mt-3">{person.bio}</p>
                  <div className="flex gap-3 mt-4">
                    <a
                      href="#"
                      className="w-10 h-10 bg-[#2a2c44] rounded-full flex items-center justify-center text-white hover:bg-[#f75a1c] transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-[#2a2c44] rounded-full flex items-center justify-center text-white hover:bg-[#f75a1c] transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-[#f4f4f4]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#f75a1c] font-semibold text-sm uppercase tracking-wider">— Nuestro</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#2a2c44] mt-2">Team</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((person, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={person.image || "/placeholder.svg"}
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-[#2a2c44]">{person.name}</h3>
                  <p className="text-[#777777] text-sm">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 md:py-24 bg-[#2a2c44]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="w-16 h-16 text-[#f75a1c]/30 mx-auto mb-6" />
            <p className="text-white text-xl md:text-2xl leading-relaxed italic">
              "En TRAS creatividad y estrategia van de la mano, combinamos diferentes formas de pensar y actuar, y
              construimos soluciones a la medida para nuestros clientes."
            </p>
            <div className="mt-8">
              <p className="text-[#f75a1c] font-bold">Equipo TRAS</p>
              <p className="text-white/60 text-sm">Aceleradora de Negocios</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
