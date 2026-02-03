import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowRight,
  TrendingUp,
  Megaphone,
  Code,
  ShoppingCart,
  GraduationCap,
  Palette,
  CheckCircle,
} from "lucide-react"

const services = [
  {
    id: "asesoria",
    icon: TrendingUp,
    title: "Asesoría Estratégica",
    subtitle: "Tu guía hacia el crecimiento sostenible",
    description:
      "Acompañamiento integral que guía al empresario en cada etapa del crecimiento. Esta asesoría no es genérica ni teórica; se basa en analizar el estado real del negocio, identificar oportunidades de mejora y construir un camino claro para escalar.",
    features: [
      "Diagnóstico empresarial completo",
      "Plan estratégico personalizado",
      "Definición de objetivos claros",
      "Implementación de herramientas digitales",
      "Acompañamiento en toma de decisiones",
      "Seguimiento y ajustes continuos",
    ],
    color: "from-[#f75a1c] to-[#982704]",
  },
  {
    id: "marketing",
    icon: Megaphone,
    title: "Marketing Digital",
    subtitle: "Transforma tus redes en canales de venta",
    description:
      "Planes estratégicos personalizados para transformar las plataformas digitales en verdaderos canales de crecimiento. Aumentamos tu visibilidad digital, conectamos de forma auténtica con tu audiencia y fortalecemos tu identidad de marca.",
    features: [
      "Administración de Facebook e Instagram",
      "Gestión de TikTok (planes avanzados)",
      "Creación de contenido estratégico",
      "Copys y hashtags optimizados",
      "Campañas publicitarias Meta Ads",
      "Reportes de resultados mensuales",
    ],
    color: "from-[#fc8860] to-[#f75a1c]",
    price: "Desde $4,990 MXN",
  },
  {
    id: "web",
    icon: Code,
    title: "Desarrollo Web",
    subtitle: "Tu presencia digital profesional",
    description:
      "Sitios web personalizados diseñados para captar clientes y potenciar tu presencia digital. Diseños modernos, experiencia de usuario intuitiva, optimización SEO y adaptación total a todos los dispositivos.",
    features: [
      "Diseño moderno y atractivo",
      "100% responsivo (móvil, tablet, desktop)",
      "Optimización SEO incluida",
      "Navegación clara e intuitiva",
      "Cargas ultrarrápidas",
      "Integración con redes sociales",
    ],
    color: "from-[#5a6396] to-[#2a2c44]",
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "Tiendas Online",
    subtitle: "Tu tienda lista para vender",
    description:
      "Soluciones completas de e-commerce listas para vender. Catálogo dinámico, control de inventarios, múltiples métodos de pago, marketing automatizado y todo lo que necesitas para vender en línea.",
    features: [
      "Catálogo de productos dinámico",
      "Control de inventarios",
      "Múltiples métodos de pago",
      "Configuración de envíos",
      "Recuperación de carritos abandonados",
      "Analítica integrada con Google",
    ],
    color: "from-[#982704] to-[#471202]",
    price: "Desde $8,000 MXN",
  },
  {
    id: "cursos",
    icon: GraduationCap,
    title: "Formación Empresarial",
    subtitle: "Conocimiento que transforma",
    description:
      "Cursos diseñados para que los negocios adquieran habilidades prácticas y aplicables de inmediato. Formación que forma parte del proceso de aceleración, permitiendo profesionalizar la operación y optimizar procesos.",
    features: [
      "WhatsApp Business para PYMES",
      "Contabilidad desde CERO",
      "Inteligencia Artificial para empresas",
      "Cursos 100% online y grabados",
      "Acceso 24/7 a la plataforma",
      "Constancia de finalización",
    ],
    color: "from-[#f75a1c] to-[#fc8860]",
    price: "Desde $500 MXN",
  },
  {
    id: "branding",
    icon: Palette,
    title: "Branding e Identidad",
    subtitle: "Define lo que te hace único",
    description:
      "Diseñamos el conjunto de acciones relacionadas con el posicionamiento, el propósito y los valores de tu marca. Creamos identidad visual corporativa que asegura crecimiento, posicionamiento y expansión.",
    features: [
      "Diseño de logotipo",
      "Manual de identidad visual",
      "Aplicaciones corporativas",
      "Material promocional",
      "Diseño para redes sociales",
      "Papelería corporativa",
    ],
    color: "from-[#2a2c44] to-[#5a6396]",
  },
]

export default function LoQueHacemosPage() {
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
              Construir{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f75a1c] to-[#fc8860]">
                soluciones
              </span>{" "}
              para tu negocio es nuestro único servicio
            </h1>
            <p className="text-white/70 text-lg md:text-xl mt-6 max-w-2xl">
              Más que un simple servicio, diseñamos soluciones a la medida basados en nuestra experiencia trabajando con
              emprendedores y líderes de negocios.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${service.color}`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-[#f75a1c] font-semibold text-sm uppercase tracking-wider">
                    — {service.subtitle}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-black text-[#2a2c44] mt-2">{service.title}</h2>
                  <p className="text-[#777777] text-lg mt-4 leading-relaxed">{service.description}</p>

                  {service.price && <p className="text-[#f75a1c] font-bold text-xl mt-4">{service.price}</p>}

                  <Link href="/#contacto" className="inline-block mt-6">
                    <Button className="bg-gradient-to-r from-[#f75a1c] to-[#982704] hover:from-[#fc8860] hover:to-[#f75a1c] text-white font-semibold">
                      Solicitar Informacion
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>

                <div className={`bg-[#f4f4f4] p-8 rounded-2xl ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="text-lg font-bold text-[#2a2c44] mb-6">Incluye:</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#f75a1c] flex-shrink-0 mt-0.5" />
                        <span className="text-[#2a2c44] text-sm">{feature}</span>
                      </div>
                    ))}
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
          <h2 className="text-3xl md:text-4xl font-black text-white">Listo para acelerar tu negocio?</h2>
          <p className="text-white/80 text-lg mt-4 max-w-2xl mx-auto">
            Agenda una consulta gratuita y descubre como podemos ayudarte a alcanzar tus metas.
          </p>
          <Link href="/#contacto" className="inline-block mt-8">
            <Button size="lg" className="bg-white text-[#f75a1c] hover:bg-[#f4f4f4] font-semibold px-8">
              Comienza tu transformacion
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
