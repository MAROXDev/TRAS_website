"use client"

import * as React from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
  X,
  CreditCard,
  ShieldCheck,
  Loader2,
  CheckCircle2,
  User,
  Mail,
  Phone,
  ChevronRight,
} from "lucide-react"
import { cn } from "@/lib/utils"

const schema = z.object({
  nombre: z.string().min(2, "Mínimo 2 caracteres"),
  apellido: z.string().min(2, "Mínimo 2 caracteres"),
  email: z.string().email("Correo inválido"),
  telefono: z.string().min(1, "Ingresa tu teléfono"),
})

type FormData = z.infer<typeof schema>

interface BuyNowDialogProps {
  courseTitle: string
  coursePrice: string
  productId?: string
  isFree?: boolean
  children: React.ReactNode
}

type SubmitStatus = "idle" | "loading" | "success" | "error" | "no-credentials"

export function BuyNowDialog({
  courseTitle,
  coursePrice,
  productId,
  isFree = false,
  children,
}: BuyNowDialogProps) {
  const [open, setOpen] = React.useState(false)
  const [status, setStatus] = React.useState<SubmitStatus>("idle")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  function handleOpenChange(next: boolean) {
    setOpen(next)
    if (!next) {
      setTimeout(() => {
        reset()
        setStatus("idle")
      }, 200)
    }
  }

  async function onSubmit(data: FormData) {
    setStatus("loading")
    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL
      const origin = typeof window !== "undefined" ? window.location.origin : "https://tras.com.mx"
      const res = await fetch(`${backendUrl}/admin/api/backoffice/orders/create/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product_id: productId,
          customer_name: `${data.nombre} ${data.apellido}`,
          customer_email: data.email,
          customer_phone: data.telefono,
          success_url: `${origin}/pago-exitoso`,
          cancel_url: `${origin}/cursos`,
        }),
      })
      const json = await res.json()
if (!res.ok || !json.success) {
        if (json.message?.toLowerCase().includes("credencial")) {
          setStatus("no-credentials")
        } else {
          setStatus("error")
        }
        return
      }
      if (json.data?.checkout_url) {
        window.location.href = json.data.checkout_url
      } else {
        setStatus("success")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        {/* Panel */}
        <Dialog.Content
          className={cn(
            "fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2",
            "rounded-2xl bg-white shadow-2xl ring-1 ring-black/8",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
            "data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
            "duration-200 focus:outline-none overflow-hidden",
          )}
        >
          {status === "success" ? (
            <SuccessView courseTitle={courseTitle} onClose={() => setOpen(false)} />
          ) : (
            <>
              {/* Header */}
              <div className="relative bg-[#2a2c44] px-6 pt-8 pb-6 overflow-hidden">
                {/* Background glow */}
                <div className="absolute -top-8 -right-8 w-48 h-48 bg-[#f75a1c]/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#982704]/15 rounded-full blur-2xl pointer-events-none" />

                {/* Brand mark */}
                <div className="relative flex items-center gap-2 mb-5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#f75a1c] to-[#982704]">
                    <CreditCard className="h-3.5 w-3.5 text-white" />
                  </div>
                  <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">
                    TRAS
                  </span>
                </div>

                {/* Course info */}
                <div className="relative">
                  <p className="text-white/50 text-xs font-medium uppercase tracking-wider mb-1">
                    {isFree ? "Acceso gratuito" : "Inscripción al curso"}
                  </p>
                  <Dialog.Title className="text-white text-xl font-bold leading-snug">
                    {courseTitle}
                  </Dialog.Title>
                  <div className="mt-3 inline-flex items-center gap-1.5 bg-gradient-to-r from-[#f75a1c] to-[#982704] px-3 py-1 rounded-full">
                    <span className="text-white text-sm font-bold">
                      {isFree ? "Gratis" : coursePrice}
                    </span>
                  </div>
                </div>

                {/* Close */}
                <Dialog.Close className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
                  <X className="h-4 w-4" />
                  <span className="sr-only">Cerrar</span>
                </Dialog.Close>
              </div>

              {/* Divider with label */}
              <div className="flex items-center gap-3 px-6 py-4 bg-[#f4f4f4]/60">
                <div className="h-px flex-1 bg-[#e5e5e5]" />
                <span className="text-xs font-medium text-[#777777] uppercase tracking-wider">
                  Registra tus datos
                </span>
                <div className="h-px flex-1 bg-[#e5e5e5]" />
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="px-6 pb-2 space-y-4">
                  {/* Nombre + Apellido */}
                  <div className="grid grid-cols-2 gap-3">
                    <Field
                      label="Nombre"
                      icon={<User className="h-3.5 w-3.5" />}
                      error={errors.nombre?.message}
                    >
                      <input
                        {...register("nombre")}
                        placeholder="Juan"
                        autoComplete="given-name"
                        className={cn(inputBase, errors.nombre && inputError)}
                      />
                    </Field>

                    <Field
                      label="Apellido"
                      icon={<User className="h-3.5 w-3.5" />}
                      error={errors.apellido?.message}
                    >
                      <input
                        {...register("apellido")}
                        placeholder="García"
                        autoComplete="family-name"
                        className={cn(inputBase, errors.apellido && inputError)}
                      />
                    </Field>
                  </div>

                  {/* Email */}
                  <Field
                    label="Correo electrónico"
                    icon={<Mail className="h-3.5 w-3.5" />}
                    error={errors.email?.message}
                  >
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="juan@empresa.com"
                      autoComplete="email"
                      className={cn(inputBase, errors.email && inputError)}
                    />
                  </Field>

                  {/* Phone */}
                  <Field
                    label="Teléfono"
                    icon={<Phone className="h-3.5 w-3.5" />}
                    error={errors.telefono?.message}
                  >
                    <input
                      {...register("telefono")}
                      type="tel"
                      placeholder="+52 55 1234 5678"
                      autoComplete="tel"
                      className={cn(inputBase, errors.telefono && inputError)}
                    />
                  </Field>

                  {status === "error" && (
                    <p className="text-xs text-[#982704] bg-[#982704]/8 border border-[#982704]/20 rounded-lg px-3 py-2">
                      Ocurrió un error. Por favor intenta de nuevo.
                    </p>
                  )}
                  {status === "no-credentials" && (
                    <p className="text-xs text-[#982704] bg-[#982704]/8 border border-[#982704]/20 rounded-lg px-3 py-2">
                      No hay lugares disponibles en este momento. Contáctanos directamente.
                    </p>
                  )}
                </div>

                {/* Footer */}
                <div className="px-6 pb-6 pt-4">
                  <button
                    type="submit"
                    disabled={status === "loading" || status === "no-credentials"}
                    className={cn(
                      "w-full h-11 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2",
                      "bg-gradient-to-r from-[#f75a1c] to-[#982704]",
                      "hover:from-[#fc8860] hover:to-[#f75a1c]",
                      "active:scale-[0.98]",
                      "transition-all duration-150 shadow-md shadow-[#f75a1c]/30",
                      "disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100",
                    )}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Procesando…
                      </>
                    ) : (
                      <>
                        {isFree ? "Acceder gratis" : "Continuar con el pago"}
                        <ChevronRight className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-1.5 mt-3">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#777777]" />
                    <p className="text-xs text-[#777777]">
                      Datos protegidos · Proceso 100% seguro
                    </p>
                  </div>
                </div>
              </form>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

/* ─── Sub-components ─────────────────────────────────────── */

function Field({
  label,
  icon,
  error,
  children,
}: {
  label: string
  icon: React.ReactNode
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-1.5">
      <label className="flex items-center gap-1.5 text-xs font-semibold text-[#2a2c44]">
        <span className="text-[#f75a1c]">{icon}</span>
        {label}
      </label>
      {children}
      {error && (
        <p className="text-xs text-[#982704]">{error}</p>
      )}
    </div>
  )
}

function SuccessView({
  courseTitle,
  onClose,
}: {
  courseTitle: string
  onClose: () => void
}) {
  return (
    <div className="flex flex-col items-center text-center px-8 py-12">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#f75a1c]/20 to-[#982704]/10 mb-5">
        <CheckCircle2 className="h-8 w-8 text-[#f75a1c]" />
      </div>
      <h2 className="text-xl font-bold text-[#2a2c44]">¡Solicitud recibida!</h2>
      <p className="text-[#777777] text-sm mt-2 max-w-xs leading-relaxed">
        Recibimos tus datos para{" "}
        <span className="font-semibold text-[#2a2c44]">{courseTitle}</span>. Nos
        pondremos en contacto contigo muy pronto.
      </p>
      <button
        onClick={onClose}
        className="mt-8 h-10 px-6 rounded-xl bg-gradient-to-r from-[#f75a1c] to-[#982704] text-white text-sm font-semibold hover:from-[#fc8860] hover:to-[#f75a1c] transition-all"
      >
        Entendido
      </button>
    </div>
  )
}

/* ─── Shared styles ──────────────────────────────────────── */

const inputBase =
  "w-full h-10 rounded-lg border border-[#e5e5e5] bg-white px-3 text-sm text-[#2a2c44] placeholder:text-[#aaaaaa] outline-none transition-all focus:border-[#f75a1c] focus:ring-2 focus:ring-[#f75a1c]/20"

const inputError =
  "border-[#982704] focus:border-[#982704] focus:ring-[#982704]/20"
