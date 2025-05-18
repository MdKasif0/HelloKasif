
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
  { id: 'achievements', label: 'Achievements', href: '/achievements' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];

// IDs of sections on the homepage for scrollspy
const HOMEPAGE_SECTION_IDS = ['about', 'projects', 'testimonials', 'timeline', 'achievements', 'contact'];

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  const isHomepage = pathname === '/';

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isHomepage || !mounted) {
      if (observer.current) {
        observer.current.disconnect();
      }
      setActiveSection(null); // Clear active section when not on homepage or not mounted
      return;
    }

    const headerHeight = headerRef.current?.offsetHeight || 64; // Default header height
    const options = {
      root: null,
      rootMargin: `-${headerHeight + 20}px 0px 0px 0px`, // Offset by header height + a bit more
      threshold: 0.2, // Trigger when 20% of the section is visible
    };

    observer.current = new IntersectionObserver((entries) => {
      let currentSection: string | null = null;
      let maxRatio = 0;

      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          currentSection = entry.target.id;
        }
      });
      
      // Fallback to first section if nothing is actively "most" intersecting (e.g. at top of page)
      // Or if scrolling up past all sections that would meet threshold
      if (currentSection) {
        setActiveSection(currentSection);
      } else {
         // If no section is intersecting, check scroll position
        if (window.scrollY < 200) { // Near the top, likely hero
            setActiveSection(null); // No specific section, or hero
        }
        // If scrolling down and no section is "active", the last activeSection will persist
        // If scrolling up and no section is "active", we might want to clear it or set to previous
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
  }, [isHomepage, mounted, pathname]);


  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const NavLink = ({ id, href, children, isMobile = false }: { id: string; href: string; children: React.ReactNode, isMobile?: boolean }) => {
    const targetHref = isHomepage ? `/#${id}` : href;
    let isActive = false;
    if (isHomepage) {
      isActive = activeSection === id;
    } else {
      // For subpages, check if pathname starts with the link's href
      // Ensure href is not just "/" to avoid highlighting all for home
      isActive = href !== "/" && pathname.startsWith(href);
      // Special case for the root path if needed, but logo handles home link
    }

    const baseClasses = "transition-all hover:-translate-y-0.5";
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
              "w-full justify-start",
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
    <header ref={headerRef} className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 group">
          <CodeXml className="h-7 w-7 text-primary transition-transform group-hover:rotate-[25deg] group-hover:scale-110" />
          <span className="font-sans text-xl font-bold tracking-tight sm:text-2xl group-hover:text-primary transition-colors">PersonaVerse</span>
        </Link>
        
        <div className="flex items-center gap-1">
          <nav className="hidden items-center gap-1 sm:flex">
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
