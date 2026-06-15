import React, { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { Star } from "lucide-react";

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);

  const handleSkillClick = (skillName) => {
    setActiveSkill(activeSkill === skillName ? null : skillName);
  };

  const pillColors = [
    "bg-[var(--color-magenta)] text-white",
    "bg-[var(--color-cyan)] text-[#2b2d42]",
    "bg-[var(--color-yellow)] text-[#2b2d42]",
    "bg-[var(--color-purple)] text-white dark:text-[#2b2d42]",
    "bg-[var(--color-green)] text-white"
  ];

  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-[var(--font-heading)] font-bold mb-4 text-[var(--color-magenta)]" style={{ textShadow: '3px 3px 0px var(--shadow-color)' }}>
          My Toolbelt 🧰
        </h2>
        <p className="text-lg font-semibold max-w-2xl mx-auto">
          Click any skill to see my proficiency level!
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {portfolioData.skills.map((catGroup, cIdx) => (
          <div key={catGroup.category} className="playful-card p-6 md:p-8 relative">
            {/* Cute category label */}
            <div className="absolute -top-5 left-8 bg-[var(--color-yellow)] text-[#2b2d42] px-4 py-2 font-[var(--font-heading)] font-bold text-lg border-3 border-[var(--border-color)] rounded-xl shadow-[4px_4px_0px_var(--shadow-color)] transform -rotate-2">
              {catGroup.category}
            </div>

            <div className="mt-4 flex flex-wrap gap-4">
              {catGroup.items.map((skill, sIdx) => {
                const colorClass = pillColors[(cIdx + sIdx) % pillColors.length];
                const isActive = activeSkill === skill.name;

                return (
                  <div key={skill.name} className="flex flex-col items-center">
                    <button
                      onClick={() => handleSkillClick(skill.name)}
                      className={`font-[var(--font-heading)] font-bold text-lg px-6 py-3 rounded-full border-3 border-[var(--border-color)] transition-all duration-200 ${colorClass} ${
                        isActive 
                          ? "shadow-[inset_4px_4px_0px_rgba(0,0,0,0.2)] transform translate-y-1" 
                          : "shadow-[4px_4px_0px_var(--shadow-color)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_var(--shadow-color)]"
                      }`}
                    >
                      {skill.name}
                    </button>

                    {/* Fun pop-up progress bar */}
                    {isActive && (
                      <div className="mt-4 w-48 bg-[var(--bg-primary)] border-3 border-[var(--border-color)] rounded-2xl p-3 shadow-[4px_4px_0px_var(--shadow-color)] animate-in slide-in-from-top-4 fade-in duration-300 relative">
                        {/* Little triangle pointing up */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[var(--bg-primary)] border-t-3 border-l-3 border-[var(--border-color)] transform rotate-45"></div>
                        
                        <div className="flex items-center justify-between mb-2 relative z-10">
                          <span className="font-bold text-sm">Proficiency</span>
                          <span className="font-[var(--font-heading)] font-bold text-[var(--color-magenta)]">{skill.level}/10</span>
                        </div>
                        
                        <div className="flex gap-1 h-3 relative z-10">
                          {[...Array(10)].map((_, i) => (
                            <div
                              key={i}
                              className={`flex-1 rounded-sm border border-[var(--border-color)] ${
                                i < skill.level ? "bg-[var(--color-cyan)] shadow-[1px_1px_0px_var(--shadow-color)]" : "bg-transparent"
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
        ))}
      </div>
    </section>
  );
}
