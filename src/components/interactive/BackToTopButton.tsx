// src/components/interactive/BackToTopButton.tsx
'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    const scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (scrollableHeight <= 0) { 
      setIsVisible(false);
      return;
    }
    const scrollPercentage = (window.scrollY / scrollableHeight) * 100;

    if (scrollPercentage > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility(); 
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <Button
      variant="outline"
      size="icon" // Use icon size for a more compact default
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full p-0 shadow-lg transition-all duration-300 ease-in-out transform", 
        "border-2 border-border/60 bg-background/70 text-muted-foreground backdrop-blur-md", // Refined initial state
        "hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-primary/30 hover:scale-110", // Refined hover state
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-5 scale-90 pointer-events-none"
      )}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-6 w-6" />
    </Button>
  );
}
