import React from "react";
import { portfolioData } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto w-full">
      <div className="mb-16">
        <span className="section-label mb-3 block">Timeline</span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--text-main)] mb-4">
          Experience
        </h2>
        <p className="text-sm text-[var(--text-muted)] max-w-lg leading-relaxed">
          A history of internships and professional positions held within technology teams.
        </p>
      </div>

      <div className="relative border-l border-[var(--border-color)] pl-8 ml-4 space-y-12">
        {portfolioData.internships.map((intern, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] group-hover:border-[var(--border-hover)] transition-colors flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[var(--text-dim)] group-hover:bg-[var(--color-accent)] transition-colors"></div>
            </div>

            {/* Content Card */}
            <div className="odyssey-card p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text-main)] tracking-tight">
                    {intern.role}
                  </h3>
                  <span className="text-sm text-[var(--text-muted)]">
                    {intern.company}
                  </span>
                </div>
                <span className="tag-pill text-[10px] self-start md:self-center">
                  {intern.period}
                </span>
              </div>

              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                {intern.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
