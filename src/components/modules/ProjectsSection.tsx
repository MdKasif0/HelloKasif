// src/components/modules/ProjectsSection.tsx
import Image from 'next/image';
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import InteractiveCard from '@/components/interactive/InteractiveCard';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, MessageSquareQuote } from 'lucide-react'; // Added MessageSquareQuote
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 1,
    title: "Project Nova",
    problem: "Users faced overwhelming information in a vast digital library, struggling to find relevant content efficiently.",
    myRole: "Lead Developer & UI/UX Architect. Spearheaded the AI engine development, front-end implementation (Next.js), and overall user experience strategy.",
    process: "Conducted user research to identify pain points. Designed and prototyped a spatial navigation concept. Developed AI algorithms for dynamic content personalization. Iteratively tested and refined based on user feedback.",
    solution: "Project Nova: An innovative platform featuring an intuitive 3D interface and AI-driven content suggestions that adapt to individual user behavior and preferences.",
    result: "Led to a 40% increase in user engagement, a 25% reduction in time-to-find content, and overwhelmingly positive feedback on the novel user interface.",
    clientFeedback: "Nova has transformed how we interact with our data. Jane's vision and execution were exceptional!",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "abstract futuristic",
    tags: ["Next.js", "AI", "Tailwind CSS", "Spatial UI", "Genkit"],
    liveLink: "#",
    repoLink: "#",
  },
  {
    id: 2,
    title: "Chrono Scape",
    problem: "Complex datasets were difficult to interpret using traditional 2D charts, limiting insights and decision-making.",
    myRole: "Senior Frontend Engineer. Focused on developing the core visualization components using D3.js and integrating real-time data streams via WebSockets.",
    process: "Explored various data visualization techniques. Developed custom D3.js components for adaptive depth perception. Implemented WebSocket integration for live data updates. Optimized rendering for large datasets.",
    solution: "Chrono Scape: A dynamic data visualization tool offering adaptive depth perception for exploring complex, multi-dimensional datasets in real-time.",
    result: "Enabled users to identify previously unseen patterns and correlations, leading to a 15% improvement in data-driven decision-making speed. Praised for its performance and clarity.",
    clientFeedback: "The depth and clarity Chrono Scape provides are unparalleled. It's become an indispensable tool for our analysts.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "data visualization",
    tags: ["React", "D3.js", "WebSockets", "UX Design", "Performance"],
    liveLink: "#",
    repoLink: "#",
  },
  {
    id: 3,
    title: "Aether Engine",
    problem: "Building immersive and interactive web environments was time-consuming and lacked a standardized approach, leading to inconsistent user experiences.",
    myRole: "Core Framework Developer. Designed and implemented the modular architecture, animation system, and developer APIs for the Aether Engine.",
    process: "Researched existing UI frameworks and game engine principles. Developed a component-based architecture using TypeScript and Web Components. Focused on performance and ease of use for developers.",
    solution: "Aether Engine: A modular UI framework designed for creating highly interactive and immersive web environments with a consistent look and feel.",
    result: "Reduced development time for interactive web features by 30%. Adopted by multiple teams, enhancing product quality and developer productivity across the organization.",
    // clientFeedback: "Optional feedback here", // Example of no feedback
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "geometric pattern",
    tags: ["TypeScript", "Web Components", "Animation", "Framework Design"],
    liveLink: "#",
    repoLink: "#",
  },
];

const SectionBlock = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="mb-4">
    <h4 className="text-md font-semibold text-primary mb-1">{title}</h4>
    <p className="text-muted-foreground leading-relaxed text-sm">{children}</p>
  </div>
);

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 animate-in fade-in duration-500">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight animate-in fade-in slide-in-from-bottom-5 duration-700">My Creations: Case Studies</h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 xl:gap-10"> {/* Changed to 1 column for better case study readability */}
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
              <SectionBlock title="The Process">{project.process}</SectionBlock>
              <SectionBlock title="The Solution">{project.solution}</SectionBlock>
              <SectionBlock title="The Result">{project.result}</SectionBlock>
              
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
            <CardFooter className="p-6 pt-0 flex flex-wrap gap-4 justify-start items-center border-t border-border/50 mt-auto">
              <Button variant="outline" asChild className="border-accent/50 text-accent hover:bg-accent/10 hover:text-accent hover:border-accent">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  Live Demo <ExternalLink size={16} className="ml-2" />
                </a>
              </Button>
              <Button variant="ghost" asChild className="text-muted-foreground hover:text-accent">
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                  <Github size={20} className="mr-2" /> View Source
                </a>
              </Button>
            </CardFooter>
          </InteractiveCard>
        ))}
      </div>
    </section>
  );
}
