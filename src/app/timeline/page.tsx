
// src/app/timeline/page.tsx
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Briefcase, GraduationCap, Flag } from 'lucide-react';
import InteractiveCard from '@/components/interactive/InteractiveCard';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Journey | Timeline | PersonaVerse',
  description: 'Explore the career progression and educational path of Jane Doe, detailing key milestones and experiences.',
};

const allTimelineEvents = [
  {
    id: 1,
    icon: Flag,
    date: "Present",
    title: "Exploring New Frontiers",
    description: "Currently seeking challenging opportunities to leverage my skills in Next.js, AI, and spatial UI to build innovative digital products. Open to collaborations and full-time roles contributing to impactful projects.",
    category: "career",
  },
  {
    id: 2,
    icon: Briefcase,
    date: "2021 - 2023",
    title: "Senior Frontend Developer @ FutureScape",
    description: "Led the development of a cutting-edge data visualization platform, enhancing user insights through intuitive interfaces. Specialized in React, TypeScript, and performance optimization. Mentored junior developers and championed best practices in code quality and agile methodologies.",
    category: "career",
  },
  {
    id: 3,
    icon: Briefcase,
    date: "2019 - 2021",
    title: "Software Engineer @ CodeCrafters",
    description: "Developed and maintained scalable web applications using Node.js and React. Contributed to full-stack development cycles, from API design to frontend implementation, within an agile team environment. Focused on delivering robust and user-friendly solutions.",
    category: "career",
  },
  {
    id: 4,
    icon: GraduationCap,
    date: "2015 - 2019",
    title: "B.S. in Computer Science @ Tech University",
    description: "Graduated with honors. Specialized in software engineering, artificial intelligence, and human-computer interaction. Actively participated in the university coding club, leading several award-winning hackathon projects.",
    category: "education",
  },
   {
    id: 5,
    icon: Briefcase,
    date: "2014 - 2015",
    title: "Intern Software Developer @ InnovateStartups",
    description: "Gained initial industry experience working on a variety of web development tasks, including front-end UI enhancements and back-end script development. Contributed to a fast-paced startup environment and learned foundational software development practices.",
    category: "career",
  }
];

export default function FullTimelinePage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16 md:py-24 relative z-10 min-h-[calc(100vh-8rem)]">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">My Journey</h1>
          <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto text-balance">
            A chronological overview of my career milestones and educational background.
          </p>
        </div>
        <div className="relative max-w-3xl mx-auto px-4">
          {/* The timeline line */}
          <div className="absolute top-0 h-full w-1 bg-border left-1/2 -translate-x-1/2 hidden md:block"></div>
          
          {allTimelineEvents.map((event, index) => (
            <div 
              key={event.id} 
              className={`mb-12 md:mb-16 flex md:items-center w-full animate-in fade-in duration-700`}
              style={{ animationDelay: `${index * 150}ms` }}
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
      </main>
      <Footer />
    </>
  );
}

    