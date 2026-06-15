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
    <div className="relative min-h-screen overflow-hidden bg-[var(--bg-primary)] text-[var(--text-main)] transition-colors duration-300">
      {/* Animated SVG Background Blobs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[var(--color-cyan)] opacity-20 blob-shape-1 animate-float-blob blur-3xl mix-blend-multiply dark:mix-blend-screen"></div>
        <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-[var(--color-magenta)] opacity-20 blob-shape-2 animate-float-blob-reverse blur-3xl mix-blend-multiply dark:mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] bg-[var(--color-yellow)] opacity-20 blob-shape-1 animate-float-blob blur-3xl mix-blend-multiply dark:mix-blend-screen" style={{ animationDuration: '18s' }}></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar openContactModal={() => setIsContactOpen(true)} />
        
        {/* Flowing centered layout */}
        <main className="flex-grow w-full">
          <Hero openContactModal={() => setIsContactOpen(true)} />
          <Projects />
          <Skills />
          <Experience />
          <Education />
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
