import React from "react";
import { portfolioData } from "../data/portfolioData";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-5xl mx-auto w-full">
      <div className="mb-16">
        <span className="section-label mb-3 block">Background</span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--text-main)] mb-4">
          Education
        </h2>
        <p className="text-sm text-[var(--text-muted)] max-w-lg leading-relaxed">
          Academic milestones and degrees that built my computer science and software engineering foundation.
        </p>
      </div>

      <div className="space-y-4">
        {portfolioData.education.map((edu, idx) => (
          <div key={idx} className="odyssey-card p-6 md:p-8 flex flex-col md:flex-row items-start gap-6 group">
            {/* Minimal icon box */}
            <div className="w-10 h-10 shrink-0 border border-[var(--border-color)] bg-[var(--bg-secondary)] rounded-xl flex items-center justify-center text-[var(--text-muted)] group-hover:text-[var(--text-main)] group-hover:border-[var(--border-hover)] transition-all duration-300">
              <GraduationCap size={18} />
            </div>
            
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-base font-semibold text-[var(--text-main)] tracking-tight">
                    {edu.degree}
                  </h3>
                  <span className="text-sm text-[var(--text-muted)]">{edu.school}</span>
                </div>
                <span className="tag-pill text-[10px] self-start md:self-center">
                  {edu.period}
                </span>
              </div>
              <p className="text-sm text-[var(--text-dim)] leading-relaxed group-hover:text-[var(--text-muted)] transition-colors duration-300">
                {edu.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
