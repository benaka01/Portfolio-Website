import React from "react";
import { portfolioData } from "../data/portfolioData";
import { Award } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 max-w-5xl mx-auto w-full">
      <div className="mb-16">
        <span className="section-label mb-3 block">Achievements</span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--text-main)] mb-4">
          Certifications
        </h2>
        <p className="text-sm text-[var(--text-muted)] max-w-lg leading-relaxed">
          Professional credentials, course certifications, and industry acknowledgments.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {portfolioData.certifications.map((cert, idx) => (
          <div key={idx} className="odyssey-card p-6 flex flex-col items-start group">
            {/* Minimal icon box */}
            <div className="w-8 h-8 mb-4 border border-[var(--border-color)] bg-[var(--bg-secondary)] rounded-lg flex items-center justify-center text-[var(--text-muted)] group-hover:text-[var(--text-main)] group-hover:border-[var(--border-hover)] transition-all duration-300">
              <Award size={16} />
            </div>
            
            <h3 className="text-sm font-semibold text-[var(--text-main)] mb-1 leading-snug">
              {cert.name}
            </h3>
            
            <p className="text-xs text-[var(--text-dim)] group-hover:text-[var(--text-muted)] transition-colors duration-300">
              {cert.issuer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
