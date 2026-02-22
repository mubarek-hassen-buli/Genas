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
          <div className="flex-1 w-full bg-[#edf4ff] rounded-[40px] p-8 aspect-[4/3] flex items-center justify-center relative overflow-hidden border border-[#d6e6ff] shadow-inner">
             {/* Simple lines background */}
             <div className="absolute top-12 left-12 right-12 flex justify-between opacity-30">
                <div className="w-8 h-8 rounded-full border-2 border-blue-200 bg-transparent flex-shrink-0" />
                <div className="h-[2px] w-full bg-blue-200 mt-4 mx-2" />
                <div className="w-8 h-8 rounded-full border-2 border-blue-200 bg-transparent flex-shrink-0" />
             </div>
             
             {/* Left side pills */}
             <div className="flex flex-col gap-4 relative z-10 translate-x-4">
                <div className="bg-white rounded-lg p-2.5 shadow-sm border border-slate-100 flex items-center gap-2 w-32 relative">
                   <IconSparkles className="text-blue-500 w-4 h-4" />
                   <div className="h-4 flex-1 border-b border-slate-200 relative"><span className="absolute -top-1.5 text-[10px] text-slate-500 font-medium">Topic</span></div>
                   {/* Connection line */}
                   <svg className="absolute -right-16 top-1/2 w-16 h-12 overflow-visible" preserveAspectRatio="none"><path d="M0,0 C20,0 30,30 60,30" fill="none" stroke="#6b9aff" strokeWidth="2" strokeDasharray="3,3" /></svg>
                </div>
                <div className="bg-white rounded-lg p-2.5 shadow-sm border border-slate-100 flex items-center gap-2 w-32 relative z-20">
                   <IconSparkles className="text-blue-500 w-4 h-4" />
                   <div className="h-4 flex-1 border-b border-slate-200 relative"><span className="absolute -top-1.5 text-[10px] text-slate-500 font-medium">Instruction</span></div>
                   {/* Connection line */}
                   <svg className="absolute -right-16 top-1/2 w-16 h-2 overflow-visible" preserveAspectRatio="none"><line x1="0" y1="0" x2="60" y2="0" stroke="#6b9aff" strokeWidth="2" strokeDasharray="3,3" /></svg>
                </div>
                <div className="bg-white rounded-lg p-2.5 shadow-sm border border-slate-100 flex items-center gap-2 w-32 relative">
                   <IconSparkles className="text-blue-500 w-4 h-4" />
                   <div className="h-4 flex-1 border-b border-slate-200 relative"><span className="absolute -top-1.5 text-[10px] text-slate-500 font-medium">File Format</span></div>
                   {/* Connection line */}
                   <svg className="absolute -right-16 bottom-1/2 w-16 h-12 overflow-visible" preserveAspectRatio="none"><path d="M0,12 C20,12 30,-20 60,-20" fill="none" stroke="#6b9aff" strokeWidth="2" strokeDasharray="3,3" /></svg>
                </div>
             </div>

             {/* Blue connection badge */}
             <div className="relative z-30 mx-6 bg-[#2563eb] text-white text-[10px] font-bold px-3 py-1.5 rounded-md shadow-lg shadow-blue-500/30 -translate-y-2">
                54 × 0
             </div>

             {/* Right side document */}
             <div className="relative z-20 bg-white rounded-xl shadow-xl border border-indigo-50/50 w-40 h-52 p-4 flex flex-col gap-3 ml-2 border-l-4 border-l-indigo-400">
                <div className="w-full absolute inset-0 rounded-xl bg-indigo-50/50 blur-sm -z-10 translate-x-2 translate-y-2" />
                <h4 className="text-[10px] font-bold text-slate-800 leading-tight">Generated<br/>Document Title</h4>
                <div className="flex flex-col gap-2 mt-2">
                   <div className="w-full h-1 bg-slate-400 rounded-sm" />
                   <div className="w-5/6 h-1 bg-slate-200 rounded-sm" />
                   <div className="w-full h-1 bg-slate-200 rounded-sm" />
                   <div className="w-4/5 h-1 bg-slate-200 rounded-sm" />
                   <div className="w-full h-1 bg-slate-200 rounded-sm" />
                </div>
             </div>
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
          <div className="flex-1 w-full bg-gradient-to-br from-[#dfeaff] via-[#ffffff] to-[#99bfff] rounded-[40px] p-8 aspect-[4/3] flex items-center justify-center relative overflow-hidden border border-[#d6e6ff] shadow-inner">
             {/* Central AI Document */}
             <div className="w-24 h-32 bg-white rounded-md shadow-2xl border-t-[6px] border-[#3b60ff] relative flex flex-col items-center justify-center gap-2 z-20">
                <div className="bg-slate-100 p-2 rounded-full border border-slate-200">
                   <svg className="w-6 h-6 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M6.34 6.34l-1.41-1.41M19.07 19.07l-1.41-1.41M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" /><circle cx="12" cy="12" r="5" fill="#3b60ff"/></svg>
                </div>
                <div className="w-3/4 h-1 bg-slate-200 mt-2 rounded-sm" />
                <div className="w-full h-1 bg-slate-200 px-2 rounded-sm" />
                <div className="w-5/6 h-1 bg-slate-200 rounded-sm" />
                
                {/* SVG splitting lines */}
                <svg className="absolute top-1/2 -right-24 w-24 h-32 overflow-visible -translate-y-1/2 -z-10" preserveAspectRatio="none">
                   <path d="M0,16 C10,16 15,-10 24,-10" fill="none" stroke="#6b9aff" strokeWidth="2" />
                   <path d="M0,16 C10,16 15,4 24,4" fill="none" stroke="#6b9aff" strokeWidth="2" />
                   <path d="M0,16 C10,16 15,18 24,18" fill="none" stroke="#6b9aff" strokeWidth="2" />
                   <path d="M0,16 C10,16 15,32 24,32" fill="none" stroke="#6b9aff" strokeWidth="2" />
                </svg>
             </div>
             
             {/* Format Documents */}
             <div className="flex flex-col gap-3 ml-12 relative z-20">
                <div className="bg-white rounded pl-2 pr-6 py-1.5 shadow-md border border-slate-200 flex items-center gap-2 text-[9px] font-bold text-slate-600">
                   <div className="bg-indigo-100 text-[#3b60ff] px-1 py-0.5 rounded text-[8px]">PDF</div> PDF Document
                </div>
                <div className="bg-white rounded pl-2 pr-6 py-1.5 shadow-md border border-slate-200 flex items-center gap-2 text-[9px] font-bold text-slate-600">
                   <div className="bg-indigo-100 text-[#3b60ff] px-1 py-0.5 rounded text-[8px]">DOCX</div> DOCX Document
                </div>
                <div className="bg-white rounded pl-2 pr-6 py-1.5 shadow-md border border-slate-200 flex items-center gap-2 text-[9px] font-bold text-slate-600">
                   <div className="bg-indigo-100 text-[#3b60ff] px-1 py-0.5 rounded text-[8px]">PPT</div> PPT Document
                </div>
                <div className="bg-white rounded pl-2 pr-6 py-1.5 shadow-md border border-slate-200 flex items-center gap-2 text-[9px] font-bold text-slate-600">
                   <div className="bg-indigo-100 text-[#3b60ff] px-1 py-0.5 rounded text-[8px]">TXT</div> TXT Document
                </div>
             </div>
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
      </div>
    </section>
  );
}
