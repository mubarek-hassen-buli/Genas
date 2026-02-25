"use client";

import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

export default function DashboardOverview() {
  const categories = [
    { name: "Assignment", desc: "Structured academic submission", color: "bg-[#e5eaff]", dot: "bg-[#718cff]" },
    { name: "Essay", desc: "Argumentative, descriptive, analytical", color: "bg-[#e5eaff]", dot: "bg-[#718cff]" },
    { name: "Research Paper", desc: "Full academic research format", color: "bg-[#e5eaff]", dot: "bg-[#718cff]" },
    { name: "Report", desc: "Formal structured reports", color: "bg-[#e5eaff]", dot: "bg-[#718cff]" },
  ];

  const recentDocs = [
    { title: "Machine learning Assignment", type: "Assignment", status: "Completed", date: "2 days ago" },
    { title: "Essay About African life", type: "Essay", status: "Draft", date: "5 days ago" },
    { title: "University Research", type: "Research", status: "Completed", date: "5 days ago" },
    { title: "Geography Assignment", type: "Assignment", status: "Draft", date: "1 week ago" },
  ];

  return (
    <div className="flex flex-col xl:flex-row gap-10">
      
      {/* Left Column: Categories & Recent Docs */}
      <div className="flex-1 flex flex-col gap-10">
        
        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div key={cat.name} className="bg-white rounded-[24px] p-6 shadow-sm border border-slate-100 flex flex-col h-[180px] relative overflow-hidden group">
               {/* Background subtle gradient mesh */}
               <div className={`absolute -bottom-10 -right-10 w-40 h-40 ${cat.color} blur-[40px] opacity-70 rounded-full transition-all group-hover:scale-125`}></div>
               
               <div className={`w-3 h-3 rounded-full mb-4 ${cat.dot} shadow-sm`}></div>
               
               <h3 className="text-[17px] font-bold text-slate-900 mb-1 z-10">{cat.name}</h3>
               <p className="text-[11px] font-medium text-slate-400 leading-tight z-10 flex-1">{cat.desc}</p>
               
               <Link href="/dashboard/generate" className="mt-auto flex items-center justify-between z-10 group/link">
                 <span className="text-[11px] font-bold text-slate-800">Start Generating</span>
                 <div className="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center transition-transform group-hover/link:translate-x-1 border border-slate-100">
                    <IconArrowRight className="w-3.5 h-3.5 text-slate-800" />
                 </div>
               </Link>
            </div>
          ))}
        </div>

        {/* Continue Working Section */}
        <div>
          <h2 className="text-[20px] font-bold text-slate-900 mb-6 tracking-tight">Continue Working</h2>
          
          <div className="bg-white rounded-[24px] p-6 shadow-sm border border-slate-100 flex flex-col gap-1 w-full relative">
            
            {/* Headers */}
            <div className="grid grid-cols-12 gap-4 px-2 pb-3 border-b border-slate-100 text-[12px] font-bold text-slate-400 uppercase tracking-wider">
               <div className="col-span-6">Name</div>
               <div className="col-span-3">Type</div>
               <div className="col-span-2">Status</div>
               <div className="col-span-1 text-right">Action</div>
            </div>

            {/* List */}
            <div className="flex flex-col">
              {recentDocs.map((doc, i) => (
                <div key={i} className="grid grid-cols-12 gap-4 items-center px-2 py-4 border-b border-slate-50 border-dashed hover:bg-slate-50/50 transition-colors rounded-xl">
                  {/* Name column */}
                  <div className="col-span-6 flex items-center gap-4">
                     <div className="w-10 h-10 rounded-xl bg-slate-100 flex-shrink-0"></div>
                     <div className="flex flex-col">
                        <span className="text-[14px] font-bold text-slate-800 tracking-tight leading-tight mb-0.5">{doc.title}</span>
                        <span className="text-[11px] font-medium text-slate-400">{doc.date}</span>
                     </div>
                  </div>
                  
                  {/* Type */}
                  <div className="col-span-3">
                     <span className="text-[13px] font-bold text-slate-700">{doc.type}</span>
                  </div>
                  
                  {/* Status */}
                  <div className="col-span-2">
                     <span className={`text-[12px] font-bold ${doc.status === 'Completed' ? 'text-emerald-500' : 'text-emerald-400/80'}`}>
                       {doc.status}
                     </span>
                  </div>

                  {/* Actions (Menu DOTS) */}
                  <div className="col-span-1 flex justify-end">
                     <button className="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center text-slate-400 transition-colors">
                       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                         <circle cx="12" cy="12" r="1"></circle>
                         <circle cx="12" cy="5" r="1"></circle>
                         <circle cx="12" cy="19" r="1"></circle>
                       </svg>
                     </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full flex justify-end pt-4">
               <Link href="/dashboard/documents" className="flex items-center gap-1.5 text-[12px] font-bold text-slate-500 hover:text-slate-800 transition-colors">
                 See full history <IconArrowRight className="w-3.5 h-3.5" />
               </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Usage Overview */}
      <div className="w-full xl:w-[320px] flex-shrink-0">
         <div className="bg-[#0b3bc9] rounded-[32px] p-8 h-[400px] xl:h-full min-h-[460px] relative overflow-hidden shadow-xl flex flex-col justify-between group">
            {/* Background mesh items */}
            <div className="absolute -bottom-[20%] -right-[10%] w-[120%] aspect-square bg-cyan-400/20 blur-[60px] rounded-full pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>
            <div className="absolute top-[40%] -left-[20%] w-[80%] aspect-square bg-[#3b60ff]/40 blur-[50px] rounded-full pointer-events-none"></div>
            
            <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-[url('/images/Rectangle.png')] bg-contain bg-right-bottom bg-no-repeat opacity-30 mix-blend-overlay"></div>

            {/* Content Header */}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white tracking-tight mb-8">Usage Overview</h3>
              
              <div className="flex gap-4">
                {/* Free Plan */}
                <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 shadow-sm">
                   <div className="text-xl font-bold text-white mb-1">Free</div>
                   <div className="text-[12px] font-medium text-blue-100/70">Current Plan</div>
                </div>
                
                {/* Generation Used */}
                <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 shadow-sm">
                   <div className="text-xl font-bold text-white mb-1">2/5</div>
                   <div className="text-[12px] font-medium text-blue-100/70 leading-tight">Generations used</div>
                </div>
              </div>
            </div>

            {/* Bottom Upgrade Action */}
            <div className="relative z-10 mt-auto flex justify-center pb-4">
              <Link href="/dashboard/billing">
                <button className="bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/20 text-white rounded-full px-6 py-2.5 flex items-center gap-3 transition-colors shadow-sm">
                   <span className="text-[13px] font-bold">Upgrade</span>
                   <div className="w-5 h-5 bg-white text-[#0b3bc9] rounded-full flex items-center justify-center">
                     <IconArrowRight className="w-3 h-3" />
                   </div>
                </button>
              </Link>
            </div>
         </div>
      </div>
      
    </div>
  );
}
