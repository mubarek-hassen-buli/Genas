"use client";

import { Button } from "@/components/ui/button";
import { IconDownload, IconRefresh, IconEdit, IconChevronDown, IconCopy } from "@tabler/icons-react";

export function StepReview({ formData, onBack }: any) {
  const documentSections = [
    { title: "Table of contents", content: null },
    { 
      title: "Introduction", 
      content: `Object-Oriented Programming (OOP) is a fundamental paradigm in modern software development that emphasizes modularity, reusability, and scalability. By organizing code into objects that represent real-world entities, OOP enables developers to build structured and maintainable systems. This approach contrasts with procedural programming by focusing on data abstraction, encapsulation, inheritance, and polymorphism as core principles.\n\nThe purpose of this assignment is to examine the key concepts of Object-Oriented Programming and analyze how they improve software design and implementation. Through practical examples and theoretical discussion, this paper explores the advantages of OOP in developing efficient and organized applications. Understanding these principles is essential for students and professionals aiming to build robust and scalable software solutions.` 
    },
    { title: "Body", content: null },
    { title: "Conclusion", content: null },
    { title: "Reference", content: null },
  ];

  return (
    <div className="flex flex-col xl:flex-row gap-12 w-full pb-20">
      
      {/* Left Text Editor Area */}
      <div className="flex-1 flex flex-col gap-6 w-full max-w-4xl">
        {documentSections.map((section, idx) => (
          <div key={idx} className="flex flex-col border-b border-slate-100 pb-4">
             <div className="flex items-center justify-between py-2 cursor-pointer group">
                <h3 className="text-[17px] font-bold text-slate-900">{section.title}</h3>
                <IconChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${section.content ? "rotate-180" : ""}`} />
             </div>
             
             {section.content && (
                <div className="mt-4 text-[13px] leading-relaxed text-slate-600 font-medium whitespace-pre-wrap animate-fade-in pr-8">
                  {section.content}
                </div>
             )}
          </div>
        ))}
      </div>

      {/* Right Preview & Actions */}
      <div className="w-full xl:w-[400px] flex-shrink-0 flex flex-col items-center bg-[#f8fafc]/50 border border-slate-100 rounded-[32px] p-8 shadow-sm h-fit sticky top-10">
         
         {/* Action Bar */}
         <div className="flex items-center gap-3 mb-8 w-full justify-center">
            <Button variant="outline" className="flex-1 rounded-full bg-white border-slate-200 text-slate-700 h-10 shadow-sm font-bold text-[13px] hover:bg-slate-50 relative group">
              <IconDownload className="w-4 h-4 mr-2 text-slate-500 group-hover:text-blue-600" />
              Download
            </Button>
            <Button variant="outline" className="flex-1 rounded-full bg-white border-slate-200 text-slate-700 h-10 shadow-sm font-bold text-[13px] hover:bg-slate-50 relative group">
              <IconRefresh className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-500" />
              Regenerate
            </Button>
            <Button variant="outline" className="flex-1 rounded-full bg-white border-slate-200 text-slate-700 h-10 shadow-sm font-bold text-[13px] hover:bg-slate-50 relative group">
              <IconEdit className="w-4 h-4 mr-2 text-slate-500 group-hover:text-amber-500" />
              Edit
            </Button>
         </div>

         {/* Document Preview Thumbnail */}
         <div className="w-full max-w-[280px] aspect-[1/1.4] bg-white rounded-lg shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col p-8 relative overflow-hidden mb-8">
            <div className="w-1.5 h-full bg-[#10b981] absolute top-0 left-0"></div>
            
            <div className="text-[9px] font-bold text-slate-300 uppercase tracking-widest mb-6">Genas Generated</div>
            
            <div className="w-full h-2 bg-slate-100 rounded-full mb-3"></div>
            <div className="w-3/4 h-2 bg-slate-100 rounded-full mb-10"></div>
            
            <h4 className="text-[16px] font-bold text-slate-800 leading-tight mb-2">
              {formData.course || "Object-Oriented Programming"}
            </h4>
            <div className="text-[11px] font-semibold text-[#10b981] mb-12 uppercase tracking-wide">
              {formData.category || "Assignment"}
            </div>
            
            <div className="w-1/2 h-0.5 bg-slate-200 rounded-full mb-1"></div>
            <div className="text-[9px] font-medium text-slate-400 mt-auto">December 20, 2025</div>
         </div>

         {/* Zoom Controls */}
         <div className="flex items-center gap-4 bg-white border border-slate-200 rounded-full px-5 py-2 shadow-sm">
            <button className="text-slate-400 hover:text-slate-600">
               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
            </button>
            <button className="text-slate-400 hover:text-slate-600">
               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            <span className="text-[12px] font-bold text-slate-600 px-2 min-w-[30px] text-center">1</span>
            <button className="text-slate-400 hover:text-slate-600 ml-2">
               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
            </button>
         </div>
         
         <div className="mt-8 text-center">
            <Button onClick={onBack} variant="link" className="text-slate-400 hover:text-slate-600 text-[12px] font-semibold underline-offset-4">
              Back to templates
            </Button>
         </div>
      </div>
    </div>
  );
}
