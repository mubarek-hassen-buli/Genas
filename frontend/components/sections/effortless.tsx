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
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
          What Makes <br />
          GenasAI Effortless Yet Powerful
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
          <div className="flex-1 w-full bg-[#edf4ff] rounded-[40px] p-8 aspect-[4/3] flex items-center justify-center relative overflow-hidden border border-[#d6e6ff] shadow-inner perspective-[1000px]">
             {/* Faded background cards */}
             <div className="absolute right-[20%] w-32 h-44 bg-slate-200/50 rounded-xl rotate-[15deg] blur-[2px] border border-slate-300/50 transform-style-3d rotate-y-[-20deg]" />
             <div className="absolute right-[28%] w-40 h-52 bg-slate-100/80 rounded-xl rotate-[5deg] shadow-lg border border-slate-200/50 transform-style-3d rotate-y-[-10deg]" />
             
             {/* Main Card */}
             <div className="relative z-10 w-48 h-64 bg-white rounded-[24px] shadow-2xl flex flex-col items-center p-3 border-4 border-[#deeafc]">
                <div className="w-full flex-1 rounded-2xl border-2 border-[#e0ecff] mb-3 relative overflow-hidden bg-[#fafcff]">
                   <div className="absolute inset-x-2 top-2 h-20 bg-[#f0f6ff] rounded-xl" />
                </div>
                <div className="w-full flex justify-between items-center px-2">
                   <div className="bg-[#3b60ff] text-white text-[8px] font-semibold px-4 py-1.5 rounded-full shadow-md">
                      Use Template
                   </div>
                   <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-[10px]">
                      +
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
          <div className="flex-1 w-full bg-white rounded-[40px] p-2 aspect-[4/3] flex items-center justify-center relative overflow-hidden border border-slate-200 shadow-sm">
             {/* Charcoal Dark Gray Box Mockup */}
             <div className="w-full h-full bg-[#202020] rounded-[32px] border-4 border-white shadow-inner relative overflow-hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}
