
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
    slug: "imaginate-ai",
    title: "Imaginate",
    problem: "Creating a seamless web app that allows users to generate high-quality images using text prompts, leveraging AI models while ensuring smooth user experience.",
    myRole: "I independently handled the entire development of the project — from UI/UX design to backend integration with Hugging Face APIs. I also iteratively improved the product based on testing and feedback.",
    process: "I began by outlining the key features of the app, starting with a minimal interface to generate images from text input. Over time, I added more advanced features, enhanced styling, and improved loading feedback. Assistance from ChatGPT and Gemini helped troubleshoot issues and refine functionality.",
    solution: "An AI-powered web app that lets users generate images using text prompts through Hugging Face APIs. The app features a clean UI, responsive design, and dynamic loading states for better user experience.",
    result: "The final product is a fully functional and visually appealing AI image generator. It performs reliably and has been positively received for its simplicity and effectiveness.",
    imageUrl: "https://imaginate-ai.netlify.app/preview.png",
    imageHint: "AI interface", // Updated hint
    tags: ["Html", "CSS", "JavaScript", "Hugging Face"],
    liveLink: "https://imaginate-ai.netlify.app/",
    repoLink: "https://github.com/MdKasif0/Imaginate",
  },
  {
    id: 2,
    slug: "note-it-app",
    title: "Note It",
    problem: "Users needed a simple, efficient way to manage daily notes and tasks without relying on complex third-party applications or cumbersome setups.",
    myRole: "As a personal learning initiative, I undertook the complete design and development of this web application. My goal was to build a practical tool while honing my fundamental web development skills.",
    process: "The project started with a structural outline, focusing on core functionalities like adding, viewing, and deleting notes and tasks. I then iteratively enhanced the user interface and expanded features based on self-testing and usability principles, aiming for an intuitive experience.",
    solution: "A lightweight and responsive note-taking web application built with HTML, CSS, and JavaScript. 'Note It' provides a clean interface for users to effortlessly manage their notes and track tasks.",
    result: "The outcome is a fully functional, aesthetically pleasing, and user-friendly note-taking web app. This self-driven project was instrumental in my learning journey and received positive feedback for its simplicity and utility.",
    imageUrl: "/images/projects/note-it.png",
    imageHint: "UI code", // Updated hint
    tags: ["HTML", "CSS", "JavaScript", "Web App", "Productivity", "Self Project"],
    liveLink: "https://note-it0.netlify.app/",
    repoLink: "https://github.com/MdKasif0/Note_It.git"
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
    imageHint: "abstract code", // Updated hint
    tags: ["TypeScript", "Web Components", "Animation", "Framework Design"],
    liveLink: "#",
    repoLink: "#",
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return allProjects.find(project => project.slug === slug);
};

