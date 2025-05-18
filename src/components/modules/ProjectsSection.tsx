// src/components/modules/ProjectsSection.tsx
import Image from 'next/image';
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import InteractiveCard from '@/components/interactive/InteractiveCard';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 1,
    title: "Project Nova",
    description: "An innovative platform leveraging AI for personalized content curation and spatial navigation.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "abstract futuristic",
    tags: ["Next.js", "AI", "Tailwind CSS", "Spatial UI"],
    liveLink: "#",
    repoLink: "#",
  },
  {
    id: 2,
    title: "Chrono Scape",
    description: "A dynamic data visualization tool with adaptive depth perception for complex datasets.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "data visualization",
    tags: ["React", "D3.js", "WebSockets", "UX Design"],
    liveLink: "#",
    repoLink: "#",
  },
  {
    id: 3,
    title: "Aether Engine",
    description: "A modular UI framework for building immersive and interactive web environments.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "geometric pattern",
    tags: ["TypeScript", "Web Components", "Animation"],
    liveLink: "#",
    repoLink: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 animate-in fade-in duration-500">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight animate-in fade-in slide-in-from-bottom-5 duration-700">My Creations</h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-10">
        {projects.map((project, index) => (
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
                className="object-cover aspect-[3/2] w-full transition-transform duration-500 ease-in-out group-hover/project:scale-110 group-hover/project:rotate-1"
                data-ai-hint={project.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <CardHeader className="p-6 flex-grow">
              <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
              <CardDescription className="text-muted-foreground leading-relaxed min-h-[60px]">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-primary/30 hover:bg-primary/20">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex justify-between items-center border-t border-border/50 mt-auto">
              <Button variant="outline" asChild className="border-accent/50 text-accent hover:bg-accent/10 hover:text-accent hover:border-accent">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  Live Demo <ExternalLink size={16} className="ml-2" />
                </a>
              </Button>
              <Button variant="ghost" asChild className="text-muted-foreground hover:text-accent">
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                  <Github size={20} className="mr-2" /> Source
                </a>
              </Button>
            </CardFooter>
          </InteractiveCard>
        ))}
      </div>
    </section>
  );
}
