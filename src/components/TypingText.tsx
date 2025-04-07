import React, { useState, useEffect } from 'react';

interface TypingTextProps {
  text: string;
  speed?: number;
}

export default function TypingText({ text, speed = 50 }: TypingTextProps) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    setDisplayText('');
    
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(prev => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className="font-mono">
      {displayText}
      {displayText.length < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
} 