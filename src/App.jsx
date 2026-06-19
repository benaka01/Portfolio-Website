import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import ContactModal from "./components/ContactModal";
import Footer from "./components/Footer";

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-main)] overflow-x-hidden transition-colors duration-300">
      {/* Subtle dot grid background */}
      <div className="fixed inset-0 grid-bg opacity-100 pointer-events-none z-0"></div>

      {/* Top glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[var(--glow-color)] blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar openContactModal={() => setIsContactOpen(true)} />

        <main className="flex-grow w-full">
          <Hero openContactModal={() => setIsContactOpen(true)} />

          <div className="divider max-w-5xl mx-auto opacity-50"></div>
          <Projects />

          <div className="divider max-w-5xl mx-auto opacity-50"></div>
          <Skills />

          <div className="divider max-w-5xl mx-auto opacity-50"></div>
          <Experience />

          <div className="divider max-w-5xl mx-auto opacity-50"></div>
          <Education />

          <div className="divider max-w-5xl mx-auto opacity-50"></div>
          <Certifications />
        </main>

        <Footer />

        <ContactModal
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />
      </div>
    </div>
  );
}

export default App;
