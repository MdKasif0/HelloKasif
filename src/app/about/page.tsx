
// src/app/about/page.tsx
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import InteractiveCard from '@/components/interactive/InteractiveCard';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Lightbulb, Cpu, Palette, Download, GraduationCap, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { Metadata } from 'next';
import BackToTopButton from '@/components/interactive/BackToTopButton';

const pageTitle = 'About Jane Doe | Visionary Developer & Digital Artisan';
const pageDescription = 'Learn more about Jane Doe, her philosophy, skills, background, and journey as a visionary developer and digital artisan based in PersonaVerse.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/about', // metadataBase in layout.tsx will prepend the siteURL
    type: 'profile',
    images: [
      {
        url: '/og-image-about.png', // Replace with a specific OG image for the about page
        width: 1200,
        height: 630,
        alt: 'Jane Doe - About Me',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['/twitter-image-about.png'], // Replace with a specific Twitter image for the about page
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16 md:py-24 relative z-10 min-h-[calc(100vh-8rem)]">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight animate-in fade-in slide-in-from-bottom-5 duration-700">The Architect Behind the Verse</h1>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <InteractiveCard className="lg:col-span-1 p-0 animate-in fade-in slide-in-from-left-10 duration-700">
            <Image
              src="https://placehold.co/600x750.png"
              alt="Jane Doe - Digital Architect"
              width={600}
              height={750}
              className="rounded-t-xl object-cover w-full h-auto"
              data-ai-hint="futuristic developer portrait"
              priority
            />
            <CardHeader className="p-6">
              <CardTitle className="text-3xl text-center">Jane Doe</CardTitle>
              <CardDescription className="text-center text-primary mt-1">
                Visionary Developer & Digital Artisan
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0 text-center">
              <Button asChild size="lg" className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground group rounded-lg shadow-md hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105">
                <Link href="/placeholder-resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download Resume <Download size={18} className="ml-2" />
                </Link>
              </Button>
            </CardContent>
          </InteractiveCard>

          <div className="lg:col-span-2 space-y-8">
            <InteractiveCard className="animate-in fade-in slide-in-from-right-10 duration-700 delay-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl"><Lightbulb className="h-7 w-7 text-primary" /> My Philosophy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg text-balance">
                  I believe in the transformative power of technology when thoughtfully applied. My passion lies in crafting digital experiences that are not only functional and efficient but also intuitive, memorable, and deeply engaging. I strive to bridge the gap between complex systems and human understanding, creating interfaces that feel natural and empower users. Every line of code, every design choice, is an opportunity to solve a problem elegantly and to make a positive impact. I'm driven by curiosity, a commitment to quality, and the pursuit of innovation that truly serves people.
                </p>
              </CardContent>
            </InteractiveCard>

            <InteractiveCard className="animate-in fade-in slide-in-from-right-10 duration-700 delay-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl"><GraduationCap className="h-7 w-7 text-primary" /> Education & Background</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg text-balance">
                  My journey into the digital realm began with a Bachelor of Science in Computer Science from Tech University, where I graduated with honors. This foundational experience equipped me with a strong understanding of software engineering principles, data structures, algorithms, and the theoretical underpinnings of computation. Beyond formal education, I am a lifelong learner, constantly exploring emerging technologies, design patterns, and development methodologies to stay at the forefront of this ever-evolving field.
                </p>
              </CardContent>
            </InteractiveCard>
            
            <InteractiveCard className="animate-in fade-in slide-in-from-right-10 duration-700 delay-400">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl"><Cpu className="h-7 w-7 text-primary" /> Core Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-muted-foreground text-lg">
                  {[
                    "Next.js & React Ecosystem", "TypeScript & JavaScript (ESNext)", "Tailwind CSS & Modern CSS", 
                    "Node.js & Server-Side Logic", "AI Integration & Genkit", "Spatial UI/UX Principles",
                    "Server Components & Actions", "API Design & Integration", "Database Management (SQL/NoSQL concepts)",
                    "Version Control (Git & GitHub)", "Agile Methodologies", "Performance Optimization & Web Vitals"
                  ].map(skill => (
                    <li key={skill} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle-2 mr-2 mt-1 text-accent flex-shrink-0"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </InteractiveCard>

            <InteractiveCard className="animate-in fade-in slide-in-from-right-10 duration-700 delay-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl"><Palette className="h-7 w-7 text-primary" /> Design & Interaction Philosophy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg text-balance">
                  I focus on creating intuitive and aesthetically pleasing user interfaces. This involves thoughtful use of microinteractions, subtle animations, adaptive depth, and clear visual hierarchies to guide users and make digital environments feel more alive and responsive. I believe that good design is not just about how it looks, but how it feels and functions, ultimately enhancing the user's ability to achieve their goals effortlessly.
                </p>
              </CardContent>
            </InteractiveCard>

            <InteractiveCard className="animate-in fade-in slide-in-from-right-10 duration-700 delay-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl"><Sparkles className="h-7 w-7 text-primary" /> Currently Exploring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg mb-3 text-balance">
                  The world of technology is constantly evolving, and so is my skillset. I'm currently delving deeper into advanced AI prompting techniques, exploring the potential of WebAssembly for performance-critical applications, and studying scalable architectures for data-intensive systems. I'm also passionate about ethical AI development and its societal implications.
                </p>
              </CardContent>
            </InteractiveCard>
          </div>
        </div>
      </main>
      <Footer />
      <BackToTopButton />
    </>
  );
}
