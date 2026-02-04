import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutPreview } from "@/components/about-preview"
import { BrandingSection } from "@/components/branding-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { CoursesPreview } from "@/components/courses-preview"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* <Navbar /> */}
      <HeroSection />
      <ServicesSection />
      <AboutPreview />
      <CoursesPreview />
      <BrandingSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
