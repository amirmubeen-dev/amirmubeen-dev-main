
import { useState, useEffect } from 'react';

const titles = [
  "Amir Mubeen",
  "Web Developer",
  "Software Developer",
  "App Developer"
];

const AnimatedTitle = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    
    if (isTyping && !isDeleting) {
      if (displayText.length < currentTitle.length) {
        const timeoutId = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timeoutId);
      } else {
        setIsTyping(false);
        const timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timeoutId);
      }
    }

    if (isDeleting) {
      if (displayText.length > 0) {
        const timeoutId = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeoutId);
      } else {
        setIsDeleting(false);
        setIsTyping(true);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }
  }, [displayText, currentTitleIndex, isTyping, isDeleting]);

  return (
    <span className="text-foreground/90 inline-block min-w-[200px]">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default AnimatedTitle;
