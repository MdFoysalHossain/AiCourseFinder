import React from "react";
import { Sparkles, ArrowUpRight, Code2 } from "lucide-react";

const CTA = () => {
  const scrollToSearch = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12 font-jakarta">
      <div className="relative overflow-hidden bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl">
        
        {/* Background Decorative Gradients */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between  gap-8">
          
          {/* Text Left */}
          <div className="max-w-xl text-center lg:text-left space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs px-3 py-1 rounded-full">
              <Code2 size={12} className="text-indigo-400" /> Free & Open Source Architecture
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight leading-tight">
              Ready to streamline your learning experience?
            </h2>
            
            <p className="text-zinc-400 text-sm md:text-base">
              Skip the manual search scrolling. Let Gemini optimize your criteria and pull immediate, target-ready videos right now.
            </p>
          </div>

          {/* Action Button Right */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full lg:w-auto shrink-0">
            <a
                href="#search"
              className="group w-full sm:w-auto bg-white hover:bg-zinc-100 text-zinc-950 px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <Sparkles size={18} className="text-indigo-600 fill-indigo-200" />
              <span>Start Searching Now</span>
              <ArrowUpRight size={16} className="text-zinc-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;