import React from "react";
import { portfolioData } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./Icons";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-14 px-6 border-t border-[var(--border-color)] bg-[var(--bg-primary)]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand info */}
        <div className="text-center md:text-left">
          <h2 className="text-sm font-semibold text-[var(--text-main)] tracking-tight mb-2">
            Benaka B
          </h2>
          <p className="text-xs text-[var(--text-muted)] max-w-xs leading-relaxed">
            Java Full Stack Developer designing scalable systems and responsive interfaces.
          </p>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-6">
          {[
            { href: portfolioData.personalInfo.github, icon: <GithubIcon size={16} />, label: "GitHub" },
            { href: portfolioData.personalInfo.linkedin, icon: <LinkedinIcon size={16} />, label: "LinkedIn" },
            { href: portfolioData.personalInfo.instagram, icon: <InstagramIcon size={16} />, label: "Instagram" },
            { href: `mailto:${portfolioData.personalInfo.email}`, icon: <Mail size={16} />, label: "Email" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              title={social.label}
              className="text-[var(--text-dim)] hover:text-[var(--text-main)] transition-colors duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-[var(--border-color)] text-center text-[10px] text-[var(--text-dim)] tracking-wider uppercase">
        © {new Date().getFullYear()} Benaka B · Built with precision
      </div>
    </footer>
  );
}
