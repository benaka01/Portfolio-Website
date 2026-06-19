import React from "react";
import { portfolioData } from "../data/portfolioData";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto w-full">
      <div className="mb-16">
        <span className="section-label mb-3 block">Projects</span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--text-main)] mb-4">
          Selected Work
        </h2>
        <p className="text-sm text-[var(--text-muted)] max-w-lg leading-relaxed">
          A collection of software systems and applications designed, developed, and deployed from scratch.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {portfolioData.projects.map((project) => (
          <div key={project.id} className="odyssey-card p-6 md:p-8 flex flex-col justify-between group min-h-[280px]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="tag-pill">{project.category}</span>
                <ArrowUpRight size={16} className="text-[var(--text-dim)] group-hover:text-[var(--text-main)] transition-colors duration-300" />
              </div>

              <h3 className="text-lg font-semibold text-[var(--text-main)] mb-2 tracking-tight group-hover:opacity-90">
                {project.name}
              </h3>

              <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6 font-normal">
                {project.description}
              </p>
            </div>

            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-[10px] font-mono text-[var(--text-dim)] border border-[var(--border-color)] px-2 py-0.5 rounded bg-[var(--bg-secondary)]">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs py-2 px-4 flex-1 text-center"
                >
                  <GithubIcon size={14} />
                  Code
                </a>
                {project.liveDemo !== "#" && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs py-2 px-4 flex-1 text-center"
                  >
                    <ExternalLink size={14} />
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
