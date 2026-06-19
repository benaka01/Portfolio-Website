import React, { useState } from "react";
import { portfolioData } from "../data/portfolioData";

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);

  const handleSkillClick = (skillName) => {
    setActiveSkill(activeSkill === skillName ? null : skillName);
  };

  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto w-full">
      <div className="mb-16">
        <span className="section-label mb-3 block">Expertise</span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--text-main)] mb-4">
          Technical Skills
        </h2>
        <p className="text-sm text-[var(--text-muted)] max-w-lg leading-relaxed">
          A taxonomy of technologies, programming languages, and frameworks I work with. Click to view proficiency.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {portfolioData.skills.map((catGroup) => (
          <div key={catGroup.category} className="odyssey-card p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)] border-b border-[var(--border-color)] pb-3 mb-6">
                {catGroup.category}
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {catGroup.items.map((skill) => {
                  const isActive = activeSkill === skill.name;

                  return (
                    <div key={skill.name} className="relative flex flex-col items-center">
                      <button
                        onClick={() => handleSkillClick(skill.name)}
                        className={`skill-badge ${isActive ? "active" : ""}`}
                      >
                        {skill.name}
                      </button>

                      {/* Tooltip */}
                      {isActive && (
                        <div className="absolute top-[125%] left-1/2 -translate-x-1/2 w-48 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg p-3 shadow-xl z-20">
                          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[var(--bg-secondary)] border-t border-l border-[var(--border-color)] transform rotate-45"></div>

                          <div className="flex items-center justify-between mb-2 relative z-10">
                            <span className="text-[10px] text-[var(--text-muted)]">Proficiency</span>
                            <span className="text-xs font-semibold text-[var(--text-main)]">{skill.level}/10</span>
                          </div>

                          <div className="flex gap-[2px] h-1.5 relative z-10 rounded-full overflow-hidden bg-[var(--border-color)]">
                            {[...Array(10)].map((_, i) => (
                              <div
                                key={i}
                                className={`flex-1 ${
                                  i < skill.level 
                                    ? "bg-[var(--color-accent)]" 
                                    : "bg-transparent"
                                }`}
                              ></div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
