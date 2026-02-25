import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

export function Testimonials() {
  const testimonials = [
    {
      role: "Student",
      text: "GenasAI saved me hours every week. I just enter my topic, choose the format, and the assignment is ready properly structured and easy to submit.",
      stars: 0,
    },
    {
      role: "University Student",
      text: "I stopped stressing about formatting and structure. The templates alone make this better than any other AI tool I've tried.",
      stars: 5,
    },
    {
      role: "Researcher",
      text: "The ability to control depth, sections, and citation style makes GenasAI incredibly useful for research drafts and reports.",
      stars: 0,
    },
    {
      role: "Academic Researcher",
      text: "What impressed me most is how organized the output is. It feels academic, not generic AI text.",
      stars: 0,
    }
  ];

  return (
    <section className="py-24 bg-[#f8fafc]/50 flex flex-col items-center justify-center text-center px-4">
      {/* Header */}
      <div className="max-w-3xl mx-auto mb-16 relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center justify-center bg-white border border-slate-200 text-slate-500 text-[11px] font-semibold px-4 py-1.5 rounded-full mb-6 shadow-sm uppercase tracking-wider">
          Testimonial
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight text-balance max-w-3xl mx-auto">
          Here's What Others Are Saying About Us
        </h2>
      </div>

      {/* Cards Container */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 mb-16">
        {testimonials.map((item, index) => (
          <div 
            key={index}
            className="flex flex-col text-left p-6 sm:p-8 rounded-[32px] bg-gradient-to-b from-white to-[#e2ecff] shadow-sm relative min-h-[300px]"
          >
             <h4 className="text-[13px] text-slate-400 font-medium mb-6">{item.role}</h4>
             <p className="text-[15px] sm:text-base text-slate-800 font-medium leading-relaxed whitespace-pre-wrap flex-1">
               {item.text}
             </p>

             {item.stars > 0 && (
               <div className="flex items-center gap-1 mt-6">
                 {[...Array(item.stars)].map((_, i) => (
                   <svg key={i} className="w-4 h-4 text-[#ffc107]" viewBox="0 0 20 20" fill="currentColor">
                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                   </svg>
                 ))}
               </div>
             )}

             {/* Quote Icon */}
             <div className="absolute bottom-6 right-6 opacity-80">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 14C6 11.7909 7.79086 10 10 10V4C5.58172 4 2 7.58172 2 12V20H10V14H6Z" fill="#1e293b"/>
                  <path d="M16 14C16 11.7909 17.7909 10 20 10V4C15.5817 4 12 7.58172 12 12V20H20V14H16Z" fill="#1e293b"/>
                </svg>
             </div>
          </div>
        ))}
      </div>

      {/* Carousel Navigation mock */}
      <div className="flex items-center justify-center gap-4">
         <button className="w-8 h-8 flex items-center justify-center text-slate-800 hover:bg-slate-200 rounded-full transition-colors">
            <IconChevronLeft className="w-5 h-5" />
         </button>
         <div className="flex items-center gap-2">
            <div className="w-6 h-1 rounded-full bg-slate-300" />
            <div className="w-6 h-1 rounded-full bg-slate-800" />
            <div className="w-6 h-1 rounded-full bg-slate-300" />
            <div className="w-6 h-1 rounded-full bg-slate-300" />
         </div>
         <button className="w-8 h-8 flex items-center justify-center text-slate-800 hover:bg-slate-200 rounded-full transition-colors">
            <IconChevronRight className="w-5 h-5" />
         </button>
      </div>

    </section>
  );
}
