"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function StepCategory({ formData, updateForm, onNext }: any) {
  const categories = [
    { title: "Assignment", desc: "Structured academic submission with introduction, body, and conclusion.", color: "bg-[#3B60FF]" },
    { title: "Essay", desc: "Argumentative, descriptive, analytical, or narrative format.", color: "bg-[#e2e8f0]" },
    { title: "Research Paper", desc: "Full academic research structure with citations and references.", color: "bg-[#f1f5f9]" },
    { title: "Report", desc: "Formal, structured report with headings and data sections.", color: "bg-[#f97316]" },
  ];

  return (
    <div className="flex flex-col xl:flex-row gap-12 w-full">
      {/* Left: Options */}
      <div className="flex-1 flex flex-col">
        <h2 className="text-[22px] font-bold text-slate-900 mb-1">What would you like to create?</h2>
        <p className="text-[14px] text-slate-500 font-medium mb-8">Choose a document type to begin.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {categories.map((cat) => {
            const isSelected = formData.category === cat.title;
            return (
              <div 
                key={cat.title}
                onClick={() => updateForm({ category: cat.title })}
                className={`relative overflow-hidden rounded-2xl p-6 cursor-pointer border-2 transition-all duration-300 h-[180px] flex flex-col group
                  ${isSelected ? "border-[#3B60FF] shadow-md scale-[1.02]" : "border-transparent bg-white shadow-sm hover:shadow-md hover:border-blue-200"}
                  ${cat.title === "Assignment" ? "bg-gradient-to-br from-[#4f71ff] to-[#254cf5] text-white" 
                    : cat.title === "Report" ? "bg-gradient-to-br from-[#fd8432] to-[#ea5f0a] text-white" 
                    : "text-slate-800"}`}
              >
                <h3 className="text-xl font-bold mb-2 relative z-10">{cat.title}</h3>
                <p className={`text-[12px] font-medium leading-relaxed relative z-10 w-2/3 ${
                  cat.title === "Assignment" || cat.title === "Report" ? "text-white/80" : "text-slate-500"
                }`}>
                  {cat.desc}
                </p>
                
                <div className={`mt-auto inline-flex items-center gap-2 rounded-full px-3 py-1 w-fit relative z-10 text-[11px] font-bold transition-colors
                  ${isSelected ? (cat.title === 'Assignment' || cat.title === 'Report' ? 'bg-white/20 text-white' : 'bg-[#3b60ff] text-white') : 
                                 (cat.title === 'Assignment' || cat.title === 'Report' ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-500')}`}
                >
                  Select <div className={`w-2 h-2 rounded-full ${isSelected ? "bg-white" : "bg-transparent border border-current"}`}></div>
                </div>

                {/* Decorative mock graphics matching the screenshot */}
                {cat.title === "Assignment" && (
                  <div className="absolute -right-4 -bottom-4 w-32 h-32 opacity-90 transform rotate-[-10deg]">
                    <div className="w-full h-full bg-white rounded-lg shadow-xl border border-slate-200 flex flex-col">
                       <div className="h-6 w-full border-b border-slate-200 flex gap-2 pt-2 px-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div><div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div><div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                       </div>
                    </div>
                  </div>
                )}
                {cat.title === "Essay" && (
                  <div className="absolute -right-6 -bottom-6 w-32 h-32 opacity-90 transform rotate-[10deg]">
                     <div className="w-full h-full bg-white rounded-md shadow-lg border border-slate-200 p-2 flex flex-col gap-1.5">
                       <div className="w-full h-1 bg-slate-200 rounded-full"></div><div className="w-3/4 h-1 bg-slate-200 rounded-full"></div><div className="w-full h-1 bg-slate-200 rounded-full"></div>
                     </div>
                  </div>
                )}
                {cat.title === "Research Paper" && (
                  <div className="absolute -right-2 -bottom-6 w-28 h-32 opacity-90">
                     <div className="w-full h-full bg-emerald-50 rounded-md shadow-lg border border-emerald-100 p-2 flex border-t-[8px] border-t-emerald-400">
                        <div className="w-12 h-12 rounded-full border-[4px] border-slate-300 mt-4 ml-2"></div>
                     </div>
                  </div>
                )}
                {cat.title === "Report" && (
                  <div className="absolute -right-2 -bottom-2 w-36 h-28 opacity-90">
                     <div className="w-full h-full bg-white rounded-md shadow-lg border border-slate-200 overflow-hidden flex items-end px-2 gap-1 pb-2">
                       <div className="w-4 h-12 bg-[#3b60ff] rounded-t-sm"></div><div className="w-4 h-16 bg-blue-300 rounded-t-sm"></div><div className="w-4 h-8 bg-[#ffc107] rounded-t-sm"></div><div className="w-4 h-20 bg-emerald-400 rounded-t-sm"></div>
                     </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex justify-end mt-10">
           <Button 
             disabled={!formData.category}
             onClick={onNext}
             className="rounded-full bg-[#3b60ff] hover:bg-[#3252d9] text-white px-8 h-10 shadow-sm transition-all font-bold text-[13px] disabled:opacity-50"
           >
             Continue <IconArrowRight className="w-4 h-4 ml-2" />
           </Button>
        </div>
      </div>

      {/* Right: Preview Panel */}
      <div className="w-full xl:w-[320px] 2xl:w-[400px] flex-shrink-0 flex flex-col">
         <h3 className="text-[16px] font-bold text-slate-800 mb-1">Your document preview</h3>
         <p className="text-[12px] font-medium text-slate-400 mb-4">A preview will appear here once you select a category.</p>
         
         <div className="flex-1 bg-[#111] rounded-[32px] overflow-hidden flex items-center justify-center p-8 relative min-h-[500px] shadow-2xl border border-slate-800 isolate">
            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen" 
                 style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            
            {formData.category ? (
              <div className="w-full max-w-[280px] aspect-[1/1.4] bg-white rounded-md shadow-2xl relative p-6 animate-fade-in-up">
                 <div className="w-1 h-full bg-emerald-500 absolute left-0 top-0 rounded-l-md"></div>
                 <div className="text-[9px] text-slate-400 font-bold tracking-widest uppercase mb-4">Genas Generated</div>
                 <div className="w-full h-2 bg-slate-200 rounded-full mb-2"></div>
                 <div className="w-3/4 h-2 bg-slate-200 rounded-full mb-8"></div>
                 
                 <div className="text-[14px] font-bold text-emerald-600 mb-2 uppercase">{formData.category}</div>
                 <div className="text-[11px] font-bold text-slate-800">Title of the Document</div>
                 <div className="w-1/2 h-1 bg-slate-200 rounded-full mt-2 mb-10"></div>

                 <div className="w-full h-1 bg-slate-100 rounded-full mb-1.5"></div>
                 <div className="w-full h-1 bg-slate-100 rounded-full mb-1.5"></div>
                 <div className="w-5/6 h-1 bg-slate-100 rounded-full mb-1.5"></div>
                 <div className="w-full h-1 bg-slate-100 rounded-full mb-1.5 mt-4"></div>
                 <div className="w-4/5 h-1 bg-slate-100 rounded-full mb-1.5"></div>
              </div>
            ) : (
              <div className="w-full max-w-[280px] aspect-[1/1.4] bg-white/5 rounded-md border border-white/10 flex items-center justify-center border-dashed backdrop-blur-sm">
                 <span className="text-white/30 text-sm font-medium">Select a category</span>
              </div>
            )}
         </div>
      </div>
    </div>
  );
}

// Ensure icon is available for button
import { IconArrowRight } from "@tabler/icons-react";
