import type React from "react"
import type { Metadata, Viewport } from "next"
import { Roboto } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "TRAS - Aceleradora de Negocios | Marketing Digital y Tecnología",
  description:
    "TRAS es una Aceleradora de Negocios que ayuda a emprendedores y PYMES a crecer de forma estratégica. Asesoría, Marketing Digital, Desarrollo Web y Cursos Empresariales en Aguascalientes, México.",
  keywords: [
    "aceleradora de negocios",
    "marketing digital",
    "desarrollo web",
    "cursos empresariales",
    "asesoría estratégica",
    "Aguascalientes",
    "México",
    "PYMES",
    "emprendedores",
  ],
  authors: [{ name: "TRAS Aceleradora de Negocios" }],
  openGraph: {
    title: "TRAS - Aceleradora de Negocios",
    description: "Impulsamos tu negocio con estrategia, marketing digital y tecnología",
    type: "website",
    locale: "es_MX",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#f75a1c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${roboto.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
