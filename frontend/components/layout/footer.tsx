import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#fcfcfd] pt-20 pb-8 px-4 border-t border-slate-100">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20 text-left">
          
          {/* Brand/Description Column */}
          <div className="lg:col-span-2 pr-0 lg:pr-12">
            <p className="text-[14px] text-slate-500 font-medium leading-[1.8] mt-[1.5rem]">
              AI-powered academic content generation platform for assignments, essays, and research papers built to help students, researchers, and educators create structured, submission-ready documents faster.
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-[17px] font-bold text-slate-900 mb-6 tracking-tight">Social</h4>
            <ul className="flex flex-col gap-4">
              {[
                { name: "X", url: "#" },
                { name: "LinkedIn", url: "#" },
                { name: "Instagram", url: "#" },
                { name: "YouTube", url: "#" },
                { name: "TikTok", url: "#" },
                { name: "Telegram", url: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.url} className="text-[15px] font-semibold text-slate-600 hover:text-slate-900 transition-colors flex items-center justify-between group w-32">
                    {link.name}
                    <IconArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-[17px] font-bold text-slate-900 mb-6 tracking-tight">Product</h4>
            <ul className="flex flex-col gap-4">
              {[
                "Assignment Generator",
                "Essay Generator",
                "Research Paper Generator",
                "Report Generator",
                "Custom Document Builder",
                "Academic Templates",
                "Citation & Formatting",
                "PDF & DOCX Export"
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[15px] font-semibold text-slate-600 hover:text-slate-900 transition-colors w-fit block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Resources Links */}
          <div>
            <h4 className="text-[17px] font-bold text-slate-900 mb-6 tracking-tight">Company & Resources</h4>
            <ul className="flex flex-col gap-4">
              {[
                "About us",
                "Pricing",
                "Blog",
                "How It Works",
                "Help Center",
                "Careers",
                "Contact Us",
                "Terms of Service",
                "Privacy Policy"
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[15px] font-semibold text-slate-600 hover:text-slate-900 transition-colors w-fit block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="pt-8 border-t border-slate-200 flex flex-col items-center justify-center text-center">
          <p className="text-[13px] font-medium text-slate-500">
            © {currentYear} Genas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
