import Image from "next/image";

export function Features() {
  const features = [
    {
      title: "Assignment Generator",
      description: "Generate structured, ready assignments with customizable depth, format, and templates.",
      image: <Image src="/images/assignment-img.png" alt="Assignment Generator" width={110} height={110} className="object-contain drop-shadow-lg" />
    },
    {
      title: "Essay Generator",
      description: "Create clear, well-organized essays tailored to your topic, tone, and academic level.",
      image: <Image src="/images/white-paper.png" alt="Essay Generator" width={110} height={110} className="object-contain drop-shadow-lg" />
    },
    {
      title: "Research Generator",
      description: "Produce concise research summaries and structured drafts from complex topics in minutes.",
      image: <Image src="/images/scoop.png" alt="Research Generator" width={110} height={110} className="object-contain drop-shadow-lg" />
    }
  ];

  return (
    <section className="py-24 bg-[#F5F5F5] flex flex-col items-center justify-center text-center px-4">
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
      <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {features.map((feature, index) => {
          // Calculate rotation based on index: -5deg for first, 0 for middle, 5deg for third
          const rotationClass = index === 0 ? '-rotate-[3deg]' : index === 2 ? 'rotate-[3deg]' : '';
          
          return (
            <div 
              key={index}
              className={`bg-white rounded-[32px] p-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-300 relative group overflow-hidden flex flex-col ${rotationClass} hover:rotate-0 hover:-translate-y-2`}
            >
               <div className="bg-[#F5F5F5] rounded-[24px] p-4 h-full flex flex-col text-left">
                 {/* Feature Visual */}
                 <div className="relative w-full h-24 flex items-center justify-center mb-4 mt-2">
                   {feature.image}
                 </div>
 
                 {/* Content */}
                 <div className="relative z-10 px-1 pb-1 mt-auto">
                   <h3 className="text-[17px] font-bold text-slate-900 mb-1.5">{feature.title}</h3>
                   <p className="text-[13px] text-slate-500 leading-relaxed font-medium">
                     {feature.description}
                   </p>
                 </div>
               </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
