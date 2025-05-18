
// src/app/projects/[slug]/page.tsx
import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { allProjects, getProjectBySlug, type Project } from '@/lib/project-data';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Github, MessageSquareQuote } from 'lucide-react';
import BackToTopButton from '@/components/interactive/BackToTopButton'; // Added

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Project Not Found | PersonaVerse',
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const ogImageUrl = project.imageUrl.startsWith('http') ? project.imageUrl : `${siteUrl}/${project.imageUrl}`;


  return {
    title: `${project.title} | Case Study | PersonaVerse`,
    description: project.problem, // Use project problem as description
    openGraph: {
      title: `${project.title} | PersonaVerse`,
      description: project.problem,
      url: `${siteUrl}/projects/${project.slug}`,
      images: [
        {
          url: ogImageUrl,
          width: 600, // Assuming placeholder dimensions, adjust if needed
          height: 400,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | PersonaVerse`,
      description: project.problem,
      images: [ogImageUrl],
    },
  };
}

const SectionBlock = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="mb-6">
    <h2 className="text-2xl font-semibold text-primary mb-2">{title}</h2>
    <div className="prose prose-invert text-muted-foreground max-w-none leading-relaxed dark:prose-invert">
      {typeof children === 'string' ? <p>{children}</p> : children}
    </div>
  </div>
);


export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16 md:py-24 relative z-10 min-h-[calc(100vh-8rem)]">
        <div className="max-w-4xl mx-auto">
          <Button variant="outline" asChild className="mb-8 group">
            <Link href="/projects"> {/* Changed link to /projects */}
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to All Projects
            </Link>
          </Button>

          <article>
            <header className="mb-10">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
                {project.title}
              </h1>
              <div className="relative overflow-hidden rounded-xl shadow-2xl mb-8 aspect-video w-full">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                  data-ai-hint={project.imageHint}
                  priority // This is likely above the fold
                />
              </div>
            </header>

            <Card className="bg-card/70 backdrop-blur-md border-border/50 shadow-xl mb-10">
              <CardContent className="p-6 md:p-8 space-y-8">
                <SectionBlock title="The Problem">{project.problem}</SectionBlock>
                <SectionBlock title="My Role">{project.myRole}</SectionBlock>
                <SectionBlock title="The Process">{project.process}</SectionBlock>
                <SectionBlock title="The Solution">{project.solution}</SectionBlock>
                <SectionBlock title="The Result">{project.result}</SectionBlock>
                
                {project.clientFeedback && (
                  <div className="mt-6 p-6 border-l-4 border-accent bg-accent/10 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-accent mb-2 flex items-center">
                      <MessageSquareQuote size={22} className="mr-2" /> Client Feedback
                    </h3>
                    <blockquote className="text-muted-foreground italic text-lg">
                      "{project.clientFeedback}"
                    </blockquote>
                  </div>
                )}

                <div className="mt-8 pt-6 border-t border-border/30">
                  <h3 className="text-xl font-semibold text-primary mb-3">Technologies Used:</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 px-3 py-1 text-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 md:p-8 pt-4 flex flex-wrap gap-4 justify-start items-center border-t border-border/50">
                {project.liveLink && project.liveLink !== "#" && (
                  <Button variant="default" asChild className="bg-gradient-to-r from-accent to-purple-600 hover:from-accent/90 hover:to-purple-600/90 text-accent-foreground">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      View Live Demo <ExternalLink size={16} className="ml-2" />
                    </a>
                  </Button>
                )}
                {project.repoLink && project.repoLink !== "#" && (
                  <Button variant="outline" asChild className="text-muted-foreground hover:text-accent">
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                      <Github size={20} className="mr-2" /> View Source
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          </article>
        </div>
      </main>
      <Footer />
      <BackToTopButton />
    </>
  );
}
