import React from "react";
import { ArrowDown, Mail } from "lucide-react";
import profilePhoto from "../assets/Photo.jpeg";
import { portfolioData } from "../data/portfolioData";

export default function Hero({ openContactModal }) {
  const { personalInfo } = portfolioData;

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left z-10">
          <div className="inline-block px-4 py-2 bg-[var(--color-yellow)] text-[#2b2d42] font-[var(--font-heading)] font-bold rounded-full border-2 border-[var(--border-color)] shadow-[4px_4px_0px_var(--shadow-color)] mb-6 transform -rotate-2 hover:rotate-2 transition-transform cursor-default">
            ✨ Java Full Stack Developer
          </div>
          
          <h1 className="text-5xl md:text-7xl font-[var(--font-heading)] font-bold mb-6 text-[var(--color-magenta)] leading-[1.1]" style={{ textShadow: '4px 4px 0px var(--shadow-color)' }}>
            Hi, I'm <br/><span className="text-[var(--color-cyan)]">{personalInfo.name}</span>!
          </h1>
          
          <p className="text-lg md:text-xl font-semibold mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
            I build playful, scalable, and responsive web applications. 
            Currently mixing Java backends with colorful React frontends!
          </p>
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <button onClick={openContactModal} className="playful-btn bg-[var(--color-magenta)] text-white">
              <Mail size={20} />
              Let's Chat!
            </button>
            <a href="#projects" className="playful-btn bg-[var(--bg-secondary)] !text-[var(--text-main)]">
              See my work <ArrowDown size={20} />
            </a>
          </div>
        </div>

        {/* Playful Image Area */}
        <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 shrink-0">
          {/* Background Blob decoration behind image */}
          <div className="absolute inset-0 bg-[var(--color-cyan)] blob-shape-2 border-4 border-[var(--border-color)] shadow-[8px_8px_0px_var(--shadow-color)] animate-float-blob"></div>
          
          {/* Image Container */}
          <div className="absolute inset-2 overflow-hidden blob-shape-1 border-4 border-[var(--border-color)] bg-[var(--color-yellow)]">
            <img
              src={profilePhoto}
              alt="Benaka B"
              className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 scale-110 hover:scale-100"
            />
          </div>
          
          {/* Floating badge */}
          <div className="absolute -bottom-4 -right-4 bg-[var(--color-purple)] text-white font-[var(--font-heading)] font-bold px-4 py-2 rounded-2xl border-2 border-[var(--border-color)] shadow-[4px_4px_0px_var(--shadow-color)] animate-bounce" style={{ animationDuration: '2s' }}>
            Available for work!
          </div>
        </div>

      </div>
    </section>
  );
}
