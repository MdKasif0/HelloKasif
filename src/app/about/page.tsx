// src/app/about/page.tsx
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import InteractiveCard from '@/components/interactive/InteractiveCard';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Lightbulb, Cpu, Palette, Download, Eye, GraduationCap, Sparkles, UserCircle, Code2, Brain, GitMerge, CheckCircle2, MonitorPlay } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { Metadata } from 'next';
import BackToTopButton from '@/components/interactive/BackToTopButton';

const pageTitle = 'About Md Kasif Uddin | Aspiring Developer & Student | HelloKasif';
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
        url: '/og-image-about.png', // Ensure this image exists in public/og-image-about.png
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
    images: ['/twitter-image-about.png'], // Ensure this image exists in public/twitter-image-about.png
  },
};

const skillsData = [
  { category: "Programming Languages", skills: ["Basic Java", "Python", "JavaScript"], icon: Code2 },
  { category: "Web Technologies", skills: ["HTML", "CSS", "JavaScript"], icon: MonitorPlay },
  { category: "Tools & Platforms", skills: ["Git", "GitHub", "Netlify"], icon: GitMerge },
  { category: "Learning", skills: ["Basics of AI/ML integration with web apps"], icon: Brain },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16 md:py-24 relative z-10 min-h-[calc(100vh-8rem)]">
        <h1 className="font-mono text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight animate-in fade-in slide-in-from-bottom-5 duration-700">The Aspiring Developer</h1>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <InteractiveCard className="lg:col-span-1 p-0 animate-in fade-in slide-in-from-left-10 duration-700">
            <Image
              src="/images/profile.jpg" // Updated to local path
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
            <CardContent className="p-6 pt-0 text-center space-y-3">
              <Button asChild size="lg" className="w-full bg-gradient-to-r from-orange-400 via-pink-500 to-fuchsia-500 text-black font-semibold hover:opacity-90 group rounded-lg shadow-md hover:shadow-pink-500/40 transition-all duration-300 transform hover:scale-105">
                <Link href="/KasifUddin_Resume.pdf" target="_blank" rel="noopener noreferrer" download>
                  Download Resume <Download size={18} className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full group">
                <Link href="/KasifUddin_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  View Resume Online <Eye size={18} className="ml-2" />
                </Link>
              </Button>
            </CardContent>
          </InteractiveCard>

          <div className="lg:col-span-2 space-y-8">
            <InteractiveCard className="animate-in fade-in slide-in-from-right-10 duration-700 delay-200">
              <CardHeader>
                <CardTitle className="font-mono flex items-center gap-3 text-2xl"><Lightbulb className="h-7 w-7 text-primary" /> My Philosophy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg text-balance">
                  I believe in continuous learning and applying knowledge through real-world projects. As a budding developer, I find purpose in creating solutions that are practical, accessible, and scalable. Curiosity and consistency drive my journey in the tech world.
                </p>
              </CardContent>
            </InteractiveCard>

            <InteractiveCard className="animate-in fade-in slide-in-from-right-10 duration-700 delay-300">
              <CardHeader>
                <CardTitle className="font-mono flex items-center gap-3 text-2xl"><GraduationCap className="h-7 w-7 text-primary" /> Education & Background</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg text-balance">
                  I am currently a Class 12 student pursuing PCM (Physics, Chemistry, Mathematics) and preparing for India's prestigious IIT entrance examination. Alongside academics, I dedicate time to learning web technologies and exploring AI/ML integration.
                </p>
              </CardContent>
            </InteractiveCard>
            
            <InteractiveCard className="animate-in fade-in slide-in-from-right-10 duration-700 delay-400">
              <CardHeader>
                <CardTitle className="font-mono flex items-center gap-3 text-2xl"><Cpu className="h-7 w-7 text-primary" /> Core Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skillsData.map((skillCategory) => (
                  <div key={skillCategory.category}>
                    <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center font-mono">
                      <skillCategory.icon className="h-6 w-6 mr-2 text-accent" />
                      {skillCategory.category}
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-muted-foreground text-lg">
                      {skillCategory.skills.map(skill => (
                        <li key={skill} className="flex items-start">
                          <CheckCircle2 size={18} className="mr-2 mt-1 text-primary flex-shrink-0" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </InteractiveCard>

            <InteractiveCard className="animate-in fade-in slide-in-from-right-10 duration-700 delay-500">
              <CardHeader>
                <CardTitle className="font-mono flex items-center gap-3 text-2xl"><Palette className="h-7 w-7 text-primary" /> Design & Interaction Philosophy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg text-balance">
                   I focus on simplicity and functionality in UI/UX. My aim is to build interfaces that are user-centric and minimalistic, especially for utility-driven apps like note-taking and productivity tools.
                </p>
              </CardContent>
            </InteractiveCard>

            <InteractiveCard className="animate-in fade-in slide-in-from-right-10 duration-700 delay-600">
              <CardHeader>
                <CardTitle className="font-mono flex items-center gap-3 text-2xl"><Sparkles className="h-7 w-7 text-primary" /> Currently Exploring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg mb-3 text-balance">
                  I’m currently exploring ways to integrate AI and ML models into web applications, learning about APIs, model deployment, and real-time AI interactions in frontend apps.
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
