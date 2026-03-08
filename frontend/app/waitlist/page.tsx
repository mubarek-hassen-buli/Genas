"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IconCircleCheck, IconArrowLeft } from "@tabler/icons-react";
import { useState } from "react";
import Silk from "@/components/Silk";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: data.message });
        setEmail("");
      } else {
        setMessage({ type: 'error', text: data.error || 'Something went wrong.' });
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'Failed to join. Please check your connection.' });
    } finally {
      setIsLoading(false);
    }
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

        {/* Waitlist Form Area */}
        <div className="w-full max-w-lg mb-10 min-h-[120px] flex flex-col items-center justify-center">
          {message?.type === 'success' ? (
            <div className="inline-flex items-center gap-4 bg-[#1a1a1a]/80 backdrop-blur-2xl border border-white/5 rounded-full py-4 px-8 animate-in zoom-in-95 fade-in duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#4ade80] to-[#2dd4bf] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(74,222,128,0.4)]">
                <IconCircleCheck className="w-6 h-6 text-[#0a0a0a]" stroke={3} />
              </div>
              <p className="text-xl font-bold text-white tracking-tight">
                You're in. We'll be in touch.
              </p>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 w-full mb-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                  className="flex-1 w-full h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-base disabled:opacity-50"
                />
                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full sm:w-auto h-14 px-8 bg-white hover:bg-slate-100 text-black rounded-xl font-bold transition-all shadow-lg disabled:opacity-70 flex items-center justify-center min-w-[140px]"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                      <span>Joining...</span>
                    </div>
                  ) : "Join Waitlist"}
                </Button>
              </form>

              {/* Error Status Message */}
              {message?.type === 'error' && (
                <div className="w-full text-sm font-semibold px-4 py-2 rounded-lg animate-in fade-in slide-in-from-top-2 duration-300 bg-red-500/20 text-red-400 border border-red-500/30">
                  {message.text}
                </div>
              )}
            </>
          )}
        </div>

        {/* Perks */}
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          <div className="flex items-center gap-2">
            <IconCircleCheck className="w-5 h-5 text-white" />
            <span className="text-sm font-semibold text-white/90">Surprise gift for every subscriber on launch</span>
          </div>
          <div className="flex items-center gap-2">
            <IconCircleCheck className="w-5 h-5 text-white" />
            <span className="text-sm font-semibold text-white/90">100 lucky users will get pro version for 1 Month</span>
          </div>
        </div>
      </div>
    </div>
  );
}
