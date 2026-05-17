import React from "react";
import { ShieldCheck, Zap, Crosshair, BrainCircuit } from "lucide-react";

const WhyUs = () => {
  const points = [
    {
      icon: <BrainCircuit className="text-indigo-400" size={24} />,
      title: "AI-Powered Query Optimization",
      description:
        "YouTube's search algorithm relies on raw keywords and SEO tags. Our platform uses Gemini AI to understand the technical intent behind your words, completely rewriting your query to surface hidden, high-quality gems.",
    },
    {
      icon: <Crosshair className="text-indigo-400" size={24} />,
      title: "Bypass 'Tutorial Hell'",
      description:
        "Stop guessing which 10-hour course is worth your time. We extract and rank content that prioritizes up-to-date practical, real-world execution rather than repetitive foundational fluff.",
    },
    {
      icon: <Zap className="text-indigo-400" size={24} />,
      title: "Instant Problem to Solution Routing",
      description:
        "When your code breaks, you don't want a full course—you want an immediate fix. Mode switching allows you to instantly swap gears from holistic learning to rapid-fire troubleshooting.",
    },
    {
      icon: <ShieldCheck className="text-indigo-400" size={24} />,
      title: "Zero Clickbait, Maximum Signal",
      description:
        "By enforcing precise prompt criteria behind the scenes, we bypass algorithmic clickbait and thumbnail hype, feeding you exact technical resources that align with your exact goals.",
    },
  ];

  return (
    <section id="why" className="w-full max-w-6xl mx-auto px-4 py-16 border-t border-zinc-900/60 font-jakarta">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Pitch */}
        <div className="lg:col-span-5 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-indigo-500 uppercase">
            The Smart Advantage
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl leading-tight">
            Why use AI instead of searching YouTube directly?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            YouTube is the world's largest classroom, but it is optimized for 
            entertainment and watch-time, not streamlined learning. 
          </p>
          <p className="text-zinc-500 text-sm hidden sm:block">
            We act as an intelligent filter layer between you and billions of videos, 
            saving you hours of aimless scrolling and fragmented learning paths.
          </p>
          
          {/* Subtle Stats Row */}
          <div className="pt-6 grid grid-cols-2 gap-4 border-t border-zinc-900">
            <div>
              <div className="text-2xl font-bold text-white">10x</div>
              <div className="text-xs text-zinc-500">Faster Debugging</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">Direct</div>
              <div className="text-xs text-zinc-500">API Fetching</div>
            </div>
          </div>
        </div>

        {/* Right Side: Benefits Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {points.map((point, index) => (
            <div 
              key={index}
              className="bg-zinc-900/40 border border-zinc-900 p-6 rounded-2xl hover:bg-zinc-900/80 transition-all duration-300"
            >
              <div className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl w-fit mb-4">
                {point.icon}
              </div>
              <h3 className="text-white font-semibold text-base mb-2">
                {point.title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyUs;