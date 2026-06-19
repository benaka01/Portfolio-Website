import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../ThemeContext";

export default function Navbar({ openContactModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className={`transition-all duration-300 ${scrolled ? "border-b border-[var(--border-color)] bg-[var(--bg-primary)]/90 backdrop-blur-md" : "bg-transparent"}`}>
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="font-semibold text-sm tracking-tight text-[var(--text-main)] hover:opacity-80 transition-colors" style={{ letterSpacing: "-0.02em" }}>
            Benaka B
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors duration-200"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 border border-[var(--border-color)] hover:border-[var(--border-hover)] rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors cursor-pointer"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={14} /> : <Moon size={14} />}
            </button>

            <button
              onClick={openContactModal}
              className="btn-primary text-xs px-4 py-2 cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-3">
            {/* Theme Toggle Button Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 border border-[var(--border-color)] hover:border-[var(--border-hover)] rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors cursor-pointer"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={14} /> : <Moon size={14} />}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors cursor-pointer"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-[var(--border-color)] bg-[var(--bg-primary)]/95 backdrop-blur-md">
          <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors py-2.5 border-b border-[var(--border-color)] last:border-0"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => { setIsOpen(false); openContactModal(); }}
              className="btn-primary text-xs py-2.5 mt-3 w-full cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
