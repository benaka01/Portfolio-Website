import React from "react";
import { portfolioData } from "../data/portfolioData";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-[var(--font-heading)] font-bold mb-4 text-[var(--color-magenta)]" style={{ textShadow: '3px 3px 0px var(--shadow-color)' }}>
          Work Adventures 🚀
        </h2>
      </div>

      <div className="space-y-8 relative">
        {/* Playful wiggly line connecting them (faked with absolute div) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-[var(--border-color)] -translate-x-1/2 hidden md:block"></div>

        {portfolioData.internships.map((intern, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={idx} className={`relative flex flex-col md:flex-row items-center justify-between ${isEven ? "md:flex-row-reverse" : ""}`}>
              
              {/* Center Dot */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[var(--color-magenta)] border-3 border-[var(--border-color)] z-10 items-center justify-center shadow-[2px_2px_0px_var(--shadow-color)]">
                <Briefcase size={14} className="text-white" />
              </div>

              {/* Card */}
              <div className={`w-full md:w-[45%] playful-card p-6 bg-[var(--color-cyan)] text-[#2b2d42] ${isEven ? "md:text-left" : "md:text-right"}`}>
                <span className="inline-block px-3 py-1 bg-white border-2 border-[var(--border-color)] rounded-full text-xs font-bold shadow-[2px_2px_0px_var(--shadow-color)] mb-3">
                  {intern.period}
                </span>
                <h3 className="text-2xl font-[var(--font-heading)] font-bold mb-1">
                  {intern.role}
                </h3>
                <h4 className="text-lg font-bold mb-3 opacity-80">
                  @ {intern.company}
                </h4>
                <p className="font-semibold text-sm">
                  {intern.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
