import React from "react";
import { GraduationCap, Wrench, ListVideo, Sparkles, ArrowRight } from "lucide-react";

const Features = () => {
  const featureList = [
    {
      icon: <GraduationCap className="text-indigo-400" size={26} />,
      title: "Search Courses to Learn",
      description:
        "Type any skill you want to master. Our AI filters through the noise to fetch the most recent, popular, and high-efficiency courses directly from the YouTube API.",
      badge: "Skill Mode",
    },
    {
      icon: <Wrench className="text-emerald-400" size={26} />,
      title: "Troubleshoot & Solve Problems",
      description:
        "Describe your specific bug, error message, or bottleneck in plain English. The AI analyzes the root issue and hunts down exact step-by-step video solutions.",
      badge: "Problem Mode",
    },
    {
      icon: <ListVideo className="text-amber-400" size={26} />,
      title: "Deep-Dive Search Playlists",
      description:
        "Skip standalone videos and look straight for structured learning paths. Perfect for comprehensive deep dives into full series and structured multi-part tutorials.",
      badge: "Playlist Mode",
    },
  ];

  return (
    <section id="features" className="w-full max-w-6xl mx-auto px-4 py-16">
      {/* Header section */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium px-3 py-1 rounded-full mb-4">
          <Sparkles size={12} /> Intelligent Learning
        </div>
        <h2 className="text-3xl font-bold text-white mb-4 sm:text-4xl">
          Engineered for Smart Exploration
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base">
          Stop guessing search terms. Let AI optimize your intent and cross-reference YouTube's vast catalog for the highest quality results.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featureList.map((feature, index) => (
          <div
            key={index}
            className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 transition-all duration-300 hover:border-zinc-700 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              {/* Icon & Badge Row */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-zinc-800 border border-zinc-700/50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <span className="text-[11px] font-medium tracking-wide text-zinc-500 bg-zinc-950 px-2.5 py-1 rounded-md border border-zinc-800 uppercase">
                  {feature.badge}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>

            {/* Bottom Accent link */}
            <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center gap-2 text-xs text-zinc-500 group-hover:text-white transition-colors cursor-pointer">
              <span>Try this mode</span>
              <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;