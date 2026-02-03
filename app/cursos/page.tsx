import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Clock, Users, Award, CheckCircle, Play, BookOpen, CreditCard } from "lucide-react"
import { coursesData, upcomingCourses } from "@/lib/courses-data"

export default function CursosPage() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f75a1c]/20 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-[#fc8860]" />
              <span className="text-[#fc8860] text-sm font-medium">Formacion Empresarial</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              Ponemos en tus manos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f75a1c] to-[#fc8860]">
                nuestros cursos
              </span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl mt-6 max-w-2xl">
              Cursos diseñados para que los negocios adquieran conocimientos practicos y aplicables de inmediato. 100%
              online con acceso 24/7.
            </p>
            <div className="mt-8">
              <Link href="/suscribirse">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#f75a1c] to-[#982704] hover:from-[#fc8860] hover:to-[#f75a1c] text-white font-semibold px-8"
                >
                  Ver todos los cursos
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 md:py-24 bg-[#f4f4f4]">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {coursesData.map((course, index) => (
              <div
                key={course.id}
                className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all ${
                  course.featured ? "ring-2 ring-[#f75a1c]" : ""
                }`}
              >
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Image */}
                  <div className="lg:col-span-2 relative">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    {course.featured && (
                      <div className="absolute top-4 left-4 bg-[#f75a1c] text-white text-xs font-bold px-3 py-1 rounded-full">
                        MAS POPULAR
                      </div>
                    )}
                    <button
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                      aria-label="Ver preview"
                    >
                      <Play className="w-8 h-8 text-[#f75a1c] ml-1" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-3 p-6 lg:p-8">
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="bg-[#f75a1c] text-white text-sm font-bold px-4 py-1 rounded-full">
                        {course.price}
                      </span>
                      {course.personalizado && (
                        <span className="bg-[#2a2c44] text-white text-sm px-4 py-1 rounded-full">
                          Personalizado: {course.personalizado}
                        </span>
                      )}
                    </div>

                    <h2 className="text-2xl font-bold text-[#2a2c44] mb-3">{course.title}</h2>
                    <p className="text-[#777777] mb-6">{course.description}</p>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 mb-6 text-sm">
                      <div className="flex items-center gap-2 text-[#2a2c44]">
                        <Clock className="w-4 h-4 text-[#f75a1c]" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-2 text-[#2a2c44]">
                        <Users className="w-4 h-4 text-[#f75a1c]" />
                        {course.level}
                      </div>
                      <div className="flex items-center gap-2 text-[#2a2c44]">
                        <Award className="w-4 h-4 text-[#f75a1c]" />
                        {course.modules} modulos
                      </div>
                    </div>

                    {/* Topics */}
                    <div className="grid sm:grid-cols-2 gap-2 mb-6">
                      {course.topics.map((topic, tIndex) => (
                        <div key={tIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-[#f75a1c] flex-shrink-0" />
                          <span className="text-[#2a2c44]">{topic}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <Link href={course.paymentLink || "/#contacto"}>
                        <Button className="bg-gradient-to-r from-[#f75a1c] to-[#982704] hover:from-[#fc8860] hover:to-[#f75a1c] text-white font-semibold">
                          <CreditCard className="mr-2 w-4 h-4" />
                          {course.isFree ? "Acceder gratis" : `Pagar ${course.price}`}
                        </Button>
                      </Link>
                      {course.personalizado && (
                        <Link href={course.personalizadoPaymentLink || "/#contacto"}>
                          <Button
                            variant="outline"
                            className="border-2 border-[#2a2c44] text-[#2a2c44] hover:bg-[#2a2c44] hover:text-white font-semibold bg-transparent"
                          >
                            <CreditCard className="mr-2 w-4 h-4" />
                            Pagar Personalizado {course.personalizado}
                          </Button>
                        </Link>
                      )}
                      <Link href="/#contacto">
                        <Button
                          variant="ghost"
                          className="text-[#f75a1c] hover:bg-[#f75a1c]/10 font-semibold"
                        >
                          Solicitar Informacion
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#f75a1c] font-semibold text-sm uppercase tracking-wider">- Proximamente</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#2a2c44] mt-4">Cursos en desarrollo</h2>
            <p className="text-[#777777] text-lg mt-4 max-w-2xl mx-auto">
              Nuestro catalogo esta en constante crecimiento para cubrir todas las areas que una empresa necesita
              dominar.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {upcomingCourses.map((course, index) => (
              <span
                key={index}
                className="bg-[#f4f4f4] text-[#2a2c44] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#f75a1c]/10 transition-colors"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#f75a1c] to-[#982704]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white">No encuentras lo que buscas?</h2>
          <p className="text-white/80 text-lg mt-4 max-w-2xl mx-auto">
            Contactanos y cuentanos que habilidades necesita tu equipo. Podemos crear formacion a medida para tu
            empresa.
          </p>
          <Link href="/#contacto" className="inline-block mt-8">
            <Button size="lg" className="bg-white text-[#f75a1c] hover:bg-[#f4f4f4] font-semibold px-8">
              Solicitar curso personalizado
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
