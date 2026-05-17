import React from "react";
import {  TvMinimalPlay, Globe, Heart, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 text-gray-400 pt-16 pb-8 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand & About */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 text-white font-bold text-xl mb-4">
              <span className="bg-indigo-600 p-2.5 rounded-xl text-white">
                {/* <Globe size={18} /> */}
                <Sparkles className="text-white" size={16} />
              </span>
              AI Course Finder
            </div>
            <p className="text-sm leading-relaxed text-zinc-400">
              Empowering your learning journey by combining the power of Gemini AI with the YouTube API to fetch the absolute best resources.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
              Explore
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">Learn a Skill</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">Solve Problems</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">Popular Courses</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">AI Features</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
              API Power
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://ai.google.dev/" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">Gemini Pro API</a>
              </li>
              <li>
                <a href="https://developers.google.com/youtube/v3" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">YouTube Data v3</a>
              </li>
              <li>
                <a href="https://tailwindcss.com" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">Tailwind CSS</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter/Updates */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
              Stay Updated
            </h3>
            <p className="text-sm text-zinc-400 mb-4">
              Subscribe for new smart features and tips.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-sm text-white outline-none focus:border-indigo-500 transition-colors"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-xl transition-colors">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Horizontal Divider */}
        <hr className="border-zinc-900 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          {/* Copyright */}
          <div>
            &copy; {new Date().getFullYear()} AI Course Recommender. All rights reserved.
          </div>

          {/* Built With */}
          <div className="flex items-center gap-1">
            Created By <a href="https://mdfoysalhossain.netlify.app/" target="_blank" className="text-indigo-500 underline">Foysal Hossain</a> for lifelong learners
          </div>

          {/* Socials */}
          {/* <div className="flex items-center gap-4">
            <a href="#" className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-white transition-all">
              <Github size={16} />
            </a>
            <a href="#" className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-indigo-400 transition-all">
              <Twitter size={16} />
            </a>
            <a href="#" className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-red-500 transition-all">
              <TvMinimalPlay  size={16} />
            </a>
          </div> */}
        </div>

      </div>
    </footer>
  );
};

export default Footer;