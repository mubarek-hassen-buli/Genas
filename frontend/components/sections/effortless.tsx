import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IconSparkles } from "@tabler/icons-react";

export function Effortless() {
  return (
    <section className="py-24 bg-[#fcfcfd] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      {/* Header */}
      <div className="max-w-3xl mx-auto mb-20 relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center justify-center bg-white border border-slate-200 text-slate-500 text-[11px] font-semibold px-4 py-1.5 rounded-full mb-6 shadow-sm uppercase tracking-wider">
          why GenasAI
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight text-balance max-w-4xl mx-auto">
          What Makes GenasAI Effortless Yet Powerful
        </h2>
        <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
          One intelligent workspace to generate, customize, and export academic work without complexity.
        </p>
      </div>

      {/* Container for alternating blocks */}
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-24 lg:gap-32 relative z-10 mt-8">
        
        {/* Block 1: Smart Academic AI */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-left lg:pr-8">
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Smart Academic AI</h3>
            <p className="text-base lg:text-lg text-slate-500 font-medium leading-relaxed mb-8">
              AI trained for assignments, essays, and research. delivering clear structure, academic tone, and accurate formatting.
            </p>
            <Button className="rounded-full bg-[#3b60ff] hover:bg-[#3252d9] text-white px-8 h-12 shadow-[0_8px_20px_0_rgb(59,96,255,0.3)] transition-all">
              <IconSparkles className="w-4 h-4 mr-2" />
              Get Started Free
            </Button>
          </div>
          <div className="flex-1 w-full bg-[#edf4ff] rounded-[40px] aspect-[4/3] flex items-center justify-center relative overflow-hidden border border-[#d6e6ff] shadow-inner">
             <video 
               src="/video/first.mp4" 
               autoPlay 
               loop 
               muted 
               playsInline 
               className="w-full h-full object-cover"
             />
          </div>
        </div>

        {/* Block 2: Custom Templates */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 w-full bg-[#edf4ff] rounded-[40px] p-8 aspect-[4/3] flex items-center justify-center relative overflow-hidden border border-[#d6e6ff] shadow-inner">
             {/* Fan Cards Container */}
             <div className="relative w-full h-full flex items-center justify-center">
                
                {/* Far Left Card (card-6) */}
                <div className="absolute left-[5%] bottom-[15%] w-[160px] h-[220px] bg-white rounded-2xl shadow-xl border border-slate-200 -rotate-[15deg] z-10 overflow-hidden hidden md:block">
                   <Image src="/images/card-6.png" alt="Template" fill className="object-cover" />
                </div>

                {/* Left Card (card-3) */}
                <div className="absolute left-[15%] bottom-[10%] w-[170px] h-[240px] bg-white rounded-2xl shadow-xl border border-slate-200 -rotate-[8deg] z-20 overflow-hidden">
                   <Image src="/images/card-3.jpg" alt="Template" fill className="object-cover" />
                </div>

                {/* Right Card (card-4) */}
                <div className="absolute right-[15%] bottom-[10%] w-[170px] h-[240px] bg-white rounded-2xl shadow-xl border border-slate-200 rotate-[8deg] z-20 overflow-hidden">
                   <Image src="/images/card-4.jpg" alt="Template" fill className="object-cover" />
                </div>

                {/* Far Right Card (card-5) */}
                <div className="absolute right-[5%] bottom-[15%] w-[160px] h-[220px] bg-white rounded-2xl shadow-xl border border-slate-200 rotate-[15deg] z-10 overflow-hidden hidden md:block">
                   <Image src="/images/card-5.jpg" alt="Template" fill className="object-cover" />
                </div>

                {/* Main Center Card (Double Section) */}
                <div className="relative z-30 w-56 h-[320px] bg-white rounded-[32px] shadow-2xl flex flex-col p-4 border-4 border-[#deeafc] transition-transform hover:scale-105 duration-500">
                   {/* Top Section */}
                   <div className="flex-1 rounded-2xl border border-slate-100 mb-3 relative overflow-hidden bg-slate-50">
                      <Image src="/images/card-1-sec-1.jpg" alt="Template Section 1" fill className="object-cover" />
                   </div>
                   {/* Bottom Section */}
                   <div className="flex-1 rounded-2xl border border-slate-100 mb-4 relative overflow-hidden bg-slate-50">
                      <Image src="/images/card-1-sec-2.jpg" alt="Template Section 2" fill className="object-cover" />
                   </div>
                   
                   <div className="w-full flex justify-between items-center px-1">
                      <div className="bg-[#3b60ff] text-white text-[10px] font-bold px-5 py-2 rounded-full shadow-lg">
                         Use Template
                      </div>
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-[14px] shadow-sm border border-slate-200">
                         +
                      </div>
                   </div>
                </div>

             </div>
          </div>
          <div className="flex-1 text-left lg:pl-8">
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Custom Templates</h3>
            <p className="text-base lg:text-lg text-slate-500 font-medium leading-relaxed mb-8">
              Choose your preferred document template, structure, depth, and sections before generation AI adapts instantly.
            </p>
            <Button className="rounded-full bg-[#3b60ff] hover:bg-[#3252d9] text-white px-8 h-12 shadow-[0_8px_20px_0_rgb(59,96,255,0.3)] transition-all">
              <IconSparkles className="w-4 h-4 mr-2" />
              Get Started Free
            </Button>
          </div>
        </div>

        {/* Block 3: Multiple Formats */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-left lg:pr-8">
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Multiple Formats</h3>
            <p className="text-base lg:text-lg text-slate-500 font-medium leading-relaxed mb-8">
              Generate content in APA, MLA, Chicago, or custom formats ready for submission or review.
            </p>
            <Button className="rounded-full bg-[#3b60ff] hover:bg-[#3252d9] text-white px-8 h-12 shadow-[0_8px_20px_0_rgb(59,96,255,0.3)] transition-all">
              <IconSparkles className="w-4 h-4 mr-2" />
              Get Started Free
            </Button>
          </div>
          <div className="flex-1 w-full bg-[#edf4ff] rounded-[40px] aspect-[4/3] flex items-center justify-center relative overflow-hidden border border-[#d6e6ff] shadow-inner">
             <video 
               src="/video/second.mp4" 
               autoPlay 
               loop 
               muted 
               playsInline 
               className="w-full h-full object-cover"
             />
          </div>
        </div>

        {/* Block 4: Export Instantly */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 w-full bg-[#edf4ff] rounded-[40px] aspect-[4/3] flex items-center justify-center relative overflow-hidden shadow-inner perspective-[1000px]">
             {/* Complex Mesh Gradient */}
             <div className="absolute inset-0 bg-[#e0ecff]" />
             <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-[#6ba5ff] rounded-full mix-blend-multiply blur-[80px] opacity-80" />
             <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-[#4da1ff] rounded-full mix-blend-multiply blur-[60px] opacity-90" />
             <div className="absolute top-[20%] right-[10%] w-[50%] h-[50%] bg-[#2563eb] rounded-full mix-blend-multiply blur-[100px] opacity-70" />
          </div>
          <div className="flex-1 text-left lg:pl-8">
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Export Instantly</h3>
            <p className="text-base lg:text-lg text-slate-500 font-medium leading-relaxed mb-8">
              Download clean, submission-ready files in PDF, DOCX or PPT no extra formatting needed.
            </p>
            <Button className="rounded-full bg-[#3b60ff] hover:bg-[#3252d9] text-white px-8 h-12 shadow-[0_8px_20px_0_rgb(59,96,255,0.3)] transition-all">
              <IconSparkles className="w-4 h-4 mr-2" />
              Get Started Free
            </Button>
          </div>
        </div>

        {/* Block 5: Organized Dashboard */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-left lg:pr-8">
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Organized Dashboard</h3>
            <p className="text-base lg:text-lg text-slate-500 font-medium leading-relaxed mb-8">
              All your generated documents are saved, categorized, and easy to manage in one place.
            </p>
            <Button className="rounded-full bg-[#3b60ff] hover:bg-[#3252d9] text-white px-8 h-12 shadow-[0_8px_20px_0_rgb(59,96,255,0.3)] transition-all">
              <IconSparkles className="w-4 h-4 mr-2" />
              Get Started Free
            </Button>
          </div>
          <div className="flex-1 w-full bg-[#edf4ff] rounded-[40px] p-10 lg:p-14 aspect-[4/3] flex items-center justify-center relative overflow-hidden border border-[#d6e6ff] shadow-inner">
             {/* Actual Dashboard Image with sleek border and shadow */}
             <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white shadow-2xl">
                <Image 
                  src="/images/dash.png" 
                  alt="GenasAI Dashboard" 
                  fill
                  className="object-cover"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
