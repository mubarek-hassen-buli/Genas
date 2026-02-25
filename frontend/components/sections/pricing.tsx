import { IconCircleCheck, IconCircleX } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

export function Pricing() {
  return (
    <section className="py-24 bg-[#f8fafc]/50 flex flex-col items-center justify-center text-center px-4">
      {/* Header */}
      <div className="max-w-3xl mx-auto mb-12 relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center justify-center bg-white border border-slate-200 text-slate-500 text-[11px] font-semibold px-4 py-1.5 rounded-full mb-6 shadow-sm uppercase tracking-wider">
          Our Pricing
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-8 tracking-tight leading-tight text-balance max-w-3xl mx-auto">
          Choose The Plan That Fits You Best
        </h2>
        
        {/* Toggle */}
        <div className="flex items-center gap-4 bg-white rounded-full p-1.5 border border-slate-200 shadow-sm mx-auto">
           <span className="text-sm font-bold text-[#3b60ff] pl-4">Monthly Plan</span>
           <div className="w-14 h-7 bg-[#3b60ff] rounded-full p-1 flex items-center shadow-inner cursor-pointer">
              <div className="w-5 h-5 bg-white rounded-full shadow-sm" />
           </div>
           <span className="text-sm font-bold text-slate-800 pr-4">Yearly Plan</span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 px-4 mt-8">
        
        {/* Basic Plan */}
        <div className="flex flex-col text-left p-8 rounded-[32px] bg-[#eef4ff] border border-white shadow-sm relative">
           <h3 className="text-lg font-bold text-slate-900 mb-4">Basic Plan</h3>
           <div className="text-5xl font-bold text-slate-900 tracking-tight mb-2">Free</div>
           <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8 h-10">
             For getting started with AI-powered academic writing
           </p>

           <div className="flex flex-col gap-4 mb-10 flex-1">
              {[
                {text:"Generate assignments & essays", type:"check"},
                {text:"Limited monthly generations", type:"check"},
                {text:"Standard Depth", type:"check"},
                {text:"Basic templates", type:"check"},
                {text:"PDF export only", type:"check"},
                {text:"Saved history (last 5 documents)", type:"check"},
                {text:"Advanced templates", type:"cross"},
                {text:"export as DOCX & PPT", type:"cross"},
                {text:"Priority generation", type:"cross"},
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                   {feature.type === "check" ? (
                     <svg className="w-5 h-5 flex-shrink-0 text-slate-600 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                       <circle cx="12" cy="12" r="9" />
                       <path d="M8 12l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                   ) : (
                     <svg className="w-5 h-5 flex-shrink-0 text-red-600 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                       <circle cx="12" cy="12" r="9" />
                       <path d="M15 9l-6 6M9 9l6 6" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                   )}
                   <span className="text-[13px] sm:text-[14px] text-slate-700 font-medium leading-tight">
                     {feature.text}
                   </span>
                </div>
              ))}
           </div>
           <Button className="w-full rounded-full bg-[#3b60ff] hover:bg-[#3252d9] text-white h-12 shadow-[0_4px_14px_0_rgb(59,96,255,0.39)] transition-all font-semibold">
             Get Started Free
           </Button>
        </div>

        {/* Student Pro */}
        <div className="flex flex-col text-left p-8 rounded-[32px] bg-[#2210a3] border border-[#2210a3] shadow-xl relative scale-[1.03] z-10">
           {/* Most Popular Badge */}
           <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-slate-800 text-xs font-bold px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
             Most Popular
           </div>

           <h3 className="text-lg font-bold text-white mb-4 mt-2">Student Pro</h3>
           <div className="flex items-baseline mb-2">
             <span className="text-5xl font-bold text-white tracking-tight">$9</span>
             <span className="text-lg text-white/80 font-medium">/month</span>
           </div>
           <p className="text-sm text-white/70 font-medium leading-relaxed mb-8 h-10">
             For students who need consistent, high quality submissions
           </p>

           <div className="flex flex-col gap-4 mb-10 flex-1">
              {[
                "Everything in Basic",
                "Increased monthly generations",
                "Advanced academic templates",
                "Custom depth & section control",
                "PDF, DOCX & PPT export",
                "Edit & regenerate sections",
                "Full document history",
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                   <svg className="w-5 h-5 flex-shrink-0 text-white mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                     <circle cx="12" cy="12" r="9" />
                     <path d="M8 12l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
                   </svg>
                   <span className="text-[13px] sm:text-[14px] text-white font-medium leading-tight">
                     {feature}
                   </span>
                </div>
              ))}
           </div>
           <Button className="w-full rounded-full bg-white hover:bg-slate-50 text-slate-900 h-12 shadow-[0_4px_14px_0_rgb(0,0,0,0.1)] transition-all font-semibold">
             Start 7-Day Free Trial
           </Button>
        </div>

        {/* Pro Plan */}
        <div className="flex flex-col text-left p-8 rounded-[32px] bg-[#eef4ff] border border-white shadow-sm relative">
           <h3 className="text-lg font-bold text-slate-900 mb-4">Pro Plan</h3>
           <div className="flex items-baseline mb-2">
             <span className="text-5xl font-bold text-slate-900 tracking-tight">$19</span>
             <span className="text-lg text-slate-600 font-medium">/month</span>
           </div>
           <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8 h-10">
             For researchers and professionals who need full control
           </p>

           <div className="flex flex-col gap-4 mb-10 flex-1">
              {[
                "Everything in Student Pro",
                "Unlimited document generations",
                "Research-grade structure",
                "Advanced customization & templates",
                "Priority AI processing",
                "Early access to new features",
                "Dedicated support",
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                   <svg className="w-5 h-5 flex-shrink-0 text-slate-600 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                     <circle cx="12" cy="12" r="9" />
                     <path d="M8 12l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
                   </svg>
                   <span className="text-[13px] sm:text-[14px] text-slate-700 font-medium leading-tight">
                     {feature}
                   </span>
                </div>
              ))}
           </div>
           <Button className="w-full rounded-full bg-[#3b60ff] hover:bg-[#3252d9] text-white h-12 shadow-[0_4px_14px_0_rgb(59,96,255,0.39)] transition-all font-semibold">
             Start Pro Trial
           </Button>
        </div>

      </div>
    </section>
  );
}
