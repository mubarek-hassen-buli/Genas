"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { IconSparkles } from "@tabler/icons-react";

const CardWrapper = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`w-[230px] h-[330px] bg-white rounded-[32px] shadow-xl border border-slate-200 overflow-hidden relative flex flex-col p-4 ${className}`}>
    {children}
  </div>
);

const TemplateCards = () => {
  // Ordered IDs corresponding to images: [card-3, card-6, Center, card-2, card-5/4]
  const [cardOrder, setCardOrder] = useState([0, 1, 2, 3, 4]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCardOrder((prev) => {
        const next = [...prev];
        const first = next.shift()!;
        next.push(first);
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Define 5 distinct slots (Far Left, Left, Center, Right, Far Right)
  const slots = [
    { x: "-100%", y: "15%", rotate: -20, zIndex: 10, scale: 0.8, opacity: 0.4 },
    { x: "-55%", y: "5%", rotate: -10, zIndex: 20, scale: 0.9, opacity: 0.8 },
    { x: "0%", y: "0%", rotate: 0, zIndex: 30, scale: 1.05, opacity: 1 }, // Front & Center
    { x: "55%", y: "5%", rotate: 10, zIndex: 20, scale: 0.9, opacity: 0.8 },
    { x: "100%", y: "15%", rotate: 20, zIndex: 10, scale: 0.8, opacity: 0.4 },
  ];

  const renderCardContent = (id: number) => {
    switch (id) {
      case 0:
        return (
          <CardWrapper className="p-0">
            <Image src="/images/card-3.jpg" alt="Template" fill className="object-cover" />
          </CardWrapper>
        );
      case 1:
        return (
          <CardWrapper className="p-0">
            <Image src="/images/card-6.png" alt="Template" fill className="object-cover" />
          </CardWrapper>
        );
      case 2:
        return (
          <div className="w-[230px] h-[330px] bg-white rounded-[32px] shadow-2xl flex flex-col p-4 border-4 border-[#deeafc]">
            <div className="flex-1 rounded-2xl border border-slate-100 mb-3 relative overflow-hidden bg-slate-50">
              <Image src="/images/card-1-sec-1.jpg" alt="Template Section 1" fill className="object-cover" />
            </div>
            <div className="flex-1 rounded-2xl border border-slate-100 mb-4 relative overflow-hidden bg-slate-50">
              <Image src="/images/card-1-sec-2.jpg" alt="Template Section 2" fill className="object-cover" />
            </div>
            <div className="w-full flex justify-between items-center px-1">
              <div className="bg-[#3b60ff] text-white text-[10px] font-bold px-5 py-2 rounded-full shadow-lg">Use Template</div>
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-[14px] shadow-sm border border-slate-200">+</div>
            </div>
          </div>
        );
      case 3:
        return (
          <CardWrapper className="p-0">
            <Image src="/images/card-2.jpg" alt="Template" fill className="object-cover" />
          </CardWrapper>
        );
      case 4:
        return (
          <CardWrapper>
            <div className="flex-1 rounded-2xl relative overflow-hidden mb-3">
              <Image src="/images/card-5.jpg" alt="Template" fill className="object-cover" />
            </div>
            <div className="flex-1 rounded-2xl relative overflow-hidden">
              <Image src="/images/card-4.jpg" alt="Template" fill className="object-cover" />
            </div>
          </CardWrapper>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full h-[450px] flex items-center justify-center perspective-[1000px]">
      {cardOrder.map((id, index) => {
        const slot = slots[index];
        return (
          <motion.div
            key={id}
            initial={false}
            animate={{
              x: slot.x,
              y: slot.y,
              rotate: slot.rotate,
              zIndex: slot.zIndex,
              scale: slot.scale,
              opacity: slot.opacity,
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 20,
              mass: 1
            }}
            style={{ position: "absolute" }}
            className="cursor-pointer"
          >
            {renderCardContent(id)}
          </motion.div>
        );
      })}
    </div>
  );
};

export function Effortless() {
  return (
    <section className="py-24 bg-[#F5F5F5] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      {/* Header */}
      <div className="max-w-3xl mx-auto mb-20 relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center justify-center bg-white border border-slate-200 text-slate-500 text-[11px] font-semibold px-4 py-1.5 rounded-full mb-6 shadow-sm uppercase tracking-wider">
          why Genas
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight text-balance max-w-4xl mx-auto">
          What Makes Genas Effortless Yet Powerful
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
          <div className="flex-1 w-full bg-white rounded-[40px] aspect-[4/3] flex items-center justify-center relative overflow-hidden border border-slate-200 shadow-inner">
             <video 
               src="/video/first.mp4" 
               autoPlay 
               loop 
               muted 
               playsInline 
               className="w-full h-full object-cover"
             />
          </div>
        </div>

        {/* Block 2: Custom Templates */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 w-full bg-[#edf4ff] rounded-[40px] p-8 aspect-[4/3] flex items-center justify-center relative overflow-hidden border border-slate-200 shadow-inner">
             <TemplateCards />
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
          <div className="flex-1 w-full bg-white rounded-[40px] aspect-[4/3] flex items-center justify-center relative overflow-hidden border border-slate-200 shadow-inner">
             <video 
               src="/video/second.mp4" 
               autoPlay 
               loop 
               muted 
               playsInline 
               className="w-full h-full object-cover"
             />
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

        {/* Block 5: Organized Dashboard */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-left lg:pr-8">
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Organized Dashboard</h3>
            <p className="text-base lg:text-lg text-slate-500 font-medium leading-relaxed mb-8">
              All your generated documents are saved, categorized, and easy to manage in one place.
            </p>
            <Button className="rounded-full bg-[#3b60ff] hover:bg-[#3252d9] text-white px-8 h-12 shadow-[0_8px_20px_0_rgb(59,96,255,0.3)] transition-all">
              <IconSparkles className="w-4 h-4 mr-2" />
              Get Started Free
            </Button>
          </div>
          <div className="flex-1 w-full bg-[#edf4ff] rounded-[40px] p-10 lg:p-14 aspect-[4/3] flex items-center justify-center relative overflow-hidden border border-[#d6e6ff] shadow-inner">
             {/* Actual Dashboard Image with sleek border and shadow */}
             <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white shadow-2xl">
                <Image 
                  src="/images/dash.png" 
                  alt="Genas Dashboard" 
                  fill
                  className="object-cover"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
