import { useState, useEffect, useRef } from "react";

const technologies = [
  "React.js",
  "Next.js",
  "Node.js",
  "TypeScript",
  "MongoDB",
  "Express.js",
  "Docker",
  "Tailwind CSS",
  "PostgreSQL",
  "Firebase",
  "REST APIs",
];

export function TypingAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const currentTech = technologies[currentIndex];

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (displayText.length < currentTech.length) {
            setDisplayText(currentTech.slice(0, displayText.length + 1));
          } else {
            // Wait before deleting
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          // Deleting
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % technologies.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [displayText, isDeleting, currentIndex]);

  // Optimized cursor blink using CSS animation instead of motion
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 h-12">
      <span className="text-lg text-muted-foreground">Specialized in</span>
      <div className="relative min-w-[200px]">
        <span
          className="text-lg font-medium bg-gradient-to-r from-turquoise via-cyan to-blue-green bg-clip-text text-transparent"
          style={{
            textShadow: "0 0 30px rgba(0,212,212,0.3)",
          }}
        >
          {displayText}
          <span
            className={`inline-block w-0.5 h-5 bg-turquoise ml-1 align-middle transition-opacity duration-100 ${
              showCursor ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </span>
      </div>
    </div>
  );
}
