"use client";

import { usePathname } from "next/navigation";
import { IconBell } from "@tabler/icons-react";
import Image from "next/image";

export function Topbar() {
  const pathname = usePathname();

  // Basic title mapping logic for the breadcrumb
  let pageTitle = "Dashboard";
  if (pathname.includes("/generate")) pageTitle = "Generate Document";
  else if (pathname.includes("/templates")) pageTitle = "Templates";
  else if (pathname.includes("/billing")) pageTitle = "Usage & Plan";
  
  const isGenerateFlow = pathname.includes("/generate");

  return (
    <header className="h-[100px] flex items-center justify-between px-8 lg:px-12 pt-4 bg-transparent w-full">
      <div className="flex flex-col">
        {!isGenerateFlow ? (
          <>
            <h1 className="text-2xl lg:text-[28px] font-bold text-slate-900 tracking-tight leading-tight">
              Welcome back, Orhan
            </h1>
            <p className="text-[15px] font-medium text-slate-500 mt-1">
              Dashboard
            </p>
          </>
        ) : (
          <>
            <h1 className="text-2xl lg:text-[28px] font-bold text-slate-900 tracking-tight leading-tight">
              Generate Document
            </h1>
            <p className="text-[15px] font-medium text-slate-500 mt-1">
              Create structured academic content tailored to your requirements.
            </p>
          </>
        )}
      </div>

      <div className="flex items-center gap-6">
        <button className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 hover:text-slate-900 shadow-sm transition-all focus:outline-none">
          <IconBell className="w-[20px] h-[20px]" />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#3b60ff] rounded-full border border-white"></span>
        </button>

        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden relative shadow-sm border border-slate-200">
             <img 
               src="https://i.pravatar.cc/150?u=orhan" 
               alt="User Avatar" 
               className="w-full h-full object-cover"
             />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-[14px] font-bold text-slate-900 leading-none mb-1">Orhan Bey</span>
            <span className="text-[11px] font-medium text-slate-500 leading-none">Free</span>
          </div>
        </div>
      </div>
    </header>
  );
}
