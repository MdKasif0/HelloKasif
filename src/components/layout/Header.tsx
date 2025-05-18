// src/components/layout/Header.tsx
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CodeXml, Sun, Moon, Menu } from 'lucide-react'; // Using CodeXml as a logo icon, added Sun, Moon, Menu
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <SheetClose asChild>
      <Button variant="ghost" asChild className="w-full justify-start text-muted-foreground hover:text-foreground transition-all hover:-translate-y-0.5">
        <Link href={href}>{children}</Link>
      </Button>
    </SheetClose>
  );
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 group">
          <CodeXml className="h-7 w-7 text-primary transition-transform group-hover:rotate-[25deg] group-hover:scale-110" />
          <span className="font-sans text-xl font-bold tracking-tight sm:text-2xl group-hover:text-primary transition-colors">PersonaVerse</span>
        </Link>
        
        <div className="flex items-center gap-1">
          <nav className="hidden items-center gap-1 sm:flex">
            <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground transition-all hover:-translate-y-0.5">
              <Link href="#about">About</Link>
            </Button>
            <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground transition-all hover:-translate-y-0.5">
              <Link href="#projects">Projects</Link>
            </Button>
            <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground transition-all hover:-translate-y-0.5">
              <Link href="#testimonials">Testimonials</Link>
            </Button>
             <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground transition-all hover:-translate-y-0.5">
              <Link href="#timeline">Journey</Link>
            </Button>
            <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground transition-all hover:-translate-y-0.5">
              <Link href="#contact">Contact</Link>
            </Button>
          </nav>

          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="text-muted-foreground hover:text-foreground transition-all hover:scale-110 hover:-translate-y-0.5"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
          )}

          <div className="sm:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                  <Menu size={24} />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background/95 backdrop-blur-md">
                <nav className="flex flex-col gap-4 pt-8">
                  <NavLink href="#about">About</NavLink>
                  <NavLink href="#projects">Projects</NavLink>
                  <NavLink href="#testimonials">Testimonials</NavLink>
                  <NavLink href="#timeline">My Journey</NavLink>
                  <NavLink href="#achievements">Achievements</NavLink>
                  <NavLink href="#contact">Contact</NavLink>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
