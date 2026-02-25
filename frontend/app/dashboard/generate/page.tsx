"use client";

import { useState } from "react";
import { StepCategory } from "@/components/dashboard/generate/step-category";
import { StepDetails } from "@/components/dashboard/generate/step-details";
import { StepTemplate } from "@/components/dashboard/generate/step-template";
import { StepReview } from "@/components/dashboard/generate/step-review";

export default function GenerateDocumentPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    category: "",
    course: "",
    topic: "",
    instructions: "",
    academicLevel: "Undergraduate",
    depthLevel: "Standard",
    structure: {
      toc: true, intro: true, body: true, conclusion: true, references: true
    },
    format: "DOCX",
    template: "Classic Academic"
  });

  const handleNext = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const handleBack = () => setCurrentStep(prev => Math.max(prev - 1, 1));
  const updateForm = (updates: any) => setFormData(p => ({ ...p, ...updates }));

  const steps = [
    { num: "01", label: "Category" },
    { num: "02", label: "Details" },
    { num: "03", label: "Template" },
    { num: "04", label: "Review" },
  ];

  return (
    <div className="flex flex-col h-full min-h-[80vh]">
      
      {/* Stepper */}
      <div className="flex items-center w-full max-w-4xl mb-12 relative">
        <div className="absolute top-3.5 left-0 w-full h-[2px] bg-slate-200 -z-10 bg-gradient-to-r from-[#3b60ff] to-slate-200" 
             style={{ backgroundSize: `${((currentStep - 1) / 3) * 100}% 100%`, backgroundRepeat: 'no-repeat' }} />
        
        {steps.map((step, idx) => {
          const isActive = currentStep === idx + 1;
          const isPassed = currentStep > idx + 1;
          
          return (
            <div key={step.num} className="flex flex-col items-center relative z-10 flex-1">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center border-[2px] bg-white transition-colors duration-300 ${isPassed || isActive ? 'border-[#3b60ff] text-[#3b60ff]' : 'border-slate-300 text-transparent'}`}>
                {(isPassed || isActive) && (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                )}
              </div>
              <div className={`mt-3 text-[14px] font-bold ${isActive ? 'text-slate-900' : 'text-slate-400'}`}>
                {step.num} <span className="font-medium ml-1">{step.label}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 w-full flex flex-col">
        {currentStep === 1 && <StepCategory formData={formData} updateForm={updateForm} onNext={handleNext} />}
        {currentStep === 2 && <StepDetails formData={formData} updateForm={updateForm} onNext={handleNext} onBack={handleBack} />}
        {currentStep === 3 && <StepTemplate formData={formData} updateForm={updateForm} onNext={handleNext} onBack={handleBack} />}
        {currentStep === 4 && <StepReview formData={formData} onBack={handleBack} />}
      </div>
    </div>
  );
}
