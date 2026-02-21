import Image from "next/image";

export function Features() {
  const features = [
    {
      title: "Assignment Generator",
      description: "Generate structured, ready assignments with customizable depth, format, and templates.",
      icon: (
        <div className="relative w-full h-40 flex items-center justify-center mb-6">
          <Image src="/images/assignment-img.png" alt="Assignment Generator" width={160} height={160} className="object-contain" />
        </div>
      )
    },
    {
      title: "Essay Generator",
      description: "Create clear, well-organized essays tailored to your topic, tone, and academic level.",
      icon: (
        <div className="relative w-full h-40 flex items-center justify-center mb-6">
          <Image src="/images/white-paper.png" alt="Essay Generator" width={160} height={160} className="object-contain" />
        </div>
      )
    },
    {
      title: "Research Generator",
      description: "Produce concise research summaries and structured drafts from complex topics in minutes.",
      icon: (
        <div className="relative w-full h-40 flex items-center justify-center mb-6">
          <Image src="/images/scoop.png" alt="Research Generator" width={160} height={160} className="object-contain" />
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
