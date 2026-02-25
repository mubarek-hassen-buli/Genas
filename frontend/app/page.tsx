import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Features } from "@/components/sections/features";
import { Effortless } from "@/components/sections/effortless";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { Faqs } from "@/components/sections/faqs";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/layout/footer";

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Effortless />
      <Testimonials />
      <Pricing />
      <Faqs />
      <FinalCta />
      <Footer />
    </main>
  );
}