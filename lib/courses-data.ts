export interface Course {
  id: string
  title: string
  shortTitle?: string
  description: string
  shortDescription?: string
  price: string
  priceNumber: number
  personalizado?: string
  personalizadoNumber?: number
  duration: string
  access: string
  modules: number
  level: string
  category: string
  topics: string[]
  image: string
  featured?: boolean
  paymentLink?: string
  personalizadoPaymentLink?: string
  isFree?: boolean
}

export const coursesData: Course[] = [
  {
    id: "whatsapp-business",
    title: "WhatsApp Business para Emprendedores y PYMES",
    shortTitle: "WhatsApp Business",
    description:
      "Convierte WhatsApp Business en un canal profesional de atención y ventas. Aprende a utilizar correctamente cada función, mejora la comunicación con tus clientes, automatiza mensajes y cierra más ventas.",
    shortDescription: "Convierte WhatsApp en tu canal profesional de atención y ventas.",
    price: "$500 MXN",
    priceNumber: 500,
    personalizado: "$850 MXN",
    personalizadoNumber: 850,
    duration: "6 meses de acceso",
    access: "24/7",
    modules: 11,
    level: "Sin conocimientos previos",
    category: "Marketing",
    topics: [
      "Configuración de perfil de negocio",
      "Catálogos y pedidos",
      "Etiquetas y organización",
      "Mensajes automatizados",
      "Integración con anuncios",
      "Buenas prácticas",
    ],
    image: "/whatsapp-business-mobile-marketing-green-chat.jpg",
    featured: true,
    paymentLink: "#pago-whatsapp",
    personalizadoPaymentLink: "#pago-whatsapp-personalizado",
  },
  {
    id: "contabilidad-cero",
    title: "Contabilidad desde CERO",
    shortTitle: "Contabilidad Básica",
    description:
      "Aprende los fundamentos de la contabilidad de manera clara, visual y práctica. Entiende qué es la contabilidad, por qué existe y cómo aplicarla en la vida real de tu negocio.",
    shortDescription: "Fundamentos de contabilidad de manera clara, visual y práctica.",
    price: "$500 MXN",
    priceNumber: 500,
    personalizado: "$850 MXN",
    personalizadoNumber: 850,
    duration: "A tu ritmo",
    access: "24/7",
    modules: 8,
    level: "Principiante",
    category: "Finanzas",
    topics: [
      "Conceptos clave contables",
      "Lenguaje contable básico",
      "La partida doble",
      "Registro de operaciones",
      "Estados financieros",
      "Introducción a IA contable",
    ],
    image: "/accounting-calculator-financial-documents-business.jpg",
    paymentLink: "#pago-contabilidad",
    personalizadoPaymentLink: "#pago-contabilidad-personalizado",
  },
  {
    id: "intro-ia",
    title: "Introducción a los Modelos de IA",
    shortTitle: "Intro a IA",
    description:
      "Curso introductorio gratuito que explica qué es la inteligencia artificial, cómo funciona, tipos de modelos y cómo estructurar prompts básicos para interactuar con estas herramientas.",
    shortDescription: "Descubre qué es la IA y cómo empezar a utilizarla.",
    price: "GRATIS",
    priceNumber: 0,
    duration: "Corta duración",
    access: "24/7",
    modules: 4,
    level: "Todos los niveles",
    category: "Tecnología",
    topics: ["¿Qué es la IA?", "Tipos de modelos de IA", "Fundamentos de prompts", "Primeros pasos prácticos"],
    image: "/artificial-intelligence-robot-technology-futuristi.jpg",
    isFree: true,
    paymentLink: "#acceso-gratis-ia",
  },
  {
    id: "ia-principiantes",
    title: "Inteligencia Artificial para Principiantes",
    shortTitle: "IA para Principiantes",
    description:
      "Profundiza en el uso práctico de la IA con técnicas de ingeniería de prompts: prompting por roles, few-shot prompting, prompting paso a paso, iterativo y generación de formatos específicos.",
    shortDescription: "Aprende a aplicar la IA de forma práctica en tu negocio.",
    price: "$500 MXN",
    priceNumber: 500,
    personalizado: "$850 MXN",
    personalizadoNumber: 850,
    duration: "Escalable",
    access: "24/7",
    modules: 6,
    level: "Principiante - Intermedio",
    category: "Tecnología",
    topics: [
      "Prompting por roles",
      "Few-shot prompting",
      "Prompting paso a paso",
      "Prompting iterativo",
      "Formatos de salida",
      "Plantillas listas para usar",
    ],
    image: "/ai-prompts-chatbot-business-automation.jpg",
    paymentLink: "#pago-ia-principiantes",
    personalizadoPaymentLink: "#pago-ia-principiantes-personalizado",
  },
]

export const upcomingCourses = [
  "Excel para negocios",
  "Contabilidad especializada",
  "Contabilidad para agencias de viajes",
  "Prompting avanzado",
  "Diseño gráfico con Canva",
  "Affinity Designer",
  "WhatsApp Business avanzado",
  "Diseño web básico",
  "Implementación de CRM",
]

export const courseCategories = ["Todos", "Marketing", "Finanzas", "Tecnología"]

export const courseLevels = ["Todos", "Principiante", "Intermedio", "Sin conocimientos previos", "Todos los niveles"]

export function getCourseById(id: string): Course | undefined {
  return coursesData.find((course) => course.id === id)
}

export function getCoursesByCategory(category: string): Course[] {
  if (category === "Todos") return coursesData
  return coursesData.filter((course) => course.category === category)
}

export function getCoursesByLevel(level: string): Course[] {
  if (level === "Todos") return coursesData
  return coursesData.filter((course) => course.level.toLowerCase().includes(level.toLowerCase()))
}

export function filterCourses(category: string, level: string, searchTerm: string): Course[] {
  return coursesData.filter((course) => {
    const matchesCategory = category === "Todos" || course.category === category
    const matchesLevel = level === "Todos" || course.level.toLowerCase().includes(level.toLowerCase())
    const matchesSearch =
      searchTerm === "" ||
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesLevel && matchesSearch
  })
}
