import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Users, Award, Play, CreditCard } from "lucide-react"
import { coursesData } from "@/lib/courses-data"

// Only show first 3 courses in preview
const courses = coursesData.slice(0, 3)

export function CoursesPreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#f75a1c] font-semibold text-sm uppercase tracking-wider">— Formación empresarial</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#2a2c44] mt-4">
            Cursos que{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f75a1c] to-[#982704]">
              transforman
            </span>{" "}
            negocios
          </h2>
          <p className="text-[#777777] text-lg max-w-2xl mx-auto mt-4">
            Adquiere conocimientos prácticos y aplicables de inmediato. Cursos 100% online con acceso 24/7.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group bg-[#f4f4f4] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a2c44]/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="bg-[#f75a1c] text-white text-sm font-semibold px-3 py-1 rounded-full">
                    {course.price}
                  </span>
                  <button
                    className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    aria-label="Ver preview"
                  >
                    <Play className="w-5 h-5 text-[#f75a1c] ml-0.5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#2a2c44] mb-2 group-hover:text-[#f75a1c] transition-colors">
                  {course.shortTitle || course.title}
                </h3>
                <p className="text-[#777777] text-sm mb-4">{course.shortDescription || course.description}</p>

                {/* Meta */}
                <div className="flex flex-wrap gap-3 text-sm text-[#777777] mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-[#f75a1c]" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4 text-[#f75a1c]" />
                    {course.modules} modulos
                  </div>
                </div>

                {/* Pay Button */}
                <Link href={course.paymentLink || "/#contacto"}>
                  <Button className="w-full bg-gradient-to-r from-[#f75a1c] to-[#982704] hover:from-[#fc8860] hover:to-[#f75a1c] text-white font-semibold">
                    <CreditCard className="w-4 h-4 mr-2" />
                    {course.isFree ? "Acceder Gratis" : `Pagar ${course.price}`}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Link href="/suscribirse">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#f75a1c] to-[#982704] hover:from-[#fc8860] hover:to-[#f75a1c] text-white font-semibold px-8"
            >
              Ver todos los cursos
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
