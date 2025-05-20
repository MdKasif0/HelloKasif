// src/components/layout/BottomNavBar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, UserCircle2, LayoutGrid, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_ITEMS_BOTTOM = [
  { id: 'home', label: 'Home', href: '/', icon: Home },
  { id: 'about', label: 'About', href: '/about', icon: UserCircle2 },
  { id: 'projects', label: 'Projects', href: '/projects', icon: LayoutGrid },
  { id: 'contact', label: 'Contact', href: '/contact', icon: Mail },
];

export default function BottomNavBar() {
  const pathname = usePathname();

  // Determine if we are on the homepage and if any section is active (for #hash links)
  const isHomepage = pathname === '/';
  
  // For homepage, simple "/" match. For other pages, check startsWith.
  // This simplified active logic works well for distinct top-level pages.
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 border-t border-border/40 bg-background/80 backdrop-blur-lg sm:hidden",
        "shadow-[0_-4px_15px_-5px_hsl(var(--foreground)/0.07)] rounded-t-2xl" 
      )}
    >
      <div className="mx-auto flex h-16 max-w-md items-center justify-around px-2">
        {NAV_ITEMS_BOTTOM.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 p-2 rounded-md transition-colors duration-200 ease-in-out",
                "text-muted-foreground hover:text-primary flex-1 min-w-0",
                active ? "text-primary" : "hover:bg-muted/50"
              )}
              aria-current={active ? "page" : undefined}
            >
              <Icon size={22} strokeWidth={active ? 2.5 : 2} />
              <span className={cn("text-xs font-medium", active ? "font-semibold" : "font-normal")}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
