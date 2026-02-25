"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { 
  IconLayoutDashboard, 
  IconSparkles, 
  IconTemplate, 
  IconHeart, 
  IconHistory, 
  IconFolder, 
  IconCreditCard, 
  IconSettings,
  IconStarFilled,
  IconArrowUpRight,
  IconLayoutSidebarLeftCollapse
} from "@tabler/icons-react";

export function Sidebar({ isCollapsed, setIsCollapsed }: { isCollapsed: boolean, setIsCollapsed: (val: boolean) => void }) {
  const pathname = usePathname();

  const links = [
    { label: "Dashboard", href: "/dashboard", icon: IconLayoutDashboard },
    { label: "Generate", href: "/dashboard/generate", icon: IconSparkles },
    { label: "Templates", href: "/dashboard/templates", icon: IconTemplate },
    { label: "Favorites", href: "/dashboard/favorites", icon: IconHeart },
    { label: "History", href: "/dashboard/history", icon: IconHistory },
    { label: "My Documents", href: "/dashboard/documents", icon: IconFolder },
    { label: "Usage & Plan", href: "/dashboard/billing", icon: IconCreditCard },
    { label: "Settings", href: "/dashboard/settings", icon: IconSettings },
  ];

  return (
    <aside className={`h-screen bg-[#f8fafc]/50 border-r border-slate-200 flex flex-col hidden lg:flex fixed left-0 top-0 transition-all duration-300 z-50 ${isCollapsed ? 'w-[80px]' : 'w-[280px]'}`}>
      {/* Brand & Collapse */}
      <div className={`h-20 flex items-center px-6 ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
        {!isCollapsed && (
          <Link href="/" className="text-[22px] font-bold text-slate-800 tracking-tight whitespace-nowrap">
            GenasAI
          </Link>
        )}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-slate-400 hover:text-slate-600 transition-colors"
        >
          <IconLayoutSidebarLeftCollapse className={`w-5 h-5 flex-shrink-0 transition-transform ${isCollapsed ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-4 overflow-y-auto w-full no-scrollbar">
        <ul className="flex flex-col gap-2">
          {links.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/dashboard" && pathname.startsWith(link.href));
            
            return (
              <li key={link.label}>
                <Link 
                  href={link.href}
                  className={`flex items-center gap-3 py-3 rounded-xl transition-all font-semibold ${
                    isActive 
                      ? "bg-[#3b60ff] text-white shadow-md" 
                      : "text-slate-500 hover:text-slate-800 hover:bg-white"
                  } ${isCollapsed ? 'justify-center px-0' : 'px-4'}`}
                  title={isCollapsed ? link.label : undefined}
                >
                  <link.icon className={`w-5 h-5 flex-shrink-0 ${isActive ? "text-white" : "text-slate-400"}`} />
                  {!isCollapsed && <span className="text-[14px] whitespace-nowrap">{link.label}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Premium CTA */}
      <div className="p-4 mb-4">
        {isCollapsed ? (
          <div className="bg-[#0b3bc9] rounded-xl p-3 flex justify-center cursor-pointer shadow-lg group">
             <IconStarFilled className="w-5 h-5 flex-shrink-0 text-[#ffc107] group-hover:scale-110 transition-transform" title="Get Premium" />
          </div>
        ) : (
          <div className="bg-[#0b3bc9] rounded-2xl p-5 relative overflow-hidden shadow-lg whitespace-nowrap">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-400/30 to-transparent pointer-events-none"></div>
             
             <h4 className="flex items-center gap-2 text-white font-bold mb-2 relative z-10">
               Get Premium <IconStarFilled className="w-4 h-4 text-[#ffc107]" />
             </h4>
             <p className="text-[12px] text-blue-100/80 mb-4 leading-relaxed font-medium relative z-10 whitespace-normal">
               Unlock All premium features and continue generating more
             </p>
             
             <Button className="w-full bg-white text-[#0b3bc9] hover:bg-slate-50 rounded-lg h-9 text-[13px] font-bold shadow-sm flex items-center justify-between px-4 relative z-10">
               Upgrade <IconArrowUpRight className="w-4 h-4 flex-shrink-0 opacity-70" />
             </Button>
          </div>
        )}
      </div>
    </aside>
  );
}
