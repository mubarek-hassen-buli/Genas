import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
      <nav className="flex items-center justify-between px-6 py-3 md:py-4 bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full border border-white/20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">
            GenasAI
          </Link>
        </div>

        {/* Center Links */}
        <div className="hidden md:flex items-center justify-center space-x-8">
          <Link href="#features" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Features
          </Link>
          <Link href="#use-cases" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Use Cases
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Pricing
          </Link>
          <Link href="#resources" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Resources
          </Link>
        </div>

        {/* Right CTA */}
        <div className="flex items-center space-x-4">
          <Link href="/login" className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Login
          </Link>
          <Button className="rounded-full bg-[#3b60ff] hover:bg-[#3252d9] text-white px-6 shadow-[0_4px_14px_0_rgb(59,96,255,0.39)] transition-shadow">
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  );
}
