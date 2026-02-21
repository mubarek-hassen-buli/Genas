import { IconClipboardList, IconPencilSearch, IconFileDescription, IconFolders, IconTemplate, IconLayoutDashboard, IconFileSpark, IconWand } from "@tabler/icons-react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose a Category",
      description: "Select what you want to generate Assignment, Essay, Research, and more",
      icons: (
        <div className="relative w-full h-32 flex items-center justify-center mb-6">
          <div className="absolute inset-0 bg-red-500/10 blur-[40px] rounded-full" />
          <IconClipboardList className="w-16 h-16 text-red-500 absolute -left-2 rotate-[-10deg]" stroke={1.5} />
          <IconPencilSearch className="w-20 h-20 text-red-600 absolute z-10" fill="currentColor" fillOpacity={0.1} stroke={1.2} />
          <IconFileDescription className="w-14 h-14 text-red-400 absolute -right-2 rotate-[10deg] opacity-80" stroke={1.5} />
        </div>
      )
    },
    {
      number: "02",
      title: "Add Your Details",
      description: "Enter course, topic, depth, structure, and file format",
      icons: (
        <div className="relative w-full h-32 flex flex-col items-center justify-center mb-6">
          <div className="absolute inset-0 bg-red-500/10 blur-[40px] rounded-full" />
          {/* Mocking the UI window floating elements */}
          <div className="w-32 h-20 bg-red-600 rounded-xl shadow-[0_0_30px_rgba(220,38,38,0.3)] relative flex items-center justify-center z-10 border border-red-500/50">
             <div className="absolute -top-4 -left-4 bg-zinc-800 text-red-400 text-[10px] px-2 py-1 rounded-md border border-zinc-700 flex items-center gap-1 shadow-lg"><IconTemplate size={12}/> Title</div>
             <div className="absolute -top-6 right-2 bg-zinc-800 text-red-400 text-[10px] px-2 py-1 rounded-md border border-zinc-700 flex items-center gap-1 shadow-lg"><IconFolders size={12}/> Course</div>
             <div className="absolute bottom-2 left-2 bg-zinc-800 text-red-400 text-[10px] px-2 py-1 rounded-md border border-zinc-700 flex items-center gap-1 shadow-lg"><IconLayoutDashboard size={12}/> Depth</div>
          </div>
        </div>
      )
    },
    {
      number: "03",
      title: "Pick a Template",
      description: "Choose a template you want to style your document",
      icons: (
        <div className="relative w-full h-32 flex flex-col items-center justify-center mb-6">
          <div className="absolute inset-0 bg-red-500/10 blur-[40px] rounded-full" />
          <div className="flex gap-2 relative z-10">
             <div className="w-10 h-14 bg-white rounded shadow-md border-t-2 border-red-500 rotate-[-15deg] translate-y-2 translate-x-4 opacity-70" />
             <div className="w-12 h-16 bg-white rounded shadow-lg border-t-2 border-red-500 rotate-[-5deg] z-10" />
             <div className="w-14 h-18 bg-white rounded shadow-xl border-t-4 border-red-600 z-20 flex flex-col p-1 gap-1">
                <div className="w-full h-3 bg-red-500/20 rounded-sm" />
                <div className="w-3/4 h-1 bg-zinc-200 rounded-sm" />
                <div className="w-full h-1 bg-zinc-200 rounded-sm" />
             </div>
             <div className="w-12 h-16 bg-white rounded shadow-lg border-t-2 border-red-500 rotate-[5deg] z-10" />
             <div className="w-10 h-14 bg-white rounded shadow-md border-t-2 border-red-500 rotate-[15deg] translate-y-2 -translate-x-4 opacity-70" />
          </div>
        </div>
      )
    },
    {
      number: "04",
      title: "Generate Instantly",
      description: "Let AI generate the document instantly with the style you need",
      icons: (
        <div className="relative w-full h-32 flex flex-col items-center justify-center mb-6">
          <div className="absolute inset-0 bg-red-500/10 blur-[40px] rounded-full" />
          <div className="relative z-10">
            <IconFileSpark className="w-20 h-20 text-white" stroke={1} />
            <div className="absolute -bottom-2 -right-4 bg-red-600 text-white text-[10px] px-2 py-1 rounded border border-red-400 flex items-center gap-1 shadow-lg shadow-red-500/50">
               <IconWand size={12}/> Generating
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 bg-white flex flex-col items-center justify-center text-center px-4 relative z-10 border-t border-slate-100/50">
      
      {/* Header */}
      <div className="max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center justify-center bg-white border border-slate-200 text-slate-500 text-xs font-medium px-4 py-1.5 rounded-full mb-6 shadow-sm">
          How it works
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
          How GenasAI works
        </h2>
        <p className="text-lg text-slate-500 font-medium">
          Everything you need to generate structured academic content, in one platform.
        </p>
      </div>

      {/* Timeline & Cards Container */}
      <div className="w-full max-w-6xl mx-auto relative px-4">
        
        {/* Timeline Line (Desktop only) */}
        <div className="hidden md:block w-[75%] mx-auto relative h-[2px] bg-indigo-200/50 mb-12">
           {/* Timeline dots overlay */}
           <div className="absolute inset-x-0 -top-1.5 flex justify-between items-center">
              <div className="w-3.5 h-3.5 rounded-full bg-[#3b60ff] ring-4 ring-white" />
              <div className="w-3.5 h-3.5 rounded-full bg-[#3b60ff] ring-4 ring-white" />
              <div className="w-3.5 h-3.5 rounded-full bg-[#3b60ff] ring-4 ring-white" />
              <div className="w-3.5 h-3.5 rounded-full bg-[#3b60ff] ring-4 ring-white" />
           </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-[#141414] rounded-[24px] p-6 text-left relative overflow-hidden group shadow-2xl shadow-black/5 hover:-translate-y-1 transition-transform duration-300"
            >
               {/* Ambient grid background matching the design */}
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px] opacity-20 pointer-events-none" />
               
               {/* Step number badge */}
               <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-semibold text-white/80 z-20 backdrop-blur-sm">
                 {step.number}
               </div>

               {/* Custom Icon Representation */}
               <div className="mt-8">
                 {step.icons}
               </div>

               {/* Text Content */}
               <div className="relative z-20 mt-2">
                 <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                 <p className="text-sm text-slate-400 leading-relaxed font-medium">
                   {step.description}
                 </p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
