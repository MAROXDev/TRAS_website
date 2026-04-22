"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Medal,
  Target,
  TrendingUp,
  Eye,
  Filter,
  Brain,
  User,
  Calendar,
  MessageCircle,
  ChevronLeft,
  ChevronRight
} from "lucide-react"

// Fecha objetivo para el contador (hardcodeada)
const TARGET_DATE = new Date("2026-05-15T23:59:59")

function CountdownTimer({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = TARGET_DATE.getTime() - now.getTime()

      if (difference > 0) {
        const totalHours = Math.floor(difference / (1000 * 60 * 60))
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)

        setTimeLeft({
          hours: totalHours,
          minutes,
          seconds
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const isDark = variant === "dark"

  return (
    <div className="flex justify-center gap-4 md:gap-6">
      <div className="flex flex-col items-center">
        <div className={`${isDark ? "bg-white/10 border border-white/20" : "bg-[#2a2c44]"} text-white text-2xl md:text-4xl font-black px-3 md:px-5 py-2 md:py-3 rounded-lg min-w-[60px] md:min-w-[80px] text-center`}>
          {String(timeLeft.hours).padStart(2, "0")}
        </div>
        <span className={`${isDark ? "text-white/60" : "text-[#777777]"} text-xs md:text-sm mt-2`}>Horas</span>
      </div>
      <div className={`text-2xl md:text-4xl font-black ${isDark ? "text-white/60" : "text-[#2a2c44]"} flex items-start pt-2 md:pt-3`}>:</div>
      <div className="flex flex-col items-center">
        <div className={`${isDark ? "bg-white/10 border border-white/20" : "bg-[#2a2c44]"} text-white text-2xl md:text-4xl font-black px-3 md:px-5 py-2 md:py-3 rounded-lg min-w-[60px] md:min-w-[80px] text-center`}>
          {String(timeLeft.minutes).padStart(2, "0")}
        </div>
        <span className={`${isDark ? "text-white/60" : "text-[#777777]"} text-xs md:text-sm mt-2`}>Minutos</span>
      </div>
      <div className={`text-2xl md:text-4xl font-black ${isDark ? "text-white/60" : "text-[#2a2c44]"} flex items-start pt-2 md:pt-3`}>:</div>
      <div className="flex flex-col items-center">
        <div className={`${isDark ? "bg-white/10 border border-white/20" : "bg-[#2a2c44]"} text-white text-2xl md:text-4xl font-black px-3 md:px-5 py-2 md:py-3 rounded-lg min-w-[60px] md:min-w-[80px] text-center`}>
          {String(timeLeft.seconds).padStart(2, "0")}
        </div>
        <span className={`${isDark ? "text-white/60" : "text-[#777777]"} text-xs md:text-sm mt-2`}>Segundos</span>
      </div>
    </div>
  )
}

// Carousel images placeholders
const carouselImages = [
  { id: 1, alt: "Plataforma TRAS - Vista 1", src: "https://i.postimg.cc/3JmS4x9R/austin-distel-go-FBjl-Qi-ZFU-unsplash.jpg" },
  { id: 2, alt: "Plataforma TRAS - Vista 2", src: "https://i.postimg.cc/VLnGrk45/campaign-creators-g-Msn-Xq-ILjp4-unsplash.jpg" },
  { id: 3, alt: "Plataforma TRAS - Vista 3", src: "https://i.postimg.cc/jqG3S7H4/dlxmedia-hu-Gz4AEq4QN5g-unsplash.jpg" },
  { id: 4, alt: "Plataforma TRAS - Vista 4", src: "https://i.postimg.cc/RVKs6ZG5/getty-images-2a-YQVXuy-Kw-A-unsplash.jpg" },
]

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToNext = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length)
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating])

  const goToPrev = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating])

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(goToNext, 4000)
    return () => clearInterval(interval)
  }, [goToNext])

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselImages.map((image, index) => (
            <div
              key={image.id}
              className="w-full flex-shrink-0 aspect-video bg-gradient-to-br from-[#f4f4f4] to-white flex items-center justify-center"
            >
              {/* <div className="text-center p-8">
             </div>
              
              <div className="w-20 h-20 bg-gradient-to-br from-[#f75a1c]/20 to-[#982704]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[#f75a1c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-[#777777] font-medium">{image.alt}</p>
              <p className="text-[#999999] text-sm mt-1">Slide {index + 1} de {carouselImages.length}</p>
            </div>*/}
              <img
                src={image.src}
                key={`${"image - " + index}`}
                alt={image.alt}
                className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6 text-[#2a2c44]" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-6 h-6 text-[#2a2c44]" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true)
                setCurrentIndex(index)
                setTimeout(() => setIsAnimating(false), 500)
              }
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
              ? "bg-gradient-to-r from-[#f75a1c] to-[#982704] w-8"
              : "bg-[#d1d1d1] hover:bg-[#999999]"
              }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </div >
  )
}

