// src/components/interactive/InteractiveCard.tsx
'use client';

import type { ReactNode } from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
}

// Create a motion-compatible version of the Card
// Card is a forwardRef component, so motion(Card) works.
const MotionCard = motion(Card);

export default function InteractiveCard({ children, className }: InteractiveCardProps) {
  return (
    <MotionCard
      className={cn(
        "bg-card/70 backdrop-blur-sm border-border/50 shadow-lg rounded-xl overflow-hidden",
        "transform-style-preserve-3d", // transform-style still relevant
        // CSS hover effects for properties Framer Motion isn't handling (like shadow, border)
        "hover:shadow-lg hover:shadow-green-500/40 hover:border-green-600/70", // Updated green shadow and border
        // Framer Motion handles scale and y-translation
        className
      )}
      whileHover={{ scale: 1.03, y: -8 }} // Framer Motion handles scale and y-translation
      transition={{ type: "spring", stiffness: 300, damping: 20 }} // Smooth spring animation for hover
    >
      {children}
    </MotionCard>
  );
}
