// src/components/layout/MainLayout.tsx
'use client';

import type { ReactNode } from 'react';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function MainLayout({ children, className }: MainLayoutProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 }); // Default to center
  const layoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (layoutRef.current) {
        const rect = layoutRef.current.getBoundingClientRect();
        // Ensure x and y are clamped between 0 and 1 to avoid gradient issues at edges
        const x = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1);
        const y = Math.min(Math.max((event.clientY - rect.top) / rect.height, 0), 1);
        setMousePosition({ x, y });
      } else {
        // Fallback if ref is not available, center the effect
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

  return (
    <div
      ref={layoutRef}
      className={cn(
        "min-h-screen w-full bg-background text-foreground overflow-x-hidden perspective-1000px transition-colors duration-500",
        className
      )}
      style={{
        // Dynamic background gradient simulating a soft light source following the mouse
        // The light source is subtle and spread out
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
