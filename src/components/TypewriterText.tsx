import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  delay = 0,
  speed = 50,
  className = '',
}) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
        timeout = setTimeout(typeText, speed);
      } else {
        setShowCursor(false);
      }
    };

    const startTyping = setTimeout(() => {
      typeText();
    }, delay);

    return () => {
      clearTimeout(startTyping);
      clearTimeout(timeout);
    };
  }, [text, delay, speed]);

  useEffect(() => {
    if (showCursor) {
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);

      return () => clearInterval(cursorInterval);
    }
  }, [showCursor]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: showCursor ? 1 : 0 }}
        className="text-blue-400"
      >
        |
      </motion.span>
    </span>
  );
};

export default TypewriterText;