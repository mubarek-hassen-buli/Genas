"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IconCircleCheck, IconArrowLeft } from "@tabler/icons-react";
import { useState } from "react";
import Silk from "@/components/Silk";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for waitlist submission would go here
    alert("Thanks for joining the waitlist!");
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-[#141414] flex flex-col items-center px-4 pt-12 relative overflow-hidden">
      {/* Dynamic Silk Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Silk
          speed={5}
          scale={1}
          color="#7B7481"
          noiseIntensity={1.2}
          rotation={0}
        />
      </div>

      {/* Navigation & Header Container */}
      <div className="w-full max-w-6xl flex items-center justify-between mb-24 relative z-10 px-4 mt-4">
        <Link href="/" className="flex items-center gap-2 group text-white/70 hover:text-white transition-colors">
          <IconArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-semibold tracking-wide uppercase">Back Home</span>
        </Link>

        {/* Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <div className="relative w-32 h-10 brightness-0 invert opacity-90">
            <Image 
              src="/images/genas-logo.png" 
              alt="Genas Logo" 
              fill 
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Placeholder for symmetry */}
        <div className="w-24 px-4" />
      </div>

      {/* Main Content */}
      <div className="max-w-4xl w-full text-center flex flex-col items-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
          Not just an <span className="relative inline-block">
            ordinary
            <div className="absolute -bottom-2 left-0 w-full h-2 bg-[#ffdd00] -rotate-1 -z-10 opacity-70" />
          </span> AI academic generator
        </h1>

        <p className="text-lg md:text-xl text-white/70 font-medium max-w-2xl mb-12">
          Extra-ordinary assignments, smooth research, and smart templates. Launching soon.
        </p>

        {/* Waitlist Form */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-lg mb-10">
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 w-full h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-base"
          />
          <Button 
            type="submit"
            className="w-full sm:w-auto h-14 px-8 bg-white hover:bg-slate-100 text-black rounded-xl font-bold transition-all shadow-lg"
          >
            Join Waitlist
          </Button>
        </form>

        {/* Perks */}
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          <div className="flex items-center gap-2">
            <IconCircleCheck className="w-5 h-5 text-white" />
            <span className="text-sm font-semibold text-white/90">Surprise gift for every subscriber on launch</span>
          </div>
          <div className="flex items-center gap-2">
            <IconCircleCheck className="w-5 h-5 text-white" />
            <span className="text-sm font-semibold text-white/90">100 lucky users will get pro version for lifetime</span>
          </div>
        </div>
      </div>
    </div>
  );
}
