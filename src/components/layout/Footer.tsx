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
            href="https://github.com/MdKasif0" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Md Kasif Uddin's GitHub profile" 
            className="text-muted-foreground hover:text-primary transition-all hover:scale-125 hover:-translate-y-1"
          >
            <Github size={24} />
          </a>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Md Kasif Uddin's LinkedIn profile (update link)" 
            className="text-muted-foreground hover:text-primary transition-all hover:scale-125 hover:-translate-y-1"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Md Kasif Uddin's Twitter profile (update link)" 
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
          &copy; {currentYear} HelloKasif. Crafted with passion & pixels.
        </p>
      </div>
    </footer>
  );
}
