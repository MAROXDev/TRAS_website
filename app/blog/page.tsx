import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, User, Clock } from "lucide-react"

const featuredPost = {
  title: "Cómo acelerar el crecimiento de tu PYME en el mercado digital",
  excerpt:
    "Descubre las estrategias clave que están transformando pequeños negocios en empresas competitivas. Una guía práctica para emprendedores que buscan escalar.",
  author: "Equipo TRAS",
  date: "Enero 2026",
  readTime: "8 min",
  image: "/placeholder.svg?height=500&width=800",
  category: "Estrategia",
}

const posts = [
  {
    title: "WhatsApp Business: La herramienta que tu negocio necesita",
    excerpt: "Aprende a convertir WhatsApp en tu canal de ventas más efectivo con estas técnicas probadas.",
    author: "Equipo TRAS",
    date: "Enero 2026",
    readTime: "5 min",
    image: "/placeholder.svg?height=300&width=400",
    category: "Marketing Digital",
  },
  {
    title: "Inteligencia Artificial para empresarios: Por dónde empezar",
    excerpt: "Una introducción práctica a la IA para quienes quieren implementarla en su negocio sin ser expertos.",
    author: "Equipo TRAS",
    date: "Diciembre 2025",
    readTime: "6 min",
    image: "/placeholder.svg?height=300&width=400",
    category: "Tecnología",
  },
  {
    title: "Los errores más comunes al crear una tienda online",
    excerpt: "Evita los tropiezos que frenan a la mayoría de emprendedores digitales con esta guía práctica.",
    author: "Equipo TRAS",
    date: "Diciembre 2025",
    readTime: "7 min",
    image: "/placeholder.svg?height=300&width=400",
    category: "E-commerce",
  },
  {
    title: "Branding para PYMES: Construye una marca memorable",
    excerpt: "Por qué la identidad visual es clave para diferenciarte y cómo desarrollarla paso a paso.",
    author: "Equipo TRAS",
    date: "Noviembre 2025",
    readTime: "6 min",
    image: "/placeholder.svg?height=300&width=400",
    category: "Branding",
  },
  {
    title: "Redes sociales en 2026: Tendencias y predicciones",
    excerpt: "Lo que viene para Instagram, TikTok y Facebook y cómo preparar tu estrategia de contenido.",
    author: "Equipo TRAS",
    date: "Noviembre 2025",
    readTime: "5 min",
    image: "/placeholder.svg?height=300&width=400",
    category: "Marketing Digital",
  },
  {
    title: "Contabilidad básica: Lo que todo emprendedor debe saber",
    excerpt: "Fundamentos financieros que te ayudarán a tomar mejores decisiones para tu negocio.",
    author: "Equipo TRAS",
    date: "Octubre 2025",
    readTime: "8 min",
    image: "/placeholder.svg?height=300&width=400",
    category: "Finanzas",
  },
]

const categories = ["Todos", "Estrategia", "Marketing Digital", "Tecnología", "E-commerce", "Branding", "Finanzas"]

export default function BlogPage() {
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
            <span className="text-[#fc8860] font-semibold text-sm uppercase tracking-wider">— Te damos</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mt-4">
              Las{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f75a1c] to-[#fc8860]">mieles</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl mt-6 max-w-2xl">
              Compartimos nuestra opinión, consejos y estrategias sobre los temas que importan para hacer crecer tu
              negocio.
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

      {/* Featured Post */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center bg-[#f4f4f4] rounded-2xl overflow-hidden">
            <div className="aspect-video lg:aspect-auto lg:h-full">
              <img
                src={featuredPost.image || "/placeholder.svg"}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 lg:p-10">
              <span className="bg-[#f75a1c] text-white text-xs font-bold px-3 py-1 rounded-full">DESTACADO</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2a2c44] mt-4">{featuredPost.title}</h2>
              <p className="text-[#777777] mt-4">{featuredPost.excerpt}</p>
              <div className="flex flex-wrap gap-4 mt-6 text-sm text-[#777777]">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-[#f75a1c]" />
                  {featuredPost.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#f75a1c]" />
                  {featuredPost.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#f75a1c]" />
                  {featuredPost.readTime}
                </div>
              </div>
              <Button className="mt-6 bg-gradient-to-r from-[#f75a1c] to-[#982704] hover:from-[#fc8860] hover:to-[#f75a1c] text-white font-semibold">
                Leer artículo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12 md:py-16 bg-[#f4f4f4]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[#f75a1c] text-xs font-semibold uppercase tracking-wider">{post.category}</span>
                  <h3 className="text-lg font-bold text-[#2a2c44] mt-2 group-hover:text-[#f75a1c] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#777777] text-sm mt-2 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-4 mt-4 text-xs text-[#777777]">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-[#2a2c44] text-[#2a2c44] hover:bg-[#2a2c44] hover:text-white font-semibold bg-transparent"
            >
              Cargar más artículos
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#f75a1c] to-[#982704]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white">Suscríbete a nuestro newsletter</h2>
          <p className="text-white/80 text-lg mt-4 max-w-2xl mx-auto">
            Recibe tips, estrategias y recursos para hacer crecer tu negocio directamente en tu correo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 max-w-md mx-auto">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-4 py-3 rounded-lg text-[#2a2c44] focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-[#f75a1c] hover:bg-[#f4f4f4] font-semibold px-6">Suscribirse</Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
