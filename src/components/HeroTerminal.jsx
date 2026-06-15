import React, { useState, useEffect } from "react";

export default function HeroTerminal() {
  const [output, setOutput] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);

  const codeLines = [
    "// Compiling Developer Profile...",
    "javac BenakaB.java",
    "java BenakaB",
    "",
    "Loading Technical Skills...",
    "=====================================",
    "✔ Languages:  Java, JavaScript, SQL",
    "✔ Frontend:   React.js, Tailwind CSS",
    "✔ Databases:  MySQL, MongoDB",
    "✔ Core OOPS:  OOPs, DBMS, SDLC",
    "=====================================",
    "Status:       Ready to collaborate!",
    "Location:     Mandya, Karnataka, India",
    "🚀 Let's build something awesome!"
  ];

  useEffect(() => {
    if (lineIndex < codeLines.length) {
      const timeout = setTimeout(() => {
        setOutput((prev) => [...prev, codeLines[lineIndex]]);
        setLineIndex((prev) => prev + 1);
      }, lineIndex < 4 ? 450 : 180);
      return () => clearTimeout(timeout);
    }
  }, [lineIndex]);

  return (
    <div className="w-full font-mono text-xs sm:text-sm bg-slate-100 dark:bg-slate-950/90 p-5 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-md dark:shadow-2xl h-64 overflow-y-auto">
      <div className="flex items-center gap-2 mb-4 border-b border-slate-300 dark:border-slate-800/60 pb-2">
        <span className="w-3 h-3 rounded-full bg-rose-500"></span>
        <span className="w-3 h-3 rounded-full bg-amber-500"></span>
        <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
        <span className="text-slate-500 text-xs ml-2 select-none">bash - developer-info</span>
      </div>
      <div className="space-y-1.5 text-slate-700 dark:text-slate-300 text-left">
        {output.map((line, idx) => {
          if (line.startsWith("//")) {
            return <p key={idx} className="text-slate-500">{line}</p>;
          }
          if (line.startsWith("javac") || line.startsWith("java ")) {
            return (
              <p key={idx} className="text-blue-600 dark:text-blue-400">
                <span className="text-emerald-500 select-none mr-2">$</span>
                {line}
              </p>
            );
          }
          if (line.startsWith("✔")) {
            return <p key={idx} className="text-emerald-600 dark:text-emerald-400">{line}</p>;
          }
          if (line.startsWith("🚀")) {
            return <p key={idx} className="text-amber-500 dark:text-amber-400 font-bold animate-pulse">{line}</p>;
          }
          return <p key={idx}>{line}</p>;
        })}
        {lineIndex < codeLines.length && (
          <span className="inline-block w-2.5 h-4 bg-blue-500 animate-pulse ml-0.5 align-middle"></span>
        )}
      </div>
    </div>
  );
}
