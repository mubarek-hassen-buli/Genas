"use client";

import { Button } from "@/components/ui/button";

export function StepTemplate({ formData, updateForm, onNext, onBack }: any) {
  const styles = [
    "Classic Academic",
    "Minimal Clean",
    "Research Pro",
    "Structured Formal",
    "Modern Elegant",
    "Case Study",
    "Lab Report",
    "Presentation Script",
    "Literature Review"
  ];

  return (
    <div className="flex flex-col xl:flex-row gap-12 w-full pb-20">
      
      {/* Left Menu Selection */}
      <div className="w-full xl:w-[280px] flex-shrink-0 flex flex-col gap-6">
        <div>
          <h2 className="text-[22px] font-bold text-slate-900 mb-1">Choose a template style</h2>
          <p className="text-[14px] text-slate-500 font-medium">Select how your document will look and feel.</p>
        </div>

        <div className="flex flex-col gap-1 w-full mt-4">
          {styles.map(style => (
            <button
              key={style}
              onClick={() => updateForm({ template: style })}
              className={`text-left px-5 py-3.5 rounded-xl text-[14px] font-bold transition-all ${
                formData.template === style 
                  ? "bg-[#3b60ff] text-white shadow-md shadow-blue-500/20" 
                  : "bg-transparent text-slate-600 hover:bg-slate-100"
              }`}
            >
              {style}
            </button>
          ))}
        </div>
      </div>

      {/* Right Grid Templates Preview */}
      <div className="flex-1 flex flex-col bg-[#f8fafc]/50 border border-slate-100 rounded-[32px] p-8 min-h-[500px]">
        <h3 className="text-[15px] font-bold text-slate-800 mb-6">{formData.template}</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
           {[...Array(6)].map((_, i) => (
             <div key={i} className="flex flex-col gap-3 group cursor-pointer animate-fade-in-up" style={{animationDelay: `${i * 50}ms`}}>
                <div className={`w-full aspect-[4/3] rounded-xl relative border transition-all duration-300
                  ${i === 0 ? "border-[#3b60ff] bg-[#020617] shadow-lg scale-[1.02]" : "border-transparent bg-[#0f172a] shadow-sm group-hover:shadow-md"}
                `}>
                   {/* Checkmark inside selection */}
                   {i === 0 && (
                     <div className="absolute bottom-3 left-3 w-5 h-5 bg-[#3b60ff] rounded-full flex items-center justify-center border border-slate-800 z-10">
                        <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                     </div>
                   )}
                   {/* Mock cover page content */}
                   <div className="absolute inset-x-8 top-12 bottom-12 bg-white/5 border border-white/5 rounded-sm p-4 flex flex-col">
                      <div className="w-1/2 h-1 bg-white/10 rounded-full mb-4"></div>
                      <div className="w-full h-0.5 bg-white/5 rounded-full mb-1"></div>
                      <div className="w-4/5 h-0.5 bg-white/5 rounded-full mb-auto"></div>
                      <div className="w-full flex justify-between items-center mt-auto">
                         <div className="w-1/4 h-0.5 bg-blue-500/50"></div>
                         <div className="w-1/4 h-0.5 bg-white/10"></div>
                      </div>
                   </div>
                </div>
                <div className="text-[13px] font-semibold text-slate-700">Academic Assignment T-0{i+1}</div>
             </div>
           ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-auto border-t border-slate-200 pt-6">
           <Button onClick={onBack} variant="outline" className="rounded-full bg-white border-slate-300 text-slate-600 px-6 h-10 font-bold text-[13px] shadow-sm">
             Back
           </Button>
           <Button onClick={onNext} className="rounded-full bg-[#3b60ff] hover:bg-[#3252d9] text-white px-8 h-10 shadow-[0_4px_14px_0_rgb(59,96,255,0.39)] transition-all font-bold text-[13px]">
             Continue
           </Button>
        </div>
      </div>

    </div>
  );
}
