
// src/components/layout/MainLayout.tsx
'use client';

import type { ReactNode } from 'react';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import BackToTopButton from '@/components/interactive/BackToTopButton';
import ScrollProgressBar from '@/components/interactive/ScrollProgressBar'; // Added ScrollProgressBar

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function MainLayout({ children, className }: MainLayoutProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const layoutRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (layoutRef.current) {
        const rect = layoutRef.current.getBoundingClientRect();
        const x = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1);
        const y = Math.min(Math.max((event.clientY - rect.top) / rect.height, 0), 1);
        setMousePosition({ x, y });
      } else {
        const x = Math.min(Math.max(event.clientX / window.innerWidth, 0), 1);
        const y = Math.min(Math.max(event.clientY / window.innerHeight, 0), 1);
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.altKey && event.key.toLowerCase() === 't') {
        event.preventDefault();
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mounted, theme, setTheme]);

  return (
    <div
      ref={layoutRef}
      className={cn(
        "min-h-screen w-full bg-background text-foreground overflow-x-hidden perspective-1000px transition-colors duration-500",
        className
      )}
      style={{
        // Enhanced radial gradient effect for more dynamism
        backgroundImage: `radial-gradient(circle at ${mousePosition.x * 100}% ${
          mousePosition.y * 100 
        }%, hsl(var(--primary) / 0.1), transparent 40%), radial-gradient(circle at ${ // Increased opacity, smaller spread
          (1 - mousePosition.x) * 100 
        }% ${ (1 - mousePosition.y) * 100}%, hsl(var(--accent) / 0.07), transparent 50%)`, // Increased opacity, smaller spread
      }}
    >
      <ScrollProgressBar /> {/* Added ScrollProgressBar here */}
      {children}
      <BackToTopButton />
    </div>
  );
}
