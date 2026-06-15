import React from "react";
import { portfolioData } from "../data/portfolioData";
import { ExternalLink, Code2 } from "lucide-react";

export default function Projects() {
  const bgColors = [
    "bg-[var(--color-magenta)]",
    "bg-[var(--color-cyan)]",
    "bg-[var(--color-yellow)]",
    "bg-[var(--color-purple)]"
  ];

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-[var(--font-heading)] font-bold mb-4 text-[var(--color-magenta)]" style={{ textShadow: '3px 3px 0px var(--shadow-color)' }}>
          My Creations 🎨
        </h2>
        <p className="text-lg font-semibold max-w-2xl mx-auto">
          Some of the cool things I've built. Hover over them to see them bounce!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {portfolioData.projects.map((project, idx) => {
          const accentColorClass = bgColors[idx % bgColors.length];
          const isYellow = accentColorClass.includes("yellow") || accentColorClass.includes("cyan");
          const textColorClass = isYellow ? "text-[#2b2d42]" : "text-white";

          return (
            <div key={project.id} className="playful-card flex flex-col overflow-hidden group">
              {/* Card Header (Colorful Block) */}
              <div className={`${accentColorClass} ${textColorClass} p-6 border-b-3 border-[var(--border-color)]`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold border-2 border-current px-3 py-1 rounded-full text-sm bg-black/10">
                    {project.category}
                  </span>
                  <Code2 size={24} />
                </div>
                <h3 className="text-3xl font-[var(--font-heading)] font-bold mb-2">
                  {project.name}
                </h3>
              </div>
              
              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow bg-[var(--bg-secondary)]">
                <p className="text-base font-medium mb-6 flex-grow">
                  {project.description}
                </p>
                
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-[var(--bg-primary)] border-2 border-[var(--border-color)] rounded-xl text-sm font-bold shadow-[2px_2px_0px_var(--shadow-color)]">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="playful-btn bg-[var(--bg-primary)] !py-2 !px-4 text-sm flex-1">
                    GitHub Repo
                  </a>
                  {project.liveDemo !== "#" && (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="playful-btn bg-[var(--color-yellow)] !py-2 !px-4 text-sm flex-1">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
