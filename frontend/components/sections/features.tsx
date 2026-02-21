import { IconNotebook, IconFilePencil, IconClipboardData } from "@tabler/icons-react";

export function Features() {
  const features = [
    {
      title: "Assignment Generator",
      description: "Generate structured, ready assignments with customizable depth, format, and templates.",
      icon: (
        <div className="relative w-full h-40 flex items-center justify-center mb-6" style={{ perspective: "1000px" }}>
          <div className="absolute inset-0 bg-blue-100/50 blur-[30px] rounded-full" />
          {/* Notebook illustration css */}
          <div className="relative w-28 h-32 bg-white rounded-md shadow-2xl shadow-blue-900/10 border border-slate-200 rotate-[-10deg] flex flex-col items-center" style={{ transformStyle: "preserve-3d", transform: "rotateX(20deg) rotateZ(-10deg)" }}>
             <div className="w-full h-4 bg-blue-500 rounded-t-md relative flex justify-evenly items-center">
                <div className="w-1.5 h-3 bg-zinc-300 rounded-full -mt-2 shadow-sm" />
                <div className="w-1.5 h-3 bg-zinc-300 rounded-full -mt-2 shadow-sm" />
                <div className="w-1.5 h-3 bg-zinc-300 rounded-full -mt-2 shadow-sm" />
             </div>
             <div className="flex-1 w-full bg-[#f0f9ff]/50 flex flex-col justify-evenly p-3">
                <div className="w-full h-[1px] bg-blue-200/50" />
                <div className="w-full h-[1px] bg-blue-200/50" />
                <div className="w-full h-[1px] bg-blue-200/50" />
                <div className="w-full h-[1px] bg-blue-200/50" />
                <div className="w-full h-[1px] bg-blue-200/50" />
             </div>
          </div>
        </div>
      )
    },
    {
      title: "Essay Generator",
      description: "Create clear, well-organized essays tailored to your topic, tone, and academic level.",
      icon: (
        <div className="relative w-full h-40 flex items-center justify-center mb-6" style={{ perspective: "1000px" }}>
          <div className="absolute inset-0 bg-slate-100/60 blur-[30px] rounded-full" />
          <div className="relative w-28 h-32 bg-white rounded-md shadow-2xl shadow-slate-400/20 border border-slate-200 p-3 flex flex-col gap-2 relative" style={{ transformStyle: "preserve-3d", transform: "rotateY(-10deg) rotateZ(5deg)" }}>
             <div className="w-3/4 h-1.5 bg-slate-300 rounded-sm" />
             <div className="w-full h-1 bg-slate-200 rounded-sm" />
             <div className="w-full h-1 bg-slate-200 rounded-sm" />
             <div className="w-5/6 h-1 bg-slate-200 rounded-sm" />
             
             {/* Pen illustration */}
             <div className="absolute top-1/2 left-1/4 w-1 h-14 bg-slate-800 rounded-r-md -rotate-[45deg] z-10 shadow-lg">
                <div className="absolute -top-1 left-0 w-1 h-2 bg-slate-400 rounded-t-sm" />
                <div className="absolute -bottom-2 -left-0.5 w-0 h-0 border-l-[3px] border-r-[3px] border-t-[8px] border-l-transparent border-r-transparent border-t-zinc-800" />
             </div>
          </div>
        </div>
      )
    },
    {
      title: "Research Generator",
      description: "Produce concise research summaries and structured drafts from complex topics in minutes.",
      icon: (
        <div className="relative w-full h-40 flex items-center justify-center mb-6" style={{ perspective: "1000px" }}>
           <div className="absolute inset-0 bg-emerald-100/50 blur-[30px] rounded-full" />
           {/* Clipboard illustration */}
           <div className="relative w-28 h-32 bg-emerald-50 rounded-md shadow-2xl shadow-emerald-900/10 border-2 border-emerald-100 flex flex-col items-center pt-4 p-2 relative" style={{ transformStyle: "preserve-3d", transform: "rotateZ(10deg)" }}>
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-4 bg-emerald-700 rounded-sm shadow-md z-10" />
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-10 h-2 border-2 border-emerald-600 rounded-md" />
              <div className="w-full h-full bg-white rounded shadow-inner p-2 flex flex-col gap-1.5">
                  <div className="w-full h-1 bg-emerald-100 rounded-sm" />
                  <div className="w-5/6 h-1 bg-emerald-100 rounded-sm" />
                  <div className="w-full h-1 bg-emerald-100 rounded-sm" />
              </div>
              
              {/* Magnifying Glass */}
              <div className="absolute bottom-2 -right-4 rotate-[-30deg] z-20">
                 <div className="w-12 h-12 rounded-full border-4 border-slate-700 bg-sky-200/40 backdrop-blur-sm relative shadow-xl">
                    <div className="absolute bottom-[-16px] right-[-16px] w-3 h-8 bg-slate-800 rounded-full rotate-[45deg]" />
                    <div className="absolute top-2 left-2 w-4 h-4 bg-white/40 rounded-full" />
                 </div>
              </div>
           </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 bg-[#f8fafc]/50 flex flex-col items-center justify-center text-center px-4">
      {/* Header */}
      <div className="max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center justify-center bg-white border border-slate-200 text-slate-500 text-xs font-medium px-4 py-1.5 rounded-full mb-6 shadow-sm">
          Features
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
          What You Can Generate
        </h2>
        <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
          One powerful platform that brings all your academic writing needs together, 
          powered by AI and flexible templates built for real academic work.
        </p>
      </div>

      {/* Features Grid */}
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="bg-white rounded-[32px] p-6 text-left shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 border border-slate-100 hover:-translate-y-1 relative group overflow-hidden"
          >
             {/* Subtle gradient hover effect */}
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
             
             {/* Feature Visual */}
             {feature.icon}

             {/* Content */}
             <div className="relative z-10 px-2 pb-2">
               <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
               <p className="text-sm text-slate-500 leading-relaxed font-medium">
                 {feature.description}
               </p>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
}
