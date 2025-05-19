// src/components/interactive/ParticleBackground.tsx
'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';

const NUM_PARTICLES = 40; // Increased from 25

interface ParticleProps {
  windowSize: { width: number; height: number } | null;
}

const Particle = ({ windowSize }: ParticleProps) => {
  const [size, setSize] = useState(0);
  const [initialX, setInitialX] = useState(0);
  const [initialY, setInitialY] = useState(0);
  
  const animateX = useMemo(() => initialX + (Math.random() - 0.5) * 150, [initialX]);
  const animateY = useMemo(() => initialY + (Math.random() - 0.5) * 150, [initialY]);
  
  const duration = useMemo(() => Math.random() * 20 + 20, []); // 20-40s
  const delay = useMemo(() => Math.random() * 10, []); // 0-10s delay

  useEffect(() => {
    if (!windowSize) return;
    const { width: vw, height: vh } = windowSize;

    setSize(Math.random() * 2.5 + 1); // 1px to 3.5px, slightly larger max
    setInitialX(Math.random() * vw);
    setInitialY(Math.random() * vh);
  }, [windowSize]);

  if (!windowSize || size === 0) return null; // Don't render until effect runs and size is set

  return (
    <motion.div
      className="absolute rounded-full bg-accent/30 dark:bg-accent/40" // Changed from primary to accent
      initial={{ x: initialX, y: initialY, opacity: 0 }}
      animate={{ 
        x: animateX, 
        y: animateY, 
        opacity: 1 
      }}
      exit={{ opacity: 0 }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
        delay,
        opacity: { duration: 1.5, delay: delay + 0.5 }
      }}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default function ParticleBackground() {
  const [windowSize, setWindowSize] = useState<{width: number, height: number} | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    // Set initial size
    if (typeof window !== 'undefined') {
      handleResize();
    }
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Avoid rendering map if windowSize is not yet determined to prevent large number of initial null renders for particles
  if (!windowSize) {
    return null; 
  }

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden="true">
      {Array.from({ length: NUM_PARTICLES }).map((_, i) => (
        <Particle key={i} windowSize={windowSize} />
      ))}
    </div>
  );
}
