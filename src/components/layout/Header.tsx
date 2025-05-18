// src/components/layout/Header.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CodeXml } from 'lucide-react'; // Using CodeXml as a logo icon, fitting for a developer portfolio

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 group">
          <CodeXml className="h-7 w-7 text-primary transition-transform group-hover:rotate-[25deg] group-hover:scale-110" />
          <span className="text-xl font-bold tracking-tight sm:text-2xl group-hover:text-primary transition-colors">PersonaVerse</span>
        </Link>
        <nav className="hidden items-center gap-1 sm:flex">
          <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground transition-all hover:-translate-y-0.5">
            <Link href="#about">About</Link>
          </Button>
          <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground transition-all hover:-translate-y-0.5">
            <Link href="#projects">Projects</Link>
          </Button>
          <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground transition-all hover:-translate-y-0.5">
            <Link href="#contact">Contact</Link>
          </Button>
        </nav>
        {/* Basic Mobile Menu (can be expanded with Sheet component from shadcn/ui if needed) */}
        <div className="sm:hidden">
           <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-foreground">
             <Link href="#contact"> {/* Simple link for mobile, ideally a menu toggle */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
             </Link>
           </Button>
        </div>
      </div>
    </header>
  );
}
