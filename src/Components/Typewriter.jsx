import { useState, useEffect } from "react";

function Typewriter({ lines = [], speed = 50, delay = 1000 }) {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (!Array.isArray(lines) || lineIndex >= lines.length) return;

    const current = lines[lineIndex] || "";
    if (charIndex < current.length) {
      const timeout = setTimeout(() => {
        setCurrentLine((prev) => prev + current[charIndex]);
        setCharIndex(charIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, current]);
        setCurrentLine("");
        setCharIndex(0);
        setLineIndex(lineIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, lineIndex, lines, speed, delay]);

  return (
    <div className="text-lg px-6 max-w-md mx-auto sm:mx-0 leading-relaxed space-y-2">
      {displayedLines.map((line, i) => (
        <p key={i}>{line}</p>
      ))}
      {lineIndex < lines.length && (
        <p>
          {currentLine}
          <span className="typewriter-cursor"></span>
        </p>
      )}
    </div>
  );
}

export default Typewriter;
