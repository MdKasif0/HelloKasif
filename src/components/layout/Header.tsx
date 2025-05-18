// src/components/layout/Header.tsx
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CodeXml, Sun, Moon, Menu } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from '@/lib/utils';

const NAV_ITEMS_CONFIG = [
  { id: 'about', label: 'About', href: '/about' },
  { id: 'projects', label: 'Projects', href: '/projects' },
  { id: 'testimonials', label: 'Testimonials', href: '/testimonials' },
  { id: 'timeline', label: 'Timeline', href: '/timeline' },
  { id: 'achievements', label: 'Achievements', href: '/achievements' }, // Added Achievements here
  { id: 'contact', label: 'Contact', href: '/contact' },
];

// IDs of sections on the homepage for scrollspy
const HOMEPAGE_SECTION_IDS = ['hero', 'about', 'projects', 'testimonials', 'timeline', 'achievements', 'contact'];

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const isHomepage = pathname === '/';

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Set to true if scrolled more than 10px
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on mount to check initial scroll position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isHomepage || !mounted) {
      if (observer.current) {
        observer.current.disconnect();
      }
      setActiveSection(null);
      return;
    }

    const headerHeight = headerRef.current?.offsetHeight || 64;
    const options = {
      root: null,
      rootMargin: `-${headerHeight + 20}px 0px -40% 0px`, // Adjust bottom margin to prioritize sections higher in viewport
      threshold: 0.01, // A small part of the section needs to be visible
    };

    observer.current = new IntersectionObserver((entries) => {
      let currentSection: string | null = null;
      
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Prioritize the one that is most visible or the first one if multiple are barely visible
          // This simple logic takes the last one that becomes intersecting if scrolling down,
          // or the first one if scrolling up into a new section.
          currentSection = entry.target.id;
        }
      });

      if (currentSection) {
         setActiveSection(currentSection);
      } else if (window.scrollY < 200) { // Near top, hero or no specific section
          setActiveSection('hero'); // Or null if you have a distinct hero link
      }
    }, options);

    const { current: currentObserver } = observer;
    HOMEPAGE_SECTION_IDS.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        currentObserver?.observe(element);
      }
    });

    return () => {
      currentObserver?.disconnect();
    };
  }, [isHomepage, mounted]);


  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const NavLink = ({ id, href, children, isMobile = false }: { id: string; href: string; children: React.ReactNode, isMobile?: boolean }) => {
    let targetHref = href;
    let isActive = false;

    if (isHomepage) {
      targetHref = (id === 'hero' && href === '/') ? '/' : `/#${id}`; // Special handling for hero if it links to /
      isActive = activeSection === id;
    } else {
      isActive = href !== "/" && pathname.startsWith(href);
      if (href === "/" && pathname === "/") isActive = true; // Home link active on homepage
    }
    
    const baseClasses = "transition-all hover:-translate-y-0.5 py-1.5 px-2.5 sm:px-3"; // Adjusted padding
    const activeClasses = "text-primary font-semibold";
    const inactiveClasses = "text-muted-foreground hover:text-foreground";
    
    const linkContent = (
        <Link href={targetHref}>{children}</Link>
    );

    if (isMobile) {
      return (
        <SheetClose asChild>
          <Button 
            variant="ghost" 
            asChild 
            className={cn(
              "w-full justify-start text-base", // Slightly larger text for mobile
              baseClasses,
              isActive ? activeClasses : inactiveClasses
            )}
          >
            {linkContent}
          </Button>
        </SheetClose>
      );
    }

    return (
      <Button 
        variant="ghost" 
        asChild 
        className={cn(
          baseClasses,
          isActive ? activeClasses : inactiveClasses
        )}
      >
        {linkContent}
      </Button>
    );
  };
  
  return (
    <header 
      ref={headerRef} 
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60",
        "transition-shadow duration-300 ease-in-out", // Added for smooth shadow transition
        isScrolled ? "shadow-lg" : "shadow-none" // Apply shadow when scrolled
      )}
    >
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 group" onClick={() => isHomepage && setActiveSection('hero')}>
          <CodeXml className="h-7 w-7 text-primary transition-transform group-hover:rotate-[25deg] group-hover:scale-110" />
          <span className="font-sans text-xl font-bold tracking-tight sm:text-2xl group-hover:text-primary transition-colors">PersonaVerse</span>
        </Link>
        
        <div className="flex items-center gap-0.5 sm:gap-1"> {/* Reduced gap slightly */}
          <nav className="hidden items-center gap-0.5 sm:gap-1 sm:flex"> {/* Reduced gap slightly */}
            {NAV_ITEMS_CONFIG.map(item => (
              <NavLink key={item.id} id={item.id} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="text-muted-foreground hover:text-foreground transition-all hover:scale-110 hover:-translate-y-0.5 ml-1" // Added small margin
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
              <SheetContent side="right" className="w-[280px] bg-background/95 backdrop-blur-md pt-12">
                <nav className="flex flex-col gap-2"> {/* Reduced gap */}
                   {NAV_ITEMS_CONFIG.map(item => (
                    <NavLink key={item.id} id={item.id} href={item.href} isMobile>
                      {item.label}
                    </NavLink>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
