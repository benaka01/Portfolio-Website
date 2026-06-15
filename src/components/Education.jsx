import React from "react";
import { portfolioData } from "../data/portfolioData";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-12 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-[var(--font-heading)] font-bold mb-4 text-[var(--color-magenta)]" style={{ textShadow: '3px 3px 0px var(--shadow-color)' }}>
          Brain Gains 🧠
        </h2>
      </div>

      <div className="space-y-6">
        {portfolioData.education.map((edu, idx) => (
          <div key={idx} className="playful-card p-6 bg-[var(--color-yellow)] text-[#2b2d42] flex flex-col md:flex-row items-center gap-6 group hover:rotate-1">
            <div className="w-16 h-16 shrink-0 bg-white border-3 border-[var(--border-color)] rounded-full shadow-[4px_4px_0px_var(--shadow-color)] flex items-center justify-center group-hover:scale-110 transition-transform">
              <GraduationCap size={32} />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-[var(--font-heading)] font-bold mb-1">
                {edu.degree}
              </h3>
              <div className="flex flex-col md:flex-row items-center md:gap-3 text-sm font-bold opacity-80 mb-2">
                <span>{edu.school}</span>
                <span className="hidden md:inline">•</span>
                <span>{edu.period}</span>
              </div>
              <p className="font-semibold text-sm">
                {edu.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
