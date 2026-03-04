import Image from "next/image";
import { IconSparkles } from "@tabler/icons-react";

export function MobileApp() {
  return (
    <section className="py-24 bg-[#F5F5F5] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        {/* Left Content */}
        <div className="flex-1 text-left flex flex-col gap-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight text-balance">
            Academic Writing Powered by Intelligence
          </h2>

          <div className="flex flex-col gap-8">
            <div className="flex gap-4 items-start group">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 text-[#3b60ff] transition-transform group-hover:scale-110">
                <IconSparkles className="w-6 h-6" />
              </div>
              <p className="text-lg lg:text-xl text-slate-500 font-medium leading-relaxed">
                With Genas AI mobile, you can instantly generate well-structured academic documents wherever you are.
              </p>
            </div>

            <div className="flex gap-4 items-start group">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 text-[#3b60ff] transition-transform group-hover:scale-110">
                <IconSparkles className="w-6 h-6" />
              </div>
              <p className="text-lg lg:text-xl text-slate-500 font-medium leading-relaxed">
                From assignments to research papers, experience smarter formatting, faster creation, and effortless editing all in one seamless app.
              </p>
            </div>
          </div>
        </div>

        {/* Right Images */}
        <div className="flex-1 w-full relative h-[650px] flex items-center justify-center">
          {/* Subtle glow behind phones */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-100/30 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative w-full max-w-[500px] h-[600px] flex items-center justify-center">
             {/* Back Phone - positioned slightly left and down */}
             <div className="absolute left-0 bottom-0 w-[300px] md:w-[420px] transition-transform hover:scale-105 duration-500 z-10">
                <Image 
                  src="/images/mock-2.png" 
                  alt="Mobile Mockup 2" 
                  width={420}
                  height={840}
                  className="w-full h-auto"
                />
             </div>
             
             {/* Front Phone - positioned slightly right and up, strongly overlapping the back phone */}
             <div className="absolute right-0 top-0 w-[300px] md:w-[420px] transition-transform hover:scale-105 duration-500 z-20 drop-shadow-[-25px_25px_50px_rgba(0,0,0,0.18)]">
                <Image 
                  src="/images/mock-1.png" 
                  alt="Mobile Mockup 1" 
                  width={420}
                  height={840}
                  className="w-full h-auto"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
