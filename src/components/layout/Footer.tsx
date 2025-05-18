// src/components/layout/Footer.tsx
import { Github, Linkedin, Twitter, FileText } from 'lucide-react'; // Added FileText for Now page
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 text-center border-t border-border/40 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-6 mb-6">
          <a 
            href="#" // Updated to placeholder
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Jane Doe's GitHub profile (update link)" // Updated aria-label
            className="text-muted-foreground hover:text-primary transition-all hover:scale-125 hover:-translate-y-1"
          >
            <Github size={24} />
          </a>
          <a 
            href="#" // Updated to placeholder
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Jane Doe's LinkedIn profile (update link)" // Updated aria-label
            className="text-muted-foreground hover:text-primary transition-all hover:scale-125 hover:-translate-y-1"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="#" // Updated to placeholder
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Jane Doe's Twitter profile (update link)" // Updated aria-label
            className="text-muted-foreground hover:text-primary transition-all hover:scale-125 hover:-translate-y-1"
          >
            <Twitter size={24} />
          </a>
           <Link href="/now" aria-label="What I'm doing now" className="text-muted-foreground hover:text-primary transition-all hover:scale-125 hover:-translate-y-1">
            <FileText size={24} />
          </Link>
        </div>
        <nav className="mb-4 text-sm text-muted-foreground">
          <Link href="/now" className="hover:text-primary transition-colors">
            What I'm Doing Now
          </Link>
        </nav>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} PersonaVerse. Crafted with passion & pixels.
        </p>
      </div>
    </footer>
  );
}
