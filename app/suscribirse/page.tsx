"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import {
  ArrowRight,
  Clock,
  Users,
  Award,
  CheckCircle,
  CreditCard,
  Search,
  Filter,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Star,
} from "lucide-react"
import { coursesData, upcomingCourses, courseCategories, filterCourses, type Course } from "@/lib/courses-data"

function CourseListItem({ course, isExpanded, onToggle }: { course: Course; isExpanded: boolean; onToggle: () => void }) {
  return (
    <div
      className={`bg-white rounded-xl border-2 transition-all duration-300 overflow-hidden ${
        isExpanded ? "border-[#f75a1c] shadow-lg" : "border-transparent shadow-sm hover:shadow-md hover:border-[#f75a1c]/30"
      } ${course.featured ? "ring-2 ring-[#f75a1c]/50" : ""}`}
    >
      {/* Main Row - Always visible */}
      <div
        className="p-4 md:p-6 cursor-pointer"
        onClick={onToggle}
        onKeyDown={(e) => e.key === "Enter" && onToggle()}
        tabIndex={0}
        role="button"
        aria-expanded={isExpanded}
      >
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          {/* Image */}
          <div className="relative w-full md:w-24 h-32 md:h-24 rounded-lg overflow-hidden flex-shrink-0">
            <img
              src={course.image || "/placeholder.svg"}
              alt={course.title}
              className="w-full h-full object-cover"
            />
            {course.featured && (
              <div className="absolute top-1 left-1 bg-[#f75a1c] p-1 rounded">
                <Star className="w-3 h-3 text-white fill-white" />
              </div>
            )}
          </div>

          {/* Title and basic info */}
          <div className="flex-grow min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="bg-[#f75a1c]/10 text-[#f75a1c] text-xs font-semibold px-2 py-1 rounded">
                {course.category}
              </span>
              <span className="text-[#777777] text-xs">{course.modules} modulos</span>
            </div>
            <h3 className="text-lg font-bold text-[#2a2c44] truncate">{course.title}</h3>
            <p className="text-[#777777] text-sm mt-1 line-clamp-1 md:line-clamp-none">
              {course.shortDescription || course.description.slice(0, 80) + "..."}
            </p>
          </div>

          {/* Price and action */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="text-right">
              <div className={`font-bold text-lg ${course.isFree ? "text-green-600" : "text-[#f75a1c]"}`}>
                {course.price}
              </div>
              {course.personalizado && (
                <div className="text-xs text-[#777777]">
                  Personal: {course.personalizado}
                </div>
              )}
            </div>
            <div className="flex items-center gap-2">
              <Link href={course.paymentLink || "/#contacto"} onClick={(e) => e.stopPropagation()}>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-[#f75a1c] to-[#982704] hover:from-[#fc8860] hover:to-[#f75a1c] text-white font-semibold"
                >
                  <CreditCard className="w-4 h-4 mr-1" />
                  <span className="hidden sm:inline">{course.isFree ? "Acceder" : "Pagar"}</span>
                </Button>
              </Link>
              <div className="w-8 h-8 rounded-full bg-[#f4f4f4] flex items-center justify-center">
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4 text-[#2a2c44]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#2a2c44]" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isExpanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 md:px-6 pb-6 border-t border-[#f4f4f4]">
          <div className="pt-6 grid md:grid-cols-2 gap-6">
            {/* Left column - Description and topics */}
            <div>
              <h4 className="font-bold text-[#2a2c44] mb-3">Descripcion del curso</h4>
              <p className="text-[#777777] text-sm mb-6">{course.description}</p>

              <h4 className="font-bold text-[#2a2c44] mb-3">Que aprenderas</h4>
              <div className="grid gap-2">
                {course.topics.map((topic, index) => (
                  <div key={index} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#f75a1c] flex-shrink-0 mt-0.5" />
                    <span className="text-[#2a2c44]">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column - Details and actions */}
            <div className="bg-[#f4f4f4] rounded-xl p-5">
              <h4 className="font-bold text-[#2a2c44] mb-4">Detalles del curso</h4>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="w-4 h-4 text-[#f75a1c]" />
                  <span className="text-[#777777]">Duracion:</span>
                  <span className="text-[#2a2c44] font-medium">{course.duration}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Users className="w-4 h-4 text-[#f75a1c]" />
                  <span className="text-[#777777]">Nivel:</span>
                  <span className="text-[#2a2c44] font-medium">{course.level}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Award className="w-4 h-4 text-[#f75a1c]" />
                  <span className="text-[#777777]">Modulos:</span>
                  <span className="text-[#2a2c44] font-medium">{course.modules} modulos</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <BookOpen className="w-4 h-4 text-[#f75a1c]" />
                  <span className="text-[#777777]">Acceso:</span>
                  <span className="text-[#2a2c44] font-medium">{course.access}</span>
                </div>
              </div>

              {/* Pricing */}
              <div className="border-t border-[#e5e5e5] pt-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[#777777]">Precio curso:</span>
                  <span className={`font-bold text-xl ${course.isFree ? "text-green-600" : "text-[#f75a1c]"}`}>
                    {course.price}
                  </span>
                </div>
                {course.personalizado && (
                  <div className="flex justify-between items-center">
                    <span className="text-[#777777]">Precio personalizado:</span>
                    <span className="font-bold text-lg text-[#2a2c44]">{course.personalizado}</span>
                  </div>
                )}
              </div>

              {/* Action buttons */}
              <div className="space-y-3">
                <Link href={course.paymentLink || "/#contacto"} className="block">
                  <Button className="w-full bg-gradient-to-r from-[#f75a1c] to-[#982704] hover:from-[#fc8860] hover:to-[#f75a1c] text-white font-semibold">
                    <CreditCard className="w-4 h-4 mr-2" />
                    {course.isFree ? "Acceder Gratis" : `Pagar ${course.price}`}
                  </Button>
                </Link>
                {course.personalizado && (
                  <Link href={course.personalizadoPaymentLink || "/#contacto"} className="block">
                    <Button variant="outline" className="w-full border-2 border-[#2a2c44] text-[#2a2c44] hover:bg-[#2a2c44] hover:text-white font-semibold bg-transparent">
                      <CreditCard className="w-4 h-4 mr-2" />
                      Pagar Personalizado {course.personalizado}
                    </Button>
                  </Link>
                )}
                <Link href="/#contacto" className="block">
                  <Button variant="ghost" className="w-full text-[#f75a1c] hover:bg-[#f75a1c]/10 font-semibold">
                    Solicitar Informacion
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SuscribirsePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null)

  const filteredCourses = filterCourses(selectedCategory, "Todos", searchTerm)

  const handleToggleCourse = (courseId: string) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId)
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-[#2a2c44] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#f75a1c] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#982704] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f75a1c]/20 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-[#fc8860]" />
              <span className="text-[#fc8860] text-sm font-medium">Catalogo de Cursos</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Suscribete a nuestros{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f75a1c] to-[#fc8860]">
                cursos
              </span>
            </h1>
            <p className="text-white/70 text-lg mt-6 max-w-2xl mx-auto">
              Explora nuestro catalogo completo de cursos. Filtra por categoria, busca por nombre y accede a formacion de calidad para tu negocio.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-white border-b border-[#e5e5e5] sticky top-16 md:top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#777777]" />
              <Input
                type="text"
                placeholder="Buscar cursos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-[#e5e5e5] focus:border-[#f75a1c] focus:ring-[#f75a1c]"
              />
            </div>

            {/* Category filters */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              <Filter className="w-4 h-4 text-[#777777] flex-shrink-0" />
              {courseCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? "bg-[#f75a1c] text-white"
                      : "bg-[#f4f4f4] text-[#2a2c44] hover:bg-[#f75a1c]/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course List */}
      <section className="py-12 md:py-16 bg-[#f4f4f4]">
        <div className="container mx-auto px-4">
          {/* Results count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-[#777777]">
              Mostrando <span className="text-[#2a2c44] font-semibold">{filteredCourses.length}</span> cursos
              {selectedCategory !== "Todos" && (
                <span> en <span className="text-[#f75a1c] font-semibold">{selectedCategory}</span></span>
              )}
            </p>
            <p className="text-sm text-[#777777]">Haz clic en un curso para ver mas detalles</p>
          </div>

          {/* Course list */}
          {filteredCourses.length > 0 ? (
            <div className="space-y-4">
              {filteredCourses.map((course) => (
                <CourseListItem
                  key={course.id}
                  course={course}
                  isExpanded={expandedCourse === course.id}
                  onToggle={() => handleToggleCourse(course.id)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl">
              <BookOpen className="w-16 h-16 text-[#e5e5e5] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#2a2c44] mb-2">No se encontraron cursos</h3>
              <p className="text-[#777777] mb-6">Intenta con otros filtros o terminos de busqueda</p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("Todos")
                }}
                variant="outline"
                className="border-[#f75a1c] text-[#f75a1c] hover:bg-[#f75a1c] hover:text-white bg-transparent"
              >
                Limpiar filtros
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Courses */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-[#f75a1c] font-semibold text-sm uppercase tracking-wider">- Proximamente</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#2a2c44] mt-4">Cursos en desarrollo</h2>
            <p className="text-[#777777] text-lg mt-4 max-w-2xl mx-auto">
              Suscribete a nuestra lista para ser el primero en enterarte cuando estos cursos esten disponibles.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {upcomingCourses.map((course, index) => (
              <span
                key={index}
                className="bg-[#f4f4f4] text-[#2a2c44] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#f75a1c]/10 transition-colors cursor-default"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#f75a1c] to-[#982704]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white">Necesitas formacion a medida?</h2>
          <p className="text-white/80 text-lg mt-4 max-w-2xl mx-auto">
            Creamos cursos personalizados para empresas. Cuentanos que necesita tu equipo y disenaremos la formacion perfecta.
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
