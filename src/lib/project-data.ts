
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
    slug: "imaginate-ai", // Updated slug
    title: "Imaginate",
    problem: "Creating a seamless web app that allows users to generate high-quality images using text prompts, leveraging AI models while ensuring smooth user experience.",
    myRole: "I independently handled the entire development of the project — from UI/UX design to backend integration with Hugging Face APIs. I also iteratively improved the product based on testing and feedback.",
    process: "I began by outlining the key features of the app, starting with a minimal interface to generate images from text input. Over time, I added more advanced features, enhanced styling, and improved loading feedback. Assistance from ChatGPT and Gemini helped troubleshoot issues and refine functionality.",
    solution: "An AI-powered web app that lets users generate images using text prompts through Hugging Face APIs. The app features a clean UI, responsive design, and dynamic loading states for better user experience.",
    result: "The final product is a fully functional and visually appealing AI image generator. It performs reliably and has been positively received for its simplicity and effectiveness.",
    // clientFeedback is null, so it's omitted
    imageUrl: "https://imaginate-ai.netlify.app/preview.png",
    imageHint: "AI image generation", // Adjusted hint to two words
    tags: ["Html", "CSS", "JavaScript", "Hugging Face"],
    liveLink: "https://imaginate-ai.netlify.app/",
    repoLink: "https://github.com/MdKasif0/Imaginate",
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
