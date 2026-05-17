import React from 'react';
import { Sparkles, ArrowRight, Play, Cpu, BarChart3, ShieldCheck, MonitorPlay } from 'lucide-react';

const SaaSCommandLineHero = () => {
    return (
        <section id='home' className="relative w-full font-jakarta! bg-zinc-950 text-zinc-50 flex flex-col items-center justify-center px-4 pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden selection:bg-indigo-500/30">

            {/* Ambient Background Radial Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-25 mix-blend-screen select-none">
                <div className="absolute top-[-10%] left-1/3 w-[500px] h-[400px] bg-indigo-600 rounded-full blur-[140px]" />
                <div className="absolute top-[5%] right-1/3 w-[400px] h-[350px] bg-purple-500 rounded-full blur-[120px]" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-5xl w-full text-center flex flex-col items-center">

                {/* SaaS Product Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-md text-xs font-medium text-zinc-300 mb-6 shadow-xl shadow-black/20">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-zinc-400 font-jakarta!">EduPulse Engine v2.0 is officially live</span>
                    <ArrowRight size={12} className="text-zinc-500" />
                </div>

                {/* Primary SaaS Value Prop */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6 max-w-4xl leading-[1.1]">
                    Turn YouTube Noise into{' '}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400">
                        Structured AI Curriculums
                    </span>
                </h1>

                {/* SaaS Sub-text explaining product mechanics */}
                <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mb-10 leading-relaxed font-jakarta!">
                    Empowering your learning journey by combining the power of Gemini AI with the YouTube API to fetch the absolute best resources.
                </p>

                {/* Action Buttons Row */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-16 mt-5">
                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white font-medium text-sm rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/20 group">
                        <span>Start Free</span>
                        <ArrowRight size={15} className="text-indigo-200 group-hover:translate-x-0.5 transition-transform" />
                    </button>

                    {/* <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800/80 active:scale-[0.98] text-zinc-200 font-medium text-sm rounded-xl transition-all duration-200">
                        <Play size={14} className="text-zinc-400 fill-zinc-400" />
                        <span>Book 15min Demo</span>
                    </button> */}
                </div>

                {/* CSS/Tailwind Mockup UI (No images used) */}
                <div className="w-full max-w-4xl border border-zinc-800/80 bg-zinc-900/20 rounded-2xl p-2 backdrop-blur-sm shadow-2xl shadow-black/80">
                    <div className="bg-zinc-950 rounded-xl border border-zinc-800 p-4 text-left font-mono text-xs text-zinc-400 space-y-3 overflow-hidden">

                        {/* Top Bar */}
                        <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-2">
                            <div className="flex items-center gap-1.5">
                                <span className="w-3 h-3 rounded-full bg-zinc-800" />
                                <span className="w-3 h-3 rounded-full bg-zinc-800" />
                                <span className="w-3 h-3 rounded-full bg-zinc-800" />
                                <span className="text-[11px] text-zinc-600 ml-2">
                                    ai_recommendation_engine.sh
                                </span>
                            </div>

                            <span className="text-[11px] text-emerald-400/80 font-semibold px-2 py-0.5 bg-emerald-500/10 rounded">
                                AI Processing
                            </span>
                        </div>

                        {/* AI Flow Logs */}
                        <p className="text-zinc-500">
            // Initializing neural recommendation pipeline...
                        </p>

                        <p className="text-zinc-300">
                            <span className="text-purple-400">$</span>{" "}
                            user_input --query="Learn Full Stack MERN Development"
                        </p>

                        <p className="text-cyan-400">
                            ↳ AI detected intent: Career Skill Acquisition
                        </p>

                        <p className="text-cyan-400">
                            ↳ Searching YouTube educational graph...
                        </p>

                        <p className="text-zinc-500">
            // Filtering outdated and low-retention videos...
                        </p>

                        <p className="text-emerald-400">
                            ✓ Analyzed 12,482 videos from YouTube API
                        </p>

                        <p className="text-emerald-400">
                            ✓ Ranked courses using engagement, recency & syllabus depth
                        </p>

                        <p className="text-emerald-400">
                            ✓ Detected 3 high-quality structured playlists
                        </p>

                        <div className="border border-zinc-800 rounded-lg bg-zinc-900/70 p-3 mt-4 space-y-2">
                            <p className="text-zinc-500">// Recommended Learning Path</p>

                            <div className="space-y-1">
                                <p className="text-white">
                                    ▶ MERN Stack Full Course 2026
                                </p>

                                <p className="text-zinc-500">
                                    Channel: CodeMaster • 42 Hours • Updated 3 Weeks Ago
                                </p>

                                <div className="w-full bg-zinc-800 rounded-full h-1.5 mt-2">
                                    <div className="w-[92%] bg-emerald-400 h-1.5 rounded-full" />
                                </div>

                                <p className="text-emerald-400 text-[11px] mt-1">
                                    AI Match Score: 92%
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Proof Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-4xl mt-16 pt-8 border-t border-zinc-900/60 text-left">
                    <div>
                        <div className="text-2xl font-bold text-white flex items-center gap-2">
                            <MonitorPlay size={18} className="text-indigo-400" />
                            <span>400k+</span>
                        </div>
                        <p className="text-xs text-zinc-500 mt-1 font-medium">Videos Vectorized</p>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white flex items-center gap-2">
                            <Cpu size={18} className="text-indigo-400" />
                            <span>99.4%</span>
                        </div>
                        <p className="text-xs text-zinc-500 mt-1 font-medium">Syllabus Accuracy</p>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white flex items-center gap-2">
                            <BarChart3 size={18} className="text-indigo-400" />
                            <span>12,000+</span>
                        </div>
                        <p className="text-xs text-zinc-500 mt-1 font-medium">Active Users</p>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white flex items-center gap-2">
                            <ShieldCheck size={18} className="text-indigo-400" />
                            <span>SOC2</span>
                        </div>
                        <p className="text-xs text-zinc-500 mt-1 font-medium">Enterprise Certified</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SaaSCommandLineHero;