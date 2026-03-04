"use client";

import { useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1);

  const testimonials = [
    {
      role: "Student",
      text: "Genas saved me hours every week. I just enter my topic, choose the format, and the assignment is ready properly structured and easy to submit.",
    },
    {
      role: "University Student",
      text: "I stopped stressing about formatting and structure. The templates alone make this better than any other AI tool I've tried.",
    },
    {
      role: "Researcher",
      text: "The ability to control depth, sections, and citation style makes GenasAI incredibly useful for research drafts and reports.",
    },
    {
      role: "Academic Researcher",
      text: "What impressed me most is how organized the output is. It feels academic, not generic AI text.",
    }
  ];

  return (
    <section className="py-24 bg-[#F5F5F5] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
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
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-6 px-4 mb-16">
        {testimonials.map((item, index) => {
          const isActive = activeIndex === index;
          
          return (
          <motion.div 
            key={index}
            layout
            onClick={() => setActiveIndex(index)}
            transition={{
              layout: { duration: 0.6, type: "spring", bounce: 0.2 },
            }}
            className={`flex flex-col text-left p-6 sm:p-8 rounded-[32px] bg-gradient-to-b from-white to-[#e2ecff] shadow-sm relative min-h-[300px] cursor-pointer transition-colors duration-500 overflow-hidden ${
              isActive ? "lg:flex-[1.5] shadow-lg border border-blue-100" : "lg:flex-1 hover:bg-opacity-80"
            }`}
          >
             <motion.h4 layout="position" className="text-[13px] text-slate-400 font-medium mb-6 transition-colors">{item.role}</motion.h4>
             <motion.p 
               layout="position"
               className="text-[15px] sm:text-base text-slate-800 font-medium leading-relaxed whitespace-pre-wrap flex-1"
             >
               {item.text}
             </motion.p>

             <AnimatePresence mode="wait">
               {isActive && (
                 <motion.div 
                   initial={{ opacity: 0, x: -10 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -10 }}
                   className="flex items-center gap-1 mt-6"
                 >
                   {[...Array(5)].map((_, i) => (
                     <svg key={i} className="w-4 h-4 text-[#ffc107]" viewBox="0 0 20 20" fill="currentColor">
                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                     </svg>
                   ))}
                 </motion.div>
               )}
             </AnimatePresence>

             {/* Quote Icon */}
             <motion.div layout="position" className="absolute bottom-6 right-6 opacity-80 pointer-events-none">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 14C6 11.7909 7.79086 10 10 10V4C5.58172 4 2 7.58172 2 12V20H10V14H6Z" fill="#1e293b"/>
                  <path d="M16 14C16 11.7909 17.7909 10 20 10V4C15.5817 4 12 7.58172 12 12V20H20V14H16Z" fill="#1e293b"/>
                </svg>
             </motion.div>
          </motion.div>
        )})}
      </div>

      {/* Carousel Navigation */}
      <div className="flex items-center justify-center gap-4">
         <button 
           onClick={() => setActiveIndex(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
           className="w-8 h-8 flex items-center justify-center text-slate-800 hover:bg-slate-200 rounded-full transition-colors"
         >
            <IconChevronLeft className="w-5 h-5" />
         </button>
         <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-1 rounded-full transition-all duration-300 ${activeIndex === i ? 'w-6 bg-slate-800' : 'w-4 bg-slate-300 hover:bg-slate-400'}`}
              />
            ))}
         </div>
         <button 
           onClick={() => setActiveIndex(prev => prev === testimonials.length - 1 ? 0 : prev + 1)}
           className="w-8 h-8 flex items-center justify-center text-slate-800 hover:bg-slate-200 rounded-full transition-colors"
         >
            <IconChevronRight className="w-5 h-5" />
         </button>
      </div>

    </section>
  );
}
