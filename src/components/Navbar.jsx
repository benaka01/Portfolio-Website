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
    <nav className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 pointer-events-none">
      <div className={`pointer-events-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${
        scrolled ? "bg-[var(--bg-secondary)] border-[3px] border-[var(--border-color)] shadow-[4px_4px_0px_var(--shadow-color)]" : "bg-transparent"
      } w-full max-w-4xl`}>
        
        {/* Logo */}
        <a href="#" className="font-[var(--font-heading)] font-bold text-2xl tracking-wide text-[var(--color-magenta)]" style={{ textShadow: '2px 2px 0px var(--border-color)' }}>
          Benaka B
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 font-[var(--font-heading)] font-medium text-[1.1rem]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-[var(--color-cyan)] transition-colors hover:underline decoration-4 underline-offset-4 decoration-[var(--color-yellow)]">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 bg-[var(--bg-primary)] border-2 border-[var(--border-color)] rounded-full hover:bg-[var(--color-yellow)] hover:scale-110 transition-all shadow-[2px_2px_0px_var(--shadow-color)]"
            >
              {isDark ? <Sun size={20} className="text-[#2b2d42]" /> : <Moon size={20} className="text-[#2b2d42]" />}
            </button>
            
            <button
              onClick={openContactModal}
              className="playful-btn text-sm px-5 py-2 bg-[var(--color-cyan)] text-[#2b2d42]"
            >
              Say Hi! 👋
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 bg-[var(--bg-primary)] border-2 border-[var(--border-color)] rounded-full shadow-[2px_2px_0px_var(--shadow-color)]"
          >
             {isDark ? <Sun size={20} className="text-[#2b2d42]" /> : <Moon size={20} className="text-[#2b2d42]" />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 bg-[var(--color-yellow)] border-2 border-[var(--border-color)] rounded-xl shadow-[2px_2px_0px_var(--shadow-color)] text-[#2b2d42]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute top-20 left-4 right-4 bg-[var(--bg-secondary)] border-[3px] border-[var(--border-color)] rounded-3xl p-6 shadow-[8px_8px_0px_var(--shadow-color)] pointer-events-auto md:hidden">
          <ul className="flex flex-col gap-4 font-[var(--font-heading)] text-xl text-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block p-3 rounded-xl hover:bg-[var(--color-magenta)] hover:text-white transition-colors border-2 border-transparent hover:border-[var(--border-color)]"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => { setIsOpen(false); openContactModal(); }}
                className="w-full playful-btn bg-[var(--color-cyan)] mt-4"
              >
                Say Hi! 👋
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
