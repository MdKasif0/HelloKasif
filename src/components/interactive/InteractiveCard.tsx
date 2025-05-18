// src/components/interactive/InteractiveCard.tsx
'use client';

import type { ReactNode } from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  asChild?: boolean;
}

export default function InteractiveCard({ children, className, asChild = false }: InteractiveCardProps) {
  const Comp = asChild ? "div" : Card; // Using div if asChild to avoid Card within Card issues from parent
                                        // Typically Card would be the root. If using as a generic wrapper, div is fine.
                                        // For this app, Card is appropriate.

  return (
    <Card // Reverted to always use Card, asChild logic is complex for this use case.
      className={cn(
        "bg-card/70 backdrop-blur-sm border-border/50 shadow-lg rounded-xl overflow-hidden",
        "transition-all duration-300 ease-out transform-style-preserve-3d", // Added transform-style
        "hover:shadow-primary/30 hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-2 hover:border-primary/70", // Enhanced hover effect
        className
      )}
    >
      {children}
    </Card>
  );
}
