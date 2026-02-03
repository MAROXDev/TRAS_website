import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react"

const footerLinks = [
  { href: "/que-nos-mueve", label: "Que nos mueve" },
  { href: "/lo-que-hacemos", label: "Lo que hacemos" },
  { href: "/casos-de-exito", label: "Casos de exito" },
  { href: "/cursos", label: "Cursos" },
  { href: "/suscribirse", label: "Suscribirse" },
  { href: "/equipo", label: "Equipo" },
  { href: "/unete", label: "Unete al equipo" },
  { href: "/blog", label: "Blog" },
]

export function Footer() {
  return (
    <footer className="bg-[#2a2c44] text-white">
      {/* Marquee */}
      <div className="bg-gradient-to-r from-[#982704] to-[#f75a1c] py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="mx-8 text-white font-bold text-lg md:text-xl">
              Acelera tu negocio • Estrategia • Marketing Digital • Tecnología • Formación Empresarial •
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f75a1c] to-[#982704] rounded-lg transform rotate-3"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-black text-lg italic">T</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-xl italic tracking-tight">TRAS</span>
                <span className="text-[#fc8860] text-xs -mt-1">Aceleradora de Negocios</span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Impulsamos emprendedores y PYMES hacia el éxito con estrategia, marketing digital y tecnología.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[#f75a1c] font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-[#fc8860] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#f75a1c] font-semibold mb-4">Contáctanos</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <Phone className="w-4 h-4 text-[#fc8860] mt-0.5 flex-shrink-0" />
                <a href="tel:+524497549353" className="hover:text-white transition-colors">
                  +52 449 754 93 53
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <Mail className="w-4 h-4 text-[#fc8860] mt-0.5 flex-shrink-0" />
                <a href="mailto:aceleradoratras@gmail.com" className="hover:text-white transition-colors break-all">
                  aceleradoratras@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="w-4 h-4 text-[#fc8860] mt-0.5 flex-shrink-0" />
                <span>C.C. Kristal 1001, Local 19, C.P. 20250, Aguascalientes, Ags., México</span>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <Clock className="w-4 h-4 text-[#fc8860] mt-0.5 flex-shrink-0" />
                <span>Lun - Sáb: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[#f75a1c] font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#5a6396]/30 rounded-full flex items-center justify-center hover:bg-[#f75a1c] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#5a6396]/30 rounded-full flex items-center justify-center hover:bg-[#f75a1c] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#5a6396]/30 rounded-full flex items-center justify-center hover:bg-[#f75a1c] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/524497549353"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#5a6396]/30 rounded-full flex items-center justify-center hover:bg-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#5a6396]/30 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            ©{new Date().getFullYear()} TRAS Aceleradora de Negocios. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <Link href="/privacidad" className="hover:text-white transition-colors">
              Aviso de Privacidad
            </Link>
            <Link href="/terminos" className="hover:text-white transition-colors">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
