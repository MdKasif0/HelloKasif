// src/components/interactive/ScrollProgressBar.tsx
'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export default function ScrollProgressBar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
    
    // Ensure scrolled is between 0 and 100
    const percentage = Math.min(Math.max(scrolled, 0), 100);
    setScrollPercentage(percentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Call handleScroll once on mount to set initial state if page is already scrolled
    handleScroll(); 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 z-[60] h-1 w-full bg-transparent transition-opacity duration-300",
        scrollPercentage > 0 ? "opacity-100" : "opacity-0" // Only show if scrolled
      )}
    >
      <div
        className="h-full bg-gradient-to-r from-primary to-accent shadow-md"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
}
