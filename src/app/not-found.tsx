// src/app/not-found.tsx
import { Button } from '@/components/ui/button';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-background text-foreground">
      <div className="mb-8 animate-in fade-in zoom-in-90 duration-700">
        <Image 
          src="https://placehold.co/300x300.png" 
          alt="Lost in Cyberspace" 
          width={300} 
          height={300} 
          className="rounded-full shadow-2xl"
          data-ai-hint="confused robot astronaut"
        />
      </div>
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
        <h1 className="font-mono text-6xl md:text-8xl font-extrabold text-primary mb-4">
          404
        </h1>
        <h2 className="font-mono text-3xl md:text-4xl font-bold mb-4 text-balance">
          Oops! Looks like you've ventured into uncharted territory.
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance">
          The page you're looking for might have been abducted by aliens, moved to a different dimension, or perhaps it never existed in this verse.
        </p>
        <Button 
          asChild 
          size="lg" 
          className="bg-gradient-to-r from-orange-400 via-pink-500 to-fuchsia-500 text-black font-semibold hover:opacity-90 group rounded-lg px-8 py-3 text-lg shadow-lg hover:shadow-pink-500/40 transition-all duration-300 transform hover:scale-105"
        >
          <Link href="/">
            <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
            Return to Home Base
          </Link>
        </Button>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center text-sm text-muted-foreground animate-in fade-in duration-700 delay-500">
        <AlertTriangle size={16} className="mr-2 text-yellow-500" />
        <span>Navigational anomaly detected. Recalibrating...</span>
      </div>
    </div>
  );
}
