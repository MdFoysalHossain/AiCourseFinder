import React, { useState } from 'react';
import { Sparkles, Menu, X, ArrowRight, Globe, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 w-full px-4 pt-4 transition-all duration-300 selection:bg-indigo-500/30 font-jakarta">
            {/* The Main Glass Container */}
            <div className="max-w-6xl mx-auto border border-zinc-800/40 bg-zinc-950/40 backdrop-blur-xl rounded-2xl shadow-xl shadow-black/10 transition-all duration-300">
                <div className="px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
                    
                    {/* Brand Identity */}
                    <div className="flex items-center gap-2.5 cursor-pointer group">
                        <div className="h-8 w-8 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-600/10 group-hover:scale-105 transition-transform">
                            <Sparkles className="text-white" size={16} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-white tracking-tight">AI Course Finder</span>
                            {/* <span className="text-[9px] text-indigo-400 font-mono tracking-wider font-semibold uppercase -mt-0.5">SaaS Platform</span> */}
                        </div>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-1">
                            <a href="#home" className="block text-sm font-medium text-zinc-400 hover:text-zinc-200 py-2 px-2 rounded-lg hover:bg-zinc-900/30">Home</a>
                            <a href="#search" className="block text-sm font-medium text-zinc-400 hover:text-zinc-200 py-2 px-2 rounded-lg hover:bg-zinc-900/30">Search</a>
                            <a href="#features" className="block text-sm font-medium text-zinc-400 hover:text-zinc-200 py-2 px-2 rounded-lg hover:bg-zinc-900/30">Features</a>
                            <a href="#why" className="block text-sm font-medium text-zinc-400 hover:text-zinc-200 py-2 px-2 rounded-lg hover:bg-zinc-900/30">Why Us</a>
                    </div>

                    {/* Action Suite */}
                    <div className="hidden md:flex items-center gap-4">
                        <a href='#search' className="flex items-center gap-1.5 px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl transition-all shadow-md shadow-indigo-600/10 active:scale-[0.98]">
                            <span>Get Started</span>
                            <ArrowRight size={12} />
                        </a>
                    </div>

                    {/* Responsive Mobile Toggle */}
                    <div className="md:hidden flex items-center">
                        <button 
                            onClick={() => setIsOpen(!isOpen)} 
                            className="p-1 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50 rounded-lg transition-colors"
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>

                </div>

                {/* Mobile Drawer (Glass Extended) */}
                {isOpen && (
                    <div className="md:hidden border-t border-zinc-900/60 bg-transparent px-4 py-4 space-y-3 rounded-b-2xl animate-fade-in">
                        <div className="space-y-1">
                            <a href="#home" className="block text-sm font-medium text-zinc-400 hover:text-zinc-200 py-2 px-2 rounded-lg hover:bg-zinc-900/30">Home</a>
                            <a href="#search" className="block text-sm font-medium text-zinc-400 hover:text-zinc-200 py-2 px-2 rounded-lg hover:bg-zinc-900/30">Search</a>
                            <a href="#features" className="block text-sm font-medium text-zinc-400 hover:text-zinc-200 py-2 px-2 rounded-lg hover:bg-zinc-900/30">Features</a>
                            <a href="#why" className="block text-sm font-medium text-zinc-400 hover:text-zinc-200 py-2 px-2 rounded-lg hover:bg-zinc-900/30">Why Us</a>
                        </div>
                        <div className="h-[1px] bg-zinc-900/60 my-2" />
                        <div className="flex flex-col gap-2">
                            <a href='#search' className="w-full flex items-center justify-center gap-1.5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm rounded-xl transition-all shadow-md">
                                <span>Get Started</span>
                                <ArrowRight size={14} />
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;