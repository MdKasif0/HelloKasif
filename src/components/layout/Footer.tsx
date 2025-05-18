// src/components/layout/Footer.tsx
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 text-center border-t border-border/40 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-6 mb-4">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub" 
            className="text-muted-foreground hover:text-primary transition-all hover:scale-125 hover:-translate-y-1"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn" 
            className="text-muted-foreground hover:text-primary transition-all hover:scale-125 hover:-translate-y-1"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Twitter"
            className="text-muted-foreground hover:text-primary transition-all hover:scale-125 hover:-translate-y-1"
          >
            <Twitter size={24} />
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} PersonaVerse. Crafted with passion & pixels.
        </p>
      </div>
    </footer>
  );
}
