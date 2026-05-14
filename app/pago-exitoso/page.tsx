import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

export default function PagoExitosoPage() {
  return (
    <main className="min-h-screen bg-[#f4f4f4] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl ring-1 ring-black/8 max-w-md w-full px-8 py-12 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#f75a1c]/20 to-[#982704]/10 mx-auto mb-6">
          <CheckCircle2 className="h-10 w-10 text-[#f75a1c]" />
        </div>

        <h1 className="text-2xl font-bold text-[#2a2c44]">¡Pago exitoso!</h1>

        <p className="text-[#777777] text-sm mt-3 leading-relaxed">
          Gracias por tu compra. En unos minutos recibirás un correo con tus
          credenciales de acceso.
        </p>
        <p className="text-[#777777] text-sm mt-1 leading-relaxed">
          Si no ves el mensaje, revisa tu carpeta de spam.
        </p>

        <Link
          href="/cursos"
          className="mt-8 inline-flex h-11 items-center justify-center px-8 rounded-xl bg-gradient-to-r from-[#f75a1c] to-[#982704] text-white text-sm font-semibold hover:from-[#fc8860] hover:to-[#f75a1c] transition-all shadow-md shadow-[#f75a1c]/30"
        >
          Ver más cursos
        </Link>
      </div>
    </main>
  )
}
