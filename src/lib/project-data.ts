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
  clientFeedback?: string | null;
  imageUrl: string;
  imageHint: string; // Max two words
  tags: string[];
  liveLink?: string;
  repoLink?: string;
}

export const allProjects: Project[] = [
  {
    id: 4,
    slug: "bytechat",
    title: "ByteChat",
    problem: "In today’s fast-paced digital world, people need a single, secure, and modern platform that combines text messaging, media sharing, voice/video calls, and AI assistance without compromising on privacy or user experience. Most existing apps are either too heavy, lack robust encryption, or fail to deliver smooth performance across devices.",
    myRole: "I independently developed ByteChat as a Progressive Web App (PWA) — overseeing the complete process from concept design and UI/UX to backend integration and WebRTC-based real-time communication. I implemented secure messaging, HD calls, AI features, and performance optimizations to ensure the app runs flawlessly on both desktop and mobile devices.",
    process: "I started by defining the core pillars of ByteChat: speed, security, and versatility. Using Next.js with the App Router and Tailwind CSS for a sleek, responsive UI, I integrated Firebase for authentication, real-time Firestore updates, and cloud storage. For calls, I implemented PeerJS over WebRTC data channels to enable crystal-clear peer-to-peer voice and video communication. I also integrated an AI assistant powered by Google Gemini for contextual user help. The PWA functionality ensures users can install and use ByteChat offline-ready like a native app. Rigorous testing and iterative improvements refined performance, responsiveness, and UI polish.",
    solution: "A modern, feature-rich Progressive Web App offering real-time one-on-one and group messaging, file sharing, emoji reactions, typing indicators, HD voice/video calls, AI-powered chat assistance, and customizable user profiles — all running securely on WebRTC and Firebase. The app features light/dark themes, responsive layouts, and is installable as a PWA for a native-like experience.",
    result: "The final ByteChat PWA delivers a fast, secure, and premium messaging experience that works seamlessly across devices. Its smooth animations, minimal latency, and strong security make it stand out. The integrated AI assistant adds unique value, while PWA support enhances accessibility and engagement.",
    clientFeedback: null,
    imageUrl: "/bytechat-cover.png",
    imageHint: "chat app",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN UI",
      "Firebase",
      "Firestore",
      "Authentication",
      "WebRTC",
      "PeerJS",
      "AI",
      "Google Gemini",
      "PWA",
      "Responsive Design"
    ],
    liveLink: "https://bytechat-v3.netlify.app/",
    repoLink: "https://github.com/MdKasif0/ByteChat-V3"
  },
  {
    id: 1,
    slug: "imaginate-ai",
    title: "Imaginate",
    problem: "Creating a seamless web app that allows users to generate high-quality images using text prompts, leveraging AI models while ensuring smooth user experience.",
    myRole: "I independently handled the entire development of the project — from UI/UX design to backend integration with Hugging Face APIs. I also iteratively improved the product based on testing and feedback.",
    process: "I began by outlining the key features of the app, starting with a minimal interface to generate images from text input. Over time, I added more advanced features, enhanced styling, and improved loading feedback. Assistance from ChatGPT and Gemini helped troubleshoot issues and refine functionality.",
    solution: "An AI-powered web app that lets users generate images using text prompts through Hugging Face APIs. The app features a clean UI, responsive design, and dynamic loading states for better user experience.",
    result: "The final product is a fully functional and visually appealing AI image generator. It performs reliably and has been positively received for its simplicity and effectiveness.",
    imageUrl: "https://raw.githubusercontent.com/MdKasif0/HelloKasif/refs/heads/master/public/Images/output_copy_600x400_1.png",
    imageHint: "AI interface",
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
    clientFeedback: "Not applicable as this was a personal project.",
    imageUrl: "https://raw.githubusercontent.com/MdKasif0/HelloKasif/b6b03e2ca12e6e5bc66fa496c78bab57bf7b3fa4/public/Images/file_00000000d2b061f6a720db46ac426feb_copy_600x400.png",
    imageHint: "notes app", 
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
    imageHint: "abstract code",
    tags: ["TypeScript", "Web Components", "Animation", "Framework Design"],
    liveLink: "#",
    repoLink: "#",
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return allProjects.find(project => project.slug === slug);
};