export default function TallerEmbudosPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#2a2c44] pt-20 pb-16">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#f75a1c] rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#982704] rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Aprende a construir una máquina de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f75a1c] to-[#982704]">
                ventas digital
              </span>{" "}
              para tu negocio
            </h1>

            {/* Subtitle */}
            <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Accede gratis al Módulo 1 del taller práctico de creación de embudos y descubre cómo transformar desconocidos en clientes recurrentes
            </p>

            {/* CTA Button */}
            <Link href="#registro">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#f75a1c] to-[#982704] hover:from-[#fc8860] hover:to-[#f75a1c] text-white font-semibold px-8 py-6 text-lg"
              >
                Registrarme a la clase gratuita
              </Button>
            </Link>

            {/* Countdown Timer */}
            <div className="mt-8">
              <p className="text-white/60 text-sm mb-4">La oferta termina en:</p>
              <CountdownTimer variant="dark" />
            </div>
          </div>

          {/* Feature Cards */}
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-16 max-w-4xl mx-auto px-4">
            <div className="bg-[#2a2c44] border border-[#5a6396]/30 rounded-xl p-6 shadow-lg flex-1 max-w-sm">
              <Medal className="w-5 h-5 text-white mb-3" strokeWidth={1.5} />
              <p className="text-white text-sm text-left leading-relaxed">
                Domina los fundamentos del Funnel Publicitario.
              </p>
            </div>
            <div className="bg-[#2a2c44] border border-[#5a6396]/30 rounded-xl p-6 shadow-lg flex-1 max-w-sm">
              <Target className="w-5 h-5 text-white mb-3" strokeWidth={1.5} />
              <p className="text-white text-sm text-left leading-relaxed">
                Defina a su cliente ideal con precisión quirúrgica.
              </p>
            </div>
            <div className="bg-[#2a2c44] border border-[#5a6396]/30 rounded-xl p-6 shadow-lg flex-1 max-w-sm">
              <TrendingUp className="w-5 h-5 text-white mb-3" strokeWidth={1.5} />
              <p className="text-white text-sm text-left leading-relaxed">
                Aprende a estructurar tu oferta para que sea irresistible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Video Preview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#2a2c44] leading-tight">
                Tu{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f75a1c] to-[#982704]">
                  sistema de ventas
                </span>{" "}
                actual está roto (y aquí te enseñamos a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f75a1c] to-[#982704]">
                  repararlo
                </span>
                )
              </h2>
              <p className="text-[#777777] text-lg mt-6 leading-relaxed text-left">
                Aplicamos una metodología exacta que utilizamos para que las Pymes en México dejen de &quot;postear por postear&quot; y comiencen a generar prospectos calificados todos los días.
              </p>
              {/* CTA Button */}
              <div className="mt-8 flex justify-center lg:justify-start">
                <Link href="#registro">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#f75a1c] to-[#982704] hover:from-[#fc8860] hover:to-[#f75a1c] text-white font-semibold px-8 py-6 text-base"
                  >
                    Registrarme a la clase gratuita
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="aspect-video bg-[#f4f4f4] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://i.postimg.cc/Nj9ZshCb/getty-images-MVg6my-DAa4-unsplash.jpg"
                alt="Metodología TRAS para PyMEs"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Problem */}
      <section className="py-16 md:py-24 bg-[#f4f4f4]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#2a2c44] leading-tight">
              ¿Te pasa que inviertes en{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f75a1c] to-[#982704]">
                publicidad
              </span>{" "}
              pero los resultados no llegan?
            </h2>
            <p className="text-[#777777] text-lg mt-6 leading-relaxed max-w-3xl mx-auto">
              La mayoría de los negocios comete el error de intentar venderle a todo el mundo sin un sistema de filtrado. Esto provoca que tus prospectos se enfríen, tu costo por cliente suba y sientas que estás tirando el dinero a la basura. No necesitas más seguidores, necesitas un{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f75a1c] to-[#982704] font-bold">
                Embudo de Conversión
              </span>
              .
            </p>
            {/* CTA Button */}
            <div className="mt-8">
              <Link href="#registro">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#f75a1c] to-[#982704] hover:from-[#fc8860] hover:to-[#f75a1c] text-white font-semibold px-8 py-6 text-base"
                >
                  Registrarme a la clase gratuita
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Module Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Content */}
            <div>
              <span className="text-[#f75a1c] font-semibold text-sm uppercase tracking-wider">— Lo que aprenderás</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#2a2c44] mt-4 leading-tight">
                Módulo 1: Fundamentos y Estrategia de Conversión
              </h2>
              <p className="text-[#777777] text-lg mt-6 leading-relaxed">
                En esta clase de muestra gratuitamente vamos a profundizar en los pilares que sostienen un negocio digital rentable:
              </p>
              {/* CTA Button - Left aligned */}
              <div className="mt-8">
                <Link href="#registro">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#f75a1c] to-[#982704] hover:from-[#fc8860] hover:to-[#f75a1c] text-white font-semibold px-8 py-6 text-base"
                  >
                    Registrarme a la clase gratuita
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Content - Cards */}
            <div className="space-y-4">
              <div className="flex gap-5 p-6 bg-[#2a2c44] rounded-xl shadow-lg group">
                <div className="w-12 h-12 bg-gradient-to-br from-[#f75a1c] to-[#982704] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Arquitectura del Funnel</h4>
                  <p className="text-white/70 text-sm leading-relaxed">Diferencia entre atraer (TF), educar (MF) y convertir (BF).</p>
                </div>
              </div>

              <div className="flex gap-5 p-6 bg-[#2a2c44] rounded-xl shadow-lg group">
                <div className="w-12 h-12 bg-gradient-to-br from-[#f75a1c] to-[#982704] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Filter className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Tipos de Embudo</h4>
                  <p className="text-white/70 text-sm leading-relaxed">Cuándo usar una venta express y cuándo nutrir a tu audiencia.</p>
                </div>
              </div>

              <div className="flex gap-5 p-6 bg-[#2a2c44] rounded-xl shadow-lg group">
                <div className="w-12 h-12 bg-gradient-to-br from-[#f75a1c] to-[#982704] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Psicología del Comprador</h4>
                  <p className="text-white/70 text-sm leading-relaxed">Cómo identificar a los que buscan comprar vs. los que solo buscan preguntar.</p>
                </div>
              </div>

              <div className="flex gap-5 p-6 bg-[#2a2c44] rounded-xl shadow-lg group">
                <div className="w-12 h-12 bg-gradient-to-br from-[#f75a1c] to-[#982704] rounded-xl flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Definición de Buyer Persona</h4>
                  <p className="text-white/70 text-sm leading-relaxed">Herramientas de IA y reportes de datos para conocer a tu cliente mejor que ellos mismos.</p>
                </div>
              </div>

              <div className="flex gap-5 p-6 bg-[#2a2c44] rounded-xl shadow-lg group">
                <div className="w-12 h-12 bg-gradient-to-br from-[#f75a1c] to-[#982704] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Calendario Editorial Estratégico</h4>
                  <p className="text-white/70 text-sm leading-relaxed">Cómo crear contenido que atraiga, eduque y venda de forma equilibrada.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - About Platform with Carousel */}
      <section className="py-16 md:py-24 bg-[#f4f4f4]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#2a2c44] leading-tight">
              Cómo crear contenido que atraiga, eduque y venda de forma equilibrada
            </h2>
            <p className="text-[#777777] text-lg mt-6 leading-relaxed max-w-3xl mx-auto">
              Este taller es el resultado de la unión entre expertos en estrategia de ventas, marketing y especialistas en desarrollo de infraestructura digital. Hemos creado la{" "}
              <span className="font-bold text-[#2a2c44]">PLATAFORMA TRAS</span>
              , el ecosistema diseñado para que implementes tus embudos con tecnología de alto rendimiento y escalabilidad.
            </p>
          </div>

          {/* Carousel */}
          <ImageCarousel />

          {/* CTA Button */}
          <div className="mt-12 text-center">
            <Link href="#registro">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#f75a1c] to-[#982704] hover:from-[#fc8860] hover:to-[#f75a1c] text-white font-semibold px-8 py-6 text-base"
              >
                Registrarme a la clase gratuita
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6 - CTA with Countdown */}
      <section id="registro" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#2a2c44] leading-tight">
              Es momento de dejar de adivinar y empezar a convertir
            </h2>
            <p className="text-[#777777] text-lg mt-6">
              El acceso al Módulo 1 es gratuito por tiempo limitado.
            </p>

            {/* Countdown Timer */}
            <div className="my-10">
              <CountdownTimer variant="light" />
            </div>

            <p className="text-[#777777] text-lg mb-8">
              Regístrate ahora y únete a nuestra comunidad para recibir materiales adicionales y soporte en vivo.
            </p>

            {/* CTA Button */}
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#f75a1c] to-[#982704] hover:from-[#fc8860] hover:to-[#f75a1c] text-white font-semibold px-10 py-6 text-lg"
            >
              Registrarme a la clase gratuita
            </Button>

            {/* Community Links */}
            <p className="text-[#2a2c44] font-bold text-lg mt-10 mb-4">
              Únete a nuestra comunidad oficial:
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://wa.me/524497549353"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-7 h-7 text-white" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-[#1877F2] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                aria-label="Facebook"
              >
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
