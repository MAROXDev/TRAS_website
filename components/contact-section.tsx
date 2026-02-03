"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react"

const services = [
  "Asesoría Estratégica",
  "Marketing Digital",
  "Desarrollo Web",
  "Tienda Online",
  "Cursos Empresariales",
  "Branding e Identidad",
  "Otro",
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    alert("¡Gracias por contactarnos! Nos pondremos en contacto pronto.")
    setFormData({ name: "", email: "", phone: "", service: "", message: "" })
  }

  return (
    <section id="contacto" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#f75a1c] font-semibold text-sm uppercase tracking-wider">— Contacta ya</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#2a2c44] mt-4">
            Comienza con{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f75a1c] to-[#982704]">TRAS</span>
          </h2>
          <p className="text-[#777777] text-lg max-w-2xl mx-auto mt-4">
            ¿Listo para acelerar tu negocio? Completa el formulario y nos pondremos en contacto contigo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <div className="order-2 lg:order-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#2a2c44] mb-2">
                    Nombre completo *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Tu nombre"
                    className="border-[#e5e5e5] focus:border-[#f75a1c] focus:ring-[#f75a1c]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#2a2c44] mb-2">
                    Correo electrónico *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tu@email.com"
                    className="border-[#e5e5e5] focus:border-[#f75a1c] focus:ring-[#f75a1c]"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#2a2c44] mb-2">
                    Teléfono / WhatsApp
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+52 449 000 0000"
                    className="border-[#e5e5e5] focus:border-[#f75a1c] focus:ring-[#f75a1c]"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-[#2a2c44] mb-2">
                    Servicio de interés *
                  </label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger className="border-[#e5e5e5] focus:border-[#f75a1c] focus:ring-[#f75a1c]">
                      <SelectValue placeholder="Selecciona un servicio" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#2a2c44] mb-2">
                  Cuéntanos sobre tu proyecto *
                </label>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe brevemente tu negocio y cómo podemos ayudarte..."
                  className="border-[#e5e5e5] focus:border-[#f75a1c] focus:ring-[#f75a1c] resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#f75a1c] to-[#982704] hover:from-[#fc8860] hover:to-[#f75a1c] text-white font-semibold"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin mr-2">⏳</span>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar mensaje
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="order-1 lg:order-2">
            <div className="bg-[#2a2c44] rounded-2xl p-8 md:p-10 text-white h-full">
              <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>
              <p className="text-white/70 mb-8">
                Estamos disponibles para atender tus consultas, diagnósticos y solicitudes de información. ¡Contáctanos!
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f75a1c]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#f75a1c]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Teléfono</h4>
                    <a href="tel:+524497549353" className="text-white/70 hover:text-[#fc8860] transition-colors">
                      +52 449 754 93 53
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f75a1c]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#f75a1c]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Correo electrónico</h4>
                    <a
                      href="mailto:aceleradoratras@gmail.com"
                      className="text-white/70 hover:text-[#fc8860] transition-colors break-all"
                    >
                      aceleradoratras@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f75a1c]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#f75a1c]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Ubicación</h4>
                    <p className="text-white/70">
                      C.C. Kristal 1001, Local 19
                      <br />
                      C.P. 20250, Aguascalientes, Ags., México
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f75a1c]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#f75a1c]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Horario de atención</h4>
                    <p className="text-white/70">
                      Lunes a Sábado
                      <br />
                      9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/524497549353?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20TRAS"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-4 px-6 rounded-xl transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
                Escríbenos por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
