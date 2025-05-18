
// src/lib/project-data.ts
export interface Project {
  id: number;
  slug: string;
  title: string;
  problem: string;
  myRole: string;
  process: string;
  solution: string;
  result: string;
  clientFeedback?: string;
  imageUrl: string;
  imageHint: string;
  tags: string[];
  liveLink?: string;
  repoLink?: string;
}

export const allProjects: Project[] = [
  {
    id: 1,
    slug: "project-nova",
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
    slug: "chrono-scape",
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
    slug: "aether-engine",
    title: "Aether Engine",
    problem: "Building immersive and interactive web environments was time-consuming and lacked a standardized approach, leading to inconsistent user experiences.",
    myRole: "Core Framework Developer. Designed and implemented the modular architecture, animation system, and developer APIs for the Aether Engine.",
    process: "Researched existing UI frameworks and game engine principles. Developed a component-based architecture using TypeScript and Web Components. Focused on performance and ease of use for developers.",
    solution: "Aether Engine: A modular UI framework designed for creating highly interactive and immersive web environments with a consistent look and feel.",
    result: "Reduced development time for interactive web features by 30%. Adopted by multiple teams, enhancing product quality and developer productivity across the organization.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "geometric pattern",
    tags: ["TypeScript", "Web Components", "Animation", "Framework Design"],
    liveLink: "#",
    repoLink: "#",
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return allProjects.find(project => project.slug === slug);
};
