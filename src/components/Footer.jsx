import React from "react";
import { portfolioData } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./Icons";
import { Heart, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 py-12 px-6 border-t-4 border-[var(--border-color)] bg-[var(--color-magenta)] text-white relative overflow-hidden">
      
      {/* Decorative Blob */}
      <div className="absolute top-[-50%] right-[-10%] w-[300px] h-[300px] bg-[var(--color-cyan)] opacity-30 blob-shape-1 animate-float-blob mix-blend-screen pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-[var(--font-heading)] font-bold mb-2" style={{ textShadow: '2px 2px 0px var(--border-color)' }}>
            Benaka B
          </h2>
          <p className="font-semibold opacity-90">
            Building cool things for the web.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href={portfolioData.personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white text-[var(--color-magenta)] border-3 border-[var(--border-color)] rounded-full flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-transform shadow-[2px_2px_0px_var(--shadow-color)]"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={portfolioData.personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white text-[var(--color-magenta)] border-3 border-[var(--border-color)] rounded-full flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-transform shadow-[2px_2px_0px_var(--shadow-color)]"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href={portfolioData.personalInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white text-[var(--color-magenta)] border-3 border-[var(--border-color)] rounded-full flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-transform shadow-[2px_2px_0px_var(--shadow-color)]"
          >
            <InstagramIcon size={20} />
          </a>
          <a
            href={`mailto:${portfolioData.personalInfo.email}`}
            className="w-12 h-12 bg-white text-[var(--color-magenta)] border-3 border-[var(--border-color)] rounded-full flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-transform shadow-[2px_2px_0px_var(--shadow-color)]"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      <div className="mt-12 text-center text-sm font-bold opacity-90 flex items-center justify-center gap-1">
        Made with <Heart size={16} className="fill-white" /> by Benaka
      </div>
    </footer>
  );
}
