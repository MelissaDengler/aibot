import React, { useState, useEffect } from 'react';

interface ScrollProgressProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

export default function ScrollProgress({ containerRef }: ScrollProgressProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const progress = (container.scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute right-0 top-0 h-full w-1 bg-charcoal-700/30">
      <div 
        className="bg-silver-500/50 w-full transition-all duration-150"
        style={{ height: `${scrollProgress}%` }}
      />
    </div>
  );
} 