// src/app/timeline/page.tsx
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Code2, AppWindow, Brain, GraduationCap } from 'lucide-react'; // Specific icons for events
import InteractiveCard from '@/components/interactive/InteractiveCard';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';
import BackToTopButton from '@/components/interactive/BackToTopButton';

const pageTitle = 'My Path So Far | Journey of Md Kasif Uddin | HelloKasif';
const pageDescription = 'Explore the career progression, key milestones, and educational path of Md Kasif Uddin, an aspiring developer, through a detailed interactive timeline on HelloKasif.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/timeline',
    type: 'website',
     images: [
      {
        url: '/og-image-timeline.png', // Ensure this image exists in public/og-image-timeline.png
        width: 1200,
        height: 630,
        alt: 'Md Kasif Uddin - Career Timeline',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['/twitter-image-timeline.png'], // Ensure this image exists in public/twitter-image-timeline.png
  },
};

const allTimelineEvents = [
  {
    year: "2023",
    title: "Began Web Development Journey",
    description: "Started learning HTML, CSS, and JavaScript. Built small projects like to-do apps, calculators, and note-takers to practice concepts.",
    icon: Code2,
  },
  {
    year: "2024",
    title: "Developed 'Note It' Web App",
    description: "Designed and launched a note-taking web application using core frontend technologies. It featured task management and user-friendly UI.",
    icon: AppWindow,
  },
  {
    year: "2024",
    title: "Started AI/ML Integration Research",
    description: "Began exploring how to integrate AI/ML models into web apps using tools like TensorFlow.js and APIs. Working towards combining intelligent backend models with responsive UIs.",
    icon: Brain,
  },
  {
    year: "2025",
    title: "Preparing for IIT JEE",
    description: "Pursuing Class 12 with a strong academic focus while balancing web development and personal tech projects.",
    icon: GraduationCap,
  }
];

export default function FullTimelinePage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16 md:py-24 relative z-10 min-h-[calc(100vh-8rem)]">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <h1 className="font-mono text-4xl md:text-5xl font-bold tracking-tight">My Path So Far</h1>
          <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto text-balance">
            A look at the key chapters in my professional and educational story.
          </p>
        </div>
        <div className="relative max-w-3xl mx-auto px-4">
          {/* The timeline line */}
          <div className="absolute top-0 h-full w-1 bg-border left-1/2 -translate-x-1/2 hidden md:block"></div>
          
          {allTimelineEvents.map((event, index) => (
            <div 
              key={index} 
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
                       <p className="text-sm font-semibold text-primary">{event.year}</p>
                    </div>
                    <p className="text-sm font-semibold text-primary hidden md:block">{event.year}</p>
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
      <BackToTopButton />
    </>
  );
}
