import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Features } from "@/components/sections/features";

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
    </main>
  );
}