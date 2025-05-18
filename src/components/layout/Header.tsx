
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
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from '@/lib/utils';

const NAV_ITEMS_CONFIG = [
  { id: 'about', label: 'About', href: '/about' },
  { id: 'projects', label: 'Projects', href: '/projects' },
  { id: 'timeline', label: 'Timeline', href: '/timeline' },
  { id: 'achievements', label: 'Achievements', href: '/achievements' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];

// IDs of sections on the homepage for scrollspy
const HOMEPAGE_SECTION_IDS = ['hero', 'about', 'projects', 'timeline', 'achievements', 'contact'];

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
        setActiveSection(null); 
      }
      // For non-homepage, active section is determined by NavLink logic based on pathname
      const currentNavItem = NAV_ITEMS_CONFIG.find(item => item.href !== "/" && pathname.startsWith(item.href));
      if (currentNavItem) {
        setActiveSection(currentNavItem.id);
      } else if (pathname === "/") {
        setActiveSection("hero"); // Default to hero for homepage if no specific section matches
      } else {
        setActiveSection(null);
      }
      return;
    }

    // IntersectionObserver logic for homepage scrollspy
    const headerHeight = headerRef.current?.offsetHeight || 64; 
    const options = {
      root: null, 
      rootMargin: `-${headerHeight + 20}px 0px -40% 0px`, 
      threshold: 0.01, 
    };

    observer.current = new IntersectionObserver((entries) => {
      let currentSectionId: string | null = null;
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          currentSectionId = entry.target.id;
        }
      });

      if (currentSectionId) {
         setActiveSection(currentSectionId);
      } else if (window.scrollY < 200 && HOMEPAGE_SECTION_IDS.includes('hero')) { 
          setActiveSection('hero'); 
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
    let targetHref = href;
    let isActive = false;

    if (isHomepage) {
      targetHref = (id === 'hero' && href === '/') ? '/' : `/#${id}`; // Ensure hero section on homepage is just /
      isActive = activeSection === id;
    } else {
      // For subpages, active link is based on path starting with href
      // Or if the current pathname exactly matches the href (for '/')
      isActive = (href !== "/" && pathname.startsWith(href)) || (href === "/" && pathname === "/");
    }
    
    const baseClasses = "transition-all hover:-translate-y-0.5 py-1.5 px-2.5 sm:px-3";
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
              "w-full justify-start text-base",
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
        "transition-shadow duration-300 ease-in-out", 
        isScrolled ? "shadow-lg" : "shadow-none" 
      )}
    >
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 group" onClick={() => isHomepage && setActiveSection('hero')}>
          <CodeXml className="h-7 w-7 text-primary transition-transform group-hover:rotate-[25deg] group-hover:scale-110" />
          <span className="font-sans text-xl font-bold tracking-tight sm:text-2xl group-hover:text-primary transition-colors">PersonaVerse</span>
        </Link>
        
        <div className="flex items-center gap-0.5 sm:gap-1">
          <nav className="hidden items-center gap-0.5 sm:gap-1 sm:flex">
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
              className="text-muted-foreground hover:text-foreground transition-all hover:scale-110 hover:-translate-y-0.5 ml-1"
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
              <SheetContent side="right" className="w-[280px] bg-background/95 backdrop-blur-md pt-6">
                <SheetHeader className="mb-4 border-b pb-4">
                  <SheetTitle className="text-center text-lg font-semibold">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-2"> 
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

