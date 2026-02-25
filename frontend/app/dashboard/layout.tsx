"use client";

import { useState } from "react";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Topbar } from "@/components/dashboard/topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#f1f5f9]/40 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Sidebar - fixed left */}
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      
      {/* Main Content Wrapper - offset by sidebar width on desktop */}
      <div className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${isCollapsed ? 'lg:pl-[80px]' : 'lg:pl-[280px]'}`}>
         <Topbar />
         
         <main className="flex-1 px-8 lg:px-12 py-8 overflow-x-hidden">
            {children}
         </main>
      </div>
    </div>
  );
}
