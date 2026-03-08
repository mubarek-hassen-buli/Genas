import { Button } from "@/components/ui/button";
import { IconSparkles, IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center justify-center text-center px-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/images/background-01.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-white/40 shadow-sm rounded-full px-4 py-1.5 mb-8">
          <span className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
            <span className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
               <span className="w-1.5 h-1.5 bg-slate-600 rounded-full" />
            </span>
            Built for Students, Educators & Researcher
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-[72px] leading-[1.1] font-semibold tracking-tight text-slate-900 mb-6 text-balance max-w-5xl mx-auto">
          Generate Academic Content with AI Instantly
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl font-medium leading-[1.6]">
          Genas helps you generate assignments, essays, research drafts, and academic content 
          in minutes not hours.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
          <Link href="/waitlist">
            <Button className="rounded-full bg-[#3b60ff] hover:bg-[#3252d9] text-white px-8 h-12 transition-all flex items-center gap-2 group font-semibold text-[15px]">
              <IconSparkles className="w-4 h-4 mr-2 group-hover:animate-pulse" />
              Join Waitlist
            </Button>
          </Link>
          <Button variant="outline" className="rounded-full bg-white/80 backdrop-blur-sm border-slate-200 text-slate-700 hover:bg-slate-50 px-8 h-12 shadow-sm transition-all font-semibold text-[15px]">
            Learn How it Works
          </Button>
        </div>
      </div>
    </section>
  );
}
