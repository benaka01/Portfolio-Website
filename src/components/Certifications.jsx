import React from "react";
import { portfolioData } from "../data/portfolioData";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-[var(--font-heading)] font-bold mb-4 text-[var(--color-magenta)]" style={{ textShadow: '3px 3px 0px var(--shadow-color)' }}>
          Shiny Badges 🏆
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {portfolioData.certifications.map((cert, idx) => (
          <div key={idx} className="playful-card p-5 bg-[var(--color-purple)] text-white dark:text-[#2b2d42] text-center flex flex-col items-center justify-center transform hover:-translate-y-2 hover:rotate-2">
            <div className="w-12 h-12 mb-4 bg-white border-3 border-[var(--border-color)] rounded-full shadow-[4px_4px_0px_var(--shadow-color)] flex items-center justify-center text-xl">
              ⭐
            </div>
            <h3 className="text-lg font-[var(--font-heading)] font-bold mb-2 leading-tight">
              {cert.name}
            </h3>
            <p className="text-sm font-semibold opacity-90">
              {cert.issuer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
