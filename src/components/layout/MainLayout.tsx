// src/components/layout/MainLayout.tsx
'use client';

import type { ReactNode } from 'react';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes'; // Import useTheme

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function MainLayout({ children, className }: MainLayoutProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 }); // Default to center
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
    if (!mounted) return; // Ensure theme is only toggled client-side

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.altKey && event.key.toLowerCase() === 't') {
        event.preventDefault(); // Prevent any default browser action for Alt+T
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
        backgroundImage: `radial-gradient(circle at ${mousePosition.x * 100}% ${
          mousePosition.y * 100 
        }%, hsl(var(--primary) / 0.08), transparent 50%), radial-gradient(circle at ${
          (1 - mousePosition.x) * 100 
        }% ${ (1 - mousePosition.y) * 100}%, hsl(var(--accent) / 0.05), transparent 60%)`,
      }}
    >
      {children}
    </div>
  );
}
