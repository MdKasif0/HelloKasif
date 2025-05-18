
// src/components/modules/ProjectsSection.tsx
// This is now the HOMEPAGE version of the Projects Section (teaser)
'use client';

import Image from 'next/image';
import { CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import InteractiveCard from '@/components/interactive/InteractiveCard';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowRight, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { allProjects } from '@/lib/project-data';

const INITIAL_PROJECTS_COUNT_HOMEPAGE = 2; // Show only 2 on homepage

const SectionBlock = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="mb-4">
    <h4 className="text-md font-semibold text-primary mb-1">{title}</h4>
    <p className="text-muted-foreground leading-relaxed text-sm text-balance">{children}</p>
  </div>
);

export default function ProjectsSection() {
  const projectsToShow = allProjects.slice(0, INITIAL_PROJECTS_COUNT_HOMEPAGE);

  return (
    <section id="projects" className="py-16 md:py-24 animate-in fade-in duration-500">
      <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-5 duration-700">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">A Peek at My Work</h2>
        <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto text-balance">
          Here are a couple of projects I've enjoyed building. There's more to see on the full projects page!
        </p>
      </div>
      <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 xl:gap-10">
        {projectsToShow.map((project, index) => (
          <InteractiveCard 
            key={project.id} 
            className={`flex flex-col group/project animate-in fade-in slide-in-from-bottom-10 duration-500`}
            style={{ animationDelay: `${index * 200}ms` }}
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
              <SectionBlock title="The Challenge">{project.problem}</SectionBlock>
              <div className="mt-6 mb-2">
                <h4 className="text-md font-semibold text-primary mb-2">Core Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => ( // Show a few key tags
                    <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-primary/30 hover:bg-primary/20">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && <Badge variant="outline">+{project.tags.length-3} more</Badge>}
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-4 flex flex-wrap gap-4 justify-start items-center border-t border-border/50 mt-auto">
              <Button variant="default" asChild className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground group">
                <Link href={`/projects/${project.slug}`}>
                  View Case Study <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
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
      {allProjects.length > INITIAL_PROJECTS_COUNT_HOMEPAGE && (
        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group border-primary/50 text-primary hover:bg-primary/10 hover:text-primary hover:border-primary transition-all duration-300 transform hover:scale-105"
          >
            <Link href="/projects">
              Explore All Projects <Eye className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      )}
    </section>
  );
}
    
