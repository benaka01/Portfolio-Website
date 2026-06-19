import React from "react";
import { Download, ArrowUpRight } from "lucide-react";
import profilePhoto from "../assets/Photo.jpeg";

export default function Hero({ openContactModal }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-14 pb-24 px-6 overflow-hidden">

      {/* Radial glow behind content */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[var(--glow-color)] blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl w-full mx-auto">

        {/* Top label row */}
        <div className="flex items-center gap-3 mb-12">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span className="section-label">Available for Opportunities</span>
        </div>

        {/* Main hero grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">

          {/* Text block */}
          <div>
            <h1 className="text-[clamp(2.8rem,7vw,5.5rem)] font-semibold leading-[1.0] tracking-[-0.05em] text-[var(--text-main)] mb-6">
              Benaka B
            </h1>

            <p className="text-[var(--text-muted)] text-base md:text-lg font-normal leading-relaxed max-w-lg mb-2" style={{ letterSpacing: "-0.01em" }}>
              Java Full Stack Developer building scalable backends, reactive UIs, and clean software architecture.
            </p>

            <p className="text-[var(--text-dim)] text-sm leading-relaxed max-w-md mb-10" style={{ letterSpacing: "-0.01em" }}>
              Specialized in Java · Spring Boot · React · MySQL · MongoDB. Open to roles in product engineering and full-stack development.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={openContactModal}
                className="btn-primary text-sm cursor-pointer"
              >
                Get in touch
                <ArrowUpRight size={14} />
              </button>

              <a
                href="/Benaka_Final_JFSD.pdf"
                download="Benaka_B_Resume.pdf"
                className="btn-secondary text-sm cursor-pointer"
              >
                <Download size={14} />
                Resume
              </a>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-8 mt-14 pt-8 border-t border-[var(--border-color)]">
              {[
                { val: "4+", label: "Projects" },
                { val: "2+", label: "Internships" },
                { val: "100+", label: "LeetCode" },
                { val: "800+", label: "Commits" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-xl font-semibold text-[var(--text-main)] tracking-tight" style={{ letterSpacing: "-0.04em" }}>{s.val}</div>
                  <div className="text-xs text-[var(--text-dim)] mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile photo */}
          <div className="lg:flex hidden flex-col items-center gap-5">
            <div className="relative w-52 h-52">
              {/* Border ring */}
              <div className="absolute inset-0 rounded-2xl border border-[var(--border-color)]"></div>
              <img
                src={profilePhoto}
                alt="Benaka B"
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Location tag */}
            <div className="flex items-center gap-2 text-xs text-[var(--text-dim)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--border-hover)] inline-block"></span>
              Mandya, Karnataka, India
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
