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
    if (scrollableHeight <= 0) { // Page is not scrollable or barely scrollable
      setIsVisible(false);
      return;
    }
    // Calculate the scroll percentage
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
    // Call on mount to set initial state if page is already scrolled
    toggleVisibility(); 
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <Button
      variant="outline"
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full p-3 shadow-xl transition-all duration-300 ease-in-out transform", // Adjusted size and padding
        "border-2 border-primary/50 bg-background/80 backdrop-blur-md text-primary",
        "hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:border-primary hover:shadow-primary/30",
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-5 scale-90 pointer-events-none"
      )}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-6 w-6" /> {/* Adjusted icon size */}
    </Button>
  );
}
