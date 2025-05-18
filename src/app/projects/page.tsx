
// src/app/projects/page.tsx
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import InteractiveCard from '@/components/interactive/InteractiveCard';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, MessageSquareQuote, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { allProjects, type Project } from '@/lib/project-data';
import type { Metadata } from 'next';
import BackToTopButton from '@/components/interactive/BackToTopButton'; // Added

export const metadata: Metadata = {
  title: 'All Projects | Case Studies | PersonaVerse',
  description: 'Explore a collection of innovative projects and case studies by Jane Doe, showcasing skills in web development, AI, and UI/UX design.',
};

const SectionBlock = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="mb-4">
    <h4 className="text-md font-semibold text-primary mb-1">{title}</h4>
    <p className="text-muted-foreground leading-relaxed text-sm">{children}</p>
  </div>
);

export default function AllProjectsPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16 md:py-24 relative z-10 min-h-[calc(100vh-8rem)]">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">My Creations</h1>
          <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto text-balance">
            A showcase of projects where technology meets creativity. Each case study dives into the problem, process, and solution.
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 xl:gap-10">
          {allProjects.map((project, index) => (
            <InteractiveCard 
              key={project.id} 
              className={`flex flex-col group/project animate-in fade-in slide-in-from-bottom-10 duration-500`}
              style={{ animationDelay: `${index * 150}ms` }} // Stagger animation
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover aspect-video w-full transition-transform duration-500 ease-in-out group-hover/project:scale-110 group-hover/project:rotate-1"
                  data-ai-hint={project.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <CardHeader className="p-6">
                <CardTitle className="text-3xl mb-2">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 flex-grow">
                <SectionBlock title="The Problem">{project.problem}</SectionBlock>
                <SectionBlock title="My Role">{project.myRole}</SectionBlock>
                
                {project.clientFeedback && (
                  <div className="mt-4 mb-4 p-4 border-l-4 border-accent bg-accent/10 rounded-r-md">
                    <h4 className="text-md font-semibold text-accent mb-1 flex items-center">
                      <MessageSquareQuote size={18} className="mr-2" /> Client Feedback
                    </h4>
                    <blockquote className="text-sm text-muted-foreground italic">"{project.clientFeedback}"</blockquote>
                  </div>
                )}

                <div className="mt-6 mb-2">
                  <h4 className="text-md font-semibold text-primary mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-primary/30 hover:bg-primary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-4 flex flex-wrap gap-4 justify-start items-center border-t border-border/50 mt-auto">
                <Button variant="default" asChild className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground group">
                  <Link href={`/projects/${project.slug}`}>
                    View Full Case Study <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                {project.liveLink && project.liveLink !== "#" && (
                  <Button variant="outline" asChild className="border-accent/50 text-accent hover:bg-accent/10 hover:text-accent hover:border-accent">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      Live Demo <ExternalLink size={16} className="ml-2" />
                    </a>
                  </Button>
                )}
                {project.repoLink && project.repoLink !== "#" && (
                  <Button variant="ghost" asChild className="text-muted-foreground hover:text-accent">
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                      <Github size={20} className="mr-2" /> View Source
                    </a>
                  </Button>
                )}
              </CardFooter>
            </InteractiveCard>
          ))}
        </div>
      </main>
      <Footer />
      <BackToTopButton />
    </>
  );
}
