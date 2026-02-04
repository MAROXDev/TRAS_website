"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/que-nos-mueve", label: "Que nos mueve" },
  { href: "/lo-que-hacemos", label: "Lo que hacemos" },
  { href: "/casos-de-exito", label: "Casos de éxito" },
  { href: "/cursos", label: "Cursos" },
  { href: "/suscribirse", label: "Suscribirse" },
  { href: "/equipo", label: "Equipo" },
  { href: "/blog", label: "Blog" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-[#2a2c44]/95 backdrop-blur-md shadow-lg" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-3">
        <div className="flex items-center justify-between md:h-20 h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
              src='./isotipo.png'
              fill
              className='object-cover'
              alt='Logotipo TRAS'
              />
              
            </div>
            <div className="flex flex-col">
              
              
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-[#f75a1c] transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="https://wa.me/524497549353"
              target="_blank"
              className="text-white/80 hover:text-[#25D366] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </Link>
            <Link href="/#contacto">
              <Button className="bg-gradient-to-r from-[#f75a1c] to-[#982704] hover:from-[#fc8860] hover:to-[#f75a1c] text-white font-semibold px-6">
                Contactar
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-16 bg-[#2a2c44] transition-transform duration-300 z-40 overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <nav className="flex flex-col p-4 sm:p-6 gap-2 sm:gap-4 pb-24">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white text-base sm:text-lg font-medium py-3 border-b border-[#5a6396]/30 hover:text-[#f75a1c] transition-colors active:text-[#f75a1c]"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 sm:mt-6 flex flex-col gap-3 sm:gap-4">
            <div className="flex items-center gap-3 text-white/80 text-sm sm:text-base">
              <Phone className="w-5 h-5 text-[#f75a1c] flex-shrink-0" />
              <a href="tel:+524497549353" className="hover:text-[#f75a1c] active:text-[#f75a1c]">
                +52 449 754 93 53
              </a>
            </div>
            <div className="flex items-center gap-3 text-white/80 text-sm sm:text-base">
              <Mail className="w-5 h-5 text-[#f75a1c] flex-shrink-0" />
              <a href="mailto:aceleradoratras@gmail.com" className="hover:text-[#f75a1c] active:text-[#f75a1c] break-all">
                aceleradoratras@gmail.com
              </a>
            </div>
            <Link href="/#contacto" onClick={() => setIsOpen(false)} className="mt-2">
              <Button className="w-full bg-gradient-to-r from-[#f75a1c] to-[#982704] text-white font-semibold py-6">
                Contactar ahora
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
