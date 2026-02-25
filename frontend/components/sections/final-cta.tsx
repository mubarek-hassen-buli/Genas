import { Button } from "@/components/ui/button";
import { IconSparkles } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export function FinalCta() {
  return (
    <section className="py-24 bg-[#fcfcfd] flex justify-center px-4 relative overflow-hidden">
      {/* Background connecting line from previous section */}
      
      
      <div className="w-full max-w-6xl mx-auto bg-[#030614] rounded-[48px] overflow-hidden relative border border-slate-800 shadow-2xl z-10">
        
        {/* Globe/Network background image */}
        <div className="absolute inset-x-0 bottom-0 top-auto w-full h-[150%] sm:h-[120%] z-0 pointer-events-none">
          <Image 
            src="/images/Rectangle.png"
            alt="Background"
            fill
            className="object-cover object-bottom"
          />
        </div>
        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 py-24 md:py-32">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Stop Starting From Scratch
          </h2>
          <p className="text-lg md:text-xl text-blue-100/70 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            Generate structured assignments, essays, and research papers ready to submit in minutes.
          </p>
          <Link href="/dashboard">
            <Button className="rounded-full bg-white hover:bg-slate-100 text-[#3b60ff] px-8 h-12 shadow-[0_8px_30px_rgb(255,255,255,0.2)] transition-all font-bold text-[15px]">
              <IconSparkles className="w-4 h-4 mr-2" />
              Get Started Free
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
