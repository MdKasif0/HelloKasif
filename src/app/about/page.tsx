
// src/app/about/page.tsx
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import InteractiveCard from '@/components/interactive/InteractiveCard';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Lightbulb, Cpu, Palette, Download, GraduationCap, Sparkles, UserCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { Metadata } from 'next';
import BackToTopButton from '@/components/interactive/BackToTopButton';

const pageTitle = 'About Md Kasif Uddin | Aspiring Developer & Student';
const pageDescription = 'Learn more about Md Kasif Uddin, his philosophy, skills, background, and journey as an aspiring developer and Grade 12th PCM student.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/about', 
    type: 'profile',
    images: [
      {
        url: '/og-image-about.png', 
        width: 1200,
        height: 630,
        alt: 'Md Kasif Uddin - About Me',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['/twitter-image-about.png'], 
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16 md:py-24 relative z-10 min-h-[calc(100vh-8rem)]">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight animate-in fade-in slide-in-from-bottom-5 duration-700">The Aspiring Developer</h1>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <InteractiveCard className="lg:col-span-1 p-0 animate-in fade-in slide-in-from-left-10 duration-700">
            <Image
              src="https://placehold.co/600x750.png"
              alt="Md Kasif Uddin - Aspiring Developer"
              width={600}
              height={750}
              className="rounded-t-xl object-cover w-full h-auto"
              data-ai-hint="student portrait anime"
              priority
            />
            <CardHeader className="p-6">
              <CardTitle className="text-3xl text-center">Md Kasif Uddin</CardTitle>
              <CardDescription className="text-center text-primary mt-1">
                Grade 12th PCM Student & Aspiring Developer
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0 text-center">
              <Button asChild size="lg" className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground group rounded-lg shadow-md hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105">
                <Link href="/KasifUddin_Resume.pdf" target="_blank" rel="noopener noreferrer">
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
                  I believe technology is a powerful tool for solving real-world problems and creating innovative solutions. My passion lies in exploring how web development and artificial intelligence can be combined to build intuitive and impactful applications. I'm driven by curiosity and a desire to continuously learn and grow in this dynamic field.
                </p>
              </CardContent>
            </InteractiveCard>

            <InteractiveCard className="animate-in fade-in slide-in-from-right-10 duration-700 delay-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl"><GraduationCap className="h-7 w-7 text-primary" /> Education & Background</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg text-balance">
                  I am currently a Grade 12th student focusing on Physics, Chemistry, and Mathematics (PCM). This foundational knowledge in science and math fuels my analytical thinking and problem-solving approach to technology. I am actively self-learning and building projects to gain practical experience in software development.
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
                    "Basic Java", "Python", "JavaScript", "Web Development (HTML, CSS)", 
                    "AI/ML Concepts", "Problem Solving", "Logical Thinking", "Continuous Learning"
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
                  I aim to create user interfaces that are clean, intuitive, and user-friendly. While still learning, I focus on clear information hierarchy and responsive design to ensure a good experience across devices. I believe good design should make technology accessible and enjoyable to use.
                </p>
              </CardContent>
            </InteractiveCard>

            <InteractiveCard className="animate-in fade-in slide-in-from-right-10 duration-700 delay-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl"><Sparkles className="h-7 w-7 text-primary" /> Currently Exploring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg mb-3 text-balance">
                  I'm actively deepening my understanding of Artificial Intelligence and Machine Learning, and how these technologies can be integrated into web applications to create smarter and more personalized user experiences. I'm also exploring frameworks like Next.js and React.
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
