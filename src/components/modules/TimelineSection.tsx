
// src/components/modules/TimelineSection.tsx
// This is now the HOMEPAGE version of the Timeline Section (teaser)
'use client';

import { Briefcase, GraduationCap, Flag, GanttChartSquare } from 'lucide-react';
import InteractiveCard from '@/components/interactive/InteractiveCard';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const homepageTimelineEvents = [ // Keep a small set for homepage, full set on /timeline page
  {
    id: 1,
    icon: Flag,
    date: "Present",
    title: "Exploring New Frontiers",
    description: "Currently seeking challenging opportunities to leverage my skills in Next.js, AI, and spatial UI to build innovative digital products.",
    category: "career",
  },
  {
    id: 2,
    icon: Briefcase,
    date: "2021 - 2023",
    title: "Senior Frontend Developer @ FutureScape",
    description: "Led the development of a cutting-edge data visualization platform. Specialized in React, TypeScript, and performance optimization.",
    category: "career",
  },
  // Full list will be on /timeline page
];

export default function TimelineSection() {
  const eventsToShow = homepageTimelineEvents;

  return (
    <section id="timeline" className="py-16 md:py-24 animate-in fade-in duration-500">
       <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-5 duration-700">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">My Journey So Far</h2>
        <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto text-balance">
          Key milestones from my career and educational path.
        </p>
      </div>
      <div className="relative container max-w-3xl mx-auto px-4">
        {/* The timeline line */}
        <div className="absolute top-0 h-full w-1 bg-border left-1/2 -translate-x-1/2 hidden md:block"></div>
        
        {eventsToShow.map((event, index) => (
          <div 
            key={event.id} 
            className={`mb-12 md:mb-16 flex md:items-center w-full animate-in fade-in duration-700`}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left md:ml-auto'}`}>
              <InteractiveCard className={`p-0 transform-style-preserve-3d ${index % 2 === 0 ? 'slide-in-from-left-10' : 'slide-in-from-right-10'}`}>
                <CardHeader className="p-6 relative">
                  {/* Timeline Dot & Icon */}
                  <div className={`absolute hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg border-4 border-background top-1/2 -translate-y-1/2 ${index % 2 === 0 ? '-right-6 translate-x-1/2' : '-left-6 -translate-x-1/2'}`}>
                    <event.icon size={24} />
                  </div>
                   {/* Mobile Icon */}
                  <div className="md:hidden flex items-center mb-3">
                     <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-md mr-3">
                        <event.icon size={20} />
                     </div>
                     <p className="text-sm font-semibold text-primary">{event.date}</p>
                  </div>
                  <p className="text-sm font-semibold text-primary hidden md:block">{event.date}</p>
                  <CardTitle className="text-2xl mt-1">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <CardDescription className="text-muted-foreground leading-relaxed text-balance">
                    {event.description}
                  </CardDescription>
                </CardContent>
              </InteractiveCard>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12 md:mt-16">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group border-primary/50 text-primary hover:bg-primary/10 hover:text-primary hover:border-primary transition-all duration-300 transform hover:scale-105"
          >
            <Link href="/timeline">
              View Full Journey <GanttChartSquare className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
    </section>
  );
}

    