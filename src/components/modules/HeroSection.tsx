// src/components/modules/HeroSection.tsx
'use client';

import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center px-4 py-16 sm:py-24 relative -mt-16 pt-16" // Adjust for header height
    >
      <div className="absolute inset-0 -z-10">
        {/* Optional: Add a subtle, large background element here like a very faint nebula or geometric pattern */}
      </div>
      <h1 
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight text-balance"
        style={{
          textShadow: '0 0 15px hsl(var(--primary) / 0.3), 0 0 30px hsl(var(--accent) / 0.2)',
        }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-br from-primary via-purple-400 to-accent animate-gradient-pulse">
          PersonaVerse
        </span>
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto text-balance">
        An immersive journey through creativity and code. Explore a portfolio that's more than just a page – it's an evolving digital space.
      </p>
      <Button 
        asChild 
        size="lg" 
        className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground group rounded-lg px-8 py-3 text-lg shadow-lg hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105"
      >
        <Link href="#about">
          Begin Exploration <ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
        </Link>
      </Button>
      <style jsx global>{`
        @keyframes gradient-pulse {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-pulse {
          background-size: 200% 200%;
          animation: gradient-pulse 5s ease infinite;
        }
      `}</style>
    </section>
  );
}
