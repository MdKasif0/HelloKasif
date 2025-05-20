
// src/components/layout/BottomNavBar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, UserCircle2, LayoutGrid, Award, Settings2, GanttChartSquare, Mail, Sun, Moon, MonitorSmartphone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const NAV_ITEMS_BOTTOM = [
  { id: 'home', label: 'Home', href: '/', icon: Home },
  { id: 'about', label: 'About', href: '/about', icon: UserCircle2 },
  { id: 'projects', label: 'Projects', href: '/projects', icon: LayoutGrid },
  { id: 'achievements', label: 'Achievements', href: '/achievements', icon: Award },
  // Settings tab will be handled separately as a SheetTrigger
];

export default function BottomNavBar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav
      className={cn(
        "fixed bottom-4 left-4 right-4 z-[90] flex items-center justify-center border border-border/40 bg-background/80 backdrop-blur-lg sm:hidden",
        "h-16",
        "shadow-xl rounded-xl"
      )}
    >
      <div className="flex w-full max-w-md items-center justify-around px-1">
        {NAV_ITEMS_BOTTOM.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-0.5 p-2 rounded-md transition-colors duration-200 ease-in-out",
                "text-muted-foreground hover:text-primary flex-1 min-w-0",
                active ? "text-primary" : "hover:bg-muted/50"
              )}
              aria-current={active ? "page" : undefined}
            >
              <Icon size={22} strokeWidth={active ? 2.5 : 2} />
              <span className={cn("text-[0.65rem] font-medium", active ? "font-semibold" : "font-normal")}>
                {item.label}
              </span>
            </Link>
          );
        })}
        
        {/* Settings Sheet Trigger */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className={cn(
                "flex flex-col items-center justify-center gap-0.5 p-2 rounded-md transition-colors duration-200 ease-in-out",
                "text-muted-foreground hover:text-primary flex-1 min-w-0 hover:bg-muted/50"
              )}
              aria-label="Open settings menu"
            >
              <Settings2 size={22} strokeWidth={2} />
              <span className="text-[0.65rem] font-medium">Settings</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="rounded-t-2xl p-0 pb-4 bg-background/95 backdrop-blur-md">
            <SheetHeader className="p-4 border-b border-border/30">
              <SheetTitle className="font-mono text-center text-lg">Settings</SheetTitle>
            </SheetHeader>
            <div className="p-4">
              {/* Theme Toggle - Moved to the top */}
              <div 
                onClick={toggleTheme}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleTheme(); }}}
                className="flex w-full items-center justify-between gap-3 p-3 rounded-lg hover:bg-muted transition-colors cursor-pointer text-sm font-medium mb-3"
                aria-label={`Switch to ${mounted ? (theme === 'dark' ? 'light' : 'dark') : ''} mode. Current theme: ${mounted ? theme : 'loading'}.`}
              >
                <div className="flex items-center gap-3">
                  {mounted ? (
                    theme === 'dark' ? (
                      <Sun size={20} className="text-primary" />
                    ) : (
                      <Moon size={20} className="text-primary" />
                    )
                  ) : (
                    <MonitorSmartphone size={20} className="text-primary" /> 
                  )}
                  <span>
                    {mounted ? (theme === 'dark' ? 'Light Mode' : 'Dark Mode') : 'Appearance'}
                  </span>
                </div>
                {mounted && <span className="text-xs text-muted-foreground capitalize bg-muted px-2 py-1 rounded-md">{theme}</span>}
              </div>

              <div className="border-t border-border/30"></div> {/* Separator */}

              <div className="mt-3 space-y-2"> {/* Group for links */}
                <SheetClose asChild>
                  <Link 
                    href="/timeline" 
                    className="flex w-full items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors text-sm font-medium"
                    aria-label="View Timeline"
                  >
                    <GanttChartSquare size={20} className="text-primary" />
                    <span>Timeline</span>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link 
                    href="/contact" 
                    className="flex w-full items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors text-sm font-medium"
                    aria-label="Contact Me"
                  >
                    <Mail size={20} className="text-primary" />
                    <span>Contact</span>
                  </Link>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
